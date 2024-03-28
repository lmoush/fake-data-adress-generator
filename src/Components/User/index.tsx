import React from "react";
import "./style.css";

export default function User({ user }) {
  const saveToFile = () => {
    // Create a string containing the user data
    const userData =
      `First Name: ${user.firstName}\n` +
      `Last Name: ${user.lastName}\n` +
      `Middle Name: ${user.middleName}\n` +
      `Gender: ${user.gender}\n` +
      `Address: ${user.address.address}\n` +
      `State: ${user.address.state}\n` +
      `City: ${user.address.city}\n` +
      `Postal Code: ${user.address.postalCode}\n` +
      `Phone: ${user.phone}\n` +
      `Email: ${user.email}\n` +
      `SSN: ${user.ssn}\n` +
      `Birth Date: ${user.birthDate}\n`;

    // Create a Blob object containing the data
    const blob = new Blob([userData], { type: "text/plain" });

    // Create a temporary anchor element to trigger the download
    const anchor = document.createElement("a");
    anchor.download = "user_data.txt";
    anchor.href = window.URL.createObjectURL(blob);
    anchor.click();

    // Cleanup
    window.URL.revokeObjectURL(anchor.href);
  };

  return (
    <>
      <div className="item_user">
        <img className="img_size" src={user.image} alt="User" />
        <p>First Name: {user.firstName}</p>
        <p>Last Name: {user.lastName}</p>
        <p>Middle Name: {user.middleName}</p>
        <p>Gender: {user.gender}</p>
        <p>Address: {user.address.address}</p>
        <p>State: {user.address.state}</p>
        <p>City: {user.address.city}</p>
        <p>Postal Code: {user.address.postalCode}</p>
        <p>Phone: {user.phone}</p>
        <p>Email: {user.email}</p>
        <p>SSN: {user.ssn}</p>
        <p>Birth Date: {user.birthDate}</p>
        <button onClick={saveToFile}>Save it</button>
      </div>
    </>
  );
}
