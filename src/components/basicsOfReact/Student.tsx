import "./index.css";

interface StudentProps {
  name: string;
  age: number;
  isStudent: boolean;
}

function Student({ name = "Bob", age, isStudent }: StudentProps) {
  return (
    <div className="student">
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Student: {isStudent ? "Yes" : "No"}</p>
    </div>
  );
}

export default Student;
