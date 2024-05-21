import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./index.css";

const App = () => {
  const [appointments, setAppointments] = useState([]);
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [room, setRoom] = useState("");

  const handleAddAppointment = () => {
    const newAppointment = {
      name,
      date,
      time,
      room
    };
    setAppointments([...appointments, newAppointment]);
    setName("");
    setDate("");
    setTime("");
    setRoom("");
  };

  const handleDeleteAppointment = (index) => {
    const newAppointments = [...appointments];
    newAppointments.splice(index, 1);
    setAppointments(newAppointments);
  };

  return (
    <div id="app">
      <div className="top-bar">
        <div className="greeting">Hola, bienvenido</div>
        <div className="icons">
          <i className="fas fa-bell"></i>
          <i className="fas fa-user"></i>
        </div>
      </div>
      <div className="content">
        <div className="header">
          <div className="title">
            <b>Turnos</b><br />
            Los turnos que tiene registrados
          </div>
          <button onClick={handleAddAppointment}>Agregar</button>
        </div>
        <div className="form">
          <input
            type="text"
            placeholder="Nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
          <input
            type="number"
            placeholder="Sala de cita"
            value={room}
            onChange={(e) => setRoom(e.target.value)}
          />
        </div>
        {appointments.length === 0 ? (
          <div className="empty-message">
            No tiene citas, cree una cita.
          </div>
        ) : (
          <div className="list">
            <table>
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Fecha y hora de turno</th>
                  <th>Sala de cita</th>
                  <th>Modificar</th>
                  <th>Eliminar</th>
                </tr>
              </thead>
              <tbody>
                {appointments.map((appointment, index) => (
                  <tr key={index}>
                    <td>{appointment.name}</td>
                    <td>{`${appointment.date} ${appointment.time}`}</td>
                    <td>{appointment.room}</td>
                    <td><button>Modificar</button></td>
                    <td><button onClick={() => handleDeleteAppointment(index)}>Eliminar</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
