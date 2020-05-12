function showOverlay() {
    overlay = document.getElementById('overlay')
    if (overlay.classList.contains('visible')) {
        setTimeout(() => {
            alert('Votre préinscription a bien été prise en compte !')
        }, 500)
    }
    overlay.classList.toggle('visible')
}

function closeOverlay() {
    overlay = document.getElementById('overlay')
    overlay.classList.toggle('visible')
}

$('.radio-group .radio').click(function () {
    $(this).parent().find('.radio').removeClass('selected');
    $(this).addClass('selected');
    var val = $(this).attr('data-value');
    $(this).parent().find('input').val(val);
});

function openNav() {
    document.querySelector(".mobNav").style.width = "100%";
}
function closeNav() {
    document.querySelector(".mobNav").style.width = "0%";
}

function contact() {
    setTimeout(() => {
        alert('Votre message a été envoyé !')
    }, 500)
}
function subscribe() {
    setTimeout(() => {
        alert('Votre inscription a été prise en compte !')
    }, 500)
}