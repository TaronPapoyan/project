import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { auth, db, tasksRef, usersRef } from "../../firebase";
import { useAuth } from "../../context/Context";
import { doc, getDocs, deleteDoc, updateDoc } from "firebase/firestore";
import { HOME, SIGN_IN, TASKS } from "../../constants/auth";
import AddTask from "../AddTask/AddTask";
import { useProfileStyles } from "./Profile.styles";
import ChangeDescription from "../ChangeDescription/ChangeDescription";
import { v4 as uuidv4 } from "uuid";
import AddCategory from "../AddCategory/AddCategory";
import { toCountTime } from "../../utils/utils";
import TaskComments from "../TaskComments/TaskComments";
import TaskResponses from "../TaskResponses/TaskResponses";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import SendIcon from "@mui/icons-material/Send";
import ChangeUserData from "../ChangeUserData/ChangeUserData";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";

function Profile() {
  const [logedUser, setLogedUser] = useState(null);
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [showAddTask, setShowAddTask] = useState(false);
  const [userTasks, setUserTasks] = useState([]);
  const [showChangeDescription, setShowChangeDescription] = useState(false);
  const [logedUserDescription, setLogedUserDescription] = useState("");
  const styles = useProfileStyles();
  const [category, setCategory] = useState("");
  const [update, setUpdate] = useState(false);
  const [showAddCategory, setShowAddCategory] = useState(false);
  const [showDiv, setShowDiv] = useState(false);
  const [logedUserNewsLength, setLogedUserNewsLength] = useState("");
  const [newLogedUser, setNewLogedUser] = useState(false);
  const [showGoHome, setShowGoHome] = useState(false);
  const [showUpdateDataDialog, setShowUpdateDataDialog] = useState(false);

  useEffect(() => {
    if (!user) {
      return;
    }
    const users = [];
    async function getData() {
      const snapshot = await getDocs(usersRef);
      snapshot.forEach((doc) => users.push({ ...doc.data(), id: doc.id }));
      const result = users.find((elem) => elem.email === user?.email);
      setLogedUserDescription(result?.description);
      setLogedUser(result);
      setLogedUserNewsLength(result.news.length);
    }
    getData();
  }, [user, category, newLogedUser, showUpdateDataDialog]);

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
  }, [showAddTask, update]);

  const onDeleteTaskClick = (id) => {
    deleteDoc(doc(db, "tasks", id));
    setUpdate(!update);
  };

  const logOut = async () => {
    try {
      await logout();
      navigate(HOME);
    } catch (e) {
      console.log(e.message);
    }
  };

  const onAddTaskClick = () => {
    setShowAddTask(true);
  };

  const onChangeMyDescriptionClick = () => {
    setShowChangeDescription(true);
  };

  const onDeleteCategory = async (index) => {
    logedUser?.myCategories.splice(index, 1);
    await updateDoc(doc(db, "users", logedUser.id), {
      myCategories: [...logedUser?.myCategories],
    });
    setUpdate(!update);
  };

  const onAddCategoryClick = () => {
    setShowAddCategory(!showAddCategory);
  };

  const onBlueDotClick = (e) => {
    e.stopPropagation();
    setShowDiv(!showDiv);

    setLogedUserNewsLength((prev) => {
      if (prev) {
        updateDoc(doc(db, "users", logedUser.id), {
          news: [],
        });
      } else {
        setNewLogedUser(!newLogedUser);
      }
    });
  };
  const onArrowDownwardIconClick = () => {
    setShowGoHome(!showGoHome);
  };
  const onNameClick = () => {
    setShowUpdateDataDialog(!showUpdateDataDialog);
  };
  {
    if (auth.currentUser) {
      return (
        <div className={styles.parent}>
          <div className={styles.menu}>
            <div className={styles.menuLeft}>
              <div
                style={{
                  backgroundImage: `url(
                    "${logedUser?.photoURL}"
                  )`,
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  width: 80,
                  height: 80,
                  borderRadius: "50%",
                }}
              ></div>
              <div>
                <h1 className={styles.userName} onClick={onNameClick}>
                  {logedUser?.name} {logedUser?.surname}
                </h1>
                {showUpdateDataDialog && (
                  <ChangeUserData
                    setShowUpdateDataDialog={setShowUpdateDataDialog}
                    showUpdateDataDialog={showUpdateDataDialog}
                    logedUser={logedUser}
                    userTasks={userTasks}
                  />
                )}
              </div>
            </div>
            <div className={styles.menuRight}>
              <div>
                <Button onClick={onAddTaskClick} variant="contained">
                  Add task
                </Button>
              </div>
              <div>
                <Button
                  onClick={onChangeMyDescriptionClick}
                  variant="contained"
                  color="info"
                >
                  Change Description
                </Button>
              </div>
              <div>
                <Button onClick={onAddCategoryClick}>Add Category</Button>
                {showAddCategory && (
                  <AddCategory
                    setShowAddCategory={setShowAddCategory}
                    setCategory={setCategory}
                    category={category}
                    logedUser={logedUser}
                  />
                )}
              </div>
              <div>
                <Button onClick={logOut}>Sign Out</Button>
              </div>
              <div>
                <NavLink to={TASKS} style={{ textDecoration: "none" }}>
                  <Button
                    variant="contained"
                    style={{ backgroundColor: "#849297FF" }}
                  >
                    All Tasks
                  </Button>
                </NavLink>
              </div>
              <div style={{ position: "relative" }}>
                <button
                  className={styles.arrowDownwardIcon}
                  onClick={onArrowDownwardIconClick}
                >
                  <ArrowDownwardIcon />
                </button>
                {showGoHome && (
                  <NavLink to={HOME}>
                    <Button
                      variant="contained"
                      endIcon={<SendIcon />}
                      style={{
                        position: "absolute",
                        right: "6%",
                        top: 40,
                      }}
                    >
                      Home
                    </Button>
                  </NavLink>
                )}
              </div>

              {logedUser?.news?.length ? (
                <div
                  onClick={(e) => onBlueDotClick(e)}
                  style={{ position: "relative" }}
                >
                  <NotificationsActiveIcon color="primary" />{" "}
                  <h5 style={{ color: "red", fontSize: "0.8rem" }}>
                    {" "}
                    +{logedUser?.news?.length}
                  </h5>
                  {showDiv && (
                    <div className={styles.notifications}>
                      <h6 style={{ textAlign: "center", marginTop: 5 }}>
                        You have {logedUser?.news.length} new notification(s)
                      </h6>
                      {logedUser?.news.map((news) => {
                        if (news.hasOwnProperty("commentValue")) {
                          return (
                            <div key={uuidv4()} style={{ textAlign: "center" }}>
                              <p>
                                <span style={{ fontWeight: "bold" }}>
                                  {news.taskName}
                                </span>{" "}
                                was commented...
                              </p>
                              <p
                                style={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                  padding: "2px 5px",
                                  position: "relative",
                                }}
                              >
                                <span>{news.commentValue} </span>
                                <span
                                  style={{
                                    position: "absolute",
                                    bottom: -16,
                                    right: 0,
                                  }}
                                >
                                  {toCountTime(news.time)}
                                </span>
                              </p>
                              <hr
                                style={{
                                  borderTop: "1px solid black",
                                  width: "90%",
                                  textAlign: "center",
                                }}
                              ></hr>
                            </div>
                          );
                        } else {
                          return (
                            <div key={uuidv4()}>
                              <p style={{ textAlign: "center" }}>
                                <span style={{ fontWeight: "bold" }}>
                                  {news.taskName}
                                </span>
                                was responsed...
                              </p>
                              <p
                                style={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                  padding: "2px 5px",
                                  position: "relative",
                                }}
                              >
                                <span>{news.suggest}</span>
                                <span
                                  style={{
                                    position: "absolute",
                                    bottom: -16,
                                    right: 0,
                                  }}
                                >
                                  {toCountTime(news.time)}
                                </span>
                              </p>
                              <hr
                                style={{
                                  borderTop: "1px solid black",
                                  width: "80%",
                                  textAlign: "center",
                                }}
                              ></hr>
                            </div>
                          );
                        }
                      })}
                    </div>
                  )}
                </div>
              ) : null}
            </div>
          </div>
          <div className={styles.main}>
            <div className={styles.descriptionCategory}>
              <div className={styles.description}>
                <p>{logedUserDescription}</p>
                {showChangeDescription && (
                  <ChangeDescription
                    setShowChangeDescription={setShowChangeDescription}
                    logedUser={logedUser}
                    setLogedUserDescription={setLogedUserDescription}
                  />
                )}
              </div>
              <div>
                {logedUser?.myCategories?.map((category, index) => {
                  return (
                    <div key={uuidv4()} className={styles.category}>
                      <p>{category}</p>
                      <p>
                        <button
                          className={styles.deleteCategory}
                          onClick={() => onDeleteCategory(index)}
                        >
                          x
                        </button>
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div>
              {showAddTask && (
                <AddTask
                  setShowAddTask={setShowAddTask}
                  logedUser={logedUser}
                />
              )}
              {userTasks.map((task, index) => {
                return (
                  <div key={task.id}>
                    <div className={styles.task}>
                      <div className={styles.taskFirstChild}>
                        <p>No:{index + 1}</p>
                        <p className={styles.taskName}>{task.taskName}</p>
                      </div>

                      <div className={styles.taskDescription}>
                        {task.taskDescription}{" "}
                      </div>
                      <div>
                        <button
                          className={styles.deleteTask}
                          onClick={() => onDeleteTaskClick(task.id)}
                        >
                          x
                        </button>
                      </div>
                    </div>
                    <div className={styles.commentsResponses}>
                      <TaskComments
                        comments={task?.comments}
                        setUpdate={setUpdate}
                        update={update}
                        logedUser={logedUser}
                        userId={logedUser?.id}
                      />
                      <TaskResponses
                        responses={task.responses}
                        setUpdate={setUpdate}
                        update={update}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      );
    }
    return <Navigate to={SIGN_IN} />;
  }
}
export default Profile;
