document.addEventListener('DOMContentLoaded', function () {
    let your_name = document.getElementById('name')
    let love_name = document.getElementById('love')
    let $btnTest = document.getElementById('btnTest')
    let $resultText = document.getElementById('resultText')
    let $error = document.getElementById('error')
    
    $btnTest.addEventListener('click', function () {
        
        let $your_name = your_name.value
        let $love_name = love_name.value
        
        
        if ($your_name == '' || $love_name == '') {
            $error.innerText = 'Preencha todos os campos'
            $error.style.display = 'block'
            $error.style.color = 'red'
            return
        }
        
        const getRandomInteger = (min, max) => {
            return Math.floor(Math.random() * (max - min + 1)) + min
        }
        
        let chance = getRandomInteger(1, 10) * 10
        
        $resultText.innerHTML = `${$your_name} e ${$love_name} têm ${chance}% de chance de match perfeito!`
        your_name.value = ''
        love_name.value = ''
    })
})

