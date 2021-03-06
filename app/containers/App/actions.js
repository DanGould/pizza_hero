/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGOUT,
  LOGOUT_SUCCESS,
  OPEN_SIGNUP_MODAL,
  CLOSE_SIGNUP_MODAL,
  OPEN_LOGIN_MODAL,
  CLOSE_LOGIN_MODAL,
  CHECK_TRONLINK_STATUS,
  CHECK_TRONLINK_STATUS_SUCCESS,
  CHECK_TRONLINK_STATUS_FAIL,
  UPDATE_TRONLINK_STATUS,
  GET_TRX_BALANCE,
  GET_TRX_BALANCE_SUCCESS,
  GET_TRX_BALANCE_FAIL,
  SET_WALLET_ADDRESS,
  SET_TRONWEB,
  GET_ZACOIN_BALANCE_SUCCESS,
} from './constants';

export function login() {
  return { type: LOGIN };
}
export function loginSuccess(user) {
  return { type: LOGIN_SUCCESS, user };
}

export function logout() {
  return { type: LOGOUT };
}
export function logoutSuccess() {
  return { type: LOGOUT_SUCCESS };
}

export function openSignupModal() {
  return { type: OPEN_SIGNUP_MODAL };
}
export function closeSignupModal() {
  return { type: CLOSE_SIGNUP_MODAL };
}

export function openLoginModal() {
  return { type: OPEN_LOGIN_MODAL };
}
export function closeLoginModal() {
  return { type: CLOSE_LOGIN_MODAL };
}

export function checkTronlinkStatus() {
  return { type: CHECK_TRONLINK_STATUS };
}
export function checkTronlinkStatusSuccess() {
  return { type: CHECK_TRONLINK_STATUS_SUCCESS };
}
export function checkTronlinkStatusFail() {
  return { type: CHECK_TRONLINK_STATUS_FAIL };
}

export function updateTronlinkStatus(tronWebState) {
  return { type: UPDATE_TRONLINK_STATUS, tronWebState };
}
export function setWalletAddress(walletAddress) {
  return { type: SET_WALLET_ADDRESS, walletAddress };
}
export function setTronWeb(tronWeb) {
  return { type: SET_TRONWEB, tronWeb };
}

export function getTrxBalance() {
  return { type: GET_TRX_BALANCE };
}
export function getTrxBalanceSuccess(evoBalance, trxBalance) {
  return { type: GET_TRX_BALANCE_SUCCESS, evoBalance, trxBalance };
}
export function getTrxBalanceFail(err) {
  return { type: GET_TRX_BALANCE_FAIL, err };
}

export function getZACoinBalanceSuccess(zaCoinBalance) {
  return { type: GET_ZACOIN_BALANCE_SUCCESS, zaCoinBalance };
}
