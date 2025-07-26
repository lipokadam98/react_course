import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import EditEventPage from './pages/EditEvent';
import ErrorPage from './pages/Error';
import NewEventPage from './pages/NewEvent';
import {eventAction} from './components/EventForm';
import NewsletterPage, {action as newsletterAction} from './pages/Newsletter';
import EventDetailPage, {deleteEventAction, eventsDetailLoader} from "./pages/EventDetail";
import EventLayout from "./pages/EventLayout";
import RootLayout from "./pages/RootLayout";
import HomePage from "./pages/HomePage";
import EventsPage, {eventsLoader} from "./pages/Events";

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <HomePage /> },
            {
                path: 'events',
                element: <EventLayout />,
                children: [
                    {
                        index: true,
                        element: <EventsPage />,
                        loader: eventsLoader,
                    },
                    {
                        path: ':eventId',
                        id: 'event-detail',
                        loader: eventsDetailLoader,
                        children: [
                            {
                                index: true,
                                element: <EventDetailPage />,
                                action: deleteEventAction,
                            },
                            {
                                path: 'edit',
                                element: <EditEventPage />,
                                action: eventAction,
                            },
                        ],
                    },
                    {
                        path: 'new',
                        element: <NewEventPage />,
                        action: eventAction,
                    },
                ],
            },
            {
                path: 'newsletter',
                element: <NewsletterPage />,
                action: newsletterAction,
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;