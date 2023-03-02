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
    this.displayResults('string');
  },
  displayResults(type) {
    if (type === 'array') console.log(this.answers);
    if (type === 'string')
      console.log(`Poll results are ${this.answers.join(', ')}`);
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

// Jonas
const poll1 = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    // Get answer
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );
    console.log(answer);

    // Register answer
    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;

    this.displayResults();
    this.displayResults('string');
  },

  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      // Poll results are 13, 2, 4, 1
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll1.registerNewAnswer.bind(poll1));

// BONUS
// [5, 2, 3]
// [1, 5, 3, 9, 6, 1]
poll1.displayResults.call({ answers: [5, 2, 3] }, 'string');
poll1.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
poll1.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });
