"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";
import { motion } from "framer-motion";
import Image from "next/image";
import cy from "./nnn.webp";
import buddies from "./buddies.webp";

const fadeInAnimation = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.4, ease: "easeIn" } },
};

const ValentineApp = () => {
  const [step, setStep] = useState(1);
  const [countdown, setCountdown] = useState(5);
  const [showFinalPage, setShowFinalPage] = useState(false);

  const nextStep = () => setStep((prev) => prev + 1);

  useEffect(() => {
    if (step === 8) {
      const interval = setInterval(() => {
        setCountdown((prev) => {
          if (prev === 1) {
            clearInterval(interval);
            setShowFinalPage(true);
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [step]);

  useEffect(() => {
    if (showFinalPage) {
      confetti({
        particleCount: 150,
        spread: 100,
        origin: { y: 0.6 },
        colors: ["#ff0000", "#ff66b2", "#ffcc00", "#ffffff"],
      });
    }
  }, [showFinalPage]);

  return (
    <div className="flex bg-[#111] flex-col justify-center items-center h-screen text-center px-5 font-poppins">
      {!showFinalPage ? (
        <motion.div
          key={step}
          variants={fadeInAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
          className="w-full"
        >
          {step === 8 ? (
            <div className="flex flex-col items-center justify-center">
              <Image
                src={cy}
                width={250}
                height={250}
                alt="Cynthia"
                className="w-full max-w-[250px] rounded-lg shadow-lg"
              />
              <h1 className="text-3xl md:text-5xl font-bold text-white">
                Just negodu this beauty as we countdown... ⏳
              </h1>
              <p className="text-lg md:text-2xl text-red-400 font-semibold">
                {countdown}
              </p>
            </div>
          ) : (
            <>
              <h1 className="text-3xl md:text-5xl font-bold text-white">
                {step === 1 && "Hello CY! 😊💕"}
                {step === 2 && "So yeah... 😅"}
                {step === 3 && "I was wondering... 🤔"}
                {step === 4 && "So i divorced my ex-wife (my PC) 👨‍💻💔"}
                {step === 5 && "It was gonna be a game 🎮"}
                {step === 6 && "But I realized... 💡"}
                {step === 7 && "The subject of Love would be boring to talk about ❤️"}
                {step === 8 && "I could spend the whole day... ⏰"}
                {step === 9 && "I've missed you... 🥹"}
                {step === 10 && "I know it's work o'clock ⏰💼"}
                {step === 11 && (
                  <span className="flex items-center justify-center gap-2">
                    Almost there... 🚀
                    <Sparkles className="text-yellow-400 animate-spin" />
                  </span>
                )}
              </h1>
              <p className="text-lg md:text-2xl text-gray-300 mt-3">
                {step === 1 &&
                  "Mio (My Own), as I'd fondly call you 💞. \n You might wonder what's happening here, \n but let's go... I'll explain! ✨"}
                {step === 2 &&
                  "This boy messed up, right? 😅😂"}
                {step === 3 &&
                  "I don't do Valentine's ❤️, but this baby girl loves it... so I'm making it special in my own way for her! 🎉"}
                {step === 4 &&
                  "I spent the whole Valentine with my ex wife(PC) 💻 \n and left the most important person... YOU! 😢💖"}
                {step === 5 &&
                  "It was supposed to be a game 🎯, but there wasn't enough time... 😴"}
                {step === 6 &&
                  "So here's this instead – our(me and my ex wife) punishment for not \n making your day special! 🎁💝"}
                {step === 7 && "if i don't talk about this short, amazing, \n beautiful, interesting, wonderful princess i've got here"}
                {step === 8 &&
                  "If I want to make this work, I need to bring you into my work  🌍💞 \n checkout the rhymess bahhhhh"}
                {step === 9 &&
                  "To analyze what a wonder you are! 🌟"}
                {step === 10 &&
                  "if i could make a wish right now, it'll be to appear before you, \n give you a peck😘 and whisper in your ears that \n we're gonna be alright! 💑"}
                {step === 11 && "I don't want to take much of your time... \n just know you're special to your mimi! 🌹"}
              </p>
            </>
          )}

          {step < 8 && (
            <motion.button
              onClick={nextStep}
              whileTap={{ scale: 0.9 }}
              className="mt-10 px-6 py-3 m-10 rounded-full bg-red-500 text-white text-lg font-semibold shadow-md hover:bg-red-600 transition fixed bottom-5 right-5 flex items-center gap-1"
            >
              <span>Next</span>
              <ArrowRight />
            </motion.button>
          )}
        </motion.div>
      ) : (
        <motion.div
          variants={fadeInAnimation}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center justify-center h-screen"
        >
          <h1 className="text-6xl md:text-8xl font-bold text-red-500 animate-pulse">
            Happy Valentine’s Day, CY! ❤️🎉
          </h1>
          <Image
            src={buddies}
            width={250}
            height={250}
            alt="Buddies"
            className="w-full max-w-[250px] rounded-lg shadow-lg"
          />
        </motion.div>
      )}
    </div>
  );
};

export default ValentineApp;
