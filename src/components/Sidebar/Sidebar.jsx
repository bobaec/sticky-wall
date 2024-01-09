import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";

import "./Sidebar.scss";
import Tasks from "./Tasks/Tasks";
import Lists from "../Lists/Lists";
import Tags from "./Tags/Tags";

const Sidebar = () => {
    return (
        <div className="sidebar-container">
            <div className="sidebar-title">
                <div className="title">Menu</div>
                <FontAwesomeIcon icon={faBars} />
            </div>
            <div className="search-container">
                <form className="form-container">
                    <FontAwesomeIcon className="search-icon" icon={faSearch} />
                    <input type="text" placeholder="Search"></input>
                </form>
            </div>
            <Tasks />
            <hr />
            <Lists />
            <hr />
            <Tags />
        </div>
    );
};

export default Sidebar;
