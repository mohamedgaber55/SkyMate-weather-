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
            <div className="bg-[#ffffff58] p-5 mb-5 rounded-2xl border border-[#e1e1e18f]">
                <div className="flex justify-between flex-wrap">
                    <TodaySection title={`Average Temp:`} value={data? data.forecast.forecastday[0].day[`avgtemp_${unit}`] + '°' + unit.toUpperCase() : '--'}/>
                    <TodaySection title={'Min Temp:'} value={data? data.forecast.forecastday[0].day[`mintemp_${unit}`] + '°' + unit.toUpperCase() : '--'}/>
                    <TodaySection title={'Max Temp:'} value={data? data.forecast.forecastday[0].day[`maxtemp_${unit}`] + '°' + unit.toUpperCase() : '--'}/>
                </div>
                <div className="flex justify-between flex-wrap">
                    <TodaySection title={'Feels Like:'} value={data? data.current[`feelslike_${unit}`] + '°' + unit.toUpperCase() : '--'}/>
                    <TodaySection title={'Cloud Cover:'} value={data? data.current.cloud + '%' : '--'}/>
                    <TodaySection title={'Chance of Rain:'} value={data? data.forecast.forecastday[0].day.daily_chance_of_rain + '%' : '--'}/>
                </div>
            </div>
            <div className="bg-[#ffffff58] p-5 mb-5 rounded-2xl border border-[#e1e1e18f]">
                <div className="flex justify-between flex-wrap">
                    <TodaySection title={'Pressure:'} value={data? data.current.pressure_mb + 'mb' : '--'}/>
                    <TodaySection title={'Humidity:'} value={data? data.current.humidity + '%' : '--'}/>
                    <TodaySection title={'Wind Speed Miles:'} value={data? data.current.wind_mph + 'mph' : '--'}/>
                </div>
                <div className="flex justify-between flex-wrap">
                    <TodaySection title={'Wind Direction:'} value={data? data.current.wind_dir : '--'}/>
                    <TodaySection title={'Wind Degree:'} value={data? data.current.wind_degree + '°' : '--'}/>
                    <TodaySection title={'Wind Speed:'} value={data? data.current.wind_kph + 'km/h' : '--'}/>
                </div>
            </div>
            <div className="bg-[#ffffff58] p-5 rounded-2xl border border-[#e1e1e18f]">
                <div className="flex justify-between flex-wrap">
                    <TodaySection title={'Wind Gust:'} value={data? data.current.gust_kph + 'kph' : '--'}/>
                    <TodaySection title={'Wind Chill:'} value={data? data.current.wind_degree + '°' : '--'}/>
                    <TodaySection title={'Visibility:'} value={data? data.current.vis_km + 'km' : '--'}/>
                </div>
                <div className="flex justify-between flex-wrap">
                    <TodaySection title={'Dew Point:'} value={data? data.current[`dewpoint_${unit}`] + '°' + unit.toUpperCase() : '--'}/>
                    <TodaySection title={'UV Index:'} value={data? data.current.uv : '--'}/>
                    <TodaySection title={'Precipitation:'} value={data? data.current.precip_mm + 'mm' : '--'}/>
                </div>
            </div>
        </>
    )
}