import React from 'react';
import { Link } from 'react-router-dom';
//
import { MusicVolumeSlider } from './MusicVolumeSlider';
import { SoundVolumeSlider } from './SoundVolumeSlider';
import { CardsAmountSet } from './CardsAmountSet';
import { CardsBackSet } from './CardsBackSet';
import { AppThemeSet } from './AppThemeSet';
//
import './Settings.scss';

const Settings = () => (
  <main className="settings">
    <div className="settings__content">
      <h3 className="settings__heading">Settings</h3>
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
      </form>
      <Link className="settings__button" to="/">
        To main menu
      </Link>
    </div>
  </main>
);

export { Settings };
