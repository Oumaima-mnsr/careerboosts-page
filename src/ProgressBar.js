import React from 'react';
import './ProgressBar.css';

const ProgressBar = () => {
    return (
        <div className="progress-bar">
            <div className="progress-step active">
                <div className="outer-circle">
                    <div className="inner-circle"></div>
                </div>
                <div className="polygon"></div>
                <span className="label active">Position Details</span>
            </div>
            <div className="progress-line"></div>
            <div className="progress-step">
                <div className="point"></div>
                <div className="polygon"></div>
                <span className="label">Project Groups</span>
            </div>
            <div className="progress-line"></div>
            <div className="progress-step">
                <div className="triangle"></div>
                <div className="polygon"></div>
                <span className="label">Confirmation</span>
            </div>
        </div>
    );
};

export default ProgressBar;
