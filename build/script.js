function showOverlay() {
    overlay = document.getElementById('overlay')
    overlay.classList.toggle('visible')
}

$('.radio-group .radio').click(function () {
    $(this).parent().find('.radio').removeClass('selected');
    $(this).addClass('selected');
    var val = $(this).attr('data-value');
    //alert(val);
    $(this).parent().find('input').val(val);
});

function openNav() {
    document.querySelector(".mobNav").style.width = "100%";
}
function closeNav() {
    document.querySelector(".mobNav").style.width = "0%";
}   