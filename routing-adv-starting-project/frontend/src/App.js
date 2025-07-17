import RootLayout from "./components/RootLayout";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from "./pages/HomePage";
import EventsPage, {eventsLoader} from "./pages/Events";
import EventDetailPage from "./pages/EventDetail";
import NewEventPage from "./pages/NewEvent";
import EditEventPage from "./pages/EditEvent";
import EventLayout from "./components/EventLayout";

const router = createBrowserRouter([
  {
    path: '/', element: <RootLayout />, children: [
      { element: <HomePage />,  index: true },
      { path: 'events', element: <EventLayout />, children: [
          {
              element: <EventsPage/>,
              index: true,
              loader: eventsLoader
          },
          { path: ':eventId', element: <EventDetailPage/> },
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
