let inputEl = document.querySelector('#input-el')
const inputBtn = document.querySelector('#input-btn')
let ulEl = document.querySelector('#ul-el')

// Will implement myLeads array to grab URL, and the website name later on.  
//let myLeads = {
//     title: [],
//     description: []
// }

let myLeads = []



inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    console.log(myLeads)
    inputEl.value = ''
    ulEl.className = 'list-class'

    ulEl.innerHTML = `<li>${myLeads.forEach(lead => {
        lead
    })}</li>`
    // myLeads.forEach(lead => {
    //     ulEl.innerHTML = `<li>${lead}</li>`
    // });
})
