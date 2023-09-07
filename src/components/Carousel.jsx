import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AnimeCarousel = ({ animeData }) => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState('left');


  const slideVariants = {
    hiddenRight: {
      x: "100%",
      opacity: 0,
    },
    hiddenLeft: {
      x: "-100%",
      opacity: 0,
    },
    visible: {
      x: "0",
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.5,
      },
    },
  };

  
  const handleNext = () => {
    setDirection("right");
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === animeData.length ? 0 : prevIndex + 1
    );
  };
  
  const handlePrevious = () => {
    setDirection("left");
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? animeData.length - 1 : prevIndex - 1
    );
  };
  
  const handleDotClick = (index) => {
    setDirection(index > currentIndex ? "right" : "left");
    setCurrentIndex(index);
  };

  return (
    <div className="carousel">
      {
        <AnimatePresence>
          <motion.img
            key={currentIndex}
            src={animeData[currentIndex].image}
            variants={slideVariants}
            initial={direction === "right" ? "hiddenRight" : "hiddenLeft"}
            animate="visible"
            exit="exit"
          />
        </AnimatePresence>
      }
      <div key={animeData[currentIndex]._id} className="anime-card">
        <h2>{animeData[currentIndex].title}</h2>
        <p>Alternative Titles: {animeData[currentIndex].alternativeTitles.join(', ')}</p>
        <p>Ranking: {animeData[currentIndex].ranking}</p>
        <p>Genres: {animeData[currentIndex].genres.join(', ')}</p>
        <p>Episodes: {animeData[currentIndex].episodes}</p>
        <p>Status: {animeData[currentIndex].status}</p>
        <p>Synopsis: {animeData[currentIndex].synopsis}</p>
        <a href={animeData[currentIndex].link}>More Info</a>
      </div>
      <div className="slide_direction">
        <div className="left" onClick={handlePrevious}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            viewBox="0 96 960 960"
            width="20"
          >
            <path d="M400 976 0 576l400-400 56 57-343 343 343 343-56 57Z" />
          </svg>
        </div>
        <div className="right" onClick={handleNext}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            viewBox="0 96 960 960"
            width="20"
          >
            <path d="m304 974-56-57 343-343-343-343 56-57 400 400-400 400Z" />
          </svg>
        </div>
      </div>
      <div className="carousel-indicator">
        {animeData.map((_, index) => (
        <div
          key={index}
          className={`dot ${currentIndex === index ? "active" : ""}`}
          onClick={() => handleDotClick(index)}
        >
        </div>
        ))}
      </div>
    </div>
  );
};
  
  export default AnimeCarousel;