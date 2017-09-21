import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

export default class PageButton extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let activeButtonColor = '#ccc'
        let buttonColor = '#fff';

        let first = this.props.pagination.first.map((n, i) => {
            let btnStyle = { backgroundColor: buttonColor };

            if (this.props.current === n) {
                btnStyle.backgroundColor = activeButtonColor
            }

            return (
                <li
                    key={i}
                    onClick={() => this.props.selectPage(n)}
                    style={btnStyle}
                >
                    <a>{n}</a>
                </li >
            )
        })
        let second = this.props.pagination.second.map((n, i) => {

            let btnStyle = { backgroundColor: buttonColor };
            if (this.props.current === n) {
                btnStyle.backgroundColor = activeButtonColor
            }

            return (
                <li
                    key={i}
                    onClick={() => this.props.selectPage(n)}
                    style={btnStyle}
                >
                    <a>{n}</a>
                </li >
            )
        })
        let third = this.props.pagination.third.map((n, i) => {

            let btnStyle = { backgroundColor: buttonColor };
            if (this.props.current === n) {
                btnStyle.backgroundColor = activeButtonColor
            }

            return (
                <li
                    key={i}
                    onClick={() => this.props.selectPage(n)}
                    style={btnStyle}
                >
                    <a>{n}</a>
                </li >
            )
        })
        let section = null;
        switch (this.props.section) {
            case 'first':
                section = first;
                break;
            case 'second':
                section = second;
                break;
            case 'third':
                section = third;
                break;

        }
        return <div>
            {section}
        </div>
    }
}    