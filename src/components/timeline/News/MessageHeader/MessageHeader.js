import React from 'react';

function MessageHeader(props) {
    const {author, date } = props;
    return (
        <div className="message_header">
            <div className="author">
                <img src={author.avatar} alt={'Avatar de ${author.name}'} className="avatar" />
                {author.name}
            </div>
            <div className="date">
                {  new Date(date).toLocaleString() }
            </div>
        </div>
    );
}

export default MessageHeader;