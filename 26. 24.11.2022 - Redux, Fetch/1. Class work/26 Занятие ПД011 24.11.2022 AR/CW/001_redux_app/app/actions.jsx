// В этом файле определены две функции, создающие действия: 
//     • для добавления объекта
//     • для удаления объекта.

// Каждый объект действия имеет свойство type (описане действия)
// и свойство phone - данные, передаюиеся вместе с действием.

// добавление в коллекцию
const addPhone = function (phone) {
  return {
    type: "ADD_PHONE",
    phone
  }
};

// удаление из коллекции
const deletePhone = function (phone) {
  return {
    type: "DELETE_PHONE",
    phone
  }
};
 
module.exports = {addPhone, deletePhone};