import {formatter} from "../util/investment.js";

export default function Result({investmentResult}){
    console.log(investmentResult);
    return (<table id='result'>
        <thead>
            <tr>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Interest (Year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
            </tr>
        </thead>
        <tbody>
        {investmentResult.map(result=> {
            return <tr key={result.year}>
                <td>{result.year}</td>
                <td>{formatter.format(result.valueEndOfYear)}</td>
                <td>{formatter.format(result.interest)}</td>
                <td>{result.year}</td>
                <td>{result.year}</td>
            </tr>
        })}

        </tbody>
    </table>)
}