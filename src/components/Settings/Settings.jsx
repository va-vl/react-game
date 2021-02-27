import React, { useState } from 'react';
import RangeSlider from './RangeSlider/RangeSlider';
import importAll from '../../utils/importAll';
import './Settings.scss';

const cardBacks = importAll(
  require.context('../../assets/cards/back', false, /.svg$/),
);

const Settings = () => {
  const [musicVolume, setMusicVolume] = useState('100');
  const [soundVolume, setSoundVolume] = useState('100');
  const [cardsAmount, setCardsAmount] = useState(12);
  const [cardsBackIndex, setCardsBackIndex] = useState('02');

  const handleCardsAmountChange = (event) => {
    setCardsAmount(event.target.value);
  };

  const handleCardsBackChange = (event) => {
    setCardsBackIndex(event.target.value);
  };

  return (
    <main className="settings">
      <div className="settings__content">
        <h3 className="settings__heading">Settings</h3>
        <ul className="settings__list">
          <li className="settings__item">
            <RangeSlider
              name="Music volume"
              value={musicVolume}
              changeHandler={setMusicVolume}
            />
          </li>
          <li className="settings__item">
            <RangeSlider
              name="Sound volume"
              value={soundVolume}
              changeHandler={setSoundVolume}
            />
          </li>
          <li className="settings__item">
            <form
              className="settings__amount"
              onChange={handleCardsAmountChange}
            >
              <legend>asdf</legend>
              {[12, 16, 20, 24].map((item) => {
                const id = `cardsAmount${item}`;
                const inputProps = {
                  defaultChecked: item === cardsAmount,
                  id,
                  name: 'cardsAmount',
                  value: `${item}`,
                  type: 'radio',
                };

                return (
                  <label key={id} htmlFor={id}>
                    {React.createElement('input', inputProps)}
                    {item}
                  </label>
                );
              })}
            </form>
          </li>
          <li className="settings__item">
            <form className="settings__back" onChange={handleCardsBackChange}>
              {Object.entries(cardBacks).map(([keyProperty, path]) => {
                const id = `cardsBack${keyProperty}`;
                const inputProps = {
                  className: `settings__image-radio`,
                  defaultChecked: keyProperty === cardsBackIndex,
                  id,
                  name: 'cardsBack',
                  value: `${keyProperty}`,
                  type: 'radio',
                };

                return (
                  <label key={id} htmlFor={id}>
                    {React.createElement('input', inputProps)}
                    <img className="settings__image" src={path} alt="back" />
                  </label>
                );
              })}
            </form>
          </li>
        </ul>
        <button type="button">Theme</button>
        <button type="button">Back</button>
      </div>
    </main>
  );
};

export default Settings;
