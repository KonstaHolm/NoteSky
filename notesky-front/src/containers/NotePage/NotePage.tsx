import axios from "axios";
import { useEffect, useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import NoteDashBoard from "../../components/Notes/NoteDashboard";

export default function NotePage() {
   const [Notes, setNotes] = useState([]);

   useEffect(() => {
      axios.get('http://localhost:5000/api/notes').then(response => {
         console.log(response.data);
         setNotes(response.data);
      })
   }, [])

   return (
      <>
         <NavBar />
         <NoteDashBoard />
      </>
   )
}