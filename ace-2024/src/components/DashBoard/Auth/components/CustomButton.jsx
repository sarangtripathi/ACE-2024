const CustomButton = ({ title, containerStyles, iconRight, type, onClick }) => {
    return (
      <button
        onClick={onClick}
        type={type || "button"}
        className={`inline-flex items-center text-base bg-[#065ad8] ${containerStyles}`}
      >
        {title}
  
        {iconRight && <div className='ml-2'>{iconRight}</div>}
      </button>
    );
  };
  
  export default CustomButton;
  