import { toCountTime } from "../../utils/utils";
import { useTaskResponsesStyles } from "./TaskResponses.styles";
import { v4 as uuidv4 } from "uuid";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";
import WifiCalling3Icon from "@mui/icons-material/WifiCalling3";

function TaskResponses({ responses, setUpdate, update }) {
  const styles = useTaskResponsesStyles();

  const onDeleteResponseClick = (response, index, array) => {
    const arr = array.filter((item) => array.indexOf(item) !== index);
    updateDoc(doc(db, "tasks", response.taskId), {
      responses: [...arr],
    });
    setUpdate(!update);
  };

  return responses.length ? (
    <div className={styles.responses}>
      <div style={{ background: "#535353FF", padding: " 5px 10px" }}>
        Responses
      </div>
      {responses.map((response, index, array) => (
        <div key={uuidv4()} className={styles.responseValue}>
          <p> Hello I'm {response.nameSurname}</p>

          <p>{response.aboutPerson}</p>
          <p className={styles.suggest}>I suggest - {response.suggest}</p>
          <p>{response.email}</p>
          <div className={styles.contact}>
            <div style={{ display: "flex" }}>
              <WifiCalling3Icon />
              <p>{response.contactNumber}</p>
            </div>
            <p>
              {toCountTime(response.time)}
              <button
                className={styles.deleteResponse}
                onClick={() => onDeleteResponseClick(response, index, array)}
              >
                x
              </button>
            </p>
          </div>
        </div>
      ))}
    </div>
  ) : null;
}
export default TaskResponses;
