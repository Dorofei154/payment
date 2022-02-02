import React from 'react';
import { ACTIONS } from '../../constants/actions';

export const currentUserCreator = (currentUser) => {
  return {
      type: ACTIONS.SET_CURRENT_USER,
      value: currentUser
  };
};
