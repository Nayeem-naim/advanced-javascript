const student = [
    { id: 42, name: 'Omar Kan' },
    { id: 72, name: 'Nayeem kan mojin'},
    { id: 12, name: 'kolim kan molla'},
    { id: 52, name: 'solim kan moja'},
    { id: 62, name: 'pagla kan'}
]
// const resultName = [];
// for (let i = 0; i < student.length; i++) {
//     const element = student[i];
//     const names = element.name;
//     resultName.push(names);
// }
// console.log(resultName);

const names = student.map(s => s.name);
const ids = student.map(s => s.id);
// const bigger = student.filter(s => s.id > 40);
const bigger = student.find(s => s.id > 40);

console.log(bigger);