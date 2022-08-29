const editBtn = document.querySelectorAll('.edit')
const herb = document.querySelectorAll('span.herb')
const deleteBtn = document.querySelectorAll('.delete')

Array.from(editBtn).forEach((el)=>{
    el.addEventListener('click', editHerb)
})

Array.from(deleteBtn).forEach((el)=>{
    el.addEventListener('click', deleteHerb)
})

Array.from(herb).forEach((el)=>{
    el.addEventListener('click', viewHerb)
})

async function deleteHerb(){
    const herbId = this.parentNode.dataset.id
    try{
        const response = await fetch('herbs/deleteHerb', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'herbIdFromJSFile': herbId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function editHerb(){
    const herbId = this.parentNode.dataset.id
    try{
        const response = await fetch('herbs/editHerb', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'herbIdFromJSFile': herbId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function viewHerb(){
    const herbId = this.parentNode.dataset.id
    try{
        const response = await fetch('herbs/viewHerb', {
            method: 'get',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'herbIdFromJSFile': herbId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}