import {Form, useNavigate, useNavigation, useActionData, redirect} from 'react-router-dom';

import classes from './EventForm.module.css';

function EventForm({ method, event }) {
  const actionData = useActionData();
  const navigate = useNavigate();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  function cancelHandler() {
    navigate('..');
  }

  return (
    <Form method={method} className={classes.form}>

        {
            actionData &&  actionData.errors &&
            <ul>
                {
                    Object.values(actionData.errors).map((error) =>
                        <li key={error}>{error}</li>
                    )
                }
            </ul>
        }
      <p>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" name="title" required defaultValue={event?.title}/>
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input id="image" type="url" name="image" required defaultValue={event?.image}/>
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input id="date" type="date" name="date" required defaultValue={event?.date}/>
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea id="description" name="description" rows="5" required defaultValue={event?.description}/>
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler} disabled={isSubmitting}>
          Cancel
        </button>
        <button disabled={isSubmitting}>{isSubmitting ? 'Submitting...' : 'Save'}</button>
      </div>
    </Form>
  );
}

export default EventForm;

export async function eventAction({request, params}) {
    const method = request.method;
    const data = await request.formData();

    const eventData = {
        title: data.get('title'),
        date: data.get('date'),
        description: data.get('description'),
        image: data.get('image'),
    }

    let url = 'http://localhost:8080/events';

    if(method === 'PATCH'){
        const eventId = params.eventId;
        url += '/' + eventId;
    }

    const response = await fetch(url, {
        method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(eventData)
    })

    if(response.status === 422){
        return response;
    }

    if(!response.ok){
        return new Response(JSON.stringify({
            message: 'Could not create new event',
        }), { status: 500 });
    }

    return redirect('/events');
}