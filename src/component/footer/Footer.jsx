import React from "react";
import "./assets/Footer.css";
import { GiSelfLove } from "react-icons/gi";
import { BsThreeDots } from "react-icons/bs";
import { FaRandom } from "react-icons/fa";
import { BsPlayCircle } from "react-icons/bs";
import { ImLoop2 } from "react-icons/im";
import {
    IoPlaySkipBackSharp,
    IoPlaySkipForwardSharp,
} from "react-icons/io5";

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
                            <FaRandom />
                        </div>
                        <div>
                            <IoPlaySkipBackSharp />
                        </div>
                        <div>
                            <BsPlayCircle />
                        </div>
                        <div>
                            <IoPlaySkipForwardSharp />
                        </div>
                        <div>
                            <ImLoop2 />
                        </div>
                    </div>
                </div>
                <div className="footer-startstop-time">
                    <div className="footer-startstop-time">
                        <div className="footer-startstop-time-item"></div>
                    </div>
                </div>
            </div>
            <div className="footer-karaoke_volume"></div>
        </div>
    );
}

export default Footer;
