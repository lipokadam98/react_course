import Input from "./Input.jsx";

export default function Calculator({inputChanged}){
    return (
        <section id='user-input'>
            <div className='input-group'>
                <Input id={'initialInvestment'} label='Initial investment' inputChanged={inputChanged}/>
                <Input id={'annualInvestment'} label='Annual investment' inputChanged={inputChanged}/>
            </div>
            <div className='input-group'>
                <Input id={'expectedReturn'} label={'Expected return'} inputChanged={inputChanged}/>
                <Input id={'duration'} label={'Duration'} inputChanged={inputChanged}/>
            </div>
        </section>
    );
}
