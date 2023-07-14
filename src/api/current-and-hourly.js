export default async function getCurrentWeather(city) {
    const forcast = await fetch(
        `http://api.weatherapi.com/v1/forecast.json?key=013d87f7b7f644169ee154512231207&q=${city}&days=1&aqi=no&alerts=no`
    ).then((res) => res.json());

    const location = forcast.location.name;
    const currentWeather = forcast.current;
    const sunrisesunset = forcast.forecast.forecastday[0].astro;
    const hourlyForcast = forcast.forecast.forecastday[0].hour;

    const {
        wind_mph,
        pressure_mb,
        precip_mm,
        uv
    } = await currentWeather;
    const {
        sunrise,
        sunset
    } = await sunrisesunset;

    const weatherVariables = {
        wind: `${wind_mph}km/h`,
        pressue: `${pressure_mb} hpa`,
        uv: uv,
        perceiption_in_mm: `${precip_mm}mm`,
        sunrise: sunrise,
        sunset: sunset,
    };

    return {
        location,
        currentWeather,
        sunrisesunset,
        weatherVariables,
        hourlyForcast,
    };
}