import { useState } from "react";
import "./App.css";
import DateTimePicker from "react-datetime-picker";

function App() {
  const [employeeId, setEmployeeId] = useState("");
  const [groupId, setGroupId] = useState("");
  const [anwserOn, setAnswersOn] = useState(new Date());
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");
  const [answer4, setAnswer4] = useState("");
  const [answer5, setAnswer5] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const answer = {
      employeeId,
      groupId,
      anwserOn,
      answer1,
      answer2,
      answer3,
      answer4,
      answer5,
    };
    fetch("http://localhost:8000/anwser", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(answer),
    }).then(() => {
      console.log("Added");
    });
  };

  return (
    <div className="App">
      <div className="container ">
        <h2 className="title mt-4"> Questions about your health</h2>
        <div className="form-box">
          <form onSubmit={handleSubmit}>
            <div className="form-group mt-4">
              <label>EmployeeID</label>
              <input
                type="number"
                className="form-control"
                value={employeeId}
                placeholder="employee ID"
                onChange={(e) => setEmployeeId(e.target.value)}
              />
            </div>
            <div className="form-group mt-4">
              <label>Group ID</label>
              <select
                className="form-control"
                id="exampleFormControlSelect1"
                value={groupId}
                onChange={(e) => setGroupId(e.target.value)}
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
            <div className="form-time mt-4 mb-4">
              <label className="m-4">Date</label>
              <DateTimePicker
                onChange={(e) => setAnswersOn(e.target.value)}
                value={anwserOn}
              />
            </div>
            <div className="form-group">
              <label>Answer-1</label>
              <select
                className="form-control"
                value={answer1}
                onChange={(e) => setAnswer1(e.target.value)}
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
            <div className="form-group">
              <label>Answer-2</label>
              <select
                className="form-control"
                value={answer2}
                onChange={(e) => setAnswer2(e.target.value)}
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
            <div className="form-group">
              <label>Answer-3</label>
              <select
                className="form-control"
                value={answer3}
                onChange={(e) => setAnswer3(e.target.value)}
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
            <div className="form-group">
              <label>Answer-4</label>
              <select
                className="form-control"
                value={answer4}
                onChange={(e) => setAnswer4(e.target.value)}
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
            <div className="form-group">
              <label>Answer-5</label>
              <select
                className="form-control"
                value={answer5}
                onChange={(e) => setAnswer5(e.target.value)}
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary mt-4 mb-4">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
