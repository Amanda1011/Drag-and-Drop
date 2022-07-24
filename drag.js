function log(message) {
    console.log('>' + message)
}

/*app*/
const cards = document.querySelectorAll('.card')
const dropzones = document.querySelectorAll('.dropzone')

cards.forEach(card => {
    card.addEventListener('dragstart', dragstart)
    card.addEventListener('drag', drag)
    card.addEventListener('dragend', dragend)

})

function dragstart() {
    //this = card
    //log('CARD:Start dragging ')
    dropzones.forEach(dropzone => dropzone.classList.add('highlight'))
    this.classList.add('is-dragging')
}

function drag() {
    log('Card: Is dragging ')

}

function dragend() {
    //this = card
    //log('Card: Stop drag ')
    dropzones.forEach(dropzone => dropzone.classList.remove('highlight'))
    this.classList.remove('is-dragging')
}

/* place where we will drop cards */

dropzones.forEach(dropzone => {
    dropzone.addEventListener('dragenter', dragenter)
    dropzone.addEventListener('dragover', dragover)
    dropzone.addEventListener('dragleave', dragleave)
    dropzone.addEventListener('drop', drop)
})

function dragenter() {
    //log('DROPZONE: Enter in zone ')
    dropzones.forEach(dropzone => dropzone.classList.add('highlight'))
}

function dragover() {
    //this = dropzone
    this.classList.add('over')

    //get dragging card
    const cardBeingDragged = document.querySelector('.is-dragging')

    this.appendChild(cardBeingDragged)
}

function dragleave() {
    //this = dropzone
    //log('DROPZONE: Leave')
    this.classList.remove('over')
}

function drop() {
    //log('DROPZONE: dropped')
    this.classList.remove('over')
}