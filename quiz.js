// 文法與詞彙題目（多益/托福混合，含解析與錯誤類型）
const questions = [
    // TOEIC Grammar/Vocab
    {
        type: 'toeic',
        question: "The meeting has been postponed ____ next Monday.",
        options: ["at", "in", "to", "on"],
        answer: 2,
        explanation: "‘Postponed to next Monday’ is the correct preposition usage. 'To' is used to indicate the new time.",
        errorType: "Preposition"
    },
    {
        type: 'toeic',
        question: "Jeffery Wong is an extremely innovative employee who has come ____ some very profitable ideas.",
        options: ["over", "with", "to", "at"],
        answer: 1,
        explanation: "The phrase is 'come up with ideas', meaning to invent or create ideas.",
        errorType: "Collocation"
    },
    {
        type: 'toeic',
        question: "Good telephone ____ are essential for all our receptionists.",
        options: ["reactions", "comments", "opinions", "manners"],
        answer: 3,
        explanation: "'Manners' refers to polite or appropriate behavior, which is essential for receptionists.",
        errorType: "Vocabulary"
    },
    {
        type: 'toeic',
        question: "The new site will ____ the exchange of data between branches.",
        options: ["encourage", "encouraged", "encouraging", "encouragement"],
        answer: 0,
        explanation: "The verb 'will' should be followed by the base form 'encourage'.",
        errorType: "Verb form"
    },
    {
        type: 'toeic',
        question: "Ms. Juárez placed the ad in a magazine that has a wide ____ among our target audience.",
        options: ["circulation", "calculation", "organization", "administration"],
        answer: 0,
        explanation: "'Circulation' refers to the number of copies distributed, which fits the context.",
        errorType: "Vocabulary"
    },
    // TOEFL Grammar/Vocab
    {
        type: 'toefl',
        question: "Despite ____ hard, he failed the exam.",
        options: ["to study", "studied", "studying", "study"],
        answer: 2,
        explanation: "'Despite' is followed by a noun or gerund, so 'studying' is correct.",
        errorType: "Gerund/Participle"
    },
    {
        type: 'toefl',
        question: "Choose the grammatically correct sentence.",
        options: [
            "She don't like coffee.",
            "She doesn't likes coffee.",
            "She doesn't like coffee.",
            "She not likes coffee."
        ],
        answer: 2,
        explanation: "'She doesn't like coffee.' is correct. Use 'doesn't' + base verb.",
        errorType: "Negative structure"
    },
    {
        type: 'toefl',
        question: "If I ____ more time, I would travel the world.",
        options: ["have", "had", "will have", "has"],
        answer: 1,
        explanation: "This is a second conditional. Use 'If I had... I would...'.",
        errorType: "Conditional"
    },
    {
        type: 'toefl',
        question: "He is ____ than his brother.",
        options: ["more tall", "taller", "tallest", "most tall"],
        answer: 1,
        explanation: "Comparative form for 'tall' is 'taller'.",
        errorType: "Comparative"
    },
    {
        type: 'toefl',
        question: "The report must be submitted ____ Friday.",
        options: ["in", "at", "on", "to"],
        answer: 2,
        explanation: "'On Friday' is correct for days of the week.",
        errorType: "Preposition"
    },
    // TOEIC Grammar/Vocab
    {
        type: 'toeic',
        question: "Successful companies share certain common ____.",
        options: ["character", "characterize", "characterizing", "characteristics"],
        answer: 3,
        explanation: "'Characteristics' is the noun meaning features or qualities.",
        errorType: "Word form"
    },
    {
        type: 'toeic',
        question: "The company accountant, ____ office is on the fourth floor, is very experienced.",
        options: ["who", "whose", "what", "where"],
        answer: 1,
        explanation: "'Whose' is the possessive relative pronoun referring to 'accountant's office'.",
        errorType: "Relative pronoun"
    },
    {
        type: 'toeic',
        question: "Our new line of household appliances is ____ priced.",
        options: ["conditionally", "eligibly", "affordably", "uncertainly"],
        answer: 2,
        explanation: "'Affordably' means priced so that people can afford them.",
        errorType: "Vocabulary"
    },
    {
        type: 'toeic',
        question: "The design team has provided ____ suggestions for the new product.",
        options: ["value", "valued", "valuable", "valuably"],
        answer: 2,
        explanation: "'Valuable' is the correct adjective to describe suggestions.",
        errorType: "Adjective usage"
    },
    {
        type: 'toefl',
        question: "Which sentence is correct?",
        options: [
            "He have finished his homework.",
            "He has finished his homework.",
            "He finishing his homework.",
            "He finish his homework."
        ],
        answer: 1,
        explanation: "'He has finished his homework.' uses the correct present perfect tense.",
        errorType: "Tense"
    }
];

// UI/UX 十大原則對應提示
const uxTips = {
    "Preposition": "熟悉常用介系詞搭配，建議做題時歸納錯誤。",
    "Collocation": "多閱讀英文例句，熟悉常見動詞與介系詞的固定搭配。",
    "Vocabulary": "建議多閱讀英文文章並整理常見單字，遇到不懂的詞可查字典並記錄。",
    "Verb form": "注意助動詞後應接原形動詞。",
    "Gerund/Participle": "記住介系詞與特定連接詞後常接動名詞（V-ing）。",
    "Negative structure": "否定句需用助動詞+原形動詞，注意主詞與助動詞一致性。",
    "Conditional": "第二條件句為if+過去式，would+原形動詞。",
    "Comparative": "形容詞比較級規則需熟記，短字尾加-er。",
    "Word form": "根據句意選擇正確詞性（名詞/動詞/形容詞）。",
    "Relative pronoun": "關係代名詞需與先行詞性質相符。",
    "Adjective usage": "形容詞修飾名詞，副詞修飾動詞或形容詞。",
    "Tense": "注意動詞時態與主詞一致性。"
};

// 隨機排列題目
function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// 顯示題目
function renderQuestions() {
    const quizDiv = document.getElementById('quiz-questions');
    quizDiv.innerHTML = '';
    // 為了後續對應，將題目順序記錄下來
    window.selectedQuestions = shuffle([...questions]).slice(0, 15);
    window.selectedQuestions.forEach((q, idx) => {
        const optionsHtml = q.options.map((opt, i) => `
      <label class="option-label" for="q${idx}_opt${i}">
        <input type="radio" name="q${idx}" id="q${idx}_opt${i}" value="${i}" class="form-check-input" required>
        <span>${opt}</span>
      </label>
    `).join('');
        quizDiv.innerHTML += `
      <div class="question-block" data-idx="${idx}">
        <div class="question-title">${idx + 1}. ${q.question}</div>
        <div class="options">${optionsHtml}</div>
        <div class="result-feedback"></div>
      </div>
    `;
    });
}

// 計算分數
function calculateScore(answers) {
    let correct = 0, toeic = 0, toefl = 0, toeicCount = 0, toeflCount = 0;
    let details = [];
    window.selectedQuestions.forEach((q, idx) => {
        const userAns = answers[idx];
        const isCorrect = userAns == q.answer;
        if (isCorrect) correct++;
        if (q.type === 'toeic') {
            toeicCount++;
            if (isCorrect) toeic++;
        } else {
            toeflCount++;
            if (isCorrect) toefl++;
        }
        details.push({ ...q, userAns, isCorrect });
    });
    // 多益、托福分數換算（簡易線性換算，僅供參考）
    const toeicScore = toeicCount ? Math.round(10 + (toeic / toeicCount) * 980) : 0;
    const toeflScore = toeflCount ? Math.round(10 + (toefl / toeflCount) * 110) : 0;
    return { correct, total: 15, toeicScore, toeflScore, details };
}

// 顯示錯誤統計
function renderErrorStatistics(result) {
    const errorTypes = {};
    result.details.forEach(q => {
        if (!q.isCorrect) errorTypes[q.errorType] = (errorTypes[q.errorType] || 0) + 1;
    });
    const statDiv = document.getElementById('error-statistics');
    if (Object.keys(errorTypes).length > 0) {
        statDiv.style.display = 'block';
        statDiv.innerHTML = `
      <strong>錯誤類型統計：</strong>
      <ul class="mb-0">
        ${Object.entries(errorTypes).map(([type, count]) =>
            `<li>${type}：${count} 題，建議：${uxTips[type] || "請多加練習"}</li>`
        ).join('')}
      </ul>
    `;
    } else {
        statDiv.style.display = 'none';
        statDiv.innerHTML = '';
    }
}

// 顯示每題詳解
function renderPerQuestionAnalysis(result) {
    result.details.forEach((q, idx) => {
        const block = document.querySelector(`.question-block[data-idx="${idx}"]`);
        // 標記選項
        const labels = block.querySelectorAll('.option-label');
        labels.forEach((label, i) => {
            label.classList.remove('correct', 'incorrect', 'selected');
            if (q.userAns == i) label.classList.add('selected');
            if (q.answer === i) label.classList.add('correct');
            else if (q.userAns == i && !q.isCorrect) label.classList.add('incorrect');
            // 禁用radio
            const radio = label.querySelector('input[type="radio"]');
            radio.disabled = true;
        });
        // 顯示回饋
        const userOpt = q.userAns !== undefined ? q.options[q.userAns] : '未作答';
        const correctOpt = q.options[q.answer];
        block.querySelector('.result-feedback').innerHTML = `
      <div>
        ${q.isCorrect
            ? `<span class="text-success fw-bold">✔ 正確</span>`
            : `<span class="text-danger fw-bold">✘ 錯誤</span>，你的答案：${userOpt} <br> 正確答案：<span class="fw-bold">${correctOpt}</span>`
        }
      </div>
      <div class="explanation">${q.explanation}</div>
      <div class="analysis">${q.isCorrect
            ? "解析：你答對了，因為 " + q.explanation
            : "錯誤類型：" + q.errorType + "<br>建議：" + (uxTips[q.errorType] || "請多加練習相關題型。")
        }</div>
    `;
    });
}

// 顯示分數
function renderScore(result) {
    const scoreDiv = document.getElementById('score-summary');
    scoreDiv.classList.remove('d-none');
    scoreDiv.innerHTML = `
    <div>
      🎉 Your Score: <span class="fw-bold">${result.correct} / ${result.total}</span>
      <br>
      <span class="me-3">TOEIC 預估：<span class="fw-bold">${result.toeicScore}</span> / 990</span>
      <span>TOEFL 預估：<span class="fw-bold">${result.toeflScore}</span> / 120</span>
    </div>
  `;
}

// 送出事件
document.getElementById('quiz-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(this);
    const answers = [];
    for (let i = 0; i < 15; i++) {
        answers.push(formData.get(`q${i}`) !== null ? Number(formData.get(`q${i}`)) : undefined);
    }
    const result = calculateScore(answers);
    renderScore(result);
    renderErrorStatistics(result);
    renderPerQuestionAnalysis(result);
    document.getElementById('submit-btn').disabled = true;
});

// 初始化
renderQuestions();
