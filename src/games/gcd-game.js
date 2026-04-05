import getGameLaunch from '../index.js'
import getRandomNumber from '../utils.js'

const getGCD = (a, b) => {
  let x = a
  let y = b
  while (y !== 0) {
    const r = x % y
    x = y
    y = r
  }

  return x
}

const playGCD = () => {
  const minNum = 1
  const maxNum = 100
  const firstNumRandom = getRandomNumber(minNum, maxNum)
  const secondNumRandom = getRandomNumber(minNum, maxNum)
  const question = `${firstNumRandom} ${secondNumRandom}`
  const correctAnswer = String(getGCD(firstNumRandom, secondNumRandom))

  return { question, correctAnswer }
}

const startGcdGame = () => {
  getGameLaunch(playGCD, 'Find the greatest common divisor of given numbers.')
}

export default startGcdGame
