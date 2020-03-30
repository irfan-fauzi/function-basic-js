// FUNCTION
// function = sub program /sub routine yang  dapat dipanggil dibagian lain pada program
// merupakan struktur dasar pembentuk javascript
// disebut juga sebagai peosedur (kumpulan statemen untuk melakukan tugas atau mengitung statemen)
// untk menggunakannya, kita harus membuat dan memanggil  nya

let jumlahVolume2kubus = function (a, b) {
    let volumeA = a * a * a;
    let volumeB = b * b * b;
    return volumeA + volumeB;
}
let c = 10;
let d = 19;
console.log(jumlahVolume2kubus(c, d));