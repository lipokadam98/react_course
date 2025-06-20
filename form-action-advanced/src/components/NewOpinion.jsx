import {use, useActionState} from "react";
import Message from "./Message.jsx";
import {OpinionsContext} from "../store/opinions-context.jsx";
import Submit from "./Submit.jsx";

const defaultActionState = {
  values: {
    userName: '',
    title: '',
    body: '',
  },
  errors: []
};
export function NewOpinion() {

  const { addOpinion } = use(OpinionsContext);

  async function opinionAction(previousState, formData) {
    const userName = formData.get('userName');
    const title = formData.get('title');
    const body = formData.get('body');

    const values = {
      userName,
      title,
      body
    }

    let errors = [];

    if(isEmpty(userName)) {
      errors.push('Your name is required');
    }

    if(isEmpty(title)){
      errors.push('Title is required');
    }

    if(isEmpty(body)){
      errors.push('Opinion is required');
    }

    if(errors.length > 0){
      return {
        values,
        errors,
      }
    }
    await addOpinion({ title, body, userName })
    return defaultActionState
  }


  const [formState, formAction, pending] = useActionState(opinionAction, defaultActionState);

  return (
    <div id="new-opinion">
      <h2>Share your opinion!</h2>
      <form action={formAction}>
        <div className="control-row">
          <p className="control">
            <label htmlFor="userName">Your Name</label>
            <input type="text" id="userName" name="userName" defaultValue={formState.values.userName}/>
          </p>

          <p className="control">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" defaultValue={formState.values.title}/>
          </p>
        </div>
        <p className="control">
          <label htmlFor="body">Your Opinion</label>
          <textarea id="body" name="body" rows={5} defaultValue={formState.values.body}></textarea>
        </p>

        <Submit/>
      </form>
      {
          formState.errors.length > 0 &&
          <Message messages={formState.errors} timeout={2000} title='Error'/>
      }
    </div>
  );
}


function isEmpty(text){
  return text.trim().length === 0;
}