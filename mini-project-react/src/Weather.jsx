import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";


export default function Weather() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Bareilly",
        feelsLike: 24.84,
        humidity: 47,
        temp: 25.05,
        tempMax: 25.05,
        tempMin: 25.05,
        weather: "haze",
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }
    return (
        <div style={{ textAlign: "center" }}>
            <h2>Weather App By Noman</h2>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo} />
        </div>
    )
}