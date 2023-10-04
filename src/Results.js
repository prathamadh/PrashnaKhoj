import React from "react";
import axios from "axios";

const Results = async () => {
  try {
    const response = await axios.get("http://localhost:3500/api", {
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log(response.data);
  } catch (err) {
    console.log(err.message);
  }
  return <div></div>;
};

export default Results;
