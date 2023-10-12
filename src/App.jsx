import { 
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from "react-router-dom"
import RootLayout from "./layout/RootLayout"
import Home from "./pages/Home"
import { discover } from "./loader"
import ApiDataProvider from "./context/ApiData"

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
    <div className="bg-black-900 h-screen box-border">
      <ApiDataProvider>
        <RouterProvider router={router}/>
      </ApiDataProvider>
    </div>
  )
}

export default App
