import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import { useEffect } from "react";

const TopRated = () => {
  useEffect(() => {
    document.title = "Top Rated";
  }, []);
  const data = useLoaderData();
  return (
    <div className="bg-black-900 flex justify-center py-11">
      <main className="w-11/12 md:w-9/12">
        <section className="top-rated">
          <header id="upcoming">
            <h1 className="text-[2rem] text-ledft md:text-[2rem] font-bold text-orange-500">
              Top Rated
            </h1>
          </header>
          <main className="flex-wrap flex justify-around">
            {data.results.map((item) => (
              <Link to={`movie/${item.id.toString()}`} key={item.id}>
                <Card
                  rating={item.vote_average}
                  title={item.original_title}
                  year={item.release_date}
                  detail={item.overview}
                  poster={item.poster_path}
                />
              </Link>
            ))}
          </main>
        </section>
      </main>
    </div>
  );
};

export default TopRated;
