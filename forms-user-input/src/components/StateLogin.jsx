import Input from "./Input.jsx";
import {hasMinLength, isEmail, isNotEmpty} from "../util/validation.js";
import {useInput} from "../hooks/useInput.js";

export default function StateLogin() {

    const {
        value: emailValue,
        handleInputChange: handleEmailChange,
        handleInputBlur: handleEmailBlur,
        hasError: emailHasError,
    } = useInput('', (value) => isEmail(value) && isNotEmpty(value));

    const {
        value: passwordValue,
        handleInputChange: handlePasswordChange,
        handleInputBlur: handlePasswordBlur,
        hasError: passwordHasError,
    } = useInput('', (value) => hasMinLength(value, 6));

    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>

            <div className="control-row">
                <Input label="Email"
                       id="email"
                       type="email"
                       name="email"
                       onBlur={handleEmailBlur}
                       onChange={handleEmailChange}
                       value={emailValue}
                       error={emailHasError && 'Please enter a valid email'}
                />

                <div className="control no-margin">
                    <Input label="Password"
                           id="password"
                           type="password"
                           name="password"
                           onBlur={handlePasswordBlur}
                           onChange={handlePasswordChange}
                           value={passwordValue}
                           error={passwordHasError && 'Please enter a valid password'}
                    />
                </div>
            </div>

            <p className="form-actions">
                <button className="button button-flat">Reset</button>
                <button className="button">Login</button>
            </p>
        </form>
    );
}
