import { open } from 'node:fs/promises';

function read(){
    myFileReader();
    async function myFileReader() {
        const file = await open('./TextFileName.txt');
        for await (const line of file.readLines()) {
            console.log(line)
        }
    }
    
}