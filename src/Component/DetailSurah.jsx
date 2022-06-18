import React, { useEffect, useMemo, useState } from 'react'
// react-icon
import { FaArrowLeft,FaArrowRight,FaPlay,FaPause } from 'react-icons/fa'

function DetailSurah({detailSurah,location,getSurah}) {

    // data surah
   const data = detailSurah
    // data surah selanjutnya
   const surahSelanjutnya = data.surat_selanjutnya?.nomor 
    // data surah sebelumnya
   const surahSebelumnya = data.surat_sebelumnya?.nomor
    // location pathname
   const pathname = location.pathname
    // audio surah
   const audio =  useMemo(() => {
        return(
            new Audio(`${data.audio}`)
        )
   },[data.audio])
    const [isPlaying, setIsPlaying] = useState(false);
    const toggle = () => setIsPlaying(!isPlaying);

   useEffect(() => {
         isPlaying ? audio.play() : audio.pause()  
      },[audio,isPlaying])
    
    useEffect(() => {
        audio.addEventListener('ended', () => setIsPlaying(false))
        return() => {
            audio.removeEventListener('ended', () => setIsPlaying(false))
        }   
     }
    )
    // if pathname != pathname,surah audio is pause
    useEffect(() => {
        if(pathname.includes(`/`)){
        return () => {
            audio.pause()
            audio.currentTime = 0
        }
    }},)

  return (
      <div className='mb-5 grid gap-2 '>
      <div className='my-5 container mx-auto md:mt-5 grid gap-1 md:grid-flow-col md:justify-between'>
      {
        surahSebelumnya ? <button className=' border rounded-md bg-emerald-600 w-72 md:w-max px-2 py-1 my-1 mx-2 md:my-4 text-sm justify-self-center md:justify-self-start md:text-base md:mb-5 text-zinc-200 hover:text-zinc-50 flex items-center hover:shadow-xl hover:-translate-y-1 transition duration-300' onClick={() => getSurah(surahSebelumnya)}><FaArrowLeft className='mr-2'/> Surah Sebelumnya -<span className='ml-1 font-quicksand font-bold'>{data.surat_sebelumnya.nama_latin}</span></button> : ''
      }
    
      {
        surahSelanjutnya ? <button className=' border rounded-md bg-emerald-600 w-72 md:w-max px-2 py-1 my-1 mx-2 md:my-4 text-sm justify-self-center md:justify-self-end md:text-base  md:mb-5 text-zinc-200 hover:text-zinc-50 flex items-center hover:shadow-xl hover:-translate-y-1 transition duration-300' onClick={() => getSurah(surahSelanjutnya)}><span className='mr-1 -mt-0.5 md:mt-0 font-quicksand font-bold place-content-center'>{data.surat_selanjutnya.nama_latin}</span>- Surah Selanjutnya <FaArrowRight className='ml-2 place-self-center'/></button> : ''
      }      
      </div>
        <div className='border rounded-lg mx-auto w-72 sm:w-[550px] md:w-4/5 bg-white py-3 shadow-xl mb-2'>
            <h1 className='mx-10 mt-3 text-2xl w-36 md:w-auto flex flex-wrap h-auto font-quicksand font-semibold'>{data.nama_latin} - {data.nama} </h1>
            <p className='mx-10 my-2 italic font-Nunito'>{data.arti} ({data.jumlah_ayat}) </p>
            <button onClick={() => toggle()}  className="border outline-teal-700 px-4 py-1 rounded-md mx-10 flex place-items-center  w-7/12 sm:w-4/12 mt-3 md:float-right md:w-auto md:-mt-16 md:mx-5 font-Nunito hover:scale-105 transition duration-300 text-slate-900"
            style={{
                backgroundColor: isPlaying ? '#e11d48' : '#059669',
            }}>
                {isPlaying ? 'Pause Audio' : 'Play Audio'} 
                {isPlaying ? <FaPause className='ml-2'/> : <FaPlay className='ml-2'/>}
            </button>

            <div dangerouslySetInnerHTML={{__html:data.deskripsi}} className="text-sm font-Nunito mx-3 font-semibold italic text-slate-700 mt-5"></div>
        </div>
        {
            data.ayat?.length > 0 && data.ayat?.map(el => {
            return(
                
                <div className='border rounded-lg mx-auto w-72 sm:w-[550px] md:w-4/5 bg-white px-2 py-5 shadow-xl my-1' key={
                    el.id}>
                <div className='flex justify-between my-1 mx-3'>
                    <p>{el.surah}:{el.nomor}</p>
                    <p className='mx-2 text-right'>{el.ar}</p>
                </div>
                <div className='my-5 mx-3'>
                <div dangerouslySetInnerHTML={{__html:el.tr}} className="flex justify-end my-1 flex-wrap"></div>
                    <p className='italic text-slate-700 mt-2'>{el.idn}</p>
                </div>
                </div>
            )
        })}
       
    </div>
  )
}

export default DetailSurah