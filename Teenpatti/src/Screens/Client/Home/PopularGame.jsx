import React, { useState, useEffect } from "react";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { backendUrl } from "../../../config/config";
export default function PopularGame({ populardata }) {
  const [isData, setisData] = useState("");

  useEffect(() => {
    if (populardata) {
      setisData(populardata);
    }
  }, []);

  return (
    <>
      <div className="update_card_main_popular">
        <img src={`${backendUrl}${isData[0]?.gameimg} `} alt="dbczdc" />
        <h2>{isData[0]?.gamename}</h2>
        <p>{isData[0]?.gameversion}</p>
        <a href={isData[0]?.downloadurl}>
          <FileDownloadIcon /> Download
        </a>
      </div>
    </>
  );
}
