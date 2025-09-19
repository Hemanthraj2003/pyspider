let form = document.querySelector("form");

// the below approach will only allow us to add one event listner, and latest will override the previous one
// form.onsubmit = function (e) {
//   e.preventDefault();
// };

const addTask = (taskObject) => {
  console.log("Adding task:", taskObject);
};

function handleSubmit(e) {
  e.preventDefault();
  const taskObj = {
    id: Date.now(),
    taskName: e.target.hello.value,
  };
  addTask(taskObj);
}

form.addEventListener("submit", handleSubmit);
