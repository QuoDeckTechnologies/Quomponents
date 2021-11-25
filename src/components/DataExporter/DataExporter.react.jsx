
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';

DataExporter.protoTypes = {
    label: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string,
    iconBtn: PropTypes.bool,
    data: PropTypes.array.isRequired
}

DataExporter.defaultProps = {
    label: "Export",
    backgroundColor: "#000000",
    iconBtn: false,
    data: []
}

export default function DataExporter(props) {
    
    function exportData(event) {
        let { data } = props;
        if (data.length > 0) {
            const replacer = (key, value) => (value === null ? "" : value); // specify how you want to handle null values here
            const header = Object.keys(data[0]);
            let csv = data.map((row) =>
                header
                    .map((fieldName) =>
                        JSON.stringify(row[fieldName], replacer)
                    )
                    .join(",")
            );
            csv.unshift(header.join(","));
            csv = csv.join("\r\n");
            var hiddenElement = document.createElement("a");
            hiddenElement.href = "data:text/csv;charset=utf-8,%EF%BB%BF" + encodeURIComponent(csv);
            hiddenElement.target = "_blank";
            hiddenElement.download = `exported_data_${Date.now()}.csv`;
            hiddenElement.click();
        }
    }

    // Style Handlers
    // ----------------------
    const textColor =
        props.backgroundColor &&
        (fixTextColor(props.backgroundColor) ? "#000" : "#fff");

    const styles = {
        btnContainer: {
            width: "280px",
            margin: "0 auto",
        },
        btnFront: {
            backgroundColor: props.backgroundColor,
            color: textColor,
        }
    };

    return (
        <div style={styles.btnContainer}>
            {props.iconBtn && (
                <IconButton
                    {...props}
                    aria-label="export"
                    variant="contained"
                    onClick={exportData}
                    style={styles.btnFront}
                >
                    <FileDownloadOutlinedIcon {...props} />
                </IconButton>
            )}
            {!props.iconBtn && (
                <Button
                    {...props}
                    variant="contained"
                    endIcon={<FileDownloadOutlinedIcon />}
                    onClick={exportData}
                    style={styles.btnFront}
                >
                    {props.label}
                </Button>
            )}
        </div>
    );

    // Utility Functions
    // ----------------------

    function hexToRgb(hex) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16),
        };
    }

    function fixTextColor(srcColor) {
        let color = hexToRgb(srcColor);
        return color.r * 0.299 + color.g * 0.587 + color.b * 0.114 > 186;
    }
}