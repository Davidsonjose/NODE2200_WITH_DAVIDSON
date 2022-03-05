// console.log("Welcome on board..... node is the best😊😊😊");

function getYearOfBirth(dateOfBirth) {
  let currentYear = new Date().getFullYear();
  const answer = currentYear - dateOfBirth;
  return answer;
  // console.log(currentYear);
}

// let functionCalDob = getYearOfBirth(20);
// console.log(functionCalDob);
module.exports = {
  getYearOfBirth: getYearOfBirth,
};

