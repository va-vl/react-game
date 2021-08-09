import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
//
import { updateLanguageAC } from '../../../store/settingsReducer/settingsReducerACs';
import { languageSelector } from '../../../store/selectors';
//
import { RadiosSet } from '../../_common';
//
import { LANGUAGES } from '../../../constants/constants';

const LanguagesSet = () => {
  const dispatch = useDispatch();
  const currentLanguage = useSelector(languageSelector);
  const { t, i18n } = useTranslation();

  const changeBackHandler = ({ target: { value } }) => {
    dispatch(updateLanguageAC(value));
    i18n.changeLanguage(value);
  };

  return (
    <RadiosSet
      name="language"
      legend={t('Settings.LanguagesSet.Legend')}
      sourceArr={LANGUAGES}
      defaultValue={currentLanguage}
      changeHandler={changeBackHandler}
    />
  );
};

export { LanguagesSet };
