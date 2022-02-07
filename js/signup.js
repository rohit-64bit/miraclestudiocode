//Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBFlyD0knqoArOvCZt8KRs_qsTz-S7nvRI",
    authDomain: "miracle-studio-2.firebaseapp.com",
    databaseURL: "https://miracle-studio-2.firebaseio.com",
    projectId: "miracle-studio-2",
    storageBucket: "miracle-studio-2.appspot.com",
    messagingSenderId: "599190618944",
    appId: "1:599190618944:web:f6ed35cea872c9afb230a5",
    measurementId: "G-Z7LG0N60HQ"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();


//Email login function 
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in.

        document.getElementById("user_div").style.display = "block";
        document.getElementById("login_div").style.display = "none";

        var user = firebase.auth().currentUser;

        if (user != null) {

            var email_id = user.email;
            document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;

        }

    } else {
        // No user is signed in.

        document.getElementById("user_div").style.display = "none";
        document.getElementById("login_div").style.display = "block";

    }
});



function signup() {
    // New user signup here.
    var userEmail = document.getElementById("email_field").value;
    var userPass = document.getElementById("password_field").value;

    firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

        window.alert("Error : " + errorMessage);


    });

}




function login() {

    var userEmail = document.getElementById("email_field").value;
    var userPass = document.getElementById("password_field").value;

    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

        window.alert("Error : " + errorMessage);
    });

}


function logout() {
    firebase.auth().signOut();
}


// Google login starts from h  

function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
}


// function clickButton() {
//     document.getElementById("user_div").style.display = "block";
//     document.getElementById("login_div").style.display = "none";
// }


function facebookbtn() {
    var x = document.getElementById("user_div");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}