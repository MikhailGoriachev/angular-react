export class Worker {
  constructor(public id: number, public fullName: string, public position: string,
              public gender: boolean, public startYear: number, public  photo: string,
              public  salary: number) {
  } // constructor


  // вычисление стажа в полных годах для текущей даты
  getExperience() { return new Date().getFullYear() - this.startYear;}

  // присваивание одноименных полей объекта w, используем при десериализации из JSON
  assign(w: Worker) {
    Object.assign(this, w);
    return this;
  } // assign
} // class Worker
