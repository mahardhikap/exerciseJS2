// Buatlah fungsi yang memiliki parameter nilaiAwal (number) dan nilaiAkhir (number), serta dataArray (array).
// Fungsi tersebut memiliki validasi nilaiAwal < nilaiAkhir dan jumlah data dalam dataArray harus lebih dari 5.
// Fungsi tersebut akan mencari data didalam dataArray yang memiliki nilai diantara nilaiAwal dan nilaiAkhir,
// mengurutkan hasil pencarian dan menampilkannya ke layar/console.
const seleksiNilai = (nilaiAwal, nilaiAkhir, dataArray) => {
  if (
    typeof nilaiAwal === 'number' &&
    typeof nilaiAkhir === 'number' &&
    Array.isArray(dataArray)
  ) {
    if (nilaiAwal < nilaiAkhir) {
      if (dataArray.length > 5) {
        let filteredArray = dataArray.filter(
          (num) => num > nilaiAwal && num < nilaiAkhir
        );
        if (filteredArray.length > 0) {
          console.log(filteredArray.sort((a, b) => a - b));
        } else {
          console.log('Nilai tidak ditemukan');
        }
      } else {
        console.log('Jumlah angka dalam dataArray harus lebih dari 5');
      }
    } else {
      console.log('Nilai akhir harus lebih besar dari nilai awal');
    }
  } else {
    console.log('Input data salah')
  }
};

seleksiNilai(5, 10, [3, 4, 2, 1, 7, 6, 5, 8, 9, 10]);
