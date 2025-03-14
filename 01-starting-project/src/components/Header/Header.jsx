import reactImg from "../../assets/react-core-concepts.png";
import './Header.css';

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

export default function Header() {

    const choices = ['Fundamental', 'Core', 'Crucial']
    return (
        <header>
            <img src={reactImg} alt="Stylized atom"/>
            <h1>React Essentials</h1>
            <p>
                {choices[getRandomInt(choices.length)]} React concepts you will need for almost any app you are
                going to build!
            </p>
        </header>
    );
}
