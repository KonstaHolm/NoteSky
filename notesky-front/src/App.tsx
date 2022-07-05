import HomePage from "./containers/HomePage/HomePage";
import axios from 'axios';
import { useEffect, useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import { Container } from "semantic-ui-react";

function App() {
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
      <Container style={{ marginTop: '7em' }}>
        <ul>
          {Notes.map((note: any) => (
            <li key={note.id}>
              {note.Title}
              {note.Description}
            </li>
          ))}
        </ul>
        <HomePage />
      </Container>
    </>
  );
}

export default App;