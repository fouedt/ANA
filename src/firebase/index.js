import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCuOgmsKSh0B3qUb7-ukkbwtYwNf1bLz1A",
    authDomain: "anan-9f810.firebaseapp.com",
    projectId: "anan-9f810",
    storageBucket: "anan-9f810.appspot.com",
    messagingSenderId: "564668397401",
    appId: "1:564668397401:web:b9fd41b9f68362a0ad7e48"
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

class DataService {
  getAll() {
    return storage;
  }

  delete(id) {
    return storage.doc(id).delete();
  }
}



export { storage , firebase as default, DataService };
