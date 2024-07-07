import { stat } from 'node:fs';
import * as fs from 'node:fs/promises';

// Create directory, path should be there
try {
    await fs.mkdir('/home/owais/Desktop/NodeJS/promiseapi/devtrio');
    console.log('Directory created...')
} catch (error) {
    console.log(error)
}


// Create directory, path should not be there
// try {
//     await fs.mkdir('/home/owais/Desktop/NodeJS/promiseapi/devtrio/backend', {recursive: true});
//     console.log('Directory created..')
// } catch (error) {
//     console.log(error)
// }

// Read content of directory
// try {
    // const files = await fs.readdir('/home/owais/Desktop/NodeJS/promiseapi')
    // for(const file of files)
    //     console.log(file)

// } catch (error) {
//     console.log(error)
// }

// Remove Directory, folder must be empty

// try {
//     await fs.rmdir('/home/owais/Desktop/NodeJS/promiseapi/devtrio/backend');
//     console.log('Directory removed..')
// } catch (error) {
//     console.log(error)
// }

// Create & write file
// try {
//     await fs.writeFile('readme.txt', 'DevTrio NodeJS Class');
//     console.log('File is created with text')
// } catch (error) {
//     console.log(error)
// }

// Read File
// data is in buffer
// try {
//     const data = await fs.readFile('readme.txt');
//     console.log(data);
// } catch (error) {
//     console.log(error)
// }
// utf-8 encoding
// try {
//     const data = await fs.readFile('readme.txt', 'utf-8');
//     console.log(data);
// } catch (error) {
//     console.log(error)
// }

// append data into file
// try {
//     await fs.appendFile('readme.txt', ' NODE JS EXPRESS JS');
//     console.log('Data appended..')
// } catch (error) {
//     console.log(error)
// }

// copy file data

// try {
//     await fs.copyFile('readme.txt', '/home/owais/Desktop/NodeJS/promiseapi/devtrio/info.txt')
//     console.log('Filed coped')
// } catch (error) {
//     console.log(error)
// }

// Get file information
// try {
//     const stats = await fs.stat('/home/owais/Desktop/NodeJS/promiseapi/devtrio/info.txt')
//     console.log(stats.isDirectory())
//     console.log(stats.isFile())
//     console.log(stats)
// } catch (error) {
//     console.log(error)
// }

















































































