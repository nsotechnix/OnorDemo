import React, { useEffect } from 'react';
import shave from 'shave';

import './ConversationListItem.scss';

export default function ConversationListItem(props, { onClick }) {
  useEffect(() => {
    shave('.conversation-snippet', 20);
  })

  const { photo, name, text } = props.data;

  return (
    <div onClick={
      e => {
        props.data.isSeller ?
          props.data.refreshChat(props.data.data.gig_id, props.data.data.customer_id, props.data.data.owner_id)
          &&
          props.data.setCurrChatData(props.data.data)
          &&
          props.data.setChatList([])
          :
          props.data.setCurrChatData(props.data.data)
          &&
          props.data.setChatList([])
      }
    }>
      <div className={props.data.isActive ? 'large selected' : 'large' } onClick={onClick}>
        <div className="conversation-list-item">
          <img className="conversation-photo" src={photo} alt="conversation" />
          <div className="conversation-info">
            <h1 className="conversation-title">{name}</h1>
          </div>
          <span style={{ position: 'absolute', right: 20, fontSize: 12, color: props.data.statusColor }}>{props.data.status}</span>
        </div>
      </div>
      <div className={props.data.isActive ? 'small selected' : 'small' } onClick={onClick}>
        <div className="conversation-list-item-small">
          <img className="conversation-photo" src={photo} alt="conversation" />
          <div className="conversation-info">
            <h1 className="conversation-title">{name}</h1>
          </div>
          <span style={{ fontSize: 12, color: props.data.statusColor }}>{props.data.status}</span>
        </div>
      </div>
    </div >

  );
}