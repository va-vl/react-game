import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
//
import { MusicVolumeSlider } from './MusicVolumeSlider';
import { SoundVolumeSlider } from './SoundVolumeSlider';
import { CardsAmountSet } from './CardsAmountSet';
import { CardsBackSet } from './CardsBackSet';
import { AppThemeSet } from './AppThemeSet';
import { LanguagesSet } from './LanguagesSet';
//
import './Settings.scss';

const Settings = () => {
  const { t } = useTranslation();

  return (
    <main className="settings">
      <div className="settings__content">
        <h3 className="settings__heading">{t('Settings.Heading')}</h3>
        <form className="settings__form">
          <div className="settings__input">
            <CardsAmountSet />
          </div>
          <div className="settings__input">
            <MusicVolumeSlider />
          </div>
          <div className="settings__input">
            <SoundVolumeSlider />
          </div>
          <div className="settings__input">
            <CardsBackSet />
          </div>
          <div className="settings__input">
            <AppThemeSet />
          </div>
          <div className="settings__input">
            <LanguagesSet />
          </div>
        </form>
        <Link className="settings__button" to="/">
          {t('Settings.MainMenuButton')}
        </Link>
      </div>
    </main>
  );
};

export { Settings };
