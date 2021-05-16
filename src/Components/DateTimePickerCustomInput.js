import React, { Component } from "react";
import PropTypes from "prop-types";

/**
 * UI Component for picking date and time on event creation.
 * @component
 */
class DateTimePickerCustomInput extends Component {

    render() {
        return (
            <button id={this.props.id} className="ui labeled icon button fluid" onClick={this.props.onClick}>
                <i className="icon calendar"></i>
                {this.props.value}
            </button>
        )
    }
}

export default DateTimePickerCustomInput;

DateTimePickerCustomInput.propTypes = {
    onClick: PropTypes.func,
    value: PropTypes.string,
    id: PropTypes.string,
};

