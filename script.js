$(document).ready(function() {
    
    // --- FITUR 1: Smooth Scroll saat menu diklik ---
    $('.nav-link').on('click', function(e) {
        // Mencegah perilaku default link
        var tujuan = $(this).attr('href');
        var elemenTujuan = $(tujuan);

        // Jika elemen tujuan ada
        if (elemenTujuan.length) {
            $('html, body').animate({
                scrollTop: elemenTujuan.offset().top - 50
            }, 800, 'swing');

            // Mengatur menu aktif
            $('.nav-link').removeClass('active');
            $(this).addClass('active');
        }
    });

    // --- FITUR 2: Validasi Tombol Kirim ---
    $('#btnKirim').click(function(e){
        e.preventDefault(); // Mencegah halaman reload
        
        var nama = $('#nameInput').val();
        var email = $('#emailInput').val();

        if(nama == "" || email == ""){
            alert("Harap lengkapi Nama dan Email sebelum mengirim!");
        } else {
            // Simulasi pengiriman sukses
            alert("Halo " + nama + "! Pesan Anda berhasil dikirim (Simulasi).");
            // Kosongkan form setelah kirim
            $('#nameInput').val('');
            $('#emailInput').val('');
            $('textarea').val('');
        }
    });

    // --- FITUR 3: Parallax effect sederhana pada Jumbotron ---
    $(window).scroll(function() {
        var wScroll = $(this).scrollTop();
        
        // Foto profil turun lebih lambat dari scroll (efek parallax)
        $('.jumbotron img').css({
            'transform': 'translate(0px, '+ wScroll/4 +'%)'
        });

        // Teks turun lebih cepat
        $('.jumbotron h1').css({
            'transform': 'translate(0px, '+ wScroll/2 +'%)'
        });
    });

});