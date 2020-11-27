import card1s from './responsive-playing-cards/minified/spades/1s.svg';
import card2s from './responsive-playing-cards/minified/spades/2s.svg';
import card3s from './responsive-playing-cards/minified/spades/3s.svg';
import card4s from './responsive-playing-cards/minified/spades/4s.svg';
import card5s from './responsive-playing-cards/minified/spades/5s.svg';
import card6s from './responsive-playing-cards/minified/spades/6s.svg';
import card7s from './responsive-playing-cards/minified/spades/7s.svg';
import card8s from './responsive-playing-cards/minified/spades/8s.svg';
import card9s from './responsive-playing-cards/minified/spades/9s.svg';
import card10s from './responsive-playing-cards/minified/spades/10s.svg';
import cardjs from './responsive-playing-cards/minified/spades/js.svg';
import cardqs from './responsive-playing-cards/minified/spades/qs.svg';
import cardks from './responsive-playing-cards/minified/spades/ks.svg';

import card1h from './responsive-playing-cards/minified/hearts/1h.svg';
import card2h from './responsive-playing-cards/minified/hearts/2h.svg';
import card3h from './responsive-playing-cards/minified/hearts/3h.svg';
import card4h from './responsive-playing-cards/minified/hearts/4h.svg';
import card5h from './responsive-playing-cards/minified/hearts/5h.svg';
import card6h from './responsive-playing-cards/minified/hearts/6h.svg';
import card7h from './responsive-playing-cards/minified/hearts/7h.svg';
import card8h from './responsive-playing-cards/minified/hearts/8h.svg';
import card9h from './responsive-playing-cards/minified/hearts/9h.svg';
import card10h from './responsive-playing-cards/minified/hearts/10h.svg';
import cardjh from './responsive-playing-cards/minified/hearts/jh.svg';
import cardqh from './responsive-playing-cards/minified/hearts/qh.svg';
import cardkh from './responsive-playing-cards/minified/hearts/kh.svg';

import card1d from './responsive-playing-cards/minified/diamonds/1d.svg';
import card2d from './responsive-playing-cards/minified/diamonds/2d.svg';
import card3d from './responsive-playing-cards/minified/diamonds/3d.svg';
import card4d from './responsive-playing-cards/minified/diamonds/4d.svg';
import card5d from './responsive-playing-cards/minified/diamonds/5d.svg';
import card6d from './responsive-playing-cards/minified/diamonds/6d.svg';
import card7d from './responsive-playing-cards/minified/diamonds/7d.svg';
import card8d from './responsive-playing-cards/minified/diamonds/8d.svg';
import card9d from './responsive-playing-cards/minified/diamonds/9d.svg';
import card10d from './responsive-playing-cards/minified/diamonds/10d.svg';
import cardjd from './responsive-playing-cards/minified/diamonds/jd.svg';
import cardqd from './responsive-playing-cards/minified/diamonds/qd.svg';
import cardkd from './responsive-playing-cards/minified/diamonds/kd.svg';

import card1c from './responsive-playing-cards/minified/clubs/1c.svg';
import card2c from './responsive-playing-cards/minified/clubs/2c.svg';
import card3c from './responsive-playing-cards/minified/clubs/3c.svg';
import card4c from './responsive-playing-cards/minified/clubs/4c.svg';
import card5c from './responsive-playing-cards/minified/clubs/5c.svg';
import card6c from './responsive-playing-cards/minified/clubs/6c.svg';
import card7c from './responsive-playing-cards/minified/clubs/7c.svg';
import card8c from './responsive-playing-cards/minified/clubs/8c.svg';
import card9c from './responsive-playing-cards/minified/clubs/9c.svg';
import card10c from './responsive-playing-cards/minified/clubs/10c.svg';
import cardjc from './responsive-playing-cards/minified/clubs/jc.svg';
import cardqc from './responsive-playing-cards/minified/clubs/qc.svg';
import cardkc from './responsive-playing-cards/minified/clubs/kc.svg';


function Card(props) {
  const {
    className,
    suit,
    value,
  } = props;
  let src='';
  switch (suit.toLowerCase()) {
    case 'spades':
      switch (value.toLowerCase()) {
        case '1':
          src = card1s;
          break;
        case '2':
          src = card2s;
          break;
        case '3':
          src = card3s;
          break;
        case '4':
          src = card4s;
          break;
        case '5':
          src = card5s;
          break;
        case '6':
          src = card6s;
          break;
        case '7':
          src = card7s;
          break;
        case '8':
          src = card8s;
          break;
        case '9':
          src = card9s;
          break;
        case '10':
          src = card10s;
          break;
        case 'j':
          src = cardjs;
          break;
        case 'q':
          src = cardqs;
          break;
        case 'k':
          src = cardks;
          break;
        default:
          console.error('Invalid value', {
            suit,
            value,
          });
      }
    break;

    case 'hearts':
      switch (value.toLowerCase()) {
        case '1':
          src = card1h;
          break;
        case '2':
          src = card2h;
          break;
        case '3':
          src = card3h;
          break;
        case '4':
          src = card4h;
          break;
        case '5':
          src = card5h;
          break;
        case '6':
          src = card6h;
          break;
        case '7':
          src = card7h;
          break;
        case '8':
          src = card8h;
          break;
        case '9':
          src = card9h;
          break;
        case '10':
          src = card10h;
          break;
        case 'j':
          src = cardjh;
          break;
        case 'q':
          src = cardqh;
          break;
        case 'k':
          src = cardkh;
          break;
        default:
          console.error('Invalid value', {
            suit,
            value,
          });
      }
    break;

    case 'diamonds':
      switch (value.toLowerCase()) {
        case '1':
          src = card1d;
          break;
        case '2':
          src = card2d;
          break;
        case '3':
          src = card3d;
          break;
        case '4':
          src = card4d;
          break;
        case '5':
          src = card5d;
          break;
        case '6':
          src = card6d;
          break;
        case '7':
          src = card7d;
          break;
        case '8':
          src = card8d;
          break;
        case '9':
          src = card9d;
          break;
        case '10':
          src = card10d;
          break;
        case 'j':
          src = cardjd;
          break;
        case 'q':
          src = cardqd;
          break;
        case 'k':
          src = cardkd;
          break;
        default:
          console.error('Invalid value', {
            suit,
            value,
          });
      }
    break;
    case 'clubs':
      switch (value.toLowerCase()) {
        case '1':
          src = card1c;
          break;
        case '2':
          src = card2c;
          break;
        case '3':
          src = card3c;
          break;
        case '4':
          src = card4c;
          break;
        case '5':
          src = card5c;
          break;
        case '6':
          src = card6c;
          break;
        case '7':
          src = card7c;
          break;
        case '8':
          src = card8c;
          break;
        case '9':
          src = card9c;
          break;
        case '10':
          src = card10c;
          break;
        case 'j':
          src = cardjc;
          break;
        case 'q':
          src = cardqc;
          break;
        case 'k':
          src = cardkc;
          break;
        default:
          console.error('Invalid value', {
            suit,
            value,
          });
      }
    break;
    default:
      console.error('Invalid suit', {
        suit,
        value,
      });
  }
  return <img
    alt={`${value} of ${suit}`}
    className={className}
    src={src}
  />;
}

export default Card;
