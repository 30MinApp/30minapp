async function showMe() {
    const res = await fetch("https://thirtyminapp-api.herokuapp.com/persons/1")
    const data = await res.json()

    document.getElementById("name").innerText = data.name
    document.getElementById("bday").innerText = data.bday
}