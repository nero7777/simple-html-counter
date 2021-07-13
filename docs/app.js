const increment = () => {
    var x =document.getElementById('mainCount').innerHTML;
    x++;
    document.getElementById('mainCount').innerHTML = x;
}
const decrement = () => {
    var x =document.getElementById('mainCount').innerHTML;
    x--;
    document.getElementById('mainCount').innerHTML = x;
}


document.getElementById('incButton').addEventListener('click',increment)
document.getElementById('decButton').addEventListener('click',decrement)

const switchElement = document.querySelector('.switch')

switchElement.addEventListener('click',() => {
    document.body.classList.toggle('dark')
})



