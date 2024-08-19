// auth-check.js

// Importar las funciones necesarias desde Firebase
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";

// Configuración de Firebase (reemplaza con la tuya)
const firebaseConfig = {
    apiKey: "AIzaSyCZomneoEIvCirHwp2KFQflRAF2OW-Krqc",
    authDomain: "pynexus-academy-99588.firebaseapp.com",
    projectId: "pynexus-academy-99588",
    storageBucket: "pynexus-academy-99588.appspot.com",
    messagingSenderId: "155439680494",
    appId: "1:155439680494:web:ade2b967b4a182a83a9cff",
    measurementId: "G-K6936E5G9Z"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Verificar el estado de autenticación
onAuthStateChanged(auth, (user) => {
    const navRegistrar = document.getElementById('nav-registrar');
    if (user) {
        // Usuario autenticado, ocultar el elemento
        if (navRegistrar) {
            navRegistrar.style.display = 'none';
        }
    } else {
        // Usuario no autenticado, mostrar el elemento
        if (navRegistrar) {
            navRegistrar.style.display = 'block';
        }
    }
});
