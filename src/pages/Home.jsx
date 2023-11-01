import { Link, useLoaderData } from "react-router-dom";
import Card from "../components/Card";
import CarouselMovie from "../components/CarouselMovie";
import { Carousel, IconButton } from "@material-tailwind/react";

const Home = () => {
  const data = useLoaderData()
  if (data.isLoading) {
    return null;
  } else {
    return (
      <div>
        <Carousel loop={true} autoplay={true} autoplayDelay={4000}>
          {data.nowPlayingData.results.slice(0, 9).map((item) => (
            <Link to={`now-playing/movie/${item.id.toString()}`} key={item.id}>
              <CarouselMovie
                rating={item.vote_average}
                title={item.original_title}
                year={item.release_date}
                detail={item.overview}
                backdrop={item.backdrop_path}
              />
            </Link>
          ))}
        </Carousel>
        <div className="bg-black-900 flex justify-center py-11">
          <main className="w-11/12 md:w-9/12">
            <section className="for-you">
              <header id="for-you" >
                <h1 className="text-[2rem] text-center md:text-[2rem] font-bold text-orange-500">
                  For You
                </h1>
              </header>
              <main className="flex-wrap flex justify-around">
                {data.discoverData.results.map((item) => (
                  <Link to={`for-you/movie/${item.id.toString()}`} key={item.id}>
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
