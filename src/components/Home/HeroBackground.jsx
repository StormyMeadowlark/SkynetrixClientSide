// HeroBackground.jsx
import { useEffect, useRef } from "react";

const HeroBackground = () => {
  const canvasRef = useRef(null);

  // Animate stars on canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const stars = Array.from({ length: 150 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.5,
      speed: 0.1 + Math.random() * 0.5,
    }));

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#0e0e11";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        star.y += star.speed;
        if (star.y > canvas.height) star.y = 0;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      <canvas ref={canvasRef} className="w-full h-full" />
      <svg
        className="absolute bottom-0 w-full h-[40vh]"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="electricGrid" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#9f6aff" stopOpacity="0.6" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
        {[...Array(20)].map((_, i) => (
          <line
            key={`v${i}`}
            x1={(i * 5).toString()}
            y1="0"
            x2={(i * 5).toString()}
            y2="100"
            stroke="url(#electricGrid)"
            strokeWidth="0.3"
          />
        ))}
        {[...Array(20)].map((_, i) => (
          <line
            key={`h${i}`}
            x1="0"
            y1={(i * 5).toString()}
            x2="100"
            y2={(i * 5).toString()}
            stroke="url(#electricGrid)"
            strokeWidth="0.3"
          />
        ))}
      </svg>
    </div>
  );
};

export default HeroBackground;