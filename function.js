const taskContainer = document.querySelector(".task__container");
 console.log(taskContainer);
const saveChanges = () => {
    const taskData = {
        id: `${Date.now()}`,
        imageUrl: document.getElementById("imageurl").value,
        taskTitle: document.getElementById("tasktitle").value,
        taskType: document.getElementById("tasktype").value,
        taskDescription: document.getElementById("taskdescription").value
    };
    const newCard = `
    <div class="col-sm-12 col-md-6 col-lg-4" id=${taskData.id}>
        <div class="card">
          <div class="card-header d-flex justify-content-end gap-2">
            <button type="button" class="btn btn-outline-success"><i class="fa-solid fa-pencil"></i></button>
            <button type="button" class="btn btn-outline-danger"><i class="fa-solid fa-trash"></i></button>
          </div>
          <div class="card-body">
            <img class="card-img-top" src=${taskData.imageUrl} alt="...">
            <h5 class="card-title fw-bold text-primary">${taskData.taskTitle}</h5>
            <p class="card-text">${taskData.taskDescription}</p>
            <a href="#" class="btn btn-primary">${taskData.taskType}</a>
          </div>
        </div>
    </div>`;
    taskContainer.insertAdjacentHTML("beforeend" ,newCard);
};