import React, { useState } from "react";
import "./TinderCards.css";
import TinderCard from "react-tinder-card";

const TinderCards = () => {
  const [people, setPeople] = useState([]);

  const swiped = (direction, nameToDelete) => {
    console.info("removing", nameToDelete);
    // setLastDirection(direction);
  };

  const outOfFrame = (name) => {
    console.info(name + "left the screen");
  };
  return (
    <div className="tinderCards">
      <div className="tinderCards-cardContainer">
        {people.reverse().map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={("up", "down")}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              style={{ backgroundImage: "url(" + person.url + ")" }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
};

export default TinderCards;
