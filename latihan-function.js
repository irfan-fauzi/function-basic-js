let tambah = function (a, b) {
    return a + b;
}
let kali = function (a, b) {
    return a * b;
}
// faction bisa berisi argumen yang berisi function yang lain
let tambahKali = tambah(kali(10, 1), kali(10, 1), kali(10, 1));
console.log(tambahKali);