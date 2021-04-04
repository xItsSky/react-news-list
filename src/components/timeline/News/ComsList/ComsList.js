import React from 'react';
import Com from "./Com/Com";
import uniqid from 'uniqid'

function ComsList(props) {
    const { coms } = props;

    if(!coms.length) return null;

    return (
        <div className="coms_list">
            {coms.map((com) => <Com key={uniqid()} com={com} /> )}
        </div>
    );
}

export default ComsList;