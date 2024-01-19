import { useState } from "react";

const dummy = () => {
  const [events, setevents] = useState([
    { id: 101, name: "event1", date: "10-6-2024", students: [] },
    { id: 102, name: "event1", date: "10-4-2024", students: [] },
    { id: 103, name: "event1", date: "10-4-2024", students: [] },
  ]);

  const [student, setStudent] = useState({
    id: "",
    name: "",
    eventid: "",
    gender: "",
    sem: "",
  });
  const [e1, sete1] = useState({ id: "", name: "", date: "", students: [] });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (handleValues()) {
      alert("Registered successfuly");
      events.map((e) => {
        if (e.id == student.eventid) {
          e.students.push(student);
        }
      });
      setStudent({ id: "", name: "", eventid: "", gender: "", sem: "" });
    } else return;
  };

  const handleValues = (e) => {
    if (!student.id) {
      alert("please enter student id");

      return false;
    }
    if (!student.name) {
      alert("please enter student name");
      //this.name.focus();
      return false;
    }
    if (!student.eventid) {
      alert("please enter event id ");
      return false;
    }
    if (!student.gender) {
      alert("please select gender");
      return false;
    }
    if (!student.sem) {
      alert("please select semster");
      return false;
    }

    return true;
  };

  const handleInput = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleE1 = (e) => {
    sete1({ ...e1, [e.target.name]: e.target.value });
  };
  const eventSubmit = (e) => {
    e.preventDefault();
    events.push(e1);
    sete1({ id: "", name: "", date: "", students: [] });
  };

  return (
    <>
      {" "}
      <h1>Event Registration Form</h1>
      <h3>Events</h3>
      <ul>
        {events.map((e, index) => {
          return (
            <li key={index}>
              {e.id} {e.name} {e.date}{" "}
              {e.students?.map((student, index) => {
                return (
                  <p key={index}>
                    {" "}
                    {student.id} {student.name} {student.gender} {student.sem}
                  </p>
                );
              })}
            </li>
          );
        })}
      </ul>
      <br />
      <form action="" onSubmit={handleSubmit} align="center">
        <label>
          Student ID:
          <input
            type="number"
            name="id"
            value={student.id}
            onChange={handleInput}
            autoFocus
          />
        </label>
        <br />
        <br />
        <label>
          Student Name:
          <input
            type="text"
            name="name"
            value={student.name}
            onChange={handleInput}
          />
        </label>
        <br />
        <br />
        <label>
          Event ID:
          <input
            type="number"
            name="eventid"
            value={student.eventid}
            onChange={handleInput}
          />
        </label>
        <br />
        <br />
        Gender:
        <br />
        <label htmlFor="">
          Male:
          <input
            type="radio"
            value="male"
            name="gender"
            onChange={handleInput}
          />
        </label>
        <br />
        <label htmlFor="">
          Female:
          <input
            type="radio"
            value="female"
            name="gender"
            onChange={handleInput}
          />
        </label>
        <br />
        <br />
        <label htmlFor="">
          Semester:
          <select name="sem" id="" value={student.sem} onChange={handleInput}>
            <option value="">Select Sem</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select>
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
      <form action="" onSubmit={eventSubmit}>
        <h1>Add event</h1>
        <label>
          Event ID:
          <input
            type="number"
            name="id"
            value={e1.id}
            onChange={handleE1}
            autoFocus
          />
        </label>
        <br />
        <br />
        <label>
          Event Name:
          <input type="text" name="name" value={e1.name} onChange={handleE1} />
        </label>
        <br />
        <br />
        <label>
          Event Date:
          <input type="date" name="date" value={e1.name} onChange={handleE1} />
        </label>
        <br />
        <br />
        <button onClick={eventSubmit}>Add Event</button>
      </form>
    </>
  );
};

export default dummy;
