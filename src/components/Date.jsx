import { useState } from "react"
import axios from "axios"

const Date = ()=>{
  const url='https://api.coindesk.com/v1/bpi/currentprice.json'
  const [dateData, setDateData ] = useState()
  const [useAble, setUseAble] = useState(true)
  

  const refreshFunction = () => {
    
    if (useAble==true) {
      axios.get(url).then((res)=>{
      setDateData(res.data.time.updated)
    })
    setTimeout(() => {
      setUseAble(true)
    }, 30000);
    
    }
    else
      console.log(`You cant do that here, thats illegal`)
    
  }
  refreshFunction()
  return(<>
  <div class="flex mt-5"> 
  <h1 class="mr-2">Last Refreshed:</h1>{dateData}
  </div>
  <div>
    <button onClick={refreshFunction} class="mx-7 rounded-lg border-2 border-black bg-blue-200 p-1 hover:bg-red-500">Refresh Rates</button>
  </div>

  </>)

}
export default Date