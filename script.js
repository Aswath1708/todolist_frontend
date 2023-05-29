let input=document.getElementById('task-btn')
let due=document.getElementById('date-btn')
let priority=document.getElementById('priority')
let addbtn=document.getElementById('add-btn')
let listContainer=document.getElementById('todo-container')
let list=document.getElementById('todo-list')


addbtn.addEventListener('click',(event)=>{
    event.preventDefault();
    let liEl=document.createElement('span')
    liEl.setAttribute('class','todo-items')
    let pEl=document.createElement('p')
    let pEl2=document.createElement('p')
    let Completebtn=document.createElement('button')
    Completebtn.setAttribute('class','complete-btn')
    Completebtn.textContent='Completed'
    Completebtn.style.color='white'
    Completebtn.style.backgroundColor='blue'
    Completebtn.style.borderRadius='5px'
    Completebtn.style.margin='5px'
    let Deletebtn=document.createElement('button')
    Deletebtn.setAttribute('class','trash-btn')
    Deletebtn.textContent='Delete'
    Deletebtn.style.color='white'
    Deletebtn.style.backgroundColor='blue'
    Deletebtn.style.margin='5px'
    Deletebtn.style.borderRadius='5px'
    pEl.textContent=`${input.value}`
    pEl.style.fontWeight='bold'
    pEl2.textContent=`${due.value}`
    liEl.style.padding='10px'
    liEl.style.borderRadius='5px'
    liEl.style.textAlign='center'
    if(priority.value==='high'){
        liEl.style.backgroundColor="#FA5F55"
    }else if(priority.value==='medium'){
        liEl.style.backgroundColor='#FFC300'
    }else{
        liEl.style.backgroundColor='#4CBB17'
    }
    liEl.appendChild(pEl)
    liEl.appendChild(pEl2)
    liEl.appendChild(Completebtn)
    liEl.appendChild(Deletebtn)
    list.appendChild(liEl)
    Completebtn.addEventListener('click',()=>{
        pEl.classList.toggle('checked')
    })
    Deletebtn.addEventListener('click',()=>{
        Deletebtn.parentNode.remove()
    })
})