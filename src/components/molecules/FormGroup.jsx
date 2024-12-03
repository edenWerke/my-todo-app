import Input from "../atoms/Input";
import Button from "../atoms/Button";

const FormGroup = ({ taskText, setTaskText, addTask }) => (
  <div className="flex space-x-2">
    <Input
      value={taskText}
      onChange={(e) => setTaskText(e.target.value)}
      placeholder="Enter a new task"
    />
    <Button onClick={addTask}>Add</Button>
  </div>
);

export default FormGroup;
