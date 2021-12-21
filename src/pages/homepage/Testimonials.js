import React, { useState } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import ItemsCarousel from 'react-items-carousel'
import christin from '../../images/artists/christin.jpg'
import mary from '../../images/artists/mary.jpg'

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 2,
        slidesToSlide: 1
    },
    desktop: {
        breakpoint: { max: 3000, min: 1200 },
        items: 2,
        slidesToSlide: 1
    },
    tablet: {
        breakpoint: { max: 1200, min: 1024 },
        items: 2,
        slidesToSlide: 1
    },
    tabletSmall: {
        breakpoint: { max: 1024, min: 464 },
        items: 0.4,
        slidesToSlide: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 0.1,
        slidesToSlide: 1
    },
}
const Testimonials = (props) => {
    return (
        <>
            {/* <div className={'d-flex justify-content-around'} style={{ border: '1px solid black' }}> */}
            <props.carousel
                responsive={responsive}
                //slidesToSlide={getGridListCols()}
                // containerClass="carousel-container"
                // itemClass="carousel-item-padding-40-px"
                centerMode={true}
            >
                <div style={{ height: 290, width: 240, background: '#fff', borderRadius: '20px', padding: '15px' }} className={'text-center'}>
                    <h4 className={'px-4 bolder mt-4'}>We have the best Makeup Artists</h4>
                    <p style={{ fontSize: 16 }} className={'pt-3'}>All our artists have passed through a rigorous assessment and are trained in the Onor System to deliver services in a consistent and effective manner. We help you achieve whatever look you want.</p>
                </div>
                <div style={{ height: 290, width: 240, background: '#fff', borderRadius: '20px', padding: '15px' }} className={'text-center'}>
                    <img src={mary} className={'mt-3'} alt="image" style={{ height: '6em', width: '6em', borderRadius: '50%', pointerEvents: 'none', userSelect: 'none' }} />
                    <h6 className={'mt-4 bolder'}>Mary Geleecka</h6>
                    <p><span>Makeup Artist</span></p>
                    <button
                        style={{ padding: '7px 35px' }}
                        onClick={
                            e => window.open('https://calendly.com/onorservices-calendar/consult-a-makeup-maestro', '_blank')
                        } className={'btn btn-primary rounded mt-1'}>Get A Free Consult</button>
                </div>
                <div style={{ height: 290, width: 240, background: '#fff', borderRadius: '20px', padding: '15px' }} className={'text-center'}>
                    <img src={christin} className={'mt-3'} alt="image" style={{ height: '6em', width: '6em', borderRadius: '50%', pointerEvents: 'none', userSelect: 'none' }} />
                    <h6 className={'mt-4 bolder'}>Christin Birckhead</h6>
                    <p><span>Makeup Artist</span></p>
                    <button
                        style={{ padding: '7px 35px' }}
                        onClick={
                            e => window.open('https://calendly.com/onorservices-calendar/consult-a-makeup-maestro', '_blank')
                        } className={'btn btn-primary rounded mt-1'}>Get A Free Consult</button>
                </div>

                {/* <div style={{ height: 290, width: 240, background: '#fff', borderRadius: '20px', padding: '15px' }} className={'text-center'}>
                    <img src={christin} className={'mt-3'} alt="image" style={{ height: '6em', width: '6em', borderRadius: '50%', pointerEvents: 'none', userSelect: 'none' }} />
                    <h6 className={'mt-4 bolder'}>Christin Birckhead</h6>
                    <p><span>Makeup Artist</span></p>
                    <button
                        style={{ padding: '7px 35px' }}
                        onClick={
                            e => window.open('https://calendly.com/onorservices-calendar/consult-a-makeup-maestro', '_blank')
                        } className={'btn btn-primary rounded mt-1'}>Get A Free Consult</button>
                </div>

                <div style={{ height: 290, width: 240, background: '#fff', borderRadius: '20px', padding: '15px' }} className={'text-center'}>
                    <img src={christin} className={'mt-3'} alt="image" style={{ height: '6em', width: '6em', borderRadius: '50%', pointerEvents: 'none', userSelect: 'none' }} />
                    <h6 className={'mt-4 bolder'}>Christin Birckhead</h6>
                    <p><span>Makeup Artist</span></p>
                    <button
                        style={{ padding: '7px 35px' }}
                        onClick={
                            e => window.open('https://calendly.com/onorservices-calendar/consult-a-makeup-maestro', '_blank')
                        } className={'btn btn-primary rounded mt-1'}>Get A Free Consult</button>
                </div>

                <div style={{ height: 290, width: 240, background: '#fff', borderRadius: '20px', padding: '15px' }} className={'text-center'}>
                    <img src={christin} className={'mt-3'} alt="image" style={{ height: '6em', width: '6em', borderRadius: '50%', pointerEvents: 'none', userSelect: 'none' }} />
                    <h6 className={'mt-4 bolder'}>Christin Birckhead</h6>
                    <p><span>Makeup Artist</span></p>
                    <button
                        style={{ padding: '7px 35px' }}
                        onClick={
                            e => window.open('https://calendly.com/onorservices-calendar/consult-a-makeup-maestro', '_blank')
                        } className={'btn btn-primary rounded mt-1'}>Get A Free Consult</button>
                </div> */}
            </props.carousel>
            {/* </div> */}
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        dialog: state.dialog,
        searchGig: state.searchGig,
    }
}
export default withRouter(connect(mapStateToProps)(Testimonials))