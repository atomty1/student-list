import { useState } from "react";
import  "./App.css";


function App() {
  let [name, setName] = useState("");
  let [dept, setDept] = useState("");
  let [school, setSchool] = useState("");
  let [allStudents, setAllStudents] = useState([]);
  const addStudent = ()=>{
    let newStudent = {name, dept, school, edit: false };
    setAllStudents([...allStudents, newStudent]);
    setName("");
    setDept("");
    setSchool("");
    // console.log(name, "name");
    // console.log(dept, "department");
    // console.log(school, "sch");
  }
  const deleteStudent = index=>{
      let filteredStudents = allStudents.filter((_, i)=>i !==index);
      setAllStudents(filteredStudents);
  }
  const editStudent = i=>{
      let myStudents = [...allStudents];
      let found = myStudents.find((_, ind)=>ind ===i);
      found.edit = true;
      // console.log(myStudents);
      setAllStudents(myStudents);
  }

  let val = "";
  const setNewEdit = e=>{
    val = e.target.value;
  
  }
  const saveEdit = i =>{
    let myStudents = [...allStudents];
    let found = myStudents.find((_, ind)=>ind ===i);
    found.name= val;
    found.edit = false;
    // console.log(myStudents);
    setAllStudents(myStudents);
  }
  return (
    <div>
        <input value={name} onChange={e=>setName(e.target.value)} placeholder="name"/>
        <input value={dept} onChange={e=>setDept(e.target.value)} placeholder="dept"/>
        <input value={school} onChange={e=>setSchool(e.target.value)} placeholder="school"/>
        <button onClick={addStudent}>add student</button>
        {allStudents.length > 0? <table>
            <thead>
                <tr>
                  <th>S/N</th>
                  <th>Name</th>
                  <th>Dept</th>
                  <th>School</th>
                  <th>edit</th>
                  <th>delete</th>
                </tr>
            </thead>
            <tbody>
              {allStudents.map((student, i)=>(
                <tr key={i}>
                  <td>{i+1}</td>
                  <td>{!student.edit ? student.name: <input onChange={setNewEdit}/>}</td>
                  <td>{student.dept}</td>
                  <td>{student.school}</td>
                  <td>{student.edit?
                  <button onClick={()=>saveEdit(i)}>save edit</button>
                  : <button onClick={()=>editStudent(i)}>edit</button>}</td>
                  <td><button onClick={()=>deleteStudent(i)}>delete</button></td>
                </tr>
              ))}
            </tbody>
        </table>
        : <div>No student yet</div>}

    </div>
  );
}

export default App;
