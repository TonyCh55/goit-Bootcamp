const ADMIN_LOGIN = 'admin';
const ADMIN_PASSWORD = 'm4ngo1zh4ackz0r';

let login = prompt('Enter your login');

if (login === null) { 
    alert('Отменено пользователем');
} else if (login !== ADMIN_LOGIN) {
    alert('Доступ запрещен');
} else if (login === ADMIN_LOGIN) {
    
    let password = prompt('Enter your password');
    if (password === null) {
        alert('Отменено пользователем');
    } else if (password !== ADMIN_PASSWORD) {
        alert ('Доступ запрещен');
    } else if (password === ADMIN_PASSWORD) {
        alert ('Добро пожаловать');
    }
}



/*
  Напишите скрипт, для авторизации администратора в панели управления.
  
  При загрузке страницы у посетителя запрашивается логин через prompt:
  
    - Если посетитель нажал Cancel — показыать alert с текстом 'Отменено пользователем!'
    - Если было введено что либо другое, что не совпадает со значением константы ADMIN_LOGIN, 
       показывать alert с текстом 'Доступ запрещен!'   
    - Если был введен логин совпадающий со значением константы ADMIN_LOGIN, спрашивать пароль через prompt.
    
  При вводе пароля:
  
      - Если нажали Cancel, показывать alert с текстом 'Отменено пользователем!'
      - Если введен пароль который не совпадает со значением константы ADMIN_PASSWORD,
        показывать alert с текстом 'Доступ запрещен!'        
      - Если введён пароль который совпадает со значением константы ADMIN_PASSWORD, 
        показывать alert с текстом 'Добро пожаловать!'
        
  🔔 PS: для удобства и чистоты кода сохраните в переменные сообщения отображаемые в alert
*/