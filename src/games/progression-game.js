import getGameLaunch from '../index.js'
import getRandomNumber from '../utils.js'

const buildProgression = (start, step, length) => {
  const numbers = []
  for (let i = 0; i < length; i += 1) {
    numbers.push(start + i * step)
  }

  return numbers
}

const playProgression = () => {
  const minLength = 5
  const maxLength = 10
  const minStart = 1
  const maxStart = 20
  const minStep = 1
  const maxStep = 10

  const length = getRandomNumber(minLength, maxLength)
  const start = getRandomNumber(minStart, maxStart)
  const step = getRandomNumber(minStep, maxStep)
  const numbers = buildProgression(start, step, length)
  const hideIndex = getRandomNumber(0, length - 1)
  const correctAnswer = String(numbers[hideIndex])
  numbers[hideIndex] = '..'
  const question = numbers.join(' ')

  return { question, correctAnswer }
}

const startBrainProgression = () => {
  getGameLaunch(playProgression, 'What number is missing in the progression?')
}

export default startBrainProgression
