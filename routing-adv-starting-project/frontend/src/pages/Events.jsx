import EventsList from '../components/EventsList';
import {Await, useLoaderData} from "react-router-dom";
import {Suspense} from "react";

function EventsPage() {

    const data = useLoaderData();

    /*if (data.isError){
        return <p>{data.message}</p>;
    }*/

    const events = data.events;

    return (
        <Suspense fallback={<p style={{textAlign: 'center'}}>Loading...</p>}>
            <Await resolve={events}>
                {(loadedEvents) => <EventsList events={loadedEvents} />}
            </Await>
        </Suspense>
    );
}

export default EventsPage;

async function loadEvents(){
    const response = await fetch('http://localhost:8080/events');
    if (!response.ok) {
        /*return {
            isError: true,
            message: 'Could not load events',
        }*/
        throw new Response(JSON.stringify({
            message: 'Could not load events',
        }),{ status: 500 });
    } else {
        const resData = await response.json();
        return resData.events;
    }
}

export async function eventsLoader() {
    return {
        events: loadEvents(),
    };
}