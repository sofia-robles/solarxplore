import React, { useState, useEffect } from "react";
import "./App.css";

const apiKey = "qanT1ugOgF6T6gDeRO881G8tKMTbvWl1ldGWkAed";
const apiUrl = "https://api.nasa.gov/planetary/apod";

function App() {

  const [nasaData, setNasaData] = useState({ url: "", explanation: "" });
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${apiUrl}?api_key=${apiKey}`)
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch data");
        return response.json();
      })
      .then((data) => {
        setNasaData({
          url: data.url || "",
          explanation: data.explanation || "No explanation available.",
        });
      })
      .catch((err) => {
        console.error(err);
        setError("Error fetching NASA data. Please try again later.");
      });
  }, [])};