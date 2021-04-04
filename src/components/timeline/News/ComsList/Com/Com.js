import React from 'react';
import MessageHeader from "../../MessageHeader/MessageHeader";
import Message from "../../Message/Message";

function Com(props) {
    const { author, date, message } = props.com;
    return (
        <div className="com">
            <MessageHeader author={author} date={date} />
            <Message message={message} />
        </div>
    );
}

export default Com;