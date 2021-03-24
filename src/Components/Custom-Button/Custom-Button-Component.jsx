import React from "react";
import "../Custom-Button/Custom-Button-Styles.scss";


const CustomButton = ({children, inverted , isGoogle ,...otherButtonProps}) => {

   return (
        <button className={` ${inverted ? 'inverted' : ""}  ${isGoogle ? 'googlebtn' : '' }  custom-button`} {...otherButtonProps}>
                {children}
        </button>
    )

}


export default CustomButton;