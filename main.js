

const scoreAmount = $('.grid-item')
//console.log('scoreAmount')

const scoreDisplay = $('.score-display')
const questionDisplay = $('.question')
const input = $('#answer')

let score = 0
let count = 0
let value = 0
let correct = ""



//$('button').on('click', ()=>{
   // const text = $('input')
   // text.val('') 
//})



scoreAmount.on('click', (event)=>{
    console.log(event.target.innerHTML)
    if(count === 0){
    value = event.target.innerHTML
    let arr = []
    for(let id of jeopardyQuestions){
        if(id.value === value){
            arr.push(id)
        }
    }
    let findAnswer = Math.floor(Math.random()*arr.length)
    let newQuestion = $(`${arr[findAnswer].questionDisplay}`)
    correct = `${arr[findAnswer].answer}`
    questionDisplay.append(newQuestion)
    console.log(correct)
    arr.length = 0
  }
  count++
 }
)




$('button').on('click', ()=>{
    //console.log('button pushed')
    //console.log(event.target.innerText)
    //const text = $('input')
    if(count > 0){
        if($('#answer').val() === correct){
            questionDisplay.text('correct')
            score += parseInt(value.split('$')[1])
            scoreDisplay.text(`${score}`)
            input.val("")
        }
        else {
            questionDisplay.text('incorrect')
            score += parseInt(value.split('$')[1])
            scoreDisplay.text( `${score}`)
            input.val("")
        }
    }
    count = 0
})

