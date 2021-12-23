import React from 'react'
import PropTypes from "prop-types";
import certificateImage from './cert.jpg'
import './InnerCard.scss'

import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../common/stylesheets/common.css";
import "../../common/stylesheets/overrule.scss";

InnerCard.propTypes = {
    /**
    Use to define user status of completion
    */
    asStatus: PropTypes.oneOf(["not-started", "in-progress", "completed", "certificate"]),
    /**
    Use to add an icon to the component
    */
    withIcon: PropTypes.shape({
        icon: PropTypes.string,
        // iconSize: PropTypes.string,
        certifificate : PropTypes.string,
    }),
    /**
    Button component must have the onClick function passed as props
    */
    onClick: PropTypes.func.isRequired,
}


InnerCard.defaultProps = {
    asStatus: 'not started',
    withIcon: null,
}

export default function InnerCard(props){
    {console.log(props)}
    return (
        <div className='qui'>
            <div className='qui-innerCard'>
            { props.asStatus === 'certificate' && <img src={`${certificateImage}`} alt="cert" /> }
            { props.asStatus === 'not started' && 
                <>
                    <h2>Not Started</h2>
                    <i class="far fa-circle"></i>
                </>
            }
            { props.asStatus === 'started' && 
                <>
                    <h2>Started</h2>
                    <i class="fas fa-adjust"></i>
                </>
            }
            { props.asStatus === 'completed' && 
                <>
                    <h2>Completed</h2>
                    <i class="fas fa-check-circle"></i>
               </>
            }
            </div>
        </div>
    )
}

