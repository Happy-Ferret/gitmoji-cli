const axios = require('axios')

const gitmojiApiClient = axios.create({
  baseURL: 'https://raw.githubusercontent.com/carloscuesta/gitmoji/master',
  timeout: 5000,
  headers: {},
  params: {}
})

const prompts = {
  gitmoji: ':zap:',
  title: 'Improving performance issues.',
  message: 'Refactored code.',
  reference: '5',
  signed: true
}

const promptsJira = {
  gitmoji: ':zap:',
  title: 'Improving performance issues.',
  message: 'Refactored code.',
  reference: 'ABC-123',
  signed: true
}

const gitmojis = [
  { emoji: '⚡️', code: ':zap:', description: '', name: 'zap' }
]

module.exports = {
  gitmojiApiClient,
  prompts,
  promptsJira,
  gitmojis
}
