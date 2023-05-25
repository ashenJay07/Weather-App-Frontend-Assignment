import cityData from "../data/cities.json";
import colorCodes from "../data/colorPalette.json";
import { MILLISECONDS, SECONDS, WEATHER_API_KEY } from "../constants/constants";

const cityCodes = cityData.List.map((city) => city.CityCode);
const cityCodesString = cityCodes.join(",");

const weatherURLConstructor = (cityCode) => {
  return `https://api.openweathermap.org/data/2.5/group?id=${cityCode}&units=metric&appid=${WEATHER_API_KEY}`;
};

const expireTimeGenerator = (expTimeInMinutes) => {
  return (
    new Date().getTime() + parseInt(expTimeInMinutes) * SECONDS * MILLISECONDS
  );
};

const colorProvider = () => {
  const colors = colorCodes.ColorList;
  const divs = document.getElementsByClassName("card-color");

  for (let i = 0; i < divs.length; i++) {
    const colorIndex = i % colors.length;
    divs[i].style.backgroundColor = colors[colorIndex];
  }
};

const timeFormatter = (unixTimestamp) => {
  const date = new Date(unixTimestamp * 1000);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const amOrPm = hours >= 12 ? "pm" : "am";

  // prettier-ignore
  const formattedTime = `${hours % 12 || 12}.${minutes.toString().padStart(2, '0')}${amOrPm}`;

  return formattedTime;
};

const dateFormatter = (unixTimestamp) => {
  const date = new Date(unixTimestamp * MILLISECONDS);
  // prettier-ignore
  const formattedDate = `${date.toLocaleString('en-us', { month: 'short' })} ${date.getDate()}`;

  return formattedDate;
};

export {
  cityCodes,
  cityCodesString,
  weatherURLConstructor,
  colorProvider,
  expireTimeGenerator,
  timeFormatter,
  dateFormatter,
};
