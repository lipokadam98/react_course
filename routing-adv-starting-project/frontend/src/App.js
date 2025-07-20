import RootLayout from "./pages/RootLayout";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from "./pages/HomePage";
import EventsPage, {eventsLoader} from "./pages/Events";
import EventDetailPage, {eventsDetailLoader} from "./pages/EventDetail";
import NewEventPage from "./pages/NewEvent";
import EditEventPage from "./pages/EditEvent";
import EventLayout from "./pages/EventLayout";
import ErrorPage from "./pages/Error";

const router = createBrowserRouter([
  {
    path: '/', element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
      { element: <HomePage />,  index: true },
      { path: 'events', element: <EventLayout />, children: [
          {
              element: <EventsPage/>,
              index: true,
              loader: eventsLoader
          },
          { path: ':eventId', element: <EventDetailPage/>, loader: eventsDetailLoader },
          { path: 'new', element: <NewEventPage/> },
          { path: ':eventId/edit', element: <EditEventPage/> }
        ] },
    ]
  },
])

function App() {
  return <RouterProvider router={router} />;
}

export default App;
