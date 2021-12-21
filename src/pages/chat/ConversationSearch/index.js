import React from 'react';
import { connect } from 'react-redux';
import './ConversationSearch.scss';

const ConversationSearch = (props, { onClick }) => {
  return (
    <div className="conversation-search sticky-top bg-white">
      <input
        type="search"
        className="conversation-search-input"
        placeholder="Search Messages"
        onChange={(e) => {
          props.setSearchText(e.target.value)
          if (props.auth.isAuthorized) {
            props.setFilterChatHead(
              props.chatHead.filter(
                (head) =>
                  String(head.owner_name)
                    .toLowerCase()
                    .indexOf(e.target.value.toLowerCase()) > -1
              )
            );
            if (props.auth.isAlsoSeller) {
              props.setFilterChatHead(
                props.chatHead.filter(
                  (head) =>
                    String(head.customer_name)
                      .toLowerCase()
                      .indexOf(e.target.value.toLowerCase()) > -1
                )
              );
            }
          }
        }}
      />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}
export default connect(mapStateToProps)(ConversationSearch)