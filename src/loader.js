import axios from "axios";

//home
export const home = async () => {
  const options = {
    headers: {
      accept: "application/json",
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MGVlNWYzY2Q3ODEyZTNiZjVkOTJiNmM3MDJmYjVmYSIsInN1YiI6IjY1MWZmMWFmM2QzNTU3MDEzYTlmOTg3YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3m8aQhFhrSZE1Lz47N24b_2Bx6NkGF4LSQRYnCAkmZo`,
    },
  };

  try {
    const discover = await axios.get(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
      options
    );
    const nowPlaying = await axios.get(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      options
    );
    if (discover.status === 200 && nowPlaying.status === 200) {
      const discoverData = discover.data;
      const nowPlayingData = nowPlaying.data;
      return { nowPlayingData, discoverData };
    } else {
      throw Error({
        status: detail.status,
        message: "Page not found. The requested page does not exist",
      });
    }
  } catch (error) {
    throw Error(error);
  }
};

// top rated
export const topRated = async () => {
  const options = {
    headers: {
      accept: "application/json",
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MGVlNWYzY2Q3ODEyZTNiZjVkOTJiNmM3MDJmYjVmYSIsInN1YiI6IjY1MWZmMWFmM2QzNTU3MDEzYTlmOTg3YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3m8aQhFhrSZE1Lz47N24b_2Bx6NkGF4LSQRYnCAkmZo`,
    },
  };

  try {
    const top = await axios.get(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      options
    );
    if (top.status === 200) {
      const topData = top.data;
      return topData;
    } else {
      throw Error({
        status: detail.status,
        message: "Page not found. The requested page does not exist",
      });
    }
  } catch (error) {
    throw Error(error);
  }
};

// for you
export const forYou = async () => {
  const options = {
    headers: {
      accept: "application/json",
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MGVlNWYzY2Q3ODEyZTNiZjVkOTJiNmM3MDJmYjVmYSIsInN1YiI6IjY1MWZmMWFmM2QzNTU3MDEzYTlmOTg3YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3m8aQhFhrSZE1Lz47N24b_2Bx6NkGF4LSQRYnCAkmZo`,
    },
  };

  try {
    const forYou = await axios.get(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
      options
    );
    if (forYou.status === 200) {
      const forYouData = forYou.data;
      return forYouData;
    } else {
      throw Error({
        status: detail.status,
        message: "Page not found. The requested page does not exist",
      });
    }
  } catch (error) {
    throw Error(error);
  }
};

//upcoming
export const upcoming = async () => {
  const options = {
    headers: {
      accept: "application/json",
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MGVlNWYzY2Q3ODEyZTNiZjVkOTJiNmM3MDJmYjVmYSIsInN1YiI6IjY1MWZmMWFmM2QzNTU3MDEzYTlmOTg3YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3m8aQhFhrSZE1Lz47N24b_2Bx6NkGF4LSQRYnCAkmZo`,
    },
  };

  try {
    const upcoming = await axios.get(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      options
    );
    if (upcoming.status === 200) {
      const upcomingData = upcoming.data;
      return upcomingData;
    } else {
      throw Error({
        status: detail.status,
        message: "Page not found. The requested page does not exist",
      });
    }
  } catch (error) {
    throw Error(error);
  }
};

//popular
export const popular = async () => {
  const options = {
    headers: {
      accept: "application/json",
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MGVlNWYzY2Q3ODEyZTNiZjVkOTJiNmM3MDJmYjVmYSIsInN1YiI6IjY1MWZmMWFmM2QzNTU3MDEzYTlmOTg3YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3m8aQhFhrSZE1Lz47N24b_2Bx6NkGF4LSQRYnCAkmZo`,
    },
  };

  try {
    const popular = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      options
    );
    if (popular.status === 200) {
      const popularData = popular.data;
      return popularData;
    } else {
      throw Error({
        status: detail.status,
        message: "Page not found. The requested page does not exist",
      });
    }
  } catch (error) {
    throw Error(error);
  }
};

//now playing
export const nowPlaying = async () => {
  const options = {
    headers: {
      accept: "application/json",
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MGVlNWYzY2Q3ODEyZTNiZjVkOTJiNmM3MDJmYjVmYSIsInN1YiI6IjY1MWZmMWFmM2QzNTU3MDEzYTlmOTg3YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3m8aQhFhrSZE1Lz47N24b_2Bx6NkGF4LSQRYnCAkmZo`,
    },
  };

  try {
    const nowPlaying = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      options
    );
    if (nowPlaying.status === 200) {
      const nowPlayingData = nowPlaying.data;
      return nowPlayingData;
    } else {
      throw Error({
        status: detail.status,
        message: "Page not found. The requested page does not exist",
      });
    }
  } catch (error) {
    throw Error(error);
  }
};

// movie detail
export const movieDetail = async ({ params }) => {
  const options = {
    headers: {
      accept: "application/json",
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MGVlNWYzY2Q3ODEyZTNiZjVkOTJiNmM3MDJmYjVmYSIsInN1YiI6IjY1MWZmMWFmM2QzNTU3MDEzYTlmOTg3YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3m8aQhFhrSZE1Lz47N24b_2Bx6NkGF4LSQRYnCAkmZo`,
    },
  };

  const { id } = params;

  try {
    const detail = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
      options
    );
    if (detail.status === 200) {
      const detailData = detail.data;
      return detailData;
    } else {
      throw Error({
        status: detail.status,
        message: "Page not found. The requested page does not exist",
      });
    }
  } catch (error) {
    throw Error(error);
  }
};
