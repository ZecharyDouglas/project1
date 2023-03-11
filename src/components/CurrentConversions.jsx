import { convertGBPtoBTC , convertUSDtoBTC , convertEURtoBTC } from "../utils/conversions"

const CurrentConversions = (state) =>{
    
    return (
        <div>
            <hr />
            <hr />
            <hr />
            <hr />
            <div className="flex justify-center">
                <table class="table-auto border shadow-lg border-black bg-blue-200 rounded-lg overflow-hidden mt-4 w-2/3">  
                    <tr>
                        <th className="text-center bg-blue-200 col-span-2 p-3" colspan="2">Current Conversion Rates</th>
                    </tr>
                <tbody>
                <tr className="border border-black bg-slate-100">
                    <td className="border border-black bg-slate-100 py-3 px-1 text-center">1 BitCoin = {state.currency.usdRate} {state.currency.usdCode}</td>
                    <td className="border border-black bg-slate-100 py-3 px-1 text-center">1 {state.currency.usdCode} = {convertUSDtoBTC(state.currency.usdRate)} BTC</td>
                </tr>
                <tr className="border border-black bg-slate-100">
                    <td className="border border-black bg-slate-100 py-3 px-1 text-center">1 BitCoin = {state.currency.eurRate} {state.currency.eurCode} </td>
                    <td className="border border-black bg-slate-100 py-3 px-1 text-center">1 {state.currency.eurCode} = {convertUSDtoBTC(state.currency.eurRate)} BTC</td>
                </tr>
                <tr className="border border-black bg-slate-100">
                    <td className="border border-black bg-slate-100 py-3 px-1 text-center">1 BitCoin = {state.currency.gbpRate} {state.currency.gbpCode} </td>
                    <td className="border border-black bg-slate-100 py-3 px-1 text-center">1 {state.currency.gbpCode} = {convertUSDtoBTC(state.currency.gbpRate)} BTC</td>
                </tr>
                </tbody>
                
            </table>
            </div>
            
    </div>
    )
}

export default CurrentConversions