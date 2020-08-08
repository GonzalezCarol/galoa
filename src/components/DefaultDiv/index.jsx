import React from 'react';

function DefaultDiv(props) {
    return (
        <div className="container-div">
            <div className="header-div">
                <span>{props.header}</span>
                    <div className="mainbody">

                    </div>
            </div>
        </div>
    )
}

export default DefaultDiv;