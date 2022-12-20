import { configureStore } from '@reduxjs/toolkit'
import sliceTable from './sliceTable'

export const store = configureStore({
  reducer: {
    table: sliceTable,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      check: false,
    }),
})
