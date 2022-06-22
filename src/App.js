// axios
import axios from "axios";
import React, { useState } from "react";
// react-router-dom
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
// Sweetalert2 
import Swal from "sweetalert2";
import Content from "./Component/Content";
import DetailSurah from "./Component/DetailSurah";
import Footer from "./Component/Footer";
// pages
import Header from "./Component/Jumbotron";
import Navbar from "./Component/Navbar";


function App() {

  const [detailSurah , setDetailSurah] = useState([]);

  let navigate = useNavigate();

  const location = useLocation()
 
  // animate loading
  const showLoading = function() {
    Swal.fire({
      title: 'Loading...',
      html: 'Tunggu Sebentar....',
      allowEscapeKey: false,
      allowOutsideClick: false,
      timer: 1000,
      didOpen: () => {
        Swal.showLoading()
      }
    });
  };

  // scroll to top
  const goTop = () => {
      window.scrollTo({
          top: 500,
          behavior: "smooth"
      })
  }

// get detail surah
  const getSurah = async (nomor) => {
    navigate(`/surah/${nomor}`)
    try{
      showLoading()
      goTop()
      await axios.get(`https://quran-api.santrikoding.com/api/surah/${nomor}`)
      .then(res => {
        setDetailSurah(res.data)
      })
    }catch(err){
      console.log(err)
    }
  }


  return (
   <>

    <Navbar/>
    <Header/>
    <hr className="border-2 border-solid border-slate-800 mt-5 w-1/4 mx-auto rounded"/>
    <Routes>
      <Route path="/" element={
      <Content getSurah={getSurah} loading={showLoading}/>} />
      <Route path="/surah/:id" element={<DetailSurah detailSurah={detailSurah} location={location} getSurah={getSurah}/>} />
    </Routes>
    <Footer/>
   </>
  );
}

export default App;
