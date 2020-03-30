// Arguments
// adalah array yang berisi nilai yang dikirimkan saat fungsi di ambil
// apabila ada arguments yang dimasukan kedalam function tersebut tidak sesuai jumlahnya (dengan paramaeternya) maka otomatis masuk kedalam array Arguments
// CONTOH 1
// function dibawah ini hanya memiliki 2 parameter
function tambah() {
    let hasil = 0;
    for (let i = 0; i < arguments.length; i++) {
        hasil += arguments[i];

    }
    return hasil;

}
// sedangkan argumen yang dikirim ada 3, (tidak sesuai)
// maka argumen yang ke 3 akan masuk kedalam Array Arguments
let jumlah = tambah(4, 2, 5, 8);
console.log(jumlah);