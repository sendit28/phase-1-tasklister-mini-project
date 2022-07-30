document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#create-task-form")
  // Issue when we click the submit button 

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const taskValue = event.target["new-task-description"].value
    const priorityValue = event.target.priority.value
    
    //find the ul so that we can append
    const ul = document.querySelector("#tasks")
    const li = document.createElement('li')

    li.textContent = taskValue

    // Add a button, the textContent of x
    // The button should remove li
    const button = document.createElement("button")
    button.textContent = "x"
    button.addEventListener('click', (event) => event.target.parentElement.remove())
        
    li.remove

    
    li.append(" ", button)
    
    ul.append(li)

    event.target.remove()
  
    })
 
});
