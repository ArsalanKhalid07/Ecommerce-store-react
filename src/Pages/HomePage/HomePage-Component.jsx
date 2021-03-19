import React from "react";
import "../../Pages/HomePage/HomePage-Style.scss";
import Directory from "../../Directory/Directory-Component";

const HomePage = () => {

    return (
    <div className="homepage">
        <div className="directory-menu">
            <Directory />
        </div>
    </div>

    )
}


export default  HomePage;