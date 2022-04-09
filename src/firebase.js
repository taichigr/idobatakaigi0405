import firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBi4CNRgsgSF5Wt2NyVhN1b3ju9D6MSNbM",
  authDomain: "idobata-49518.firebaseapp.com",
  projectId: "idobata-49518",
  storageBucket: "idobata-49518.appspot.com",
  messagingSenderId: "995372961434",
  appId: "1:995372961434:web:b8bacd1b6e99240d015923"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const messageRef = database.ref('messages');


export const pushMessage = ({name, text}) => {
  messageRef.push({name, text});
};