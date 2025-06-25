export default function Header() {
    function onButtonClick() {
        console.log('Button clicked');
    }

    return <header id="main-header">
        <div id="title">
            <img src="logo.jpg" alt="logo"/>
            <h1>ReactFood</h1>
        </div>
        <button onClick={onButtonClick}>Cart (3)</button>

    </header>
}