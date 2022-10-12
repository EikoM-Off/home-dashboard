// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCFkYljaz7oI6z0B04qWbRdFjn76p7FGAc',
  authDomain: 'familyapp-29035.firebaseapp.com',
  databaseURL: 'https://familyapp-29035-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'familyapp-29035',
  storageBucket: 'familyapp-29035.appspot.com',
  messagingSenderId: '812707752336',
  appId: '1:812707752336:web:da19388571a8b65fbcab15'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export default app
