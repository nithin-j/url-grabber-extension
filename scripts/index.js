const inputEl = document.querySelector('#input-el')
const ulEl = document.querySelector('#ul-el')
const alertEL = document.querySelector("#alert-el")
const tabUrlBtn = document.querySelector("#tab-url-btn")

const inputBtn = document.querySelector('#input-btn')
const deleteBtn = document.querySelector('#delete-btn')

// Will implement myLeads array to grab URL, and the website name later on.  
//let myLeads = {
//     title: [],
//     description: []
// }

let myLeads = []
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

console.log (leadsFromLocalStorage)
if(localStorage.length != 0){
    myLeads = leadsFromLocalStorage
    renderLeads(myLeads)
}

function renderLeads(leads){
    // const liNode = document.createElement('li')
    // const textNode = document.createTextNode(inputEl.value)
    // liNode.appendChild(textNode)
    // ulEl.appendChild(liNode)
console.log(typeof leads)
    if(localStorage.length){
        ulEl.className = 'list-class'
        let listItems = ''
        leads.forEach(lead => {
            listItems = `${listItems} <li><a target="_blank" href="${lead}">${lead}<a/></li>`
        });
        ulEl.innerHTML = listItems
    }else{
        ulEl.innerHTML = ''
        ulEl.className = 'null-list-class'
    }
    
}
///Event Listensers
inputBtn.addEventListener("click", function() {

    if(inputEl.value != ''){
        alertEL.textContent = ''
        myLeads.push(inputEl.value)
        
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        
        //clear out input element
        inputEl.value = ''
        myLeads = JSON.parse(localStorage.getItem("myLeads"))
        renderLeads(myLeads)
    }
    else{
        alertEL.textContent = '*requied field missing'
    }
})

tabUrlBtn.addEventListener("click", function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        myLeads = JSON.parse(localStorage.getItem("myLeads"))
        renderLeads(myLeads)
    })
    alertEL.textContent = ''
            
    
        
    //clear out input element
    inputEl.value = ''
    
})

deleteBtn.addEventListener("click", function(){
    localStorage.clear()
    myLeads = JSON.parse(localStorage.getItem("myLeads"))
    renderLeads(myLeads)
})