import { useContext } from "react"
import { DataContext } from "../../Context/ApiContext"
import Today from "./Today";
import { UnitContext } from "../../Context/UnitContext";

export default function TodayWeather(){

    // data context 
    const {data} = useContext(DataContext);

    // unit context 
    const {unit} = useContext(UnitContext);

    console.log(data)

    return(
        <div className="block">
            <div className="bg-[#ffffff58] p-5 mb-5 rounded-2xl border border-[#ffff]">
                <div className="flex justify-between gap-13 text-[#6b6b6b]">
                    <p>
                        { data ? `${data.location.country}, ${ data.location.name}` : '--:--'}
                    </p>
                    <p>{data? data.forecast.forecastday[0].date : '--/--/----'}</p>
                </div>

                <div>
                    <div className="text-center my-10">
                        <h1 className="text-8xl">{data ? data.current[`temp_${unit}`] : '--'}<span className="text-4xl">°{unit.toUpperCase()}</span></h1>
                        <div className="flex justify-center">
                            <img src={data && data.current.condition.icon } alt="weather-icon" className="w-[100px]"/>
                        </div>
                        <h5 className="text-3xl font-medium">{data? data.current.condition.text : '--'}</h5>
                    </div>
                </div>
                <div className="flex justify-between text-[#848484]">
                    <p>Latitude: {data ? data.location.lon : '--'}</p>
                    <p>Longitude: {data ? data.location.lat : '--'}</p>
                </div>
            </div>
            <Today />
        </div>
    )
}