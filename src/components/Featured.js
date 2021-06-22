import React, { useState } from 'react';
import TinderCard from 'react-tinder-card';

const db = [
  {
    name: 'Richard Hendricks',
    url: '../img/male.jpg',
  },
  {
    name: 'Ellen Bachman',
    url: '../img/female.jpg',
  },
  {
    name: 'Jared Hall',
    url: '../img/male.jpg',
  },
  {
    name: 'Monica Dunn',
    url: '../img/female.jpg',
  },
  {
    name: 'Dinesh Chugtai',
    url: '../img/male.jpg',
  },
  {
    name: 'Jess Stanza',
    url: '../img/female.jpg',
  },
];

const Featured = (props) => {
  const characters = db;
  const [lastDirection, setLastDirection] = useState();

  const swiped = (direction, nameToDelete) => {
    console.log('removing: ' + nameToDelete);
    setLastDirection(direction);
  };

  const outOfFrame = (name) => {
    console.log(name + ' left the screen!');
  };

  return (
    <div>
      <link
        href="https://fonts.googleapis.com/css?family=Damion&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Alatsi&display=swap"
        rel="stylesheet"
      />
      <h1>Featured Profiles</h1>
      <div className="cardContainer">
        {characters.map((character) => (
          <TinderCard
            className="swipe"
            key={character.name}
            onSwipe={(dir) => swiped(dir, character.name)}
            onCardLeftScreen={() => outOfFrame(character.name)}
          >
            <div
              style={{ backgroundImage: 'url(' + character.url + ')' }}
              className="card"
            >
              <h3>{character.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
      {lastDirection ? (
        <h2 className="infoText">You swiped {lastDirection}</h2>
      ) : (
        <h2 className="infoText" />
      )}
    </div>
  );
};

export default Featured;
