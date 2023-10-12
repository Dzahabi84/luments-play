import { filterString } from "../function";

export default function Card({ poster, title, year, rating, detail }) {
    return (
      <div className={`group hover:scale-125 duration-100 cursor-pointer py-5 md:py-0 mx-1 bg-cover md:w-card md:h-card items-end flex text-transparent hover:text-white`}>
        <img className="rounded-lg object-cover" src={`https://image.tmdb.org/t/p/original/${poster}`} alt="" />
        <div className="py-6 px-6 group-hover:drop-shadow-custom absolute bottom-0">
            <h1 className="text-xl font-bold">{title}</h1>
            <div className="relative mt-1 text-xs">
                <span>{year}</span>
                <span className="right-0 absolute">{rating}&#9733;</span>
            </div>
            <p className=" text-xs">
                {filterString(detail, 10)}...
            </p>
        </div>
      </div>
    );
}