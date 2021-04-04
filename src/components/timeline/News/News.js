import React from 'react';
import MessageHeader from "./MessageHeader/MessageHeader";
import Message from "./Message/Message";
import Reaction from "./Reactions/Reaction";
import ComsList from "./ComsList/ComsList";

class News extends React.Component {
    render() {
        const { author, date, message, reactions, coms } = this.props.myNews;
        return (
            <div className="news">
                <MessageHeader author={author} date={date} />
                <Message message={message}/>
                <Reaction reactions={reactions}/>
                <ComsList coms = {coms} />
            </div>
        );
    }
}

export default News;