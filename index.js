
const btn=document.getElementById('btn')
const topDiv=document.getElementById('topDiv')
let dice1=document.getElementById('dice1')

btn.addEventListener('click', ()=>{
  let random=Math.trunc((Math.random()*6)+1)
  console.log(random)
  
  if(random===2){
    dice1.src='dice2.png'
    let section=document.createElement('section')
    let para=document.createElement('p')
    para.textContent=`You rolled a ${random}`
    let img=document.createElement('img')
    img.src='dice2.png'
    section.append(para, img)
    document.body.append(section)
    
  }
  else if(random===3){
    dice1.src='dice3.png'
    let section=document.createElement('section')
    let para=document.createElement('p')
    para.textContent=`You rolled a ${random}`
    let img=document.createElement('img')
    img.src='dice3.png'
    section.append(para, img)
    document.body.append(section)
  }
  else if(random===4){
    dice1.src='dice4.png'
    let section=document.createElement('section')
    let para=document.createElement('p')
    para.textContent=`You rolled a ${random}`
    let img=document.createElement('img')
    img.src='dice4.png'
    section.append(para, img)
    document.body.append(section)
  }
  else if(random===5){
    dice1.src='dice5.png'
    let section=document.createElement('section')
    let para=document.createElement('p')
    para.textContent=`You rolled a ${random}`
    let img=document.createElement('img')
    img.src='dice5.png'
    section.append(para, img)
    document.body.append(section)
  }
  else if(random===6){
    dice1.src='dice6.png'
    let section=document.createElement('section')
    let para=document.createElement('p')
    para.textContent=`You rolled a ${random}`
    let img=document.createElement('img')
    img.src='dice6.png'
    section.append(para, img)
    document.body.append(section)
  }
  else{
    dice1.src='dice1.png'
    let section=document.createElement('section')
    let para=document.createElement('p')
    para.textContent=`You rolled a ${random}`

    let img=document.createElement('img')
    img.src='dice1.png'
    section.append(para, img)
    document.body.append(section)
  }
})


