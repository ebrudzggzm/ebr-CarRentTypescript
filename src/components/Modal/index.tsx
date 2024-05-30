import {CarType} from "../../types.ts";
import generateImage from "../../utils/genetareImage.ts";

type ModalProps = {
    car:CarType;
    isOpen : boolean;
    close:()=>void;

}

const Modal = ({car,isOpen,close}:ModalProps) => {
    const carsInfo = Object.entries(car);
    return (
       <>
           {isOpen && <div className="fixed inset-0 bg-opacity-25 bg-black z-20 grid place-items-center">
               <div className="bg-white relative p-6 max-w-lg max-h-[90vh] rounded-2xl flex flex-col gap-5 shadow-xl overflow-auto">
               {/*closebutton*/}
                   <button onClick={close} className="cursor-pointer p-1 absolute end-1 top-1 z-10 bg-white rounded-full">
                       <img src="./close.svg" alt="close"/>
                   </button>
                   {/*photos*/}
                   <div className="flex-1 flex flex-col gap-3">
                       {/*bigpicture*/}
                       <div className="w-full bg-pattern h-40 bg-center">
                           <img className="h-full mx-auto object-contain" src={generateImage(car)} alt="car"/>
                       </div>
                       {/*smallpictur*/}
                       <div className="flex gap-3">
                           <div className="flex-1 flex relative h-24 bg-primary-blue-100">
                               <img className="h-full mx-auto object-contain min-w-[146px]"  src={generateImage(car,"29")}/>
                           </div>
                           <div className="flex-1 flex relative h-24 bg-primary-blue-100">
                               <img className="h-full mx-auto object-contain min-w-[146px]" src={generateImage(car,"33")}/>
                           </div>
                           <div className="flex-1 flex relative h-24 bg-primary-blue-100">
                               <img className="h-full mx-auto object-contain min-w-[146px]" src={generateImage(car,"13")}/>
                           </div>

                       </div>
                       {/*cars info*/}

                           {
                               carsInfo.map(([key,value])=>(<div className="flex justify-between">
                                   <h4 className="capitalize text-black-100 font-semibold">{key.split("_").join(" ")}</h4>
                                   <p className="capitalize text-black-100 font-semibold">{value}</p>
                               </div>))
                           }

                   </div>
               </div>

           </div>}
       </>
    );
};

export default Modal;