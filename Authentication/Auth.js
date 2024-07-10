import { input, password, confirm } from '@inquirer/prompts';
import { log } from '../Main.js';
import chalk from 'chalk';
import figlet from 'figlet';
import { User } from '../Db/models/Users.js';
import listMethods from '../Methods/listMethods.js';
import bcrypt from "bcrypt";

export let userId;

export async function Auth() {
  const haveUser = await confirm({ message: "Do you have an account on this PC?" });

  if (haveUser) {
    await login();
  } else {
    await register();
  }
}

export async function login() {
  log(chalk.blueBright.bold(figlet.textSync("Login")));
  const userName = await input({ message: "Type your username" });
  const userPass = await password({ message: "Type your password", mask: "*" });

  const user = await User.findOne({ where: { username: userName } });

  if (user) {
      // Verifica a senha usando bcrypt
      const isPasswordMatch = await bcrypt.compare(userPass, user.password);

      if (isPasswordMatch) {
          log(chalk.greenBright("Login successful!"));
          userId = user.id;
          listMethods();
      } else {
          log(chalk.redBright("Invalid username or password."));
      }
  } else {
      log(chalk.redBright("Invalid username or password."));
  }
}

async function register() {
  log(chalk.blueBright.bold(figlet.textSync("Register")));
  const userName = await input({ message: "Type your username" });
  const userPass = await password({ message: "Type your password", mask: "*" });

  try {
      // Hash da senha usando bcrypt
      const hashedPassword = await bcrypt.hash(userPass, 10); // 10 rounds de salt

      // Salvando o usuário no banco de dados
      await User.create({
          username: userName,
          password: hashedPassword
      });

      log(chalk.greenBright("User registered successfully!"));

      // Buscando o usuário recém-criado para obter o ID
      const thisUser = await User.findOne({
          where: { username: userName }
      });

      if (thisUser) {
          userId = thisUser.id;
      }
  } catch (error) {
      log(chalk.redBright("Error registering user: " + error.message));
  }

  log(chalk.redBright.italic("Don't forget your password!\nIf you forget it, you will not have access to your account forever!"));
  await login(); // Chamando a função de login após o registro
}

