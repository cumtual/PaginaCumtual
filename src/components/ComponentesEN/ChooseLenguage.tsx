import { useEffect, useState } from "react";

const ChooseLanguage = () => {
  const [showLanguagePrompt, setShowLanguagePrompt] = useState(false);

  useEffect(() => {
    // Verificar si ya se mostró el prompt
    const hasSeenPrompt = sessionStorage.getItem("hasSeenLanguagePrompt");
    if (!hasSeenPrompt) {
      const userLang = navigator.language;
      if (userLang.startsWith("en")) {
        setShowLanguagePrompt(true);
      }
    }
  }, []);

  const handleClosePrompt = () => {
    setShowLanguagePrompt(false);
    sessionStorage.setItem("hasSeenLanguagePrompt", "true"); // Marcar como visto
  };

  if (!showLanguagePrompt) return null;

  return (
    <div className=" mb-5 text-[#FFF] flex flex-col justify-center items-center">
      <div className="flex items-center justify-around w-full">
      <p className="text-gradient font-semibold">Switch to English Language?</p>
      <button type="button" onClick={handleClosePrompt} className="block font-semibold text-xl md:hidden">
          x
        </button>
      </div>
      <div className="flex justify-around w-full gap-2">
        <a href="/en-US" className="hover:text-[#aaa] transition-colors delay-100 duration-200 ease-in-out">Yes</a>
        <button type="button" onClick={handleClosePrompt} className="hidden md:block hover:text-[#aaa] transition-colors delay-100 duration-200 ease-in-out">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ChooseLanguage;
