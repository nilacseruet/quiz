// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-ve_suzb3nULDHJE4G_gkHQcMx97asf8",
  authDomain: "nilacseruet.github.io",
  projectId: "quize-44349",
  storageBucket: "quize-44349.firebasestorage.app",
  messagingSenderId: "80986581205",
  appId: "1:80986581205:web:b44731bdefbf15a8959a5c",
  measurementId: "G-K3XP09NTJ1"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// Load quiz questions
async function loadQuestions() {
    try {
        const response = await fetch('input/questions.json');
        const data = await response.json();
        return data.questions;
    } catch (error) {
        console.error('Error loading questions:', error);
        throw error;
    }
}

// Generate quiz HTML
function generateQuizHTML(questions) {
    const quizForm = document.getElementById('quiz-form');
    const questionsHTML = questions.map((q, index) => `
        <div class="question-group" data-question-id="${q.id}">
            <div class="question-text">${index + 1}. ${q.text}</div>
            <div class="choices-group">
                ${q.options.map((option, optIndex) => `
                    <label class="choice-container">
                        <input type="radio" name="${q.id}" value="${optIndex}" required>
                        ${option}
                    </label>
                `).join('')}
            </div>
            <div class="correct-answer-text"></div>
        </div>
    `).join('');

    // Insert questions before the score banner
    const scoreBanner = document.getElementById('score-banner');
    quizForm.innerHTML = questionsHTML + quizForm.innerHTML.substring(quizForm.innerHTML.indexOf('<div id="score-banner"'));
}

// Highlight correct and incorrect answers
function highlightAnswers(formData, questions) {
    questions.forEach(question => {
        const questionGroup = document.querySelector(`[data-question-id="${question.id}"]`);
        const selectedAnswer = formData.get(question.id);
        const correctAnswer = question.correctAnswer.toString();
        const choices = questionGroup.querySelectorAll('.choice-container');
        
        choices.forEach((choice, index) => {
            const radio = choice.querySelector('input[type="radio"]');
            if (radio.value === selectedAnswer) {
                if (selectedAnswer === correctAnswer) {
                    choice.classList.add('correct');
                } else {
                    choice.classList.add('incorrect');
                }
            } else if (radio.value === correctAnswer) {
                choice.classList.add('correct');
            }
            radio.disabled = true;
        });

        // Show correct answer text if answer was wrong
        if (selectedAnswer !== correctAnswer) {
            const correctAnswerText = questionGroup.querySelector('.correct-answer-text');
            correctAnswerText.textContent = `Correct answer: ${question.options[question.correctAnswer]}`;
            correctAnswerText.style.display = 'block';
        }
    });
}

// Calculate score based on loaded questions
function calculateScore(formData, questions) {
    let score = 0;
    
    questions.forEach(question => {
        const answer = formData.get(question.id);
        if (answer === question.correctAnswer.toString()) {
            score++;
        }
    });

    return {
        score,
        totalQuestions: questions.length,
        percentage: (score / questions.length) * 100
    };
}

// Store loaded data globally
let quizQuestions = [];
let groupOptions = [];

// Load group options
async function loadQuizTitle() {
    try {
        const response = await fetch('input/group.json', { cache: 'no-store' });
        const data = await response.json();
        document.getElementById('quiz_title').innerHTML = data.quiz_title;

        console.log('Quiz title loaded:', data.quiz_title);
        return data.quiz_title;
    } catch (error) {
        console.error('Error loading quiz_title:', error);
        throw error;
    }
}

// Load group options
async function loadGroups() {
    try {
        const response = await fetch('input/group.json');
        const data = await response.json();
        return data.groups;
    } catch (error) {
        console.error('Error loading groups:', error);
        throw error;
    }
}

// Populate group dropdown
function populateGroupSelect(groups) {
    const groupSelect = document.getElementById('group');
    const defaultOption = '<option value="" disabled selected>Select Group *</option>';
    groupSelect.innerHTML = defaultOption;
    
    groups.forEach(group => {
        const option = document.createElement('option');
        option.value = group.value;
        option.textContent = group.label;
        groupSelect.appendChild(option);
    });
}

// Update authentication state display
function updateAuthState(user) {
    const authState = document.getElementById('auth-state');
    authState.style.display = 'block';
    
    if (user) {
        authState.textContent = `Authenticated (Anonymous User ID: ${user.uid})`;
        authState.style.backgroundColor = '#e6ffe6';
        authState.style.color = '#006600';
    } else {
        authState.textContent = 'Not authenticated';
        authState.style.backgroundColor = '#ffe6e6';
        authState.style.color = '#990000';
    }
}

// Show error/success messages
function showMessage(type, message) {
    const successMessage = document.getElementById('successMessage');
    const errorMessage = document.getElementById('error');
    
    if (type === 'success') {
        successMessage.textContent = message;
        successMessage.style.display = 'block';
        errorMessage.style.display = 'none';
        setTimeout(() => {
            successMessage.style.display = 'none';
        }, 3000);
    } else {
        errorMessage.textContent = message;
        errorMessage.style.display = 'block';
        successMessage.style.display = 'none';
    }
}

// Show score in banners
function displayScore(scoreData) {
    const scoreText = `Quiz Score: ${scoreData.score}/${scoreData.totalQuestions} (${scoreData.percentage.toFixed(2)}%)`;
    
    // Update top banner
    const topBanner = document.getElementById('top-score-banner');
    topBanner.textContent = scoreText;
    topBanner.style.display = 'block';
    
    // Update bottom banner
    const bottomBanner = document.getElementById('bottom-score-banner');
    bottomBanner.textContent = scoreText;
    bottomBanner.style.display = 'block';
}

// Handle form submission
async function handleSubmit(e) {
    e.preventDefault();
    
    const submitButton = document.getElementById('submit-btn');
    submitButton.disabled = true;
    
    try {
        // Check authentication
        if (!auth.currentUser) {
            throw new Error('Please wait for authentication to complete');
        }

        // Validate name and group
        const name = document.getElementById('name').value.trim();
        const group = document.getElementById('group').value;
        const quizTitle = document.getElementById('quiz_title').textContent;

        if (!name) {
            throw new Error('Please enter your name');
        }
        if (!group) {
            throw new Error('Please select your group');
        }

        // Get form data and calculate score
        const formData = new FormData(e.target);
        const scoreData = calculateScore(formData, quizQuestions);

        // Set marks field
        document.getElementById('marks').value = scoreData.score;
        const marks = scoreData.score;

        // Prepare data for Firestore - only storing essential data
        const quizData = {
            Name: name,
            Group: group,
            Marks: marks,
            Quiz_title: quizTitle,
            Percentage: parseFloat(scoreData.percentage.toFixed(2)),
            Timestamp: new Date().toISOString(),
            UserId: auth.currentUser.uid
        };

        // Save to Firestore
        await db.collection("quiz").add(quizData);

        // Show results and highlight answers
        displayScore(scoreData);
        highlightAnswers(formData, quizQuestions);
        showMessage('success', 'Quiz submitted and data saved successfully!');

        // Reset input fields
        document.getElementById('name').value = '';
        document.getElementById('group').value = '';
        document.getElementById('marks').value = '';

        // Disable submit button after submission
        submitButton.style.display = 'none';

    } catch (error) {
        console.error("Error submitting data:", error);
        showMessage('error', error.message);
        submitButton.disabled = false;
    }
}

// Initialize app
async function init() {
    try {
        // Load questions and groups
        [quizQuestions, groupOptions] = await Promise.all([
            loadQuestions(),
            loadGroups(),
            loadQuizTitle()
        ]);

        // Generate quiz form and populate groups
        generateQuizHTML(quizQuestions);
        populateGroupSelect(groupOptions);

        // Set up auth state listener
        auth.onAuthStateChanged((user) => {
            console.log('Auth state changed:', user ? 'authenticated' : 'not authenticated');
            updateAuthState(user);
        });
        
        // Attempt anonymous sign in
        await auth.signInAnonymously();
        console.log('Anonymous authentication initiated');

        // Set up form submission handler
        const quizForm = document.getElementById('quiz-form');
        quizForm.addEventListener('submit', handleSubmit);

    } catch (error) {
        console.error("Error initializing app:", error);
        showMessage('error', error.message);
    }
}

// Start the application
init();
