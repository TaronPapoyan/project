import { Button } from "@mui/material";
import { getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { tasksRef, usersRef } from "../../firebase";
import { useTaskStyles } from "./Task.styles";
import downArrowIcon from "../../assets/images/downArrowIcon.png";
import Responses from "../Responses/Responses";
import Comments from "../Comments/Comments";
import { TASKS } from "../../constants/auth";
import Menu from "../Menu/Menu";
import TaskComments from "../TaskComments/TaskComments";

function Task() {
  const params = useParams();
  const [task, setTask] = useState(null);
  const styles = useTaskStyles();
  const [showResponseDialog, setShowResponseDialog] = useState(false);
  const [showCommentsDialog, setShowCommentsDialog] = useState(false);
  const [taskOwnUser, setTaskOwnUser] = useState(null);

  useEffect(() => {
    const tasks = [];
    async function getData() {
      const snapshot = await getDocs(tasksRef);
      snapshot.forEach((doc) => tasks.push({ ...doc.data(), id: doc.id }));
      setTask(tasks.find((task) => task.id === params.id));
    }
    getData();
  }, [showCommentsDialog, showResponseDialog]);

  useEffect(() => {
    if (!task) {
      return;
    }
    const users = [];
    async function getData() {
      const snapshot = await getDocs(usersRef);
      snapshot.forEach((doc) => users.push({ ...doc.data(), id: doc.id }));
      const result = users.find((elem) => elem.id === task.userId);
      setTaskOwnUser(result);
    }
    getData();
  }, [task]);
  return (
    <div className={styles.parent}>
      <div className={styles.top}>
        <Menu buttonValue="TASKS" buttonNavigate={TASKS} />
      </div>
      <div className={styles.main}>
        <div className={styles.task}>
          <div className={styles.taskTop}>
            <div className={styles.first}>
              <div
                style={{
                  backgroundImage: `url(${task?.userPhotoUrl})`,
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  width: 120,
                  height: 130,
                  borderRadius: "10px",
                }}
              ></div>
              <NavLink
                to={`/user/${task?.userId}`}
                style={{ textDecoration: "none", textAlign: "center" }}
              >
                <h2>{task?.userName}</h2>
                <h2>{task?.userSurname}</h2>
              </NavLink>
            </div>
            <div className={styles.middle}>
              <p className={styles.taskName}>{task?.taskName}</p>
              <img src={downArrowIcon} className={styles.downArrowIcon} />
              <p className={styles.typeTask}>{task?.typeTask}</p>
            </div>
            <div className={styles.description}>
              <div className={styles.taskDescription}>
                {task?.taskDescription}
              </div>
              <div className={styles.buttons}>
                <Button
                  color="info"
                  variant="contained"
                  style={{ background: "#76675FFF" }}
                  onClick={() => setShowCommentsDialog(true)}
                >
                  Comments
                </Button>
                <Button
                  color="info"
                  variant="contained"
                  style={{ background: "#14BDADFF", marginLeft: "10px" }}
                  onClick={() => setShowResponseDialog(true)}
                >
                  Response
                </Button>
                {showResponseDialog && (
                  <Responses
                    setShowResponseDialog={setShowResponseDialog}
                    task={task}
                    taskOwnUser={taskOwnUser}
                  />
                )}
                {showCommentsDialog && (
                  <Comments
                    setShowCommentsDialog={setShowCommentsDialog}
                    task={task}
                    taskOwnUser={taskOwnUser}
                  />
                )}
              </div>
            </div>
          </div>

          <div className={styles.comments}>
            {<TaskComments comments={task?.comments} userId={task?.userId} />}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Task;
