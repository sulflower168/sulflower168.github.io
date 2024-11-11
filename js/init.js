// 問題の初期状態
document.addEventListener("DOMContentLoaded", function() {
    const strategyTab = document.querySelector('.menu-detail-tab li:nth-child(1)'); // 1番目のタブ
    strategyTab.classList.add('active');

    // 初期状態でストラテジ系のコンテンツを生成
    if (typeof generateContent === "function") {
        generateContent("ストラテジ系"); // ストラテジ系のコンテンツを生成
    }
});