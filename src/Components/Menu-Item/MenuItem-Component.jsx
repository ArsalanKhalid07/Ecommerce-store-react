import React from "react";
import { withRouter} from "react-router-dom";


const MenuItem = ({title , imageUrl , size, linkUrl, history , match }) => (
        <div  className={`menu-item ${size} ` } style={{
            backgroundImage:`url(${imageUrl})`
        }}  onClick={() => history.push(`${match.url}${linkUrl}`)} >
            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitle" >Shop Now</span>
            </div>
        </div>

    )

export default   withRouter(MenuItem);