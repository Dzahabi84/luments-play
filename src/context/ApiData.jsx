import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react"

export const ApiDataContext = createContext()

export const useApiData = () => {
    return useContext(ApiDataContext)
}

export const options = {
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MGVlNWYzY2Q3ODEyZTNiZjVkOTJiNmM3MDJmYjVmYSIsInN1YiI6IjY1MWZmMWFmM2QzNTU3MDEzYTlmOTg3YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3m8aQhFhrSZE1Lz47N24b_2Bx6NkGF4LSQRYnCAkmZo'
    }
};

export default function ApiDataProvider ({children}) {
    const [nowPlaying, setNowPlaying] = useState([])
    const [popular, setPopular] = useState([])
    const [topRated, setTopRated] = useState([])
    const [upcoming, setUpcoming] = useState([])
    const [discover, setDiscover] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        axios.all(
            [
                axios.get('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options),
                axios.get('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options),
                axios.get('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options),
                axios.get('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options),
                axios.get('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
            ]
        ).then(axios.spread((...data) => {
            setNowPlaying(data[0])
            setPopular(data[1])
            setTopRated(data[2])
            setUpcoming(data[3])
            setDiscover(data[4])
            setIsLoading(false)
        }))
    }, [])

    return (
        <ApiDataContext.Provider value={{discover, isLoading, nowPlaying, popular, topRated, upcoming}}>
            {children}
        </ApiDataContext.Provider>
    )
}