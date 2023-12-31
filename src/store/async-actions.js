import { nanoid } from 'nanoid'

import { setActionTickets, toggActionLoading, changeActionLoadingProgress, setActionError } from './reducer'

async function fetchTickets(searchId, api, prevTickets, dispatch) {
  try {
    const { data } = await api.get(`/tickets?searchId=${searchId}`)
    const newTickets = data.tickets.map((ticket) => ({ ...ticket, id: nanoid() }))
    const tickets = [...prevTickets, ...newTickets]

    if (!prevTickets.length) dispatch(toggActionLoading())

    dispatch(setActionTickets(tickets))
    dispatch(changeActionLoadingProgress(tickets.length))

    if (!data.stop) {
      return await fetchTickets(searchId, api, tickets, dispatch)
    } else {
      return tickets
    }
  } catch (err) {
    const { response } = err

    if (response && response.status === 500) {
      return await fetchTickets(searchId, api, prevTickets, dispatch)
    } else {
      dispatch(toggActionLoading())
      dispatch(setActionError(err))
      return Promise.resolve(prevTickets)
    }
  }
}

export function fetchAllTickets() {
  return async function (dispatch, _getState, api) {
    try {
      const searhResponse = await api.get('/search')
      const searchId = searhResponse.data.searchId
      fetchTickets(searchId, api, [], dispatch)
    } catch (err) {
      dispatch(toggActionLoading())
      dispatch(setActionError(err))
    }
  }
}
