import React, {Component} from "react";
import Item from './Item';
import {connect} from 'react-redux';
import {initializeItems} from '../actions/initializeItems'
import moment from 'moment';

class ItemList extends Component {

    /**
     * Starts initialization of existing timesheet items.
     */
    componentDidMount() {
        if (this.props.match.params.day  == undefined) {
            this.props.initializeItems({date: this.props.date, url: this.props.url});
        }
        else if (!moment(this.props.match.params.day, ['DD-MM-YYYY'], true).isValid()) {
            console.log('error with date');
            this.props.initializeItems({date: this.props.date, url: this.props.url});
        }
        else {
            this.props.initializeItems({date: this.props.match.params.day, url: this.props.url});
        }
    }

    render() {
        const items = this.props.items;
        if (this.props.connection===0) {
            return (
                <main className="main">
                    <div className="wrap">
                        <div className="item-row" id = "key">
                            <div className="check-flag">
                                <span className="check-flag-label">Could not connect to server.</span>
                            </div>
                        </div>
                    </div>
                </main>
            )
        }
        else if (items.length == 0) {
            return (
                <main className="main">
                    <div className="wrap">
                        <div className="item-row" id = "key">
                            <div className="check-flag">
                                <span className="check-flag-label">There is no ToDo items for this date. Start planning your time!</span>
                            </div>
                        </div>
                    </div>
                </main>
            )
        }
        else {
            const itemList = items.map(item => {
                return (
                    <Item item={item} key={item.id}/>
                );
            })

            return (
                <main className="main">
                    <div className="wrap">
                        <div>
                            {itemList}
                        </div>
                    </div>
                </main>
            );
        }
    }
}

const mapDispatchToProps = dispatch => {
    return {
        initializeItems: (date) => dispatch(initializeItems(date))
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.items,
        date: state.date,
        connection: state.apiConnected,
        url: state.apiUrl
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(ItemList);