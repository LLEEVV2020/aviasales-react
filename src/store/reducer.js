import { createSlice, current } from '@reduxjs/toolkit'

import { FilterType } from '../constants'

const initialState = {
  filters: Object.values(FilterType),
}

function getCurrentTickets(tickets, sortType, filters) {
  console.log(tickets, 'tickets')
  console.log(sortType, 'sortType')
  console.log(filters, 'filters')
  //const filteredTickets = getFilteredTickets(tickets, filters);
  //const sortedAndFilteredTickets = getSortedTickets(filteredTickets, sortType);

  //return sortedAndFilteredTickets;
}

export const flightsSlice = createSlice({
  name: 'flights',
  initialState,
  reducers: {
    changeFilterTypeAction: (state, action) => {
      state.filters = action.payload
      const currentState = current(state)
      getCurrentTickets(currentState.tickets, currentState.sortType, currentState.filters)

      //console.log(currentState, 'currentState')
      //console.log(state.filters, 'state.filters')
      //console.log(action.payload, 'action.payload')

      //const currentState = current(state)
      //state.currentTickets = getCurrentTickets(currentState.tickets, currentState.sortType, currentState.filters)
    },
  },
})

export const { changeFilterTypeAction } = flightsSlice.actions

export default flightsSlice.reducer
