const inputEl = document.querySelector('#input-el')
const ulEl = document.querySelector('#ul-el')
const alertEL = document.querySelector("#alert-el")

const inputBtn = document.querySelector('#input-btn')
const deleteBtn = document.querySelector('#delete-btn')
// Will implement myLeads array to grab URL, and the website name later on.  
//let myLeads = {
//     title: [],
//     description: []
// }

let myLeads = []


if(localStorage.length != 0){
    renderLeads()
}


inputBtn.addEventListener("click", function() {

    if(inputEl.value != ''){
        alertEL.textContent = ''
        myLeads.push(inputEl.value)
        
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        myLeads.length = 0
        
        //clear out input element
        inputEl.value = ''
        renderLeads()
    }
    else{
        alertEL.textContent = '*requied field missing'
    }
})

function renderLeads(){
    // const liNode = document.createElement('li')
    // const textNode = document.createTextNode(inputEl.value)
    // liNode.appendChild(textNode)
    // ulEl.appendChild(liNode)

    if(localStorage.length){
        ulEl.className = 'list-class'
    myLeads = JSON.parse(localStorage.getItem("myLeads"))
    let listItems = ''
    myLeads.forEach(lead => {
        listItems = `${listItems} <li><a target="_blank" href="${lead}">${lead}<a/></li>`
    });
    ulEl.innerHTML = listItems
    }else{
        ulEl.innerHTML = ''
        ulEl.className = 'null-list-class'
    }
    
}

deleteBtn.addEventListener("click", function(){
    localStorage.clear()
    renderLeads()
})

