import Select from "react-select";
import {FaCarRear} from "react-icons/fa6";
import {OptionType, SearchProps} from "../../types.ts";
import {useSearchParams} from "react-router-dom";
import {useMemo, useState} from "react";
import {makes} from "../../constants.ts";


const SearchButton = ({design}: SearchProps) => {
    return (<button className={`button ${design}`}>
        <span className="span ">🔎</span>
    </button>)
}
const SearchBar = () => {

    const [make, setMake] = useState<string>("");
    const [model, setModel] = useState<string>("");
    const [params, setParams] = useSearchParams();
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setParams({
            make: make.toLowerCase(),
            model: model.toLowerCase()
        });
    };

    const options: OptionType[] = useMemo(
        () =>
            makes.map((item) => ({
                label: item,
                value: item,
            })),
        [make]
    );


    console.log(model);
    console.log(make);
    console.log(params);
    return (
        <form className="searchbar gap-3" onSubmit={handleSubmit}>
            <div className="searchbar__item text-black">
                <Select className="w-full" options={options}
                        onChange={(e) => e && setMake(e.value)}/>
                <SearchButton design={"sm:hidden"}/>
            </div>
            <div className="searchbar__item">
                <FaCarRear className="absolute text-black-100 ml-4" width={25}/>
                <input type="text" placeholder="Civic..." className="searchbar__input rounded text-black"
                       onChange={(e) => setModel(e.target.value)}/>
                <SearchButton design={"sm:hidden"}/>
            </div>
            <div><SearchButton design={"max-sm:hidden"}/></div>

        </form>
    );
};

export default SearchBar;