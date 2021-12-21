import React, { useState } from 'react'
import clsx from 'clsx'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Form, Button, Table } from 'react-bootstrap'
import './ChangePassword.scss'
import OnorLogo from '../../images/onorlogo.png'
import UserImage from '../../svg/man.svg'
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import jwt from 'jsonwebtoken'
import { USER_CHANGE_PASSWORD } from '../../utils/API_ENDPOINTS'
import Axios from 'axios'
import MuiAlert from '@material-ui/lab/Alert'
import {
    action_progress_start,
    action_progress_stop,
  } from "../../redux/actions/progressAction";
import { isUndefined } from 'lodash'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    margin: {
        margin: theme.spacing(1),
    },
    withoutLabel: {
        marginTop: theme.spacing(3),
    },
    textField: {
        width: '25ch',
    },
}))

const ChangePasswordPage = (props) => {

    const [values, setValues] = React.useState({
        showPassword1: false,
        showPassword2: false,
        showPassword3: false,
        password1: '',
        password2: '',
        password3: ''
    })
    const handleChange1 = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleChange2 = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleChange3 = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword1 = (prop) => {
        setValues({ ...values, showPassword1: !values.showPassword1 });
    };

    const handleClickShowPassword2 = (prop) => {
        setValues({ ...values, showPassword2: !values.showPassword2 });
    };

    const handleClickShowPassword3 = (prop) => {
        setValues({ ...values, showPassword3: !values.showPassword3 });
    };

    const handleMouseDownPassword = () => (event) => {
        setValues({ ...values, showPassword1: false });
    }
    const [errors, setErrors] = useState({})

    const validate = () => {
        let passwordError1 = ''
        let passwordError2 = ''
        let passwordError3 = ''
        if (values.password1 === '') {
            passwordError1 = 'Please enter your old password'
        }
        if (values.password2 === '') {
            passwordError2 = 'Please enter your new password'
        }
        if (values.password3 === '') {
            passwordError3 = 'Please confirm your password'
        }
        if (values.password2 !== values.password3) {
            passwordError3 = 'Passwords doesn\'t match'
        }
        if (passwordError1) {
            setErrors({
                passwordError1
            })
            return false
        }
        if (passwordError2) {
            setErrors({
                passwordError2
            })
            return false
        }
        if (passwordError3) {
            setErrors({
                passwordError3
            })
            return false
        }
        return true
    }

    const handleChangePassword = async () => {
        if (validate()) {
            setErrors({})
            const data = {
                "user_id": String(jwt.decode(localStorage.getItem('jwtToken')).userId),
                "old_password": values.password1,
                "new_password": values.password3
            }
            props.actionStartProgress()
            try {
                const result = await Axios.post(USER_CHANGE_PASSWORD, data)
                console.log(result)
                setLogSuccess('Password Changed Successfully')
                setLogError('')
                localStorage.setItem('jwtToken', result.data.token)
            } catch (e) {
                setLogSuccess('')
                if (!isUndefined(e.response)) {
                    setLogError(e.response.data.message)
                } else {
                    setLogError('Something went wrong, please try again later')
                }
            }
            props.actionStopProgress()
        }
    }
    const [logError, setLogError] = useState(false)
    const [logSuccess, setLogSuccess] = useState(false)
    const classes = useStyles()
    function Alert(props) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
    }
    const changePassword_jsx = (
        <React.Fragment>
            <Row style={{ height: '500px' }}>
                <Col sm={4} className={'imageDiv'}>
                    <img src={OnorLogo} alt="logo" className={'sideImg img-responsive img-fluid d-flex justify-content-center'} style={{ height: '180px', width: '300px', marginTop: '10em' }} />
                </Col>
                <Col xs={12} sm={12} md={8} lg={8} className={'content d-flex justify-content-center'}>
                    <Row>
                        <Col sm={12} className={'mt-4 d-flex justify-content-center'}>
                            <h5 className={'header_h4'}>Change Password</h5>
                        </Col>
                        <Col sm={12} className={'d-flex justify-content-center'}>
                            <img src={UserImage} alt="user" style={{ height: '40px', width: '40px' }} />&emsp;
                            <Form.Group controlId="formBasicPassword">
                                <Form.Control type="text" disabled value={jwt.decode(localStorage.getItem("jwtToken"))["userEmail"]} />
                            </Form.Group>
                        </Col>
                        {'\n'}
                        <Col sm={12}>
                            {logError && <Alert className={'my-3'} severity="error">{logError}</Alert>}
                            {logSuccess && <Alert className={'my-3'} severity="success">{logSuccess}</Alert>}
                            <Form className={"signin_form px-5"}>
                                <Col className={'d-flex justify-content-center'}>
                                    <FormControl variant="filled">
                                        <InputLabel>Current Password</InputLabel>
                                        <FilledInput
                                            style={errors.passwordError1 ? { border: '1px solid red', boxShadow: '0 0 4px red' } : null}
                                            id="filled-adornment-password"
                                            type={values.showPassword1 ? 'text' : 'password'}
                                            value={values.password1}
                                            onChange={handleChange1('password1')}
                                            endAdornment={
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        aria-label="toggle password visibility"
                                                        onClick={handleClickShowPassword1}
                                                        onMouseDown={handleMouseDownPassword}
                                                        edge="end"
                                                    >
                                                        {values.showPassword1 ? <Visibility /> : <VisibilityOff />}
                                                    </IconButton>
                                                </InputAdornment>
                                            }
                                        />
                                        <span class={'text-danger'}>{errors.passwordError1}</span>
                                    </FormControl>
                                </Col>

                                <Col className={'d-flex justify-content-center mt-2'}>
                                    <FormControl variant="filled">
                                        <InputLabel>New Password</InputLabel>
                                        <FilledInput
                                            style={errors.passwordError2 ? { border: '1px solid red', boxShadow: '0 0 4px red' } : null}
                                            id="filled-adornment-password"
                                            type={values.showPassword2 ? 'text' : 'password'}
                                            value={values.password2}
                                            onChange={handleChange2('password2')}
                                            endAdornment={
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        aria-label="toggle password visibility"
                                                        onClick={handleClickShowPassword2}
                                                        onMouseDown={handleMouseDownPassword}
                                                        edge="end"
                                                    >
                                                        {values.showPassword2 ? <Visibility /> : <VisibilityOff />}
                                                    </IconButton>
                                                </InputAdornment>
                                            }
                                        />
                                        <span class={'text-danger'}>{errors.passwordError2}</span>
                                    </FormControl>
                                </Col>

                                <Col className={'d-flex justify-content-center mt-2'}>
                                    <FormControl variant="filled">
                                        <InputLabel>Confirm Password</InputLabel>
                                        <FilledInput
                                            style={errors.passwordError3 ? { border: '1px solid red', boxShadow: '0 0 4px red' } : null}
                                            id="filled-adornment-password"
                                            type={values.showPassword3 ? 'text' : 'password'}
                                            value={values.password3}
                                            onChange={handleChange3('password3')}
                                            endAdornment={
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        aria-label="toggle password visibility"
                                                        onClick={handleClickShowPassword3}
                                                        onMouseDown={handleMouseDownPassword}
                                                        edge="end"
                                                    >
                                                        {values.showPassword3 ? <Visibility /> : <VisibilityOff />}
                                                    </IconButton>
                                                </InputAdornment>
                                            }
                                        />
                                        <span class={'text-danger'}>{errors.passwordError3}</span>
                                    </FormControl>
                                </Col>
                                <Row className={'mt-2'}>
                                    <Col className={'d-flex justify-content-center'}>
                                        <Button onClick={e => {
                                            props.history.push("/user/preferences/")
                                        }} variant="" className={'onor_secondery_btn'}>Back</Button>
                                    </Col>
                                    <Col className={'d-flex justify-content-center'}>
                                        <Button onClick={
                                            e => {
                                                handleChangePassword()
                                            }
                                        } className={'onor_btn'} variant="">Update</Button>
                                    </Col>
                                </Row>
                            </Form>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </React.Fragment>
    )
    return (
        <React.Fragment>
            <div className="mt-3"></div>
            <Container>
                {changePassword_jsx}
            </Container>
        </React.Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actionStartProgress: () => dispatch(action_progress_start()),
        actionStopProgress: () => dispatch(action_progress_stop()),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ChangePasswordPage)