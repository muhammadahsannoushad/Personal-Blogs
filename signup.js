
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCZltw709VRpL4q1uf96CbNokS78u-d7DM",
    authDomain: "myblog2-f14be.firebaseapp.com",
    databaseURL: "https://myblog2-f14be-default-rtdb.firebaseio.com",
    projectId: "myblog2-f14be",
    storageBucket: "myblog2-f14be.appspot.com",
    messagingSenderId: "700892991893",
    appId: "1:700892991893:web:7a5b834ca8f118cc4e269c",
    measurementId: "G-BZS9JZ2XXR"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

    // Reference to the "firstNames" node in the Firebase database
    var firstNamesRef = app.ref("firstNames");

    // Handle form submission
    document.getElementById("firstNameForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get the first name from the form input
        var firstName = document.getElementById("firstName").value.trim();

        // Push the first name data to Firebase
        firstNamesRef.push({
            firstName: firstName
        }).then(function() {
            // Clear the form input
            document.getElementById("firstName").value = "";
            alert("First name added to Firebase!");
        }).catch(function(error) {
            console.error("Error adding first name to Firebase: " + error);
        });
    });

