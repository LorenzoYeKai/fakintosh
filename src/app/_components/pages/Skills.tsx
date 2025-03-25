import React from "react";

const Skills = () => {
  return (
    <div className="px-2 py-4 text-base h-full overflow-y-auto">
      <p className="text-2xl font-bold">My skills and tools</p>
      <br />
      <p>
        I&apos;m a software engineer, so my skills are mostly related to coding,
        but that doesn&apos;t mean I lack experience in other fields. Most of my
        experience comes from building my startup. In the end, skills are just
        tools, and I believe it&apos;s important to learn what fits best for
        what I want to build. <br />
        Here are my skills, in order of relevance:
      </p>
      <br />
      <div className="flex gap-2 items-center">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png"
          className="w-6 h-6"
          alt="ts"
        />
        <p className="text-xl font-bold">Typescript</p>
      </div>
      <br />
      <p>
        My language of choice for the web. <br />I use it daily for all my web
        projects (within the framework of choice).
        <br /> In fact, this very website is built with Typescript (Next.js).
        (JavaScript is automatically included)
      </p>
      <br />
      <div className="flex gap-2 items-center">
        <img
          src="https://img.icons8.com/fluent-systems-filled/512/FFFFFF/nextjs.png"
          className="w-6 h-6"
          alt="next"
        />
        <p className="text-xl font-bold">Next.js</p>
      </div>
      <br />
      <p>
        My go-to framework for the web, the developer experience is just great,
        especially with Vercel. <br />
        Again, this very website is built with it.
      </p>
      <br />
      <div className="flex gap-2 items-center">
        <img
          src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
          className="w-6 h-6"
          alt="react"
        />
        <p className="text-xl font-bold">React.js</p>
      </div>
      <br />
      <p>
        My first web framework.
        <br /> I usually use Next.js now, but for simple static websites, I
        might still prefer React.
      </p>
      <br />
      <div className="flex gap-2 items-center">
        <img
          src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
          className="w-6 h-6"
          alt="rn"
        />
        <p className="text-xl font-bold">React Native</p>
      </div>
      <br />
      <p>
        Being able to build mobile apps with a single codebase and familiar
        syntax?
        <br />
        Sign me up! <br />
        Unless something highly specific requires native development, this is my
        tool of choice for mobile.
      </p>
      <br />
      <div className="flex gap-2 items-center">
        <img
          src="https://images.icon-icons.com/2107/PNG/512/file_type_solidity_icon_130156.png"
          className="w-6 h-6"
          alt="sol"
        />
        <p className="text-xl font-bold">Solidity</p>
      </div>
      <br />
      <p>
        There&apos;s really not much of a choice when developing smart contracts
        on EVM-compatible blockchains.
        <br /> I&apos;ve used Solidity to develop quite a few smart contracts
        for my startup. <br /> It&apos;s fun!
      </p>
      <br />
      <div className="flex gap-2 items-center">
        <img
          src="https://www.citypng.com/public/uploads/preview/hd-white-storage-host-clouds-icon-png-7017516950392613uoyg9we5l.png?v=2025012103"
          className="w-6 h-6"
          alt="cloud"
        />
        <p className="text-xl font-bold">Cloud providers</p>
      </div>
      <br />
      <p>
        I&apos;ve tried quite a few cloud providers, so it doesn&apos;t make
        sense to write a full paragraph on each one. Here&apos;s a quick
        rundown:
        <br />
        <strong>
          <a href="https://cloud.google.com/" target="_blank">
            Google Cloud Platform (GCP)
          </a>
        </strong>
        : My startup&apos;s entire infrastructure is hosted on GCP. Honestly,
        while it&apos;s a decent product overall, I chose it mainly because we
        received $100K in credits. Otherwise, it wouldn&apos;t be my provider of
        choice.
        <br />
        <strong>
          <a href="https://aws.amazon.com/" target="_blank">
            Amazon Web Services (AWS)
          </a>
        </strong>
        : I used AWS to build my apps and in the early stages of my startup. It
        has its absurdities (mainly the billing system), but I still prefer it
        over GCP.
        <br />
        <strong>
          <a href="https://vercel.com/home" target="_blank">
            Vercel
          </a>
        </strong>
        : My go-to choice for hosting Next.js projects (not surprisingly).
        <br />
        <strong>
          <a href="https://supabase.com/" target="_blank">
            Supabase
          </a>
        </strong>
        : A great company with a great product (backed by YC). I&apos;m using it
        for a side project, and so far, I&apos;m really liking it.
      </p>
      <br />
      <div className="flex gap-2 items-center">
        <img src="/svg/coding.svg" className="w-6 h-6" alt="lang" />
        <p className="text-xl font-bold">Other languages</p>
      </div>
      <br />
      <p>
        I&apos;m always curious to learn new languages and their applications.
        Here are some languages I use less frequently:
        <br />
        <strong>Python</strong>: It&apos;s hard to hate Python. I mainly use it
        for scripting (e.g. downloading music from YouTube... maybe I
        shouldn&apos;t have said that).
        <br />
        <strong>C</strong>: The lowest-level language I know. It was actually
        the first language I learned at university, and it taught me how a
        computer really works. I think every software engineer should learn C,
        even if they never use it in their career.
        <br />
        <strong>Java</strong>: Learned it for a university course. Not a big
        fan, but I understand its importance.
        <br />
        <strong>Kotlin</strong>: Used it to build my first Android app.
        It&apos;s essentially an evolution of Java, and much better.
        <br />
        <strong>Swift</strong>: Used it to build my first iOS app. I
        haven&apos;t used it enough to have a strong opinion on it yet.
      </p>
      <br />
      <div className="flex gap-2 items-center">
        <img src="/svg/languages.svg" className="w-6 h-6" alt="lang2" />
        <p className="text-xl font-bold">Spoken languages</p>
      </div>
      <br />
      <p>
        I was born and raised in Italy by Chinese parents, so I&apos;m lucky to
        be able to speak three languages:
        <br />
        <strong>🇮🇹 Italian (native)</strong>
        <br />
        <strong>🇨🇳 Chinese (native)</strong>
        <br />
        <strong>🇺🇸🇬🇧 English (fluent)</strong>
      </p>
      <br />
      <div className="flex gap-2 items-center">
        <img src="/svg/softskill.svg" className="w-6 h-6" alt="soft" />
        <p className="text-xl font-bold">Soft skills</p>
      </div>
      <br />
      <p>
        Unlike hard skills, soft skills are hard (pun not intended... or is it?)
        to measure.
        <br />
        We all list things like &quote;excellent communicator,&quote;
        &quote;team player,&quote; and &quote;fast learner&quote; on our
        resumes.
        <br /> Of course, these skills are crucial, but they can only be truly
        demonstrated by actually working together.
      </p>
      <br />
      <p className="text-xl font-bold">Random obvious stuff</p>
      <br />
      <p>
        <strong>Git</strong>
        <br />
        <strong>SQL</strong>
        <br />
        <strong>HTML/CSS</strong>
        <br />
        <strong>Tailwind CSS</strong>
        <br />
        <strong>Node.js</strong>
        <br />
        <strong>Docker</strong>
        <br />
        <strong>VS Code</strong>
        <br />
        <strong>Expo (React Native)</strong>
        <br />
        <strong>Playing the piano </strong>
        <br />
        <strong>Juggling while drunk</strong>
      </p>
      <br />
    </div>
  );
};

export default Skills;
