import React, { useEffect, useState } from 'react';
// axios
import axios from 'axios';

function Content({getSurah,loading}) {

  const [surah, setSurah] = useState([]);


  // get data surah
    useEffect(() => {
      loading()
        axios.get('https://quran-api.santrikoding.com/api/surah')
            .then(res => {
                setSurah(res.data);
            })
    },[loading])

  return (
      <div>
        <div className='container mx-auto mt-3 mb-10 grid grid-cols-1 gap-3 lg:grid-cols-2 xl:grid-cols-3 xl:px-3'>
        {surah?.map(el => {
            return(
            <div className='w-72 sm:w-[550px] md:w-[650px] lg:w-[500px] xl:w-[400px] font-quicksand font-semibold mx-auto h-auto mt-3 border-1 border-solid border-slate-500 bg-white rounded-md shadow-xl grid grid-cols-5 grid-rows-3 pl-2 pt-3 pb-2 cursor-pointer hover:-translate-y-1 hover:shadow-lg transition duration-500' onClick={() => getSurah(el.nomor)} key={el.nomor}> 
              <h3 className='row-span-3 self-center'>{el.nomor}.</h3>
                <div className='row-span-3 col-span-2'>
                    <h1>{el.nama_latin}</h1>
                    <p>({el.jumlah_ayat})</p>
                    <br /> 
                    <p className='font-light italic'>{el.arti}</p>
                </div>
                <div className='row-span-3 col-span-2 self-center'>
                    <p>{el.nama}</p>    
                </div>
              </div>
            )
        })}
        </div>
      </div>
  )
}

export default Content






