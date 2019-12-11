//klasa przechowuje stan pieniedzy, stan portfela
class Wallet {
  constructor(money) {
    let _money = money;
    //pobierania akyualnej zawartosci portfela
    this.getWalletValue = () => _money;

    //sprawdzamy czy uzytkownik ma odpowiednia ilosc srodkow
    this.checkCanPlay = value => {
      if (_money >= value) return true;
      return false;
    };
    //sprawdzamy aktualna zawartosc portfela
    this.changeWallet = (value, type = "+") => {
      if (typeof value === "number" && !isNaN(value)) {
        if (type === "+") {
          return (_money += value);
        } else if (type === "-") {
          return (_money -= value);
        } else {
          throw new Error("nieprawidlowy typ dzialania");
        }
      } else {
        console.log(typeof value);
        throw new Error("nieprawidlowa liczba");
      }
    };
  }
}
const wallet = new Wallet(200);
