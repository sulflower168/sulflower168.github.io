// Firebase構成情報
const firebaseConfig = {
    apiKey: "AIzaSyBhfFiNXhqB5Lko49xQD6SonIJf_f5Wh0Q",
    authDomain: "academic-experiments-project.firebaseapp.com",
    projectId: "academic-experiments-project",
    storageBucket: "academic-experiments-project.firebasestorage.app",
    messagingSenderId: "479824505322",
    appId: "1:479824505322:web:c42a6734dcac994697aa93",
};

// Firebase初期化
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// ログイン状態の監視
auth.onAuthStateChanged((user) => {
    if (user) {
        showUserUI(user);
    } else {
        showAuthUI();
    }
});

// ユーザーがログインしているときのUIを表示
function showUserUI(user) {
    const email = user.email;
    const emailFirst7Chars = email.substring(0, 7); // 先頭7文字を抽出
    document.getElementById("user-login").textContent = `ログイン中: ${emailFirst7Chars.toUpperCase()}`;
}

// ユーザーがログインしていないときのUIを表示
function showAuthUI() {
    document.getElementById("user-login").textContent = `ログイン`;
}