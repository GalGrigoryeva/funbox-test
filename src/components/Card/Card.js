import React, { Component } from 'react';
import * as classnames from "classnames";

class Card extends Component {
  state = {
    active: false,
    onHovered: false
  };

  clickHandler = () => {
    this.setState({
      active: !this.state.active,
      onHovered: false
    });
  };

  mouseEnterHandler = () => {
    this.setState({
      onHovered: true
    });
  };

  mouseLeaveHandler = () => {
    this.setState({
      onHovered: false
    });
  };

  render() {
    return (
      <li className={classnames({
          'card': true,
          'card--disabled': this.props.disabled,
          'card--active': this.state.active }
          )}
          onClick={this.clickHandler}
          onMouseEnter={this.mouseEnterHandler}
          onMouseLeave={this.mouseLeaveHandler}>
        <div className='card__content'>
          <span className='card__description'>
            {this.state.onHovered && this.state.active ? <span>Котэ не одобряет?</span>: 'Сказочное заморское яство'}
          </span>
          <h2 className='card__title'>Нямушка</h2>
          <span className='card__subtitle'>{this.props.taste}</span>
          <p className='card__feature'>
            <span><b>{this.props.portions}</b> порций</span>
            <span>
            <span dangerouslySetInnerHTML={{__html: this.props.gift}}/> в подарок
          </span>
            <span>{this.props.extraGift}</span>
          </p>
          <div className='card__amount'>
            <span className='card__amount-num'>{this.props.weight}</span>
            <span className='card__amount-unit'>кг</span>
          </div>
        </div>

        {footerText(this.props, this.state.active)}
      </li>
    );
  }
}

const footerText = (props, active) => {
  if (props.disabled) {
    return (
      <p className='card__action-text'>
        {`Печалька, ${props.taste} закончился.`}
      </p>
    )
  } else if (active) {
    return(
      <p className='card__action-text'>
        {props.activeText}
      </p>
    )
  } else {
    return (
      <p className='card__action-text'>
        Чего сидишь? Порадуй котэ, <span className='card__action-btn'>купи</span>
      </p>
    )
  }
}

export default Card;