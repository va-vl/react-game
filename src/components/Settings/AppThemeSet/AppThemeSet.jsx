import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
//
import { updateAppThemeAC } from '../../../store/settingsReducer/settingsReducerACs';
import { appThemeSelector } from '../../../store/selectors';
//
import { RadiosSet } from '../../_common';
//
import { APP_THEMES } from '../../../constants/constants';

const AppThemeSet = () => {
  const dispatch = useDispatch();
  const appTheme = useSelector(appThemeSelector);
  const { t } = useTranslation();

  const changeThemeHandler = (event) => {
    dispatch(updateAppThemeAC(event.target.value));
  };

  return (
    <RadiosSet
      name="appTheme"
      legend={t('Settings.AppThemeSet.Legend')}
      sourceArr={APP_THEMES}
      defaultValue={appTheme}
      changeHandler={changeThemeHandler}
    />
  );
};

export { AppThemeSet };
