import { useState, useRef, useEffect } from "react";

// Array of testimonial objects
const array = [
  {
    name: "Maria Smantha",
    role: "Web Developer",
    image:
      "https://duckduckgo.com/?t=ffab&q=Actor+Vijay&iax=images&ia=images&iai=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Ffa%2Ffc%2F06%2Ffafc0641d1689f80b9f2a4fc6f11dad2.jpg",
  },
  {
    name: "Lisa Cudrow",
    role: "Graphic Designer",
    image: "https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(2).jpg",
  },
  {
    name: "Maria Smantha",
    role: "Web Developer",
    image: "https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(1).jpg",
  },
  {
    name: "Lisa Cudrow",
    role: "Graphic Designer",
    image: "https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(2).jpg",
  },
  {
    name: "Maria Smantha",
    role: "Web Developer",
    image: "https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(1).jpg",
  },
  {
    name: "Lisa Cudrow",
    role: "Graphic Designer",
    image: "https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(2).jpg",
  },
  {
    name: "Maria Smantha",
    role: "Web Developer",
    image: "https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(1).jpg",
  },
  {
    name: "Lisa Cudrow",
    role: "Graphic Designer",
    image: "https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(2).jpg",
  },
];

const Slider = () => {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (isHovered) {
      container.style.animationPlayState = "paused";
    } else {
      container.style.animationPlayState = "running";
    }
  }, [isHovered]);

  return (
    <div
      className="overflow-hidden w-full relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        ref={containerRef}
        className="flex gap-5 animate-scroll"
        style={{ whiteSpace: "nowrap" }}
      >
        {[...array, ...array].map((testimonial, index) => (
          <div
            key={index}
            className="inline-block min-w-[300px] flex flex-col items-center p-4 border border-gray-200 rounded-lg shadow-md"
          >
            <div className="mb-4">
              <img
                src={testimonial.image}
                className="w-32 h-32 rounded-full shadow-lg"
                alt={testimonial.name}
              />
            </div>
            <h5 className="mb-2 text-xl font-semibold">{testimonial.name}</h5>
            <h6 className="mb-2 font-semibold text-blue-500">
              {testimonial.role}
            </h6>
            <div className="overflow-hidden">
              <p className="text-neutral-600 text-center overflow-hidden text-ellipsis whitespace-nowrap"></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        scroll: "scroll 20s linear infinite",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
