const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const answer = prompt(
      'What is your favourite programming language?\n   0: JavaScript\n   1: Python\n   2: Rust\n   3: C++\n(Write option number)'
    );
    answer in [0, 1, 2, 3]
      ? this.answers[answer]++
      : alert('you have to choose between 0, 1, 2, 3');
    this.displayResults('array');
  },
  displayResults(type) {
    if (type === 'array') console.log(this.answers);
    if (type === 'string') console.log(`Poll results are ${[...this.answers]}`);
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));
