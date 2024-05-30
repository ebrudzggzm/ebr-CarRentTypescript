import {ButtonProps} from "../../types.ts";

const Button  = ({title,icon,designs,btnType,disabled,handleClick}:ButtonProps )=> {
    return (
        <button onClick={handleClick} type={btnType}
                disabled={disabled}
                className ={`${designs} custom-btn bg-primary-blue text-white rounded-full hover:bg-blue-800`}>
           <span className="flex-1">{title}</span>
            {icon && <img className="relative w-6 h-6" src={icon}/>}
        </button>
    );
};

export default Button;