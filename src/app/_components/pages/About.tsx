import React from "react";

const About = () => {
  return (
    <div className="px-2 py-4 text-base overflow-y-auto">
      <p className="text-2xl font-bold">Welcome to my desktop! 🖥️ </p>
      <br />
      <p>
        I&apos;m Lorenzo, a builder at heart. Over the past three years,
        I&apos;ve been busy creating a startup from scratch—wearing all the
        hats, breaking (and fixing) things, and learning more than I ever
        thought possible. It&apos;s been a wild ride, and while it&apos;s not
        taking off like I hoped, the lessons were worth the journey.{" "}
      </p>
      <br />
      <p>
        But building isn&apos;t just work for me—it&apos;s a way of life. I love{" "}
        <strong>learning, experimenting, and creating</strong>, whether
        it&apos;s writing code, making music, playing games, or just doing
        something ridiculous for fun. Life&apos;s too short to be boring.{" "}
      </p>
      <br />
      <br />
      <p className="text-xl font-bold">About this website </p>
      <br />
      <p>
        This isn&apos;t your typical portfolio. Instead of a static page with a
        list of skills (🥱), I wanted to make something{" "}
        <strong>interactive</strong>—a playground that feels like a familiar OS
        but with a few surprises along the way. Navigate through the
        &quot;files,&quot;
        {/* mess around with the "terminal,"  */}
        and keep an eye out for <strong>hidden Easter eggs</strong>.
      </p>
      <br />
      <p>
        Have fun exploring, and if you want to chat, you know where to find me.
        🚀{" "}
      </p>
      <br />
      <p>
        <strong>Note</strong>: I tried to make this website as mobile friendly
        as possible, but being the mimic of a desktop interface, it&apos;s best
        to navigate it on a desktop device. <br /> Also, this website will be
        updated with new content in the future.
      </p>
    </div>
  );
};

export default About;
