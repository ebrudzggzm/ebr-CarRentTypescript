// import {useState} from "react";
import Header from "./components/Header";
import MainPage from "./pages/MainPage/index.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";


const App = () => {
    // const [state,setState]= useState<number>(1);
    return (

<BrowserRouter>
    <Header/>
    <Routes>
        <Route  path={"/"} element={<MainPage/>}/>
    </Routes>
</BrowserRouter>

    );
};

export default App;