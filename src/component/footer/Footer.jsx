import React from "react";
import "./assets/Footer.css";
import { GiSelfLove, GiMicrophone } from "react-icons/gi";
import { BsThreeDots } from "react-icons/bs";
import { FaRandom } from "react-icons/fa";
import { BsPlayCircle } from "react-icons/bs";
import { ImLoop2 } from "react-icons/im";
import {
    IoPlaySkipBackSharp,
    IoPlaySkipForwardSharp,
} from "react-icons/io5";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { BiWindows } from "react-icons/bi";
import { IoMdVolumeHigh } from "react-icons/io";

function Footer() {
    return (
        <div className="footer">
            <div className="footer-name">
                <div className="footer-name_img">
                    <img
                        className="footer-name_img-item"
                        src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/d/f/9/b/df9b187a2b0e565ebe5b6bd60bdef622.jpg"
                        alt=""
                    />
                </div>
                <div className="footer-name-item">
                    <h6 className="footer-thesong">
                        Tòng Phu
                    </h6>
                    <p className="footer-namesinger">
                        Keyo
                    </p>
                </div>
                <div className="footer-name_icon">
                    <GiSelfLove className="footer-name_icon-item" />
                    <BsThreeDots className="footer-name_icon-item" />
                </div>
            </div>
            <div className="footer-startstop">
                <div className="footer-startstop-list">
                    <div className="footer-startstop-item">
                        <div>
                            <FaRandom className="footer-startstop-item_icon " />
                        </div>
                        <div>
                            <IoPlaySkipBackSharp className="footer-startstop-item_icon " />
                        </div>
                        <div>
                            <BsPlayCircle
                                style={{ fontSize: "40px" }}
                                className="footer-startstop-item_icon "
                            />
                        </div>
                        <div>
                            <IoPlaySkipForwardSharp className="footer-startstop-item_icon " />
                        </div>
                        <div>
                            <ImLoop2 className="footer-startstop-item_icon " />
                        </div>
                    </div>
                </div>
                <div className="footer-startstop-time">
                    <div className="footer-startstop-time">
                        <p className="footer-startstop-time_start">
                            00:00
                        </p>
                        <div className="footer-startstop-time-item"></div>
                        <p className="footer-startstop-time_stop">
                            03:37
                        </p>
                    </div>
                </div>
            </div>
            <div className="footer-karaoke_volume">
                <div className="footer-karaoke_volume-list">
                    <MdOutlineOndemandVideo className="footer-karaoke_volume_icon" />
                    <GiMicrophone className="footer-karaoke_volume_icon" />
                    <BiWindows className="footer-karaoke_volume_icon" />
                    <IoMdVolumeHigh className="footer-karaoke_volume_icon" />
                    <div className="footer-karaoke_volume-item"></div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
