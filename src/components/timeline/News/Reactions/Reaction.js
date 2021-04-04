import React from 'react';
import {emojis} from "../../../../resources/News";
import classNames from "classnames";
import uniqid from 'uniqid'

class Reaction extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: null
        };
    }

    selectReaction(type) {
        this.setState({ type });
    }

    renderReaction([type, compteur]) {
        const isSelectedReaction = (this.state.type === type);

        if(isSelectedReaction) {
            compteur++;
        }

        return (
          <div key={uniqid()} className={classNames(
                  'Reactions__reaction',
                {'Reactions__reaction--selected' : isSelectedReaction }
              )} onClick={(e) => this.selectReaction(type)}>
              {emojis[type]} { compteur }
          </div>
        );
    }

    render() {
        const { reactions } = this.props;
        return (
            <div className="Reactions">
                { Object.entries(reactions).map((reaction) => this.renderReaction(reaction)) }
            </div>
        );
    }
}

export default Reaction;