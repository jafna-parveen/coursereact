import { takeEvery, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import commonApi from '../api';
import appConfig from '../../config';
import * as actionType from './slice';


// ================= CREATE ORDER =================
function* createOrder(action) {

  const orderReq = {
    studentid: action.payload.studentid,
    courseid: action.payload.courseid,
    institutionid: action.payload.institutionid,
    price: action.payload.price
  };

  try {

    const params = {
      api: `${appConfig.ip}/api/createorder`,
      method: 'POST',
      successAction: actionType.createOrderSuccess(),
      failAction: actionType.createOrderFail(),
      authorization: `Bearer`,
      body: JSON.stringify(orderReq)
    };

    const res = yield call(commonApi, params);

    if (res) {
      yield put(actionType.createOrderSuccess(res.data));
      yield call(toast.success, 'Order created successfully', { autoClose: 3000 });
    } else {
      yield call(toast.error, 'Order creation failed', { autoClose: 3000 });
    }

  } catch (error) {
    console.error('Create Order failed:', error);
    yield put(
      actionType.createOrderFail({
        message: error.message || 'Failed to create order',
        status: error.response?.status || 500
      })
    );
    yield call(toast.error, 'Order creation failed', { autoClose: 3000 });
  }
}


// ================= GET INSTITUTION ORDERS =================
function* getInstitutionOrders(action) {

  try {

    const params = {
      api: `${appConfig.ip}/api/institution-dashboard/${action.payload}`,
      method: 'GET',
      successAction: actionType.getInstitutionOrdersSuccess(),
      failAction: actionType.getInstitutionOrdersFail(),
      authorization: `Bearer`
    };

    const res = yield call(commonApi, params);

    if (res) {
      yield put(actionType.getInstitutionOrdersSuccess(res));
    }

  } catch (error) {
    console.error('Fetch Orders failed:', error);
    yield put(
      actionType.getInstitutionOrdersFail({
        message: error.message || 'Failed to fetch orders',
        status: error.response?.status || 500
      })
    );
    yield call(toast.error, 'Failed to load orders', { autoClose: 3000 });
  }
}


// ================= WATCHER =================
export default function* OrderWatcher() {
  yield takeEvery(actionType.createOrder, createOrder);
  yield takeEvery(actionType.getInstitutionOrders, getInstitutionOrders);
}
