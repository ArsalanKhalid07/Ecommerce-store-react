import React, { Component } from "react";
import ShopData from "./ShopData";
import  CollectionPreview from "../../Components/Collection-Preview/Collection-Preview-Component" 
class ShopPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            collection: ShopData
        }
    }

    render() {
        const { collection } = this.state;
        return (
            <div>
                {
                    collection.map(({id , ...otherCollection}) => (
                            <CollectionPreview key={id} {...otherCollection} />
                    ))
                }
            </div>
        )
    }

}

    export default ShopPage;