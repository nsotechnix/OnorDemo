import React, { Fragment, useEffect, useState } from 'react'
import './SellerGigSummaryEdit.scss'
import { useLocation } from 'react-router-dom'
import { Col, Container, Row, Form, Button } from 'react-bootstrap'
import jwt from 'jsonwebtoken'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import BreadCrumbNav from '../../../components/BreadCrumbNav'
import Axios from 'axios'
import { MERCHANT_GIG_EDIT, API_FETCH_ALL_CATEGORIES, API_FETCH_SINGLE_GIG, EDIT_PACKAGE } from '../../../utils/API_ENDPOINTS'
import { action_append_post_a_gig_data, action_steps_of_post_a_gig } from '../../../redux/actions/postAGigActions'
import { isNumber, isUndefined } from 'lodash'
import {
    action_progress_start,
    action_progress_stop,
} from "../../../redux/actions/progressAction"
import Alert from '@material-ui/lab/Alert'
import _ from 'lodash'

const SellerGigSummaryEdit = (props) => {
    // props.actionStartProgress(true)
    const [imageChanged, setImageChanged] = useState(false)
    let [assignmentTitle, setAssignmentTitle] = useState("")
    let [tags, setTags] = useState("")
    let [communityId, setCommunityId] = useState("")
    let [description, setDescription] = useState("")
    let [categoryId, setCategoryId] = useState("")
    let [categories, setCategories] = useState([])
    let [doc, setDoc] = useState("")
    let [previousImage, setPreviousImage] = useState("")
    let [faq, setFaq] = useState("")
    let [packages, setPackages] = useState({})
    let [basicPrice, setbasicPrice] = useState(undefined)
    let [basicOnorPrice, setbasicOnorPrice] = useState(undefined)
    let [standardPrice, setstandardPrice] = useState(undefined)
    let [premiumPrice, setpremiumPrice] = useState(undefined)
    let [packageNames] = useState([
        'Basic',
        'Basic ONOR',
        'Standard',
        'Premium'
    ])
    let [packageNamesForPrice] = useState([
        'basicPrice',
        'basicOnorPrice',
        'standardPrice',
        'premiumPrice'
    ])

    const [errors, setErrors] = useState({
        'assignmentTitleError': '',
        'tagsError': '',
        'communityIdError': '',
        'descriptionError': '',
        'categoryIdError': '',
        'docError': '',
        'faqError': ''
    })

    const [product, setProduct] = useState({})

    const fetchGigData = async () => {
        try {
            const productDetails = await Axios.get(API_FETCH_SINGLE_GIG + props.match.params.productId)
            if (productDetails.data.gig.productId == props.match.params.productId) {
                setProduct(productDetails.data.gig)
                setAssignmentTitle(productDetails.data.gig.productName)
                setTags(productDetails.data.gig.tags)
                setDescription(productDetails.data.gig.productDescription)
                setCategoryId(productDetails.data.gig.category.categoryId)
                setFaq(productDetails.data.gig.faq)
                setPreviousImage(productDetails.data.gig.productIconLink)
                setDoc(new File([productDetails.data.gig.productIconLink], Date.now() + '.jpg'))
                let arr = productDetails.data.gig.onorPackages.sort(function (a, b) {
                    return Number(a.packageId) - Number(b.packageId)
                })
                setPackages(arr)
                productDetails.data.gig.onorPackages.map((data, index) => {
                    if (index === 0) {
                        setbasicPrice(data.price)
                    }
                    if (index === 1) {
                        setbasicOnorPrice(data.price)
                    }
                    if (index === 2) {
                        setstandardPrice(data.price)
                    }
                    if (index === 3) {
                        setpremiumPrice(data.price)
                    }
                })
            }
        } catch (e) {
            console.log(e)
        }
        props.progressStop()
    }

    useEffect(() => {
        if (!props.match.params.productId) {
            props.history.push('/seller/gigs/')
        }
        fetchAllCategoriesRemote()
        fetchGigData()
    }, [])

    if (props.auth.isAuthorized && props.auth.isAlsoSeller) {
        const { userId, merchantId, userEmail } = jwt.decode(localStorage.getItem("jwtToken"))
    }

    const fetchAllCategoriesRemote = async () => {
        props.actionStartProgress()
        try {
            const result = await Axios.get(API_FETCH_ALL_CATEGORIES)
            setCategories(result.data.categories)
        } catch (e) {
            console.log(e)
            props.progressStop()
        }
    }

    const location = useLocation()
    let isMobile = ''
    if (location.pathname.match('/mobile/')) {
        isMobile = 'mobile/'
    } else {
        isMobile = ''
    }

    const validator = () => {
        let assignmentTitleError = ''
        let tagsError = ''
        let communityIdError = ''
        let descriptionError = ''
        let categoryIdError = ''
        let docError = ''
        let faqError = ''
        if (assignmentTitle == '') {
            assignmentTitleError = 'Assignment title is required'
        }
        if (categoryId == '') {
            categoryIdError = 'Please choose a category for your gig'
        }
        if (tags == '') {
            tagsError = 'Please enter some tags related to your gig'
        }
        if (description == '' || description.length < 150 || description.length > 800) {
            descriptionError = 'Please enter a description between 150 to 800 characters'
        }
        if (assignmentTitleError) {
            setErrors({
                assignmentTitleError
            })
            return false
        } else if (categoryIdError) {
            setErrors({
                categoryIdError
            })
            return false
        } else if (tagsError) {
            setErrors({
                tagsError
            })
            return false
        } else if (descriptionError) {
            setErrors({
                descriptionError
            })
            return false
        } else if (faqError) {
            setErrors({
                faqError
            })
            return false
        } else {
            return true
        }
    }

    const [changes, setChanges] = useState(false)

    const updatePrice = async (packageId, varName) => {
        if (eval(varName) !== 0 || eval(varName) !== '') {
            props.actionStartProgress(true)
            try {
                let packageData = {
                    'package_price': eval(varName)
                }
                const result = await Axios.post(EDIT_PACKAGE + packageId, packageData)
            } catch (e) {
                alert(`Failed to update ${e}`)
            }
            props.progressStop()
        }
    }
    const handleSubmit = async () => {
        if (validator()) {
            if (props.auth.isAuthorized && props.auth.isAlsoSeller) {
                const { userId } = jwt.decode(localStorage.getItem("jwtToken"))
                const { merchantId } = jwt.decode(localStorage.getItem("sellerJwtToken"))
                // let updateData = {}
                let trackChanges = 0
                const updateData = new FormData()
                if (assignmentTitle !== product.productName) {
                    ++trackChanges
                    updateData.append('assignment_title', assignmentTitle)
                }
                if (tags !== product.tags) {
                    ++trackChanges
                    updateData.append('tags', tags)
                }
                if (categoryId !== product.category.categoryId) {
                    ++trackChanges
                    updateData.append('category_id', categoryId)
                }
                if (description !== product.productDescription) {
                    ++trackChanges
                    updateData.append('description', description)
                }
                if (faq !== product.faq) {
                    ++trackChanges
                    updateData.append('faq', faq)
                }
                if (imageChanged) {
                    ++trackChanges
                    updateData.append('image', doc)
                }
                const config = {
                    headers: {
                        "access-control-allow-origin": "*",
                        'Content-Type': 'multipart/form-data'
                    }
                }
                if (basicPrice !== undefined && basicPrice !== product.onorPackages[0].price && !_.isUndefined(product.onorPackages[0].price)) {
                    ++trackChanges
                    props.actionStartProgress(true)
                    try {
                        const basicData = new FormData()
                        basicData.append('package_price', basicPrice)
                        const basicResult = await Axios.post(EDIT_PACKAGE + product.onorPackages[0].packageId, basicData, config)
                    } catch (e) {
                        alert(`Failed to update ${e}`)
                    }
                }
                if (basicOnorPrice !== undefined && basicOnorPrice !== product.onorPackages[1].price && !_.isUndefined(product.onorPackages[1].price)) {
                    ++trackChanges
                    props.actionStartProgress(true)
                    try {
                        const basicOnorData = new FormData()
                        basicOnorData.append('package_price', basicOnorPrice)
                        const basicOnorResult = await Axios.post(EDIT_PACKAGE + product.onorPackages[1].packageId, basicOnorData, config)
                    } catch (e) {
                        alert(`Failed to update ${e}`)
                    }
                }
                if (standardPrice !== undefined && standardPrice !== product.onorPackages[2].price && !_.isUndefined(product.onorPackages[2].price)) {
                    ++trackChanges
                    props.actionStartProgress(true)
                    try {
                        const standardData = new FormData()
                        standardData.append('package_price', standardPrice)
                        const standardResult = await Axios.post(EDIT_PACKAGE + product.onorPackages[2].packageId, standardData, config)
                    } catch (e) {
                        alert(`Failed to update ${e}`)
                    }
                }
                if (premiumPrice !== undefined && premiumPrice !== product.onorPackages[3].price && !_.isUndefined(product.onorPackages[3].price)) {
                    ++trackChanges
                    props.actionStartProgress(true)
                    try {
                        const premiumData = new FormData()
                        premiumData.append('package_price', premiumPrice)
                        const premiumResult = await Axios.post(EDIT_PACKAGE + product.onorPackages[3].packageId, premiumData, config)
                    } catch (e) {
                        alert(`Failed to update ${e}`)
                    }
                }
                setChanges(trackChanges)
                if (trackChanges !== 0) {
                    props.actionStartProgress(true)
                    try {
                        let res = await Axios.post(MERCHANT_GIG_EDIT + props.match.params.productId, updateData, config)
                        console.log(res)
                    } catch (e) {
                        console.log({ ...e })
                        alert(`Failed to update ${e}`)
                    }
                    props.progressStop()
                    props.history.push("/seller/gigs/")
                }
            }
        }
    }

    const from_jsx = (
        <Fragment>
            <Row className="mycol">
                <Col className="mycol" sm={6}>
                    <label>Assignment title</label>
                    <Form.Group controlId="exampleForm.ControlInput">
                        <Form.Control
                            style={errors.assignmentTitleError ? { border: '1px solid red', boxShadow: '0 0 4px red' } : null}
                            onChange={e => {
                                setAssignmentTitle(e.target.value)
                                setErrors({})
                            }}
                            value={assignmentTitle}
                            as="input" />
                        <span className={'text-danger'}>{errors.assignmentTitleError}</span>
                    </Form.Group>
                </Col>
                <Col className="mycol" sm={6}>
                    <Form>
                        <label>Select a Category</label>
                        <Form.Group controlId="exampleForm.SelectCustom">
                            <Form.Control
                                style={errors.categoryIdError ? { border: '1px solid red', boxShadow: '0 0 4px red' } : null}
                                onChange={e => {
                                    setCategoryId(e.target.value)
                                    setErrors({})
                                }}
                                as="select"
                                custom>
                                <option selected disabled>--select category--</option>
                                {
                                    categories.map((category) => (
                                        <option selected={categoryId == category.categoryId} value={category.categoryId} key={category.categoryId}>{category.name}</option>
                                    ))
                                }
                            </Form.Control>
                            <span className={'text-danger'}>{errors.categoryIdError}</span>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
            <Row className="mycol" sm={12}>
                <Col className="mycol">
                    <label>Search Tag</label>
                    <Form className="mycol">
                        <Form.Group controlId="exampleForm.ControlInput">
                            <Form.Control
                                style={errors.tagsError ? { border: '1px solid red', boxShadow: '0 0 4px red' } : null}
                                onChange={e => {
                                    setTags(e.target.value)
                                    setErrors({})
                                }}
                                as="input"
                                value={tags} />
                            <span className={'text-danger'}>{errors.tagsError}</span>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
            <Row className="mycol" sm={12}>
                <Col className="mycol">
                    <label>Description</label>
                    <Form className="mycol">
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Control
                                style={errors.descriptionError ? { border: '1px solid red', boxShadow: '0 0 4px red' } : null}
                                onChange={e => {
                                    setDescription(e.target.value)
                                    setErrors({})
                                }}
                                value={description}
                                as="textarea" rows="2" maxLength={800} />
                            <span className={'text-danger'}>{errors.descriptionError}</span>
                        </Form.Group>
                    </Form>
                    <label className={'float-right text-muted'}>{description.length}/800 Max</label>
                </Col>
            </Row>
            <Row className="mycol">
                <Col className="mycol" xs={12}>
                    <label>Upload Details</label>
                    <Form className="mycol">
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <input
                                style={errors.docError ? { border: '1px solid red', boxShadow: '0 0 4px red' } : null}
                                onChange={e => {
                                    setDoc(e.target.files[0])
                                    setErrors({})
                                    setImageChanged(true)
                                }}
                                type="file"
                                accept={'image/*'} />
                            <span className={'text-danger'}>{errors.docError}</span>
                        </Form.Group>
                        {previousImage && <a href={doc} target={'_BLANK'}><img src={previousImage} alt={'gig image'} style={{ height: '100px', width: '130px' }} /></a>}
                    </Form>
                    <span className={'text-muted'}>Maximum file size should be: 150KB of 400x750 pixels</span>
                </Col>
                <Col className="mycol" sm={12}>
                    <label>FAQ</label>
                    <Row className="mycol">
                        <Col className="" sm={9} xs={9}>
                            <Form>
                                <Form.Group controlId="faq">
                                    <Form.Control
                                        as="textarea"
                                        rows={2}
                                        value={faq}
                                        maxLength={3000}
                                        style={errors.faqError ? { border: '1px solid red', boxShadow: '0 0 4px red' } : null}
                                        onChange={(e) => {
                                            setFaq(e.target.value)
                                            setErrors({})
                                        }}
                                        placeholder="Frequently asked questions" />
                                </Form.Group>
                                <span className={'text-danger'}>{errors.faqError}</span>
                            </Form>
                        </Col>
                        {/* <Col className="d-flex justify-content-between" style={{ marginTop: '-1em' }} sm={2} xs={2}>
                            <Button variant="secondery"><img src={addCircle} style={{ width: '25px' }} className={'d-block'} alt={"Add More"}></img></Button>
                        </Col> */}
                    </Row>
                </Col>

                {
                    !_.isEmpty(packages) && packages.map((packagesDetails, packageIndex) => {
                        {
                            console.log(packagesDetails)
                        }
                        return (
                            <Col className="mycol" sm={6}>
                                <label>{packageNames[packageIndex]} Package Price</label>
                                <Row className="mycol">
                                    <Col className="" sm={9} xs={9}>
                                        <Form>
                                            <Form.Group controlId={packageNames[packageIndex]}>
                                                <Form.Control
                                                    as="input"
                                                    value={eval(`${packageNamesForPrice[packageIndex]}`)}
                                                    rows={2}
                                                    onChange={(e) => {
                                                        eval(`set${packageNamesForPrice[packageIndex]}`)(e.target.value)
                                                        setErrors({})
                                                    }}
                                                    placeholder={`${packageNames[packageIndex]} Package Price`} />
                                            </Form.Group>
                                            {/* <span className={'text-danger'}>{errors.faqError}</span> */}
                                            {/* <button className={'onor_secondery_btn'} onClick={(e) => {
                                                updatePrice(packagesDetails.packageId, eval(`${packageNamesForPrice[packageIndex]}`))
                                            }}>Update Price</button> */}
                                        </Form>
                                    </Col>
                                </Row>
                            </Col>
                        )
                    })
                }
            </Row>
            {
                changes === 0 && <Alert className={'my-2'} variant="outlined" severity="info">You've not made any changes to save!</Alert>
            }
            <Row className="mt-lg-5">
                <Col className={"pull-left col-6 d-flex justify-content-between"}>
                    <Button onClick={
                        e => {
                            // localStorage.removeItem('gig_assignment_data')
                            // localStorage.removeItem('gig_package_onor_data_basic')
                            // localStorage.removeItem('gig_package_onor_data_basic_onor')
                            // localStorage.removeItem('gig_package_onor_data_standard')
                            // localStorage.removeItem('gig_package_onor_data_premium')
                            props.history.push('/seller/gigs/')
                        }
                    } as={Link} to={'/'} className={'onor_secondery_btn'}>Cancel</Button>
                </Col>
                <Col></Col>
                <Col className="mycol d-flex justify-content-end">
                    <Button
                        className="onor_btn"
                        onClick={
                            () => handleSubmit()
                        }
                        variant="">
                        Update
                        </Button>
                </Col>
            </Row>
        </Fragment>
    )

    return (
        <Fragment>
            <Container>
                <Row className="">
                    <Col>
                        <BreadCrumbNav
                            account={false}
                            summary={false}
                            editGig={true}
                        />
                    </Col>
                </Row>
                <Row className="mycol mt-2 mb-xl-2">
                    <Col sm={6}>
                        <h4 className={"header_h4"}>Edit Session: {product.productName}</h4>
                    </Col>
                </Row>
                <Row className="mt-xl-3"></Row>
                {from_jsx}
            </Container>

        </Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        postAgig: state.postAgig,
        auth: state.auth
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        actionStartProgress: (payload) => dispatch(action_progress_start(payload)),
        progressStop: () => dispatch(action_progress_stop()),
        appendPostAGigData: (payload) => dispatch(action_append_post_a_gig_data(payload)),
        actionAddSteps: (payload) => dispatch(action_steps_of_post_a_gig(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SellerGigSummaryEdit)
