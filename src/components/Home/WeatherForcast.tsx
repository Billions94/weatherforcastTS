import { useSelector, useDispatch } from "react-redux";
import { addToFavAction } from "../../redux/actions";
import { format } from 'date-fns'
import { ReduxState } from "../../redux/types/index"

const WeatherForcast = () => {

    const { data: {data} } = useSelector((state: ReduxState) => state)
    const addToFavorite = useDispatch()
    console.log('i am the data ', data)

  return (
<div className="container ">

{ data === undefined ? 
  <div className="container">
  <div className="weather-side">
    <div className="weather-gradient" />
    <div className="date-container">
      <h2 className="date-dayname">Tuesday</h2>
      <span className="date-day">15 Jan 2019</span>
      <i className="location-icon" data-feather="map-pin" />
      <span className="location">Paris, FR</span>
    </div>
    <div className="weather-container">
      <i className="weather-icon" data-feather="sun" />
      <h1 className="weather-temp">29°C</h1>
      <h3 className="weather-desc">Sunny</h3>
    </div>
  </div>
  <div className="info-side">
    <div className="today-info-container">
      <div className="today-info">
        <div className="precipitation">
          {" "}
          <span className="title">PRECIPITATION</span>
          <span className="value">0 %</span>
          <div className="clear" />
        </div>
        <div className="humidity">
          {" "}
          <span className="title">HUMIDITY</span>
          <span className="value">34 %</span>
          <div className="clear" />
        </div>
        <div className="wind">
          {" "}
          <span className="title">WIND</span>
          <span className="value">0 km/h</span>
          <div className="clear" />
        </div>
      </div>
    </div>
    <div className="week-container">
      <ul className="week-list">
        <li className="active">
          <i className="day-icon" data-feather="sun" />
          <span className="day-name">Tue</span>
          <span className="day-temp">29°C</span>
        </li>
        <li>
          <i className="day-icon" data-feather="cloud" />
          <span className="day-name">Wed</span>
          <span className="day-temp">21°C</span>
        </li>
        <li>
          <i className="day-icon" data-feather="cloud-snow" />
          <span className="day-name">Thu</span>
          <span className="day-temp">08°C</span>
        </li>
        <li>
          <i className="day-icon" data-feather="cloud-rain" />
          <span className="day-name">Fry</span>
          <span className="day-temp">19°C</span>
        </li>
        <div className="clear" />
      </ul>
    </div>
    <div className="location-container">
      <button className="location-button">
        {" "}
        <i data-feather="map-pin" />
        <span>Düsseldorf</span>
      </button>
    </div>
  </div>
</div>
        :
<>
 <div className="weather-side">
    <div className="weather-gradient" />
    <div className="date-container">
      <h2 className="date-dayname">{format(new Date(data.timezone * 24), 'iii')}</h2>
      <span className="date-day">{format(new Date(data.timezone / 365), 'dd MMM yyyy')}</span>
      <i className="location-icon" data-feather="map-pin" />
      <span className="location">{data.name}, {data.sys.country}</span>
    </div>
    <div className="weather-container">
      <i className="weather-icon" data-feather="sun" />
      <h1 className="weather-temp">{Math.round(data.main.temp - 273.15)}°C</h1>
      <h3 className="weather-desc">{data.weather.map(w => w.main)}</h3>
    </div>
  </div>
  <div className="info-side">
    <div className="today-info-container">
      <div className="today-info">
        <div className="precipitation">
          {" "}
          <span className="title">PRECIPITATION</span>
          <span className="value">{data.wind.deg} %</span>
          <div className="clear" />
        </div>
        <div className="humidity">
          {" "}
          <span className="title">HUMIDITY</span>
          <span className="value">{data.main.humidity} %</span>
          <div className="clear" />
        </div>
        <div className="wind">
          {" "}
          <span className="title">WIND</span>
          <span className="value">{data.wind.speed} km/h</span>
          <div className="clear" />
        </div>
        <div className="wind">
          {" "}
          <span className="title">SUN RISE</span>
          <span className="value">{format(new Date(data.sys.sunrise), "hh:mm aa")}</span>
          <div className="clear" />
        </div>
        <div className="wind">
          {" "}
          <span className="title">SUNSET</span>
          <span className="value">{format(new Date(data.sys.sunset), "hh:mm aa")}</span>
          <div className="clear" />
        </div>
      </div>
    </div>
    <div className="week-container">
      <ul className="week-list">
        <li className="active">
          <i className="day-icon" data-feather="sun" />
          <span className="day-name">Feels like</span>
          <span className="day-temp">{Math.round(data.main.feels_like - 273.15)}°C</span>
        </li>
        <li>
          <i className="day-icon" data-feather="cloud" />
          <span className="day-name">Min</span>
          <span className="day-temp">{Math.round(data.main.temp_min - 273.15)}°C</span>
        </li>
        <li>
          <i className="day-icon" data-feather="cloud-snow" />
          <span className="day-name">Max</span>
          <span className="day-temp">{Math.round(data.main.temp_max - 273.15)}°C</span>
        </li>
        <div className="clear" />
      </ul>
    </div>
    <div className="d-flex location-container">
      <button className="location-button">
        <i data-feather="map-pin" />
        <span>{data.name}</span>
      </button>
      <button onClick={(e) => addToFavorite(addToFavAction(data))} className="favorite-btn ml-2">
        <i data-feather="map-pin" />
        <span>★</span>
      </button>
    </div>
  </div>
  </>
  }
</div>
  );
};


// base: "stations"
// clouds: {all: 90}
// cod: 200
// coord: {lon: -118.2437, lat: 34.0522}
// dt: 1638543741
// id: 5368361
// main: {temp: 285.32, feels_like: 284.84, temp_min: 281.46, temp_max: 287.55, pressure: 1020, humidity: 86}
// name: "Los Angeles"
// sys: {type: 1, id: 3694, country: "US", sunrise: 1638542556, sunset: 1638578621}
// timezone: -28800
// visibility: 4828
// weather: [{id: 721, main: "Haze", description: "haze", icon: "50d"}]
// wind: {speed: 0, deg: 0}

export default WeatherForcast
