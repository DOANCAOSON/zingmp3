import React from "react";
import "./assets/header.css";
import {
    BsArrowLeft,
    BsArrowRight,
    BsSearch,
    BsArrowUpSquare,
} from "react-icons/bs";
import { HiOutlineHome } from "react-icons/hi";
import { RiVipDiamondLine } from "react-icons/ri";
import { AiOutlineSetting } from "react-icons/ai";

function Header() {
    return (
        <div className="header">
            <div className="header-icon">
                <BsArrowLeft className="header-icon-item" />
                <BsArrowRight className="header-icon-item" />
            </div>
            <div className="header-search">
                <div className="header-search-icon">
                    <BsSearch className="header-search-icon_item" />
                </div>
                <div className="header-search-input">
                    <input
                        className="header-search-input_item"
                        placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát"
                    />
                </div>
            </div>
            <div className="header-account">
                <div className="header-account-list">
                    <div className="header-account-list-item">
                        <HiOutlineHome className="header-account-list-item-icon" />
                    </div>
                    <div className="header-account-list-item">
                        <RiVipDiamondLine className="header-account-list-item-icon" />
                    </div>
                    <div className="header-account-list-item">
                        <BsArrowUpSquare className="header-account-list-item-icon" />
                    </div>
                    <div className="header-account-list-item">
                        <AiOutlineSetting className="header-account-list-item-icon" />
                    </div>
                    <div className="header-account-list-item">
                        <img
                            className="header-account-list-img"
                            src="https://s120-ava-talk-zmp3.zmdcdn.me/f/c/5/a/3/120/816c7a97a3294b8b0ce797ff78bd1525.jpg"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
