import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward'
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import IndividualRequestPage from './requests/IndividualRequestPage'
import './ManageRequests.scss'
import Axios from 'axios'
import { action_dialog_open } from "../../redux/actions/dialogAction";
import {
    action_progress_start,
    action_progress_stop,
} from "../../redux/actions/progressAction";
import { API_FETCH_TASKS, API_FETCH_TASKS_ALL } from '../../utils/API_ENDPOINTS'
import { usePromiseTracker, trackPromise } from "react-promise-tracker"
import Loader from 'react-loader-spinner'
import jwt from 'jsonwebtoken'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: '70%',
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
    },
    rootSearch: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 800,
        border: '1px solid #fa6331'
    },
    iconButton: {
        padding: 10,
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
}))


const ManageRequests = (props) => {
    const { promiseInProgress } = usePromiseTracker()
    if (!props.auth.isAuthorized) {
        props.actionDialogOpen({
            title: "Please login or signup to continue",
            positive: "Ok",
            type: "Alert",
        })
        props.history.push("/signin");
    }
    const [myRequests, setMyRequests] = useState([])
    const [requestDataSingle, setRequestDataSingle] = useState([])
    useEffect(() => {
        handleFetchMyRequests()
    }, [])
    const handleFetchMyRequests = async () => {
        try {
            const res = await trackPromise(Axios.get(API_FETCH_TASKS_ALL)) // + jwt.decode(localStorage.getItem('jwtToken')).userId
            res.data.request_list.reverse()
            setMyRequests(res.data.request_list)
        } catch (e) {
            console.log(e)
        }
    }
    console.log(myRequests)
    const [IndividualRequest, setIndividualRequest] = React.useState(!1)
    const classes = useStyles()
    return (
        <React.Fragment>
            { IndividualRequest && <IndividualRequestPage setOpen={setIndividualRequest} data={requestDataSingle} isOpen={IndividualRequest} />}
            <h4 className={'onor_span_color d-flex justify-content-center my-4'}>Manage Requests</h4>
            <Row>
                <Col sm={12} className={'d-flex justify-content-center'}>
                    <Paper component="form" className={classes.rootSearch}>
                        <InputBase
                            className={classes.input}
                            placeholder="Search Request"
                            inputProps={{ 'aria-label': 'search request' }}
                        />
                        <IconButton type="submit" className={classes.iconButton} aria-label="search">
                            <SearchIcon />
                        </IconButton>
                    </Paper>
                </Col>
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
                <Col sm={12} className={'d-flex justify-content-center'}>
                    <List className={classes.root}>
                        {
                            !promiseInProgress && myRequests.map((obj, index) => {
                                return (
                                    (
                                        (jwt.decode(localStorage.getItem('jwtToken')).userId == obj.user.userId) && <React.Fragment>
                                            <ListItem role="button" alignItems="flex-start" as={Link} onClick={
                                                e => {
                                                    setIndividualRequest(true)
                                                    setRequestDataSingle(obj)
                                                }
                                            }>
                                                <ListItemAvatar>
                                                    <Avatar alt="img" src={obj.docUrl} />
                                                </ListItemAvatar>
                                                <ListItemText
                                                    primary={obj.title}
                                                    secondary={
                                                        <React.Fragment>
                                                            <Typography
                                                                component="span"
                                                                variant="body2"
                                                                className={classes.inline}
                                                                color="textPrimary"
                                                            >
                                                                {obj.user.firstName + ' ' + obj.user.lastName}
                                                            </Typography>
                                                            {' — ' + obj.description.slice(0, 30) + '…'}
                                                            <span className={'float-right'}>{new Date(obj.createDate).toLocaleString()}</span>
                                                        </React.Fragment>
                                                    }
                                                />
                                            </ListItem>
                                            <Divider variant="inset" component="li" />
                                        </React.Fragment>
                                    )
                                )
                            })
                        }
                    </List>
                </Col>
            </Row>
            <Row className={'mt-2'}>
                <Col sm={12} className="d-flex justify-content-center">
                    <IconButton aria-label="delete" className={classes.margin} size="large">
                        <ArrowDownwardIcon fontSize="inherit" />
                    </IconButton>
                </Col>
            </Row>
        </React.Fragment>
    )
}
const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        progress: state.progress,
        dialog: state.dialog,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actionDialogOpen: (payload) => dispatch(action_dialog_open(payload)),
        actionStartProgress: (payload) => dispatch(action_progress_start(payload)),
        progressStop: () => dispatch(action_progress_stop()),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(ManageRequests)