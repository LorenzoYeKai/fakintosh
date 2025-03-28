import React from "react";

const Calc = () => {
  return (
    <div className="px-2 py-4 text-base h-full overflow-y-auto">
      <p className="text-2xl font-bold">Calcisticamente Parlando</p>
      <br />
      <p className="text-xl font-bold">Short description</p>
      <p>
        A football app that allowed to listen to the &quot;Calcisticamente
        Parlando Podcast&quot;, watch live Serie A scores, Football player
        ranking and read the &quot;Calcisticamente Parlando Blog&quot;
      </p>
      <br />
      <p className="text-xl font-bold">Technologies</p>
      <p>React Native, Expo, Javascript, Puppeteer for web scraping, AWS</p>
      <br />
      <p className="text-xl font-bold">The story</p>
      <p>
        In the middle of the <strong>COVID</strong> pandemic (2020/21), I
        graduated with my Bachelor&apos;s degree in computer science. <br />
        One of my best friends, who is super passionate about football, told me
        that he had started a podcast and wanted a sort of “companion app” for
        it. I thought, “I just built an app (Anime Song Quiz), it could be fun
        building another one,” so that&apos;s what I did.
        <br /> This time, it was absolutely crucial to have the app on both the
        Google Play Store and Apple App Store right at the beginning, so I chose
        to build it using <strong>React Native</strong>. At the time, it
        wasn&apos;t that popular yet, but the benefits were clear, and unlike
        Flutter, it felt like home to someone familiar with React.
        <br /> We prototyped the app, built it, and launched it in, I think,{" "}
        <strong>two weeks</strong>. The obvious challenges were, of course, how
        to use the technologies, but here are some not-so-obvious ones: <br />
        <br />
        1. <strong>How to play the podcast</strong>: My friend recorded and
        published his podcast with <strong>Spreaker</strong>, a sort of podcast
        agency (?), which then distributed the podcast on all the major
        platforms (Spotify, Apple Podcasts, etc.). Ok, Spreaker has an{" "}
        <strong>API</strong>, so it&apos;s very simple, just call it, get my
        friend&apos;s podcast, and play it on the app, right? Yes, but actually,
        no. First of all, React Native wasn&apos;t that developed at the time;
        handling audio playing wasn&apos;t that straightforward. I started
        developing using Expo, but I needed some native libraries, so I ended up
        ejecting the project. Then, Spreaker gives you the audio stream,
        sometimes with ads at the beginning, and for some reason we didn&apos;t
        want the ads. So I had to figure out how to cut the ads, if any, once I
        got the audio stream. <br />
        <br />
        2. <strong>How to get match scores in real-time</strong>: This was by
        far the biggest challenge. All the APIs I could find were behind a
        paywall. So what I did was create a cron job on <strong>AWS</strong>{" "}
        that used <strong>Puppeteer</strong> to scrape Serie A&apos;s official
        website every one minute and save the result on{" "}
        <strong>DynamoDB</strong>. This approach was actually a mess because it
        wasn&apos;t actually real-time, and every time Serie A changed its
        interface, the cron job broke. But it was the best option we had. Look,
        we were two broke recent graduates. <br />
        <br />
        The app wasn&apos;t successful, obviously, because, honestly{" "}
        <strong>no one wanted it</strong>. It was completely useless. You could
        already listen to the podcast on every major platform, and you could
        watch match scores live on literally every football app and on Serie
        A&apos;s official website. There was no point for the app to exist. It
        was <strong>fun</strong>, though, and in the end,{" "}
        <strong>I&apos;m proud</strong> of what I built. I learned new
        technologies and built something with literally zero dollars that worked
        (maybe not perfectly) by thinking outside the box.
      </p>
    </div>
  );
};

export default Calc;
