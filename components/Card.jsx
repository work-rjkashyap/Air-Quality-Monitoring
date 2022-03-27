import React, { useMemo, useRef } from "react";

import {
  Sparklines,
  SparklinesCurve,
  SparklinesSpots,
  SparklinesReferenceLine,
} from "react-sparklines";
import getLevelAqI from "../utils/getaqilevel";

const roundAQI = (aqi) => Math.round(aqi * 100) / 100;

function Card({ CityName, AQI, onClick }) {
  const GetCityDetail = useRef([]);

  const status = getLevelAqI(roundAQI(AQI));

  GetCityDetail.current = useMemo(() => [...GetCityDetail.current, AQI], [AQI]);

  const ResizeCard = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <div className="flex flex-col" onClick={ResizeCard} aria-hidden>
      <h2 className="font-bold text-2xl">{CityName}</h2>
      <div className="flex justify-between">
        <span>
          AQI-
          {roundAQI(AQI)}
        </span>
        <span className={`font-bold text-[${status.color}]`}>
          {status && status.name}
        </span>
        <div
          style={{ width: "25px", height: "25px", borderRadius: "50%" }}
          className={`${(status && status.className) || ""} `}
        >
          &emsp;
        </div>
      </div>
      <Sparklines limit={50} data={GetCityDetail.current}>
        <SparklinesCurve style={{ fill: "none" }} />
        <SparklinesSpots />
        <SparklinesReferenceLine
          value={150}
          style={{
            stroke: "yellow",
            strokeLinecap: "round",
            strokeOpacity: 0.75,
            strokeDasharray: "2, 2",
          }}
        />
      </Sparklines>
    </div>
  );
}

export default Card;
