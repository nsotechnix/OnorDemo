import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import SellerAccountCreatePage from '../pages/sellers/SellerAccountCreatePage'
import SellerAccountLinkedAccount from '../pages/sellers/SellerAccountLinkedAccount'
import SellerAccountProfessionalInfo from '../pages/sellers/SellerAccountProfessionalInfo'
import SellerAccountRequirement from '../pages/sellers/SellerAccountRequirement'
import SellerAccountSecurity from '../pages/sellers/SellerAccountSecurity'
import SellerAccountSummary from '../pages/sellers/SellerAccountSummary'
import SellerAccountVerify from '../pages/sellers/SellerAccountVerify'
import SellerPostAGig from '../pages/sellers/SellerPostAGig'
import SellerPricing from '../pages/sellers/SellerPricing'
import SwitchToSeller from '../pages/SwitchToSeller'
import ManageGigsPage from '../pages/sellers/ManageGigsPage'
import ManageReceivedOrders from '../pages/sellers/ManageReceivedOrders'
import TaskViewPage from '../pages/tasks/viewTask'

// seller edit gig
import SellerGigSummaryEdit from '../pages/sellers/gig_edit/SellerGigSummaryEdit'
// import SellerPricing from '../pages/sellers/gig_edit/SellerPricing'

const SellerRouter = (props) => {
    return (
        <Fragment>
            <Route exact path={"/seller"} component={SwitchToSeller} />
            <Route exact path={"/seller/create/personalinfo"} component={SellerAccountCreatePage} />
            <Route exact path={"/seller/create/professionalinfo"} component={SellerAccountProfessionalInfo} />
            <Route exact path={"/seller/create/linkedaccount"} component={SellerAccountLinkedAccount} />
            <Route exact path={"/seller/create/accountsecurity"} component={SellerAccountSecurity} />
            <Route exact path={"/seller/create/summary"} component={SellerAccountSummary} />
            <Route exact path={"/seller/create/price"} component={SellerPricing} />
            <Route exact path={"/seller/create/requirement"} component={SellerAccountRequirement} />
            <Route exact path={"/seller/create/verify"} component={SellerAccountVerify} />
            {/* <Route exact path={"/seller/postagig"} component={SellerPostAGig} /> */}
            <Route exact path={"/seller/receivedOrders"} component={ManageReceivedOrders} />
            <Route exact path={"/seller/gigs/"} component={ManageGigsPage} />
            {/* mobile */}
            <Route exact path={"/mobile/seller"} component={SwitchToSeller} />
            <Route exact path={"/mobile/seller/create/summary"} component={SellerAccountSummary} />
            <Route exact path={"/mobile/seller/create/price"} component={SellerPricing} />
            <Route exact path={"/mobile/seller/create/verify"} component={SellerAccountVerify} />
            <Route exact path={"/mobile/seller/create/personalinfo"} component={SellerAccountCreatePage} />
            <Route exact path={"/mobile/seller/create/professionalinfo"} component={SellerAccountProfessionalInfo} />
            <Route exact path={"/mobile/seller/create/linkedaccount"} component={SellerAccountLinkedAccount} />
            <Route exact path={"/mobile/seller/create/accountsecurity"} component={SellerAccountSecurity} />

            <Route exact path={"/mobile/seller/receivedOrders"} component={ManageReceivedOrders} />

            {/* seller gig edit */}
            <Route exact path={"/seller/gigs/edit/summary/:productId"} component={SellerGigSummaryEdit} />
            <Route exact path={"/seller/gigs/edit/price/:productId"} component={SellerPricing} />

            {/* seller view task */}
            <Route exact path={"/seller/task/:requestId"} component={TaskViewPage} />
        </Fragment>
    )
}

export default SellerRouter
