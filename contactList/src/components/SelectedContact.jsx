import { useState, useEffect } from "react";
import "./../App.css";

export default function SelectedContact({
  selectedContactId,
  setSelectedContactId,
}) {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    async function fetchContact() {
      try {
        const response = await fetch(
          `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
        );
        const result = await response.json();
        console.log("Fetched contact:", result);
        setContact(result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchContact();
  }, [selectedContactId]);

  if (!contact) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2 class="contactCard">Selected Contact</h2>
      <p class="contactCard">
        <strong>Name:</strong> {contact.name}
      </p>
      <p class="contactCard">
        <strong>Email:</strong> {contact.email}
      </p>
      <p class="contactCard">
        <strong>Phone:</strong> {contact.phone}
      </p>
      <button id="back" onClick={() => setSelectedContactId(null)}>
        Back to Contact List
      </button>
    </div>
  );
}
