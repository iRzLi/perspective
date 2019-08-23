import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'

const Buffer = (props) => {
    return (
        <div className="black-background">
            <div className="bbg-child">
                <div className="buffer"> <FontAwesomeIcon icon={faCircleNotch} /></div>
            </div>
        </div>
    )
}

export default Buffer;