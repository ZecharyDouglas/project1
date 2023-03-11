import axios from "axios"
import { useState } from "react"
import { useEffect , useReducer } from "react"
import { convertGBPtoBTC , convertUSDtoBTC , convertEURtoBTC } from "../utils/conversions"
import CurrentConversions from "./CurrentConversions"
import Conversions from "./ConversionsTab"
import Date from "./Date"
const Navbar = () =>{
    const url='https://api.coindesk.com/v1/bpi/currentprice.json'
    const [rates,setRates] = useState({})
    const [loadStatus,setLoadStatus] = useState(false)
    const [showConversions,setShowConversions] = useState(false)


    const initialState ={
        eurCode:'',
        eurRate:null,
        gbpCode:'',
        gbpRate:null,
        usdCode:'',
        usdRate:null,
        
    }

    const reducer = (state , action)=>{
        
        switch (action.type) {
            case "updateRates":
                return{
                    ...state,
                    eurCode:action.eurCode,
                    eurRate:action.eurRate,
                    gbpCode:action.gbpCode,
                    gbpRate:action.gbpRate,
                    usdCode:action.usdCode,
                    usdRate:action.usdRate
                    
                }
                break;
        
            default:
                return state
                break;
        }
        
    }//end of reducer

    const [state , dispatch] = useReducer(reducer , initialState)
    
    const fetchRates = ()=>{
        axios.get(url)
    .then(res=>{
        //console.log(res.data.bpi)
        setRates((res.data.bpi)) 
        const {EUR : {code : eurCodeU} , EUR : {rate_float : eurRateU} } = rates
        const {USD : {code : usdCodeU} , USD : {rate_float : usdRateU} } = rates
        const {GBP : {code : gbpCodeU} , GBP : {rate_float : gbpRateU} } = rates
        dispatch({
            type : "updateRates", 
            eurCode:eurCodeU,
            eurRate:eurRateU,
            gbpCode:gbpCodeU,
            gbpRate:gbpRateU,
            usdCode:usdCodeU,
            usdRate:usdRateU  
        })
        
    }).catch(err=>{
        console.log(err.message)
    }).finally(
    )
    }
    //END OF FR
    useReducer(()=>{
        fetchRates()
    }, [])

    const printRates = ()=>{
        fetchRates()
        setShowConversions(false)
        setLoadStatus(!loadStatus)
    } 
    const switchConversions = ()=>{
        fetchRates()
        setLoadStatus(false)
        setShowConversions(!showConversions)
    }

   return(<>
    <div className=" bg-slate-400 h-16 w-full p-3 border border-b-2 border-black  shadow-2xl">
        <button className="bg-blue-200 hover:bg-white rounded-lg mt-center mr-3 p-1 border-2 border-b-teal-600" onClick={printRates}>Current Conversion Rates</button>
        <button className="bg-blue-200 hover:bg-white rounded-lg mt-center mr-3 p-1 border-2  border-b-teal-600" onClick={switchConversions}>Conversions</button>
    </div>
    <Date/>
    {loadStatus==true && <div className=""><CurrentConversions currency={state}/></div>}
    {showConversions==true && <Conversions currency={state}/> }
    
    </>
   )
}
export default Navbar
