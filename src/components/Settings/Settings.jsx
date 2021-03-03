import React from 'react';
import { Link } from 'react-router-dom';
import AutoplayToggler from './AutoplayToggler/AutoplayToggler';
import MusicVolumeSlider from './MusicVolumeSlider/MusicVolumeSlider';
import SoundVolumeSlider from './SoundVolumeSlider/SoundVolumeSlider';
import CardsAmountSet from './CardsAmountSet/CardsAmountSet';
import CardsBackSet from './CardsBackSet/CardsBackSet';
import AppThemeSet from './AppThemeSet/AppThemeSet';
import './Settings.scss';

const Settings = () => (
  <main className="settings">
    <div className="settings__content">
      <h3 className="settings__heading">Settings</h3>
      <form className="settings__form">
        <div className="settings__input">
          <CardsAmountSet />
        </div>
        <div className="settings__input settings__input--autoplay">
          <AutoplayToggler />
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

export default Settings;
