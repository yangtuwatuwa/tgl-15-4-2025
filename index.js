let plat  = ["B 1098 AKU"];
let angka = plat[0].split(" ");
let tgl = 2
switch (true) {
    case (angka[1] % 2 === 0 && tgl % 2 === 0):
        console.log("boleh ngelintas ehhehehhe")
        break;

    default:
        console.log("gak bolehh ngelintasss")
        break;
}


//CARA NGEJELASINNYA
// caranya adalah membandingkan nilainya secara boolean bukan angka dengan boolean gtu  makanya 
// switch menggunakan true bukan array yang udah di pisah