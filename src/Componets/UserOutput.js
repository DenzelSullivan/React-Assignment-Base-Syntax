import React from 'react';

const userOutput = (props) => {
    return( 
        <div className="UserOutput">
            <p> Username: {props.username}</p>
            <p> This is the second paragraph tag</p>
        </div>
    )
}

export default userOutput;