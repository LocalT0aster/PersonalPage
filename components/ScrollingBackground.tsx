// A component for animated scrolling background.
// TODO learn konva and fix the script
"use client";

import Konva from "konva";
import React, { useEffect, useRef } from "react";
import { Image as KonvaImage, Layer, Stage } from "react-konva";
import useImage from "use-image";

interface ImageProps {
  src: string;
  x: number;
  y: number;
  speedX: number;
  speedY: number;
}

const imageSources = [
  "@/public/images/tefal0.png",
  "@/public/images/tefal1.png",
  "@/public/images/tefal2.png",
  "@/public/images/tefal3.png",
];

const randomDirection = () => (Math.random() > 0.5 ? 1 : -1) * (Math.random() * 2 + 1);

const ScrollingBackground: React.FC = () => {
  const layerRef = useRef<any>(null);
  const imagesRef = useRef<ImageProps[]>([]);

  useEffect(() => {
    imagesRef.current = imageSources.map((src) => ({
      src,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      speedX: randomDirection(),
      speedY: randomDirection(),
    }));

    const anim = new Konva.Animation((frame) => {
      const timeDiff = frame?.timeDiff || 0;
      const layer = layerRef.current;
      if (layer) {
        layer.getChildren().forEach((image: any, idx: number) => {
          const imgProps = imagesRef.current[idx];
          imgProps.x += imgProps.speedX * (timeDiff / 1000);
          imgProps.y += imgProps.speedY * (timeDiff / 1000);

          if (imgProps.x < -image.width() || imgProps.x > window.innerWidth) {
            imgProps.speedX *= -1;
          }
          if (imgProps.y < -image.height() || imgProps.y > window.innerHeight) {
            imgProps.speedY *= -1;
          }
          image.position({ x: imgProps.x, y: imgProps.y });
        });
        layer.batchDraw();
      }
    }, layerRef.current);

    anim.start();

    return () => {
      anim.stop();
    };
  }, []);

  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer ref={layerRef}>
        {imagesRef.current.map((imgProps, idx) => (
          <ScrollingImage key={idx} {...imgProps} />
        ))}
      </Layer>
    </Stage>
  );
};

const ScrollingImage: React.FC<ImageProps> = ({ src, x, y }) => {
  const [image] = useImage(src);
  return <KonvaImage image={image} x={x} y={y} />;
};

export default ScrollingBackground;
