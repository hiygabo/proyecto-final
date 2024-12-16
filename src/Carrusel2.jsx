import i1 from './assets/1.png';
import i2 from './assets/4.png';
import i3 from './assets/3.png';
import i4 from './assets/10.png';
import i5 from './assets/11.png';
import i6 from './assets/12.png'; 




import  { useState } from 'react';
import  { useEffect } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';

const items = [
  {
    src: i1,
    key: 1,
  },
  
  {
    src: i2,
    key: 2,
  },
  {
    src: i3,
    key: 3,
  },
  {
    src: i4,
    key: 4,
  },
  {
    src: i5,
    key:5,
  },
  {
    src: i6,
    key:6,
  },
];

function Carrusel2(args) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 2000); 

    return () => clearInterval(interval); 
  }, [activeIndex, animating]);

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}

      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      {...args}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
}

export default Carrusel2;