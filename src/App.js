import React, { Fragment } from "react";
import RootRouter from "./routes/RootRouter";
import { Lines } from 'react-preloaders';
import usePageTracking from './usePageTracking.js'

export default () => (
    <Fragment>
        <RootRouter />
        {usePageTracking()}
        {/* <Lines show={true} color={'#fa6331'} animation={'fade'} background="blur" /> */}
    </Fragment>
)