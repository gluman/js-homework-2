const img = document.getElementById('cookie')
const img_width_default = img.width
const img_height_default = img.height
let count_clicks = document.getElementById('clicker__counter')
let count_speed = document.getElementById('speed__counter')
let time_last
console.log('1. time_last'+ time_last)
img.onclick = () => {
    count_clicks.textContent++
    let t = new Date()
    let now = t.getTime()
    if(time_last != 0){
        count_speed.textContent = String(1/((now - time_last)/1000))
    }
    time_last = now
    console.log('2. time_last' + time_last)
    if(img.width > img_width_default) {
        img.width = img_width_default
    }
    else{
        img.width *= 1.2
    }
}