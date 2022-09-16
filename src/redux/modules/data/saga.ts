import { takeLatest, call, put } from 'redux-saga/effects';
import { ADD_DATA, GET_DATA } from '../../../constants/actions';
import { App_Service } from '../../../services';
import {
  getUserDataSuccess,
  getUserDataFailure,
  addUserDataFailure,
  addUserDataSuccess,
} from './actions';

type APIResponseProps = {
  success: boolean;
  data?: any;
  error?: any;
};

export function* getUserData() {
  try {
    const response: APIResponseProps = yield call(App_Service, {
      endPoint: '/users',
      method: 'GET',
    });

    if (response.success) {
      yield put(getUserDataSuccess(response.data));
    } else {
      yield put(getUserDataFailure(response.error));
    }
  } catch (e) {
    console.log(e);
  }
}

export function* addUserData(params: any) {
  try {
    const response: APIResponseProps = yield call(App_Service, {
      endPoint: '/users',
      method: 'POST',
      params: params.data,
    });

    if (response.success) {
      yield getUserData();
      yield put(addUserDataSuccess());
    } else {
      yield put(addUserDataFailure(response.error));
    }
  } catch (e) {
    console.log(e);
  }
}

export default function* userSaga() {
  yield takeLatest(GET_DATA.REQUEST, getUserData);
  yield takeLatest(ADD_DATA.REQUEST, addUserData);
}
