/*
  ⚠️ ЗАДАНИЕ ПОВЫШЕННОЙ СЛОЖНОСТИ - ВЫПОЛНЯТЬ ПО ЖЕЛАНИЮ
  
  Напишите скрипт авторизации пользователя.
  
  Есть массив паролей зарегистрированных пользователей passwords. 
  
  При посещении страницы, необходимо попросить пользователя ввести свой пароль,
  после чего проверить содержит ли массив passwords пароль введенный пользователем.
  
  Пароль можно ввести не верно всего n раз, кол-во хранится в переменной attempts.
  Подсказка: используйте цикл do...while.
  Если был введен пароль который есть в массиве passwords, вывести alert 
  с текстом 'Добро пожаловать!' и прекратить спрашивать пароль в цикле.
  Если был введен не существующий пароль, отнять от лимита попыток единицу, 
  вывести alert с текстом "Неверный пароль, у вас осталось n попыток", 
  где n это оставшийся лимит. 
  
  После того как пользователь закрыл alert, запросить пароль снова. 
  Продолжать запрашивать пароль до тех пор, пока пользователь не введет 
  существующий пароль, не кончатся попытки или пока пользователь 
  не нажмет Cancel в prompt.
  Если закончились попытки, вывести alert с текстом "У вас закончились попытки, аккаунт заблокирован!"
  
  Если пользователь нажмет Cancel, прекратить выполнение цикла.
*/

const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];
let attempts = 3;

// do {
//     let offer =  prompt('Enter your password');
// } while (offer === includes(passwords));

// console.log(offer); 

let offer =  prompt('Enter your password');
if (offer === null) {
    alert('Canceled');
} else {

    if (passwords.includes(offer)) {
        alert('Добро пожаловать');
    } else { 
        for (let i = attempts; i > 0; i--){
            attempts--;
            if (attempts > 0) {
            alert (`Password is incorrect, you have ${attempts} attempts`);
            offer = prompt('Enter your password');
                if (passwords.includes(offer)) {
                    alert('Добро пожаловать');
                    break;
                }  
                else {continue;}

            } else {
                alert('Sorry, your account is blocked');
                break;
            }
        }
    }
}