// 題庫（範例，請依需求擴充，含多益/托福常見題型）
const questions = [
    {
        type: 'TOEIC',
        title: 'Choose the correct word: She _____ to work by bus every day.',
        options: ['go', 'goes', 'going', 'gone'],
        answer: 1,
        explanation: '主詞 She 為第三人稱單數，動詞需加 -s，正確為 goes。'
    },
    {
        type: 'TOEIC',
        title: 'What does the word "purchase" mean?',
        options: ['to buy', 'to sell', 'to repair', 'to borrow'],
        answer: 0,
        explanation: '"Purchase" 的意思是購買（to buy）。'
    },
    {
        type: 'TOEIC',
        title: 'Which sentence is correct?',
        options: [
            'He don’t like coffee.',
            'He doesn’t likes coffee.',
            'He doesn’t like coffee.',
            'He don’t likes coffee.'
        ],
        answer: 2,
        explanation: '第三人稱單數否定句為 "doesn’t + 原形動詞"，正確為 He doesn’t like coffee。'
    },
    {
        type: 'TOEIC',
        title: 'What time is the meeting?',
        options: [
            'It is in the cafeteria.',
            'It is at 2 p.m.',
            'It is about finance.',
            'It is very important.'
        ],
        answer: 1,
        explanation: '問時間，正確答案為 "It is at 2 p.m."。'
    },
    {
        type: 'TOEIC',
        title: 'Choose the best response: "Thank you for your help."',
        options: [
            'You’re welcome.',
            'See you later.',
            'No problem.',
            'Good luck.'
        ],
        answer: 0,
        explanation: '對於感謝，最合適的回應是 "You’re welcome."。'
    },
    {
        type: 'TOEFL',
        title: 'What is the main idea of a passage called?',
        options: [
            'Summary',
            'Detail',
            'Reference',
            'Example'
        ],
        answer: 0,
        explanation: '主旨大意題通常問的是 Summary（摘要）。'
    },
    {
        type: 'TOEFL',
        title: 'Which is a synonym for "rapid"?',
        options: [
            'Slow',
            'Quick',
            'Sad',
            'Old'
        ],
        answer: 1,
        explanation: '"Rapid" 的同義字是 "Quick"（快速的）。'
    },
    {
        type: 'TOEFL',
        title: 'What does "inference" mean in reading?',
        options: [
            'A direct statement',
            'A guess based on evidence',
            'A summary',
            'A definition'
        ],
        answer: 1,
        explanation: '"Inference" 指的是根據證據做出的推論。'
    },
    {
        type: 'TOEFL',
        title: 'Which sentence uses the correct tense?',
        options: [
            'I have saw the movie.',
            'I saw the movie.',
            'I seeing the movie.',
            'I have see the movie.'
        ],
        answer: 1,
        explanation: '正確時態為過去式 "I saw the movie."。'
    },
    {
        type: 'TOEFL',
        title: 'Which word best completes the sentence: "She has lived here _____ 2010."',
        options: [
            'for',
            'since',
            'at',
            'from'
        ],
        answer: 1,
        explanation: 'since + 時間點，for + 一段時間。'
    },
    // 額外五題，混合題型
    {
        type: 'TOEIC',
        title: 'Choose the correct phrase: "I look forward _____ from you soon."',
        options: [
            'hear',
            'hearing',
            'to hear',
            'to hearing'
        ],
        answer: 3,
        explanation: '"look forward to" 後面需接動名詞，正確為 "to hearing"。'
    },
    {
        type: 'TOEIC',
        title: 'Which is correct?',
        options: [
            'There is many cars.',
            'There are many cars.',
            'There is much cars.',
            'There are much cars.'
        ],
        answer: 1,
        explanation: '"cars" 為可數名詞複數，需用 "There are many cars."。'
    },
    {
        type: 'TOEFL',
        title: 'What does "rhetorical purpose" mean?',
        options: [
            'The reason an author uses a certain word or phrase',
            'The definition of a word',
            'The location of a passage',
            'The number of paragraphs'
        ],
        answer: 0,
        explanation: '"Rhetorical purpose" 指的是作者使用某詞語或句子的原因。'
    },
    {
        type: 'TOEFL',
        title: 'Which is a detail question?',
        options: [
            'What does the passage mainly discuss?',
            'According to paragraph 2, what did the scientist discover?',
            'What can be inferred from the passage?',
            'Why did the author write the passage?'
        ],
        answer: 1,
        explanation: '細節題通常問根據某段落的具體內容。'
    },
    {
        type: 'TOEIC',
        title: 'Choose the correct answer: "Please _____ the form before submitting."',
        options: [
            'complete',
            'completes',
            'completing',
            'completed'
        ],
        answer: 0,
        explanation: '"Please + 原形動詞"，正確為 "Please complete the form."。'
    }
];

// 顯示題目
function renderQuestions() {
    const list = document.getElementById('question-list');
    list.innerHTML = '';
    questions.forEach((q, idx) => {
        const li = document.createElement('li');
        li.className = 'question-card';
        li.id = `q${idx}`;
        li.innerHTML = `
      <div class="question-title">${q.title}</div>
      <div class="options">
        ${q.options.map((opt, i) => `
          <label>
            <input type="radio" name="q${idx}" value="${i}" required>
            <span class="option-label">${opt}</span>
          </label>
        `).join('')}
      </div>
      <div class="explain-block hidden" id="explain${idx}"></div>
    `;
        list.appendChild(li);
    });
}

// 分析錯誤原因
function analyzeMistake(q, selectedIdx) {
    if (selectedIdx == q.answer) {
        return {
            type: 'correct',
            text: `✔️ 恭喜答對！<br>${q.explanation}`
        };
    } else {
        let reason = '';
        // 常見錯誤分析（簡化範例）
        if (q.type === 'TOEIC' && q.title.includes('go')) {
            reason = '動詞時態或主詞一致性錯誤。';
        } else if (q.type === 'TOEFL' && q.title.toLowerCase().includes('inference')) {
            reason = '推論題常誤解為直接訊息，需根據上下文推斷。';
        } else {
            reason = '請再複習此題的文法或單字。';
        }
        return {
            type: 'incorrect',
            text: `❌ 答錯。<br>錯誤原因：${reason}<br>正確答案：${q.options[q.answer]}<br>解析：${q.explanation}`
        };
    }
}

// 分數換算
function calcScores(correctCount) {
    // 多益 10~990，托福 10~120
    const toeic = Math.round(10 + (980 * correctCount / questions.length));
    const toefl = Math.round(10 + (110 * correctCount / questions.length));
    return { toeic, toefl };
}

// 顯示分數與解析
function showResult(userAnswers) {
    let correct = 0;
    questions.forEach((q, idx) => {
        const card = document.getElementById(`q${idx}`);
        const explain = document.getElementById(`explain${idx}`);
        const selected = userAnswers[idx];
        const analysis = analyzeMistake(q, selected);
        explain.innerHTML = analysis.text;
        explain.className = `explain-block ${analysis.type}`;
        card.classList.remove('correct', 'incorrect');
        card.classList.add(analysis.type);
        explain.classList.remove('hidden');
        if (analysis.type === 'correct') correct++;
    });
    // 分數顯示
    const scores = calcScores(correct);
    document.getElementById('toeic-score').textContent = scores.toeic;
    document.getElementById('toefl-score').textContent = scores.toefl;
    document.getElementById('correct-count').textContent = correct;
    document.getElementById('score-section').classList.remove('hidden');
    // 滾動到分數區
    document.getElementById('score-section').scrollIntoView({ behavior: 'smooth' });
}

// 表單送出處理
document.getElementById('quiz-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const form = e.target;
    const userAnswers = [];
    for (let i = 0; i < questions.length; i++) {
        const radios = form[`q${i}`];
        let selected = -1;
        if (radios) {
            if (radios.length) {
                for (let r of radios) {
                    if (r.checked) selected = Number(r.value);
                }
            } else {
                if (radios.checked) selected = Number(radios.value);
            }
        }
        userAnswers.push(selected);
    }
    showResult(userAnswers);
    // 禁用所有選項
    const inputs = form.querySelectorAll('input[type="radio"]');
    inputs.forEach(inp => inp.disabled = true);
    // 隱藏送出按鈕
    form.querySelector('.submit-btn').style.display = 'none';
});

// 初始化
renderQuestions();
