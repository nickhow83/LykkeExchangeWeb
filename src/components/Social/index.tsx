import classNames from 'classnames';

import './style.css';

const SOCIAL_CLASS_NAME = 'social';

export default ({theme}: any) => (
  <ul
    className={classNames(SOCIAL_CLASS_NAME, {
      [SOCIAL_CLASS_NAME + '--' + theme]: theme
    })}
  >
    <li>
      <a
        href="https://www.facebook.com/LykkeCity"
        target="_blank"
        className="social__item"
      >
        <i className="icon icon--fb_simple" />
      </a>
    </li>
    <li>
      <a
        href="https://twitter.com/lykke"
        target="_blank"
        className="social__item"
      >
        <i className="icon icon--tw" />
      </a>
    </li>
    <li>
      <a
        href="http://instagram.com/lykkecity"
        target="_blank"
        className="social__item"
      >
        <i className="icon icon--instagram" />
      </a>
    </li>
    <li>
      <a
        href="https://www.youtube.com/c/LykkeX"
        target="_blank"
        className="social__item"
      >
        <i className="icon icon--youtube" />
      </a>
    </li>
    <li>
      <a
        href="https://www.linkedin.com/company/lykke"
        target="_blank"
        className="social__item"
      >
        <i className="icon icon--linkedin" />
      </a>
    </li>
    <li>
      <a
        href="https://t.me/lykkechannel"
        target="_blank"
        className="social__item"
      >
        <i className="icon icon--telegram" />
      </a>
    </li>
  </ul>
);
