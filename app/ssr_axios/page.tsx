import axios from "axios";
import React from "react";

async function getWeather() {
  const res: any = await axios.get(
    "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m"
  );
  return res.data.hourly;
}

export default async function page() {
  const weather: any = await getWeather();
  const times = weather.time;
  const temperatures = weather.temperature_2m;
  const windSpeeds = weather.wind_speed_10m;

  return (
    <div>
      {times.map((time: string, index: number) => (
        <div key={index}>
          <b>Thông tin thời tiết:</b>
          <p>Thời gian: {time}</p>
          <p>Nhiệt độ: {temperatures[index]}</p>
          <p>Tốc độ gió: {windSpeeds[index]}</p>
        </div>
      ))}
    </div>
  );
}
