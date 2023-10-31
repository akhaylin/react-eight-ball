/**Takes an array
 * selects a random item from the array and returns it
 */
function getRandomIdx(answers){
  const randomIndex = Math.floor(Math.random() * answers.length)
  return answers[randomIndex]
}

export {getRandomIdx}