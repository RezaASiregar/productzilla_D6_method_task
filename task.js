//method
function soal1(nama, asal, suku, kampus, jurusan){

    console.log ('hai, nama saya ' + nama, 'dari ' + asal, 'dan Suku saya adalah Suku ' + suku, '.Saya mahasiswa ' + kampus, ' Prodi ' + jurusan)
}

soal1('Reza Abdillah Siregar', 'Kota Medan', 'Batak', 'Universitas Muhammadiyah Sumatera Utara','Teknologi Informasi')

//function
// point 1
function soal2 (a, b) {
    const hasil2 = (a ** 2)
    return hasil2
}

// point 2
function soal3 (c, d) {
    const hasil3 = ((c * 2) + (d * 2))
    return hasil3
}

// point 3
function soal4 (e, f) {
    const hasil4 = (e * f) / 2
    return hasil4
}

// point 4
function soal5 (g, h) {
    const hasil5 = g * h
    return hasil5
}

// point 5
function soal6 (i, j) {
    const hasil6 = 3.14 * 2 * i
    return hasil6
}

let a = 4
const hasil2 = soal2(a)
console.log('Hasil f(a) = x ** 2 adalah ' + hasil2)

let c = 4, d = 10
const hasil3 = soal3(c, d)
console.log('Hasil f(c, d) = (c * 2) + (d * 2) adalah ' + hasil3)

let e = 4, f = 10
const hasil4 = soal4(e, f)
console.log('Hasil f(e, f) = (e * f) / 2 adalah ' + hasil4)

let g = 4, h = 10
const hasil5 = soal5(g, h)
console.log('Hasil f(g, h) = g * h adalah ' + hasil5)

let i = 4
const hasil6 = soal6(i)
console.log('Hasil f(i) = phi * 2 * i adalah ' + hasil6)
