import {MouseEventHandler} from "react";

export type ButtonProps = {
    title: string;
    handleClick?:MouseEventHandler<HTMLButtonElement>;
    icon?: string;
    designs?: string;
    btnType?: "submit" | "reset" | "button";
    disabled?: boolean;
}

export type CarType = {
    city_mpg: number
    class: string
    combination_mpg: number
    cylinders: number
    displacement: number
    drive: "rwd" | "fwd" | "4wd" | "awd"
    fuel_type: "gas" | "diesel" | "electricity"
    highway_mpg: number
    make: string
    model: string
    transmission: "a" | "m"
    year: number
}


export type FilterProps = {
    title:string;
    options:OptionType[];


}

export type SearchProps={
    design:string;
};

export type OptionType = {
    label:string;
    value:string;
};