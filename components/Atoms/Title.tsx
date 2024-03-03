"use client";

interface TitleProps {
  label: string;
}

const Title: React.FC<TitleProps> = ({ label }) => {
  return (
    <div className="relative center w-fit mx-auto mb-16">
      <h2 className="text-[1.1rem] xl:text-2xl font-semibold uppercase relative z-20 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-teal-600">
        {label}
      </h2>
    </div>
  );
};
export default Title;
