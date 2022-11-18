import React, { useState } from "react";
import ListLeft from "./ListLeft";
import "./styles/LandingPage.css";
import LandingPage2 from "./LandingPage2";
import LandingPage3 from "./LandingPage3";

import Image2 from "../../Images/2.png";
import Image3 from "../../Images/3.jpg";
import Image4 from "../../Images/4.png";
import Image5 from "../../Images/5.png";
import Image6 from "../../Images/6.png";
import Image7 from "../../Images/7.png";
import Image8 from "../../Images/8.png";
import Image9 from "../../Images/9.jpg";
import Image10 from "../../Images/10.png";
import Image11 from "../../Images/11.png";
import Image12 from "../../Images/12.png";
import Image13 from "../../Images/13.jpg";
import Image14 from "../../Images/14.jpg";
import Image15 from "../../Images/15.png";
import Image16 from "../../Images/16.jpg";
import Image17 from "../../Images/17.jpeg";

const LandingPage = () => {
  const [Show, setShow] = useState(false);
  const [Show2, setShow2] = useState(false);
  const [Show3, setShow3] = useState(false);
  const [sound1, setsound1] = useState(true);
  const [sound2, setsound2] = useState(false);
  const [stop1, setstop1] = useState(true);
  const [stop2, setstop2] = useState(false);
  const [test1, settest1] = useState(true);
  const [test2, settest2] = useState(true);
  const [test3, settest3] = useState(true);
  const [test4, settest4] = useState(true);
  const [test5, settest5] = useState(true);
  const [Auto, setAuto] = useState(false);
  const [Page3, setPage3] = useState(false);
  const [Page2, setPage2] = useState(false);
  const [Page1, setPage1] = useState(true);
  const [Play, setPlay] = useState(false);
  const [Sound, setSound] = useState(false);
  const [Qulity, setQulity] = useState(false);
  const [QulityClick, setQulityClick] = useState(false);
  const [Bigger, setBigger] = useState(false);
  const ListofPageleft = [
    [Image2, "tarik", "VALORANT", "", "17.3K"],
    [Image3, "xQc", "Just Chatting", "", "48.1K"],
    [Image4, "Adin Ross", "Just Chatting", "", "118.3K"],
    [Image5, "ShahZam", "VALORANT", "", "7.1K"],
    [Image6, "moistcr1tikal", "Just Chatting", "", "16.8K"],
    [Image7, "Amouranth", "Just Dance", "", "7.3K"],
    [Image8, "Nightblue3", "League of legend", "", "5.3K"],
    [Image9, "boxbox", "VALORANT", "", "5.6K"],
    [Image10, "iiTzTimmy", "VALORANT", "", "5.2K"],
  ];
  const ListPage2 = [
    [
      "https://static-cdn.jtvnw.net/previews-ttv/live_user_prod-440x248.jpg",
      "https://static-cdn.jtvnw.net/jtv_user_pictures/2217bdd3-8554-4eed-8ca7-992aebb460c7-profile_image-50x50.png",
      "DOMINATING (baiting) IN RADIANT",
      "PROD",
      "VALORANT",
      "English",
    ],
    [
      "https://static-cdn.jtvnw.net/previews-ttv/live_user_leg0s-440x248.jpg",
      "https://static-cdn.jtvnw.net/jtv_user_pictures/14d8f9eb-73bc-4a00-9730-aa45b5522c4d-profile_image-50x50.png",
      "100T Hiko Monday. Radiant",
      "Hiko",
      "VALORANT",
      "English",
    ],
    [
      "https://static-cdn.jtvnw.net/previews-ttv/live_user_joshseki-440x248.jpg",
      "https://static-cdn.jtvnw.net/jtv_user_pictures/16171cc1-ef1c-4b85-9143-ad31037f072d-profile_image-50x50.png",
      "GETTING ENOKI DEAMOND IN RANKED",
      "schrodingerLee",
      "VALORANT",
      "smallpp",
    ],
    [
      "https://static-cdn.jtvnw.net/previews-ttv/live_user_juansguarnizo-440x248.jpg",
      Image17,
      "vault hunters SMP update!",
      "itsRyanHiga",
      "Minecraft",
      "English",
    ],
  ];
  const ListPage3 = [
    [
      "https://static-cdn.jtvnw.net/ttv-boxart/509658-188x250.jpg",
      "Just Chatting",
      "499k",
      "viewers",
      "IRL",
    ],
    [
      "https://static-cdn.jtvnw.net/ttv-boxart/516575-188x250.jpg",
      "VALORANT",
      "124K",
      "viewers",
      "Shooter",
    ],
    [
      "https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-188x250.jpg",
      "MINECRAFT",
      "297K",
      "viewers",
      "Adventure",
    ],
    [
      "https://static-cdn.jtvnw.net/ttv-boxart/1678052513_IGDB-188x250.jpg",
      "Call of Duty:modern warfare",
      "101K",
      "viewers",
      "Shooter",
    ],
    [
      "https://static-cdn.jtvnw.net/ttv-boxart/21779-188x250.jpg",
      "League of Legends",
      "189k",
      "viewers",
      "MOBA",
    ],
    [
      "https://static-cdn.jtvnw.net/ttv-boxart/102007682_IGDB-188x250.jpg",
      "God of War Ragnarok",
      "256k",
      "viewers",
      "Action",
    ],
  ];
  const ListPage4 = [
    [
      "https://static-cdn.jtvnw.net/ttv-boxart/102007682_IGDB-188x250.jpg",
      "God of War Ragnarok",
      "256k",
      "viewers",
      "Action",
    ],
    [
      "https://static-cdn.jtvnw.net/ttv-boxart/1047410718_IGDB-188x250.jpg",
      "Football Manager 2023",
      "4.6K",
      "viewers",
      "Simulation",
    ],
    [
      "https://static-cdn.jtvnw.net/ttv-boxart/1732431919_IGDB-188x250.jpg",
      "Sonic Frontiers",
      "4.3K",
      "viewers",
      "Platformer",
    ],
    [
      "https://static-cdn.jtvnw.net/ttv-boxart/1533045811_IGDB-188x250.jpg",
      "We Who Are About To Die",
      "2.9K",
      "viewers",
      "Simulation",
    ],
    [
      "https://static-cdn.jtvnw.net/ttv-boxart/2066834255_IGDB-188x250.jpg",
      "Tactics Ogre: Reborn",
      "2.2k",
      "viewers",
      "Simulation",
    ],
    [
      "https://static-cdn.jtvnw.net/ttv-boxart/1334140708_IGDB-188x250.jpg",
      "The Entropy Centre",
      "1.4k",
      "viewers",
      "Puzzle",
    ],
  ];
  const ListPage5 = [
    [
      "https://static-cdn.jtvnw.net/previews-ttv/live_user_cizzorz-440x248.jpg",
      "https://static-cdn.jtvnw.net/jtv_user_pictures/a3d679bb58fc9d7e-profile_image-50x50.jpeg",
      "FAZE CIZZORZ SSL GRIND",
      "Cizzorz",
      "Rocekt League",
      "English",
    ],
    [
      "https://static-cdn.jtvnw.net/previews-ttv/live_user_blooprint-440x248.jpg",
      "https://static-cdn.jtvnw.net/jtv_user_pictures/ac654631-14fe-45a9-aa11-b3f62915fc5e-profile_image-50x50.png",
      "GAMERSUPPS SUS SNACKS out now",
      "Blooprint",
      "Rust",
      "English",
    ],
    [
      "https://static-cdn.jtvnw.net/previews-ttv/live_user_natsumiii-440x248.jpg",
      "https://static-cdn.jtvnw.net/jtv_user_pictures/db89e331-7ec3-48b2-a33f-026232e3986b-profile_image-50x50.jpeg",
      "chattings 3pm backrooms",
      "Natsumiii",
      "League of Legends",
      "Wondy",
    ],
    [
      "https://static-cdn.jtvnw.net/previews-ttv/live_user_ploo-440x248.jpg",
      "https://static-cdn.jtvnw.net/jtv_user_pictures/009dfb0e-95df-4e95-b878-8cfd9327ab11-profile_image-50x50.png",
      ":3 Gen.G !CORSAIR",
      "ploo",
      "VALORANT",
      "English",
    ],
  ];
  const ListPage6 = [
    [
      "https://static-cdn.jtvnw.net/ttv-boxart/1421724731_IGDB-188x250.jpg",
      "McPixel 3 ",
      "10.8k",
      "viewers",
      "Click",
    ],
    [
      "https://static-cdn.jtvnw.net/ttv-boxart/324194362_IGDB-188x250.jpg",
      "Zero Sievert",
      "9.6K",
      "viewers",
      "RPG",
    ],
    [
      "https://static-cdn.jtvnw.net/ttv-boxart/516089_IGDB-188x250.jpg",
      "Bendy and the Dark",
      "7.3K",
      "viewers",
      "Puzzle",
    ],
    [
      "https://static-cdn.jtvnw.net/ttv-boxart/1047410718_IGDB-188x250.jpg",
      "Football Manger 2023",
      "6.3K",
      "viewers",
      "Simulation",
    ],
    [
      "https://static-cdn.jtvnw.net/ttv-boxart/512033_IGDB-188x250.jpg",
      "Goddess of Victory: Nikke",
      "4.6k",
      "viewers",
      "Shooter",
    ],
    [
      "https://static-cdn.jtvnw.net/ttv-boxart/515621883_IGDB-188x250.jpg",
      "Soulstone Survivors",
      "560",
      "viewers",
      "Action",
    ],
  ];
  const ListPage7 = [
    [
      "https://static-cdn.jtvnw.net/previews-ttv/live_user_loltyler1-440x248.jpg",
      "https://static-cdn.jtvnw.net/jtv_user_pictures/f3591dbe4ee3d94b-profile_image-50x50.png",
      "SNOW !!! so prettys and nice",
      "loltyler1",
      "God of War Ragnarok",
      "English",
    ],
    [
      "https://static-cdn.jtvnw.net/previews-ttv/live_user_anthonyz-440x248.jpg",
      "https://static-cdn.jtvnw.net/jtv_user_pictures/498c48d1-1d25-4cd9-97c7-653ddabcddf0-profile_image-50x50.png",
      "!zerosievert #ad",
      "AnthonyZ",
      "Zero Sievert",
      "English",
    ],
    [
      "https://static-cdn.jtvnw.net/previews-ttv/live_user_shawncee-440x248.jpg",
      "https://static-cdn.jtvnw.net/jtv_user_pictures/027cfe10-80ba-48d9-8e6f-8da5a0b7937b-profile_image-50x50.png",
      "GOD OF WAR STREAM & SHOW",
      "ShawnCee",
      "God of War Ragnarok",
      "English",
    ],
    [
      "https://static-cdn.jtvnw.net/previews-ttv/live_user_daisy-440x248.jpg",
      "https://static-cdn.jtvnw.net/jtv_user_pictures/cb2b59c0-4772-408d-a026-848fa580d8cc-profile_image-50x50.png",
      "TODAYS IS MY BIRTHDAY",
      "Daisy",
      "",
      "English",
    ],
  ];
  return (
    <div className="Main-All-pages">
      <div className="LandingPageMain">
        <div className="LandingPage-left">
          <div className="LandingPage-left-1">
            <p>RECOMMENDED CHANNELS</p>
            <svg className="Landingpage-leeft-svg" version="1.1">
              <g>
                <path d="M16 16V4h2v12h-2zM6 9l2.501-2.5-1.5-1.5-5 5 5 5 1.5-1.5-2.5-2.5h8V9H6z"></path>
              </g>
            </svg>
          </div>
          <ListLeft List={ListofPageleft} />
        </div>
        {Page1 && (
          <div className="LandingPage-Right">
            <div className="LandingPage-Right-page1">
              <svg
                className="Svg-left"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path
                  fill-rule="evenodd"
                  d="M15.28 5.22a.75.75 0 00-1.06 0l-6.25 6.25a.75.75 0 000 1.06l6.25 6.25a.75.75 0 101.06-1.06L9.56 12l5.72-5.72a.75.75 0 000-1.06z"
                ></path>
              </svg>
              <div>
                <div className="qdssqd">
                  <svg
                    onClick={() => {
                      setQulityClick(!QulityClick);
                    }}
                    onMouseEnter={() => {
                      setQulity(true);
                    }}
                    onMouseLeave={() => {
                      setQulity(false);
                    }}
                    className="Svg-qulatiy"
                    version="1.1"
                    viewBox="0 0 20 20"
                  >
                    <g>
                      <path d="M10 8a2 2 0 100 4 2 2 0 000-4z"></path>
                      <path
                        fill-rule="evenodd"
                        d="M9 2h2a2.01 2.01 0 001.235 1.855l.53.22a2.01 2.01 0 002.185-.439l1.414 1.414a2.01 2.01 0 00-.439 2.185l.22.53A2.01 2.01 0 0018 9v2a2.01 2.01 0 00-1.855 1.235l-.22.53a2.01 2.01 0 00.44 2.185l-1.415 1.414a2.01 2.01 0 00-2.184-.439l-.531.22A2.01 2.01 0 0011 18H9a2.01 2.01 0 00-1.235-1.854l-.53-.22a2.009 2.009 0 00-2.185.438L3.636 14.95a2.009 2.009 0 00.438-2.184l-.22-.531A2.01 2.01 0 002 11V9c.809 0 1.545-.487 1.854-1.235l.22-.53a2.009 2.009 0 00-.438-2.185L5.05 3.636a2.01 2.01 0 002.185.438l.53-.22A2.01 2.01 0 009 2zm-4 8l1.464 3.536L10 15l3.535-1.464L15 10l-1.465-3.536L10 5 6.464 6.464 5 10z"
                        clip-rule="evenodd"
                      ></path>
                    </g>
                  </svg>
                </div>
                <div className="MoveRight">
                  <svg
                    onMouseEnter={() => {
                      setBigger(true);
                    }}
                    onMouseLeave={() => {
                      setBigger(false);
                    }}
                    className="Svg-qulatiy"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.75 4.5a.25.25 0 00-.25.25v3.5a.75.75 0 01-1.5 0v-3.5C3 3.784 3.784 3 4.75 3h3.5a.75.75 0 010 1.5h-3.5zM15 3.75a.75.75 0 01.75-.75h3.5c.966 0 1.75.784 1.75 1.75v3.5a.75.75 0 01-1.5 0v-3.5a.25.25 0 00-.25-.25h-3.5a.75.75 0 01-.75-.75zM3.75 15a.75.75 0 01.75.75v3.5c0 .138.112.25.25.25h3.5a.75.75 0 010 1.5h-3.5A1.75 1.75 0 013 19.25v-3.5a.75.75 0 01.75-.75zm16.5 0a.75.75 0 01.75.75v3.5A1.75 1.75 0 0119.25 21h-3.5a.75.75 0 010-1.5h3.5a.25.25 0 00.25-.25v-3.5a.75.75 0 01.75-.75z"
                    ></path>
                  </svg>
                </div>
                <div className="Moveleft">
                  {sound1 && (
                    <svg
                      onClick={() => {
                        setsound1(false);
                        setsound2(true);
                      }}
                      onMouseEnter={() => {
                        setSound(true);
                      }}
                      onMouseLeave={() => {
                        setSound(false);
                      }}
                      className="Svg-qulatiy"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M11.553 3.064A.75.75 0 0112 3.75v16.5a.75.75 0 01-1.255.555L5.46 16H2.75A1.75 1.75 0 011 14.25v-4.5C1 8.784 1.784 8 2.75 8h2.71l5.285-4.805a.75.75 0 01.808-.13zM10.5 5.445l-4.245 3.86a.75.75 0 01-.505.195h-3a.25.25 0 00-.25.25v4.5c0 .138.112.25.25.25h3a.75.75 0 01.505.195l4.245 3.86V5.445z"
                      ></path>
                      <path d="M18.718 4.222a.75.75 0 011.06 0c4.296 4.296 4.296 11.26 0 15.556a.75.75 0 01-1.06-1.06 9.5 9.5 0 000-13.436.75.75 0 010-1.06z"></path>
                      <path d="M16.243 7.757a.75.75 0 10-1.061 1.061 4.5 4.5 0 010 6.364.75.75 0 001.06 1.06 6 6 0 000-8.485z"></path>
                    </svg>
                  )}
                  {sound2 && (
                    <svg
                      onClick={() => {
                        setsound1(true);
                        setsound2(false);
                      }}
                      onMouseEnter={() => {
                        setSound(true);
                      }}
                      onMouseLeave={() => {
                        setSound(false);
                      }}
                      className="Svg-qulatiy"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12 3.75a.75.75 0 00-1.255-.555L5.46 8H2.75A1.75 1.75 0 001 9.75v4.5c0 .966.784 1.75 1.75 1.75h2.71l5.285 4.805A.75.75 0 0012 20.25V3.75zM6.255 9.305l4.245-3.86v13.11l-4.245-3.86a.75.75 0 00-.505-.195h-3a.25.25 0 01-.25-.25v-4.5a.25.25 0 01.25-.25h3a.75.75 0 00.505-.195z"
                      ></path>
                      <path d="M16.28 8.22a.75.75 0 10-1.06 1.06L17.94 12l-2.72 2.72a.75.75 0 101.06 1.06L19 13.06l2.72 2.72a.75.75 0 101.06-1.06L20.06 12l2.72-2.72a.75.75 0 00-1.06-1.06L19 10.94l-2.72-2.72z"></path>
                    </svg>
                  )}
                </div>
                <div className="Moveleftt-rightt">
                  {Bigger && <p className="BigPage">Fullscren (f)</p>}
                </div>
                <div className="Moveleftt-right">
                  {Qulity && <p className="Settings">Settings</p>}
                </div>
                <div className="Moveleftt-top">
                  {Play && <p className="Play">Play (space/k)</p>}
                </div>
                <div className="Moveleftt-top">
                  {Sound && <p className="Sound">Mute (m)</p>}
                </div>
                {Auto && (
                  <div className="Moveleftt-right-Open">
                    <div className="Moveleftt-top-Quality">
                      <div className="Qulity-Flex-top">
                        <svg
                          onClick={() => {
                            setAuto(false);
                            setQulityClick(true);
                          }}
                          className="Svg-x"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M15.28 5.22a.75.75 0 00-1.06 0l-6.25 6.25a.75.75 0 000 1.06l6.25 6.25a.75.75 0 101.06-1.06L9.56 12l5.72-5.72a.75.75 0 000-1.06z"
                          ></path>
                        </svg>
                        <p>Back to Video Player Settings</p>
                      </div>
                      <p>VIDEO QUALITY</p>
                      <div className="Qulity-open-Border"></div>
                      <div className="Orb-flex">
                        <svg
                          onClick={() => {
                            settest2(true);
                            settest1(false);
                            settest3(true);
                            settest4(true);
                            settest5(true);
                          }}
                          className={test1 ? "Orb-auto" : "Orb-auto_Presed"}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 16"
                          width="56"
                          height="56"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8z"
                          ></path>
                        </svg>
                        <p>Auto</p>
                      </div>
                      <div className="Orb-flex">
                        <svg
                          onClick={() => {
                            settest2(false);
                            settest1(true);
                            settest3(true);
                            settest4(true);
                            settest5(true);
                          }}
                          className={test2 ? "Orb-auto" : "Orb-auto_Presed"}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 16"
                          width="56"
                          height="56"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8z"
                          ></path>
                        </svg>
                        <p>720p</p>
                      </div>
                      <div className="Orb-flex">
                        <svg
                          onClick={() => {
                            settest2(true);
                            settest1(true);
                            settest3(false);
                            settest4(true);
                            settest5(true);
                          }}
                          className={test3 ? "Orb-auto" : "Orb-auto_Presed"}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 16"
                          width="56"
                          height="56"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8z"
                          ></path>
                        </svg>
                        <p>480p</p>
                      </div>
                      <div className="Orb-flex">
                        <svg
                          onClick={() => {
                            settest2(true);
                            settest1(true);
                            settest3(true);
                            settest4(false);
                            settest5(true);
                          }}
                          className={test4 ? "Orb-auto" : "Orb-auto_Presed"}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 16"
                          width="56"
                          height="56"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8z"
                          ></path>
                        </svg>
                        <p>360p</p>
                      </div>
                      <div className="Orb-flex">
                        <svg
                          onClick={() => {
                            settest2(true);
                            settest1(true);
                            settest3(true);
                            settest4(true);
                            settest5(false);
                          }}
                          className={test5 ? "Orb-auto" : "Orb-auto_Presed"}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 16"
                          width="56"
                          height="56"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8z"
                          ></path>
                        </svg>
                        <p>160p</p>
                      </div>
                    </div>
                  </div>
                )}
                {QulityClick && (
                  <div className="Moveleftt-right-Open">
                    <div className="Moveleftt-top-Click">
                      <div className="Qulity-Flex-top">
                        <svg
                          onClick={() => {
                            setQulityClick(false);
                          }}
                          className="Svg-x"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.72 5.72a.75.75 0 011.06 0L12 10.94l5.22-5.22a.75.75 0 111.06 1.06L13.06 12l5.22 5.22a.75.75 0 11-1.06 1.06L12 13.06l-5.22 5.22a.75.75 0 01-1.06-1.06L10.94 12 5.72 6.78a.75.75 0 010-1.06z"
                          ></path>
                        </svg>
                        <p>Close</p>
                      </div>
                      <div className="Qulity-open-Border"></div>
                      <div className="Qulity-open-border-bottom">
                        <div
                          onClick={() => {
                            setAuto(true);
                            setQulityClick(false);
                          }}
                          className="Qulity-open-border-bottom-flex"
                        >
                          <p className="Quality-margin">Quality</p>
                          <p>Auto</p>
                          <svg
                            className="Svg-right-Quality"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M8.72 18.78a.75.75 0 001.06 0l6.25-6.25a.75.75 0 000-1.06L9.78 5.22a.75.75 0 00-1.06 1.06L14.44 12l-5.72 5.72a.75.75 0 000 1.06z"
                            ></path>
                          </svg>
                        </div>
                        <div className="Qulity-open-border-bottom-flex">
                          <p className="Quality-margin2">Advanced</p>
                          <svg
                            className="Svg-right-Quality"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M8.72 18.78a.75.75 0 001.06 0l6.25-6.25a.75.75 0 000-1.06L9.78 5.22a.75.75 0 00-1.06 1.06L14.44 12l-5.72 5.72a.75.75 0 000 1.06z"
                            ></path>
                          </svg>
                        </div>
                        <div className="Qulity-open-border-bottom-flex">
                          <p className="Quality-margin2">
                            Report Playback issue
                          </p>
                          <svg
                            className="Svg-right-Quality"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M8.72 18.78a.75.75 0 001.06 0l6.25-6.25a.75.75 0 000-1.06L9.78 5.22a.75.75 0 00-1.06 1.06L14.44 12l-5.72 5.72a.75.75 0 000 1.06z"
                            ></path>
                          </svg>
                        </div>
                        <div className="Qulity-open-border-bottom-flex">
                          <p className="Quality-margin2">Repout Player</p>
                        </div>
                        <div className="Qulity-open-border-bottom-flex">
                          <p className="Quality-margin2">
                            View Keyboard Shorcuts
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div className="Moveleftt">
                  {stop1 && (
                    <svg
                      onClick={() => {
                        setstop1(false);
                        setstop2(true);
                      }}
                      onMouseEnter={() => {
                        setPlay(true);
                      }}
                      onMouseLeave={() => {
                        setPlay(false);
                      }}
                      className="Svg-qulatiy-bigger"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M15.146 12.354l-5.792 5.792a.5.5 0 01-.854-.353V6.207a.5.5 0 01.854-.353l5.792 5.792a.5.5 0 010 .708z"></path>
                    </svg>
                  )}
                  {stop2 && (
                    <svg
                      onClick={() => {
                        setstop1(true);
                        setstop2(false);
                      }}
                      onMouseEnter={() => {
                        setPlay(true);
                      }}
                      onMouseLeave={() => {
                        setPlay(false);
                      }}
                      className="Svg-qulatiy-bigger-pause"
                      version="1.1"
                      viewBox="0 0 20 20"
                    >
                      <g>
                        <path d="M8 3H4v14h4V3zM16 3h-4v14h4V3z"></path>
                      </g>
                    </svg>
                  )}
                </div>
                <img className="Image11" src={Image14} alt="" />
              </div>
              <div className="LandingPage-Right-page2">
                <div className="Landingpage-right-top">
                  <img className="Images-left-2" src={Image11} alt="" />
                  <p className="Teeken">TEKKEN</p>
                </div>
                <div className="Viewers">
                  <p>TEKKEN Tekken 7</p>
                  <a className="Viewers-p">6.2k viewers</a>
                </div>
                <div className="English">English</div>
                <p className="Channels">
                  Welcome to Lirik's channel! He plays anything new, exciting,
                  and enjoyable. From the latest FPS to the most heart wrenching
                  story game. Topped off with a lot of viewer interaction and
                  entertainment you are bound to have a good time. Join in on
                  the fun!
                </p>
              </div>
              <svg
                onClick={() => {
                  setPage1(false);
                  setPage2(true);
                  setPage3(false);
                  setQulityClick(false);
                  setAuto(false);
                }}
                className="Svg-right"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path
                  fill-rule="evenodd"
                  d="M8.72 18.78a.75.75 0 001.06 0l6.25-6.25a.75.75 0 000-1.06L9.78 5.22a.75.75 0 00-1.06 1.06L14.44 12l-5.72 5.72a.75.75 0 000 1.06z"
                ></path>
              </svg>
            </div>
          </div>
        )}
        {Page2 && (
          <div className="LandingPage-Right">
            <div className="LandingPage-Right-page1">
              <svg
                onClick={() => {
                  setPage1(true);
                  setPage2(false);
                }}
                className="Svg-left"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path
                  fill-rule="evenodd"
                  d="M15.28 5.22a.75.75 0 00-1.06 0l-6.25 6.25a.75.75 0 000 1.06l6.25 6.25a.75.75 0 101.06-1.06L9.56 12l5.72-5.72a.75.75 0 000-1.06z"
                ></path>
              </svg>
              <div>
                <div className="qdssqd">
                  <svg
                    onClick={() => {
                      setQulityClick(!QulityClick);
                    }}
                    onMouseEnter={() => {
                      setQulity(true);
                    }}
                    onMouseLeave={() => {
                      setQulity(false);
                    }}
                    className="Svg-qulatiy"
                    version="1.1"
                    viewBox="0 0 20 20"
                  >
                    <g>
                      <path d="M10 8a2 2 0 100 4 2 2 0 000-4z"></path>
                      <path
                        fill-rule="evenodd"
                        d="M9 2h2a2.01 2.01 0 001.235 1.855l.53.22a2.01 2.01 0 002.185-.439l1.414 1.414a2.01 2.01 0 00-.439 2.185l.22.53A2.01 2.01 0 0018 9v2a2.01 2.01 0 00-1.855 1.235l-.22.53a2.01 2.01 0 00.44 2.185l-1.415 1.414a2.01 2.01 0 00-2.184-.439l-.531.22A2.01 2.01 0 0011 18H9a2.01 2.01 0 00-1.235-1.854l-.53-.22a2.009 2.009 0 00-2.185.438L3.636 14.95a2.009 2.009 0 00.438-2.184l-.22-.531A2.01 2.01 0 002 11V9c.809 0 1.545-.487 1.854-1.235l.22-.53a2.009 2.009 0 00-.438-2.185L5.05 3.636a2.01 2.01 0 002.185.438l.53-.22A2.01 2.01 0 009 2zm-4 8l1.464 3.536L10 15l3.535-1.464L15 10l-1.465-3.536L10 5 6.464 6.464 5 10z"
                        clip-rule="evenodd"
                      ></path>
                    </g>
                  </svg>
                </div>
                <div className="MoveRight">
                  <svg
                    onMouseEnter={() => {
                      setBigger(true);
                    }}
                    onMouseLeave={() => {
                      setBigger(false);
                    }}
                    className="Svg-qulatiy"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.75 4.5a.25.25 0 00-.25.25v3.5a.75.75 0 01-1.5 0v-3.5C3 3.784 3.784 3 4.75 3h3.5a.75.75 0 010 1.5h-3.5zM15 3.75a.75.75 0 01.75-.75h3.5c.966 0 1.75.784 1.75 1.75v3.5a.75.75 0 01-1.5 0v-3.5a.25.25 0 00-.25-.25h-3.5a.75.75 0 01-.75-.75zM3.75 15a.75.75 0 01.75.75v3.5c0 .138.112.25.25.25h3.5a.75.75 0 010 1.5h-3.5A1.75 1.75 0 013 19.25v-3.5a.75.75 0 01.75-.75zm16.5 0a.75.75 0 01.75.75v3.5A1.75 1.75 0 0119.25 21h-3.5a.75.75 0 010-1.5h3.5a.25.25 0 00.25-.25v-3.5a.75.75 0 01.75-.75z"
                    ></path>
                  </svg>
                </div>
                <div className="Moveleft">
                  {sound1 && (
                    <svg
                      onClick={() => {
                        setsound1(false);
                        setsound2(true);
                      }}
                      onMouseEnter={() => {
                        setSound(true);
                      }}
                      onMouseLeave={() => {
                        setSound(false);
                      }}
                      className="Svg-qulatiy"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M11.553 3.064A.75.75 0 0112 3.75v16.5a.75.75 0 01-1.255.555L5.46 16H2.75A1.75 1.75 0 011 14.25v-4.5C1 8.784 1.784 8 2.75 8h2.71l5.285-4.805a.75.75 0 01.808-.13zM10.5 5.445l-4.245 3.86a.75.75 0 01-.505.195h-3a.25.25 0 00-.25.25v4.5c0 .138.112.25.25.25h3a.75.75 0 01.505.195l4.245 3.86V5.445z"
                      ></path>
                      <path d="M18.718 4.222a.75.75 0 011.06 0c4.296 4.296 4.296 11.26 0 15.556a.75.75 0 01-1.06-1.06 9.5 9.5 0 000-13.436.75.75 0 010-1.06z"></path>
                      <path d="M16.243 7.757a.75.75 0 10-1.061 1.061 4.5 4.5 0 010 6.364.75.75 0 001.06 1.06 6 6 0 000-8.485z"></path>
                    </svg>
                  )}
                  {sound2 && (
                    <svg
                      onClick={() => {
                        setsound1(true);
                        setsound2(false);
                      }}
                      onMouseEnter={() => {
                        setSound(true);
                      }}
                      onMouseLeave={() => {
                        setSound(false);
                      }}
                      className="Svg-qulatiy"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12 3.75a.75.75 0 00-1.255-.555L5.46 8H2.75A1.75 1.75 0 001 9.75v4.5c0 .966.784 1.75 1.75 1.75h2.71l5.285 4.805A.75.75 0 0012 20.25V3.75zM6.255 9.305l4.245-3.86v13.11l-4.245-3.86a.75.75 0 00-.505-.195h-3a.25.25 0 01-.25-.25v-4.5a.25.25 0 01.25-.25h3a.75.75 0 00.505-.195z"
                      ></path>
                      <path d="M16.28 8.22a.75.75 0 10-1.06 1.06L17.94 12l-2.72 2.72a.75.75 0 101.06 1.06L19 13.06l2.72 2.72a.75.75 0 101.06-1.06L20.06 12l2.72-2.72a.75.75 0 00-1.06-1.06L19 10.94l-2.72-2.72z"></path>
                    </svg>
                  )}
                </div>
                <div className="Moveleftt-rightt">
                  {Bigger && <p className="BigPage">Fullscren (f)</p>}
                </div>
                <div className="Moveleftt-right">
                  {Qulity && <p className="Settings">Settings</p>}
                </div>
                <div className="Moveleftt-top">
                  {Play && <p className="Play">Play (space/k)</p>}
                </div>
                <div className="Moveleftt-top">
                  {Sound && <p className="Sound">Mute (m)</p>}
                </div>
                {Auto && (
                  <div className="Moveleftt-right-Open">
                    <div className="Moveleftt-top-Quality">
                      <div className="Qulity-Flex-top">
                        <svg
                          onClick={() => {
                            setAuto(false);
                            setQulityClick(true);
                          }}
                          className="Svg-x"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M15.28 5.22a.75.75 0 00-1.06 0l-6.25 6.25a.75.75 0 000 1.06l6.25 6.25a.75.75 0 101.06-1.06L9.56 12l5.72-5.72a.75.75 0 000-1.06z"
                          ></path>
                        </svg>
                        <p>Back to Video Player Settings</p>
                      </div>
                      <p>VIDEO QUALITY</p>
                      <div className="Qulity-open-Border"></div>
                      <div className="Orb-flex">
                        <svg
                          onClick={() => {
                            settest2(true);
                            settest1(false);
                            settest3(true);
                            settest4(true);
                            settest5(true);
                          }}
                          className={test1 ? "Orb-auto" : "Orb-auto_Presed"}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 16"
                          width="56"
                          height="56"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8z"
                          ></path>
                        </svg>
                        <p>Auto</p>
                      </div>
                      <div className="Orb-flex">
                        <svg
                          onClick={() => {
                            settest2(false);
                            settest1(true);
                            settest3(true);
                            settest4(true);
                            settest5(true);
                          }}
                          className={test2 ? "Orb-auto" : "Orb-auto_Presed"}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 16"
                          width="56"
                          height="56"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8z"
                          ></path>
                        </svg>
                        <p>720p</p>
                      </div>
                      <div className="Orb-flex">
                        <svg
                          onClick={() => {
                            settest2(true);
                            settest1(true);
                            settest3(false);
                            settest4(true);
                            settest5(true);
                          }}
                          className={test3 ? "Orb-auto" : "Orb-auto_Presed"}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 16"
                          width="56"
                          height="56"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8z"
                          ></path>
                        </svg>
                        <p>480p</p>
                      </div>
                      <div className="Orb-flex">
                        <svg
                          onClick={() => {
                            settest2(true);
                            settest1(true);
                            settest3(true);
                            settest4(false);
                            settest5(true);
                          }}
                          className={test4 ? "Orb-auto" : "Orb-auto_Presed"}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 16"
                          width="56"
                          height="56"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8z"
                          ></path>
                        </svg>
                        <p>360p</p>
                      </div>
                      <div className="Orb-flex">
                        <svg
                          onClick={() => {
                            settest2(true);
                            settest1(true);
                            settest3(true);
                            settest4(true);
                            settest5(false);
                          }}
                          className={test5 ? "Orb-auto" : "Orb-auto_Presed"}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 16"
                          width="56"
                          height="56"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8z"
                          ></path>
                        </svg>
                        <p>160p</p>
                      </div>
                    </div>
                  </div>
                )}

                {QulityClick && (
                  <div className="Moveleftt-right-Open">
                    <div className="Moveleftt-top-Click">
                      <div className="Qulity-Flex-top">
                        <svg
                          onClick={() => {
                            setQulityClick(false);
                          }}
                          className="Svg-x"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.72 5.72a.75.75 0 011.06 0L12 10.94l5.22-5.22a.75.75 0 111.06 1.06L13.06 12l5.22 5.22a.75.75 0 11-1.06 1.06L12 13.06l-5.22 5.22a.75.75 0 01-1.06-1.06L10.94 12 5.72 6.78a.75.75 0 010-1.06z"
                          ></path>
                        </svg>
                        <p>Close</p>
                      </div>
                      <div className="Qulity-open-Border"></div>
                      <div className="Qulity-open-border-bottom">
                        <div
                          onClick={() => {
                            setAuto(true);
                            setQulityClick(false);
                          }}
                          className="Qulity-open-border-bottom-flex"
                        >
                          <p className="Quality-margin">Quality</p>
                          <p>Auto</p>
                          <svg
                            className="Svg-right-Quality"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M8.72 18.78a.75.75 0 001.06 0l6.25-6.25a.75.75 0 000-1.06L9.78 5.22a.75.75 0 00-1.06 1.06L14.44 12l-5.72 5.72a.75.75 0 000 1.06z"
                            ></path>
                          </svg>
                        </div>
                        <div className="Qulity-open-border-bottom-flex">
                          <p className="Quality-margin2">Advanced</p>
                          <svg
                            className="Svg-right-Quality"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M8.72 18.78a.75.75 0 001.06 0l6.25-6.25a.75.75 0 000-1.06L9.78 5.22a.75.75 0 00-1.06 1.06L14.44 12l-5.72 5.72a.75.75 0 000 1.06z"
                            ></path>
                          </svg>
                        </div>
                        <div className="Qulity-open-border-bottom-flex">
                          <p className="Quality-margin2">
                            Report Playback issue
                          </p>
                          <svg
                            className="Svg-right-Quality"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M8.72 18.78a.75.75 0 001.06 0l6.25-6.25a.75.75 0 000-1.06L9.78 5.22a.75.75 0 00-1.06 1.06L14.44 12l-5.72 5.72a.75.75 0 000 1.06z"
                            ></path>
                          </svg>
                        </div>
                        <div className="Qulity-open-border-bottom-flex">
                          <p className="Quality-margin2">Repout Player</p>
                        </div>
                        <div className="Qulity-open-border-bottom-flex">
                          <p className="Quality-margin2">
                            View Keyboard Shorcuts
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div className="Moveleftt">
                  {stop1 && (
                    <svg
                      onClick={() => {
                        setstop1(false);
                        setstop2(true);
                      }}
                      onMouseEnter={() => {
                        setPlay(true);
                      }}
                      onMouseLeave={() => {
                        setPlay(false);
                      }}
                      className="Svg-qulatiy-bigger"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M15.146 12.354l-5.792 5.792a.5.5 0 01-.854-.353V6.207a.5.5 0 01.854-.353l5.792 5.792a.5.5 0 010 .708z"></path>
                    </svg>
                  )}
                  {stop2 && (
                    <svg
                      onClick={() => {
                        setstop1(true);
                        setstop2(false);
                      }}
                      onMouseEnter={() => {
                        setPlay(true);
                      }}
                      onMouseLeave={() => {
                        setPlay(false);
                      }}
                      className="Svg-qulatiy-bigger-pause"
                      version="1.1"
                      viewBox="0 0 20 20"
                    >
                      <g>
                        <path d="M8 3H4v14h4V3zM16 3h-4v14h4V3z"></path>
                      </g>
                    </svg>
                  )}
                </div>
                <img className="Image11" src={Image13} alt="" />
              </div>
              <div className="LandingPage-Right-page2">
                <div className="Landingpage-right-top">
                  <img className="Images-left-2" src={Image12} alt="" />
                  <p className="Matt">MattMightGame</p>
                </div>
                <div className="Viewers">
                  <p>Grand Theft Auto V</p>
                  <a className="Viewers-p2">12 viewers</a>
                </div>
                <div className="English">English</div>
                <p className="Channels">
                  DethridgeCraft is a veteran streamer who prides himself on
                  promoting a positive side of the internet. Never tiring, he
                  continues to grow as a long lasting and influential voice in
                  the livestreaming community.
                </p>
              </div>
              <svg
                onClick={() => {
                  setPage1(false);
                  setPage2(false);
                  setPage3(true);
                  setQulityClick(false);
                  setAuto(false);
                }}
                className="Svg-right"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path
                  fill-rule="evenodd"
                  d="M8.72 18.78a.75.75 0 001.06 0l6.25-6.25a.75.75 0 000-1.06L9.78 5.22a.75.75 0 00-1.06 1.06L14.44 12l-5.72 5.72a.75.75 0 000 1.06z"
                ></path>
              </svg>
            </div>
          </div>
        )}
        {Page3 && (
          <div className="LandingPage-Right">
            <div className="LandingPage-Right-page1">
              <svg
                onClick={() => {
                  setPage1(false);
                  setPage2(true);
                  setPage3(false);
                }}
                className="Svg-left"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path
                  fill-rule="evenodd"
                  d="M15.28 5.22a.75.75 0 00-1.06 0l-6.25 6.25a.75.75 0 000 1.06l6.25 6.25a.75.75 0 101.06-1.06L9.56 12l5.72-5.72a.75.75 0 000-1.06z"
                ></path>
              </svg>
              <div>
                <div className="qdssqd">
                  <svg
                    onClick={() => {
                      setQulityClick(!QulityClick);
                    }}
                    onMouseEnter={() => {
                      setQulity(true);
                    }}
                    onMouseLeave={() => {
                      setQulity(false);
                    }}
                    className="Svg-qulatiy"
                    version="1.1"
                    viewBox="0 0 20 20"
                  >
                    <g>
                      <path d="M10 8a2 2 0 100 4 2 2 0 000-4z"></path>
                      <path
                        fill-rule="evenodd"
                        d="M9 2h2a2.01 2.01 0 001.235 1.855l.53.22a2.01 2.01 0 002.185-.439l1.414 1.414a2.01 2.01 0 00-.439 2.185l.22.53A2.01 2.01 0 0018 9v2a2.01 2.01 0 00-1.855 1.235l-.22.53a2.01 2.01 0 00.44 2.185l-1.415 1.414a2.01 2.01 0 00-2.184-.439l-.531.22A2.01 2.01 0 0011 18H9a2.01 2.01 0 00-1.235-1.854l-.53-.22a2.009 2.009 0 00-2.185.438L3.636 14.95a2.009 2.009 0 00.438-2.184l-.22-.531A2.01 2.01 0 002 11V9c.809 0 1.545-.487 1.854-1.235l.22-.53a2.009 2.009 0 00-.438-2.185L5.05 3.636a2.01 2.01 0 002.185.438l.53-.22A2.01 2.01 0 009 2zm-4 8l1.464 3.536L10 15l3.535-1.464L15 10l-1.465-3.536L10 5 6.464 6.464 5 10z"
                        clip-rule="evenodd"
                      ></path>
                    </g>
                  </svg>
                </div>
                <div className="MoveRight">
                  <svg
                    onMouseEnter={() => {
                      setBigger(true);
                    }}
                    onMouseLeave={() => {
                      setBigger(false);
                    }}
                    className="Svg-qulatiy"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.75 4.5a.25.25 0 00-.25.25v3.5a.75.75 0 01-1.5 0v-3.5C3 3.784 3.784 3 4.75 3h3.5a.75.75 0 010 1.5h-3.5zM15 3.75a.75.75 0 01.75-.75h3.5c.966 0 1.75.784 1.75 1.75v3.5a.75.75 0 01-1.5 0v-3.5a.25.25 0 00-.25-.25h-3.5a.75.75 0 01-.75-.75zM3.75 15a.75.75 0 01.75.75v3.5c0 .138.112.25.25.25h3.5a.75.75 0 010 1.5h-3.5A1.75 1.75 0 013 19.25v-3.5a.75.75 0 01.75-.75zm16.5 0a.75.75 0 01.75.75v3.5A1.75 1.75 0 0119.25 21h-3.5a.75.75 0 010-1.5h3.5a.25.25 0 00.25-.25v-3.5a.75.75 0 01.75-.75z"
                    ></path>
                  </svg>
                </div>
                <div className="Moveleft">
                  {sound1 && (
                    <svg
                      onClick={() => {
                        setsound1(false);
                        setsound2(true);
                      }}
                      onMouseEnter={() => {
                        setSound(true);
                      }}
                      onMouseLeave={() => {
                        setSound(false);
                      }}
                      className="Svg-qulatiy"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M11.553 3.064A.75.75 0 0112 3.75v16.5a.75.75 0 01-1.255.555L5.46 16H2.75A1.75 1.75 0 011 14.25v-4.5C1 8.784 1.784 8 2.75 8h2.71l5.285-4.805a.75.75 0 01.808-.13zM10.5 5.445l-4.245 3.86a.75.75 0 01-.505.195h-3a.25.25 0 00-.25.25v4.5c0 .138.112.25.25.25h3a.75.75 0 01.505.195l4.245 3.86V5.445z"
                      ></path>
                      <path d="M18.718 4.222a.75.75 0 011.06 0c4.296 4.296 4.296 11.26 0 15.556a.75.75 0 01-1.06-1.06 9.5 9.5 0 000-13.436.75.75 0 010-1.06z"></path>
                      <path d="M16.243 7.757a.75.75 0 10-1.061 1.061 4.5 4.5 0 010 6.364.75.75 0 001.06 1.06 6 6 0 000-8.485z"></path>
                    </svg>
                  )}
                  {sound2 && (
                    <svg
                      onClick={() => {
                        setsound1(true);
                        setsound2(false);
                      }}
                      onMouseEnter={() => {
                        setSound(true);
                      }}
                      onMouseLeave={() => {
                        setSound(false);
                      }}
                      className="Svg-qulatiy"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12 3.75a.75.75 0 00-1.255-.555L5.46 8H2.75A1.75 1.75 0 001 9.75v4.5c0 .966.784 1.75 1.75 1.75h2.71l5.285 4.805A.75.75 0 0012 20.25V3.75zM6.255 9.305l4.245-3.86v13.11l-4.245-3.86a.75.75 0 00-.505-.195h-3a.25.25 0 01-.25-.25v-4.5a.25.25 0 01.25-.25h3a.75.75 0 00.505-.195z"
                      ></path>
                      <path d="M16.28 8.22a.75.75 0 10-1.06 1.06L17.94 12l-2.72 2.72a.75.75 0 101.06 1.06L19 13.06l2.72 2.72a.75.75 0 101.06-1.06L20.06 12l2.72-2.72a.75.75 0 00-1.06-1.06L19 10.94l-2.72-2.72z"></path>
                    </svg>
                  )}
                </div>
                <div className="Moveleftt-rightt">
                  {Bigger && <p className="BigPage">Fullscren (f)</p>}
                </div>
                <div className="Moveleftt-right">
                  {Qulity && <p className="Settings">Settings</p>}
                </div>
                <div className="Moveleftt-top">
                  {Play && <p className="Play">Play (space/k)</p>}
                </div>
                <div className="Moveleftt-top">
                  {Sound && <p className="Sound">Mute (m)</p>}
                </div>

                {Auto && (
                  <div className="Moveleftt-right-Open">
                    <div className="Moveleftt-top-Quality">
                      <div className="Qulity-Flex-top">
                        <svg
                          onClick={() => {
                            setAuto(false);
                            setQulityClick(true);
                          }}
                          className="Svg-x"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M15.28 5.22a.75.75 0 00-1.06 0l-6.25 6.25a.75.75 0 000 1.06l6.25 6.25a.75.75 0 101.06-1.06L9.56 12l5.72-5.72a.75.75 0 000-1.06z"
                          ></path>
                        </svg>
                        <p>Back to Video Player Settings</p>
                      </div>
                      <p>VIDEO QUALITY</p>
                      <div className="Qulity-open-Border"></div>
                      <div className="Orb-flex">
                        <svg
                          onClick={() => {
                            settest2(true);
                            settest1(false);
                            settest3(true);
                            settest4(true);
                            settest5(true);
                          }}
                          className={test1 ? "Orb-auto" : "Orb-auto_Presed"}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 16"
                          width="56"
                          height="56"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8z"
                          ></path>
                        </svg>
                        <p>Auto</p>
                      </div>
                      <div className="Orb-flex">
                        <svg
                          onClick={() => {
                            settest2(false);
                            settest1(true);
                            settest3(true);
                            settest4(true);
                            settest5(true);
                          }}
                          className={test2 ? "Orb-auto" : "Orb-auto_Presed"}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 16"
                          width="56"
                          height="56"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8z"
                          ></path>
                        </svg>
                        <p>720p</p>
                      </div>
                      <div className="Orb-flex">
                        <svg
                          onClick={() => {
                            settest2(true);
                            settest1(true);
                            settest3(false);
                            settest4(true);
                            settest5(true);
                          }}
                          className={test3 ? "Orb-auto" : "Orb-auto_Presed"}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 16"
                          width="56"
                          height="56"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8z"
                          ></path>
                        </svg>
                        <p>480p</p>
                      </div>
                      <div className="Orb-flex">
                        <svg
                          onClick={() => {
                            settest2(true);
                            settest1(true);
                            settest3(true);
                            settest4(false);
                            settest5(true);
                          }}
                          className={test4 ? "Orb-auto" : "Orb-auto_Presed"}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 16"
                          width="56"
                          height="56"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8z"
                          ></path>
                        </svg>
                        <p>360p</p>
                      </div>
                      <div className="Orb-flex">
                        <svg
                          onClick={() => {
                            settest2(true);
                            settest1(true);
                            settest3(true);
                            settest4(true);
                            settest5(false);
                          }}
                          className={test5 ? "Orb-auto" : "Orb-auto_Presed"}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 16"
                          width="56"
                          height="56"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8z"
                          ></path>
                        </svg>
                        <p>160p</p>
                      </div>
                    </div>
                  </div>
                )}

                {QulityClick && (
                  <div className="Moveleftt-right-Open">
                    <div className="Moveleftt-top-Click">
                      <div className="Qulity-Flex-top">
                        <svg
                          onClick={() => {
                            setQulityClick(false);
                          }}
                          className="Svg-x"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.72 5.72a.75.75 0 011.06 0L12 10.94l5.22-5.22a.75.75 0 111.06 1.06L13.06 12l5.22 5.22a.75.75 0 11-1.06 1.06L12 13.06l-5.22 5.22a.75.75 0 01-1.06-1.06L10.94 12 5.72 6.78a.75.75 0 010-1.06z"
                          ></path>
                        </svg>
                        <p>Close</p>
                      </div>
                      <div className="Qulity-open-Border"></div>
                      <div className="Qulity-open-border-bottom">
                        <div
                          onClick={() => {
                            setAuto(true);
                            setQulityClick(false);
                          }}
                          className="Qulity-open-border-bottom-flex"
                        >
                          <p className="Quality-margin">Quality</p>
                          <p>Auto</p>
                          <svg
                            className="Svg-right-Quality"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M8.72 18.78a.75.75 0 001.06 0l6.25-6.25a.75.75 0 000-1.06L9.78 5.22a.75.75 0 00-1.06 1.06L14.44 12l-5.72 5.72a.75.75 0 000 1.06z"
                            ></path>
                          </svg>
                        </div>
                        <div className="Qulity-open-border-bottom-flex">
                          <p className="Quality-margin2">Advanced</p>
                          <svg
                            className="Svg-right-Quality"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M8.72 18.78a.75.75 0 001.06 0l6.25-6.25a.75.75 0 000-1.06L9.78 5.22a.75.75 0 00-1.06 1.06L14.44 12l-5.72 5.72a.75.75 0 000 1.06z"
                            ></path>
                          </svg>
                        </div>
                        <div className="Qulity-open-border-bottom-flex">
                          <p className="Quality-margin2">
                            Report Playback issue
                          </p>
                          <svg
                            className="Svg-right-Quality"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M8.72 18.78a.75.75 0 001.06 0l6.25-6.25a.75.75 0 000-1.06L9.78 5.22a.75.75 0 00-1.06 1.06L14.44 12l-5.72 5.72a.75.75 0 000 1.06z"
                            ></path>
                          </svg>
                        </div>
                        <div className="Qulity-open-border-bottom-flex">
                          <p className="Quality-margin2">Repout Player</p>
                        </div>
                        <div className="Qulity-open-border-bottom-flex">
                          <p className="Quality-margin2">
                            View Keyboard Shorcuts
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div className="Moveleftt">
                  {stop1 && (
                    <svg
                      onClick={() => {
                        setstop1(false);
                        setstop2(true);
                      }}
                      onMouseEnter={() => {
                        setPlay(true);
                      }}
                      onMouseLeave={() => {
                        setPlay(false);
                      }}
                      className="Svg-qulatiy-bigger"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M15.146 12.354l-5.792 5.792a.5.5 0 01-.854-.353V6.207a.5.5 0 01.854-.353l5.792 5.792a.5.5 0 010 .708z"></path>
                    </svg>
                  )}
                  {stop2 && (
                    <svg
                      onClick={() => {
                        setstop1(true);
                        setstop2(false);
                      }}
                      onMouseEnter={() => {
                        setPlay(true);
                      }}
                      onMouseLeave={() => {
                        setPlay(false);
                      }}
                      className="Svg-qulatiy-bigger-pause"
                      version="1.1"
                      viewBox="0 0 20 20"
                    >
                      <g>
                        <path d="M8 3H4v14h4V3zM16 3h-4v14h4V3z"></path>
                      </g>
                    </svg>
                  )}
                </div>
                <img className="Image11" src={Image16} alt="" />
              </div>
              <div className="LandingPage-Right-page2">
                <div className="Landingpage-right-top">
                  <img className="Images-left-2" src={Image15} alt="" />
                  <p className="Matt">abulic</p>
                </div>
                <div className="Viewers">
                  <p className="Hell">Hell Let Loose</p>
                  <a className="Viewers-p2">106 viewers</a>
                </div>
                <div className="English-bigger">Nederlands</div>
                <p className="Channels">Check out this Twitch Ambassador!</p>
              </div>
              <svg
                className="Svg-right"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path
                  fill-rule="evenodd"
                  d="M8.72 18.78a.75.75 0 001.06 0l6.25-6.25a.75.75 0 000-1.06L9.78 5.22a.75.75 0 00-1.06 1.06L14.44 12l-5.72 5.72a.75.75 0 000 1.06z"
                ></path>
              </svg>
            </div>
          </div>
        )}
      </div>
      <h3 className="Live">Live channels we think you’ll like</h3>
      <LandingPage2 List2={ListPage2} />
      {Show2 && <LandingPage2 List2={ListPage7} />}
      <div className="Showmore-first">
        <div className="Showmoreborder"></div>
        <div
          onClick={() => {
            setShow2(!Show2);
          }}
          className="Show-more-text"
        >
          Show more
        </div>
        <svg
          className="Showmor-svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path
            fill-rule="evenodd"
            d="M5.22 8.72a.75.75 0 000 1.06l6.25 6.25a.75.75 0 001.06 0l6.25-6.25a.75.75 0 00-1.06-1.06L12 14.44 6.28 8.72a.75.75 0 00-1.06 0z"
          ></path>
        </svg>
        <div className="Showmoreborder-right"></div>
      </div>
      <h3 className="Live">Categories we think you’ll like</h3>
      <LandingPage3 List2={ListPage3} />
      {Show3 && <LandingPage3 List2={ListPage6} />}
      <div className="Showmore">
        <div className="Showmoreborder"></div>
        <div
          onClick={() => {
            setShow3(!Show3);
          }}
          className="Show-more-text"
        >
          Show more
        </div>
        <svg
          className="Showmor-svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path
            fill-rule="evenodd"
            d="M5.22 8.72a.75.75 0 000 1.06l6.25 6.25a.75.75 0 001.06 0l6.25-6.25a.75.75 0 00-1.06-1.06L12 14.44 6.28 8.72a.75.75 0 00-1.06 0z"
          ></path>
        </svg>
        <div className="Showmoreborder-right"></div>
      </div>
      <div className="Games-irl-icons">
        <div className="Icon_box">
          <p>Game</p>
          <img
            src="https://static.twitchcdn.net/assets/gaming-e9019587744b56b11b43.svg"
            alt=""
          />
        </div>
        <div className="Icon_box-less">
          <p>IRL</p>
          <img
            src="https://static.twitchcdn.net/assets/irl-baa32e8e64a6974282c0.svg"
            alt=""
          />
        </div>
        <div className="Icon_box">
          <p>Music</p>
          <img
            src="https://static.twitchcdn.net/assets/music-5fb4595a30d04d991e24.svg"
            alt=""
          />
        </div>
        <div className="Icon_box">
          <p>Esports</p>
          <img
            src="https://static.twitchcdn.net/assets/esports-7a078acca57531d11e29.svg"
            alt=""
          />
        </div>
        <div className="Icon_box-move">
          <p>Creative</p>
          <img
            src="https://static.twitchcdn.net/assets/creative-6423fb5fbcf31fadee38.svg"
            alt=""
          />
        </div>
      </div>
      <h3 className="Live">Recently Released Games</h3>
      <LandingPage3 List2={ListPage4} />
      {Show && <LandingPage3 List2={ListPage6} />}
      <div className="Showmore">
        <div className="Showmoreborder"></div>
        <div
          onClick={() => {
            setShow(!Show);
          }}
          className="Show-more-text"
        >
          Show more
        </div>
        <svg
          className="Showmor-svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path
            fill-rule="evenodd"
            d="M5.22 8.72a.75.75 0 000 1.06l6.25 6.25a.75.75 0 001.06 0l6.25-6.25a.75.75 0 00-1.06-1.06L12 14.44 6.28 8.72a.75.75 0 00-1.06 0z"
          ></path>
        </svg>
        <div className="Showmoreborder-right"></div>
      </div>
      <h3 className="Live">Recently Released Games</h3>
      <LandingPage2 List2={ListPage5} />
    </div>
  );
};

export default LandingPage;
