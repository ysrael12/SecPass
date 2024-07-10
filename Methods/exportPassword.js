import fs from 'fs';
import path from 'path';
import { Passwords } from '../Db/models/Passwords.js';
import { log } from '../Main.js';
import { userId } from '../Authentication/Auth.js';
import chalk from 'chalk';
import { Parser } from 'json2csv';
import { User } from '../Db/models/Users.js';

async function exportPasswords() {
  try {
    const userPasswords = await Passwords.findAll({ where: { userId: userId } });

    if (userPasswords.length === 0) {
      log(chalk.yellow('No passwords found to export.'));
      return;
    }

    const passwordsData = userPasswords.map(pwd => ({
      name: pwd.name,
      url: pwd.url,
      username: pwd.username,
      password: pwd.psw,
      note: pwd.note
    }));

    const fields = ['name', 'url', 'username', 'password', 'note'];
    const opts = { fields };
    const parser = new Parser(opts);
    const csv = parser.parse(passwordsData);

    const thisUser = await User.findAll({where: {
      userId : userId
    }})
    const exportPath = path.join(process.cwd(), `exported_${thisUser.username}_passwords.csv`);
    fs.writeFileSync(exportPath, csv);

    log(chalk.green(`Passwords exported successfully to ${exportPath}`));

  } catch (error) {
    log(chalk.red('Error exporting passwords: ' + error.message));
  }
}

export default exportPasswords;
