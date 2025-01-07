import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Imagenes = () => {
  const images = [
    { src: "/imagenesConvertidas/luis.webp", text: "Luis Martinez", rol: "Developer" },
    { src: "/imagenesConvertidas/josueicono.webp", text: "Josue Flores", rol: "Developer" },
    { src: "/imagenesConvertidas/fer.webp", text: "Fernando Arias", rol: "UX/UI Designer" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex gap-4 md:gap-8 justify-center">
      {images.map((image, index) => (
        <motion.div
          key={index}
          className="relative overflow-hidden w-1/4"
          animate={{
            opacity: currentIndex === index ? 1 : 0.7, 
            scale: currentIndex === index ? 1.2 : 1,
          }}
          transition={{ duration: 0.5 }}
        >
          <motion.img
            src={image.src}
            alt={`Image ${index + 1}`}
            className="w-full h-full object-center object-cover rounded-lg"
            whileHover={{ scale: 1.1 }} 
            transition={{ duration: 0.3 }}
          />
          {currentIndex === index && (
            <motion.div
              className="absolute inset-0 bg-[#000]/10 flex flex-col justify-end items-start md:items-center text-white text-lg  font-lighttransition-opacity duration-300 bottom-0 text-[#FFF] border-2 border-green-cumtual rounded-lg md:px-2"
              animate={{
                opacity: 1,
              }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-[#000]/50 rounded-lg px-1 py-1 w-full">
              <p className="text-xs md:text-lg text-start md:text-center text-gradient font-bold">{image.text}</p>
              <p className="font-light text-xs md:text-lg text-start md:text-center">{image.rol}</p>
              </div>
            </motion.div>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default Imagenes;
