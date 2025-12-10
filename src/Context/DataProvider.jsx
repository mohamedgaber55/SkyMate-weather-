import { useEffect, useState } from "react";
import { DataContext } from './ApiContext'

export default function DataProvider({children}){

    const [data, setData] = useState(null);
    const [city, setCity] = useState('cairo');

    useEffect(() => {
        fetch(`https://api.weatherapi.com/v1/forecast.json?key=8e9ca571f53b4ebea5a101628250808&q=${city}&days=3&aqi=no&alerts=no`)
        .then(res => res.json())
        .then(result => {

            // handle error or unavilable entry data.
            if (result.error) {
                alert("City not found! Returning to Cairo.");
                setCity("cairo");

                // to stop code after it and git out of func;
                return;
            }

            // if everything is ok 
            setData(result);
        })
        .catch(() => {
            alert("Network error! Please try again.");
        });
    }, [city]);

    return(
        <DataContext.Provider value={{data, city, setCity}}>
            {children}
        </DataContext.Provider>
    );
}
