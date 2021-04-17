import * as React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useFirebase } from 'react-redux-firebase';
import { useTranslation } from 'react-i18next';
//
import { userNameSelector, gameOnSelector } from '../../store/selectors';
//
import { AutoplayToggler } from './AutoplayToggler/AutoplayToggler';
//
import './Main.scss';

const Main = () => {
  const firebase = useFirebase();
  const history = useHistory();
  const userName = useSelector(userNameSelector);
  const isGameOn = useSelector(gameOnSelector);
  const { t } = useTranslation();

  const handleSignOut = () => {
    firebase.logout().then(() => {
      history.push('/signin');
    });
  };

  return (
    <main className="main">
      <div className="main__content">
        <h3 className="main__heading">
          {!userName
            ? t('Main.UserGreeting.Preload')
            : `${t(`Main.UserGreeting.Text`)}, ${userName}!`}
        </h3>
        <ul className="main__list">
          <li className="main__link--autoplay">
            <AutoplayToggler />
          </li>
          <li className="main__link">
            <Link className="main__button" to="/game">
              {t(`Main.GameButton.${isGameOn ? 'Continue' : 'New'}`)}
            </Link>
          </li>
          <li className="main__link">
            <Link className="main__button" to="/settings">
              {t('Main.SettingsButton')}
            </Link>
          </li>
          <li className="main__link">
            <Link className="main__button" to="/stats">
              {t('Main.StatsButton')}
            </Link>
          </li>
          <li className="main__link">
            <Link className="main__button" to="/info">
              {t('Main.InfoButton')}
            </Link>
          </li>
          <li className="main__link">
            <button
              className="main__button"
              type="button"
              onClick={handleSignOut}
            >
              {t('Main.LogoutButton')}
            </button>
          </li>
        </ul>
      </div>
    </main>
  );
};

export { Main };
