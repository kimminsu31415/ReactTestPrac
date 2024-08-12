import React, { useEffect } from 'react';

const PageA = () => {
  useEffect(() => {
    const canvas = document.getElementById('bubbleChart');
    const ctx = canvas.getContext('2d');

    const drawBubble = (x, y, r, color) => {
      ctx.beginPath();
      ctx.arc(x, y, r, 0, 2 * Math.PI);
      ctx.fillStyle = color;
      ctx.fill();
    };

    // Red dataset
    const redData = Array.from({ length: 50 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 15,
    }));

    // Blue dataset
    const blueData = Array.from({ length: 50 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 15,
    }));

    // Red bubbles
    redData.forEach((point) => {
      drawBubble(point.x, point.y, point.r, 'rgba(255, 99, 132, 0.5)');
    });

    // Blue bubbles
    blueData.forEach((point) => {
      drawBubble(point.x, point.y, point.r, 'rgba(53, 162, 235, 0.5)');
    });
  }, []);

  return (
    <div>
      <canvas
        id="bubbleChart"
        width="400"
        height="400"
        style={{ border: '1px solid #000000' }}
      ></canvas>
    </div>
  );
};

export default PageA;
