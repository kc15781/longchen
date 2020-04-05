import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { IntlProvider } from "react-intl";

import { NavBar } from "./components/shared_components/navbar.component"
import Home from "./components/Home";
import Product from "./components/Product";
import Employment from "./components/Employment";
import { messages } from "./languages/messages";
import './components/Stylesheet/Stylesheet.css';


function App() {


    const [locale, setLocale] = useState("en");

    function change_locale(new_locale) {
        setLocale(new_locale);
    }

    return (
        <IntlProvider locale={locale} messages={messages[locale]}>
    
            <Router>

                <NavBar change_locale={change_locale} />
 
           
                <Route path="/" exact render={(props) => <Home {...props} locale={locale} />} />
                <Route path="/Product" component={Product} />
                <Route path="/Employment" component={Employment} />
                

            </Router>
        </IntlProvider>
     
    );
}

export default App;
