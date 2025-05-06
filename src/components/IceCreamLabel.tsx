
type IceCreamLabelProps = {
  name: string;
  description: string;
  size?: 'small' | 'medium' | 'large';
};

const IceCreamLabel = ({ name, description, size = 'medium' }: IceCreamLabelProps) => {
  const sizeClasses = {
    small: {
      container: "w-[106px]",
      eiscreme: "text-[22px] leading-[35px]",
      description: "text-[8px] leading-[11px]",
      name: "text-[11px] leading-[17px]"
    },
    medium: {
      container: "w-[121px]",
      eiscreme: "text-[25px] leading-[40px]",
      description: "text-[9.5px] leading-[13px]", 
      name: "text-[12.7px] leading-[20px]"
    },
    large: {
      container: "w-[137px]",
      eiscreme: "text-[29px] leading-[45px]",
      description: "text-[11px] leading-[15px]",
      name: "text-[14.5px] leading-[23px]"
    }
  };

  return (
    <div className={`${sizeClasses[size].container} flex flex-col relative`}>
      <span className={`font-seaweed text-white ${sizeClasses[size].description}`}>
        {description}
      </span>
      <div className="flex justify-center items-center p-1">
        <span className={`font-lalezar text-white ${sizeClasses[size].eiscreme}`}>
          EISCREME
        </span>
      </div>
      <span className={`font-lalezar text-white text-center ${sizeClasses[size].name}`}>
        {name}
      </span>
    </div>
  );
};

export default IceCreamLabel;
