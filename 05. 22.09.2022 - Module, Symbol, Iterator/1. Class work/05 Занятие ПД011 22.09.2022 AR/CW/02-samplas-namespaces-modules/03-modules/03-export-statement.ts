export { EmailValidator };
export { EmailValidator as MyEmailValidator}; // экспорт с указанием другого имени

class EmailValidator {
    isCorrect(email: string) {
        throw new Error("Method not implemented.");
    }
}

