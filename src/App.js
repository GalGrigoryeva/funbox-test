import React, { Component } from 'react';
import './App.scss';
import Card from "./components/Card/Card";

const data = [
  {
    taste: 'с фуа-гра',
    portions: '10',
    gift: 'мышь',
    extraGift: '',
    weight: '0,5',
    disabled: false,
    activeText: 'Печень утки разварная с артишоками.'
  },
  {
    taste: 'с рыбой',
    portions: '40',
    gift: '<b>2</b> мыши',
    extraGift: '',
    weight: '2',
    disabled: false,
    activeText: 'Головы щучьи с чесноком да свежайшая сёмгушка.'
  },
  {
    taste: 'с курой',
    portions: '100',
    gift: '<b>5</b> мышей',
    extraGift: 'заказчик доволен',
    weight: '5',
    disabled: true,
    activeText: 'Филе из цыплят с трюфелями в бульоне.'
  }
];

class App extends Component {
  render() {
    return (
      <div className="page">
        <h1 className='page__title'>Ты сегодня покормил кота?</h1>
        <ul className='page__cards'>
          {
            data.map((cardData, index) => {
              return <Card taste={cardData.taste}
                           portions={cardData.portions}
                           gift={cardData.gift}
                           extraGift={cardData.extraGift}
                           weight={cardData.weight}
                           activeText={cardData.activeText}
                           disabled={cardData.disabled}
                           key={index}/>
            })
          }
        </ul>
      </div>
    );
  }
}

export default App;
