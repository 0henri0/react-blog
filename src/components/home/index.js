import React, { Fragment, Component } from 'react';
import Footer from "./../layouts/Footer";
import Header from "./../layouts/Header";
import DisplayCount from "./DisplayCount";
import ButtonCount from "./ButtonCount";

class index extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <DisplayCount />
                <ButtonCount />
                <Footer />
            </Fragment>
        )
      }
}

export default index;