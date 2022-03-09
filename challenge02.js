// <---------------------------------------------- 1. membuat function untuk menggantikan sebuah kata ---------------------------------------------->

// const kalimat1 = 'Andini sangat mencintai kamu selamanya';
// const kalimat2 = 'Gunung bromo tak akan mampu menggambarkan besarnya cintaku padamu'

// function changeWord(selectedText, changeWord, text) {
//     result = text.replace('mencintai', 'membenci');
//     return result;
// }

// console.log(changeWord('mencintai', 'membenci', kalimat1))
// console.log(changeWord('bromo', 'semeru', kalimat2))


// <---------------------------------------------- 2. mendeteksi apakah sebuah angka termasuk angka genap atau ganjil. ---------------------------------------------->

// const checkTypeNumber = (givenNumber) => {
//     if(typeof(givenNumber) == 'number'){
//         if(givenNumber % 2 == 0){
//             return ('Genap')
//         }else {
//             return ('Ganjil')
//         }
//     }else if(typeof(givenNumber) == 'string'){
//         return ('ERROR: Invalid data type')
//     }else if(typeof(givenNumber) == 'object'){
//         return ('ERROR: Invalid data type')
//     }else if(typeof(givenNumber) == 'undefined'){
//         return ('ERROR: Bro where is the parameters?')
//     }
// }

// console.log(checkTypeNumber(10))
// console.log(checkTypeNumber(3))
// console.log(checkTypeNumber("3"))
// console.log(checkTypeNumber({}))
// console.log(checkTypeNumber([]))
// console.log(checkTypeNumber())


// <---------------------------------------------- 3. Email Validaiton ---------------------------------------------->
// const checkEmail = (email) => {
//   let pattern = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/g
  
//   if (email.match(pattern)){
//     return ('VALID')
//   }else{
//     return ('INVALID')
//   }
// }

// console.log(checkEmail('arpranata@binar.co.id'))
// console.log(checkEmail('arpranata@binar.com'))
// console.log(checkEmail('arpranata@binar'))
// console.log(checkEmail(3322))
// console.log(checkEmail())


// <---------------------------------------------- 4. Password Validation ---------------------------------------------->
// const isValidPassword = (email) => {
//   let passPattern = /^(?=.{8,})(?=.*[A-Z][a-z])(?=.*[0-9]).+$/g
  
//   if (email.match(passPattern)){
//     return(true)
//   }else {
//     return(false)
//   }

// }

// console.log(isValidPassword())


// <---------------------------------------------- 5. Membagikan Nama ---------------------------------------------->
// const getSpillName = (personalName) => {
//     if (typeof(personalName) == 'number'){
//         console.log('Error')
//     }else if (typeof(personalName) == 'string'){ 
//         let name = personalName.split(' ')
//         if(name.length == 3){
//             console.log(`{ firstName:  '${name[0]}', middleName: '${name[1]}', lastName: '${name[2]}' }`)
//         }else if(name.length == 2){
//             console.log(`{ firstName:  '${name[0]}', middleName: '${null}', lastName: '${name[1]}' }`)
//         }else if(name.length == 1){
//             console.log(`{ firstName:  '${name[0]}', middleName: '${null}', lastName: '${null}' }`)
//         }else if(name.length <= 4){
//             console.log('Error: This function is only for 3 characters name')
//         }
//     }
// }

// console.log(getSpillName('Aldi Daniela Pranata'))
// console.log(getSpillName('Dwi Kuncoro'))
// console.log(getSpillName('Aurora'))
// console.log(getSpillName('Aurora Aurelia Sukma Darma'))
// console.log(getSpillName(0))


// <---------------------------------------------- 6. Mendapatkan angka terbesar ---------------------------------------------->
// const getAngkaTerbesarKedua = (angka) => {
//     angka.sort(function(a, b){return b-a})
//     return angka[1]
// }
// const dataAngka = [9,4,7,7,4,3,2,2,8]

// console.log(getAngkaTerbesarKedua(dataAngka))
// console.log(getAngkaTerbesarKedua(0))
// console.log(getAngkaTerbesarKedua())


// <---------------------------------------------- 7. Menghitung total sepatu yang terjual ---------------------------------------------->
// const dataPenjualanPakAldi = [
//     {
//         namaProduct : 'Sepatu Futsal Nike Vapor Academy 8',
//         hargaSatuan : 76000,
//         kategori : 'Sepatu Sport',
//         totalTerjual : 90
//     },
//     {
//         namaProduct : 'Sepatu Warrior Tristan Black Brown High',
//         hargaSatuan : 96000,
//         kategori : 'Sepatu Sneaker',
//         totalTerjual : 37
//     },
//     {
//         namaProduct : 'Sepatu Warrior Tristan Maroon High',
//         hargaSatuan : 36000,
//         kategori : 'Sepatu Sneaker',
//         totalTerjual : 90
//     },
//     {
//         namaProduct : 'Sepatu Warrior Rainbow Tosca Curduroy',
//         hargaSatuan : 120000,
//         kategori : 'Sepatu Sneaker',
//         totalTerjual : 90
//     }
// ]

// const hitungTotalPenjualan = (dataPenjualan) => dataPenjualan.reduce((prev,cur)=>prev+cur.totalTerjual, 0)
// console.log(hitungTotalPenjualan(dataPenjualanPakAldi))



// <---------------------------------------------- 8. Data Penjualan ---------------------------------------------->
// const dataPenjualanNovel = [
//     {
//       idProduct: 'BOOK002421',
//       namaProduk: 'Pulang - Pergi',
//       penulis: 'Tere Liye',
//       hargaBeli: 60000,
//       hargaJual: 86000,
//       totalTerjual: 150,
//       sisaStok: 17,
//     },
//     {
//       idProduct: 'BOOK002351',
//       namaProduk: 'Selamat Tinggal',
//       penulis: 'Tere Liye',
//       hargaBeli: 75000,
//       hargaJual: 103000,
//       totalTerjual: 171,
//       sisaStok: 20,
//     },
//     {
//       idProduct: 'BOOK002941',
//       namaProduk: 'Garis Waktu',
//       penulis: 'Fiersa Besari',
//       hargaBeli: 67000,
//       hargaJual: 99000,
//       totalTerjual: 213,
//       sisaStok: 5,
//     },
//     {
//       idProduct: 'BOOK002941',
//       namaProduk: 'Laskar Pelangi',
//       penulis: 'Andrea Hirata',
//       hargaBeli: 55000,
//       hargaJual: 68000,
//       totalTerjual: 20,
//       sisaStok: 56,
//     },
//   ];

//   const getInfoPenjualan = (dataPenjualan) => {
//     const totalModal = dataPenjualan.reduce((prev, curr) => prev + (curr.hargaBeli * (curr.totalTerjual+curr.sisaStok)), 0)
//     const totalJual = dataPenjualan.reduce((prev, curr) => prev + (curr.hargaJual * curr.totalTerjual), 0)
//     const bukuTerlaris = dataPenjualan.reduce((prev, curr) => curr.totalTerjual > (prev.totalTerjual || 0) ? curr : prev.namaProduk)
//     const penulisTerlaris = dataPenjualan.reduce((prev, curr) => curr.totalTerjual > (prev.totalTerjual || 0) ? curr : prev.penulis)
    

//     // Merubah number menjadi rupiah
//     const rpTotalModal =  new Intl.NumberFormat("id-ID", {style: "currency", currency: "IDR"}).format(totalModal);
//     const rpTotalKeuntungan =  new Intl.NumberFormat("id-ID", {style: "currency", currency: "IDR"}).format(totalJual-totalModal);
      

//     console.log(`totalKeuntungan: Rp.'${rpTotalKeuntungan}'`)
//     console.log(`totalModal: '${rpTotalModal}'`)
//     console.log(`presentasKeuntungan: '${((totalJual/totalModal)*100)-100}%'`)
//     console.log(`produkBukuTerlaris: '${bukuTerlaris}'`)
//     console.log(`penulisTerlaris: '${penulisTerlaris}'`)
//   }

//   console.log(getInfoPenjualan(dataPenjualanNovel))



// <------------------ Batas Tugas ------------------>
// for (let i = 5; i <= 20; i++) {
//     console.log(i);
//   }

// let i = 100;
// while (i >= 90) {
//     console.log(i)
//     i--;
// }

// function getLength(arr){
//     //return length of arr
//     return arr.length
//   }
//   function getFirst(arr){
//     //return the first element of arr
//     return arr
//   }
//   function getLast(arr){
//     //return the last element of arr
//     return arr[arr.length - 1]
//   }
// //   function pushElement(arr){
// //     var el=1;
// //     //push el to arr
    
// //     return arr
// //   }
// //   function popElement(arr){
// //     //pop an element from arr
    
// //     return ?
// //   }
// console.log(getLast())

// const Count = (huruf) => {

//     let nama = 'kezia timbalo';
//     let vocal = 'aiueo';
  
//     const arrName = nama.split('')
//     const arrVocal = vocal.split('')
  
//     for(let i=0; i<arrName.length; i++){
      
//       if(huruf == arrName[i]){
        
//         for(let j = 0; j<arrVocal.length;j++){
          
//           if(huruf == arrVocal[j]){
//             return `ada kok huruf ${huruf} nya`
//           }
          
//         }
//         return `adanya huruf ${huruf}`
        
//       }
      
//     }
//       return `huruf ${huruf} nya ngga ada ni`
//   }
  
//   console.log(Count('f'))


// <----------------Bintang 1---------------->

// function bintang(n) {
//     let hasil = '';
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j <= i; j++) {
//             hasil += '* ';
//         }
//         hasil += '\n';
//     }
//     return hasil;
// }
// console.log(bintang(4));

// <---------------Bintang 2--------------->
// let hasil = '';
// function bintang2(n) {
//     for (let i = 0; i < n; i++) {
//         for (let j = n; j > i; j--) {
//             hasil += '* ';
//         }
//         hasil += '\n';
//     }
//     return hasil;
// }
// console.log(bintang2(4))


//<---------------Bintang berususun menurun--------------->
// let hasil = '';
// function bintang3(n) {
//     for (let i = 0; i < n; i++) {
//         for (let j = n; j > i; j--) {
//             hasil += '* ';
//         }
//         hasil += '\n';
//     }
//     for (let i = 1; i < n; i++) {
//         for (let j = 0; j <= i; j++) {
//             hasil += '* ';
//         }
//         hasil += '\n';
//     }
//     return hasil;
// }
// console.log(bintang3(4));


//<---------------Bintang berususun menaik--------------->
// let hasil = '';
// function bintang4(n) {
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j <= i; j++) {
//             hasil += '* ';
//         }
//         hasil += '\n';
//     }
//     for (let i = 1; i < n; i++) {
//         for (let j = n; j > i; j--) {
//             hasil += '* ';
//         }
//         hasil += '\n';
//     }
//     return hasil;
// }
// console.log(bintang4(4));


//<--------------Reverse Name--------------->

// const reverseName = (text) => text.split('').reverse().join('').split(' ').reverse().join(' ')

// console.log(reverseName('Kezia Adenia Timbalo'))

//aizeK ainedA olabmiT

// const reverseName = (text) => {
//   const splitName = text.split('')
//   const hasilLoop=[]
//   for(let i=splitName.length-1;i>=0;i--){
//     hasilLoop.push(splitName[i])
//   }
//   return hasilLoop.join('')
// }

// console.log(reverseName('Kezia Adenia Timbalo'))

// const reverseName = (text) => {
//     const splitName = text.split('')
//     const hasilLoop = []
//     for (let i = splitName.length - 1; i >= 0; i--) {
//         hasilLoop.push(splitName[i])
//     }

//     // Direverse ulang
//     const hasilLoopNew = hasilLoop.join('')
//     const splitNameNew = hasilLoopNew.split(' ')
//     const result = []
//     for (let i = splitNameNew.length - 1; i >= 0; i--) {
//         result.push(splitNameNew[i])
//     }

//     return result.join(' ')
// }

// console.log(reverseName('Kezia Adenia Timbalo'))