import React from "react";
import "./assets/Nav.css";
import { Link } from "react-router-dom";
import { CgMusic, CgRadioChecked } from "react-icons/cg";
import { GiMusicSpell } from "react-icons/gi";
import { BsMusicNoteBeamed } from "react-icons/bs";
import { BiCategoryAlt } from "react-icons/bi";
import {
    AiOutlineStar,
    AiOutlinePlus,
} from "react-icons/ai";
import {
    FcMusic,
    FcContacts,
    FcAlarmClock,
} from "react-icons/fc";
import {
    MdOutlinePieChartOutline,
    MdOutlineOndemandVideo,
    MdOutlineFeed,
} from "react-icons/md";

function Nav() {
    return (
        <div className="nav">
            <div className="nav-logo">
                <Link className="nav-listlink" to="/">
                    <img
                        className="nav-logo"
                        src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/backgrounds/logo-dark.svg"
                        alt=""
                    />
                </Link>
            </div>

            <ul className="nav-listlink-container">
                <li className="nav-listlink-item">
                    <Link
                        className="nav-listlink"
                        to="/ca_nhan"
                    >
                        <CgMusic className="nav-listlink-icon" />
                        <p className="nav-listlink-name">
                            Cá Nhân
                        </p>
                    </Link>
                    <br />
                </li>
                <li className="nav-listlink-item">
                    <Link className="nav-listlink" to="/">
                        <CgRadioChecked className="nav-listlink-icon" />
                        <p className="nav-listlink-name">
                            Khám Phá
                        </p>
                    </Link>
                    <br />
                </li>
                <li className="nav-listlink-item">
                    <Link
                        className="nav-listlink"
                        to="/Zingchart"
                    >
                        <MdOutlinePieChartOutline className="nav-listlink-icon" />
                        <p className="nav-listlink-name">
                            #Zingchart
                        </p>
                    </Link>
                    <br />
                </li>
                <li className="nav-listlink-item">
                    <Link
                        className="nav-listlink"
                        to="/radio"
                    >
                        <GiMusicSpell className="nav-listlink-icon" />
                        <p className="nav-listlink-name">
                            Radio
                        </p>
                    </Link>
                    <br />
                </li>
                <li className="nav-listlink-item">
                    <Link
                        className="nav-listlink"
                        to="/follow"
                    >
                        <MdOutlineFeed className="nav-listlink-icon" />
                        <p className="nav-listlink-name">
                            Theo dõi
                        </p>
                    </Link>
                    <br />
                </li>
            </ul>

            <ul>
                <li className="nav-listlink-item">
                    <Link
                        className="nav-listlink"
                        to="/Nhacmoi"
                    >
                        <BsMusicNoteBeamed className="nav-listlink-icon" />
                        <p className="nav-listlink-name">
                            Nhạc Mới
                        </p>
                    </Link>
                    <br />
                </li>
                <li className="nav-listlink-item">
                    <Link
                        className="nav-listlink"
                        to="/category"
                    >
                        <BiCategoryAlt className="nav-listlink-icon" />
                        <p className="nav-listlink-name">
                            Thể Loại
                        </p>
                    </Link>
                    <br />
                </li>
                <li className="nav-listlink-item">
                    <Link
                        className="nav-listlink"
                        to="/Xephang"
                    >
                        <AiOutlineStar className="nav-listlink-icon" />
                        <p className="nav-listlink-name">
                            Top 100
                        </p>
                    </Link>
                    <br />
                </li>
                {/* <br /> */}
                {/* <Link className="nav-listlink" to="/karaoke">Karaoke</Link> */}
                <li className="nav-listlink-item">
                    <Link className="nav-listlink" to="/MV">
                        <MdOutlineOndemandVideo className="nav-listlink-icon" />
                        <p className="nav-listlink-name">
                            MV
                        </p>
                    </Link>
                </li>

                <div className="nav-no-advertising">
                    <div className="nav-no-advertising-list">
                        <div className="nav-no-advertising-information">
                            Nghe nhạc không quảng cáo cùng
                            kho nhạc VIP
                        </div>
                        <div className="nav-no-advertising-btn">
                            Nâng Cấp Vip
                        </div>
                    </div>
                </div>
            </ul>

            <ul className="nav-listlink-container">
                <h3 className="nav-library">Thư Viện</h3>
                <li className="nav-listlink-item">
                    <Link
                        className="nav-listlink"
                        to="/ca_nhan"
                    >
                        <FcMusic className="nav-listlink-icon" />
                        <p className="nav-listlink-name">
                            Bài Hát
                        </p>
                    </Link>
                    <br />
                </li>
                <li className="nav-listlink-item">
                    <Link className="nav-listlink" to="/">
                        <FcContacts className="nav-listlink-icon" />
                        <p className="nav-listlink-name">
                            PlayList
                        </p>
                    </Link>
                    <br />
                </li>
                <li className="nav-listlink-item">
                    <Link
                        className="nav-listlink"
                        to="/Zingchart"
                    >
                        <FcAlarmClock className="nav-listlink-icon" />
                        <p className="nav-listlink-name">
                            Gần đây
                        </p>
                    </Link>
                    <br />
                </li>
            </ul>
            <div className="nav-playList">
                <div className="nav-playList_list">
                    <div className="nav-playList_list_icon">
                        <AiOutlinePlus
                            style={{ color: "white" }}
                            className="nav-listlink-icon"
                        />
                    </div>
                    <div className="nav-playList_list-name">
                        Tạo PlayList Mới
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Nav;
