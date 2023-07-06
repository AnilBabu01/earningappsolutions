import React from "react";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { backendUrl } from "../../../config/config";
export default function UpdategameCard({ data }) {
  return (
    <>
      <div className="update_card_main">
        <img src={`${backendUrl}${data?.gameimg} `} alt="dbczdc" />
        <h2>{data?.gamename}</h2>
        <p>{data?.gameversion}</p>
        <a href={data?.downloadurl}>
          <FileDownloadIcon /> Download
        </a>
      </div>
    </>
  );
}
