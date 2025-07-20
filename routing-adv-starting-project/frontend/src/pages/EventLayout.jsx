import EventsNavigation from "../components/EventsNavigation";
import {Outlet} from "react-router-dom";

export default function EventLayout() {
    return <>
        <EventsNavigation />
        <main>
            <Outlet></Outlet>
        </main>
    </>
}