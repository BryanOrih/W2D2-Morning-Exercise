// Write 5 functions in a JS file. 

// Create a github repo for this. 

// Submit github link.

const helloWorld = () => console.log("Hello World")
helloWorld()
console.log("\n")
let compliments = 
[
      'You look nice today',
      'Fancy seeing you here',
      'Have you been working out?',
      'Hello, good looking.',
      'I would share my dessert with you.',
      'I feel the need to impress you.',
      'You could probably lead a rebellion.',
      'Being awesome is hard, but you\'ll manage.',
      'My mom always asks me why I can\'t be more like you',
      'The Force is strong with you.',
      'You complete me',
      'Glorious things are waiting for you.',
      'You\'re crazy hygienic, always brushing and flossing',
      'Your eyes are hella disarming',
      'You have a great sense of humor - that\'s personality',
      'You\'re a good listener even when you\'re exhausted'
]

const randomCompliment = () =>{
    
    let min=0;
    let max=compliments.length;
    let random =  Math.floor(Math.random() * (+max - +min)) + +min;
    console.log(compliments[random])
}
randomCompliment()

console.log("\n")
const ifNarcissism = (weather) =>{
    if(weather === 'sunny'){
        console.log("Is it hot in here or is it just me?")
    } else if(weather === 'snowing'){
        console.log("Is it cool in here or is it just me?")
    } else if(weather === 'rain'){
        console.log("I guess even the sky cries tears of joy from my beauty")
    } else{
        console.log("What is the weather? It doesn't matter, i'm great regardless")
    }
}
let weatherChannel  = "sunny"
ifNarcissism(weatherChannel)
console.log("\n")
const loopGreetStudent = (student) =>{
    for(let i=0;i<student.length;i++){
        console.log(`Welcome in ${student[i]}!!`)
    }
}
let student = ["Bobby", 'Tommy', 'Jolly']
loopGreetStudent(student)
console.log("\n")
const physicPowers = (person1, person2) =>{
    let peopleArray = []
    peopleArray.push(person1, person2)

    for(let i in peopleArray){
        console.log(`Let me guess, ${peopleArray[i].name} your star sign is ${peopleArray[i].starSign}`)
    }
}
let littleBobby = {
    name: "Bobby jefferson",
    favFood : "apples",
    birthPlace : "Cali",
    starSign : "Cancer"

}
let littleTommy = {
    name : "Tommy Otrera",
    favFood : "bananas",
    birthPlace : "amazon",
    starSign : "Libra"

}
physicPowers(littleBobby,littleTommy)