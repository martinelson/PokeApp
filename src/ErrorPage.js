import React from 'react';
import Header from './Header';
import ErrorText from './ErrorText';
import Footer from './Footer';

function ErrorPage(){
    return(
        <div>
            <Header/>
            <ErrorText/>
            <Footer/>
        </div>
    )
}

export default ErrorPage;
