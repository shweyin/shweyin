type PropsType = {
  children: React.ReactNode;
  className?: string;
};

const Card = ({ children, className }: PropsType) => {
  return (
    <div
      className={`bg-stone-950 bg-opacity-70 outline outline-zinc-600 p-5 rounded-md ${className}`}
    >
      {children}
    </div>
  );
};

export { Card };
