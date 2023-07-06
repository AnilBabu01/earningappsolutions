import React from "react";
import { backendUrl } from "../../../config/config";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
export default function AddedgameCard({ data, index }) {
  return (
    <>
      <div className="main_added_game">
        <h2>{index + 1}</h2>
        <img src={`${backendUrl}${data?.gameimg} `} alt="dbczdc" />
        <div className="margind">
          <h2 className="name_app">{data?.gamename}</h2>
          <p className="up_text">{data?.gameversion}</p>
          <p className="milinons_text">
            ⤓<span className="main_mil">{data?.gamedownload}</span> | Bonus Rs.
            {data?.gamebonus}
          </p>
        </div>

        <a href={data?.downloadurl}>
          <FileDownloadIcon /> Download
        </a>
      </div>
    </>
  );
}
