import React from "react";
import "./Tasks.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faAngleDoubleRight,
    faListCheck,
    faCalendarDays,
    faNoteSticky,
} from "@fortawesome/free-solid-svg-icons";

const Tasks = ({ numberOfTodos }) => {
    return (
        <div className="tasks-container">
            <div className="tasks-title">TASKS</div>
            <div className="upcoming-container">
                <FontAwesomeIcon className="gray" icon={faAngleDoubleRight} />
                <span className="upcoming-title">Upcoming</span>
            </div>
            <div className="today-container">
                <FontAwesomeIcon className="gray" icon={faListCheck} />
                <span className="today-title">Today</span>
            </div>
            <div className="calendar-container">
                <FontAwesomeIcon className="gray" icon={faCalendarDays} />
                <span className="calendar-title">Calendar</span>
            </div>
            <div className="sticky-wall-container">
                <div className="title-and-icon-container">
                    <FontAwesomeIcon className="gray" icon={faNoteSticky} />
                    <span className="sticky-wall-title">Sticky Wall</span>
                </div>
                <div className="number-of-todos-container">{numberOfTodos}</div>
            </div>
        </div>
    );
};

export default Tasks;
