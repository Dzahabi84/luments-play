import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Home from "./pages/Home";
import { forYou, home, movieDetail, nowPlaying, popular, topRated, upcoming } from "./loader";
import MovieDetail from "./pages/MovieDetail";
import TopRated from "./pages/TopRated";
import Upcoming from "./pages/Upcoming";
import PagesLayout from "./layout/PagesLayout";
import NowPlaying from "./pages/NowPlaying";
import Popular from "./pages/Popular";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} errorElement={<ErrorPage />}>
      <Route index element={<Home />} loader={home} />
      <Route path="for-you/movie/:id" element={<MovieDetail />} loader={movieDetail}/>

      <Route path="top-rated" element={<PagesLayout />} loader={topRated}>
        <Route index element={<TopRated />} loader={topRated}/>
        <Route path="movie/:id" element={<MovieDetail />} loader={movieDetail}/>
      </Route>

      <Route path="upcoming" element={<PagesLayout />}>
        <Route index element={<Upcoming />} loader={upcoming}/>
        <Route path="movie/:id" element={<MovieDetail />} loader={movieDetail}/>
      </Route>

      <Route path="popular" element={<PagesLayout />}>
        <Route index element={<Popular />} loader={popular}/>
        <Route path="movie/:id" element={<MovieDetail />} loader={movieDetail}/>
      </Route>

      <Route path="now-playing" element={<PagesLayout />}>
        <Route index element={<NowPlaying />} loader={nowPlaying}/>
        <Route path="movie/:id" element={<MovieDetail />} loader={movieDetail}/>
      </Route>
    </Route>
  )
);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
