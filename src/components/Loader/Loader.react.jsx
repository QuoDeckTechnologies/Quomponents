import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import PropTypes from "prop-types";

Loader.propTypes = {
    label: PropTypes.string.isRequired,
    color: PropTypes.string,
    icon: PropTypes.bool,
};

Loader.defaultProps = {
    label: "Loading",
    color: "primary",
    icon: false,
};

const styles = {
    btnContainer: {
        display: "flex",
        flexDirection: 'column',
        alignItems: 'center',
    }
};

export default function Loader(props) {
    return (
        <div style={styles.btnContainer}>
            {!props.icon && (
                <img src="https://icons8.com/preloaders/preloaders/24/Blinking%20squares.gif"
                 style={{ marginBottom: "10px" }} 
                />
            )}
            {props.icon && (
                <CircularProgress
                    color={props.color}
                    sx={{ m: 2 }}

                />
            )}
            {props.label}
        </div>
    );
}
