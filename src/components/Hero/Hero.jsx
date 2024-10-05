// import React, { useState } from "react";
// import Dropdown from "../Dropdown/Dropdown";
// import Header from "../Header/Header";
// import {
//   HeroContainer,
//   HeroWrapper,
//   HeroLeft,
//   HeroRight,
//   Image,
//   ScrollDown,
//   ScrollLink,
// } from "./HeroElements";
// import { TypeAnimation } from 'react-type-animation';
// import ScrollAnimation from "react-animate-on-scroll";

// function Hero() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [showSubtitle, setShowSubtitle] = useState(false);
//   const [showScrollDown, setShowScrollDown] = useState(false);

//   const toggle = () => {
//     setIsOpen(!isOpen);
//   };
//   return (
//     <main>
//       <Dropdown isOpen={isOpen} toggle={toggle} />
//       <Header toggle={toggle} />
//       <HeroContainer>
//         <HeroWrapper>
//           <HeroLeft>
//             <ScrollAnimation animateIn="fadeIn" >
//               <TypeAnimation
//                 cursor={false}
//                 sequence={[
//                   'Hi, I\'m Aditya Patil',
//                   () => setShowSubtitle(true)
//                 ]}
//                 speed={{ type: "keyStrokeDelayInMs", value: 150 }}
//                 wrapper="h1"
//                 repeat={0}
//               />
//               {showSubtitle &&
//                 <TypeAnimation
//                   cursor={true}
//                   sequence={[
//                     500,
//                     'A Full-Stack Developer.',
//                     1000,
//                     'A Frontend Developer.',
//                     // 'I design and code beautifully simple things, and I love what I do.',
//                     1000,
//                     'A DSA Enthusiast.',
                   
//                   ]}
//                   speed={50}
//                   deletionSpeed={65}
//                   wrapper="h5"
//                   repeat={Infinity}
//                 />
//               }
//             </ScrollAnimation>

//           </HeroLeft>
//           <HeroRight>
//             <ScrollAnimation animateIn="fadeIn">
//               <Image
//                 src="/man-svgrepo-com.svg"
//                 alt="man-svgrepo"
//               />
//             </ScrollAnimation>
//           </HeroRight>
//         </HeroWrapper>
//         {showScrollDown &&<ScrollAnimation animateIn="flipInX" offset={0}>
//         <ScrollDown to="projects" id="scrollDown">
//           <ScrollLink>
//             Scroll down
//             <img
//               src="/scroll-down.svg"
//               alt="scroll-down"
//             />
//           </ScrollLink>
//         </ScrollDown>
//         </ScrollAnimation>}
//       </HeroContainer>
//     </main>
//   );
// }

// export default Hero;


import React, { useState, useEffect } from "react";
import Dropdown from "../Dropdown/Dropdown";
import Header from "../Header/Header";
import {
  HeroContainer,
  HeroWrapper,
  HeroLeft,
  HeroRight,
  Image,
  ScrollDown,
  ScrollLink,
} from "./HeroElements";
import { TypeAnimation } from "react-type-animation";
import ScrollAnimation from "react-animate-on-scroll";

function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showScrollDown, setShowScrollDown] = useState(false);

  // Toggle dropdown
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  // Show scroll down link after a brief delay
  useEffect(() => {
    const timer = setTimeout(() => setShowScrollDown(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <HeroContainer>
        <HeroWrapper>
          <HeroLeft>
            <ScrollAnimation animateIn="fadeIn">
              <TypeAnimation
                cursor={false}
                sequence={[
                  "Hi, I'm Aditya Patil",
                  () => setShowSubtitle(true),
                ]}
                speed={150}
                wrapper="h1"
                repeat={0}
              />
              {showSubtitle && (
                <TypeAnimation
                  cursor={true}
                  sequence={[
                    50,
                    "A Full-Stack Developer.",
                    100,
                    "A Frontend Developer.",
                    100,
                    "A DSA Enthusiast.",
                  ]}
                  speed={50}
                  deletionSpeed={65}
                  wrapper="h5"
                  repeat={Infinity}
                />
              )}
            </ScrollAnimation>
          </HeroLeft>
          <HeroRight>
            <ScrollAnimation animateIn="fadeIn">
              {/* Lazy load the image */}
              <Image
                loading="lazy"
                src="/man-svgrepo-com.svg"
                alt="man-svgrepo"
              />
            </ScrollAnimation>
          </HeroRight>
        </HeroWrapper>
        {showScrollDown && (
          <ScrollAnimation animateIn="flipInX" offset={0}>
            <ScrollDown to="projects" id="scrollDown">
              <ScrollLink>
                Scroll down
                <img src="/scroll-down.svg" alt="scroll-down" />
              </ScrollLink>
            </ScrollDown>
          </ScrollAnimation>
        )}
      </HeroContainer>
    </main>
  );
}

export default Hero;
