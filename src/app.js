// import { data } from "autoprefixer"
import axios from "axios"
import { useState } from "react"
function App() {
    const [deg,setdeg]=useState("0")
    const[City,setcity]=useState("London")
    const[desc,setdesc]=useState("...")
    const[enteredvalue,setenteredvalue]=useState("")
    function handleinput(event){
        console.log(event.target.value)
        setenteredvalue(event.target.value)
    }
    function getdata() {
        var weather = axios(`https://api.openweathermap.org/data/2.5/weather?q=${enteredvalue}&appid=a2d35b40bbff4ecb39ca0dced8218500`)
weather.then(function(dalta){
    console.log(dalta.data.main.temp)
    setdeg(dalta.data.main.temp)
    console.log(dalta.data.name)
    setcity(dalta.data.name)
    setdesc(dalta.data.weather[0].main)
    console.log(dalta.data.weather[0].main)
    
})
    }
    return <div className="flex flew-row justify-center h-[100vh] items-center" >
        <div style={{ backgroundImage: "linear-gradient(120deg, #a6c0fe 0%, #f68084 100%)" }} className="p-2 rounded-md
 shadow">
            <h2 className="font-medium">Hey !🌦️</h2>
            <p className="text-xs">Do you want to know the weather report;</p>
            <input onChange={handleinput} type="text"
                className="rounded-m2 h-6 text-sm mt-2 p-1 outline-none" placeholder="City Name?" ></input><br />
            <button onClick={getdata} className="bg-black text-white rounded-lg p-2 text-xs mt-2">💭Get Report⛱️</button>
            <p className="text-xs mt-2">Degree:{deg} | City:{City} | Weather:{desc} </p>
        </div>
    </div>
}

export default App