import { createSlice, current } from '@reduxjs/toolkit'

import { SortType, FilterType, TOTAL_TICKET_AMOUNT } from '../constants'

const initialState = {
  filters: Object.values(FilterType),
  sortType: SortType.Cheapest,
  tickets: [],
  isDataLoadig: true,
  loadingProgress: 0,
}

/*function getFilteredTickets(tickets, filters) {
  const currentFilters = Object.values(FilterType).filter((el) => filters.find((filter) => filter.value === el.value))
  let filteredTickets = []

  if (currentFilters.includes(FilterType.All)) {
    filteredTickets = tickets.slice()
  } else {
    if (currentFilters.includes(FilterType.Zero)) {
      filteredTickets = [
        ...filteredTickets,
        ...tickets.filter((ticket) => ticket.segments.every((item) => item.stops.length === 0)),
      ]
    }
    if (currentFilters.includes(FilterType.One)) {
      filteredTickets = [
        ...filteredTickets,
        ...tickets.filter((ticket) => ticket.segments.every((item) => item.stops.length === 1)),
      ]
    }
    if (currentFilters.includes(FilterType.Two)) {
      filteredTickets = [
        ...filteredTickets,
        ...tickets.filter((ticket) => ticket.segments.every((item) => item.stops.length === 2)),
      ]
    }
    if (currentFilters.includes(FilterType.Three)) {
      filteredTickets = [
        ...filteredTickets,
        ...tickets.filter((ticket) => ticket.segments.every((item) => item.stops.length === 3)),
      ]
    }
  }

  return filteredTickets
}*/

function getCurrentTickets(tickets, sortType, filters) {
  console.log(tickets, 'tickets')
  console.log(sortType, 'sortType')
  console.log(filters, 'filters')
  //const filteredTickets = getFilteredTickets(tickets, filters)
  //const sortedAndFilteredTickets = getSortedTickets(filteredTickets, sortType);
  //console.log(filteredTickets, 'filteredTickets')
  //return sortedAndFilteredTickets;
}

export const flightsSlice = createSlice({
  name: 'flights',
  initialState,
  reducers: {
    changeFilterTypeAction: (state, action) => {
      state.filters = action.payload
      const currentState = current(state)
      state.currentTickets = getCurrentTickets(currentState.tickets, currentState.sortType, currentState.filters)

      //console.log(currentState, 'currentState')
      //console.log(state.filters, 'state.filters')
      //console.log(action.payload, 'action.payload')

      //const currentState = current(state)
      //state.currentTickets = getCurrentTickets(currentState.tickets, currentState.sortType, currentState.filters)
    },
    changeSortTypeAction: (state, action) => {
      state.sortType = action.payload
      const currentState = current(state)
      state.currentTickets = getCurrentTickets(currentState.tickets, currentState.sortType, currentState.filters)
    },
    setTicketsAction: (state, action) => {
      state.tickets = action.payload
      const currentState = current(state)
      state.currentTickets = getCurrentTickets(currentState.tickets, currentState.sortType, currentState.filters)
    },
    toggLoadingAction: (state) => {
      state.isDataLoadig = !state.isDataLoadig
    },
    changeLoadingProgressAction: (state, action) => {
      state.loadingProgress = Math.round((action.payload / TOTAL_TICKET_AMOUNT) * 100)
    },
  },
})

export const {
  changeFilterTypeAction,
  changeSortTypeAction,
  setTicketsAction,
  toggLoadingAction,
  changeLoadingProgressAction,
} = flightsSlice.actions

export default flightsSlice.reducer
