// Класс Банковский перевод
class BankTransfer {

    // конструктор
    constructor(sender, phoneSender, receiver, phoneReceiver, bankInterestPercent, transferAmount, dateTimeTransfer) {

        // фамилия и инициалы отправителя
        this.sender = sender;

        // номер телефона отправителя
        this.phoneSender = phoneSender;

        // фамилия и инициалы получателя
        this.receirver = receiver;

        // номер телефона получателя
        this.phoneReceirver = phoneReceiver;

        // дата и время перевода
        this.dateTimeTransfer = dateTimeTransfer;

        // сумма перевода
        this.transferAmount = transferAmount;

        // процент отчислений банку
        this.bankInterestPercent = bankInterestPercent;
    }
}