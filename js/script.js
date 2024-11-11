document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();  // フォームのデフォルト動作をキャンセル

    const usernameField = document.getElementById("username");
    const passwordField = document.getElementById("password");
    const username = usernameField.value;
    const password = passwordField.value;

    // ユーザー情報の確認処理
    fetch('json/users.json')
        .then(response => response.json())
        .then(data => {
            const user = data.users.find(user => user.username === username && user.password === password);
            if (user) {
                // 認証成功
                document.getElementById("login-result").innerHTML = `ログイン成功！ようこそ、${user.username}さん`;
                sessionStorage.setItem('loggedInUser', JSON.stringify(user));
                window.location.href = "dashboard.html";
            } else {
                // 認証失敗: エラークラスを追加
                document.getElementById("login-result").innerHTML = "ログインに失敗しました。ユーザー名またはパスワードが違います。";
                usernameField.classList.add("error");
                passwordField.classList.add("error");
            }
        });

    // フォーカス時にエラークラスを解除
    usernameField.addEventListener("focus", () => {
        usernameField.classList.remove("error");
    });

    passwordField.addEventListener("focus", () => {
        passwordField.classList.remove("error");
    });
});