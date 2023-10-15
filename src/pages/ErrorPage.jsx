import { useRouteError, Link} from "react-router-dom"

export default function ErrorPage () {
    const err = useRouteError()
    console.log(err);
    return (
        <div className="items-center pt-[200px] text-white w-11/12 md:w-9/12 flex m-auto flex-col">
            <h1 className="font-bold text-[100px]">404</h1>
            <h2 className="text-xl">The requested page does not exist.</h2>
            <Link className="underline text-orange-500 mt-5" to="/">Back to homepage</Link>
        </div>
    )
}