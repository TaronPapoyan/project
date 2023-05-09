import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";
function ChangeUserData({
  setShowUpdateDataDialog,
  showUpdateDataDialog,
  logedUser,
  userTasks,
}) {
  const [name, setName] = useState(logedUser?.name);
  const [surName, setSurname] = useState(logedUser?.surname);

  const handleClose = () => {
    setShowUpdateDataDialog(!showUpdateDataDialog);
  };
  const onChangeClick = () => {
    updateDoc(doc(db, "users", logedUser.id), {
      name,
      surname: surName,
    });
    userTasks.forEach((task) =>
      updateDoc(doc(db, "tasks", task.id), {
        userName: name,
        userSurname: surName,
      })
    );
    handleClose();
  };
  return (
    <div>
      <Dialog open={true} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            label="Name"
            fullWidth
            variant="standard"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            label="Surname"
            variant="standard"
            fullWidth
            value={surName}
            onChange={(e) => setSurname(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={onChangeClick}>Change</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default ChangeUserData;
