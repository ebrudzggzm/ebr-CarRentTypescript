import Select from "react-select";
import {FilterProps,OptionType} from "../../types.ts";
import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";


const Filter = ({title,options}:FilterProps) => {
    const [selected,setSelected]=useState<OptionType | null>(null);
    const [params,setParams]= useSearchParams();

    useEffect(() => {
        const key = title === "Fuel Type" ? "fuel" : "year" ;

        if(selected?.value){
            params.set(key,selected.value.toLowerCase());
        }else{
            params.delete(key);
        }
        setParams(params);
    }, [selected]);
    return (
        <div>
            <Select options={options} placeholder={title}
                    className="text-black min-w-[120px]"
            onChange={(e)=>setSelected(e)}
            />
        </div>
    );
};

export default Filter;