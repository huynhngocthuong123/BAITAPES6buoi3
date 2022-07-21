import workList from "./workList.js";
export default class workDone extends workList {
  workDone = [];
  constructor(...parmar) {
    super(...parmar);
  }
  add(job) {
    this.workDone.push(job);
  }
  show() {
    document.querySelector("#completed").innerHTML = "";
    let content = "";
    this.workDone.map((product, index) => {
      //   console.log(index);
      content += `
            <li>
            <span>${product.job}</span>
            <div>
            <button onclick="removeWorkDone('${index}')" class="btn p-0"><i class="fa fa-trash-alt"></i></button>
            <span class="btn p-0"><i class="fa fa-check-circle" style="color: green"></i></span>
            </div>
            </li>
            `;
      document.querySelector("#completed").innerHTML = content;
    });
  }
  removeWorkDone(index) {
    // console.log(index);
    this.workDone.splice(index, 1);
    this.show();
  }
  sortjob(value) {
    if (value === 1) {
      this.work.sort();
      this.workDone.sort();
    } else {
      this.work.reverse();
      this.workDone.reverse();
    }
  }
}
