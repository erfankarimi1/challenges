export default function List(){

    const students = ["Erfan","Robert", "Lauren", "Ruki", "Mahdavi", "Cansu", "Bernard"];
    const filteredItems = students.filter(student => student.startsWith('R'));

    return <ol>{filteredItems.map(student => <li key={student}>{student}</li>)}</ol>;
}
