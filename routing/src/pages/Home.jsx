import {Link,useNavigate} from "react-router-dom";

export default function Home() {

    const navigate = useNavigate();

    function navigateHandler(){
        navigate('products');
    }

    return <>
        <h1>Home</h1>
        <p>Welcome to the home page</p>
        <p>Go to <Link to='products'>the list of products</Link></p>
        <p>
            <button onClick={navigateHandler}>Navigate</button>
        </p>
    </>;
}