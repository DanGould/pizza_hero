/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import {
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  OPEN_SIGNUP_MODAL,
  CLOSE_SIGNUP_MODAL,
  OPEN_LOGIN_MODAL,
  CLOSE_LOGIN_MODAL,
  UPDATE_TRONLINK_STATUS,
  GET_TRX_BALANCE_SUCCESS,
  SET_WALLET_ADDRESS,
  SET_TRONWEB,
  GET_ZACOIN_BALANCE_SUCCESS,
} from './constants';

// The initial state of the App
export const initialState = {
  loading: false,
  error: false,
  isLogged: false,
  isOpenSignupModal: false,
  isOpenLoginModal: false,
  evoBalance: 0,
  trxBalance: 0,
  zaCoinBalance: 0,
  accountName: 'Test',
  walletAddress: '0x0',
  tronWebState: {
    installed: false,
    loggedIn: false,
  },
  tronWeb: 0,
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOGIN_SUCCESS:
        draft.isLogged = true;
        draft.isOpenSignupModal = false;
        draft.isOpenLoginModal = false;
        draft.accountName = action.user.username;
        break;
      case LOGOUT_SUCCESS:
        draft.isLogged = false;
        draft.accountName = '';
        break;
      case OPEN_SIGNUP_MODAL:
        draft.isOpenSignupModal = true;
        break;
      case CLOSE_SIGNUP_MODAL:
        draft.isOpenSignupModal = false;
        break;
      case OPEN_LOGIN_MODAL:
        draft.isOpenLoginModal = true;
        draft.isOpenSignupModal = false;
        break;
      case CLOSE_LOGIN_MODAL:
        draft.isOpenLoginModal = false;
        break;
      case UPDATE_TRONLINK_STATUS:
        draft.tronWebState = action.tronWebState;
        break;
      case SET_WALLET_ADDRESS:
        draft.walletAddress = action.walletAddress;
        break;
      case GET_TRX_BALANCE_SUCCESS:
        draft.trxBalance = action.trxBalance;
        draft.evoBalance = action.evoBalance;
        break;
      case GET_ZACOIN_BALANCE_SUCCESS:
        draft.zaCoinBalance = action.zaCoinBalance;
        break;
      case SET_TRONWEB:
        draft.tronWeb = action.tronWeb;
        break;
    }
  });

export default appReducer;
