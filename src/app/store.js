import { configureStore, createListenerMiddleware } from '@reduxjs/toolkit';
import authSlice, { getuser, updateuser } from '../features/auth/authSlice';
import transactionSlice, { addBalance, getReceivedTransactions, getSendTransactions, getTransactions, sendMoney } from '../features/transactions/transactionSlice';
import requestSlice, { requestReceive, requestSend, sendRequest, updateRequest } from '../features/request/requestSlice';
import uploadSlice, { getUserImage, uploadProfileImage } from '../features/upload/uploadSlice';
import verifySlice from '../features/verify/verifySlice';

const monitoredThunks = [
  addBalance,
  sendMoney,
  getTransactions,
  getSendTransactions,
  getReceivedTransactions,
  sendRequest,
  requestSend,
  requestReceive,
  updateRequest,
  updateuser,
  uploadProfileImage,
  getUserImage
];

const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
  matcher: (action) => 
    monitoredThunks.some((thunk) => action.type === thunk.fulfilled.type),
  effect: async (action, { dispatch }) => {
    await dispatch(getuser());
  },
});

export const store = configureStore({
  reducer: {
    auth: authSlice,
    transact: transactionSlice,
    request: requestSlice,
    upload: uploadSlice,
    verify: verifySlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(listenerMiddleware.middleware)
});
