//a. push
//digunakan untuk menambahkan isi array ke urutan paling akhir
const fruits = ['Mangga', 'Nanas', 'Apel', 'Melon'];
fruits.push('Nangka', 'Durian');
console.log(fruits);

//b. pop
//digunakan untuk menghapus index terakhir dari sebuah array
const foods = ['Nasi Goreng', 'Mie Ayam', 'Bakso', 'Nasi Padang'];
foods.pop();
console.log(foods);

//c. unshift
//digunakan untuk menambah item baru di awal sebuah array
const counts = [4, 5, 6, 7, 8];
counts.unshift(1, 2, 3);
console.log(counts);

//d. shift
//digunakan untuk hapus item pertama dari array
const lists = [
  { nama: 'John', umur: '22' },
  { nama: 'Alex', umur: '23' },
];
lists.shift();
console.log(lists);

//e. includes
//digunakan untuk mengecek apakah sebuah array memilik element tertentu, sensitive case
//ketika ada bernilai true, ketika tidak ada bernilai false
const furniture = ['kursi', 'lemari', 'meja', 'sofa'];
console.log(furniture.includes('so'))

//f. indexOf
//digunakan untuk mengecek dimana letak index dari suatu element dalam sebuah array, sensitive case
//jika tidak ada akan bernilai -1, jika ada akan menunjukkan letak index
const phoneBrands = ['Samsung', 'Apple', 'Xiaomi', 'Vivo']
console.log(phoneBrands.indexOf('Xiaomi'))

//g. concat
//digunakan untuk menggabungkan 2 atau lebih array
const itemA = ['Tas', 'Buku']
const itemB = ['Kemeja', 'Celana']
const itemC = ['Sepatu', 'Sandal']
console.log(itemA.concat(itemB, itemC))

//h. slice
//digunakan untuk memilih satu atau beberapa item dari sebuah array
//angka depan menandakan titik start, angka belakang menandakan titik end
const laptopBrands = ['MacBook', 'Asus', 'Lenovo', 'Acer']
console.log(laptopBrands.slice(1, 3))

//i. splice
//digunakan untuk menambahkan, menghapus, atau mereplace item ke atau dari sebuah array.

//contoh menghapus
const animals = ['Kucing', 'Gajah', 'Sapi', 'Kuda']
animals.splice(0, 2) // menghapus 2 item di index 0
console.log(animals) // ['Sapi', 'Kuda']

//contoh mereplace, ambil dari output kode sebelumnya
animals.splice(0, 1, 'Jerapah') 
// menghapus 1 item di index 0 dan menambah 'Jerapah' di index 0
console.log(animals) // ['Jerapah', 'Kuda']

//contoh menambah item, ambil dari output kode sebelum ini
animals.splice(0, 0, 'Ular')// menambah 1 item di index 0 
console.log(animals)//['Ular', 'Jerapah', 'Kuda']

//j. sort
//digunakan untuk mengurutkan item dalam sebuah array
//Uratannya bisa numeric atau alphabetic, bisa ascending (keatas) atau descending (kebawah).
const myNum = [8,10,15,3,5,6,11,13]
console.log(myNum.sort())

//contoh ascending
console.log(myNum.sort((a, b) => a-b))

//contoh descending
console.log(myNum.sort((a, b) => b-a))