import { useState } from "react";
import { filterString } from "../function";
import axios from "axios";
import { options } from "../context/ApiData";
export default function CarouselMovie({title, year, rating, detail, id}) {
  const [poster, setPoster] = useState()
  const [isDone, setIsDone] = useState(false)
  axios.get(`https://api.themoviedb.org/3/movie/${id}/images`, options).then(result => {
    setPoster(result.data.backdrops[1].file_path)
    setIsDone(true)
  })
  if(isDone) {
    return (
      <div className="relative md:h-carousel w-full">
        <img
          src={`https://image.tmdb.org/t/p/original/${poster}`}
          alt="image 3"
          className="md:h-carousel w-full object-cover"
        />
        <div className="drop-shadow-custom px-3 md:leading-10 text-white absolute inset-0 grid md:h-carousel w-full items-end bg-black/75">
          <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-18">
            <h1 className="drop-shadow-custom md:text-3xl text-lg font-bold">{title}</h1>
            <div className="drop-shadow-custom relative mt-1 md:text-md text-xs font-bold">
              <span>{year}</span>
              <span className="drop-shadow-custom right-0 absolute">{rating}&#9733;</span>
            </div>
            <p className="drop-shadow-custom md:text-sm text-xs">{filterString(detail, 20)}...</p>
          </div>
        </div>
      </div>
    ); 
  } else {
    return null
  }
}
