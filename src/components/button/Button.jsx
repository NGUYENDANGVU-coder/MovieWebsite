import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './button.scss'
const Button = ({ to,
    href,
    onClick,
    disable,
    children,
    rounded,
    text,
    small,
    big,
    primary,
    outline,
    className,
    leftIcon,
    fontIcon,
    testProps,
    ...passProps }) => {
    let Comp = 'button'
    let props = {
        ...passProps,
        onClick
    }
    if (disable) {
        // eslint-disable-next-line array-callback-return
        Object.keys(props).map(key => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a'
    }
    return (
        <Comp className={(`wrapper ${className}`)} {...props}>
            {leftIcon && <span className={'icon'}>{leftIcon}</span>}
            <span>{children}</span>
        </Comp>
    );
}
Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    onClick: PropTypes.func,
    disable: PropTypes.bool,
    children: PropTypes.node.isRequired,
    rounded: PropTypes.bool,
    text: PropTypes.bool,
    small: PropTypes.bool,
    big: PropTypes.bool,
    primary: PropTypes.bool,
    className: PropTypes.string,
    leftIcon: PropTypes.node,
}


export default Button;
