import 'package:firebase_core/firebase_core.dart';
import 'package:flutter/foundation.dart';

Future initFirebase() async {
  if (kIsWeb) {
    await Firebase.initializeApp(
        options: FirebaseOptions(
            apiKey: "AIzaSyCvI9ZWuxQOiSHCURyEjJo6j417zR5fcaM",
            authDomain: "todo-x27r9y.firebaseapp.com",
            projectId: "todo-x27r9y",
            storageBucket: "todo-x27r9y.firebasestorage.app",
            messagingSenderId: "32046640133",
            appId: "1:32046640133:web:311fd530e6d29639df806c"));
  } else {
    await Firebase.initializeApp();
  }
}
