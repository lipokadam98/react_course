import EventItem from "../components/EventItem";
import {Await, redirect, useRouteLoaderData} from "react-router-dom";
import EventsList from "../components/EventsList";
import {Suspense} from "react";

export default function EventDetailPage() {
    const {event, events} = useRouteLoaderData('event-detail');
    return <>
        <Suspense fallback={<p style={{textAlign: 'center'}}>Loading...</p>}>
            <Await resolve={event}>
                {(loadedEvent) => <EventItem event={loadedEvent} />}
            </Await>
        </Suspense>
        <Suspense fallback={<p style={{textAlign: 'center'}}>Loading...</p>}>
            <Await resolve={events}>
                {(loadedEvents) => <EventsList events={loadedEvents} />}
            </Await>
        </Suspense>
    </>;
}

export async function eventsDetailLoader({request, params}) {
    const id = params.eventId;
    return {
        event: await loadEvent(id),
        events: loadEvents(),
    }
}

export async function deleteEventAction({request, params}) {
    const eventId = params.eventId;
    const response = await fetch('http://localhost:8080/events/'+eventId, {
        method: request.method,
    });

    if(!response.ok){
        return new Response(JSON.stringify({
            message: 'Could not delete event',
        }), { status: 500 });
    }

    return redirect('/events');
}

async function loadEvent(id){
    const response = await fetch('http://localhost:8080/events/' + id);

    if(!response.ok){
        return new Response(JSON.stringify({
            message: 'Could not fetch details for selected event',
        }), { status: 500 });
    }else{
        const resData = await response.json();
        return resData.event;
    }
}

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