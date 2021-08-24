const inputEl = document.querySelector('#input-el')
const inputBtn = document.querySelector('#input-btn')
const ulEl = document.querySelector('#ul-el')

// Will implement myLeads array to grab URL, and the website name later on.  
//let myLeads = {
//     title: [],
//     description: []
// }

let myLeads = []



inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    ulEl.className = 'list-class'
    
    renderLeads()

    //clear out input element
    inputEl.value = ''
})

function renderLeads(){
    // const liNode = document.createElement('li')
    // const textNode = document.createTextNode(inputEl.value)
    // liNode.appendChild(textNode)
    // ulEl.appendChild(liNode)

    let listItems = ''
    myLeads.forEach(lead => {
        listItems = `${listItems} <li><a target="_blank" href="${lead}">${lead}<a/></li>`
    });
    ulEl.innerHTML = listItems
}
