import React, { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";

import "./Sidebar.scss";
import Tasks from "./Tasks/Tasks";
import Lists from "./Lists/Lists";
import Tags from "./Tags/Tags";

const Sidebar = ({ handleSearch, numberOfTodos }) => {
    const [search, setSearch] = useState("");
    const handleSearchRef = useRef(handleSearch);
    useEffect(() => {
        handleSearchRef.current = handleSearch;
    }, [handleSearch]);

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            handleSearchRef.current(search);
        }, 400);
        return () => clearTimeout(delayDebounceFn);
    }, [search]);

    return (
        <div className="sidebar-container">
            <div className="sidebar-title">
                <div className="title">Menu</div>
                <FontAwesomeIcon icon={faBars} />
            </div>
            <div className="search-container">
                <form className="form-container">
                    <FontAwesomeIcon className="search-icon" icon={faSearch} />
                    <input
                        type="text"
                        placeholder="Search"
                        onChange={(e) => setSearch(e.target.value)}
                    ></input>
                </form>
            </div>
            <Tasks numberOfTodos={numberOfTodos} />
            <hr />
            <Lists />
            <hr />
            <Tags />
        </div>
    );
};

export default Sidebar;
