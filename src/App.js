import logo from './logo.svg';
import React from "react";
import './App.css';
import TimeLine from "./components/timeline/TimeLine";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            news: [],
        };
    }

    componentWillMount() {
        fetch('http://192.168.1.30:27015/')
            .then((response) => response.json())
            .then((news) => {
                this.setState({ news: news });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        return (
            <div className="App">
                <TimeLine news={this.state.news} />
            </div>
        );
    }
}

export default App;
