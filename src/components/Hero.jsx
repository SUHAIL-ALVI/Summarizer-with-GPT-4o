"use client";
import { logo } from "../assets";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all" 
const Hero = () => {
  
  useGSAP(() =>{

    const heroSplit = new SplitText("#hero-heading", {
      type: "chars, words"
    });
    const heroSplit2 = new SplitText(".orange_gradient", {
      type: "chars, words"
    });
    const heroDescription = new SplitText("#hero-description", {
      type: "chars, lines"
    });

    gsap.from(heroSplit.chars, {

      yPercent: 100,
      duration: 0.5,
      ease: "expo.out",
      stagger: 0.05
    });
    gsap.from(heroSplit2.chars, {
      xPercent: 100,
      duration: 0.1,
      delay: 0.3,
      ease: "expo.out",
      stagger: 0.02
    });
    gsap.from(heroDescription.lines, {
      yPercent: 100,
      duration: 0.5,
      ease: "power2.inOut",
      delay: 1.8,
      stagger: 0.05
    });

  })

  return (
    <header className="w-full flex justify-center items-center flex-col ">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="sumz_logo" className="w-28 object-contain" />

        <button
          type="button"
          onClick={() =>
            window.open("https://github.com/SUHAIL-ALVI", "_blank")
          }
          className="black_btn"
        >
          GitHub
        </button>
      </nav>

      <h1 className="head_text" id="hero-heading">
        Summarize Articles with <br className="max-md:hidden" />
        <span className="text-orange-400">OpenAI GPT-4o</span>
      </h1>
      <h2 className="desc" id="hero-description">
        Enhance your productivity with QuickRead, an open-source tool that
        condenses lengthy articles into succinct summaries for easier
        comprehension.
      </h2>
    </header>
  );
};

export default Hero;
