import fs from 'fs';
import path from 'path';
import csv from 'csv-parser';
import bcrypt from 'bcrypt';
import inquirer from 'inquirer';
import chalk from 'chalk';
import { Passwords } from '../Db/models/Passwords.js';
import { log } from '../Main.js';
import { userId } from '../Authentication/Auth.js';
import listMethods from './listMethods.js';

async function uploadPasswords() {
  const { filePath } = await inquirer.prompt({
    name: 'filePath',
    type: 'input',
    message: 'Enter the path of the CSV file:',
    validate: input => fs.existsSync(input) ? true : 'File does not exist. Please enter a valid path.'
  });

  const results = [];
  const absoluteFilePath = path.isAbsolute(filePath) ? filePath : path.join(process.cwd(), filePath);

  fs.createReadStream(absoluteFilePath)
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', async () => {
      try {
        for (const row of results) {
          const { name, url, username, password, note } = row;

          await Passwords.create({
            name: name,
            url: url,
            username: username,
            psw: password,
            note: note,
            userId: userId // Certifique-se de que userId está definido corretamente
          });
        }
        log(chalk.green('Passwords imported successfully'));
      } catch (error) {
        log(chalk.red('Error importing passwords: ' + error.message));
      }
    });
    listMethods();
}

export default uploadPasswords;
