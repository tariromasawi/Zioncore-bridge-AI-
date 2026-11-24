// DO NOT MODIFY. This file is auto-generated and managed by ZionCore.
// Re-anchored to project: still-toolbox-466410-s6

import { initializeApp, getApps, type FirebaseApp } from 'firebase/app';
import { getAuth, type Auth } from 'firebase/auth';
import { initializeFirestore, type Firestore } from 'firebase/firestore';

// Corrected configuration for the Sovereign project: still-toolbox-466410-s6
const firebaseConfig = {
  apiKey: "AIzaSyBCOiwA4hrPe6DUesvo6kGJ0egsITx48rk",
  authDomain: "still-toolbox-466410-s6.firebaseapp.com",
  projectId: "still-toolbox-466410-s6",
  storageBucket: "still-toolbox-466410-s6.appspot.com",
  messagingSenderId: "1056505727392",
  appId: "1:1056505727392:web:8bfa49a739864e156dbcc5",
  measurementId: "G-GD40EQD9HE"
};

// Initialize Firebase for sovereign access
let app: FirebaseApp;
let auth: Auth;
let firestore: Firestore;

if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}

auth = getAuth(app);

/**
 * ZIONCORE STABILIZATION: FORCING LONG POLLING
 * This bypasses WebSocket instability to ensure 100% data fidelity.
 */
firestore = initializeFirestore(app, {
  experimentalAutoDetectLongPolling: true,
});

export { app, auth, firestore };
