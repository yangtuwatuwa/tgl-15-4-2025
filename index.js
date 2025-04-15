let plat  = ["B 1238 AKU"];
let angka = plat[0].split(" ");
let tgl =9
switch (true) {
    case (angka[1] % 2 === 0 && tgl % 2 === 0 || angka[1] % 2 === 1 && tgl % 2 === 1 ):
        console.log("boleh ngelintas ehhehehhe")
        break;

    default:
        console.log("gak bolehh ngelintasss")
        break;
}

// console.log(angka)

//CARA NGEJELASINNYA
// caranya adalah membandingkan nilainya secara boolean bukan angka dengan boolean gtu  makanya 
// switch menggunakan true bukan array yang udah di pisah