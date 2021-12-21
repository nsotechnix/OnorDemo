import React, { useState, useRef } from 'react'
import './BuyerEditProfilePage.scss'
import { Col, Row, Form, Button, Container } from 'react-bootstrap'
import { connect } from 'react-redux'
import { action_dialog_open } from "../../redux/actions/dialogAction"
import {
    action_progress_start,
    action_progress_stop,
} from "../../redux/actions/progressAction"
import man from '../../svg/man.svg'
import jwt from 'jsonwebtoken'
import Axios from 'axios'
import onorLogo from '../../images/onorlogo.png'
import { Table } from 'react-bootstrap'
import {
    GET_BUYER_EDIT_PROFILE_DATA,
    GET_SELLER_EDIT_PROFILE_DATA,
    UPDATE_SELLER_EDIT_PROFILE_DATA,
    UPDATE_BUYER_EDIT_PROFILE_DATA,
    API_MERCHANT_AVATAR_CHANGE,
    API_USER_AVATAR_CHANGE
} from '../../utils/API_ENDPOINTS'
import _, { isUndefined, isEmpty } from 'lodash'
import EditIcon from '@material-ui/icons/Edit';

const BuyerEditProfilePage = (props) => {
    var websitePattern = new RegExp('^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
    // initialization of state constants
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phone, setPhone] = useState('')
    const [about, setAbout] = useState('')
    const [getData, setGetData] = useState('')
    const [languageList, setLanguageList] = useState([
        { languageName: '', proficiency: '' }
    ])
    const [educationList, setEducationList] = useState([
        { name: '', yearOfPassing: '', university: '' }
    ])
    const [certificationsList, setCertificationsList] = useState([
        { name: '', certificateBy: '' }
    ])
    const [onorCertificationsList, setOnorCertificationsList] = useState([
        { name: '' }
    ])
    const [skillList, setSkillList] = useState([
        { name: '', proficiency: '' }
    ])
    const [areasOfInterests, setAreasOfInterests] = useState('')
    const [website, setWebsite] = useState('')
    const [image, setimage] = useState(man)
    const [uploadImage, setUploadImage] = useState('')
    const [errors, setErrors] = useState({})

    React.useEffect(() => {
        if (!props.auth.isAuthorized) {
            props.actionDialogOpen({
                title: "Please login or signup to continue",
                positive: "Ok",
                type: "Alert",
            })
            props.history.push("/signin");
        } else {
            if (props.auth.isAlsoSeller) {
                props.actionStartProgress()
                Axios.get(GET_SELLER_EDIT_PROFILE_DATA + jwt.decode(localStorage.getItem('sellerJwtToken')).merchantId)
                    .then((result) => {
                        setGetData(result.data)
                        props.progressStop()
                    }).catch(e => {
                        props.progressStop()
                        console.log(e)
                    })
            } else {
                props.actionStartProgress()
                Axios.get(GET_BUYER_EDIT_PROFILE_DATA + jwt.decode(localStorage.getItem('jwtToken')).userId)
                    .then((result) => {
                        setGetData(result.data)
                        props.progressStop()
                    }).catch(e => {
                        console.log(e)
                        props.progressStop()
                    })
            }
        }
    }, [])
    if (props.auth.isAlsoSeller) {
        if (!firstName && !_.isUndefined(getData.merchant) && !_.isUndefined(getData.merchant.merchantId)) {
            console.log({
                ...getData.merchant
            })
            setFirstName(getData.merchant.firstName)
            setLastName(getData.merchant.lastName)
            setPhone(getData.merchant.profile.phone1)
            setAbout(getData.merchant.profile.description)
            setLanguageList(getData.merchant.languageSet)
            setEducationList(getData.merchant.educationSet)
            setSkillList(getData.merchant.skillsSet)
            setCertificationsList(getData.merchant.certificationSet)
            setWebsite(getData.merchant.profile.website)
            setAreasOfInterests(getData.merchant.areaOfInterest)
            setOnorCertificationsList(getData.merchant.onorCertificationSet)
            setimage(getData.merchant.avatar === null || getData.merchant.avatar === '' ? man : getData.merchant.avatar)
        }
    } else {
        if (!firstName && !_.isUndefined(getData.user) && !_.isUndefined(getData.user.userId)) {
            setFirstName(getData.user.firstName)
            setLastName(getData.user.lastName)
            setPhone(getData.user.profile.phone1)
            setimage(getData.user.avatar === null || getData.user.avatar === '' ? man : getData.user.avatar)
        }
    }

    const dateElem = new Date()

    const updateProfile = async () => {
        if (validate()) {
            if (props.auth.isAlsoSeller) {
                props.actionStartProgress()
                const data = {
                    'first_name': firstName,
                    'last_name': lastName,
                    'phone1': String(phone),
                    'phone2': '',
                    'about': about,
                    'languages': languageList,
                    'skills': skillList,
                    'certificates': certificationsList,
                    'educations': educationList,
                    'website': website,
                    'area_of_interest': areasOfInterests,
                    'onor_certificates': onorCertificationsList
                }
                const config = {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
                try {
                    const response = await Axios.post(UPDATE_SELLER_EDIT_PROFILE_DATA + jwt.decode(localStorage.getItem('sellerJwtToken')).merchantId, data, config)
                    console.log(response)
                    if (!_.isUndefined(response.data.token)) {
                        localStorage.setItem('sellerJwtToken', response.data.token)
                    }
                    props.actionDialogOpen({
                        title: "Success",
                        message: "Profile Updated",
                        positive: "Close",
                    })
                } catch (e) {
                    props.actionDialogOpen({
                        title: "Opps!",
                        message: "Failed to update your profile",
                        positive: "Close",
                    })
                }
                props.progressStop()
            } else {
                props.actionStartProgress()
                const data = {
                    'first_name': firstName,
                    'last_name': lastName,
                    'phone1': String(phone),
                }
                const config = {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
                try {
                    const response = await Axios.post(UPDATE_BUYER_EDIT_PROFILE_DATA + jwt.decode(localStorage.getItem('jwtToken')).userId, data, config)
                    localStorage.setItem('jwtToken', response.data.token)
                    props.actionDialogOpen({
                        title: "Success",
                        message: "Profile Updated",
                        positive: "Close",
                    })
                } catch (e) {
                    props.actionDialogOpen({
                        title: "Opps!",
                        message: "Failed to update your profile",
                        positive: "Close",
                    })
                }
                props.progressStop()
            }
        }
    }

    const validate = () => {
        let firstNameError = ''
        let lastNameError = ''
        let phoneError = ''
        let aboutError = ''
        let languageListError = -1
        let skillsError = -1
        let areasOfInterestsError = ''
        let educationError = -1
        let certificationsError = -1
        let onorCertificationsError = -1
        let websiteError = ''

        if (website != '') {
            if (!websitePattern.test(website)) {
                websiteError = 'Please enter a valid website'
            }
        }

        const skillListValidator = () => {
            skillList.map((key, index) => {
                if (key.name === '' || key.proficiency === '' || key.name === null || key.proficiency === null) {
                    skillsError = index
                    return true
                }
            })
        }
        skillListValidator()

        if (areasOfInterests === '' || areasOfInterests === null) {
            areasOfInterestsError = 'Please enter your interests'
        }

        const educationListValidator = () => {
            educationList.map((key, index) => {
                if (key.name === '' || key.yearOfPassing === '' || key.university === '' || key.name === null || key.yearOfPassing === null || key.university === null) {
                    educationError = index
                    return true
                }
            })
        }
        educationListValidator()

        const certificationsListValidator = () => {
            certificationsList.map((key, index) => {
                if (key.name === '' || key.certificateBy === '' || key.name === null || key.certificateBy === null) {
                    certificationsError = index
                    return true
                }
            })
        }
        certificationsListValidator()
        const languageListValidator = () => {
            languageList.map((key, index) => {
                if (key.languageName === '' || key.proficiency === '' || key.languageName === null || key.proficiency === null) {
                    languageListError = index
                    return true
                }
            })
        }
        languageListValidator()

        if (firstName === '' || firstName === null) {
            firstNameError = 'Please enter your first name'
        }
        if (lastName === '' || lastName === '') {
            lastNameError = 'Please enter your last name'
        }
        if (phone === '' || phone === null) {
            phoneError = 'Please enter your phone number'
        }
        if (about === '' || about.length < 150 || about.length > 800 || about === null) {
            aboutError = 'Please describe yourself between 150 to 800 characters'
        }

        if (props.auth.isAlsoSeller) {
            if (firstNameError || lastNameError || phoneError || aboutError || languageListError > -1 || skillsError > -1 || areasOfInterestsError || educationError > -1 || certificationsError > -1 || onorCertificationsError > -1 || websiteError) {
                setErrors({
                    firstNameError,
                    lastNameError,
                    phoneError,
                    aboutError,
                    languageListError,
                    skillsError,
                    areasOfInterestsError,
                    educationError,
                    certificationsError,
                    onorCertificationsError,
                    websiteError
                })
                return false
            }
        } else {
            if (firstNameError || lastNameError || phoneError) {
                setErrors({
                    firstNameError,
                    lastNameError,
                    phoneError
                })
                return false
            }
        }
        return true
    }

    // language code starts here

    const handleLanguageChange = (e, index) => {
        setErrors({
            languageListError: -1
        })
        const { name, value } = e.target
        const list = [...languageList]
        list[index][name] = value
        setLanguageList(list)
    }

    const handleAddLanguage = () => {
        if (languageList[languageList.length - 1].languageName !== '' && languageList[languageList.length - 1].proficiency !== '') {
            setLanguageList([...languageList, { languageName: '', proficiency: '' }])
        }
    }

    const handleRemoveLanguage = (index) => {
        let list = [...languageList]
        list.splice((index), 1)
        setLanguageList(list)
    }

    // education

    const handleEducationChange = (e, index) => {
        setErrors({
            educationError: -1
        })
        const { name, value } = e.target
        const list = [...educationList]
        list[index][name] = value
        setEducationList(list)
    }

    const handleAddEducation = () => {
        setErrors({
            educationError: -1
        })
        if (educationList[educationList.length - 1].name !== '' && educationList[educationList.length - 1].yearOfPassing !== '' && educationList[educationList.length - 1].university !== '') {
            setEducationList([...educationList, { name: '', yearOfPassing: '', university: '' }])
        }
    }

    const handleRemoveEducation = (index) => {
        setErrors({
            educationError: -1
        })
        let list = [...educationList]
        list.splice((index), 1)
        setEducationList(list)
    }

    // certifications

    const handleCertificationsChange = (e, index) => {
        setErrors({
            certificationsError: -1
        })
        const { name, value } = e.target
        const list = [...certificationsList]
        list[index][name] = value
        setCertificationsList(list)
    }

    const handleAddCertifications = () => {
        if (certificationsList[certificationsList.length - 1].name !== '' && certificationsList[certificationsList.length - 1].certificateBy !== '') {
            setCertificationsList([...certificationsList, { name: '', certificateBy: '' }])
        }
    }

    const handleRemoveCertifications = (index) => {
        let list = [...certificationsList]
        list.splice((index), 1)
        setCertificationsList(list)
    }

    // ONOR certifications

    const handleOnorCertificationsChange = (e, index) => {
        setErrors({
            onorCertificationsError: -1
        })
        const { name, value } = e.target
        const list = [...onorCertificationsList]
        list[index][name] = value
        setOnorCertificationsList(list)
    }

    const handleAddOnorCertifications = () => {
        if (onorCertificationsList[onorCertificationsList.length - 1].name !== '') {
            setOnorCertificationsList([...onorCertificationsList, { name: '' }])
        }
    }

    const handleRemoveOnorCertifications = (index) => {
        let list = [...onorCertificationsList]
        list.splice((index), 1)
        setOnorCertificationsList(list)
    }

    // skills and proficiency
    const handleSkillChange = (e, index) => {
        setErrors({
            skillsError: -1
        })
        const { name, value } = e.target
        const list = [...skillList]
        list[index][name] = value
        setSkillList(list)
    }

    const handleAddSkill = () => {
        if (skillList[skillList.length - 1].name !== '' && skillList[skillList.length - 1].proficiency !== '') {
            setSkillList([...skillList, { name: '', proficiency: '' }])
        }
    }

    const handleRemoveSkill = (index) => {
        let list = [...skillList]
        list.splice((index), 1)
        setSkillList(list)
    }

    const handleImageInputChange = (event) => {
        event.stopPropagation();
        event.preventDefault();
        inputFile.current.click();
        // console.log(event.target.files[0])
    };
    const inputFile = useRef(null)

    const onImageChange = async (event) => {
        if (event.target.files && event.target.files[0]) {
            if (event.target.files[0].size < (100 * 2500)) {
                let reader = new FileReader()
                reader.onload = (e) => {
                    setimage(e.target.result)
                }
                reader.readAsDataURL(event.target.files[0])
                setUploadImage(event.target.files[0])
                if (props.auth.isAlsoSeller) {
                    try {
                        props.actionStartProgress()
                        const data = new FormData()
                        data.append('avatar', event.target.files[0])
                        const result = await Axios.post(API_MERCHANT_AVATAR_CHANGE + jwt.decode(localStorage.getItem('sellerJwtToken')).merchantId, data)
                        console.log(result)
                        props.progressStop()
                    } catch (e) {
                        props.progressStop()
                        console.log(e)
                    }
                } else {
                    try {
                        props.actionStartProgress()
                        const data = new FormData()
                        data.append('avatar', event.target.files[0])
                        const result = await Axios.post(API_USER_AVATAR_CHANGE + jwt.decode(localStorage.getItem('jwtToken')).userId, data)
                        console.log(result)
                        props.progressStop()
                    } catch (e) {
                        props.progressStop()
                        console.log(e)
                    }
                }
            } else {
                alert('Upload size limit exceeded. Max Size: 250KB')
            }
        }
    }
    return (
        <React.Fragment>
            <Container className={"media-body"}>
                <h4 className={'header_h4 my-3'}>Edit Profile</h4>
                <Row className={'d-flex justify-content-center'}>
                    <Col sm={6} className={'d-flex justify-content-center'}>
                        <div className={'imageDivProfile'}>
                            <img src={image} className={'main-profile-img'} alt="user" />&emsp;
                            <i><EditIcon onClick={handleImageInputChange} /></i>
                            <input type={'file'}
                                className="d-none"
                                ref={inputFile}
                                onChange={onImageChange}
                                accept={'image/*'} />
                        </div>
                    </Col>
                    <Col sm={6} className={'d-flex align-items-center'}>
                        {!isEmpty(jwt.decode(localStorage.getItem('jwtToken'))) && jwt.decode(localStorage.getItem('jwtToken')).userEmail}
                    </Col>
                </Row>
                <Row className={'d-flex justify-content-center my-3'}>
                    <span className={'text-muted'}>Maximum file size should be less then 250KB</span>
                </Row>
                <Row className={`${(props.auth.isAlsoSeller) ? 'd-none' : 'd-flex'} justify-content-center my-3`}>

                    <Col sm={10}>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                            type={'text'}
                            placeholder={'Enter first name'}
                            value={firstName}
                            onChange={
                                e => {
                                    setFirstName(e.target.value)
                                    setErrors({})
                                }
                            }
                            style={errors.firstNameError ? { border: '1px solid red', boxShadow: '0 0 4px red' } : null}>
                        </Form.Control>
                        <span className={'text-danger'}>{errors.firstNameError}</span>
                    </Col>

                </Row>

                <Row className={`${(props.auth.isAlsoSeller) ? 'd-none' : 'd-flex'} justify-content-center my-3`}>

                    <Col sm={10}>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                            type={'text'}
                            placeholder={'Enter last name'}
                            value={lastName}
                            onChange={
                                e => {
                                    setLastName(e.target.value)
                                    setErrors({})
                                }
                            }
                            style={errors.lastNameError ? { border: '1px solid red', boxShadow: '0 0 4px red' } : null}>
                        </Form.Control>
                        <span className={'text-danger'}>{errors.lastNameError}</span>
                    </Col>

                </Row>

                <Row className={`${(props.auth.isAlsoSeller) ? 'd-none' : 'd-flex'} justify-content-center my-3`}>

                    <Col sm={10}>
                        <Form.Label>Phone number</Form.Label>
                        <Form.Control
                            type={'text'}
                            placeholder={'Enter phone number'}
                            value={phone}
                            onChange={e => {
                                setPhone(e.target.value)
                                setErrors({})
                            }}
                            style={errors.phoneError ? { border: '1px solid red', boxShadow: '0 0 4px red' } : null}>
                        </Form.Control>
                        <span className={'text-danger'}>{errors.phoneError}</span>
                    </Col>

                </Row>

                {
                    props.auth.isAlsoSeller ?
                        <>
                            <Row className={'d-flex justify-content-center my-3'}>

                                <Col sm={10}>
                                    <Form className="mycol">
                                        <Form.Label>About you</Form.Label>
                                        <Form.Group controlId="exampleForm.ControlTextarea1">
                                            <Form.Control
                                                as="textarea"
                                                rows="3"
                                                onChange={(e) => {
                                                    setAbout(e.target.value.replace(/ {2,}/g, ' '))
                                                    setErrors({})
                                                }}
                                                value={about}
                                                maxLength={800}
                                                style={errors.aboutError ? { border: '1px solid red', boxShadow: '0 0 4px red' } : null}
                                                placeholder="Share a bit about your experience"
                                            />
                                            <span className={'text-danger'}>{errors.aboutError}</span>
                                        </Form.Group>
                                    </Form>
                                </Col>

                            </Row>
                            {
                                languageList.map((value, index) => {
                                    return (
                                        <Row key={index} className={'d-flex justify-content-center my-3'}>

                                            <Col className="" sm={4}>
                                                <Form>
                                                    <Form.Group controlId="formBasicLanguage">
                                                        {index === 0 && <label>Language</label>}
                                                        <Form.Control onChange={(e) => handleLanguageChange(e, index)}
                                                            type="text"
                                                            placeholder="Language"
                                                            style={errors.languageListError === index ? { border: '1px solid red', boxShadow: '0 0 4px red' } : null}
                                                            name={'languageName'}
                                                            value={value.languageName}
                                                        />
                                                    </Form.Group>
                                                </Form>
                                            </Col>
                                            <Col className="" sm={4}>
                                                <Form>
                                                    <Form.Group controlId="formBasicProficiency">
                                                        {index === 0 && <label>Proficiency</label>}
                                                        <Form.Control
                                                            as="select"
                                                            onChange={(e) => handleLanguageChange(e, index)}
                                                            name={'proficiency'}
                                                            style={errors.languageListError === index ? { border: '1px solid red', boxShadow: '0 0 4px red' } : null}
                                                        >
                                                            <option value={''} selected disabled>--select--</option>
                                                            <option selected={value.proficiency === 'Beginner' ? 'selected' : null} value={'Beginner'}>Beginner</option>
                                                            <option selected={value.proficiency === 'Intermediate' ? 'selected' : null} value={'Intermediate'}>Intermediate</option>
                                                            <option selected={value.proficiency === 'Expert' ? 'selected' : null} value={'Expert'}>Expert</option>
                                                        </Form.Control>
                                                    </Form.Group>
                                                </Form>
                                            </Col>
                                            <Col className="" sm={2} xs={2}>
                                                {index === 0 && <label>Actions</label>}
                                                <div className="d-flex align-items-center">
                                                    {
                                                        (languageList.length !== 1) && <input type={'button'} className={'mr-1'} value={'REMOVE'} onClick={() => handleRemoveLanguage(index)} style={{ cursor: 'pointer' }} />
                                                    }
                                                    {
                                                        (languageList.length - 1 === index) && <input type={'button'} value={'ADD'} onClick={() => handleAddLanguage()} className={'mr-2'} style={{ cursor: 'pointer' }} />
                                                    }
                                                </div>
                                            </Col>
                                        </Row>
                                    )
                                })
                            }
                            {
                                errors.languageListError > -1 && <Row style={{ marginTop: '-1em' }} className={'d-flex justify-content-left'}>

                                    <Col sm={4} className={'d-flex align-self-center'}><span className="text-danger">Language and Proficiency is required</span>
                                    </Col>
                                </Row>
                            }

                            {
                                skillList.map((value, index) => {
                                    return (
                                        <Row className="mycol d-flex justify-content-center">
                                            <Col className="mycol " sm={5} xs={12}>
                                                {index === 0 && <label>Skill*</label>}
                                                <Form>
                                                    <Form.Group controlId="formBasicEmail">
                                                        <Form.Control
                                                            type="text"
                                                            value={value.name}
                                                            onChange={e => handleSkillChange(e, index)}
                                                            id={"addSkills"}
                                                            placeholder="Add skills"
                                                            name={'name'}
                                                            style={errors.skillsError === index ? { border: '1px solid red', boxShadow: '0 0 4px red' } : null}
                                                            className={"input-lg"} />
                                                    </Form.Group>
                                                </Form>
                                            </Col>
                                            <Col className="mycol " sm={4} xs={12}>
                                                {index === 0 && <label>Proficiency*</label>}
                                                <Form>
                                                    <Form.Group controlId="exampleForm.SelectCustom">
                                                        <Form.Control
                                                            id={"proficiency"}
                                                            as="select"
                                                            custom
                                                            onChange={e => handleSkillChange(e, index)}
                                                            name={'proficiency'}
                                                            style={errors.skillsError === index ? { border: '1px solid red', boxShadow: '0 0 4px red' } : null}
                                                        >
                                                            <option value={''} selected disabled>--select--</option>
                                                            <option selected={value.proficiency === 'Beginner' ? 'selected' : null} value={'Beginner'}>Beginner</option>
                                                            <option selected={value.proficiency === 'Intermediate' ? 'selected' : null} value={'Intermediate'}>Intermediate</option>
                                                            <option selected={value.proficiency === 'Expert' ? 'selected' : null} value={'Expert'}>Expert</option>
                                                        </Form.Control>
                                                    </Form.Group>
                                                </Form>
                                            </Col>
                                            <Col className="d-flex align-items-center" sm={1} xs={2} xl={1}>
                                                <div className="d-flex align-items-center">
                                                    {
                                                        (skillList.length !== 1) && <input type={'button'} value={'REMOVE'} onClick={e => handleRemoveSkill(index)} style={{ cursor: 'pointer' }} />
                                                    }
                                                    {
                                                        (skillList.length - 1 === index) && <input type={'button'} value={'ADD'} onClick={e => handleAddSkill()} className={'mr-2'} style={{ cursor: 'pointer' }} />
                                                    }
                                                </div>
                                            </Col>
                                        </Row>
                                    )
                                })
                            }

                            <Row className="mycol d-flex justify-content-center">
                                <Col className="mycol " sm={10}>
                                    <label for={"addSkills"}>Areas of Interest*</label>
                                    <Form>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Control
                                                type="textarea"
                                                id={"interests"}
                                                onChange={e => {
                                                    setAreasOfInterests(e.target.value)
                                                    setErrors({
                                                        areasOfInterestsError: ''
                                                    })
                                                }}
                                                value={areasOfInterests}
                                                placeholder="Areas of Interest"
                                                style={errors.areasOfInterestsError ? { border: '1px solid red', boxShadow: '0 0 4px red' } : null}
                                                className={"input-lg"} />
                                            <span className={'text-danger'}>{errors.areasOfInterestsError}</span>
                                        </Form.Group>
                                    </Form>
                                </Col>
                            </Row>

                            <Row className="mycol d-flex justify-content-center">
                                <Col className="mycol " sm={10}>
                                    <label>Education</label>
                                    <Table bordered style={{ tableLayout: 'fixed' }}>
                                        <thead>
                                            <tr>
                                                <th style={{ width: '33%' }}>Degree</th>
                                                <th style={{ width: '21%' }}>Year of passing</th>
                                                <th style={{ width: '33%' }}>Board/ University</th>
                                                <th style={{ width: '10%' }}>Action</th>
                                            </tr>
                                        </thead>
                                    </Table>
                                    <Row>
                                        {
                                            educationList.map((value, index) => {
                                                return (
                                                    <React.Fragment>
                                                        <Col xs={4} lg={4}><input placeholder={'Degree'}
                                                            type={'text'}
                                                            className={'form-control mb-2'}
                                                            onChange={e => handleEducationChange(e, index)}
                                                            name={'name'}
                                                            value={value.name}
                                                            style={errors.educationError === index ? { border: '1px solid red', boxShadow: '0 0 4px red' } : null} /></Col>

                                                        <Col xs={3} lg={3}>
                                                            <select
                                                                className={'form-control mb-2'}
                                                                onChange={e => handleEducationChange(e, index)}
                                                                style={errors.educationError === index ? { border: '1px solid red', boxShadow: '0 0 4px red' } : null}
                                                                name={'yearOfPassing'}>
                                                                <option value={''}>--select year--</option>
                                                                {
                                                                    _.times(35, (i) => {
                                                                        return (
                                                                            <option value={i + ((dateElem.getFullYear() + 1) - 35)} selected={(i + ((dateElem.getFullYear() + 1) - 35)) === Number(value.yearOfPassing)}>{i + ((dateElem.getFullYear() + 1) - 35)}</option>
                                                                        )
                                                                    })
                                                                }
                                                            </select>
                                                        </Col>

                                                        <Col xs={4} lg={4}><input type={'text'}
                                                            placeholder={'Board or University'}
                                                            className={'form-control'}
                                                            onChange={e => handleEducationChange(e, index)}
                                                            name={'university'}
                                                            value={value.university} style={errors.educationError === index ? { border: '1px solid red', boxShadow: '0 0 4px red' } : null} /></Col>

                                                        <Col xs={1} lg={1}>
                                                            {
                                                                (educationList.length !== 1) && <input type={'button'} value={'REMOVE'} onClick={e => handleRemoveEducation(index)} style={{ cursor: 'pointer' }} />
                                                            }
                                                            {
                                                                (educationList.length - 1 === index) && <input type={'button'} value={'ADD'} onClick={e => handleAddEducation()} className={'mr-2'} style={{ cursor: 'pointer' }} />
                                                            }
                                                        </Col>
                                                    </React.Fragment>
                                                )
                                            })
                                        }
                                    </Row>
                                </Col>
                            </Row>

                            <Row className="mycol d-flex justify-content-center">
                                {
                                    certificationsList.map((value, index) => {
                                        return (
                                            <React.Fragment>
                                                <Col className="mycol " sm={5} xs={12}>
                                                    {index === 0 && <label>Certifications*</label>}
                                                    <Form>
                                                        <Form.Group controlId="formBasicEmail">
                                                            <Form.Control
                                                                type="text"
                                                                name={'name'}
                                                                onChange={e => handleCertificationsChange(e, index)}
                                                                value={value.name}
                                                                style={errors.certificationsError === index ? { border: '1px solid red', boxShadow: '0 0 4px red' } : null}
                                                                placeholder="Certificate Name" />
                                                        </Form.Group>
                                                    </Form>
                                                </Col>
                                                <Col className="mycol " sm={4} xs={12}>
                                                    {index === 0 && <label>Certified by*</label>}
                                                    <Form>
                                                        <Form.Group controlId="formBasicEmail">
                                                            <Form.Control
                                                                type="text"
                                                                name={'certificateBy'}
                                                                onChange={e => handleCertificationsChange(e, index)}
                                                                value={value.certificateBy}
                                                                style={errors.certificationsError === index ? { border: '1px solid red', boxShadow: '0 0 4px red' } : null}
                                                                placeholder="Certified by" />
                                                        </Form.Group>
                                                    </Form>
                                                </Col>
                                                <Col className="d-flex align-items-center" sm={2} xs={2} xl={1}>
                                                    {
                                                        (certificationsList.length !== 1) && <input className={'mr-1'} type={'button'} value={'REMOVE'} onClick={e => handleRemoveCertifications(index)} style={{ cursor: 'pointer' }} />
                                                    }
                                                    {
                                                        (certificationsList.length - 1 === index) && <input type={'button'} value={'ADD'} onClick={e => handleAddCertifications()} className={'mr-2'} style={{ cursor: 'pointer' }} />
                                                    }
                                                </Col>
                                            </React.Fragment>
                                        )
                                    })
                                }
                            </Row>
                            <Row className="mycol d-flex justify-content-center">
                                <Col className="mycol" xs={12} sm={10} xl={10}>
                                    <Row className="mycol align-items-center">
                                        {
                                            onorCertificationsList.map((value, index) => {
                                                return (
                                                    <React.Fragment>
                                                        <Col className="mycol" xs={10} sm={10} xl={10}>
                                                            {index === 0 && <label>Certifications by <img src={onorLogo} alt={"Add More"} style={{ height: '20px', width: '42px' }} /></label>}
                                                            <Form>
                                                                <Form.Group controlId="formBasicEmail">
                                                                    <Form.Control
                                                                        type="text"
                                                                        name={'name'}
                                                                        onChange={e => handleOnorCertificationsChange(e, index)}
                                                                        value={value.name}
                                                                        style={errors.onorCertificationsError === index ? { border: '1px solid red', boxShadow: '0 0 4px red' } : null}
                                                                        placeholder="Certificate Name" />
                                                                </Form.Group>
                                                            </Form>
                                                        </Col>
                                                        <Col className="align-items-center mt-2" sm={2} xs={2} xl={2}>
                                                            {
                                                                (onorCertificationsList.length !== 1) && <input type={'button'} value={'REMOVE'} onClick={e => handleRemoveOnorCertifications(index)} style={{ cursor: 'pointer' }} />
                                                            }
                                                            {
                                                                (onorCertificationsList.length - 1 === index) && <input type={'button'} value={'ADD'} onClick={e => handleAddOnorCertifications()} className={'mr-2'} style={{ cursor: 'pointer' }} />
                                                            }
                                                        </Col>
                                                    </React.Fragment>
                                                )
                                            })
                                        }
                                    </Row>
                                </Col>
                            </Row>
                            <Row className="mycol d-flex justify-content-center">
                                <Col className="mycol" xs={12} sm={10} xl={10}>
                                    <Form>
                                        <label>Personal Website</label>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Control
                                                type="text"
                                                onChange={e => {
                                                    setWebsite(e.target.value)
                                                    setErrors({
                                                        websiteError: ''
                                                    })
                                                }}
                                                value={website}
                                                style={errors.websiteError ? { border: '1px solid red', boxShadow: '0 0 4px red' } : null}
                                                placeholder="Your website" />
                                            <span className={'text-danger'}>{errors.websiteError}</span>
                                        </Form.Group>
                                    </Form>
                                </Col>
                            </Row>
                        </> : null
                }

                <Row className={'d-flex justify-content-center my-4'}>
                    <Col sm={10} className={'align-self-center'}>
                        <Button onClick={() => updateProfile()} variant="" className="onor_btn float-right">Update Profile</Button>
                    </Col>
                </Row>
            </Container>
        </React.Fragment >
    )
}
const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        dialog: state.dialog
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actionDialogOpen: (payload) => dispatch(action_dialog_open(payload)),
        actionStartProgress: (payload) => dispatch(action_progress_start(payload)),
        progressStop: () => dispatch(action_progress_stop()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BuyerEditProfilePage)