import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import UpdategameCard from "./UpdategameCard";
import AddedgameCard from "./AddedgameCard";
import { serverInstance } from "../../../API/ServerInstance";
import { backendUrl } from "../../../config/config";
import LoadingSpinner1 from "../../../components/LoadingSpinner1";
import PopularGame from "./PopularGame";
import "./Home.css";

export default function Home({ setshowadmin }) {
  const [isData, setisData] = useState("");
  const [updatedhamedata, setupdatedhamedata] = useState("");
  const [newgamedata, setnewgamedata] = useState("");
  const [populardata, setpopulardata] = useState("");
  const [loader, setloader] = useState(false);
  const getslider = () => {
    setloader(true);
    serverInstance("uploadslider", "get").then((res) => {
      if (res?.status) {
        setisData(res?.data[0]);
        setloader(false);
      }
    });
  };
  const getupdatedgame = () => {
    setloader(true);
    serverInstance("updategame", "get").then((res) => {
      if (res?.status) {
        setupdatedhamedata(res?.data[0]);
        setloader(false);
      }
    });
  };

  const getnewgame = () => {
    setloader(true);
    serverInstance("newgame", "get").then((res) => {
      if (res?.status) {
        setloader(false);
        setnewgamedata(res?.data[0]);
      }
    });
  };

  const getpopulargame = () => {
    setloader(true);
    serverInstance("populargame", "get").then((res) => {
      if (res?.status) {
        setloader(false);
        setpopulardata(res?.data[0]);
      }
    });
  };
  useEffect(() => {
    setshowadmin(false);
    getslider();
    getupdatedgame();
    getnewgame();
    getpopulargame();
  }, []);

  return (
    <>
      <div className="container">
        <div className="home_main">
          <div className="main_slidehgr">
            <Carousel
              infiniteLoop={true}
              autoPlay={true}
              showIndicators={true}
              stopOnHover={true}
              autoFocus={true}
              showStatus={false}
              showThumbs={false}
              showArrows={true}
              dots={true}
            >
              {isData &&
                isData?.map((item) => {
                  return (
                    <div className="slie_img_div">
                      <img src={`${backendUrl}${item?.imgurl} `} alt="nhbbb" />
                    </div>
                  );
                })}
            </Carousel>
          </div>
          <div className="main_updatecard_div">
            {populardata && <PopularGame populardata={populardata} />}
          </div>
          <div className="main_updatecard_div">
            {updatedhamedata &&
              updatedhamedata?.map((item, index) => {
                return <UpdategameCard data={item} index={index} />;
              })}
          </div>

          <marquee
            style={{
              border: "dotted",
              color: "black",
              margin: "0.2rem",
              fontSize: "16px",
              borderColor: "red",
              backgroundColor: "yellow",
              borderWidth: "1px",
            }}
          >
            {/* <WarningIcon style={{ width: "20px" }} /> */}
            Warning :– Teenpatti Master और Teenpatti Gold का नया वाला Version ही
            इस्तेमाल करे, क्योंकि पुराने Version का Recharge And Withdraw Failed
            हो राहा है..!!
          </marquee>

          <div className="main_updatecard_div">
            {newgamedata &&
              newgamedata?.map((item, index) => {
                return <AddedgameCard data={item} index={index} />;
              })}
          </div>
        </div>
      </div>
      {loader && <LoadingSpinner1 />}
    </>
  );
}
