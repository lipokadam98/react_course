import PageContent from "../components/PageContent";
import {useRouteError} from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

export default function ErrorPage() {

    const error = useRouteError();

    let title = 'An error occurred!';
    let message = 'Something went wrong!';

    if(error.status === 500){
        message = JSON.parse(error.data).message;
    }

    if(error.status === 404){
        title = 'Not found!';
        message = 'The page you are looking for does not exist!';
    }

    return <>
        <MainNavigation/>
        <PageContent title={title}>
            <p>{message}</p>
        </PageContent>
    </>;
}