export default function Input({label,inputChanged,...rest}){
    return (
        <div>
            <label>{label}</label>
            <input {...rest} type='number' onChange={inputChanged}/>
        </div>

    )
}