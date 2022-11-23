const welcomeMsg = document.getElementById("welcome");
const queryStr = document.location.search
const queries = new URLSearchParams(queryStr)
const username = queries.get("username")

welcomeMsg.innerText = `Welcome ${username}! 🎉`;