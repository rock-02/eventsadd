import "./Event.css";

const Events = () => {
  const [events, setEvents] = useState([
    {
      id: 1,
      name: "event 1",
      description: "description 1",
      date: "2021-01-01",
      students: [],
    },
    // ... other events ...
  ]);

  const [newEvent, setNewEvent] = useState({
    id: "",
    name: "",
    description: "",
    date: "",
    students: [],
  });

  const addNewEvent = () => {
    setEvents([...events, newEvent]);
    setNewEvent({
      id: "",
      name: "",
      description: "",
      date: "",
      students: [],
    });
  };

  const [student, setStudent] = useState({ id: "", name: "", eventId: "" });

  const handleInputChange = (event) => {
    setStudent({ ...student, [event.target.name]: event.target.value });
  };

  const handleValidation = () => {
    if (student.id == null || student.id === "") {
      alert("id must be between 1 and 9 or should not be empty");
      return false;
    }
    if (student.name == null || student.name === "") {
      alert("name should not be empty");
      return false;
    }
    if (student.eventId > 9 || student.eventId < 1 || student.eventId == null) {
      alert("event id must be between 1 and 9 or should not be empty");
      return false;
    }

    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (handleValidation()) {
      if (student.id && student.name && student.eventId) {
        events.forEach((e) => {
          if (e.id == student.eventId) {
            e.students.push(student);
          }
        });
      }
    }
    setStudent({ id: "", name: "", eventId: "" });
  };

  return (
    <div>
      {events.map((e, index) => (
        <div key={index}>
          <h1>{e.name}</h1>
          <h2>{e.description}</h2>
          <h3>{e.date}</h3>
          <h4>Students</h4>
          {e.students.map((s, index) => (
            <div key={index}>
              <h5>{s.id}</h5>
              <h5>{s.name}</h5>
              <h5>{s.eventId}</h5>
            </div>
          ))}
          ---------------------------------------------
        </div>
      ))}
      <form onSubmit={handleSubmit}>
        <label>
          Student ID:
          <input
            type="text"
            name="id"
            value={student.id}
            onChange={handleInputChange}
          />
        </label>
        <br />

        <label>
          Student Name:
          <input
            type="text"
            name="name"
            value={student.name}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Event ID:
          <input
            type="text"
            name="eventId"
            value={student.eventId}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="submit">Add Student</button>
      </form>

      <input
        type="text"
        name="id"
        value={newEvent.id}
        onChange={(e) => setNewEvent({ ...newEvent, id: e.target.value })}
        placeholder="ID"
      />
      <input
        type="text"
        name="name"
        value={newEvent.name}
        onChange={(e) => setNewEvent({ ...newEvent, name: e.target.value })}
        placeholder="Name"
      />
      <input
        type="text"
        name="description"
        value={newEvent.description}
        onChange={(e) =>
          setNewEvent({ ...newEvent, description: e.target.value })
        }
        placeholder="Description"
      />
      <input
        type="text"
        name="date"
        value={newEvent.date}
        onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
        placeholder="Date"
      />
      <button type="button" onClick={addNewEvent}>
        Add Event
      </button>
    </div>
  );
};

export default Events;
