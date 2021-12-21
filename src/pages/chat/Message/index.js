import React from 'react';
import moment from 'moment';
import './Message.scss';

export default function Message(props) {
  const {
    data,
    isMine,
    startsSequence,
    endsSequence,
    showTimestamp
  } = props;

  const getTimeAMPMFormat = (date) => {
    date = new Date(date)
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    return hours + ':' + minutes + ' ' + ampm;
  }

  const friendlyTimestamp = getTimeAMPMFormat(showTimestamp) //moment(showTimestamp).format('h:mm a');
  return (
    <div className={[
      'message',
      `${isMine ? 'mine' : ''}`,
      `${startsSequence ? 'start' : ''}`,
      `${endsSequence ? 'end' : ''}`
    ].join(' ')}>

      <div className="bubble-container">
        <div className="bubble" title={friendlyTimestamp}>
          <img src={data.photo} alt={friendlyTimestamp} className={`m${!isMine ? 'r' : 'l'}-2 message-conversation-photo d-flex float-${isMine ? 'right' : 'left'} align-items-start`} />
          {props.isThereAnyImage}
          <p className={'message pr-5'} style={{ textAlign: 'justify' }}>
            {data.message}
          </p>
          <div className="timestamp d-flex align-items-end pt-1">
            {friendlyTimestamp}
          </div>
        </div>
      </div>
    </div>
  );
}