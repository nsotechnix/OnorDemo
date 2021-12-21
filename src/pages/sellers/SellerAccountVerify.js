import React, { Fragment } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import BreadCrumbNav from '../../components/BreadCrumbNav'
import SuccessLogo from '../../svg/success.svg'
import { API_SAVE_ONOR_PACKAGE, API_BUYER_POST_A_GIG } from '../../utils/API_ENDPOINTS'
import { isNull, isUndefined } from 'lodash'
import Axios from 'axios'
import {
    action_dialog_close,
    action_dialog_open,
} from "../../redux/actions/dialogAction";
import {
    action_progress_start,
    action_progress_stop
} from "../../redux/actions/progressAction"
import _ from 'lodash'

const SellerAccountVerify = (props) => {
    const backToPageOne = () => {
        if (!isUndefined(props.postAGig)) {
            if (props.postAGig.steps === 1) {
                props.history.push("/seller/create/summary")
            }
            if (props.postAGig.steps === 2) {
                props.history.push("/seller/create/pricing")
            }
        }
    }

    React.useEffect(() => {
        backToPageOne()
    }, [props.postAGig])

    const allPackages = ['basic', 'basic_onor', 'standard', 'premium']
    const allPackagesCamelCase = ['Basic', 'BasicOnor', 'Standard', 'Premium']
    // console.log(props.postAGig.doc)

    const handlePostGig = async (isPrivate) => {
        if (!isUndefined(props.postAGig)) {
            props.actionStartProgress()
            // gig form data
            const gigData = new FormData()
            gigData.append('assignment_title', props.postAGig.assignmentTitle)
            gigData.append('description', props.postAGig.description)
            gigData.append('merchant_id', String(props.postAGig.merchantId))
            gigData.append('category_id', String(props.postAGig.categoryId))
            gigData.append('tags', props.postAGig.tags)
            gigData.append('faq', props.postAGig.faq)
            gigData.append('is_private', String(isPrivate))
            const coverFile = new File([props.postAGig.doc], Date.now() + Math.floor(Math.random() * 99999), { lastModified: Date.now(), type: props.postAGig.doc.type })
            gigData.append('image', coverFile)
            // gig form data end
            const conf = {
                headers: { 'Content-Type': 'application/json' }
            }
            for (let i = 0; i < 4; i++) {
                try {
                    var validatePackage = JSON.parse(
                        localStorage.getItem(
                            String('gig_package_onor_data_' + allPackages[i])
                        )
                    )
                    if (validatePackage.packageName !== '' || !isUndefined(validatePackage.packageName) || !isNull(validatePackage.packageName)) {
                        validatePackage = {
                            ...validatePackage,
                            'package_price': parseFloat(validatePackage.package_price).toFixed(2),
                            'onor_coin': parseFloat(validatePackage.onor_coin).toFixed(2)
                        }
                        const packageResult = await Axios.post(API_SAVE_ONOR_PACKAGE, validatePackage, conf)
                        const packageId = packageResult["data"]["package"]["packageId"]
                        gigData.append(allPackages[i] + '_package_id', String(packageId))
                    } else {
                        gigData.append(allPackages[i] + '_package_id', '')
                    }
                } catch (e) {
                    console.log(e)
                }
            }
            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
            Axios.post(API_BUYER_POST_A_GIG, gigData, config).then(res => {
                props.actionStopProgress()
                localStorage.removeItem('gig_assignment_data')
                localStorage.removeItem('gig_package_onor_data_basic')
                localStorage.removeItem('gig_package_onor_data_basic_onor')
                localStorage.removeItem('gig_package_onor_data_standard')
                localStorage.removeItem('gig_package_onor_data_premium')
                console.log({ ...res })
                let myGigStatus = isPrivate ? "private" : "public"
                props.actionDialogOpen({
                    title: "Success",
                    message:
                        isPrivate ? "Your " + myGigStatus + " gig has been posted successfully. Copy this link to share: 'https://onor.world/#/buyer/order/summary/" + res.data.products.productId + "/'" : "Your gig has been posted successfully.",
                    positive: "Ok",
                    type: "Alert",
                })
                props.history.push('/');
            }).catch((error) => {
                props.actionDialogOpen({
                    title: "Something seems wrong",
                    message:
                        "Couldn't post your gig, please retry",
                    positive: "Retry",
                    type: "Alert",
                })
            })
        }
    }
    const [layer, setLayer] = React.useState({
        cls: 'mycol',
        isShown: 'hidden'
    })

    const openLayer = () => {
        setLayer({
            cls: 'layerDiv',
            isShown: 'visible'
        })
    }
    const form_jsx = (
        <Fragment>
            <Row className="mycol mt-lg-5">
                <Col>
                    <p><h1>Congratulutions!</h1></p>
                    <p className={"header_h4"}><h4>You are almost done with the first assignment</h4></p>
                    <br />
                    <p className="mycol mt-lg-5"><h6>Before selling on <span style={{ color: "orangered" }}>ONOR</span> these are the last things we need you to do. The security of your account is important to us.</h6>
                        <h6>Therefore we require all sellers to verify their accounts</h6></p>
                    <br />
                </Col>
            </Row>
            <Row className="mycol mt-lg-5">
                <Col className="mycol">
                    <Button className="onor_secondery_btn" onClick={e => {
                        props.history.push("/seller/create/price")
                    }}>Back</Button>
                </Col>
                <Col></Col>
                <Col className="mycol">
                    <Button className="onor_btn" onClick={(e) => handlePostGig(props.postAGig.isPrivate)}>Post</Button>
                </Col>
            </Row>
        </Fragment>
    )

    return (
        <Fragment>
            <Row style={{ visibility: layer.isShown }}>
                <Col xs={12}>
                    <img className="centered" style={{
                        width: "100px", height: "100px"
                    }} alt="avatar" src={SuccessLogo} />
                </Col>
                <Col xs={12}>
                    <Button className={'onor_btn centered'} style={{ marginTop: '15em' }} as={Link} to='/'>Home</Button>
                </Col>
            </Row>
            <Container className={layer.cls}>
                <Row>
                    <Col>
                        <BreadCrumbNav
                            account={false}
                            summary={true}
                        />
                    </Col>
                </Row>
                <Row className="mt-2 mb-5">
                    <Col sm={6} className="">
                        <h4 className={"header_h4"}>Verification</h4>
                    </Col>
                </Row>
                {form_jsx}
            </Container>
        </Fragment>
    )
}
const mapStateToProps = (state) => {
    return {
        postAGig: state.postAGig
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actionDialogOpen: (payload) => dispatch(action_dialog_open(payload)),
        actionDialogClose: () => dispatch(action_dialog_close()),
        actionStartProgress: () => dispatch(action_progress_start()),
        actionStopProgress: () => dispatch(action_progress_stop()),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SellerAccountVerify)
