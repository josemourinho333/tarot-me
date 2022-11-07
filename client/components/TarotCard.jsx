import React, {useState} from 'react';
import TarotCardInfo from './TarotCardInfo';

const TarotCard = ({deck, id}) => {
  const [cardDirection, setCardDirection] = useState(null);
  const [picked, setPicked] = useState(false);

  // pick direction
  const upOrRev = () => {
    const zeroOrOne = Math.random();

    if (zeroOrOne < 0.5) {
      setCardDirection('upright');
    } else {
      setCardDirection('reversed');
    }
  };

  // click handler when user picks their cards
  const pickedCard = (name) => {
    console.log('you picked', name)
    upOrRev();
    setPicked(true);
  };

  return (
    <>
      <div className="tarot-card card glass hover:bg-accent w-full h-[70vh] row-span-1 sm:w-[30vh] sm:h-[50vh] md:w-[40vh] md:h-[60vh] lg:w-[40vh] lg:h-[60vh]" onClick={() => pickedCard(deck.name)}>
        <div className="card-body justify-end">
          <div className="card-actions justify-center">
            {
              !picked
                ? <></>
                : <label htmlFor={id} className="btn btn-primary btn-sm">{deck.name} | {cardDirection}</label>
            }
          </div>
        </div>
      </div>
      <TarotCardInfo deck={deck} cardDirection={cardDirection} id={id}/>
    </>
  )
}

export default TarotCard;