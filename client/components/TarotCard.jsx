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
      <div className="tarot-card card glass hover:bg-accent w-[150px] h-[250px]" onClick={() => pickedCard(deck.name)}>
        <div className="card-body justify-end p-4">
          <div className="card-actions justify-center">
            {
              !picked
                ? <></>
                : <label htmlFor={id} className="btn btn-primary btn-sm w-full">{deck.name} | {cardDirection}</label>
            }
          </div>
        </div>
      </div>
      <TarotCardInfo deck={deck} cardDirection={cardDirection} id={id}/>
    </>
  )
}

export default TarotCard;