

const scoreAmount = $('.grid-item')
console.log('scoreAmount')

const scoreDisplay = $('#score-display')
const questionDisplay = $('.question')

let score = 0


//$('button').on('click', ()=>{
   // const text = $('input')
   // text.val('') 
//})


scoreAmount.on('click', (event)=>{
    console.log(event.target.innerText)
     if(event.target.innerText === jeopardy.value){
        $('.question').html(jeopardy.Math.random().question)
    }
})




$('button').on('click', (event)=>{
    //console.log('button pushed')
    console.log(event.target.innerText)
    const text = $('input')
})