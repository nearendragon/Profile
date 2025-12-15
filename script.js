$(document).ready(function() {

    // 1. Smooth Scroll (Efek halus saat klik menu)
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

    // 2. Tombol Kirim (Alert)
    $('#btnKirim').click(function(e){
        e.preventDefault();
        var nama = $('#nameInput').val();
        if(nama == ""){
            alert("Silakan isi nama Anda terlebih dahulu.");
        } else {
            alert("Terima kasih " + nama + ", pesan simulasi terkirim!");
            $('form')[0].reset();
        }
    });

    // 3. Highlight Menu saat Scroll (Spy Scroll Manual)
    $(window).scroll(function() {
        var scrollPos = $(document).scrollTop();
        $('.list-group-item').each(function() {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            if (refElement.position().top <= scrollPos + 100 && refElement.position().top + refElement.height() > scrollPos) {
                $('.list-group-item').removeClass("active");
                currLink.addClass("active");
            }
        });
    });

});