// script.js

// 预定义的笑话和答案列表
const jokes = [
    { joke: "Why don't scientists trust atoms?", answer: "Because they make up everything!" },
    { joke: "Why did the chicken join a band?", answer: "Because it had the drumsticks!" },
    { joke: "What do you call fake spaghetti?", answer: "An impasta!" },
    { joke: "Why was the math book sad?", answer: "Because it had too many problems." },
    { joke: "How does a penguin build its house?", answer: "Igloos it together!" }
];

// 获取DOM元素
const jokeContainer = document.getElementById('joke');
const answerContainer = document.getElementById('answer');
const revealBtn = document.getElementById('reveal-btn');

// 当前的笑话索引
let currentJokeIndex = null;

// 随机生成笑话的函数
function generateRandomJoke() {
    currentJokeIndex = Math.floor(Math.random() * jokes.length);
    return jokes[currentJokeIndex];
}

// 更新笑话内容并通过音频播报笑话
function updateJoke() {
    const currentJoke = generateRandomJoke();
    jokeContainer.textContent = currentJoke.joke;
    answerContainer.textContent = currentJoke.answer;
    answerContainer.style.display = 'none'; // 隐藏答案
    speakText(currentJoke.joke); // 播放笑话
}

// 显示答案并通过音频播报答案
function revealAnswer() {
    if (currentJokeIndex !== null) {
        answerContainer.style.display = 'block';
        speakText(jokes[currentJokeIndex].answer); // 播放答案
    }
}

// 使用SpeechSynthesis API播放文本
function speakText(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1; // 调整语速，1为正常速度
    speechSynthesis.speak(utterance);
}

// 初始化时立即生成并显示一个随机笑话
updateJoke();

// 点击“Reveal”按钮显示答案
revealBtn.addEventListener('click', revealAnswer);
