import React from "react";
import News from "./News/News";

class TimeLine extends React.Component {
    render() {
        const { news } = this.props;
        console.log("On a en haut: " + news);
        return (
            <div className="timeline">
                { news.map((myNews) => <News key={myNews.id} myNews={myNews}/>) }
            </div>
        );
    }
}

export default TimeLine;