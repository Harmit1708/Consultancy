import "./App.css";
import React,{useState,useEffect} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from 'axios'
// Component Page
import Home from "../src/Components/Home";
import Header from "../src/Components/Header";


import Categories from "./Components/Categories";

export const consultancyContext = React.createContext();

const URL = "https://mocki.io/v1/f80043a8-87fb-48df-8958-7bf45e95ca85"
function App() {
  let [data,setData] = useState([]);

  let getData = async() => {
    let res = await axios.get(URL);
    setData(res.data)
  }

  useEffect(()=>{
    getData()
  },[])

  return (
    <div className="App">
      <BrowserRouter>
      <consultancyContext.Provider value={{data}}>

        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Categories/>} ></Route>
        </Routes>        
        </consultancyContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
