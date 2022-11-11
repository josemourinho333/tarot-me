import Modal from "../components/Modal";
import React, {useEffect, useState} from 'react';
import ProductList from "../components/ProductList";
import getRandom from "../utils/getRandom";
import upOrRev from '../utils/upOrRev';

const deck = [
  {
    name: 'World',
    id: 0,
    family: 'Major Arcana',
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
  },
  {
    name: 'Judgement',
    id: 1,
    family: 'Major Arcana',
    description: 'This card depicts what one would imagine the last judgment would be, in the various forms that takes in many mythologies. The image in the Judgement card shows women, men, and children who are rising from the grave to respond to Gabriel’s trumpet call. Their outstretched arms symbolize that they are ready to be judged by the universe. They are about to meet their creator, their actions weighed, and find out where they will spend the remainder of eternity: in heaven or in hell. The massive tidal wave in the background signify that judgement is unavoidable, and that this judgement will be final.',
    overview: {
      upright: {
        keywords: ['self-evaluation', 'awakening', 'renewal', 'purpose', 'reflection', 'reckoning'],
        meaning: 'The traditional Judgement meaning focuses on the moment when we reflect and evaluate ourselves and our actions. It is through self-reflection that we can have a clearer and objective understanding about where we are now, and what we need to do in order to grow as humans. The Judgement card appearing in a reading signifies that you are coming close to this significant point in your life where you must start to evaluate yourself. To see this card can also indicate that you are in a period of awakening, brought on by the act of self-reflection. You now have a clearer idea of what you need to change and how you need to be true yourself and your needs. This can mean making small changes to your daily life or making huge changes that not only affect you but the people close to you. The Judgement card reminds us that we all will be faced with choices that will have an astounding effect for your entire life. The card brings to mind moments where actions you have taken have changed the course of your path for good. There may have been a moment where there is no looking back. The consequences of those actions eventually will catch up to you, and this card seems to indicate that this is the time. You may have to let go of the past, so you can move forward with your plans to have a new life.',
      },
      reversed: {
        keywords: ['self-doubt', 'lack of self-awareness', 'failure to learn lessons', 'self-loathing'],
        meaning: 'The reversed Judgement card can mean that you doubt and judge yourself too harshly. This could be causing you to miss opportunities that were awaiting you. The lost momentum causes you to fall behind in your plans, which can make it difficult to move forward. This means that you should not be cautious, but you should be moving forward with pride and confidence. Another reading of the Judgement reversal card can be a push to take time out of your busy routine to reflect upon your life to this point, and what you have learned so far. You are most likely not giving yourself the time or space to fully think about the matter and learn the lessons you need to to be able to progress with awareness. You could also be too critical of your past actions, so you are not giving yourself the forgiveness to move forward. The mistakes that we have made in the past are learning tools, so they help us move though life. Focusing too hard on these mistakes can cause us to trip and fall.'
      },
    },
    love: {
      upright: {
        keywords: ['renewal of love', 'making adjustments in relationship'],
        meaning: 'Now is the time to take a closer look at your love life and figure out what needs to be changed. The Judgement tarot love meaning indicates a time of self-reflection and analysis initiated by an awakening. Issues in your love life that you once ignored may be seen clearly now, and you have the chance to make adjustments. Keep communication with your partner open, and make sure both of you are aware of each other’s needs. Small changes that the two of you make together can have a great effect on your relationship. Your past actions and their consequences, whether good or bad, are catching up with you now. If you’ve made mistakes in the past, use the lessons you’ve learned to make changes for your future.',
      },
      reversed: {
        keywords: ['blaming your partner', 'denial about love life'],
        meaning: 'Ensure that your criticisms about your partner right now are fair before you make them. There is likely something that you are unhappy about, but the reversed Judgement tarot love meaning can signal that some compromise and moderation is needed. On the other hand, this card can also signal that you need to open your eyes to your romantic situation and see it more clearly. Have you been in denial about something? Are you happy in your relationship? Is there something missing? Are there attitudes you have to love that you have been blind to but are deeply affecting your approach to dating? This card is asking you to see yourself and your relationships with honesty. Facing the truth can also free you.'
      }
    },
    career: {
      upright: {
        keywords: ['finding career purpose', 'accountability at work'],
        meaning: 'You may be going through a period of awakening when it comes to your career path. Perhaps you have found a new purpose or a calling that cannot be ignored. This can sometimes come with adjustments needing to be made at your workplace or your position. While this can be stressful, these changes can bring you a sense of feeling revitalized when it comes to your work. If your workplace has been tense, the Judgement card also signals that you may need to be more aware about how your actions at your workplace are affecting others. Take some time to evaluate how your behavior has been, and what can be improved. Take responsibility for your actions and your part in any conflicts that have been brewing.',
      },
      reversed: {
        keywords: ['self-doubt at work', 'failure to take responsibility for mistakes'],
        meaning: 'Perhaps you have been too harsh on yourself lately. If you’ve made mistakes at work, you may find that it is hard to let those feelings of disappointment with yourself go, instead of making amends and moving on. You may be left with a lingering sense of doubt about your own abilities. Alternatively, this card can signal that you are unable to take responsibility for your own actions, and not learning the lessons you need to in order to take the next steps in your career. Your lack of awareness when it comes to handling yourself may be grating on colleagues. Have you been doing all that you can when it comes to your work projects? Have you communicated well? Or do you always shift the blame to others?'
      }
    },
    finances: {
      upright: {
        keywords: ['reflecting on financial habits', 'reflecting on your values'],
        meaning: 'You may have to go through a period of self-reflection when it comes to your relationship with money. Sometimes this means evaluating whether your financial habits have been hindering your material situation, as well as making the changes necessary to do better. Are you someone that consistently purchases things they can’t afford? Or do you always feel lacking, even as your financial situation improves? New ways of thinking about your resources can come now, that give you the chance to make positive improvements.',
      },
      reversed: {
        keywords: ['failure to learn financial lessons', 'too self-denying'],
        meaning: 'If you’ve gone through a financial setback lately, you may be rather harsh on yourself right now. It is important to learn your lessons when it comes to making responsible choices, but it is also helpful for you to be kind to yourself, so that you can remain motivated. On the other hand, the reversed Judgement card suggests that you may find yourself falling into the same patterns when it comes to financial decisions. Be aware of which side of the spectrum you’re falling on.'
      }
    }
  }
];

export default function Home() {
  const [dailyCard, setDailyCard] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      const picked = getRandom(1, deck);
      const direction = upOrRev();
      setDailyCard({
        direction,
        picked
      });
      setLoading(false);
    }
  }, []);

  return (
    <>
      {loading && <div>Loading...</div>}
      {
        !loading && 
        <>
          <div className="hero min-h-[80vh] bg-base-200">
            <div className="hero-content flex-col gap-10 lg:flex-row-reverse">
              <img src="https://placeimg.com/260/400/arch" className={`max-w-sm rounded-lg shadow-2xl basis-1/2 ${dailyCard.direction === 'reversed' && "rotate-180"}`} />
              <div className="basis-1/2">
                <h1 className="text-7xl font-bold">Your card for today</h1>
                <p className="py-6">See what the spirits are trying to tell you today.</p>
                {
                  !dailyCard
                    ? <></>
                    : <label htmlFor={dailyCard.picked.id} className="btn btn-primary">Read Your Card</label>
                }
              </div>
            </div>
          </div>
          <ProductList />
        </>
      }
      {
        !dailyCard
          ? <></>
          : <Modal id={dailyCard.picked.id} card={dailyCard.picked} direction={dailyCard.direction}/>
      }
    </>
  )
}
