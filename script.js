$(document).ready(function() {

    // --- 1. ANIMASI HERO SECTION (Saat Website Dibuka) ---
    // Animasi Teks (Muncul dari kiri)
    $('.hero-text-anim').animate({
        opacity: 1,
        marginLeft: "0px"
    }, 1500); // Durasi 1.5 detik

    // Animasi Foto (Muncul dari kanan)
    $('.hero-img-anim').delay(500).animate({ // Delay 0.5 detik biar gantian
        opacity: 1,
        marginRight: "0px"
    }, 1500);


    // --- 2. EFEK MENGETIK (TYPING EFFECT) ---
    const textToType = "I'm a Creative Web Developer. Passionate about creating exceptional digital experiences that blend innovative design with functional development.";
    const typingElement = $('#typing-text');
    let charIndex = 0;

    function typeWriter() {
        if (charIndex < textToType.length) {
            typingElement.append(textToType.charAt(charIndex));
            charIndex++;
            setTimeout(typeWriter, 30); // Kecepatan mengetik (makin kecil makin ngebut)
        }
    }
    // Jalankan efek mengetik setelah 1 detik
    setTimeout(typeWriter, 1000);

    // Efek kursor kedip-kedip
    setInterval(function(){
        $('.blink').fadeOut(500).fadeIn(500);
    }, 1000);


    // --- 3. SCROLL REVEAL (Animasi saat discroll) ---
    $(window).scroll(function() {
        var windowHeight = $(window).height();
        var scrollText = $(window).scrollTop();

        // Loop semua elemen yang punya class .reveal
        $('.reveal').each(function() {
            var elementTop = $(this).offset().top;

            // Jika elemen sudah masuk ke layar (dikurangi 150px biar gak nunggu sampe bawah banget)
            if (elementTop < scrollText + windowHeight - 150) {
                $(this).addClass('active'); // Tambahkan class active (yang bikin opacity jadi 1 di CSS)
            }
        });

        // --- 4. HIGHLIGHT MENU SIDEBAR ---
        $('.list-group-item').each(function() {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            // Cek apakah elemen ada sebelum mengambil properti
            if (refElement.length) { 
                if (refElement.position().top <= scrollText + 100 && refElement.position().top + refElement.height() > scrollText) {
                    $('.list-group-item').removeClass("active");
                    currLink.addClass("active");
                }
            }
        });
    });

    // --- 5. SMOOTH SCROLL (Klik Menu) ---
    $('a.list-group-item, .btn').on('click', function(e) {
        if (this.hash !== "") {
            e.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });

    // --- 6. ALERT TOMBOL KIRIM ---
    $('#btnKirim').click(function(e){
        e.preventDefault();
        var nama = $('#nameInput').val();
        if(nama == ""){
            alert("Silakan isi nama Anda dulu ya!");
        } else {
            alert("Terima kasih " + nama + "! Pesan Anda berhasil dikirim.");
            $('form')[0].reset();
        }
    });

});