// A&Q

const singleQuestion = document.querySelectorAll('.single-question');

export const AyQ = singleQuestion.forEach(function (question) {
  const btn = question.querySelector('.question-btn');
  btn.addEventListener('click', function () {
    singleQuestion.forEach(function (item) {
      if (item !== question) item.classList.remove('answer-show');
    });

    question.classList.toggle('answer-show');
  });
});
