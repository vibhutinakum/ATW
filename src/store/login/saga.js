import { takeLatest, put, call } from "redux-saga/effects";
import { GET_LOGIN } from "./actionTypes";
import { getLoginSuccess, getLoginFail } from "./actions";

function* onGetLogin(data) {
  try {
    // const response = yield call(getLogin, data);

    // if (response) {
    //   if (response.code === 200) {
    //     yield put(getLoginSuccess(response));
    //     localStorage.setItem('data', JSON.stringify(response.data.Users));
    //   } else {
    //     yield put(getLoginFail(response.message));
    //     showError(response.message)
    //   }
    // } else {
    //   yield put(getLoginFail("Didn't get api response"));
    // }

    console.log("login saga");
  } catch (error) {
    yield put(getLoginFail(error.response));
  }
}

function* LoginSaga() {
  yield takeLatest(GET_LOGIN, onGetLogin);
}

export default LoginSaga;
