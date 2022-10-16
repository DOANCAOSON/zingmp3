import React from "react";
import "./assets/aside.css";
import { GiAlarmClock } from "react-icons/gi";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { BsPlayFill } from "react-icons/bs";

function Aside() {
    return (
        <div className="aside">
            <div className="aside-recently">
                <div className="aside-recently-list">
                    <div className="aside-recently-list-item aside-recently-active ">
                        Danh sách phát
                    </div>
                    <div className="aside-recently-list-item">
                        Nghe Gần đây
                    </div>
                </div>
                <div className="aside-recently-clock">
                    <div className="aside-recently-clock-list">
                        <GiAlarmClock className="aside-recently-clock-item" />
                    </div>
                    <div className="aside-recently-clock-list">
                        <BiDotsHorizontalRounded className="aside-recently-clock-item" />
                    </div>
                </div>
            </div>
            <div className="aside-listening">
                <div className="aside-listening-list">
                    <div className="aside-listening-list_item">
                        <img
                            className="aside-listening-list_img"
                            src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/d/f/9/b/df9b187a2b0e565ebe5b6bd60bdef622.jpg"
                            alt=""
                        />
                        <BsPlayFill className="aside-listening-list_icon" />
                    </div>
                </div>
                <div className="aside-listening-name">
                    <div className="aside-listening-music">
                        Tòng Phu
                    </div>
                    <div className="aside-listening-name-item">
                        Keyo
                    </div>
                </div>
            </div>
            <div className="aside-step">
                <h3 className="aside-step-heading">
                    Tiếp theo
                </h3>
                <p className="aside-step-des">
                    Từ Play
                    <a
                        className="aside-step-des-link"
                        href=""
                    >
                        List Top 100 Nhạc V-Pop Hay Nhất
                    </a>
                </p>
                <div
                    style={{
                        background: "transparent",
                        marginTop: "10px",
                    }}
                    className="aside-listening"
                >
                    <div className="aside-listening-list">
                        <div className="aside-listening-list_item">
                            <img
                                className="aside-listening-list_img"
                                src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/d/f/9/b/df9b187a2b0e565ebe5b6bd60bdef622.jpg"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="aside-listening-name">
                        <div className="aside-listening-music">
                            Tòng Phu
                        </div>
                        <div className="aside-listening-name-item">
                            Keyo
                        </div>
                    </div>
                </div>
                <div
                    style={{
                        background: "transparent",
                        marginTop: "10px",
                    }}
                    className="aside-listening"
                >
                    <div className="aside-listening-list">
                        <div className="aside-listening-list_item">
                            <img
                                className="aside-listening-list_img"
                                src="https://o.rada.vn/data/image/2022/08/02/Phao-hong-700.jpg"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="aside-listening-name">
                        <div className="aside-listening-music">
                            Pháo hồng
                        </div>
                        <div className="aside-listening-name-item">
                            Đạt Long Vinh
                        </div>
                    </div>
                </div>
                <div
                    style={{
                        background: "transparent",
                        marginTop: "10px",
                    }}
                    className="aside-listening"
                >
                    <div className="aside-listening-list">
                        <div className="aside-listening-list_item">
                            <img
                                className="aside-listening-list_img"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV6ymdpE7GBl05by0HdU72bvE7hZ9jpZgx444miruxiQ&s"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="aside-listening-name">
                        <div className="aside-listening-music">
                            Tình yêu là
                        </div>
                        <div className="aside-listening-name-item">
                            Hiền Hồ
                        </div>
                    </div>
                </div>
                <div
                    style={{
                        background: "transparent",
                        marginTop: "10px",
                    }}
                    className="aside-listening"
                >
                    <div className="aside-listening-list">
                        <div className="aside-listening-list_item">
                            <img
                                className="aside-listening-list_img"
                                src="data:image/jpeg;base64,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"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="aside-listening-name">
                        <div className="aside-listening-music">
                            Nói yêu thương chỉ là thừa
                        </div>
                        <div className="aside-listening-name-item">
                            Deff Trần
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Aside;
