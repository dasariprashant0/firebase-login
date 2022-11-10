// setting up Firebase with our Website
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyA1FRE1gGb-AD9-F3dEBocnk9CnLvbVtEY",
  authDomain: "login-with-firebase-5c230.firebaseapp.com",
  databaseURL: "https://login-with-firebase-5c230-default-rtdb.firebaseio.com",
  projectId: "login-with-firebase-5c230",
  storageBucket: "login-with-firebase-5c230.appspot.com",
  messagingSenderId: "39485249629",
  appId: "1:39485249629:web:66f69db35701acaa1195b4",
  measurementId: "G-DM6WJS0LMG",
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

//  Sign up Function
const signUp = () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const fullName = document.getElementById("full_name").value;
  console.log(email, password, fullName);

  // Validate input fields
  if (validate_email(email) == false || validate_password(password) == false) {
    alert('Email or Password is Outta Line!!')
    return
    // Don't continue running the code
  }
  if (validate_field(fullName) == false) {
    alert('One or More Extra Fields is Outta Line!!')
    return
  }

  // firebase code
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password, fullName)
    .then((userCredential) => {
      // Signed Up
      alert("You are Signed Up");
      console.log(userCredential);
    })
    .catch((error) => {
      alert(error.code);
      alert(error.message);
      // ..
    });
};

// Sign In Function
const signIn = () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // firebase Code
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      alert("You are Signed In");
      console.log(userCredential);
      // ...
    })
    .catch((error) => {
      alert(error.code);
      alert(error.message);
    });
};


// Validate Functions
function validate_email(email) {
  expression = /^[^@]+@\w+(\.\w+)+\w$/
  if (expression.test(email) == true) {
    // Email is good
    return true
  } else {
    // Email is not good
    return false
  }
}

function validate_password(password) {
  // Firebase only accepts lengths greater than 6
  if (password < 6) {
    return false
  } else {
    return true
  }
}

function validate_field(field) {
  if (field == null) {
    return false
  }

  if (field.length <= 0) {
    return false
  } else {
    return true
  }
}