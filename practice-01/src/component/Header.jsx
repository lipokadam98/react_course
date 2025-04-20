import Logo from '../assets/investment-calculator-logo.png';

export default function Header() {
    return (
        <section id="header">
            <img src={Logo} alt='Investment Logo'/>
            <h1>
                React Investment Calculator
            </h1>
        </section>
    );
}