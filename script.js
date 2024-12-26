// Membuat elemen tetesan hujan secara dinamis
function createRaindrops() {
  const rainContainer = document.getElementById("raindrops");
  const numberOfRaindrops = 200; // Banyaknya tetesan hujan

  for (let i = 0; i < numberOfRaindrops; i++) {
    const raindrop = document.createElement("div");
    raindrop.classList.add("raindrop");

    // Menentukan posisi acak untuk setiap tetesan
    raindrop.style.left = `${Math.random() * 100}vw`;
    raindrop.style.animationDuration = `${Math.random() * 4 + 4}s`; // Durasi acak untuk jatuhnya tetesan
    raindrop.style.animationDelay = `${Math.random() * 2}s`; // Waktu acak untuk dimulai

    rainContainer.appendChild(raindrop);
  }
}

// Jalankan fungsi createRaindrops ketika halaman dimuat
window.onload = function () {
  createRaindrops();
};
