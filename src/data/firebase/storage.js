import * as firebase from 'firebase';

export const uploadFile =  (file) => {

  const storageRef = firebase.storage().ref();

  const metadata = {
    'contentType': file.type
  };

  storageRef.child('images/' + file.name).put(file, metadata).then(function(snapshot) {

    console.log('Uploaded', snapshot.totalBytes, 'bytes.');

    console.log('File metadata:', snapshot.metadata);

    snapshot.ref.getDownloadURL().then(function(url) {

      console.log('File available at', url);

    });
  }).catch(function(error) {

    console.error('Upload failed:', error);

  });

<<<<<<< HEAD
};
=======
};
>>>>>>> 422df59e8c41d8d6d7a9a7cbb6049d4a4b21de8f
