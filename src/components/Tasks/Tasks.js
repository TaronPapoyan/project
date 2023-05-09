import { Button, TextField } from "@mui/material";
import { doc, getDocs, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  BUSINESS_MANAGMENT,
  FINANCE_MANAGEMENT,
  HOME,
  SOFTWARE_DEVELOPMENT,
  SYSTEM_ADMIN_ENGINEER,
} from "../../constants/auth";
import { auth, db, tasksRef } from "../../firebase";
import { useTasksStyle } from "./Tasks.styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Menu from "../Menu/Menu";

function Tasks() {
  const styles = useTasksStyle();
  const [allTasks, setAllTasks] = useState([]);
  const [category, setCategory] = useState("");
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  useEffect(() => {
    const tasks = [];
    async function getData() {
      const snapshot = await getDocs(tasksRef);
      snapshot.forEach((doc) => tasks.push({ ...doc.data(), id: doc.id }));
      setAllTasks(tasks);
    }
    getData();
  }, []);

  const onOpenClick = (task, id) => {
    updateDoc(doc(db, "tasks", id), {
      view: task.view + 1,
    });
    navigate(`/task/${id}`);
  };

  return (
    <div className={styles.parent}>
      <div className={styles.menu}>
        <FormControl
          variant="filled"
          sx={{ m: 1, minWidth: 120 }}
          style={{
            background: "white",
          }}
        >
          <InputLabel>Category</InputLabel>
          <Select
            style={{ background: "#519A98FF", textColor: "FFFACD" }}
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          >
            <MenuItem value={""}>ALL TASKS</MenuItem>
            <MenuItem value={SOFTWARE_DEVELOPMENT}>
              {SOFTWARE_DEVELOPMENT}
            </MenuItem>
            <MenuItem value={FINANCE_MANAGEMENT}>{FINANCE_MANAGEMENT}</MenuItem>
            <MenuItem value={BUSINESS_MANAGMENT}>{BUSINESS_MANAGMENT}</MenuItem>
            <MenuItem value={SYSTEM_ADMIN_ENGINEER}>
              {SYSTEM_ADMIN_ENGINEER}
            </MenuItem>
          </Select>
        </FormControl>
        <TextField
          placeholder="Search tasks..."
          style={{ background: "#519A98FF", textColor: "FFFACD" }}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Menu buttonValue="HOME" buttonNavigate={HOME} />
      </div>
      <div className={styles.main}>
        <div>
          <table className={styles.table}>
            <thead className={styles.haderEx}>
              <tr>
                <th>User Avatar</th>
                <th>Added By</th>
                <th>Task Name</th>
                <th>Type Of Task</th>
              </tr>
            </thead>
            <tbody>
              {allTasks
                .filter((item) => {
                  return search.toLowerCase() === ""
                    ? item
                    : item.taskName.toLowerCase().includes(search);
                })
                .filter((item) => {
                  return category === "" ? item : item.typeTask === category;
                })
                .map((task) => {
                  return (
                    <tr key={task.id}>
                      <td>
                        <div
                          style={{
                            backgroundImage: `url(${task.userPhotoUrl})`,
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            width: 60,
                            height: 60,
                            borderRadius: "50%",
                          }}
                        ></div>
                      </td>
                      <td className={styles.userData}>
                        {task.userName} {task.userSurname}
                      </td>
                      <td className={styles.taskName}>{task.taskName}</td>
                      <td className={styles.taypeCategory}>{task.typeTask}</td>
                      <td>
                        {task?.email !== auth.currentUser?.email ? (
                          <button
                            className={styles.bntOpenTasks}
                            onClick={() => onOpenClick(task, task.id)}
                          >
                            open
                          </button>
                        ) : null}
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default Tasks;
