import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useAnimation, useTransform } from "framer-motion";
import "../styles/RollingGallery.css";

import history12 from '../assets/historia_12.jpeg'
import history13 from '../assets/historia_13.jpeg'
import history15 from '../assets/historia_15.jpeg'
import history16 from '../assets/historia_16.jpeg'
import history17 from '../assets/historia_17.jpeg'
import history18 from '../assets/historia_18.jpeg'
import history19 from '../assets/historia_19.jpeg'
import history20 from '../assets/historia_20.jpeg'
import history21 from '../assets/historia_21.jpeg'
import history22 from '../assets/historia_22.jpeg'
import history23 from '../assets/historia_23.jpeg'
import history24 from '../assets/historia_24.jpeg'

const IMGS = [
    history12,
    history13,
    history15,
    history16,
    history17,
    history18,
    history19,
    history20,
    history21,
    history22,
    history23,
    history24,
];

const RollingGallery = ({ autoplay = false, pauseOnHover = false, images = [] }) => {
  images = IMGS;
  const [isScreenSizeSm, setIsScreenSizeSm] = useState(window.innerWidth <= 640);

  const getCylinderWidth = () => {
    if (window.innerWidth <= 480) {
      return 1800;
    } else if (window.innerWidth <= 768) {
      return 2200;
    } else {
      return 2000;
    }
  };

  const [cylinderWidth, setCylinderWidth] = useState(getCylinderWidth());
  
  const faceCount = images.length;
  const faceWidth = (cylinderWidth / faceCount);
  const dragFactor = 0.05;
  const radius = cylinderWidth / (2 * Math.PI);

  const rotation = useMotionValue(0);
  const controls = useAnimation();
  const autoplayRef = useRef();

  const handleDrag = (_, info) => {
    rotation.set(rotation.get() + info.offset.x * dragFactor);
  };

  const handleDragEnd = (_, info) => {
    controls.start({
      rotateY: rotation.get() + info.velocity.x * dragFactor,
      transition: { type: "spring", stiffness: 60, damping: 20, mass: 0.1, ease: "easeOut" },
    });
  };

  const transform = useTransform(rotation, (value) => {
    return `rotate3d(0, 1, 0, ${value}deg)`;
  });

  useEffect(() => {
    if (autoplay) {
      autoplayRef.current = setInterval(() => {
        controls.start({
          rotateY: rotation.get() - (360 / faceCount),
          transition: { duration: 4, ease: "linear" },
        });
        rotation.set(rotation.get() - (360 / faceCount));
      }, 2000);

      return () => clearInterval(autoplayRef.current);
    }
  }, [autoplay, rotation, controls, faceCount]);

  useEffect(() => {
    const handleResize = () => {
      const newIsScreenSizeSm = window.innerWidth <= 640;
      const newCylinderWidth = getCylinderWidth();
      
      setIsScreenSizeSm(newIsScreenSizeSm);
      setCylinderWidth(newCylinderWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMouseEnter = () => {
    if (autoplay && pauseOnHover) {
      clearInterval(autoplayRef.current);
      controls.stop();
    }
  };

  const handleMouseLeave = () => {
    if (autoplay && pauseOnHover) {
      controls.start({
        rotateY: rotation.get() - (360 / faceCount),
        transition: { duration: 2, ease: "linear" },
      });
      rotation.set(rotation.get() - (360 / faceCount));

      autoplayRef.current = setInterval(() => {
        controls.start({
          rotateY: rotation.get() - (360 / faceCount),
          transition: { duration: 2, ease: "linear" },
        });
        rotation.set(rotation.get() - (360 / faceCount));
      }, 2000);
    }
  };

  return (
    <div className="gallery-container">
      <div className="gallery-content">
        <motion.div
          drag="x"
          className="gallery-track"
          onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
          style={{
            transform: transform,
            rotateY: rotation,
            width: cylinderWidth,
            transformStyle: "preserve-3d",
          }}
          onDrag={handleDrag}
          onDragEnd={handleDragEnd}
          animate={controls}
        >
          {images.map((url, i) => (
            <div
              key={i}
              className="gallery-item"
              style={{
                width: `${faceWidth}px`,
                transform: `rotateY(${i * (360 / faceCount)}deg) translateZ(${radius}px)`,
              }}
            >
              <img src={url} alt="gallery" className="gallery-img" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default RollingGallery;