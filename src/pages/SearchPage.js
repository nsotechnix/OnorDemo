import React, { useState, useEffect } from 'react'
import { isEmpty, isUndefined } from 'lodash'
import { Row, Col, Container } from 'react-bootstrap'
import { connect } from 'react-redux'
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";
import { withFirebase } from "../firebase";
import { usePromiseTracker, trackPromise } from "react-promise-tracker";
import { action_rating_dialog_start } from "../redux/actions/RatingAction";
import GigComponent from "../components/GigComponent";
import GigsListLoading from "../components/GigsListLoading";
import { get_homepage_gigs } from "../redux/actions/HomePageAction";
import { API_GIG_SEARCH } from "../utils/API_ENDPOINTS";
import Axios from 'axios'
import {
    action_progress_start,
    action_progress_stop,
} from "../redux/actions/progressAction"

let SearchPage = (props) => {
    let searchTerm = props.match.params.searchTerm;
    if (searchTerm === null) {
        props.history.push("/");
    }
    const { promiseInProgress } = usePromiseTracker()
    const [searchedResult, setSearchedResult] = useState("")
    useEffect(() => {
        const handleGigSearch = async () => {
            if (!isEmpty(searchTerm)) {
                try {
                    let currData = {
                        search_terms: searchTerm,
                    };
                    props.actionStartProgress();
                    const res = await Axios.post(API_GIG_SEARCH, currData);
                    // console.log(res)
                    if (!isUndefined(res.data)) {
                        setSearchedResult(res.data.filtered_products);
                        console.log(searchedResult)
                    }
                    props.actionStopProgress();
                } catch (e) {
                    console.log(e);
                }
            } else {
                props.history.push("/");
            }
        }
        handleGigSearch()
    }, [])

    return (
        !isUndefined(searchedResult) && !isEmpty(searchedResult) && (
            <>
                <div className={"mt-5 mx-4"} id="search">
                    <Row>
                        <Col>
                            <h5>Searched Results</h5>
                        </Col>
                        <Col>
                            <p className={"float-right onor_span_color"}
                                onClick={(e) => props.history.push("/")}>Home</p>
                        </Col>
                    </Row>
                </div>
                {promiseInProgress && (
                    <GigsListLoading />
                )}
                {!promiseInProgress && (
                    <Container>
                        <div className={"mt-1"}>
                            <Row className={"d-flex justify-content-center"}>
                                {searchedResult.map((currVal, index) => {
                                    return (
                                        !currVal.isPrivate &&
                                        <Col xs={6} sm={4} md={4} lg={3} className={'p-0 m-0'}>
                                            <GigComponent
                                                key={"sr" + currVal.productId.toString()}
                                                productId={currVal.productId}
                                                productIconLink={currVal.productIconLink}
                                                productName={currVal.productName}
                                                merchantFirstName={currVal.merchant.firstName}
                                                merchantLastName={currVal.merchant.lastName}
                                                merchantRating={currVal.merchant.ratings}
                                                packages={currVal.onorPackages}
                                                merchantImage={currVal.merchant.avatar}
                                            />
                                        </Col>
                                    );
                                })}
                            </Row>
                        </div>
                    </Container>
                )}
            </>
        )
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        dialog: state.dialog,
        searchGig: state.searchGig,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        get_homepage_gigs: () => dispatch(get_homepage_gigs()),
        actionShowRating: () => dispatch(action_rating_dialog_start()),
        actionStartProgress: (payload) => dispatch(action_progress_start(payload)),
        actionStopProgress: (payload) => dispatch(action_progress_stop(payload))
    };
};
SearchPage = withWidth()(SearchPage)
SearchPage = withFirebase(SearchPage)
export default connect(mapStateToProps, mapDispatchToProps)(SearchPage)