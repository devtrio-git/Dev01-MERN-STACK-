import * as fs from 'node:fs';

// Create directory, path should be there

// fs.mkdirSync('/home/owais/Desktop/NodeJS/syncapi/devtrio')

// Create directory, path not should be there

// fs.mkdirSync('/home/owais/Desktop/NodeJS/syncapi/devtrio/backend', {recursive: true})

// Read Conten directory
// const files = fs.readdirSync('/home/owais/Desktop/NodeJS/syncapi/devtrio')
// for(const file of files)
//     console.log(file)

// Remove dir
// fs.rmdirSync('/home/owais/Desktop/NodeJS/syncapi/devtrio/backend')


// Create and write file
// fs.writeFileSync('hello.txt', 'HEllo from devtrio')

// Read data
// const data = fs.readFileSync('hello.txt')
// console.log(data)
// const data = fs.readFileSync('hello.txt', 'utf-8')
// console.log(data)

// Append data into file
// fs.appendFileSync('hello.txt', ' backend classes...')

// copy file
// fs.copyFileSync('hello.txt', 'devtrio.txt')

// Get file info
const stats = fs.statSync('/home/owais/Desktop/NodeJS/syncapi/devtrio/hello.js')
console.log(stats)
console.log(stats.isDirectory())
console.log(stats.isFile())










