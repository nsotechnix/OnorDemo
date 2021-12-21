import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import BuyerPostRequest from '../pages/buyers/BuyerPostRequest'
// import BuyersPreferencesPage from "../pages/buyers/preferences/PreferencesPage";

const BuyerRouter = (props) => (

    <Fragment>
        <Route exact path={"/buyer/postrequest"} component={BuyerPostRequest} />
        {/* <Route exect path={'/user/preferences'} component={BuyersPreferencesPage} /> */}
    </Fragment>

)

export default BuyerRouter
