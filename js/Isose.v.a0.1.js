function startRecognition() {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = "ja-JP";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.start();

    document.getElementById("feedback").textContent = "音声を聞き取っています...";
    recognition.onresult = (event) => {
        const userInput = event.results[0][0].transcript;
        document.getElementById("userInput").textContent = userInput;

        const similarity = similarityScore(userInput, correctAnswer);
        document.getElementById("feedback").textContent = 
            similarity > 70
            ? `正解に近いです！(${similarity.toFixed(2)}%)` 
            : `不正解です (${similarity.toFixed(2)}%)`;
        
        document.getElementById("bar-area").innerHTML = 
            similarity > 70
            ? `<div class="bar"></div><div class="bar-active" style="width:${similarity.toFixed(2)}%;"></div>` 
            : `<div class="bar"></div><div class="bar-active" style="width:${similarity.toFixed(2)}%;"></div>`;

        document.getElementById("bar-fukidashi").innerHTML = 
            similarity > 70
            ? `<div class="bar-fukidashi" style="margin-left:${similarity.toFixed(2)}%;"><span id="feedback">${Math.floor(similarity)}</span>%</div>` 
            : `<div class="bar-fukidashi" style="margin-left:${similarity.toFixed(2)}%;"><span id="feedback">${Math.floor(similarity)}</span>%</div>`;
    };

    recognition.onspeechend = () => {
        recognition.stop();
    };

    recognition.onerror = (event) => {
        document.getElementById("feedback").textContent = `エラーが発生しました: ${event.error}`;
    };
}

// レーベンシュタイン距離を計算する関数
function levenshteinDistance(s1, s2) {
    const len1 = s1.length;
    const len2 = s2.length;
    const dp = Array.from(Array(len1 + 1), () => Array(len2 + 1).fill(0));

    for (let i = 0; i <= len1; i++) dp[i][0] = i;
    for (let j = 0; j <= len2; j++) dp[0][j] = j;

    for (let i = 1; i <= len1; i++) {
        for (let j = 1; j <= len2; j++) {
            if (s1[i - 1] === s2[j - 1]) dp[i][j] = dp[i - 1][j - 1];
            else dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
        }
    }
    return dp[len1][len2];
}

// 類似度スコアを計算する関数
function similarityScore(s1, s2) {
    const maxLen = Math.max(s1.length, s2.length);
    const distance = levenshteinDistance(s1, s2);
    return ((maxLen - distance) / maxLen) * 100;
}