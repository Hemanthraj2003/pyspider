let form = document.querySelector("form");
let task = [];

// the below approach will only allow us to add one event listner, and latest will override the previous one
// form.onsubmit = function (e) {
//   e.preventDefault();
// };

const addTask = (taskObject) => {
  task.push(taskObject);
  console.log(task);
};
function handleSubmit(e) {
  e.preventDefault();
  const taskObj = {
    id: Date.now(),
    taskName: e.target.hello.value,
  };
  addTask(taskObj);
}

function getAllTask() {
  console.log(task);
}
form.addEventListener("submit", handleSubmit);
