// コンテンツタブ制御
document.addEventListener("DOMContentLoaded", function() {
    const tabs = document.querySelectorAll(".menu-detail-tab li");
    const itpassList = document.querySelector(".contents-list");

    // 各タブのコンテンツデータ
    const contentData = {
        "ストラテジ系": [
            { href: "./R06/q1.html", id: "問1", description: "ストラテジ系" },
            { href: "./R06/q2.html", id: "問2", description: "ストラテジ系" },
            { href: "./R06/q3.html", id: "問3", description: "ストラテジ系" },
            { href: "./R06/q4.html", id: "問4", description: "ストラテジ系" },
            { href: "./R06/q5.html", id: "問5", description: "ストラテジ系" },
            { href: "./R06/q6.html", id: "問6", description: "ストラテジ系" },
            { href: "./R06/q7.html", id: "問7", description: "ストラテジ系" },
            { href: "./R06/q8.html", id: "問8", description: "ストラテジ系" },
            { href: "./R06/q9.html", id: "問9", description: "ストラテジ系" },
            { href: "./R06/q10.html", id: "問10", description: "ストラテジ系" },
            { href: "./R06/q11.html", id: "問11", description: "ストラテジ系" },
            { href: "./R06/q12.html", id: "問12", description: "ストラテジ系" },
            { href: "./R06/q13.html", id: "問13", description: "ストラテジ系" },
            { href: "./R06/q14.html", id: "問14", description: "ストラテジ系" },
            { href: "./R06/q15.html", id: "問15", description: "ストラテジ系" },
            { href: "./R06/q16.html", id: "問16", description: "ストラテジ系" },
            { href: "./R06/q17.html", id: "問17", description: "ストラテジ系" },
            { href: "./R06/q18.html", id: "問18", description: "ストラテジ系" },
            { href: "./R06/q19.html", id: "問19", description: "ストラテジ系" },
            { href: "./R06/q20.html", id: "問20", description: "ストラテジ系" },
            { href: "./R06/q21.html", id: "問21", description: "ストラテジ系" },
            { href: "./R06/q22.html", id: "問22", description: "ストラテジ系" },
            { href: "./R06/q23.html", id: "問23", description: "ストラテジ系" },
            { href: "./R06/q24.html", id: "問24", description: "ストラテジ系" },
            { href: "./R06/q25.html", id: "問25", description: "ストラテジ系" },
            { href: "./R06/q26.html", id: "問26", description: "ストラテジ系" },
            { href: "./R06/q27.html", id: "問27", description: "ストラテジ系" },
            { href: "./R06/q28.html", id: "問28", description: "ストラテジ系" },
            { href: "./R06/q29.html", id: "問29", description: "ストラテジ系" },
            { href: "./R06/q30.html", id: "問30", description: "ストラテジ系" },
            { href: "./R06/q31.html", id: "問31", description: "ストラテジ系" },
            { href: "./R06/q32.html", id: "問32", description: "ストラテジ系" },
            { href: "./R06/q33.html", id: "問33", description: "ストラテジ系" },
            { href: "./R06/q34.html", id: "問34", description: "ストラテジ系" },
            { href: "./R06/q35.html", id: "問35", description: "ストラテジ系" }
        ],
        "マネジメント系": [
            { href: "./R06/q36.html", id: "問36", description: "マネジメント系" },
            { href: "./R06/q37.html", id: "問37", description: "マネジメント系" },
            { href: "./R06/q38.html", id: "問38", description: "マネジメント系" },
            { href: "./R06/q39.html", id: "問39", description: "マネジメント系" },
            { href: "./R06/q40.html", id: "問40", description: "マネジメント系" },
            { href: "./R06/q41.html", id: "問41", description: "マネジメント系" },
            { href: "./R06/q42.html", id: "問42", description: "マネジメント系" },
            { href: "./R06/q43.html", id: "問43", description: "マネジメント系" },
            { href: "./R06/q44.html", id: "問44", description: "マネジメント系" },
            { href: "./R06/q45.html", id: "問45", description: "マネジメント系" },
            { href: "./R06/q46.html", id: "問46", description: "マネジメント系" },
            { href: "./R06/q47.html", id: "問47", description: "マネジメント系" },
            { href: "./R06/q48.html", id: "問48", description: "マネジメント系" },
            { href: "./R06/q49.html", id: "問49", description: "マネジメント系" },
            { href: "./R06/q50.html", id: "問50", description: "マネジメント系" },
            { href: "./R06/q51.html", id: "問51", description: "マネジメント系" },
            { href: "./R06/q52.html", id: "問52", description: "マネジメント系" },
            { href: "./R06/q53.html", id: "問53", description: "マネジメント系" },
            { href: "./R06/q54.html", id: "問54", description: "マネジメント系" },
            { href: "./R06/q55.html", id: "問55", description: "マネジメント系" }
        ],
        "テクノロジ系": [
            { href: "./R06/q56.html", id: "問56", description: "テクノロジ系" },
            { href: "./R06/q57.html", id: "問57", description: "テクノロジ系" },
            { href: "./R06/q58.html", id: "問58", description: "テクノロジ系" },
            { href: "./R06/q59.html", id: "問59", description: "テクノロジ系" },
            { href: "./R06/q60.html", id: "問60", description: "テクノロジ系" },
            { href: "./R06/q61.html", id: "問61", description: "テクノロジ系" },
            { href: "./R06/q62.html", id: "問62", description: "テクノロジ系" },
            { href: "./R06/q63.html", id: "問63", description: "テクノロジ系" },
            { href: "./R06/q64.html", id: "問64", description: "テクノロジ系" },
            { href: "./R06/q65.html", id: "問65", description: "テクノロジ系" },
            { href: "./R06/q66.html", id: "問66", description: "テクノロジ系" },
            { href: "./R06/q67.html", id: "問67", description: "テクノロジ系" },
            { href: "./R06/q68.html", id: "問68", description: "テクノロジ系" },
            { href: "./R06/q69.html", id: "問69", description: "テクノロジ系" },
            { href: "./R06/q70.html", id: "問70", description: "テクノロジ系" },
            { href: "./R06/q71.html", id: "問71", description: "テクノロジ系" },
            { href: "./R06/q72.html", id: "問72", description: "テクノロジ系" },
            { href: "./R06/q73.html", id: "問73", description: "テクノロジ系" },
            { href: "./R06/q74.html", id: "問74", description: "テクノロジ系" },
            { href: "./R06/q75.html", id: "問75", description: "テクノロジ系" },
            { href: "./R06/q76.html", id: "問76", description: "テクノロジ系" },
            { href: "./R06/q77.html", id: "問77", description: "テクノロジ系" },
            { href: "./R06/q78.html", id: "問78", description: "テクノロジ系" },
            { href: "./R06/q79.html", id: "問79", description: "テクノロジ系" },
            { href: "./R06/q80.html", id: "問80", description: "テクノロジ系" },
            { href: "./R06/q81.html", id: "問81", description: "テクノロジ系" },
            { href: "./R06/q82.html", id: "問82", description: "テクノロジ系" },
            { href: "./R06/q83.html", id: "問83", description: "テクノロジ系" },
            { href: "./R06/q84.html", id: "問84", description: "テクノロジ系" },
            { href: "./R06/q85.html", id: "問85", description: "テクノロジ系" },
            { href: "./R06/q86.html", id: "問86", description: "テクノロジ系" },
            { href: "./R06/q87.html", id: "問87", description: "テクノロジ系" },
            { href: "./R06/q88.html", id: "問88", description: "テクノロジ系" },
            { href: "./R06/q89.html", id: "問89", description: "テクノロジ系" },
            { href: "./R06/q90.html", id: "問90", description: "テクノロジ系" },
            { href: "./R06/q91.html", id: "問91", description: "テクノロジ系" },
            { href: "./R06/q92.html", id: "問92", description: "テクノロジ系" },
            { href: "./R06/q93.html", id: "問93", description: "テクノロジ系" },
            { href: "./R06/q94.html", id: "問94", description: "テクノロジ系" },
            { href: "./R06/q95.html", id: "問95", description: "テクノロジ系" },
            { href: "./R06/q96.html", id: "問96", description: "テクノロジ系" },
            { href: "./R06/q97.html", id: "問97", description: "テクノロジ系" },
            { href: "./R06/q98.html", id: "問98", description: "テクノロジ系" },
            { href: "./R06/q99.html", id: "問99", description: "テクノロジ系" },
            { href: "./R06/q100.html", id: "問100", description: "テクノロジ系" }
        ]
    };

    // コンテンツを生成する関数
    function generateContent(category) {
        itpassList.innerHTML = ""; // 既存の内容をクリア
        if (contentData[category]) {
            contentData[category].forEach(item => {
                const listItem = document.createElement("li");
                listItem.innerHTML = `
                    <a href="${item.href}" class="list-group">
                        <div class="list-head"><span>${item.id}</span></div>
                        <div class="list-body"><p>${item.description}</p></div>
                    </a>
                `;
                itpassList.appendChild(listItem);
            });
        }
    }

    // タブのクリックイベントを設定
    tabs.forEach(tab => {
        tab.addEventListener("click", function() {
            // 全てのタブからactiveクラスを削除
            tabs.forEach(t => t.classList.remove("active"));
            // クリックされたタブにactiveクラスを追加
            tab.classList.add("active");

            const category = tab.innerText.trim();
            generateContent(category); // 選択されたタブのコンテンツを生成
        });
    });

    // init.jsからの呼び出し用にgenerateContentをエクスポート
    window.generateContent = generateContent;
});