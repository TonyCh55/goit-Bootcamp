'use strict'
/* 
  Сеть фастфудов предлагает несколько видов гамбургеров. 
  
  Основа (булочка) гамбургера может быть большой или маленькой (обязательно):
	- маленькая (+30 денег, +50 калорий)
	- большая (+50 денег, +100 калорий)
	
  Гамбургер может быть с одной из нескольких видов начинок (обязательно):
	- сыром (+15 денег, +20 калорий)
	- салатом (+20 денег, +5 калорий)
	- мясом (+35 денег, +15 калорий)
	
  Дополнительно, гамбургер можно: 
	- посыпать приправой (+10 денег, +0 калорий) 
	- полить соусом (+15 денег, +5 калорий)
  Напишите скрипт, расчитывающий стоимость и калорийность гамбургера. Используте ООП подход, 
  создайте класс Hamburger, константы, методы для выбора опций и рассчета нужных величин. 
  Написанный класс должен соответствовать следующему jsDoc описанию. То есть класс должен содержать 
  указанные методы, которые принимают и возвращают данные указанного типа.
*/

/**
 * Класс, объекты которого описывают параметры гамбургера.
 */

// // 1й вариант
// const menu = {
//   size: {
//     small: {
//       name: 'SIZE_SMALL',
//       price: 30,
//       calories: 50,
//     },
//     large: {
//       name: 'SIZE_LARGE',
//       price: 50,
//       calories:100,
//     }
//   },

//   stuffing: {
//     cheese: {
//       name: 'STUFFING_CHEESE',
//       price: 15,
//       calories: 20,
//     },
//     salad: {
//       name: 'STUFFING_SALAD',
//       price: 20,
//       calories: 5,
//     },
//     meat: {
//       name: 'STUFFING_MEAT',
//       price: 35,
//       calories: 15,
//     }
//   },

//   topping: {
//     spice: {
//       name: 'TOPPING_SPICE',
//       price: 10,
//       calories: 0,
//     },
//     sauce: {
//       name:'TOPPING_SAUCE',
//       price: 15,
//       calories: 5,
//     }
//   }
// }
// const SIZE_LARGE = menu.size.large;
// const SIZE_SMALL = menu.size.small;

// const STUFFING_CHEESE = menu.stuffing.cheese;
// const STUFFING_SALAD = menu.stuffing.salad;
// const STUFFING_MEAT = menu.stuffing.meat;

// const TOPPING_SPICE = menu.topping.spice;
// const TOPPING_SAUCE = menu.topping.sauce;


class Hamburger {
    /**
     * @constructor
     * @param {String} size - Размер
     * @param {String} stuffing - Начинка
     */

    constructor(size, stuffing) {
      this._size = size;
      this._stuffing = stuffing;
      this._topping = [];
    }

    get size() {
      return this._size
    }
    get stuffing() {
      return this._stuffing
    }
    get topping() {
      return this._topping
    }
  
    /**
     * Добавить topping к гамбургеру. Можно добавить несколько topping, при условии, что они разные.
     * @param {String} topping - Тип добавки
     */

    addTopping(topping) {
      if (this._topping.includes(topping)) {
        alert('Topping has already added!')
      } else {
        this._topping.push(topping)
      }
    }
  
    /**
     * Убрать topping, при условии, что он ранее был добавлен
     * @param {String} topping - Тип добавки
     */
    removeTopping(topping) {
      if (this._topping.includes(topping)) {
        this._topping =  this._topping.filter(el => {
          if (el !== topping) {
            return el
          }
        })
      }
    }
  
    /**
     * Получить список toppings
     * @returns {Array} - Массив добавленных topping, содержит значения констант Hamburger.TOPPING_*
     *
     * Попробуйте сделать это геттером чтобы можно было обращаться как obj.toppings и нам вернет массив добавок
     */
    getToppings() {
      return this._topping
    }
  
    /**
     * Узнать размер гамбургера
     * @returns {String} - размер гамбургера
     *
     * Попробуйте сделать это геттером чтобы можно было обращаться как obj.size и нам вернет размер
     */
    getSize() {
      return this._size 
    }
  
    /**
     * Узнать начинку гамбургера
     * @returns {String} - начинка гамбургера
     *
     * Попробуйте сделать это геттером чтобы можно было обращаться как obj.stuffing и нам вернет начинку
     */
    getStuffing() {
      return this._stuffing
    }
  
    /**
     * Узнать цену гамбургера
     * @returns {Number} - Цена в деньгах
     *
     * Попробуйте сделать это геттером чтобы можно было обращаться как obj.price и нам вернет сумму.
     */
    calculatePrice() {
      let toppingPrice = this._topping.map(el => Hamburger.TOPPINGS[el].price).reduce((acc, el) => acc + el)
      return Hamburger.SIZES[this._size].price + Hamburger.STUFFINGS[this._stuffing].price + toppingPrice
    }
  
    /**
     * Узнать калорийность
     * @returns {Number} - Калорийность в калориях
     *
     * Попробуйте сделать это геттером чтобы можно было обращаться как obj.calories и нам вернет сумму.
     */
    calculateCalories() {
      let toppingCalories = this._topping.map(el => Hamburger.TOPPINGS[el].calories).reduce((acc, el) => acc + el)
      return Hamburger.SIZES[this._size].calories + Hamburger.STUFFINGS[this._stuffing].calories + toppingCalories
    }
  }

  Hamburger.SIZE_SMALL = 'SIZE_SMALL';
  Hamburger.SIZE_LARGE = 'SIZE_LARGE';
  Hamburger.STUFFING_CHEESE = 'STUFFING_CHEESE';
  Hamburger.STUFFING_SALAD = 'STUFFING_SALAD';
  Hamburger.STUFFING_MEAT = 'STUFFING_MEAT';
  Hamburger.TOPPING_SPICE = 'TOPPING_SPICE';
  Hamburger.TOPPING_SAUCE = 'TOPPING_SAUCE';
  Hamburger.SIZES = {
    [Hamburger.SIZE_SMALL]: {
        price: 30,
        calories: 50,
    },
    [Hamburger.SIZE_LARGE]: {
        price: 50,
        calories: 100,
    },
};
  Hamburger.STUFFINGS = {
    [Hamburger.STUFFING_CHEESE]: {
        price: 15,
        calories: 20,
    },
    [Hamburger.STUFFING_SALAD]: {
        price: 20,
        calories: 5,
    },
    [Hamburger.STUFFING_MEAT]: {
        price: 35,
        calories: 15,
    },
};
  Hamburger.TOPPINGS = {
    [Hamburger.TOPPING_SPICE]: {
        price: 10,
        calories: 0,
    },
    [Hamburger.TOPPING_SAUCE]: {
        price: 15,
        calories: 5,
    },
};


  
  /* Вот как может выглядеть использование этого класса */
  
  // Маленький гамбургер с начинкой из сыра
  const hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
  
  
  // Добавка из приправы
  hamburger.addTopping(Hamburger.TOPPING_SPICE); 
  console.log(hamburger);
   
  
  // Спросим сколько там калорий
  console.log("Calories: ", hamburger.calculateCalories());
  
  // Сколько стоит?
  console.log("Price: ", hamburger.calculatePrice());
  
  // Я тут передумал и решил добавить еще соус
  hamburger.addTopping(Hamburger.TOPPING_SAUCE);
  
  
  // А сколько теперь стоит? 
  console.log("Price with sauce: ", hamburger.calculatePrice());
  
  // Проверить, большой ли гамбургер? 
  console.log("Is hamburger large: ", hamburger.getSize() === Hamburger.SIZE_LARGE); // -> false
  
  // Убрать добавку
  hamburger.removeTopping(Hamburger.TOPPING_SPICE);
                               
  // Смотрим сколько добавок
  console.log("Hamburger has %d toppings", hamburger.getToppings().length); // 1


  




  