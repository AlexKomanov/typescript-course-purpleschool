/**
 * Напишите функцию, которая отправляет запрос на https://dummyjson.com/users
 * для получения пользователей и вывода части их данных их в консоль. Так же нужно:
 *  - Обработать ошибку исключения
 *  - Использовать enum
 */

import axios from 'axios';

// Define the UserJson interface
interface UserJson {
    id: number;
    name: string;
    email: string;
    gender: Gender;
    address: {
      street: string;
      suite: string;
      city: string;
      zipcode: string;
      geo: {
        lat: string;
        lng: string;
      }
    };
    phone: string;
    website: string;
    company: {
      name: string;
      catchPhrase: string;
      bs: string;
    };
  }

// Define the gender enum
enum Gender {
    MALE = 'Male',
    FEMALE = 'Female',
    OTHER = 'Other'
  }

  // Fetch the user data from the API
axios.get('https://dummyjson.com/users')
.then(response => {
  const users: UserJson[] = response.data;



    // Store the user data
    const maleUsers: UserJson[] = users.filter(user => user.gender === Gender.MALE);
    const femaleUsers: UserJson[] = users.filter(user => user.gender === Gender.FEMALE);
    const otherUsers: UserJson[] = users.filter(user => user.gender === Gender.OTHER);

})
.catch(error => console.log(error))