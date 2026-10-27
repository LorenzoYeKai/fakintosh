import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = site.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #1f3764, #627bb5)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: 960,
            borderRadius: 20,
            overflow: "hidden",
            background: "#fcfcfc",
            boxShadow: "0 20px 50px #16243c",
          }}
        >
          <div
            style={{ display: "flex", padding: "22px 30px", background: "#e6e6e6", fontSize: 24 }}
          >
            about.md
          </div>
          <div style={{ display: "flex", flexDirection: "column", padding: 48, color: "#171717" }}>
            <div style={{ display: "flex", fontSize: 56, fontWeight: 700 }}>{site.owner}</div>
            <div style={{ display: "flex", fontSize: 36, marginTop: 24 }}>Welcome to my desktop!</div>
            <div style={{ display: "flex", fontSize: 24, marginTop: 36 }}>www.lorenzoye.com</div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
