import { configureStore } from '@reduxjs/toolkit'
import { createApi } from '../api'

export default configureStore({
  reducer: {},
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: createApi(),
      },
      serializableCheck: false,
    })
})
