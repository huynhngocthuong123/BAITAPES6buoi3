export default class workList {
  work = [];
  constructor(job) {
    this.job = job;
  }
  add(job) {
    this.work.push(job);
  }
  show() {
    document.getElementById("todo").innerHTML = "";
    let content = "";
    this.work.map((product, index) => {
      //   console.log(index);
      content += `
        <li>
        <span>${product.job}</span>
        <div>
        <button onclick="remove('${index}')" class="btn p-0"><i class="fa fa-trash-alt"></i></button>
        <button onclick="checkComplete('${index}',${true})" class="btn p-0"><i class="fa fa-check-circle"></i></button>
        </div>
        </li>
        `;
      document.querySelector("#todo").innerHTML = content;
    });
  }
  remove(index) {
    // console.log(index);
    this.work.splice(index, 1);
    this.show();
  }
}
