import React from 'react'
import { connect } from 'react-redux'
import { Container, Row, Col, Form, Button, Table } from 'react-bootstrap'
import BreadCrumbNav from '../../components/BreadCrumbNav'
import OnorLogo from '../../images/onorlogo.png'
import CameraLogo from '../../svg/camera.svg'
import "./PreferencesPage.scss"
import { Link } from 'react-router-dom'
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const PreferencesPage = (props) => {
    const IOSSwitch = withStyles((theme) => ({
        root: {
            width: 42,
            height: 26,
            padding: 0,
            margin: theme.spacing(1),
        },
        switchBase: {
            padding: 1,
            '&$checked': {
            transform: 'translateX(16px)',
            color: theme.palette.common.white,
            '& + $track': {
                backgroundColor: '#fa6331',
                opacity: 1,
                border: 'none',
            },
            },
            '&$focusVisible $thumb': {
            color: '#fa6331',
            border: '6px solid #fff',
            },
        },
        thumb: {
            width: 24,
            height: 24,
        },
        track: {
            borderRadius: 26 / 2,
            border: `1px solid ${theme.palette.grey[400]}`,
            backgroundColor: theme.palette.grey[50],
            opacity: 1,
            transition: theme.transitions.create(['background-color', 'border']),
        },
        checked: {},
        focusVisible: {},
        }))(({ classes, ...props }) => {
        return (
            <Switch
            focusVisibleClassName={classes.focusVisible}
            disableRipple
            classes={{
                root: classes.root,
                switchBase: classes.switchBase,
                thumb: classes.thumb,
                track: classes.track,
                checked: classes.checked,
            }}
            {...props}
            />
        );
        });
        const [state, setState] = React.useState({
            notification: true,
            location: false
        });
        const handleChange = (event) => {
            setState({ ...state, [event.target.name]: event.target.checked });
        };
    const sideView_jsx = (
        <React.Fragment>
            <h4 className="mycol header_h4 mt-xl-2 mb-xl-5">Preferences</h4>
            <Row className={'d-flex mt-2 justify-content-center'}>
                <Col sm={10} xs={10} md={8}>
                    <Table>
                        <tbody>
                            <tr>
                                <td className={'align-middle'}><h6>Notifications</h6></td>
                                <td className={'align-middle'}>
                                <FormControlLabel className={'float-right align-self-center'}
                                    control={<IOSSwitch checked={state.notification} onChange={handleChange} name="notification" />}
                                />
                                </td>
                            </tr>
                            <tr>
                                <td className={'align-middle'}><h6>Location</h6></td>
                                <td className={'align-middle'}>
                                <FormControlLabel className={'float-right align-self-center'}
                                    control={<IOSSwitch checked={state.location} onChange={handleChange} name="location" />}
                                />
                                </td>
                            </tr>
                            <tr>
                                <td className={'align-middle'}><h6>Change Password</h6></td>
                                <td className={'align-middle'}>
                                    <ChevronRightIcon onClick={(e) => props.history.push('/user/password/')} style={{cursor: 'pointer'}} className="float-right align-self-center mr-2 w-25 h-25" />
                                </td>
                            </tr>
                            <tr>
                                <td className={'align-middle'}><h6>Refer</h6></td>
                                <td className={'align-middle'}>
                                    <ChevronRightIcon className="float-right align-self-center mr-2 w-25 h-25" />
                                </td>
                            </tr>
                            <tr>
                                <td className={'align-middle'}><h6>Country &amp; Language</h6></td>
                                <td className={'align-middle'}>
                                    <ChevronRightIcon className="float-right align-self-center mr-2 w-25 h-25" />
                                </td>
                            </tr>
                            <tr>
                                <td className={'align-middle'}><h6>Terms of Service</h6></td>
                                <td className={'align-middle'}>
                                    <ChevronRightIcon onClick={(e) => props.history.push('/user/terms/')} style={{cursor: 'pointer'}} className="float-right align-self-center mr-2 w-25 h-25" />
                                </td>
                            </tr>
                            <tr>
                                <td className={'align-middle'}><h6>Privacy Policy</h6></td>
                                <td className={'align-middle'}>
                                    <ChevronRightIcon onClick={(e) => props.history.push('/user/privacy/')} style={{cursor: 'pointer'}} className="float-right align-self-center mr-2 w-25 h-25" />
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
            <Row className={'mt-2'}>
                <Col sm={12}>
                    <Button onClick={e => {
                        props.history.push("/")
                    }} variant="" className="onor_secondery_btn float-right">Back</Button>
                </Col>
            </Row>
        </React.Fragment>
    )
    return (
        <React.Fragment>
            <div className="mt-3"></div>
            <Container>
                {sideView_jsx}
            </Container>
        </React.Fragment>
    )
}


export default connect()(PreferencesPage)