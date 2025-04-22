import React, { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  query,
  where,
  doc,
  getDoc,
} from "firebase/firestore";
import { db, auth } from "../data/firebase";
import { onAuthStateChanged } from "firebase/auth";

export default function MyBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (!user) return;
      const q = query(
        collection(db, "bookings"),
        where("userId", "==", user.uid)
      );
      const snap = await getDocs(q);

      const results = await Promise.all(
        snap.docs.map(async (docSnap) => {
          const booking = docSnap.data();
          const eventDoc = await getDoc(doc(db, "events", booking.eventId));
          return {
            ...booking,
            event: eventDoc.exists() ? eventDoc.data() : null,
          };
        })
      );

      setBookings(results);
    });
  }, []);

  return (
    <div className="p-4">
      <h2>My Bookings</h2>
      {bookings.map((b, i) => (
        <div key={i} className="mb-3 p-2 border rounded">
          <h4>{b.event?.title || "Event not found"}</h4>
          <p>{b.event?.description}</p>
          <p>
            <strong>Date:</strong> {b.event?.date?.toDate().toDateString()}
          </p>
        </div>
      ))}
    </div>
  );
}
