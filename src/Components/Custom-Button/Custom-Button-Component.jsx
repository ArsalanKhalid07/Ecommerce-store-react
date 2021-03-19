import React from "react";
import "../Custom-Button/Custom-Button-Styles.scss";


const CustomButton = ({children, isGoogle ,...otherButtonProps}) => {

   return (
        <button className={`${isGoogle ? 'googlebtn' : '' }  custom-button`} {...otherButtonProps}>
                {children}
        </button>
    )

}


export default CustomButton;