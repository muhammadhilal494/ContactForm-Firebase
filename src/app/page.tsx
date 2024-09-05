'use client'
import {db} from './firebaseConfig'
import { collection, addDoc } from "firebase/firestore";
import React, { useState } from 'react'

async function addDataToFireStore(name: string, email: string, message: string, phone: number,
   buildingName: string, location: string, inputCode: string) {
  try {
    const docRef = await addDoc(collection(db, "ContactForm"), {
      name: name,
      email: email,
      message: message,
      phone: phone,
      buildingName: buildingName,
      location: location,
      inputCode: inputCode,
    });
    console.log("Document written with ID: ", docRef.id);
    return true;
  } catch (error) {
    console.error("Error adding document ", error);
    return false;
  }
}

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [buildingName, setBuildingName] = useState("");
  const [location, setLocation] = useState("");
  const [inputCode, setInputCode] = useState("");

  const handleSubmit = async (e:any) => {
    e.preventDefault();
     
    // Convert phone to a number, with validation
    const phoneNumber = parseFloat(phone);
    if (isNaN(phoneNumber)) {
      alert("Please enter a valid phone number.");
      return;
    }
    const added = await addDataToFireStore(name, email, message, phoneNumber, buildingName, location, inputCode);
    if (added) {
      setName("");
      setEmail("");
      setMessage("");
      setPhone("")
      setBuildingName("")
      setLocation("")
      setInputCode("")

      alert("Data added to firestore DB!");
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-5xl font-bold m-10">Add Data to Firestore Database</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Name:
          </label>
          <input
            type="text"
            id="name"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email:
          </label>
          <input
            type="text"
            id="email"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">
            Phone:
          </label>
          <input
            type="number"
            id="phone"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="ApartmentNo/BuildingName" className="block text-gray-700 font-bold mb-2">
            AparmentNo/BuildingName:
          </label>
          <input
            type="text"
            id="ApartmentNo/BuildingName"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            value={buildingName}
            onChange={(e) => setBuildingName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="location" className="block text-gray-700 font-bold mb-2">
            location:
          </label>
          <input
            type="text"
            id="location"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
            Message:
          </label>
          <textarea
            rows={5}
            id="message"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="inputCode" className="block text-gray-700 font-bold mb-2">
            Input Code:
          </label>
          <input
            type="text"
            id="inputCode"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            value={inputCode}
            onChange={(e) => setInputCode(e.target.value)}
          />
        </div>
        <div className="text-center">
          <button type="submit"
           className="bg-blue-500 hover:bg-blue-600 text-black font-bold py-2 px-4 rounded-lg">
            Submit
          </button>
        </div>
      </form>
    </main>
  );
}
