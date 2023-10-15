import { useState } from "react";
import { filterString } from "../function";

export default function CarouselMovie({title, year, rating, detail, backdrop}) {
    return (
      <div className="drop-shadow-[0px_3px_66px_45px_rgba(0,0,0,1)] relative md:h-carousel w-full">
        <img
          src={`https://image.tmdb.org/t/p/original${backdrop}`}
          alt="image 3"
          className="md:h-carousel w-full object-cover"
        />
        <div className="md:leading-10 text-white border-1 absolute items-end bg-black/75  flex justify-center left-0 flex-col bottom-6 pl-[13%]">
          <div className="pl-5 w-[200px] md:w-[300px] pb-5 md:pb-20s lg:pb-18">
            <h1 className="drop-shadow-[0px_3px_66px_45px_rgba(0,0,0,1)] md:text-3xl text-lg font-bold">{title}</h1>
            <div className="drop-shadow-[0px_3px_66px_45px_rgba(0,0,0,1)] relative mt-1 md:text-md text-xs font-bold">
              <span className="drop-shadow-[0px_3px_66px_45px_rgba(0,0,0,1)]">{year}</span>
              <span className="drop-shadow-[0px_3px_66px_45px_rgba(0,0,0,1)] right-0 absolute">{rating}&#9733;</span>
            </div>
            <p className="drop-shadow-[0px_3px_66px_45px_rgba(0,0,0,1)] md:text-sm text-xs">{filterString(detail, 14)}...</p>
          </div>
        </div>
      </div>
    ); 
}
