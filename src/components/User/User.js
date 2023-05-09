import { getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { HOME } from "../../constants/auth";
import { auth, tasksRef, usersRef } from "../../firebase";
import { useUserStyles } from "./User.styles";
import { v4 as uuidv4 } from "uuid";
import Menu from "../Menu/Menu";
import TaskComments from "../TaskComments/TaskComments";

function User() {
  const params = useParams();
  const [user, setUser] = useState(null);
  const styles = useUserStyles();
  const [userTasks, setUserTasks] = useState([]);

  useEffect(() => {
    const users = [];
    async function getData() {
      const snapshot = await getDocs(usersRef);
      snapshot.forEach((doc) => users.push({ ...doc.data(), id: doc.id }));
      const result = users.find((elem) => elem.id === params.id);
      setUser(result);
    }
    getData();
  }, []);

  useEffect(() => {
    if (!user) {
      return;
    }
    const tasks = [];
    async function getData() {
      const snapshot = await getDocs(tasksRef);
      snapshot.forEach((doc) => tasks.push({ ...doc.data(), id: doc.id }));
      const result = tasks
        .filter((elem) => elem.email === user?.email)
        .sort((a, b) => b.time - a.time);
      setUserTasks(result);
    }
    getData();
  }, [user]);

  return (
    <div className={styles.parent}>
      <div className={styles.menu}>
        <div className={styles.menuRight}>
          <div
            style={{
              backgroundImage: `url(
            "${user?.photoURL}"
          )`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              width: 90,
              height: 90,
              borderRadius: "50%",
            }}
          ></div>
          <div>
            <h1 className={styles.userName}>
              {user?.name} {user?.surname}
            </h1>
          </div>
        </div>
        <div className={styles.menuLeft}>
          <Menu buttonValue="HOME" buttonNavigate={HOME} />
        </div>
      </div>
      <div className={styles.main}>
        <div className={styles.descriptionCategory}>
          <div className={styles.description}>
            <p>{user?.description}</p>
          </div>

          <div className={styles.category}>
            {user?.myCategories.length ? (
              <div>
                <h3 className={styles.myCategories}>{user?.name} Categories</h3>
                {user?.myCategories?.map((category) => {
                  return (
                    <div key={uuidv4()} className={styles.category}>
                      <p>{category}</p>
                    </div>
                  );
                })}
              </div>
            ) : null}
          </div>
        </div>
        <div className={styles.tasks}>
          <h1 className={styles.myTasks}>
            <span>{user?.name} Tasks</span>
          </h1>
          {userTasks.map((task, index) => {
            return (
              <div key={task.id}>
                <div className={styles.task}>
                <div className={styles.taskFirstChild}>
                        <p>No:{index + 1}</p>
                        <p className={styles.taskName}>{task.taskName}</p>
                      </div>
                  <div className={styles.taskDescription}>{task.taskDescription} </div>
                </div>
                <div className={styles.commentsResponses}>
                  {<TaskComments comments={task?.comments} userId={user?.id} />}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default User;
