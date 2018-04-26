import React, { Component } from 'react'
import classNames from 'classnames'
import { result } from 'lodash'

export default class VtsButton extends Component {
  onClick = e => this.props.onClick ? this.props.onClick(e) : _.noop

  render() {
    return (
      <div className="vts-button">
        <button
          name={this.props.name}
          className={classNames({
            button: true,
            '-fc': true,
            [`-type-${this.props.type}`]: this.props.type,
            [`-size-${this.props.size}`]: this.props.size,
            'is-disabled': this.props.disabled,
            'button--icon-only': !!(
              !this.props.children && this.props.icon
            )
          })}
          onClick={this.onClick}
          type={this.props.buttonType}
        >
          {this.props.icon ? <i className={this.props.icon} /> : null}
          <span className="button-text">{this.props.children}</span>
        </button>
      </div>
    )
  }
}
