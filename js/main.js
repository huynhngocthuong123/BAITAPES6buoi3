// console.log("hello");
import workDone from "./workDone.js";
import workList from "./workList.js";
let ListJob = new workList();
let ListJobDone = new workDone();

document.querySelector("#addItem").addEventListener("click", () => {
  let input = document.querySelector("#newTask").value;
  let work = new workList(input);
  ListJob.add(work);
  console.log(ListJob.work);
  ListJob.show();
});
let checkComplete = (index, complete) => {
  let check = complete;
  if (check == true) {
    let { job } = ListJob.work[index];
    let work = new workDone(job);
    ListJobDone.add(work);
    remove(index);
    ListJobDone.show();
  }
};
let removeWorkDone = (index) => {
  ListJobDone.removeWorkDone(index);
};
let remove = (index) => {
  ListJob.remove(index);
};
document.querySelector("#two").addEventListener("click", () => {
  ListJobDone.sortjob(1);
  ListJob.show();
  ListJobDone.show();
});
document.querySelector("#three").addEventListener("click", () => {
  ListJobDone.sortjob(2);
  ListJob.show();
  ListJobDone.show();
});
window.remove = remove;
window.checkComplete = checkComplete;
window.removeWorkDone = removeWorkDone;
