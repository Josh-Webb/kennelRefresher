const remoteURL = "https://kennelapi.herokuapp.com/"

export default {
    get(id) {
        return fetch(`${remoteURL}/owners/${id}`).then(result => result.json())
    },
    getAll() {
        return fetch(`${remoteURL}/owners`).then(result => result.json())
    },
    delete(id) {
        return fetch(`https://kennelapi.herokuapp.com//owners/${id}`, {
            method: "DELETE"
        })
        .then(result => result.json())
    },
    post(newOwner) {
        return fetch(`${remoteURL}/owners`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newOwner)
        }).then(data => data.json())
    }
}