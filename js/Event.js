// Remove Items From events
$('a.remove').click(function() {
    event.preventDefault();
    $(this).parent().parent().parent().hide(400);

})

// Just for testing, show all items
$('a.btn.continue').click(function() {
    $('li.items').show(400);
})

function filterEvents(category) {
    const cards = document.querySelectorAll('.event-card');
    const tabs = document.querySelectorAll('.tab');

    tabs.forEach(tab => tab.classList.remove('active'));
    document.querySelector(`.tab[onclick*="${category}"]`).classList.add('active');

    cards.forEach(card => {
        if (card.classList.contains(category)) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}