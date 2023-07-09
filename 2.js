// program searching nama yang dapat dibatasi jumlah outputnya yang menerapkan callback function

const names = [
  'Abigail',
  'Alexandra',
  'Alison',
  'Amanda',
  'Angela',
  'Bella',
  'Carol',
  'Caroline',
  'Carolyn',
  'Deirdre',
  'Diana',
  'Elizabeth',
  'Ella',
  'Faith',
  'Olivia',
  'Penelope',
];

const searchName = (keyword, limit, callback) => {
  if (typeof keyword === 'string' && typeof limit === 'number') {
    let hasilPencarian = [];
    let defaultOutput = 0;
    names.forEach((nama) => {
      if (
        nama.toLowerCase().includes(keyword.toLowerCase()) &&
        defaultOutput < limit
      ) {
        hasilPencarian.push(nama);
        defaultOutput += 1;
      }
    });
    callback(hasilPencarian);
  } else {
    console.log('Input data salah');
  }
};

const print = (hasil) => {
  console.log(hasil);
};

searchName('ol', 3, print);
