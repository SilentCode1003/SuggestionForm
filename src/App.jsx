import React from "react";
import { Routes, Route } from "react-router-dom";
import DashboardPage from "./pages/dasboard"; // Make sure the path is correct
import "./App.css";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  // const { data: sessions, isLoading, error } = useGetSession();
  // const data = sessions?.data;
  const [sessionData, setSessionData] = React.useState({
    employeeid: "",
    department: "",
    date: "",
  });

  const fetchSessionData = async () => {
    try {
      const response = await fetch("/api/session/getsession"); // Ensure the endpoint is correct
      const data = await response.json();
      const { employeeid, department, date } = data.data; // Ensure the structure is correct

      console.log("Fetched Session Data:", employeeid, department, date); // Check what you get

      setSessionData({
        employeeid,
        department,
        date,
      });
    } catch (error) {
      console.error("Error fetching session data:", error);
    }
  };

  React.useEffect(() => {
    fetchSessionData();
  }, []);

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <DashboardPage
              employeeid={sessionData?.employeeid}
              department={sessionData?.department}
              date={sessionData?.date}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
