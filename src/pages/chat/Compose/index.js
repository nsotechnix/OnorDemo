import React from 'react'
import './Compose.css'
import { AttachFileOutlined } from '@material-ui/icons'
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import { Col, Row } from 'react-bootstrap';
import _, { isEmpty, isUndefined } from 'lodash'
import { connect } from 'react-redux'
import CircularProgress from '@material-ui/core/CircularProgress'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}))

const Compose = (props) => {
  const classes = useStyles()
  const onAttachmentButtonClick = (e) => {
    e.stopPropagation();
    e.preventDefault();
    props.attachmentInput.current.click();
  }

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => resolve(reader.result)
      reader.onerror = (error) => reject(error)
    })

  const fetchBase64Image = async (file) => {
    const f = await toBase64(file)
    props.setViewAttachment(f)
  };

  return (
    <div className="compose d-flex justify-content-around align-items-end">
      <Row>
        <Col xs={1} className={'d-flex align-items-center'}>
          <input
            type="file"
            accept="image/*"
            className="d-none"
            ref={props.attachmentInput}
            onChange={(e) => {
              props.setAttachment(e.target.files[0]);
              fetchBase64Image(e.target.files[0]);
              props.setOpenImageDialog(true);
            }}
          />
          <AttachFileOutlined
            onClick={onAttachmentButtonClick}
            className={'attachment'} />
        </Col>
        <Col xs={8}>
          <input
            type="text"
            className="compose-input"
            placeholder={props.isSendingMessage ? 'sending...' : 'Type Message'}
            value={props.isSendingMessage ? '' : props.chatBody}
            onChange={(e) => props.setChatBody(e.target.value)}
            autoComplete={"off"}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                if (!isEmpty(props.chatBody) || !isUndefined(props.attachment)) {
                  if (props.auth.isAuthorized) {
                    const { gig_id, customer_id, owner_id } = props.currChatData;
                    if (props.auth.isAlsoSeller) {
                      props.handleSendChatMessage(customer_id, gig_id, props.chatBody);
                    } else {
                      props.handleSendChatMessage(owner_id, gig_id, props.chatBody);
                    }
                  }
                }
              }
            }}
            ref={props.chatTextField}
          />
        </Col>
        <Col xs={1}>
          <button
            className={'btn btn-primary btn-circle'}
            onClick={() => {
              if (!isEmpty(props.chatBody) || !isUndefined(props.attachment)) {
                if (props.auth.isAuthorized) {
                  const { gig_id, customer_id, owner_id } = props.currChatData;
                  if (props.auth.isAlsoSeller) {
                    props.handleSendChatMessage(customer_id, gig_id, props.chatBody);
                  } else {
                    props.handleSendChatMessage(owner_id, gig_id, props.chatBody);
                  }
                }
              }
            }}>{props.isSendingMessage ? <CircularProgress size={20} color={'inherit'} /> : <SendRoundedIcon />}</button>
        </Col>
      </Row>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  }
}

export default connect(mapStateToProps)(Compose)