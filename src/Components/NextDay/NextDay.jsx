import { useContext } from "react";
import { UnitContext } from "../../Context/UnitContext";

export default function NextDay(props){

    // unit context 
    const {unit} = useContext(UnitContext);

    return(
        <div className="bg-[#ffffff58] p-4 rounded-2xl border border-[#e1e1e18f]">
            <div className="flex justify-between">
                <p className="text-[#414141]">{props.date}</p>
                <p className="text-[#414141]">{props.day}</p>
            </div>

            <div>
                <div className="text-center my-8.5">
                    <h1 className="text-8xl">{props.avgTemp}<span className="text-4xl">°{unit.toUpperCase()}</span></h1>
                    <div className="flex justify-center">
                            <img src={props.icon} alt="weather-icon" className="w-[100px]"/>
                    </div>
                    <h5 className="text-2xl font-medium">{props.desc}</h5>
                </div>
            </div>

            <div className="grid grid-cols-12">
                    <div className="col-span-12 md:col-span-12 lg:col-span-4 text-center w-full lg:w-auto bg-[#ffffff58] px-4 py-2 m-1.5 rounded-xl border border-[#e1e1e18f]">
                        <p>Minimum Temperature</p>
                        <p>{props.minTemp}</p>
                    </div>
                    <div className="col-span-12 md:col-span-12 lg:col-span-4 text-center w-full lg:w-auto bg-[#ffffff58] px-4 py-2 m-1.5 rounded-xl border border-[#e1e1e18f]">
                        <p>Maximum Temperature</p>
                        <p>{props.maxTemp}</p>
                    </div>
                    <div className="col-span-12 md:col-span-12 lg:col-span-4 text-center w-full lg:w-auto bg-[#ffffff58] px-4 py-2 m-1.5 rounded-xl border border-[#e1e1e18f]">
                        <p>Chance of Rain</p>
                        <p>{props.rain}%</p>
                    </div>

                    <div className="col-span-12 md:col-span-12 lg:col-span-4 text-center w-full lg:w-auto bg-[#ffffff58] px-4 py-2 m-1.5 rounded-xl border border-[#e1e1e18f]">
                        <p>Average Humidity</p>
                        <p>{props.humidity}%</p>
                    </div>
                    <div className="col-span-12 md:col-span-12 lg:col-span-4 text-center w-full lg:w-auto bg-[#ffffff58] px-4 py-2 m-1.5 rounded-xl border border-[#e1e1e18f]">
                        <p>Average Visibility</p>
                        <p>{props.visibility}</p>
                    </div>
                    <div className="col-span-12 md:col-span-12 lg:col-span-4 text-center w-full lg:w-auto bg-[#ffffff58] px-4 py-2 m-1.5 rounded-xl border border-[#e1e1e18f]">
                        <p>Max Wind Speed</p>
                        <p>{props.wind}</p>
                    </div>
            </div>
        </div>
    )
}