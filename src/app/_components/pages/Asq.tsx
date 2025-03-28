import React from "react";

const Asq = () => {
  return (
    <div className="px-2 py-4 text-base h-full overflow-y-auto">
      <p className="text-2xl font-bold">Anime Song Quiz</p>
      <br />
      <p className="text-xl font-bold">Short description</p>
      <p>
        A quiz game where you have to listen to anime songs and guess the title
        of the anime
      </p>
      <br />
      <p className="text-xl font-bold">Technologies</p>
      <p>Kotlin, Android Studio, Firebase</p>
      <br />
      <p className="text-xl font-bold">The story</p>
      <p>
        My sister and I are <strong>massive anime fans</strong>. We spent a lot
        of our early teenage years watching anime, and{" "}
        <strong>we loved anime songs</strong>. There was one game on the App
        Store in the early iPhone era called{" "}
        <strong>&quot;Anime Quizz&quot;</strong> (yes, with two z&apos;s) that
        my sister and I really liked. It was a quiz game where you had to guess
        the anime starting from a song, a character, etc. Right before my
        graduation, we saw that the app was no longer available, and we thought
        it would have been nice to build a similar game ourselves. So, she did
        all the design, I wrote the code, and we both worked on the content
        (gathering songs, cutting them, and associating them with the anime of
        origin).
        <br />
        <br />I didn&apos;t know React Native existed at the time, so I thought
        it would have been better to release it on Android first. So, I
        downloaded <strong>Android Studio</strong> and started learning how to
        develop an Android app.
        <br />
        <br />I already knew <strong>Java</strong> at the time, but I saw that
        the Android dev community was starting to transition to{" "}
        <strong>Kotlin</strong>, a better version of Java. So, I immediately
        jumped into learning it (it wasn&apos;t hard).
        <br />
        <br />
        To be honest, aside from learning the tools, it wasn&apos;t very
        challenging. The most annoying part was actually creating the content.
        For the rest, it was a really simple interface; once you understood how
        to work with XML and stuff, it&apos;s pretty easy.
        <br />
        <br />
        At some point, we realized that <strong>
          the bundle was too big
        </strong>{" "}
        because we put all the MP3 files locally in the app. So, I decided to
        move everything to the <strong>cloud</strong>. I used{" "}
        <strong>Firebase</strong> storage. And while we were at it, I also
        implemented a <strong>&quot;tracking&quot; system</strong> that allowed
        me to see how many people had completed each level.
        <br />
        <br />
        The app actually did okay, <strong>2000+ downloads</strong>. So, I
        decided to develop an <strong>iOS version</strong> using{" "}
        <strong>Swift</strong>. Not so hard, just learn an entire new language
        and replicate everything. The thing is, the app never got into the App
        Store because it is much more strict than the Google Play Store about{" "}
        <strong>copyright</strong>. I ended up fighting with the review team
        because they kept replying with robot-like messages about the issue.
        Apparently, 30 seconds of anime songs on an innocent mobile game would
        do irreparable damage to the Japanese music industry.
        <br />
        <br />
        It was so much fun. My first real project that got used by people all
        over the world (mainly US, FR, LATAM and south east Asia). It even made
        me about <strong>€70</strong> of ad revenue!
      </p>
    </div>
  );
};

export default Asq;
