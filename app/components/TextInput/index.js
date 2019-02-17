/**
 *
 * TextInput.js
 *
 * A common text input, if you pass it a prop "preview" it'll add this preview text
 * otherwise it'll be blank
 */

import React, { Children } from 'react';
import PropTypes from 'prop-types';

class TextInput extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <input type="text" placeholder={this.props.preview} />
        );
    }
}

TextInput.propTypes = {
    preview: PropTypes.string,
};

export default TextInput;