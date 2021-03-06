import React from "react";
import aql_level from "../constants/aqllevel";

function IndexWithColor() {
  return (
    <>
      {aql_level.map((data, key) => (
        <div className="m-2 " key={key}>
          <button
            className={`${data.className} w-[106px] p-2 text-black font-bold rounded-sm`}
          >
            {data.name}
          </button>
        </div>
      ))}
    </>
  );
}

export default IndexWithColor;
