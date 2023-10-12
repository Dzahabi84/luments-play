import axios from "axios";

const options = {
    headers: {
      accept: 'application/json',
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MGVlNWYzY2Q3ODEyZTNiZjVkOTJiNmM3MDJmYjVmYSIsInN1YiI6IjY1MWZmMWFmM2QzNTU3MDEzYTlmOTg3YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3m8aQhFhrSZE1Lz47N24b_2Bx6NkGF4LSQRYnCAkmZo`
    }
};

//home loader
export const discover = async () => {
    try {
      const response = await axios.get('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=pularity.desc', options);
      if (response.status !== 200) {
        throw new Error(`Request failed with status: ${response.status}`);
      }
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error.message);
      throw error;
    }
  }