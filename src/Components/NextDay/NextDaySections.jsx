import { useContext } from "react";
import NextDay from "./NextDay";
import { DataContext } from "../../Context/ApiContext";
import { UnitContext } from "../../Context/UnitContext";

export default function NextDaySections(){

    // data context 
    const {data} = useContext(DataContext);
    
    // unit context 
    const {unit} = useContext(UnitContext);

    return(
        <div className='mt-5 lg:mt-0'>
            <div className="mb-5">
                <NextDay
                    date={data ? data.forecast.forecastday[1].date : '--/--/--'}
                    day={data ? '(Tomorrow)' : '--'}
                    avgTemp={data ? data.forecast.forecastday[1].day[`avgtemp_${unit}`] : '--'}
                    icon={data ? data.forecast.forecastday[1].day.condition.icon : '--'}
                    desc={data ? data.forecast.forecastday[1].day.condition.text : '--'}
                    minTemp={data ? data.forecast.forecastday[1].day[`mintemp_${unit}`] + '°' + unit.toUpperCase(): '--'}
                    maxTemp={data ? data.forecast.forecastday[1].day[`maxtemp_${unit}`] + '°' +  unit.toUpperCase(): '--'}
                    rain={data ? data.forecast.forecastday[1].day.daily_chance_of_rain : '--'}
                    humidity={data ? data.forecast.forecastday[1].day.avghumidity : '--'}
                    visibility={data ? data.forecast.forecastday[1].day.avgvis_km + 'km' : '--'}
                    wind={data ? data.forecast.forecastday[1].day.maxwind_mph + 'mph' : '--'}
                />
            </div>
            <NextDay
                date={data ? data.forecast.forecastday[2].date : '--/--/--'}
                day={data ? '(After Tomorrow)' : '--'}
                avgTemp={data ? data.forecast.forecastday[2].day[`avgtemp_${unit}`] : '--'}
                icon={data ? data.forecast.forecastday[2].day.condition.icon : '--'}
                desc={data ? data.forecast.forecastday[2].day.condition.text : '--'}
                minTemp={data ? data.forecast.forecastday[2].day[`mintemp_${unit}`] + '°' + unit.toUpperCase(): '--'}
                maxTemp={data ? data.forecast.forecastday[2].day[`maxtemp_${unit}`]+ '°' + unit.toUpperCase(): '--'}
                rain={data ? data.forecast.forecastday[2].day.daily_chance_of_rain : '--'}
                humidity={data ? data.forecast.forecastday[2].day.avghumidity : '--'}
                visibility={data ? data.forecast.forecastday[2].day.avgvis_km + 'km' : '--'}
                wind={data ? data.forecast.forecastday[2].day.maxwind_mph + 'mph' : '--'}
            />
        </div>
    )
}