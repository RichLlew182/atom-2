const buttons = document.querySelector('#theme-picker');

buttons.addEventListener('click', (e) => {

    console.log(e.target.id)

    const id = e.target.id;

    document.body.className = document.body.className.replace(/\btheme-\S+\b/g, '').trim();

    // Add the ID of the clicked button as a class
    if (id) {
        document.body.classList.add(id);
    }

})