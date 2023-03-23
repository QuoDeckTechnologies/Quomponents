import React from "react"
import "./QuickNavBar.scss"

export default function QuickNavBar(props) {
    let blockStyle = {
        backgroundImage: `url(${props.image})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    }

    return (
        <div className="qui-quick-navbar-container">
            <div className="qui-quick-navbar-button qui-quick-navbar-button-1" style={blockStyle} onClick={() => props.onImageClick('image')}></div>
            <div className="qui-quick-navbar-button qui-quick-navbar-button-2" onClick={() => props.onLeaderboardClick('leaderboard')}>
                <div>
                    <i className="fas fa-list-ol"></i>
                    <p className="quick-navbar-button-title">Leaderboards</p>
                </div>
            </div>
            <div className="qui-quick-navbar-button qui-quick-navbar-button-3" onClick={() => props.onCollectionClick('collection')}>
                <div>
                    <i className="fas fa-gift"></i>
                    <p className="quick-navbar-button-title">Collection</p>
                </div>
            </div>
        </div>
    )
}