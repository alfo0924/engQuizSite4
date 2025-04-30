// 題庫 (範例題目，請依需求擴充)
const questions = [
    {
        type: 'toeic',
        question: "What does the word 'annual' mean?",
        options: [
            "Happening every year",
            "Very expensive",
            "Unusual",
            "Related to animals"
        ],
        answer: 0,
        explanation: "‘Annual’ means happening every year. For example, an annual meeting is held once every year.",
        errorType: "Vocabulary misunderstanding"
    },
    {
        type: 'toefl',
        question: "In the passage, what is the main purpose of the experiment described?",
        options: [
            "To prove a theory",
            "To test a hypothesis",
            "To describe a process",
            "To compare results"
        ],
        answer: 1,
        explanation: "The experiment is designed to test a hypothesis, as stated in the passage.",
        errorType: "Purpose identification"
    },
    {
        type: 'toeic',
        question: "Choose the correct sentence.",
        options: [
            "He go to work every day.",
            "He goes to work every day.",
            "He going to work every day.",
            "He gone to work every day."
        ],
        answer: 1,
        explanation: "‘He goes to work every day.’ is correct. The verb needs an 's' for third person singular present tense.",
        errorType: "Grammar tense"
    },
    {
        type: 'toefl',
        question: "What can be inferred from the passage?",
        options: [
            "The author disagrees with the results.",
            "The results were unexpected.",
            "The experiment failed.",
            "The method was incorrect."
        ],
        answer: 1,
        explanation: "The passage suggests the results were unexpected, as the outcome surprised the researchers.",
        errorType: "Inference"
    },
    {
        type: 'toeic',
        question: "Which is closest in meaning to 'mandatory'?",
        options: [
            "Optional",
            "Required",
            "Unlikely",
            "Temporary"
        ],
        answer: 1,
        explanation: "‘Mandatory’ means required or compulsory.",
        errorType: "Vocabulary"
    },
    {
        type: 'toefl',
        question: "Why does the author mention 'climate change' in the passage?",
        options: [
            "To introduce a new topic",
            "To provide an example",
            "To contradict a previous statement",
            "To summarize the main idea"
        ],
        answer: 1,
        explanation: "The mention of 'climate change' serves as an example supporting the main argument.",
        errorType: "Supporting detail"
    },
    {
        type: 'toeic',
        question: "The meeting has been postponed ____ next week.",
        options: [
            "at",
            "in",
            "to",
            "on"
        ],
        answer: 2,
        explanation: "‘Postponed to next week’ is the correct preposition usage.",
        errorType: "Preposition"
    },
    {
        type: 'toefl',
        question: "What does the author imply about the new policy?",
        options: [
            "It is controversial",
            "It is widely accepted",
            "It is temporary",
            "It is not effective"
        ],
        answer: 0,
        explanation: "The author implies the policy is controversial by mentioning the debates surrounding it.",
        errorType: "Implied meaning"
    },
    {
        type: 'toeic',
        question: "Which sentence is correct?",
        options: [
            "She have finished her work.",
            "She has finished her work.",
            "She finishing her work.",
            "She finish her work."
        ],
        answer: 1,
        explanation: "‘She has finished her work.’ uses the correct present perfect tense.",
        errorType: "Tense"
    },
    {
        type: 'toefl',
        question: "According to the passage, what is the main reason for migration?",
        options: [
            "Economic opportunities",
            "Political instability",
            "Climate change",
            "Cultural exchange"
        ],
        answer: 0,
        explanation: "The passage states economic opportunities as the main reason for migration.",
        errorType: "Main idea"
    },
    {
        type: 'toeic',
        question: "If you need assistance, please ____ the help desk.",
        options: [
            "contact",
            "contacts",
            "contacting",
            "contacted"
        ],
        answer: 0,
        explanation: "‘Please contact the help desk.’ uses the base form after ‘please’.",
        errorType: "Verb form"
    },
    {
        type: 'toefl',
        question: "What is the author's attitude toward the solution proposed?",
        options: [
            "Supportive",
            "Neutral",
            "Skeptical",
            "Unaware"
        ],
        answer: 2,
        explanation: "The author expresses skepticism by questioning the effectiveness of the solution.",
        errorType: "Author attitude"
    },
    {
        type: 'toeic',
        question: "Which is the best synonym for 'efficient'?",
        options: [
            "Effective",
            "Wasteful",
            "Slow",
            "Expensive"
        ],
        answer: 0,
        explanation: "‘Efficient’ means effective and productive.",
        errorType: "Vocabulary"
    },
    {
        type: 'toefl',
        question: "What does the word 'subsequent' mean in the passage?",
        options: [
            "Previous",
            "Following",
            "Unrelated",
            "Simultaneous"
        ],
        answer: 1,
        explanation: "‘Subsequent’ means following or coming after.",
        errorType: "Vocabulary"
    },
    {
        type: 'toeic',
        question: "The report must be submitted ____ Friday.",
        options: [
            "in",
            "at",
            "on",
            "to"
        ],
        answer: 2,
        explanation: "‘On Friday’ is the correct preposition for days of the week.",
        errorType: "Preposition"
    }
];

// UI/UX 十大原則對應提示
const uxTips = {
    "Vocabulary misunderstanding": "建議多閱讀英文文章並整理常見單字，遇到不懂的詞可查字典並記錄。",
    "Purpose identification": "練習找出題目或段落的主旨與目的，常見於托福閱讀。",
    "Grammar tense": "複習英文時態規則，特別是第三人稱單數與完成式。",
    "Inference": "多練習推論題，從上下文找線索。",
    "Preposition": "熟悉常用介系詞搭配，建議做題時歸納錯誤。",
    "Implied meaning": "學會辨識作者立場與隱含意義，托福常考。",
    "Supporting detail": "練習找出細節如何支持主旨。",
    "Tense": "注意動詞時態與主詞一致性。",
    "Main idea": "練習快速抓住段落主旨。",
    "Verb form": "熟悉動詞變化與正確用法。",
    "Author attitude": "托福閱讀常問作者態度，需從語氣或修飾詞判斷。"
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
