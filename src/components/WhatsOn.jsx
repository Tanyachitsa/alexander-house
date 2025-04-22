import React, { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  addDoc,
  query,
  where,
  Timestamp,
} from "firebase/firestore";
import { db, auth } from "../data/firebase";
import { onAuthStateChanged } from "firebase/auth";

export default function WhatsOn() {
  const [events, setEvents] = useState([]);
  const [bookedEventIds, setBookedEventIds] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Auth listener
    const unsubscribe = onAuthStateChanged(auth, async (u) => {
      setUser(u);
      if (u) {
        const q = query(
          collection(db, "bookings"),
          where("userId", "==", u.uid)
        );
        const snap = await getDocs(q);
        const booked = snap.docs.map((doc) => doc.data().eventId);
        setBookedEventIds(booked);
      }
    });

    // Fetch events
    const fetchEvents = async () => {
      const snap = await getDocs(collection(db, "events"));
      const eventsList = snap.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
        date: doc.data().date.toDate(),
      }));
      setEvents(eventsList);
    };

    fetchEvents();
    return () => unsubscribe();
  }, []);

  const handleBook = async (eventId) => {
    if (!user) {
      alert("Please sign in to book.");
      return;
    }

    if (bookedEventIds.includes(eventId)) return;

    await addDoc(collection(db, "bookings"), {
      userId: user.uid,
      eventId,
      bookedAt: Timestamp.now(),
    });

    setBookedEventIds((prev) => [...prev, eventId]);
  };

  return (
    <div className="whats-on-list">
      <h2 style={{ marginBottom: "30px" }}>Upcoming Events</h2>
      {events.length === 0 && <p>No upcoming events yet. Check back soon!</p>}
      {events.map((event) => (
        <div
          key={event.id}
          className="event-card"
          style={{
            border: "1px solid #ccc",
            padding: "20px",
            borderRadius: "10px",
            marginBottom: "20px",
          }}
        >
          <h3>{event.title}</h3>
          <p>{event.description}</p>
          <p>
            <strong>Date:</strong> {event.date.toDateString()}
          </p>
          <p>
            <strong>Location:</strong> {event.location}
          </p>
          {event.isAlcoholFree && <p>🍹 Alcohol-free event</p>}

          {user ? (
            bookedEventIds.includes(event.id) ? (
              <button
                disabled
                style={{ backgroundColor: "#aaa" }}
                className="button-booked"
              >
                You’ve already booked
              </button>
            ) : (
              <button
                onClick={() => handleBook(event.id)}
                className="button-booked"
              >
                Book This Event
              </button>
            )
          ) : (
            <p style={{ marginTop: "10px" }}>
              <em>Sign in to book this event.</em>
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
