import { nanoid } from 'nanoid'

async function fetchTickets(searchId, api, prevTickets, dispatch) {
  console.log(prevTickets, 'prevTickets')
  console.log(dispatch, 'dispatch')
  const { data } = await api.get(`/tickets?searchId=${searchId}`)
  const newTickets = data.tickets.map((ticket) => ({ ...ticket, id: nanoid() }))
  const tickets = [...prevTickets, ...newTickets]
  console.log(tickets, 'tickets')
}

export function fetchAllTickets() {
  return async function (dispatch, _getState, api) {
    try {
      const searhResponse = await api.get('/search')
      const searchId = searhResponse.data.searchId
      console.log(searchId)
      fetchTickets(searchId, api, [], dispatch)
    } catch (err) {
      console.log(err)
    }
  }
}
