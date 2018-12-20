#!/usr/bin/env node

const chalk = require('chalk')
const boxen = require('boxen')

const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

const data = {
  name: chalk.white('Shelley Vohr/'),
  handle: chalk.cyan('codebytere'),
  work: chalk.white('Software Engineer at GitHub'),
  twitter: chalk.cyan('https://twitter.com/codebytere'),
  github: chalk.cyan('https://github.com/codebytere'),
  linkedin: chalk.cyan('https://linkedin.com/in/codebytere'),
  website: chalk.cyan('http://codebyte.re'),
  npx: chalk.white('npx codebytere'),
  labelWork: chalk.white.bold('      Work:'),
  labelTwitter: chalk.white.bold('   Twitter:'),
  labelGitHub: chalk.white.bold('    GitHub:'),
  labelLinkedIn: chalk.white.bold('  LinkedIn:'),
  labelWeb: chalk.white.bold('       Web:'),
  labelCard: chalk.white.bold('      Card:')
}

// Actual strings we're going to output
const heading = `${data.name} ${data.handle}`
const work = `${data.labelWork}  ${data.work}`
const twitter = `${data.labelTwitter}  ${data.twitter}`
const github = `${data.labelGitHub}  ${data.github}`
const linkedin = `${data.labelLinkedIn}  ${data.linkedin}`
const website = `${data.labelWeb}  ${data.website}`
const card = `${data.labelCard}  ${data.npx}`

const output = `${heading}\n\n${work}\n${twitter}\n${github}\n${linkedin}\n${website}\n\n${card}`

console.log(chalk.green(boxen(output, options)))
