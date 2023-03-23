import React, { useState } from "react";
import _ from "lodash";
import { Segment, Icon } from "semantic-ui-react";
import { resolveImage } from "../../common/javascripts/helpers";
import BurgerMenuItem from "../BurgerMenuItem/BurgerMenuItem.react"
import { slide as Menu } from "react-burger-menu";

export default function BurgerMenu(props) {
    const [menuOpen, setMenuOpen] = useState(false)

    const panelLinks = [
        {
            key: "welcome",
            name: "Welcome",
            icon: "handshake",
            show: true,
            description: "Welcome to your QuoDeck training platform...",
            color: "#bdbdbd",
        },
        {
            key: "advanced",
            name: "Setup",
            icon: "id card",
            show: true,
            description: "Brand and setup your platform...",
            color: "#bdbdbd",
        },
        {
            key: "files",
            name: "Platform Content",
            icon: "box",
            show: true,
            description:
                "Populate your platform with interactive content...",
            color: "#bdbdbd",
        },
        {
            key: "share",
            name: "User Management",
            icon: "users",
            show: true,
            description: "Add and manage the users of your platform...",
            color: "#bdbdbd",
        },
        {
            key: "analytics",
            name: "Analytics",
            icon: "chart area",
            show: true,
            description:
                "Analyze your platform and team performance...",
            color: "#bdbdbd",
        },
        {
            key: "guide",
            name: "Help Center",
            icon: "book",
            show: ["Inductor", "FreeInductor"].includes(props.license.license_type) ? true : false,
            description:
                "Get tips to make the best of your platform...",
            color: "#bdbdbd",
        },
        {
            key: "upgrade",
            name: "Account",
            icon: "user",
            show: ["Inductor", "FreeInductor"].includes(props.license.license_type) ? true : false,
            description:
                "Upgrade your license...",
            color: "#bdbdbd",
        },
    ];

    let isPortrait = window.innerHeight > window.innerWidth;
    let menuStyles = {
        bmBurgerButton: {
            position: "fixed",
            width: "20px",
            height: "20px",
            left: "30px",
            top: "27px",
        },
        bmMenuWrap: {
            height: "100vh",
        },
        bmBurgerBars: {
            background: "#fff",
        },
        bmCrossButton: {
            top: "10px",
            right: "10px",
            height: "42px",
            width: "42px",
            color: "#000000",
        },
        bmCross: {
            height: "24px",
            background: "#000000",
        },
        bmMenu: {
            background: "#ffffff",
            padding: "2.5em 0",
            fontSize: "1.5em",
            lineHeight: "1.5",
            overflow: "hidden",
        },
        bmMorphShape: {
            fill: "#373a47",
        },
        bmOverlay: {
            background: "rgba(0, 0, 0, 0.3)",
            position: "relative",
            zIndex: "99999",
        },
    };
    let headerItemStyle = {
        display: "flex",
        background: "#888888",
        paddingTop: "0",
        border: "1px solid #bdbdbd",
        color: "#000000",
        alignItems: "center"
    };
    let profilePicStyle = {
        display: "inline-block",
        width: "25%",
        height: "auto",
        overflow: "hidden",
    };
    let logoStyle = {
        zIndex: '99',
        position: 'fixed',
        left: '0',
        width: "7em",
        margin: '10px',
        marginLeft: '60px'
    }
    let profileStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        paddingLeft: "20px",
        width: "60%",
        height: "40%",
    };
    let footerItemStyle = {
        display: "block",
        bottom: "0",
        left: "0",
        width: "100%",
        background: "#888888",
        padding: "12px",
        border: "1px solid #bdbdbd",
        color: "#000000",
        cursor: "pointer",
        fontSize: "1em",
        textAlign: "center",
    };
    let mainContainerStyle = {
        background: "#666666",
        width: "100%",
        height: "50px",
        zIndex: "99",
        boxShadow: "0px 2px 10px #676767",
    }

    let footerItemTextStyle = { color: "#ffffff" }

    let image = props.auth.user ? props.auth.user.image : null;

    const handleOnOpen = () => {
        setMenuOpen(true)
    }

    const handleOnClose = () => {
        setMenuOpen(false)
    }

    return (
        <div style={mainContainerStyle}>
            <img src='assets/logo-inverted.png' style={logoStyle} />
            <Menu left isOpen={menuOpen} styles={menuStyles} onOpen={handleOnOpen} onClose={handleOnClose}>
                <div style={headerItemStyle}>
                    <img
                        src={
                            image === null || image === undefined
                                ? "assets/avatar.jpg"
                                : resolveImage(image.image)
                        }
                        style={profilePicStyle}
                    />
                    {props.auth.user && (
                        <div style={profileStyle}>
                            {props.auth.user.first_name}{" "}
                            {props.auth.user.last_name}
                            <div style={{ display: 'flex', alignItems: "center" }}>
                                <Segment compact size='mini' style={{ padding: '0.5em', margin: '0', fontSize: '0.6em' }}>
                                    {props.license.license_name + " Plan"}
                                </Segment>
                                <div style={{ width: '10px' }}></div>
                                <Segment textAlign='right' compact size="mini" style={{ padding: '0.5em', margin: '0', fontSize: '0.6em' }}>
                                    <Icon name="users" />{" "}
                                    {props.course === undefined ? "" : `${props.course.learnerCount} / `}
                                    {props.license.maxUsers}
                                </Segment>
                            </div>
                        </div>
                    )}
                </div>
                <div style={{
                    display: "block",
                    height: "100%",
                    width: "100%",
                    overflow: "scroll",
                }}>
                    {
                        _.map(panelLinks, (item, index) => {
                            return (
                                <BurgerMenuItem
                                    name={item.name}
                                    setActivePanel={props.setActivePanel}
                                    key={item.key}
                                    link={item.key}
                                    onClose={handleOnClose}
                                />
                            );
                        })
                    }
                </div>
                {isPortrait && (
                    <div style={{
                        position: "absolute",
                        bottom: "1em",
                        width: "100%",
                    }}>
                        <div style={footerItemStyle} className="profileSeg" onClick={()=>{props.onLogout()}}>
                            <div style={footerItemTextStyle}>Logout</div>
                        </div>
                    </div>
                )}
            </Menu>
        </div>
    )
}