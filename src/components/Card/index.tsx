import {CarType} from "../../types.ts";
import Button from "../Button";
import {motion} from "framer-motion";
import generateImage from "../../utils/genetareImage.ts";
import {useState} from "react";
import Modal from "../Modal";

interface CardProps  {
    car: CarType;
}

const Card = ({car }: CardProps) => {
    const [isOpen,setIsOpen] = useState<boolean>(false)
    // const translate ={
    //     rwd:"Arkadan İtişli",
    //     fwd:"Önden Çekişli",
    //     awd:"4 çeker",
    //     "4wd":"4 çeker",
    //
    //
    // }

    console.log(car,'car')
    return (
        <motion.div initial={{scale:0.5,opacity:0}} whileInView={{scale:1,opacity:1}} className="car-card group">
<h2 className="car-card__content-title">{car.make} {car.model}</h2>
            <div className="flex mt-6 text-[32px]">
                <span className="font-semibod text-[19px]">₺</span>
                {Math.round(Math.random()*7000)+1500}
                <span className="self-end font-semibold text-[19px]">/day</span>
            </div>
            <div className="relative w-full h-40 my-3">
                <img className="w-full h-full object-contain" src={generateImage(car)}/>
            </div>
             {/*icons*/}
            <div className="w-full mt-2 flex ">
                <div className=" group-hover:hidden flex w-full justify-between">
                    <div className="flex-center flex-col">
                        <img width={25} src="./steering-wheel.svg" alt="transmission"/>
                        <p>{car.transmission === "a" ? "automatic" : "manual"}</p>
                    </div>
                    <div className="flex-center flex-col">
                        <img width={25} src="./tire.svg"/>
                        <p>{car.drive}</p>
                    </div>
                    <div className="flex-center flex-col">
                        <img width={25} src="./gas.svg"/>
                        <p>{car.fuel_type}</p>
                    </div>
                </div>
                <div className="group-hover:flex w-full hidden">
                    <Button handleClick={() => setIsOpen(true)} title="Show More" designs="w-full py-[16px]"
                            icon="./right-arrow.svg" btnType={undefined} disabled={undefined}/>
                </div>
            </div>
            <Modal isOpen={isOpen} close={()=>setIsOpen(false)} car={car}/>
        </motion.div>
    );
};

export default Card;