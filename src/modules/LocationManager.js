const remoteURL = "https://kennelapi.herokuapp.com/"

export default {
  get(id) {
    return fetch(`${remoteURL}/locations/${id}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/locations`).then(result => result.json())
  },
  delete(id) {
    return fetch(`https://kennelapi.herokuapp.com//locations/${id}`, {
        method: "DELETE"
    })
    .then(result => result.json())
  },
  post(newLocation) {
    return fetch(`${remoteURL}/locations`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newLocation)
    }).then(data => data.json())
  }
}