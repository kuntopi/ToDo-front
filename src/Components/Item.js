import React, {Component} from "react";
import {connect} from "react-redux";
import {deleteItem} from "../actions/deleteItem";

class Item extends Component {

    /**
     * Calls the method to delete selected item.
     */
    handleClick = () => {
        let info = {item:this.props.item,url:this.props.url};
        this.props.deleteItem(info);
    }

    render() {
        return (
            <div className="item-row icon icon-update js-update-init" onClick={this.handleClick} id = {this.props.item.id}>
                <div className="check-flag">
                    <span className="small-text-label">Title</span>
                    <span className="small-text-label hours">Duration</span>
                    <span className="check-flag-label">{this.props.item.title}</span>
                    <span className="check-flag-label">{this.props.item.hours} h</span>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        maxHours: state.maxHours,
        currentHours: state.currentHours,
        date: state.date,
        items: state.items,
        url: state.apiUrl
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        deleteItem: (item) => dispatch(deleteItem(item)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Item);
