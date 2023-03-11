import { useState } from "react"
    const Conversions = (state)=>{

    
    const currencyArray = Object.entries(state.currency)
    const newArray = [ currencyArray[1], currencyArray[3], currencyArray[5]]
    
    const [sort , setSort] = useState(false)
    const [arrayState , setArrayState] = useState(newArray)
    const [userInput , setUserInput] = useState('')
    const [selectedCurrency , setSelectedCurrency] = useState('usdRate')
    const [convertedValue , setConvertedValue] = useState()
    
    for (let index = 0; index < 3; index++) {
        switch (arrayState[index][0]) {
        case "usdRate":
            arrayState[index][0]="USD Exchange Rate"
            break;
        case "eurRate":
            arrayState[index][0]="EUR Exchange Rate"
            break;
        case "gbpRate":
            arrayState[index][0]="BGP Exchange Rate"
            break;
        default:
            break;
    }
        
    }
    

    const ascendingSort = () =>{
    newArray.sort((a,b)=>{
        if (a[1] === b[1]) {
            return 0;
        }
        else {
            return (a[1] > b[1]) ? -1 : 1;
        }
    });
    setArrayState(newArray)
    }

    const descendingSort = () =>{
        newArray.sort((a,b)=>{
            if (a[1] === b[1]) {
                return 0;
            }
            else {
                return (a[1] < b[1]) ? -1 : 1;
            }
        });
        setArrayState(newArray)
    }
    const sortCurrency = () =>{
        setSort(!sort)
        if(sort==true)
            {descendingSort()}
        else
            {ascendingSort()}
    }
    
    function handleInputChange(event) {
        setUserInput(event.target.value);
    }

    const handleSelectedCurrency = (event) =>{
        setSelectedCurrency(event.target.value)
    }
    const convertCurrency = () =>{
       switch (selectedCurrency) {
        case "usdRate":
            setConvertedValue( userInput * (1 / state.currency.usdRate))
            break;
        case "gbpRate":
            setConvertedValue( userInput * (1 / state.currency.gbpRate))
            break;
        case "eurRate":
            setConvertedValue( userInput * (1 / state.currency.eurRate))
            break;
        default:
            break;
       }
    }

    return (<>
        <hr />
        <hr />
        <hr />
        <hr />
        <div className=" flex justify-center mt-3">
        <table class="border border-black rounded-lg shadow-lg overflow-hidden w-1/2">
            <tr className=" text-right">
                <th class="p-3 text-center bg-gray-300" colspan="2">
                    Current BitCoin Exchange Rates
                </th>
            </tr>
            <tr>
                <td class=" text-center border border-black py-3 px-1">{arrayState[0][0]}</td>
                <td class=" text-center border border-black py-3 px-1">{arrayState[0][1]}</td>
            </tr>
            <tr>
                <td class=" text-center border border-black py-3 px-1">{arrayState[1][0]}</td>
                <td class=" text-center border border-black py-3 px-1">{arrayState[1][1]}</td>
            </tr>
            <tr>
                <td class=" text-center border border-black py-3 px-1">{arrayState[2][0]}</td>
                <td class=" text-center border border-black py-3 px-1">{arrayState[2][1]}</td>
            </tr>
        </table>
        </div>
        <div class="flex justify-center mt-4">
            <button onClick={sortCurrency} className="p-3 border-2 border-b-teal-600 hover:bg-white rounded-lg bg-blue-200 shadow-lg">Sort Currency!</button>
        </div>
        
        <div class="flex justify-center mt-10">
            <label htmlFor="currencySelector"></label>
            <select name="currencySelector" id="currencySelector" onChange={handleSelectedCurrency} class="bg-blue-200 text-white border-b-teal-600 hover:bg-white">
                <option value="usdRate">USD</option>
                <option value="gbpRate">GBP</option>
                <option value="eurRate">EUR</option>
            </select>
            <input type="text" value={userInput} onChange={handleInputChange} class=" mx-2 border-2 rounded-lg border-black shadow-lg"/>
            <button className="p-1 border-2 border-b-teal-600 hover:bg-white rounded-lg bg-blue-200 shadow-lg" onClick={convertCurrency}>Convert</button>
        </div>
        <div class="flex justify-center mt-10">Your currency Converted to BitCoin: {convertedValue}</div>

    </>)
}
export default Conversions