import { 
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from "react-router-dom"
import RootLayout from "./layout/RootLayout"
import Home from "./pages/Home"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route
        index
        element={<Home />}
      />
      {/* <Route
        path="top-rated"
        element={<TopRated />}
      />
      <Route
        path="upcoming"
        element={<Upcoming />}
      /> */}

    </Route>
))

function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
