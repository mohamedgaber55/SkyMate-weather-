import { useContext } from "react";
import { DataContext } from "../../Context/ApiContext";
import TodaySection from "./TodaySection";
import { UnitContext } from "../../Context/UnitContext";

export default function Today(){

    // data context 
    const {data} = useContext(DataContext);

    // unit context 
    const {unit} = useContext(UnitContext)

    return(
        <>
            <div className="bg-[#ffffff58] p-4 mb-5 rounded-2xl border border-[#e1e1e18f] grid grid-cols-12">
                    <div className="col-span-12 md:col-span-12 lg:col-span-4">
                        <TodaySection title={`Average Temp:`} value={data? data.forecast.forecastday[0].day[`avgtemp_${unit}`] + '°' + unit.toUpperCase() : '--'}/>
                    </div>
                    <div className="col-span-12 md:col-span-12 lg:col-span-4">
                        <TodaySection title={'Min Temp:'} value={data? data.forecast.forecastday[0].day[`mintemp_${unit}`] + '°' + unit.toUpperCase() : '--'}/>
                    </div>
                    <div className="col-span-12 md:col-span-12 lg:col-span-4">
                        <TodaySection title={'Max Temp:'} value={data? data.forecast.forecastday[0].day[`maxtemp_${unit}`] + '°' + unit.toUpperCase() : '--'}/>
                    </div>
                    <div className="col-span-12 md:col-span-12 lg:col-span-3">
                        <TodaySection title={'Feels Like:'} value={data? data.current[`feelslike_${unit}`] + '°' + unit.toUpperCase() : '--'}/>
                    </div>
                    <div className="col-span-12 md:col-span-12 lg:col-span-4">
                        <TodaySection title={'Cloud Cover:'} value={data? data.current.cloud + '%' : '--'}/>
                    </div>
                    <div className="col-span-12 md:col-span-12 lg:col-span-5">
                        <TodaySection title={'Chance of Rain:'} value={data? data.forecast.forecastday[0].day.daily_chance_of_rain + '%' : '--'}/>
                    </div>
                </div>
            <div className="bg-[#ffffff58] p-5 mb-5 rounded-2xl border border-[#e1e1e18f] grid grid-cols-12">
                <div className="col-span-12 md:col-span-12 lg:col-span-4">
                    <TodaySection title={'Pressure:'} value={data? data.current.pressure_mb + 'mb' : '--'}/>
                </div>
                <div className="col-span-12 md:col-span-12 lg:col-span-3">
                    <TodaySection title={'Humidity:'} value={data? data.current.humidity + '%' : '--'}/>
                </div>
                <div className="col-span-12 md:col-span-12 lg:col-span-5">
                    <TodaySection title={'Wind Speed Miles:'} value={data? data.current.wind_mph + 'mph' : '--'}/>
                </div>
                <div className="col-span-12 md:col-span-12 lg:col-span-4">
                    <TodaySection title={'Wind Direction:'} value={data? data.current.wind_dir : '--'}/>
                </div>
                <div className="col-span-12 md:col-span-12 lg:col-span-4">
                    <TodaySection title={'Wind Degree:'} value={data? data.current.wind_degree + '°' : '--'}/>
                </div>
                <div className="col-span-12 md:col-span-12 lg:col-span-4">
                    <TodaySection title={'Wind Speed:'} value={data? data.current.wind_kph + 'km/h' : '--'}/>
                </div>
            </div>
            <div className="bg-[#ffffff58] p-5 rounded-2xl border border-[#e1e1e18f] grid grid-cols-12">
                <div className="col-span-12 md:col-span-12 lg:col-span-4">
                    <TodaySection title={'Wind Gust:'} value={data? data.current.gust_kph + 'kph' : '--'}/>
                </div>
                <div className="col-span-12 md:col-span-12 lg:col-span-4">
                    <TodaySection title={'Wind Chill:'} value={data? data.current.wind_degree + '°' : '--'}/>
                </div>
                <div className="col-span-12 md:col-span-12 lg:col-span-4">
                    <TodaySection title={'Visibility:'} value={data? data.current.vis_km + 'km' : '--'}/>
                </div>
                <div className="col-span-12 md:col-span-12 lg:col-span-4">
                    <TodaySection title={'Dew Point:'} value={data? data.current[`dewpoint_${unit}`] + '°' + unit.toUpperCase() : '--'}/>
                </div>
                <div className="col-span-12 md:col-span-12 lg:col-span-4">
                    <TodaySection title={'UV Index:'} value={data? data.current.uv : '--'}/>
                </div>
                <div className="col-span-12 md:col-span-12 lg:col-span-4">
                    <TodaySection title={'Precipitation:'} value={data? data.current.precip_mm + 'mm' : '--'}/>
                </div>
            </div>
        </>
    )
}