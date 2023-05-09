import { useNavigate, NavLink } from "react-router-dom";
import { useHomeStyles } from "./Home.styles";
import downArrowIcon from "../../assets/images/downArrowIcon.png";
import stepOne from "../../assets/images/stepOne.jpg";
import {
  BUSINESS_MANAGMENT,
  FINANCE_MANAGEMENT,
  SIGN_UP,
  SOFTWARE_DEVELOPMENT,
  SYSTEM_ADMIN_ENGINEER,
  TASKS,
} from "../../constants/auth";
import { useEffect, useState } from "react";
import { getDocs } from "firebase/firestore";
import { auth, tasksRef } from "../../firebase";
import Menu from "../Menu/Menu";

function Home() {
  const styles = useHomeStyles();
  const navigate = useNavigate();
  const [threeTasks, setThreeTasks] = useState([]);

  useEffect(() => {
    const tasks = [];
    async function getData() {
      const snapshot = await getDocs(tasksRef);
      snapshot.forEach((doc) => tasks.push({ ...doc.data(), id: doc.id }));
      const taskSorted = tasks.sort((a, b) => b.view - a.view);
      const result = taskSorted.splice(0, 3);
      setThreeTasks(result);
    }
    getData();
  }, []);

  const onOpneClick = (id) => {
    navigate(`/task/${id}`);
  };
  return (
    <div className={styles.parent}>
      <div className={styles.top}>
        <h1 className={styles.stepOneH}>
          <img className={styles.logotype} src={stepOne} /> Step One
        </h1>
        <Menu buttonValue="SIGN UP" buttonNavigate={SIGN_UP} />
      </div>
      <div className={styles.main}>
        <div className={styles.mainLeft}>
          <div className={styles.types}>
            <span>TYPES</span>
          </div>
          <div>
            <img src={downArrowIcon} className={styles.downArrowIcon} />
          </div>
          <div className={styles.type}>
            <div>
              <span>{SOFTWARE_DEVELOPMENT}</span>
            </div>
            <div>
              <span>{FINANCE_MANAGEMENT}</span>
            </div>
            <div>
              <span>{BUSINESS_MANAGMENT}</span>
            </div>
            <div>
              <span>{SYSTEM_ADMIN_ENGINEER}</span>
            </div>
          </div>
          <div className={styles.description}>
            Welcome to our site! We're platform dedicated to helping you develop
            your ideas and grow your business. Whever you are looking to connect
            with talented individuals to fill specific roles, or seeking to
            improve your own skills and productivy, we're here to support you
            every step of the way. With our user-friendly tools and resources,
            you'll be able to effectively tackle any job with confidence and
            precision. Join our community today and unlock your full potential!
          </div>
        </div>

        <div className={styles.tasks}>
          <div className={styles.label}>
            <button className={styles.tasksButtonToNavi}>
              <NavLink to={TASKS} style={{ textDecoration: "none" }}>
                Tasks
              </NavLink>
            </button>
          </div>
          {threeTasks.map((task) => (
            <div className={styles.task} key={task.id}>
              <div
                style={{
                  backgroundImage: `url(${task.userPhotoUrl})`,
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  width: 60,
                  height: 60,
                  borderRadius: "10%",
                }}
              ></div>
              <div className={styles.open}>
                <p>{task.taskName}</p>
                <p className={styles.taskType}> {task.typeTask}</p>
              </div>
              <div>
                {task?.email !== auth.currentUser?.email ? (
                  <button
                    className={styles.buttonForOpen}
                    onClick={() => onOpneClick(task.id)}
                  >
                    open
                  </button>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.bottom}>
        <div>
          <h5 style={{ color: "#FFFACD" }}>
            <span>.</span> Contact Information (+374) 94 85 58 58
          </h5>
          <h5 style={{ color: "#FFFACD" }}>
            <span>.</span> Terms of Use
          </h5>
        </div>
        <div>
          <h5 style={{ color: "#FFFACD" }}>Step One</h5>
          <h5 style={{ color: "#FFFACD" }}>
            By - [Armen Artyom Ishkhan Taron]
          </h5>
        </div>
      </div>
    </div>
  );
}
export default Home;
