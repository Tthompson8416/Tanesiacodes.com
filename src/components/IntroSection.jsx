import { useState, useEffect } from "react";
import ProfileImage from "../assets/images/desktop.png";

const IntroSection = () => {
  const [typedText, setTypedText] = useState('introText');
  const [showWelcome, setShowWelcome] = useState(false);
  const [showIntro, setShowIntro] = useState(false);

    // Full text to be typed out
  const introText = "My name is Tanesia Thompson, I'm a front-end developer based in Richmond, Virginia. With a passion for combining technical precision and design-driven problem-solving, I aim to craft innovative web experiences that balance aesthetic appeal with functional excellence. I specialize in creating dynamic, user-focused digital solutions through expertise in HTML, CSS, JavaScript, and React to enhance usability and engagement.";


  useEffect(() => {
    // Trigger welcome text animation after component mounts
    const welcomeTimer = setTimeout(() => {
      setShowWelcome(true);
    }, 1000);

    
     let typingIndex = 0;
const typingInterval = showIntro ? setInterval(() => {
  if (typingIndex < introText.length) {
    setTypedText(introText.slice(0, typingIndex + 1));
    typingIndex++;
  } else {
    setTypedText(introText);
    clearInterval(typingInterval);
  }
}, 40) : null;

    // Trigger intro text animation after welcome
    const introTimer = setTimeout(() => {
      setShowIntro(true);
    }, 2500);

    return () => {
      clearTimeout(welcomeTimer);
      clearTimeout(introTimer);
           
            if (typingInterval) clearInterval(typingInterval);
          };
        }, [showIntro]);
    

  return (
    <div>
      <div className="min-h-screen bg-custom-dark flex flex-col items-center justify-center p-0 pt-18 lg:pb-56 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-white"></div>

        <img
          src={ProfileImage}
          alt="Profile"
          className="mb-10 mr-5 rounded-lg w-[600px] h-[500px] object-cover"
        />

        <h1
          className={`text-4xl md:text-5xl text-white mb-4 transition-transform duration-1000 ease-in-out ${
            showWelcome ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Welcome.
        </h1>

        <p
          className={`text-lg md:text-xl text-gray-200 text-center transition-opacity mr-10 ml-10 p-5 pl-2 pr-2 duration-1000 ease-in-out ${
            showIntro ? "opacity-100" : "opacity-0"
          }`}
        >
          {typedText}<span className={`inline-block w-1 h-5 bg-white animate-blink ${showIntro ? 'visible' : 'invisible'}`}></span>
        </p>
      </div>
    </div>
  );
};

export default IntroSection;
