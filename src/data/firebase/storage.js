import firebase from "firebase/app";
import "firebase/storage";

export const uploadImage = image => {
  const storage = firebase.storage();
  const uploadTask = storage.ref(`images/${image.name}`).put(image);
  uploadTask.on(
    "state_change",
    snapshot => {},
    error => {
      console.log(error);
    },
    () => {
      storage
        .ref("images")
        .child(image.name)
        .getDownloadURL()
        .then(url => {
          console.log(url);
        });
    }
  );
};
