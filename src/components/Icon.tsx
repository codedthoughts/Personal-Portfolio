interface IconProps {
  name: string;
  className?: string;
  size?: number;
}

// Dynamically import all PNG files from the assets directory
const iconModules = import.meta.glob('@/assets/*.png', { eager: true });

const Icon = ({ name, className = '', size = 24 }: IconProps) => {
  // Find the correct icon module
  const iconPath = Object.keys(iconModules).find(path => 
    path.includes(`/${name}.png`)
  );

  // Get the URL of the icon
  const iconUrl = iconPath ? (iconModules[iconPath] as { default: string }).default : '';

  if (!iconUrl) {
    console.warn(`Icon '${name}' not found in assets`);
    return null;
  }

  return (
    <div 
      className={`flex items-center justify-center ${className}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        minWidth: `${size}px`,
        minHeight: `${size}px`
      }}
    >
      <img 
        src={iconUrl}
        alt={name}
        className="max-w-full max-h-full object-contain"
        loading="lazy"
        style={{
          display: 'block',
          margin: 'auto',
          maxWidth: '100%',
          maxHeight: '100%',
          width: 'auto',
          height: 'auto'
        }}
      />
    </div>
  );
};

export default Icon;
