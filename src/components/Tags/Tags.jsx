import React from "react";
import "./Tags.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Tags = () => {
    return (
        <div className="tags-sidebar-container">
            <div className="tags-title">TAGS</div>
            <div className="tags-container">
                <div className="blue-background">Tag 1</div>
                <div className="red-background">Tag 2</div>
                <div className="gray-background">
                    <FontAwesomeIcon icon={faPlus} />
                    &nbsp; Add Tag
                </div>
            </div>
        </div>
    );
};

export default Tags;
