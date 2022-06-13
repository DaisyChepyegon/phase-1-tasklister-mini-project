document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form=document.querySelector('form')
  form.addEventListener('submit',(e)=>{
    e.preventDefault()
    createTask(e.target.new-task-description.value)
    form.reset()
  })
});
function createTask(task){
  let li = document.createElement("li")
  let btn = document.createElement('button')
  btn.addEventListener('click',handleDelete)
  btn.textContent='x'
  li.textContent=task
  li.appendChild(btn)
  console.log('li')
  document.querySelector('#tasks').appendChild('li')
  
 
  
  
}
function handleDelete(e){
  e.target.parentNode.remove()
}
