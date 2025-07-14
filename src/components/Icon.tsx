interface IconProps {
  name: string;
  className?: string;
  size?: number;
}

const Icon = ({ name, className = '', size = 24 }: IconProps) => {
  return (
    <div className={`w-[${size}px] h-[${size}px] flex items-center justify-center ${className}`}>
      <img 
        src={`/src/assets/${name}.png`} 
        alt={name}
        className="w-full h-full object-contain"
      />
    </div>
  );
};

export default Icon;
