import { error } from 'node:console';
import * as fs from 'node:fs';

// Create directory, path should be there
// fs.mkdir('/home/owais/Desktop/NodeJS/callbackapi/devtrio', (error) => {
//     if(error) throw error;
//     console.log('Directory created...')
// })

// Create directory, path should not be there
// fs.mkdir('/home/owais/Desktop/NodeJS/callbackapi/devtrio/backend', {recursive: true},(error) => {
//     if(error) throw error;
//     console.log('Directory created...')
// })

// Remove directory, Folder should be empty
// fs.rmdir('/home/owais/Desktop/NodeJS/callbackapi/devtrio/backend', (error)=>{
//     if(error) throw error;
//     console.log('Directory is removed')
// })

// Create & write file
// fs.writeFile('devtrio.txt', 'Backend development by DevTrio', (error)=>{
//     if(error) throw error;
//     console.log('File is created..')
// })


// Read File
// Buffer data
// fs.readFile('devtrio.txt', (error, data) => {
//     if(error) throw error;
//     console.log(data);
// })
// UTF-8 data
// fs.readFile('devtrio.txt', 'utf-8',(error, data) => {
//     if(error) throw error;
//     console.log(data);
// })

// Append data in files
// fs.appendFile('devtrio.txt', ' NodeJS on Fire...!', (error) => {
//     if(error) throw error;
//     console.log('Data Appended...')
// })


// Copy File
// fs.copyFile('devtrio.txt', 'info.txt', (error) => {
//     if(error) throw error;
//     console.log('File copied success')
// })

// Get file information
fs.stat('/home/owais/Desktop/NodeJS/callbackapi/devtrio/hello.js', (error, stats)=>{
    if(error) throw error;
    console.log(stats)
    console.log(stats.isDirectory())
    console.log(stats.isFile())
})

















































