import { useLoaderData } from "react-router-dom";
import Genre from "../components/Genre";
import { Chip } from "@material-tailwind/react";
import { useEffect } from "react";

const MovieDetail = () => {
  const data = useLoaderData();
  useEffect(() => {
    document.title = data.original_title
  }, [])
  return (
      <div className="relative flex h-full m-auto justify-center w-10/12 md:[800px] lg:w-[1000px]">
        <img
          className="hidden md:block drop-shadow-2xl h-[400px] w-full object-cover"
          src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}
          alt={data.original_title}
        />
        <div className="bg-black-900 md:bg-transparent md:pt-[230px] pt-11 block md:flex w-9/12 md:w-[600px] lg:w-[800px] md:flex-row  md:left-[40px] lg:left-[60px] absolute">
          <img
            className="rounded w-300px md:w-[220px]"
            src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
            alt={data.original_title}
          />
          <div className=" mt-5 md:text-left lg:text-left text-center md:ml-7 text-white">
            <h1 className="drop-shadow-2xl text-3xl font-bold">
              {data.original_title}
            </h1>
            <p className="italic">{data.tagline}</p>
            <p>
              {data.vote_average} &#9733; {data.vote_count} votes
            </p>
            <p>{data.runtime} mins</p>
            <p>Release date {data.release_date}</p>
            {data.genres.map((item) => (
              <div key={item.id} className="mt-3 inline-block mx-1">
                <Genre genre={item.name} />
              </div>
            ))}
            <div className="pb-[60px] absolute">
              <h2 className="pt-5 text-2xl font-bold my-3">Synopsis</h2>
              <p>{data.overview}</p>
              <div className="text-center pt-5 flex md:justify-start justify-around flex-row">
                <a href={`https://www.imdb.com/title/${data.imdb_id}/`}>
                  <Chip
                    className="md:w-[200px] md:h-[40px] w-[100px] rounded-full h-[35px]"
                    color="amber"
                    value="IMDb"
                  />
                </a>
                <a href={data.homepage}>
                  <Chip
                    className="md:ml-5 md:w-[200px] md:h-[40px] w-[100px] rounded-full h-[35px]"
                    color="red"
                    value="Homepage"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default MovieDetail;
