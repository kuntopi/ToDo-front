import React, {Component} from "react";
import {connect} from "react-redux";
import {addItem} from "../actions/addItem";

class CreateTask extends Component {
    /**
     * After submitting the form calls the method to add new item to the timesheet.
     * @param e
     */
    handleSubmit = (e) => {
        e.preventDefault();
        let info = {
            data: {
                title: e.target.title.value,
                hours: e.target.hours.value,
                date: this.props.date.replace("/", "-").replace("/", "-"),
                id: 0
            },
            url:this.props.url
        }
        this.props.addItem(info);
    }
    /**
     * Checks if all the required input fields are filled, if not submit button is disabled.
     * @param e
     */
    handleChange = (e) => {
        if ( document.getElementById('title').value.length == 0 || document.getElementById('hours').value.length == 0) {
            document.getElementById('formBtn').disabled=true;
        }
        else {
            document.getElementById('formBtn').disabled=false;
        }
    }

    render() {
        return (
            <div className="modal-wrap js-modal">
                <div className="modal js-modal-inner">
                    <h2>Create a task:</h2>
                    <form onSubmit={this.handleSubmit} className = "item-form">
                        <div className="field-wrap">
                            <label className="label" htmlFor="">Title:</label>
                            <input className="field" type="text" id="title" name = "title" onChange={this.handleChange} placeholder="Enter title here..." />
                        </div>
                        <div className="field-wrap">
                            <label className="label" htmlFor="">Hours:</label>
                            <input className="field" type="number" id="hours" onChange={this.handleChange} name = "hours" placeholder="Add hours here..." onChange = {this.handleChange} max = {this.props.maxHours-this.props.currentHours} />
                        </div>

                        <div className="btn-wrap align-right">
                            <input className="btn" id='formBtn' type="submit" value="Create" disabled={true}></input>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addItem: (newItem) => dispatch(addItem(newItem)),
    }
}

const mapStateToProps = (state) => {
    return {
        date: state.date,
        items: state.items,
        url: state.apiUrl
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CreateTask);
