let solvedCells = [];
const imageSources = [
    'images/barcelona.png',
    'images/iphone.jpg',
    'images/laptop.jpg',
    'images/messi.jpg',
    'images/real.png',
    'images/ronaldo.png',
    'images/sony.png',
    'images/taylorswift.png',
    'images/vietnam.png'
];
const solvedTexts = [
    'barcelona',
    'iphone',
    'laptop',
    'messi',
    'real',
    'ronaldo',
    'sony',
    'taylorswift',
    'vietnam'
];
const questions = [
    'What team is this?',
    'What is this?',
    'What is this?',
    'Who is he?',
    'What team is this?',
    'Who is he?',
    'What brand is this?',
    'Who is she?',
    'What country is this?'
]
const secretText = 'HUDDLE CLUB';

function closeModal() {
    document.getElementById('imageModal').style.display = 'none';
}

function showImage(cell) {
    const cellIndex = parseInt(cell.innerText) - 1;
    if (solvedTexts.includes(cell.innerHTML)) return;

    const modal = document.getElementById('imageModal');
    const modalContent = document.querySelector('.modal-content');
    const modalImage = document.getElementById('modalImage');

    // Remove existing question if any
    const existingQuestion = document.getElementById('modalQuestion');
    if (existingQuestion) {
        modalContent.removeChild(existingQuestion);
    }

    // Create and insert the question paragraph
    const question = document.createElement('p');
    question.id = 'modalQuestion';
    question.innerText = questions[cellIndex];
    modalContent.insertBefore(question, modalImage);

    modalImage.src = imageSources[cellIndex];
    modal.style.display = 'flex';

    modalImage.ondblclick = () => solve(cell);
}


function solve(cell) {
    const cellIndex = parseInt(cell.innerText) - 1;
    cell.innerHTML = solvedTexts[cellIndex];
    solvedCells.push(cell.innerText);
    closeModal();
    checkAllSolved();
}

function checkAllSolved() {
    if (solvedCells.length === 9) {
        document.getElementById('finalSolveButton').classList.remove('hidden');
    }
}

function showFinalImage() {
    document.querySelector('table').style.display = 'none';
    document.getElementById('finalSolveButton').style.display = 'none';
    document.getElementById('imageModal').style.display = 'none';

    const lifestyleText = document.createElement('div');
    lifestyleText.id = 'secretText';
    const text = secretText;
    const colors = ['#00008B', '#8B0000', '#006400', '#8B008B', '#FF8C00', '#8B4513', '#2F4F4F', '#4B0082', '#B22222'];

    text.split('').forEach((char, i) => {
        const span = document.createElement('span');
        span.innerText = char;
        span.style.color = colors[i % colors.length];
        lifestyleText.appendChild(span);
    });

    document.body.appendChild(lifestyleText);
}

window.onclick = (event) => {
    if (event.target == document.getElementById('imageModal')) {
        closeModal();
    }
}
