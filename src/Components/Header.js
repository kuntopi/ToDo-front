import React, {Component} from "react";
import dataQ from '../quotes.json';
import {connect} from "react-redux";

class Header extends Component {
    render() {
        let x = Math.floor(Math.random()*13);
        return (
            // <header className="header">
            //     <div className="wrap">
            //         <span className="btn-icon">
            //             <img className="icon icon-plus js-modal-init" src="icons/icon-plus.svg"
            //                  alt="Add New Item"></img> <br/>
            //         </span>
            //         <div className="header-blockquote">
            //             <h1 className="header-quote">{dataQ.quotes[x].words}</h1>
            //             <div className="header-cite">{dataQ.quotes[x].author}</div>
            //         </div>
            //     </div>
            //     <div className="header-inner">
            //         <div className="wrap">
            //             <div className="date-wrap">
            //                 <img className="icon" src="icons/icon-calendar.svg" alt="Calendar"></img>
            //                 <time>{this.props.date}</time>
            //             </div>
            //         </div>
            //     </div>
            // </header>
            <div>
                <header class="w3-container w3-center w3-padding-48 w3-white header">
                    <div className="wrap">
                        <h1 class="header-big"><b>ToDo Application</b></h1>
                        <h6 class="header-small">Plan your day!</h6>
                        <span className="btn-icon">
                            <img className="icon icon-plus js-modal-init" src="icons/icon-plus.svg"
                                alt="Add New Item"></img> <br/>
                        </span>
                    </div>
                </header>
                <div className="header-inner">
                    <div className="wrap">
                        <div className="date-wrap">
                            <img className="icon right" src="icons/icon-calendar.svg" alt="Calendar"></img>
                            <time>{this.props.date}</time>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        date: state.date
    }
}

export default connect(mapStateToProps)(Header);
