import { Link, useLoaderData } from "react-router-dom";
import Card from "../components/Card";
import CarouselMovie from "../components/CarouselMovie";
import { useApiData } from "../context/ApiData";
import { Carousel, IconButton } from "@material-tailwind/react";

const Home = () => {
  const data = useApiData();
  if (data.isLoading) {
    return null;
  } else {
    return (
      <div>
        <Carousel loop={true} autoplay={true} autoplayDelay={4000}>
          {data.nowPlaying.data.results.slice(0, 9).map((item) => (
            <Link key={item.id}>
              <CarouselMovie
                rating={item.vote_average}
                title={item.original_title}
                year={item.release_date}
                detail={item.overview}
                id={item.id}
              />
            </Link>
          ))}
        </Carousel>
        <div className="bg-black-900 flex justify-center py-9">
          <main className="w-9/12">
            <section className="for-you">
              <header>
                <h1 className="text-[2rem] md:text-[2rem] py-7 font-bold text-orange-500">
                  For You
                </h1>
              </header>
              <main className="flex-wrap flex justify-center">
                {data.discover.data.results.map((item) => (
                  <Link key={item.id}>
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
      </div>
    );
  }
};

export default Home;
