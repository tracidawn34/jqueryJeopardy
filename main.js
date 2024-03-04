

const scoreAmount = $('.grid-item')
console.log('scoreAmount')

const scoreDisplay = $('#score-display')
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
    for(let obj of jeopardyQuestions){
        if(obj.value === value){
            arr.push(obj)
        }
    }
    let findAnswer = Math.floor(Math.random()*arr.length)
    let newQuestion = $(`<p>${arr[findAnswer-1].questionDisplay}</p>`)
    correct = `${arr[findAnswer-1].answer}`
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
        if($('#answer').val()=== correct){
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

