<script type="module">
    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js";
    import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-analytics.js";

    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
    apiKey: "AIzaSyAaxpqvxfhPPj4ens_HvfnlAT3-6Qx7MEA",
    authDomain: "scaladev.firebaseapp.com",
    projectId: "scaladev",
    storageBucket: "scaladev.appspot.com",
    messagingSenderId: "66839936636",
    appId: "1:66839936636:web:938c46d84cc70b496b93f9",
    measurementId: "G-V08Y5PPH31"
};

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
</script>