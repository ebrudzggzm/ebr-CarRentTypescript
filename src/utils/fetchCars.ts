import {CarType} from "../types.ts";


const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': `${import.meta.env.VITE_API_KEY}`,
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
};

type FilterType = {
    make?:string;
    model?:string;
    limit?:string;
    fuel_type?:string;
    year?:string;

}
export async function fetchCars(paramsObj: FilterType): Promise<CarType[]> {
    const { limit = "5", make = "bmw", model="x5", fuel_type="gas", year="2020" } = paramsObj;

    // Temel URL
    const baseUrl = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars`;

    // Parametreleri dinamik olarak oluştur
    const queryParams = new URLSearchParams();

    if (limit) queryParams.append('limit', limit);
    if (make) queryParams.append('make', make);
    if (model) queryParams.append('model', model);
    if (fuel_type) queryParams.append('fuel_type', fuel_type);
    if (year) queryParams.append('year', year);

    const url = `${baseUrl}?${queryParams.toString()}`;

;

    const response = await fetch(url, options);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    return await response.json();
}







