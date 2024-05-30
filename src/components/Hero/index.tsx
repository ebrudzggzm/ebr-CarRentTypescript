import { RefObject } from "react";
import Button from "../Button";
import { motion } from "framer-motion";

type HeroProps = {
    element: RefObject<HTMLDivElement | null>;
}
const Hero = ({element}:HeroProps) => {
    const scroll = ()=>{
        element.current?.scrollIntoView({behavior: "smooth"});
    };
    return (
        <div className="hero">
            <div className="pt-36 padding-x flex-1 max-h-[920px]">
                <h1 className="hero__title">Feel Freedom,Start Your Journey Today</h1>
                <p className="hero__subtitle">
                    Are you ready for a wonderful process with golden standard service?
                    Feel special with best choices.
                </p>
                <Button title="Discover Cars" designs="mt-10" handleClick={scroll} />
            </div>
            <div className="flex justify-center">
                <motion.img src="/hero.png" alt="bmw"
                            initial={{translateX:200,scale:0.7,}}
                            animate={{translateX:0,scale:1}}
                            transition={{duration:1,}}
                            className="object-contain"/>
            </div>
        </div>


    );
};


export default Hero;
