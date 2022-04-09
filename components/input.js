import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/components/input.module.css';

const Input = props => {
    return (
        <div
            className={`${styles.wrapper} ${props.className || ''}`.trim()}
            style={props.style}
        >
            <input
                id={props.id}
                className={styles.input}
                type={props.type}
                value={props.value}
                defaultValue={props.defaultValue}
                spellCheck={props.spellCheck}
            />
        </div>
    );
};

Input.propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
    type: PropTypes.string,
    value: PropTypes.string,
    defaultValue: PropTypes.string,
    spellCheck: PropTypes.bool,
};

Input.defaultProps = {
    type: 'text',
    spellCheck: false,
};

export default Input;