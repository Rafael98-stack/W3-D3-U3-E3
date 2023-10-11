window.onload = () => {
    const form = document.getElementById("myform")
    const cancelButton = document.querySelector(`#buttonArea button[type="button"]`)
    console.log(cancelButton)
    cancelButton.onclick = function () {
       const hasConfirmed = confirm("sei sicuro di cancellare?")
       if (hasConfirmed) {
        form.reset()
       }
    }
    form.onsubmit = function (e) {
        e.preventDefault()
        const noteInput = document.getElementById("note")
const note = noteInput.value

const main = document.getElementsByTagName("main")[0]

const card = document.createElement("div")
card.className = "card"

const h2 = document.createElement("h2")
h2.innerText = `${note}`

const button = document.createElement("button")
button.innerText = "Cancella"

button.onclick = function(e) {
    const clickedBtn = e.target
    clickedBtn.parentNode.remove()
}

card.appendChild(h2)
card.appendChild(button)
main.appendChild(card)

note.value = ""

        console.log("FORM INVIATO!!")
        console.log(e)
    }
}