// Класс Приём у врача
class Appointment {
    constructor(doctor, speciality, cost, interestPercent, incomeTax) {
        
        // фамилия и инициалы врача
        this.doctor = doctor;
        
        // спецаильность врача
        this.speciality = speciality;
        
        // стоимость приёма
        this.cost = cost;
        
        // процент отчисления врачу
        this.interestPercent = interestPercent;
        
        // подоходный налог
        this.incomeTax = incomeTax;
    }
}