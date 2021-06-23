import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

import TinderCard from 'react-tinder-card';

import './card.css'

const Card = () => {
  const [baseballCards, setBaseballCards] = useState([
    {name: 'Babe Ruth', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/1916_M101-4_Sporting_News_Babe_Ruth_Rookie_-151.jpg/316px-1916_M101-4_Sporting_News_Babe_Ruth_Rookie_-151.jpg'},
    {name: 'Eddie Plank', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Plank%2C_Philadelphia%2C_American_League%2C_from_the_White_Border_series_%28T206%29_for_the_American_Tobacco_Company_MET_DP845141.jpg/347px-Plank%2C_Philadelphia%2C_American_League%2C_from_the_White_Border_series_%28T206%29_for_the_American_Tobacco_Company_MET_DP845141.jpg'},
    {name: 'Horus Wagner', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/1909_T206_Honus_Wagner_Baseball_Card_with_PSA_grade_EX_5-MC.jpg/361px-1909_T206_Honus_Wagner_Baseball_Card_with_PSA_grade_EX_5-MC.jpg'},
    {name: 'Shoeless Joe Jackson', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/1910_T210_Old_Mill_Series_8_Joe_Jackson.png/332px-1910_T210_Old_Mill_Series_8_Joe_Jackson.png'},
    {name: 'Slow Joe Doyle', url: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/T206JoeDoyleError.jpg'},
    {name: 'Babe Ruth', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/1916_M101-4_Sporting_News_Babe_Ruth_Rookie_-151.jpg/316px-1916_M101-4_Sporting_News_Babe_Ruth_Rookie_-151.jpg'},
    {name: 'Eddie Plank', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Plank%2C_Philadelphia%2C_American_League%2C_from_the_White_Border_series_%28T206%29_for_the_American_Tobacco_Company_MET_DP845141.jpg/347px-Plank%2C_Philadelphia%2C_American_League%2C_from_the_White_Border_series_%28T206%29_for_the_American_Tobacco_Company_MET_DP845141.jpg'},
    {name: 'Horus Wagner', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/1909_T206_Honus_Wagner_Baseball_Card_with_PSA_grade_EX_5-MC.jpg/361px-1909_T206_Honus_Wagner_Baseball_Card_with_PSA_grade_EX_5-MC.jpg'},
    {name: 'Shoeless Joe Jackson', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/1910_T210_Old_Mill_Series_8_Joe_Jackson.png/332px-1910_T210_Old_Mill_Series_8_Joe_Jackson.png'},
    {name: 'Slow Joe Doyle', url: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/T206JoeDoyleError.jpg'},
  ])

  const swiped = (direction, nameToDelete) => {
    console.log('receiving' + nameToDelete)
  }

  const outOfFrame = name => {
    console.log(name + ' left the screen');
  }

  return (
    <div className="BaseballCards">
      <div className="cards__container">
          { baseballCards.map(baseballCard => (
              <TinderCard 
                  className="swipe"
                  key={baseballCard.name}
                  preventSwipe={['up', 'down']}
                  onSwipe={dir => swiped(dir, baseballCard.name)}
                  onCardLeftScreen={() => outOfFrame(baseballCard.name)}
              >
                  <div className="baseballCard" style={{ backgroundImage: `url(${baseballCard.url})` }}>
                      <h3>{ baseballCard.name }</h3>
                  </div>
              </TinderCard>
          )) }
      </div>
    </div>
  )
}

export default Card
