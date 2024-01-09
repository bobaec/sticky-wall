import React from "react";
import "./Lists.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faAngleDoubleRight,
    faListCheck,
    faCalendarDays,
    faNoteSticky,
    faSquare,
    faPlus,
} from "@fortawesome/free-solid-svg-icons";

const Lists = () => {
    return (
        <div className="lists-container">
            <div className="lists-title">LISTS</div>
            <div className="today-container">
                <FontAwesomeIcon className="red" icon={faSquare} />
                <span className="today-title">Personal</span>
            </div>
            <div className="calendar-container">
                <FontAwesomeIcon className="blue" icon={faSquare} />
                <span className="calendar-title">Work</span>
            </div>
            <div className="sticky-wall-container">
                <FontAwesomeIcon className="yellow" icon={faSquare} />
                <span className="sticky-wall-title">List 1</span>
            </div>
            <div className="add-list-container">
                <FontAwesomeIcon className="gray" icon={faPlus} />
                <span className="add-list-title">Add New List</span>
            </div>
        </div>
    );
};

export default Lists;
