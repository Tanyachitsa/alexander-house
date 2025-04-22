import React, { useState } from "react";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "./firebase";

export default function AdminCreateEvent() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");

  const handleCreate = async () => {
    const eventDate = new Date(date);
    await addDoc(collection(db, "events"), {
      title,
      description,
      date: Timestamp.fromDate(eventDate),
    });
    alert("Event created!");
  };

  return (
    <div className="p-4">
      <h2>Create Event</h2>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <input
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Location"
      />
      <button onClick={handleCreate}>Create</button>
    </div>
  );
}
