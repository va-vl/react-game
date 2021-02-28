import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import RadiosSet from '../../_common/RadiosSet/RadiosSet';
import { updateAppThemeAC } from '../../../store/settingsReducer/settingsReducerACs';
import { appThemeSelector } from '../../../store/selectors';
import { APP_THEMES } from '../../../constants/constants';

const AppThemeSet = () => {
  const dispatch = useDispatch();
  const appTheme = useSelector(appThemeSelector);

  const changeThemeHandler = (event) => {
    dispatch(updateAppThemeAC(event.target.value));
  };

  return (
    <RadiosSet
      name="appTheme"
      legend="Select app theme:"
      sourceArr={APP_THEMES}
      defaultValue={appTheme}
      changeHandler={changeThemeHandler}
    />
  );
};

export default AppThemeSet;
