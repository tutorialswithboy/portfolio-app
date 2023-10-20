import React from "react";

interface Props {
  title: string;
  description: string;
}

const Hero : React.FC<Props> = ({ title, description }) => {
  return (
    <div className="py-16 md:py-24 mb-10 max-w-xl">
      <h1 className="text-3xl md:text-4xl font-display-safe font-bold dark:text-gray-100 dark:contrast-more:text-white motion-safe:transition">
        {title}
      </h1>

      <p className="text-gray-700 dark:text-gray-300 dark:contrast-more:text-gray-200 mt-3 md:text-lg motion-safe:transition">
        {description}
      </p>
    </div>
  );
};

export default Hero;
