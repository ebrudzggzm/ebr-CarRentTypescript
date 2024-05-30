import {Link} from "react-router-dom";
import Button from "../Button";


const Header = () => {
    return (
        <header className="w-full absolute z-10">
            <nav className="w-[1440px] mx-auto flex justify-between items-center px-6 py-4 sm:px-16">

            <Link to={"/"}>
                <img src="/bmw.png" width={50}/>

            </Link>
            <Button  title="Sign Up" designs="min-width-[130px] bg-primary-blue"/>

            </nav>
        </header>
    );
};

export default Header;