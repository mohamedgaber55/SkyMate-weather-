import { useContext } from "react";
import { UnitContext } from "../../Context/UnitContext";

export default function NextDay(props){

    // unit context 
    const {unit} = useContext(UnitContext);

    return(
        <div className="bg-[#ffffff58] p-5 rounded-2xl border border-[#ffff]">
            <div className="flex justify-between">
                <p className="text-[#6b6b6b]">{props.date}</p>
                <p className="text-[#848484]">{props.day}</p>
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

            <div>
                <div className="flex justify-between flex-wrap">
                    <div className="text-center w-full lg:w-auto bg-[#ffffff58] px-4 py-2 m-1.5 rounded-xl border border-[#ffff]">
                        <p>Minimum Temperature :</p>
                        <p>{props.minTemp}</p>
                    </div>
                    <div className="text-center w-full lg:w-auto bg-[#ffffff58] px-4 py-2 m-1.5 rounded-xl border border-[#ffff]">
                        <p>Maximum Temperature :</p>
                        <p>{props.maxTemp}</p>
                    </div>
                    <div className="text-center w-full lg:w-auto bg-[#ffffff58] px-4 py-2 m-1.5 rounded-xl border border-[#ffff]">
                        <p>Chance of Rain :</p>
                        <p>{props.rain}%</p>
                    </div>
                </div>

                <div className="flex justify-between flex-wrap">
                    <div className="text-center w-full lg:w-auto bg-[#ffffff58] px-4 py-2 m-1.5 rounded-xl border border-[#ffff]">
                        <p>Average Humidity :</p>
                        <p>{props.humidity}%</p>
                    </div>
                    <div className="text-center w-full lg:w-auto bg-[#ffffff58] px-4 py-2 m-1.5 rounded-xl border border-[#ffff]">
                        <p>Average Visibility :</p>
                        <p>{props.visibility}</p>
                    </div>
                    <div className="text-center w-full lg:w-auto bg-[#ffffff58] px-4 py-2 m-1.5 rounded-xl border border-[#ffff]">
                        <p>Max Wind Speed :</p>
                        <p>{props.wind}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}