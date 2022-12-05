// Insert angka ke textview
function insert(num){
  document.form.display.value = document.form.display.value + num;	
  console.log("number")
	// document.form.display.value = document.form.display.value + num;
	// console.log("number");
}

// fungsi dengan paramaeter num, num adalah variabel dari tombol tombol tersebut, document.form karena kita menggunakan form, display.value adalah value dari display,diubah dengan value yang ada  ditambah dengan parameter num

// Fungsi Hitung
function hasil1(){
	var hasil = document.form.display.value;
	document.form.display.value = eval(hasil);
	console.log("hasil");
}

//variabel hasil adalah value dari display, value dari document.form.display.value diubah jadi eval(evaluasi) hasil itu ditampilkan di display

// Clean
function CE(){
	document.form.display.value = "";
	console.log("clear");
}

// keggunan function CE adalah menghapus display value secara keseluruhan

// Delete
function C(){
	var hasil = document.form.display.value;
	document.form.display.value = hasil.substring(0,hasil.length-1);
	console.log("hapus");
}

//  keggunan function C adalah mrnhapus value yang ada di display, dan akan diubah menjadi hasil.substring(memotong karakter string), dengan start 0 lalu panjang dari teks yang ada di kurangi 1. 