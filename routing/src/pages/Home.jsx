import {Link} from "react-router-dom";

export default function Home() {
    return <>
        <h1>Home</h1>
        <p>Welcome to the home page</p>
        <p>Go to <Link to='/products'>the list of products</Link></p>
    </>;
}