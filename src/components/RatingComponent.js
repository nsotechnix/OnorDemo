import React from 'react'
import { connect } from 'react-redux'
import Rating from '@material-ui/lab/Rating'
import { action_rating_dialog_stop } from '../redux/actions/RatingAction'
import { makeStyles } from '@material-ui/core/styles'
import { DialogTitle, DialogContent, DialogActions, Divider, Typography, Button, Dialog, Box, TextField } from '@material-ui/core'
import Axios from 'axios'
import { API_POST_RATINGS } from '../utils/API_ENDPOINTS'

const useStyles = makeStyles({
    root: {
        width: 200,
        display: 'flex',
        alignItems: 'center',
    },
});

const labels = {
    0.5: 'Useless',
    1: 'Useless',
    1.5: 'Poor',
    2: 'Poor',
    2.5: 'Ok',
    3: 'Ok',
    3.5: 'Good',
    4: 'Good',
    4.5: 'Excellent',
    5: 'Excellent',
}

const RatingComponent = (props) => {
    const [valueSeller, setValueSeller] = React.useState(0)
    const [hoverSeller, setHoverSeller] = React.useState(-1)
    const [valueOnor, setValueOnor] = React.useState(0)
    const [hoverOnor, setHoverOnor] = React.useState(-1)
    const [review, setReview] = React.useState("")
    const [buttonValue, setButtonValue] = React.useState("Share")

    const classes = useStyles();
    const handleClose = () => {
        props.handleCloseRating()
    }

    const handlePostRatings = async () => {
        try {
            const { order_id } = props.rating.payload
            let data = {
                ratings: valueSeller,
                onor_ratings: valueOnor,
                reviews: review
            }
            setButtonValue("Please wait..")
            const result = await Axios.post(API_POST_RATINGS + order_id, data)
            if (result.status === 200) {
                setButtonValue("Success")
            } else {
                setButtonValue("Close")
            }
        } catch (e) {
            setButtonValue("Error!")
        }
    }

    const modal_jsx = (
        <React.Fragment>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={props.rating.isOpen}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Please share your experience
                </DialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom style={{ fontWeight: 'bolder' }}>Experience with seller</Typography>
                    <Rating
                        name="simple-controlled-one"
                        value={valueSeller}
                        precision={1}
                        onChange={(event, newValue) => {
                            setValueSeller(newValue)
                        }}
                        onChangeActive={(event, newHover) => {
                            setHoverSeller(newHover);
                        }}
                    />
                    {valueSeller !== null && <Box ml={2}>{labels[hoverSeller !== -1 ? hoverSeller : valueSeller]}</Box>}
                    <Divider />
                    <Typography gutterBottom style={{ fontWeight: 'bolder' }} className={'mt-2'}>Experience with ONOR</Typography>
                    <Rating
                        name="simple-controlled-two"
                        value={valueOnor}
                        precision={1}
                        onChange={(event, newValue) => {
                            setValueOnor(newValue)
                        }}
                        onChangeActive={(event, newHover) => {
                            setHoverOnor(newHover);
                        }}
                    />
                    {valueOnor !== null && <Box ml={2}>{labels[hoverOnor !== -1 ? hoverOnor : valueOnor]}</Box>}
                    <Divider />
                    <Typography gutterBottom style={{ fontWeight: 'bolder' }} mb={1} className={'mt-2'}>Please write your concern</Typography>
                    <TextField
                        value={review}
                        onChange={(e) => setReview(e.target.value)}
                        className={'mt-2'}
                        id="outlined-multiline-static"
                        label="Review"
                        multiline
                        rows={4}
                        defaultValue=""
                        className={'w-100'}
                        variant="outlined"
                    />
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={() => {
                        if (buttonValue === 'Success')
                            handleClose()
                        else
                            handlePostRatings()
                    }} color="primary">
                        {buttonValue}
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    )

    return (
        <React.Fragment>
            { modal_jsx}
        </React.Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        rating: state.rating
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleCloseRating: () => dispatch(action_rating_dialog_stop())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(RatingComponent)