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

// 最も類似性が高い選択肢を判別する関数
function findMostSimilar(userInput, options) {
    let bestMatch = null;
    let highestScore = 0;

    options.forEach(option => {
        const score = similarityScore(userInput, option);
        if (score > highestScore) {
            highestScore = score;
            bestMatch = option;
        }
    });

    return { bestMatch, highestScore };
}

// 音声認識を開始する関数
function startRecognition() {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = "ja-JP";
    recognition.interimResults = false;

    recognition.start();
    document.getElementById("feedback").textContent = "音声を聞き取っています...";

    recognition.onresult = (event) => {
        const userInput = event.results[0][0].transcript;
        document.getElementById("userInput").textContent = userInput;

        // 最も類似性が高い選択肢を判定
        const { bestMatch, highestScore } = findMostSimilar(userInput, options);

        // ユーザー選択肢と正解を比較
        const isCorrect = bestMatch === correctAnswer;

        // 結果を表示
        document.getElementById("feedback").textContent =
            `あなたの回答:『${bestMatch}』(推定), 一致率: (${highestScore.toFixed(2)}%)` +
            (isCorrect ? " 正解です！" : ` 正解は「${correctAnswer}」`);
        document.getElementById("result-img").src =
            isCorrect ? "../../../img/correct.png" : "../../../img/incorrect.png";
    };

    recognition.onerror = (event) => {
        document.getElementById("feedback").textContent = `エラー: ${event.error}`;
    };
}
