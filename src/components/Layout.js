import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import '../assets/styles/App.scss'

function Layout(props) {

    return(
        <div className="App">
            <Header/>
                {props.children}
            <Footer/>
        </div>
    )

}

export default Layout;
