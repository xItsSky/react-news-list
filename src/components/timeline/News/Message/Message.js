import React from 'react'

function Message(props) {
    return (
      <div className="Message">
          {props.message}
      </div>
    );
}

export default Message;