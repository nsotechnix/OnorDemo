import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { API_FETCH_TASKS } from '../../utils/API_ENDPOINTS'
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";
import { Row, Col, Container } from 'react-bootstrap'
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import StarBorderIcon from "@material-ui/icons/StarBorder"
import { isUndefined } from 'lodash'
import { usePromiseTracker, trackPromise } from "react-promise-tracker"
import Loader from 'react-loader-spinner'

const style = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'auto',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: '100%',
        height: 'auto'
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
}));

let HotTaskList = (props) => {
    const { promiseInProgress } = usePromiseTracker()
    const getGridListCols = () => {
        if (isWidthUp("xl", props.width)) {
            return 4;
        }

        if (isWidthUp("lg", props.width)) {
            return 4;
        }

        if (isWidthUp("md", props.width)) {
            return 3;
        }

        if (isWidthUp("sm", props.width)) {
            return 2;
        }

        if (isWidthUp("xs", props.width)) {
            return 2;
        }
    };

    const [taskList, setTaskList] = useState([])
    const classes = style()
    useEffect(() => {
        handleHotTaskLists()
    }, []);
    const handleHotTaskLists = async () => {
        try {
            const taskResult = await trackPromise(axios.get(API_FETCH_TASKS))
            if (!isUndefined(taskResult) && !isUndefined(taskResult.data)) {
                setTaskList(taskResult.data.request_list)
            }
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <React.Fragment>
            <div className={"mt-5"}>
                <Container>
                    <Row>
                        <Col>
                            <h5>HOT TASKS</h5>
                        </Col>
                        <Col>
                            <p className={"float-right onor_span_color"} style={{ cursor: 'pointer' }} onClick={() => props.history.push('/')}>Home</p>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className={"mt-1"}>
                {
                    promiseInProgress && <div
                        style={{
                            width: "100%",
                            height: "100",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                    >
                        <Loader type="ThreeDots" color="#fa6331" height="100" width="100" />
                    </div>
                }
                {!promiseInProgress && <Container>
                    <Row className={"d-flex justify-content-center"}>
                        <Col sm={12}>
                            <GridList className={classes.gridList} cols={getGridListCols()}>
                                {taskList.map((currVal, index) => {
                                    return (
                                        <GridListTile key={index} style={{ marginTop: '1em' }}>
                                            <img
                                                onClick={(e) => {
                                                    props.history.push({ currVal });
                                                }}
                                                src={currVal.docUrl}
                                                alt={index}
                                            />
                                            <GridListTileBar
                                                title={currVal.title}
                                                subtitle={
                                                    <div>
                                                        <span>By: {currVal.user.firstName}</span>
                                                        <br />
                                                        <span>Price: ${currVal.budget}</span>
                                                    </div>
                                                }
                                                classes={{
                                                    root: classes.titleBar,
                                                    title: classes.title,
                                                }}
                                                actionIcon={
                                                    <IconButton aria-label={`star ${index}`}>
                                                        <StarBorderIcon className={classes.title} />
                                                    </IconButton>
                                                }
                                            />
                                        </GridListTile>
                                    );
                                })}
                            </GridList>
                        </Col>
                    </Row>
                </Container>}
            </div>
        </React.Fragment>
    );
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        dialog: state.dialog,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        // get_homepage_gigs: () => dispatch(get_homepage_gigs()),
    };
};
HotTaskList = withWidth()(HotTaskList)
export default connect(mapStateToProps, mapDispatchToProps)(HotTaskList)