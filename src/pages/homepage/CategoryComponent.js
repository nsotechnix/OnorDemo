import React from 'react'
import { ArrowForward } from '@material-ui/icons'
import { Col, Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

const CategoryComponent = (props) => {
    return (
        <>
            <div className="item parent_card" style={{ paddingTop: "20px" }}>
                <div
                    onClick={e => props.history.push('/gigs/popular/')}
                    className="job-item"
                    style={{ cursor: "pointer", boxShadow: "0 0 20px rgba(33, 33, 33, 0.2)" }}
                >
                    <div className="">
                        <img
                            src={props.image}
                            alt=""
                            className={'gig_image'}
                            style={{
                                width: "100%",
                                borderTopLeftRadius: "8%", borderTopRightRadius: "8%"
                                // objectFit: "contain" 
                            }}
                        />
                        <div className="mt-3 bolder text-center">
                            <p className={'text-center bolder'}>{props.name}</p>
                            <ArrowForward className={'mb-2'} htmlColor={'#FB592E'} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default connect()(withRouter(CategoryComponent))