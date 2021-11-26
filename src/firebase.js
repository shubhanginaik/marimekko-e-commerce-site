import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD7iGv8HPvx__E-jxFQXHuqSp2c-KzOl10",
    authDomain: "fir-auth-marimekko.firebaseapp.com",
    projectId: "fir-auth-marimekko",
    storageBucket: "fir-auth-marimekko.appspot.com",
    messagingSenderId: "159915522440",
    appId: "1:159915522440:web:f4815dc8d374e7dda8223d"
  };
  const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth();
const db = app.firestore();

//google authentication function
////make a function for signing in using an email and password
/*Then we are querying the database to check if this user is registered in our database with the user uid. And if there is no user with the uid, which also means that the user is new to our app, we make a new record in our database with additional data for future reference.*/
const googleProvider = new firebase.auth.GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
    const res = await auth.signInWithPopup(googleProvider);
    const user = res.user;
    const query = await db
      .collection("users")
      .where("uid", "==", user.uid)
      .get();
    if (query.docs.length === 0) {
      await db.collection("users").add({
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

/*we know that the user is already registered with us, we don’t need to check the database. We can proceed with the authentication right away. We just pass in the email and password to signInWithEmailAndPassword functions, which is provided to us by Firebase. */
const signInWithEmailAndPassword = async (email, password) => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  //Now, let’s create a function for registering a user with an email and password
  const registerWithEmailAndPassword = async (name, email, password) => {
    try {
      const res = await auth.createUserWithEmailAndPassword(email, password);
      const user = res.user;
      await db.collection("users").add({
        uid: user.uid,
        name,
        authProvider: "local",
        email,
      });
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  //Create a function that will send a password reset link to an email address
  //The password reset email will be sent by Firebase.
  const sendPasswordResetEmail = async (email) => {
    try {
      await auth.sendPasswordResetEmail(email);
      alert("Password reset link sent!");
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  //And finally, the logout function
  const logout = () => {
    auth.signOut();
  };

  export {
    auth,
    db,
    signInWithGoogle,
    signInWithEmailAndPassword,
    registerWithEmailAndPassword,
    sendPasswordResetEmail,
    logout,
  };


