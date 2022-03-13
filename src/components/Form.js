import React, { useState } from "react";


const Form = (props) => {
  const [userName, setUserName] = useState("");
  const userNameHandler = (e) => {
    setUserName(e.target.value);
  };
  const [userEmail, setUserEmail] = useState("");
  const userEmailHandler = (e) => {
    setUserEmail(e.target.value);
  };

  const [students, setStudents] = useState(props.data);
  console.log(students);
  const submitHandler = () => {
    console.log("submit button clicked");
    if (!userName || !userEmail) {
      alert("All inputs are required");
      return;
    }

    // do some logics with the form data
    console.log("Values", userName, userEmail);

    let student = {
      name: userName,
      email: userEmail,
    };

    setStudents([...students, student]);

    setUserName("");
    setUserEmail("");
  };
  const onDeleteHandler = (email) => {

    console.log("email"+email);
    let newStudents = students.filter((student) => student.email !== email);

    setStudents(newStudents);
  };
  const onUpdateHandler = () => {};
  return (
    <div>
      <form>
        <div className="form-row pt-5 ps-5">
          <div className="text-start"> Name: {userName}</div>
          <div className="col-6 mb-4">
            <input
              type="text"
              onChange={userNameHandler}
              value={userName}
              className="form-control"
              placeholder="Name"
            />
          </div>
          <div className="col-6 mb-4">
            <input
              type="text"
              onChange={userEmailHandler}
              value={userEmail}
              className="form-control"
              placeholder="Email"
            />
          </div>
          <div className="text-start">
            <button
              type="button"
              onClick={submitHandler}
              class="btn btn-primary "
            >
              Submit
            </button>
          </div>
        </div>
      </form>
      <h1>List of Students</h1>
      <table class="table table-bordered">
        <thead>
          <tr className="customTable">
            <th>No.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        {students.map((item, index) => {
          console.log("item" + item);

          return (
            <tbody>
              <tr key={index} className="customTable">
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>

                <td>
                  <button onClick={() => onDeleteHandler(item.email)}>
                    Delete
                  </button>

                  <button onClick={() => onUpdateHandler(item, index)}>
                    Update
                  </button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
      
    </div>
    
  )
}

export default Form;
