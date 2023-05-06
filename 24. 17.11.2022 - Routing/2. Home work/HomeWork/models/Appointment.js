// Класс Приём у врача
class Appointment {
    constructor(id, doctor, patient, consultingRoom, speciality, cost, interestPercent, incomeTax, date) {
        
        // id
        this.id = id;
        
        // фамилия и инициалы врача
        this.doctor = doctor;
        
        // фамилия и инициалы пациента
        this.patient = patient;
        
        // спецаильность врача
        this.speciality = speciality;
        
        // кабинет
        this.consultingRoom = consultingRoom;
        
        // стоимость приёма
        this.cost = cost;
        
        // процент отчисления врачу
        this.interestPercent = interestPercent;
        
        // подоходный налог
        this.incomeTax = incomeTax;
        
        // дата приёма
        this.date = date;
    }
}