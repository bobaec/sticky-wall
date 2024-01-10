import React from "react";
import "./Lists.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare, faClose } from "@fortawesome/free-solid-svg-icons";

const Lists = ({ todos, handleFilteredList }) => {
    const uniqueCombinations = new Map();

    // Filter the array to keep only unique combinations
    const uniqueLists = todos.filter((item) => {
        const key = `${item.list_type}-${item.list_color}`;
        if (!uniqueCombinations.has(key)) {
            uniqueCombinations.set(key, true);
            return true;
        }
        return false;
    });
    return (
        <div className="lists-container">
            <div className="lists-title">LISTS</div>
            <div className="list-container">
                {uniqueLists.map((list, index) => {
                    return (
                        <div
                            className="list"
                            key={index}
                            onClick={() => {
                                handleFilteredList({
                                    list_type: list.list_type,
                                    list_color: list.list_color,
                                });
                            }}
                        >
                            <div className="title-and-icon-container">
                                <FontAwesomeIcon
                                    className={list.list_color
                                        .split(", ")[0]
                                        .toLowerCase()}
                                    icon={faSquare}
                                />
                                <span className="list-title">
                                    {list.list_type}
                                </span>
                            </div>
                            {/* <div className="number-of-todos-container">aa</div> */}
                        </div>
                    );
                })}
                <div className="list" onClick={() => handleFilteredList(null)}>
                    <div className="title-and-icon-container">
                        <FontAwesomeIcon className="" icon={faClose} />
                    <span className="list-title">Clear Filter</span></div>
                </div>
            </div>
        </div>
    );
};

export default Lists;
