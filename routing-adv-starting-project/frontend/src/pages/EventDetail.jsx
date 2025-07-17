import {useParams} from "react-router-dom";

export default function EventDetailPage() {
    const params = useParams();
    return <section>
        <h1>Event detail page</h1>
        <p>Id: {params.eventId}</p>
    </section>;
}