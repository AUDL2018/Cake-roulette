function Student(name, broughtCake) {
  this.name = name
  this.broughtCake = broughtCake
}

let listOfStudents = [
  new Student('Anne Andersen', false),
  new Student('Lena Buhl', false),
  // new Student('Klaudia Egadova', false),
  new Student('Carmen F. Jitaru', false),
  new Student('Sonia K. Johansen', false),
  new Student('Tanja K. Johansen', true),
  new Student('Dimitra, Mavrogonatou', false),
  new Student('Radina P. Nedeleva', false),
  new Student('Sara D. Nicolajsen', false),
  new Student('Ida S. Nielsen', false),
  new Student('Nathalia Novais Sathler Oliveira', false),
  new Student('Casper B. Pedersen', false),
  new Student('Oline K. S. Poulsen', false),
  new Student('Stanislav Pozdniakov', false),
  // new Student('Giulio Rosadoni', false),
  new Student('Henrik Schütze', false),
  // new Student('Jan Strajnar', false),
  // new Student('Gita M. Thomassen', false),
  new Student('Katarina Tökölyova', false),
  new Student('Rina Vijayasundaram', false)
]

console.log('All students', listOfStudents)

let selectedStudent = false
let student = null

while(selectedStudent === false) {
  student = listOfStudents[Math.floor(Math.random() * listOfStudents.length)]
  selectedStudent = ! student.broughtCake ? student : false
}

document.querySelector('#student').innerHTML = student.name;
