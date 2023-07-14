const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
export default async function fiveDaysforecast(city) {
    const API_KEY = '378b842b5a8c3ff56d489ff120c4e110';

    const forecast = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`)
        .then(res => res.json());

    let repeatedDate = '';
    const information = []

    await forecast.list.map(data => {
        const forcastTime = new Date(data.dt_txt).getDay();
        if (repeatedDate != forcastTime) {
            repeatedDate = forcastTime;
            information.push({
                day: DAYS[forcastTime],
                weatherText: data.weather[0].main,
                icon: data.weather[0].icon,
                maxDegree: kelvinToCelsius(data.main.temp_max),
                minDegree: kelvinToCelsius(data.main.temp_min)
            })
        }

    })

    return information
}

function kelvinToCelsius(temp) {
    return (temp - 273.15).toFixed(2);
}