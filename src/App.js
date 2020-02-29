import React,{Component} from 'react';
import ItemList from './Components/ItemList';
import Header from './Components/Header';
import Footer from './Components/Footer';
import CreateTask from './Components/CreateTask';
import {BrowserRouter,Route} from 'react-router-dom';

class App extends Component {

    render() {
        return(
            <div className="page-wrap">
                <BrowserRouter>
                    <Header/>
                    <CreateTask/>
                    <Route exact path='/' component={ItemList} />
                    <Route path='/:day' component={ItemList} />
                    <Footer/>
                </BrowserRouter>
            </div>

        );
    }
}

export default App;