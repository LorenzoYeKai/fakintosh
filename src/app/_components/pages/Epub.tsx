"use client";

import React, { useState, useRef, useEffect } from "react";
import * as ePub from "epubjs";

interface NavItem {
  label: string;
  href: string;
  subnav?: NavItem[];
}

const Epub: React.FC = () => {
  const [book, setBook] = useState<ePub.Book>();
  const [rendition, setRendition] = useState<ePub.Rendition>();
  const viewerRef = useRef<HTMLDivElement>(null);
  const [fileName, setFileName] = useState<string>("");
  const [toc, setToc] = useState<NavItem[]>([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Handle file upload
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type === "application/epub+zip") {
      setFileName(file.name);
      const reader = new FileReader();

      reader.onload = (e) => {
        const arrayBuffer = e.target?.result as ArrayBuffer;
        const newBook = ePub.default(arrayBuffer);
        setBook(newBook);
      };

      reader.readAsArrayBuffer(file);
    } else {
      alert("Please upload a valid EPUB file");
    }
  };

  // Initialize the book rendering when book changes
  useEffect(() => {
    if (book && viewerRef.current) {
      const newRendition = book.renderTo(viewerRef.current, {
        flow: "paginated",
        width: "100%",
        height: "100%",
        spread: "auto",
        allowScriptedContent: true,
      });

      newRendition.display();
      setRendition(newRendition);

      // Load table of contents
      book.loaded.navigation.then((nav: any) => {
        console.log(nav.toc);
        setToc(nav.toc);
      });

      // Clean up when component unmounts or book changes
      return () => {
        book.destroy();
      };
    }
  }, [book]);

  // Navigation handlers
  const goToNext = () => {
    rendition?.next();
  };

  const goToPrev = () => {
    rendition?.prev();
  };

  // Chapter selection handler
  const handleChapterSelect = (href: string) => {
    if (!rendition || !book) return;

    try {
      // Find the corresponding spine item
      const spineItem = book.spine.get(href);

      console.log(href);

      console.log(book.navigation.toc);

      if (spineItem) {
        // Use spine item's index to navigate
        rendition.display(spineItem.href).catch((err: Error) => {
          console.error("Error displaying spine item:", err);
          // Fallback to direct cleaned href
          rendition.display(href);
        });
      } else {
        // If spine item not found, try direct path
        rendition.display(href).catch((err: Error) => {
          console.error("Error displaying chapter:", err);
        });
      }
    } catch (err) {
      console.error("Chapter navigation error:", err);
    }
  };

  // Render TOC items recursively
  const renderToc = (items: NavItem[], depth = 0) => {
    return (
      <ul className={`${depth > 0 ? "ml-4" : ""}`}>
        {items.map((item, index) => (
          <li key={index} className="my-1 list-none">
            <button
              onClick={() => handleChapterSelect(item.href)}
              className="text-left w-full text-blue-600 hover:text-blue-800 transition-colors"
            >
              {item.label}
            </button>
            {item.subnav && renderToc(item.subnav, depth + 1)}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="h-full flex flex-col gap-4">
      <div className="p-4">
        <input
          id="epub-upload"
          type="file"
          accept=".epub"
          onChange={handleFileUpload}
        />
        {fileName && <p className="text-sm ">Selected file: {fileName}</p>}
      </div>

      <div className="w-full h-full shadow-lg relative">
        {/* {book ? (
          <div
            className="w-full md:w-1/3 transition-all h-full duration-300 bg-gray-100 p-4 rounded-lg overflow-auto top-0 absolute z-10"
            style={{
              left: isSidebarOpen ? 0 : "-100%",
            }}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Table of Contents</h2>

              <button
                className="bg-transparent border-none cursor-pointer"
                onClick={() => setIsSidebarOpen(false)}
              >
                ✕
              </button>
            </div>
            {isSidebarOpen && toc.length > 0 && renderToc(toc)}
          </div>
        ) : null}
        {isSidebarOpen ? null : (
          <button
            className="shadow-lg absolute top-0 left-0 cursor-pointer z-10"
            onClick={() => setIsSidebarOpen(true)}
          >
            ☰
          </button>
        )} */}
        <div
          ref={viewerRef}
          className="w-full h-full overflow-auto"
          style={{
            backgroundColor: book ? "white" : "transparent",
          }}
        >
          {book ? null : (
            <div className="w-full h-full flex flex-col justify-center items-center">
              <p className="text-xl font-bold">
                📖 ~Welcome to the Epub reader~ 📖
              </p>
              <p className="text-base">
                I wanted a handy tool that allowed me to read Epub files from my
                pc or my phone, so I built it.
              </p>
              <p className="text-base">
                You can use it if you want, just upload a file and read it.
              </p>
            </div>
          )}
        </div>
      </div>
      {book ? (
        <div className="flex justify-between p-4">
          <button
            onClick={goToPrev}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors disabled:bg-gray-400"
          >
            Previous
          </button>
          <button
            onClick={goToNext}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors disabled:bg-gray-400"
          >
            Next
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default Epub;
