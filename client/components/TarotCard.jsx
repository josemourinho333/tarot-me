import React, {useState} from 'react';
import TarotCardInfo from './TarotCardInfo';

const deck = {
  name: 'World',
  description: 'The World card in the tarot deck has a dancing figure at the center. The dancing figure on the card has one leg crossed over the other and holds a wand in either hand. She symbolizes balance and evolution in movement. The fulfillment and unity that she represents is not one that is static, but ever-changing, dynamic and eternal. The green wreath of flowers that surrounds the central figure is a symbol of success, while the red ribbons that wrap around it are reminiscent of infinity. There are four figures on each corner of the card - and they are the same ones that are in the Wheel of Fortune. The four figures represent Scorpio, Leo, Aquarius and Taurus - representative of the four corners of the universe, the four elements, and the four evangelicals. Together, they symbolize the harmony between all of their energies.',
  overview: {
    upright: {
      keywords: ['completion', 'achievement', 'fulfilment', 'sense of belonging', 'wholeness', 'harmony'],
      meaning: 'To encounter the World in your cards is to encounter a great unity and wholeness. It symbolizes the moment when the inner and the outer worlds - self and other - become a single entity. In some traditions, this state is described as enlightenment, or nirvana. There is a recognition that the individual self is profoundly linked with all other things, and that we all dance and sway along the flow of life to one rhythm. Not only do you hear this rhythm, but you participate in it - following the dips and the rises, the joys and the sorrows. The meaning of the World card is fulfillment, achievement, and completion. This shows that all the efforts that you have been putting in place are starting to pay off. It reflects that you have completed a major milestone in your life and you have built the resilience to withstand challenges. The World may indicate completion of a long-term project, study or any other major event in your life. It may also mean the birth of a child, marriage, graduation or any other thing that you have accomplished. The World card shows that you have a desire to give back to the community in various ways. You have a commitment to make the world a better place because you understand that everything is connected.',
    },
    reversed: {
      keywords: ['lack of closure', 'lack of achievement', 'feeling incomplete', 'emptiness'],
      meaning: 'You are drawing near to something that marks the end of a journey or an era. You may have many accomplishments that have lined your path, but there is a strange emptiness that fills you when you look backwards upon it, as if you have all the pieces but they are not coming together. What is missing? Do you feel connected to what you are doing? Do you feel connected to others? What alienates you from feeling complete? From feeling whole?'
    },
  },
  love: {
    upright: {
      keywords: ['feeling loved and grateful', 'fulfilling romantic life'],
      meaning: 'Your relationship gives you a sense of deep fulfillment and gratitude right now. The World tarot love meaning signals a feeling of completion and happiness. At times, this card can even suggest moving to the next step of your relationship, such as marriage or starting a family. As you complete one cycle in your life, you are also looking towards the future into next steps. You and your partner may be making plans, perhaps even big decisions. Even when single, there is a sense of fulfillment and happiness here. Before getting into a relationship, one must feel like a whole person. While a relationship may be nice, you are confident on your own. You have this sense of wholeness and self understanding right now, giving you great opportunities to meet new and exciting people, as well as charm and magnetism.',
    },
    reversed: {
      keywords: ['missing something in love life', 'taking partner for granted'],
      meaning: 'While other aspects of your life may be going well, it seems like when it comes to love, something is missing. The reversed World tarot love meaning signals a feeling of incompletion; a nearing to the end of one cycle, but not quite there. You are so close to feeling fulfilled and happy, but something prevents you from seeing it. Are you not seeing your partner for all the wonderful things they are? Or is a past relationship coloring your experience of this one? Do you not have a feeling of closure from a past partner? Something requires you to tie up loose ends right now, so that you can be happy in the moment.'
    }
  },
  career: {
    upright: {
      keywords: ['completing career goal, fulfilling career path'],
      meaning: 'Be proud of yourself, as you have done what you have set out to do when it comes to your career. Whether that means finding a job that makes you feel fulfilled both spiritually and materially, finishing a particularly challenging project, or opening your own business, there’s much to celebrate right now. Take the time now to enjoy what you have earned. It’s likely you’re already thinking about what comes next, as this is the normal cycle of things. For now, enjoy the moment. ',
    },
    reversed: {
      keywords: ['false measure of success', 'missing piece in career'],
      meaning: 'Have you finally accomplished a big career goal that you wanted for a long time, only to find that the rewards aren’t quite as sweet as you thought they were? Or have you fallen just shy of what you wanted to accomplish? The reversed World signals nearing completion, but perhaps missing the final pieces that would make you truly feel fulfilled. Perhaps your goals have been too defined by what others perceive as success, or perhaps you have set your bar too low that reaching this goal felt unchallenging. Now is the time to reevaluate your goals and make the adjustments as necessary.  '
    }
  },
  finances: {
    upright: {
      keywords: ['completing financial goal'],
      meaning: 'You may have worked hard in order to reach your financial goals, and now may be the time to enjoy the fruits of your labor. Perhaps you’ve paid off some debt, found security after saving, or made a large purchase that you’ve saved up for. Give yourself a pat on the back and be proud of what you’ve accomplished. Now can be the time of thinking about other long term goals. Since the World also represents a feeling of wholeness, take some time to understand how your finances fit into the bigger picture of your life.',
    },
    reversed: {
      keywords: ['close to completing financial goal', 'unfulfilled despite financial comfort'],
      meaning: 'Even if you’re in a financially comfortable position, you may feel stagnant and unhappy with what you have. There is likely a reevaluation of your relationship to the material things that needs to be adjusted with the reversed World. If you’ve found that you’ve fallen short of your financial goals, now is not the time to indulge in feelings of disappointment; you are close to what you’d like to achieve; remain consistent and you’ll find comfort.'
    }
  }
};

const TarotCard = () => {
  const [cardDirection, setCardDirection] = useState(null);

  const upOrRev = () => {
    const zeroOrOne = Math.random();

    if (zeroOrOne < 0.5) {
      setCardDirection('upright');
    } else {
      setCardDirection('reversed');
    }
  }

  return (
    <>
      <div className="tarot-card card glass w-full h-[70vh] sm:w-[30vh] sm:h-[50vh] md:w-[40vh] md:h-[60vh] lg:w-[40vh] lg:h-[60vh]">
        <div className="card-body justify-end">
          <div className="card-actions justify-center">
            <label htmlFor="my-modal-6" className="btn btn-primary btn-sm" onClick={upOrRev}>Read Your Card</label>
          </div>
        </div>
      </div>
      <TarotCardInfo deck={deck} cardDirection={cardDirection}/>
    </>
  )
}

export default TarotCard;