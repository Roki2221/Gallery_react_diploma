import React, { useState, useEffect } from 'react';
import './ScrollToTopButton.css';
import sprite from '../../img/icons.svg';
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Додаємо обробник події для відстеження прокрутки сторінки
    window.addEventListener('scroll', toggleVisibility);

    // Прибираємо обробник події при видаленні компоненту
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Перевіряємо, чи поточне положення прокрутки дозволяє відображення кнопки
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Функція для плавного прокручування наверх сторінки
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      {isVisible && (
        <svg className="scroll-to-top-button" onClick={scrollToTop}>
          <use href={sprite + '#icon-circle-up'}></use>
        </svg>
      )}
    </div>
  );
};

export default ScrollToTopButton;
