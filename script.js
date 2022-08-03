const submit = document.querySelector('#submit')
const rating = document.querySelector('#rating')


submit.addEventListener('click', changeScreen)

function changeScreen(){
    const submitS = document.querySelector('#submitScreen')
    const thankYouS = document.querySelector('#thankYouScreen')
    
    if(score == 0){
        const res = document.querySelector('#res')
        res.innerHTML = 'Choose a number, please!'
        
    }
    else{
        submitS.style.display = 'none'
        thankYouS.style.display = 'flex'
        rating.innerHTML = `You selected ${score} out of 5`
    }
}

const ratingNumber = document.querySelectorAll('.ratingBox span')
const numberRating = Array.from(ratingNumber)

let score = 0

for(const number in numberRating){
    numberRating[number].addEventListener('click', activateElement)
    function activateElement(){
        if(numberRating[number].className == 'active')
            numberRating[number].classList.remove('active')
        else if(numberRating[number].className != 'active')
            numberRating[number].classList.add('active')

        
        score = Number(number) + 1
        console.log(score)
        
    }
}


