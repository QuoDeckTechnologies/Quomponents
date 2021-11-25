import PropTypes from 'prop-types';
import Badge from '@mui/material/Badge';

Badge.protoTypes = {
    number: PropTypes.number,
    max: PropTypes.number,
    color: PropTypes.string,
    alignvertical: PropTypes.string,
    alignhorizontal: PropTypes.string
}

Badge.defaultProps = {
    number: 0,
    color: "primary",
    content: "",
    max: 99,
    alignvertical: "top",
    alignhorizontal: "right"
}

export default function Badges(props) {
    const styles = {
        container: {
            width: "280px",
            margin: "0 auto",
        }
    };
    return (
        <div style={styles.container}>
            <Badge
                badgeContent={props.number}
                color={props.color}
                max={props.max}
                anchorOrigin={{
                    vertical: props.alignvertical,
                    horizontal: props.alignhorizontal,
                }}
            >
                {props.content}
            </Badge>
        </div>
    );
}