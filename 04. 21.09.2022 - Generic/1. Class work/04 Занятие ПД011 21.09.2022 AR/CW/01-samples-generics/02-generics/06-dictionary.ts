// Использование обобщенного типа
class Dictionary<TKey, TValue> {

    // коллекция пар "ключ - значение"
    private data: KeyValuePair<TKey, TValue>[] = [];

    //
    public add(key: TKey, value: TValue) {
        let entry = new KeyValuePair<TKey, TValue>();

        entry.key = key;
        entry.value = value;

        this.data.push(entry);
    } // add

    // возвращает значение по ключу, !!! комбинированный тип !!!
    // null - не нашли
    public getValue(key: TKey) : TValue | null  {
        for(let entry of this.data) {
            if(entry.key === key) {
                return entry.value;
            }
        }

        return null;
    }
}

// применение класса
let dictionary = new Dictionary<string, string> ();

dictionary.add("hello", "привет");
dictionary.add("book", "книга");
dictionary.add("apple", "яблоко");

console.log(dictionary.getValue("book"));
console.log(dictionary.getValue("table"));


let dictionary2 = new Dictionary<number, boolean> ();
dictionary2.add(1, true);
dictionary2.add(2, false);
dictionary2.add(7, true);

console.log(dictionary2.getValue(7));
console.log(dictionary2.getValue(42));