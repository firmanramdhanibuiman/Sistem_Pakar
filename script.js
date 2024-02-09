function diagnose() {
    // Ambil gejala yang dipilih
    var selectedSymptoms = [];
    var selectBox = document.getElementById('symptoms');
    for (var i = 0; i < selectBox.options.length; i++) {
        if (selectBox.options[i].selected) {
            selectedSymptoms.push(selectBox.options[i].value);
        }
    }

    // Lakukan diagnosa kekurangan unsur hara dan saran penggunaan pupuk
    var result = "Hasil Diagnosa: ";
    var treatment = "Saran Penggunaan Pupuk: ";
    if (selectedSymptoms.length === 0) {
        result += "Pilih setidaknya satu gejala.";
    } else {
        // Logika diagnosa kekurangan unsur hara
        if (selectedSymptoms.includes("1")) {
            result += "Daun tanaman jagung mengalami klorosis pada bagian tengah daun.";
            treatment += "Berikan pupuk yang mengandung zat besi untuk mengatasi klorosis yang disebabkan oleh kekurangan besi.";
        } else if (selectedSymptoms.includes("2")) {
            result += "Tanaman jagung tumbuh dengan lambat dan daun mengalami pucat.";
            treatment += "Analisis tanah untuk mengidentifikasi kekurangan unsur nitrogen, kemudian berikan pupuk nitrogen sesuai dengan dosis yang diperlukan.";
        } else if (selectedSymptoms.includes("3")) {
            result += "Tinggi tanaman jagung tidak sesuai dengan umur tanaman.";
            treatment += "Analisis tanah dan berikan pupuk dengan kandungan fosfor yang cukup untuk mendukung pertumbuhan tanaman yang optimal.";
        } else if (selectedSymptoms.includes("4")) {
            result += "Daun-daun tanaman jagung mengalami keriting pada bagian ujung.";
            treatment += "Cek tingkat kelembaban tanah dan pastikan tanaman mendapatkan cukup air. Selain itu, berikan pupuk kalium untuk mengatasi keriting pada ujung daun.";
        } else if (selectedSymptoms.includes("5")) {
            result += "Tongkol jagung kecil dan kurang berisi.";
            treatment += "Lakukan analisis tanah untuk menentukan kebutuhan fosfor dan potassium. Berikan pupuk dengan kandungan fosfor dan potassium yang sesuai untuk mendukung pembentukan tongkol yang baik.";
        } else if (selectedSymptoms.includes("6")) {
            result += "Tanaman jagung tampak layu meskipun tanah terasa cukup lembab.";
            treatment += "Periksa apakah ada kelebihan air yang dapat mengakibatkan akumulasi air di akar. Sirkulasi air yang baik sangat penting. Jika tanaman mengalami kelebihan air, atasi masalah drainase dan berikan pupuk yang sesuai dengan kondisi tanah.";
        } else if (selectedSymptoms.includes("7")) {
            result += "Daun tanaman jagung mengalami bercak coklat dengan tepi yang kering.";
            treatment += "Identifikasi kemungkinan serangan penyakit atau hama, dan lakukan perlindungan tanaman. Selain itu, pastikan tanaman mendapatkan nutrisi yang cukup dengan memberikan pupuk seimbang.";
        } else if (selectedSymptoms.includes("8")) {
            result += "Daun tanaman jagung mengalami pucat di bagian antara tulang daun.";
            treatment += "Analisis tanah untuk menentukan kekurangan magnesium. Berikan pupuk dengan kandungan magnesium untuk mengatasi kekurangan tersebut.";
        } else if (selectedSymptoms.includes("9")) {
            result += "Tumbuhan jagung terlihat merunduk dan tangkai daun mudah patah.";
            treatment += "Identifikasi kekurangan silikon yang dapat menyebabkan kelemahan struktural. Berikan pupuk silikon untuk memperkuat jaringan tanaman.";
        } else if (selectedSymptoms.includes("10")) {
            result += "Daun tanaman jagung mengalami klorosis pada bagian tepi daun.";
            treatment += "Lakukan analisis tanah untuk menentukan kekurangan zat besi atau mangan. Berikan pupuk yang mengandung zat besi atau mangan sesuai dengan hasil analisis.";
        } else if (selectedSymptoms.includes("11")) {
            result += "Tumbuhan jagung tampak kerdil dan daun mengalami perubahan warna.";
            treatment += "Lakukan analisis tanah dan identifikasi kekurangan boron. Berikan pupuk dengan kandungan boron yang sesuai untuk mengatasi masalah tersebut.";
        } else if (selectedSymptoms.includes("12")) {
            result += "Daun tanaman jagung mengalami pembusukan pada bagian pangkal tanaman.";
            treatment += "Periksa kondisi drainase tanah dan identifikasi kekurangan kalsium. Berikan pupuk dengan kandungan kalsium untuk mencegah pembusukan akar dan batang.";
        } else if (selectedSymptoms.includes("13")) {
            result += "Tingkat produksi tanaman jagung menurun secara signifikan.";
            treatment += "Lakukan analisis tanah untuk menilai keseimbangan nutrisi tanaman. Berikan pupuk sesuai dengan kebutuhan yang teridentifikasi.";
        } else if (selectedSymptoms.includes("14")) {
            result += "Daun tanaman jagung mengalami deformitas pada ujungnya.";
            treatment += "Identifikasi kekurangan zinc. Berikan pupuk yang mengandung zinc untuk mengatasi deformitas pada ujung daun.";
        } else if (selectedSymptoms.includes("15")) {
            result += "Tumbuhan jagung terlihat lemah dan rentan terhadap serangan hama.";
            treatment += "Pastikan tanaman mendapatkan nutrisi yang cukup dengan memberikan pupuk seimbang. Lakukan perlindungan tanaman untuk mengatasi serangan hama.";
        } else {
            result += "Tidak dapat menentukan kekurangan unsur hara.";
            treatment += "Konsultasikan dengan ahli pertanian untuk analisis lebih lanjut.";
        }
    }

    // Tampilkan hasil diagnosa dan saran penggunaan pupuk
    document.getElementById('result').innerText = result;
    document.getElementById('treatment').innerText = treatment;
}