import Hero from "../../components/Hero";
import SearchBar from "../../components/SearchBar";
import Filter from "../../components/Filter";
import {useEffect, useRef, useState} from "react";
import {fetchCars} from "../../utils/fetchCars.ts";
import {CarType} from "../../types.ts";
import {fuels, years} from "../../constants.ts";
import Card from "../../components/Card";
import ShowMore from "../../components/ShowMore";
import {useSearchParams} from "react-router-dom";
// import Button from "../../components/Button";

const MainPage = () => {

    const [cars, setCars] = useState<CarType[] | null>(null);
    const [isError, setIsError] = useState<boolean>(false);
    const catalogRef = useRef<HTMLDivElement | null>(null);
    const [params] = useSearchParams();
    useEffect(() => {
        const paramsObj = Object.fromEntries(params.entries());
        fetchCars(paramsObj).then((data) => setCars(data)).catch(() => setIsError(true))

    }, [params]);
    return (
        <>
            <div className="mb-40">
                <Hero element={catalogRef}/>
                <div ref={catalogRef} className="mt-12 padding-x padding-y max-width">
                    <div className="home__text-container">
                        <h1 className="text-4xl font-extrabold">Car Catalog</h1>
                        <p>Discover Cars You Might Like</p>
                    </div>
                    <div className="home__filters ">
                        <div className="home__filters ">
                            <SearchBar/>
                            <div className="home__filter-container">
                                <Filter title="Fuel Type" options={fuels}/>
                                <Filter title="Year" options={years}/>
                            </div>
                        </div>


                        {
                            !cars ? (
                                <div className="home__error-container">Loading...</div>
                            ) : isError ? (
                                <div className="home__error-container">Error</div>
                            ) : cars?.length < 0 ? (
                                <div className="home__error-container">Not Found</div>
                            ) : (
                                <section>
                                    <div className="home__cars-wrapper">
                                        {cars?.map((car, i) => (<Card key={i} car={car}/>))}
                                    </div>
                                    <ShowMore/>
                                </section>
                            )
                        }


                    </div>
                </div>
            </div>
            <div className="flex justify-center">

            </div>
        </>

    );
};

export default MainPage;