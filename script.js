const songList = [
    {songName:"Jale 2", url: "./songs/Jale 2.mp3", img:"./images/jale.jpg"},
    {songName:"Pehle Bhi Main", url: "./songs/Pehle Bhi Main.mp3", img:"./images/animal.jpg"},
    {songName:"Ram Siya Ram", url: "./songs/Ram Siya Ram.mp3", img:"./images/ram.jpg"},
    {songName:"Arjan Valley Ne", url: "./songs/Arjan Vailly Ne.mp3", img:"./images/animal.jpg"},
]
const audio = new Audio()
const songContainer = document.querySelector('.all-songs')
const currSong = document.querySelector('.curr-song')
const play = document.querySelector('#play')
const backward = document.querySelector('#backward')
const forward = document.querySelector('#forward')
const controller = document.querySelector('#progressBar')
let selectedSong = 0
let imageLeft = document.querySelector('.left')
let progress = 0
controller.value = progress


function addSongList(){
    let clutter = ''
    songList.forEach(function(obj, idx){
    clutter += `<div class="song" id="${idx}">
    <img src="${obj.img}" alt="">
    <h5>${obj.songName}</h5>
    </div>`
    })

    audio.src = songList[selectedSong].url
    songContainer.innerHTML = clutter

    currSong.innerHTML = songList[selectedSong].songName
    imageLeft.style.backgroundImage = `url(${songList[selectedSong].img})`
}

songContainer.addEventListener('click', function(e){
    selectedSong = e.target.id
    addSongList()
    play.innerHTML = `<i class="fa-solid fa-pause"></i>`
    flag = 1
    audio.play()
})
audio.addEventListener('timeupdate', function(){
    progress = parseInt((audio.currentTime/audio.duration)*100)
    controller.value = progress
})
addSongList()

let flag = 0

play.addEventListener('click', function(){
    if(flag == 0){
        play.innerHTML = `<i class="fa-solid fa-pause"></i>`
        addSongList()
        audio.play()
        flag = 1
    }
    else{
        play.innerHTML = `<i class="fa-solid fa-play"></i>`
        addSongList()
        audio.pause()
        flag = 0
    }
})

forward.addEventListener('click', function(){
    if(selectedSong < songList.length - 1){
        selectedSong++
        addSongList()
        audio.play()
        forward.style.opacity = 1
    }
    else{
        forward.style.opacity = .4
    }
})
backward.addEventListener('click', function(){
    if(selectedSong > 0){
        selectedSong--
        addSongList()
        audio.play()
        backward.style.opacity = 1
    }
    else{
        backward.style.opacity = .4
    }
})