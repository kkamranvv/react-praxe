import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import Student from "./components/Student";
import Objects from "./components/Objects";

function App() {
  const [alert, setAlert] = useState(false);

  return (
    <div>
      {alert && (
        <Alert onClose={() => setAlert(false)}>
          Hello <span>world</span>
        </Alert>
      )}
      <Button color="danger" onClick={() => setAlert(true)}>
        Button exercise
      </Button>
      <Student name="Kamran" age={17} isStudent={true} />
      <Student name="Peta" age={30} isStudent={false} />
      <Student name="Jack" age={23} isStudent={true} />
      <Student name="Sara" age={45} isStudent={false} />
      <Objects />
    </div>
  );
}

export default App;
