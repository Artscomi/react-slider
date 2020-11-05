import React, { useState } from "react";
import styled from "@emotion/styled";
import Slide from "./Slide";
import Arrow from './Arrow';

const Slider = ({ slides }) => {
  const width = window.innerWidth;
  const [state, setState] = useState({
    activeIndex: 0,
    translate: 0,
    transition: 0.8,
  });

  const { activeIndex, translate, transition } = state;

  const nextSlide = () => {
    if (activeIndex === slides.length - 1) {
      return setState({
        ...state,
        translate: 0,
        activeIndex: 0,
      });
    }

    setState({
      ...state,
      activeIndex: activeIndex + 1,
      translate: (activeIndex + 1) * width,
    });
  };

  const prevSlide = () => {
    if (activeIndex === 0) {
      return setState({
        ...state,
        translate: (slides.length - 1) * width,
        activeIndex: slides.length - 1,
      });
    }

    setState({
      ...state,
      activeIndex: activeIndex - 1,
      translate: (activeIndex - 1) * width,
    });
  };

  return (
    <SliderCSS>
      <SliderContent
        translate={translate}
        transition={transition}
        width={width}
      >
        {slides.map((slide, i) => (
          <Slide key={i} content={slide} />
        ))}
      </SliderContent>

      <Arrow direction="left" handleClick={prevSlide} />
      <Arrow direction="right" handleClick={nextSlide} />
    </SliderCSS>
  );
};

const SliderCSS = styled.div({
  position: "relative",
  height: "100vh",
  width: "100vw",
  overflow: "hidden",
  margin: "0 auto",
});

const SliderContent = styled.div(({translate, transition, width}) => ({
  height: "100%",
  width: `${width}px`,
  display: 'flex',
  '> *': {
    flex: '1 0 auto',
    transform: `translateX(-${translate}px)`,
    transition: `transform ease-out ${transition}s`,
  },
}));

export default Slider;
