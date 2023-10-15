import { filterString } from "../function";

export default function Card({ poster, title, year, rating, detail }) {
    return (
      <div className={`w-[150px] h-[300px] group hover:scale-125 duration-100 cursor-pointer md:py-0 bg-cover md:w-card md:h-card items-end flex text-transparent hover:text-white`}>
        <img className="rounded-lg object-cover" src={`https://image.tmdb.org/t/p/original/${poster}`} alt="" />
        <div className="py-6 px-6 group-hover:drop-shadow-[0px_3px_66px_45px_rgba(0,0,0,1)] absolute bottom-0">
            <h1 className="text-[16px] md:text-[16px] drop-shadow-[0px_3px_66px_45px_rgba(0,0,0,1)] font-bold">{title}</h1>
            <div className="relative drop-shadow-[0px_3px_66px_45px_rgba(0,0,0,1)] mt-1 text-xs">
                <span>{year}</span>
                <span className="right-0 drop-shadow-[0px_3px_66px_45px_rgba(0,0,0,1)] absolute">{rating}&#9733;</span>
            </div>
            <p className="drop-shadow-[0px_3px_66px_45px_rgba(0,0,0,0.64)] text-xs">
                {filterString(detail, 10)}...
            </p>
        </div>
      </div>
    );
}