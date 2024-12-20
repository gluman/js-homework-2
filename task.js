const img = document.getElementById('cookie')
const img_width_default = img.width
const img_height_default = img.height
let count_clicks = document.getElementById('clicker__counter')
let count_speed = document.getElementById('speed__counter')
let t = new Date()
let time_last = t.getTime()

img.onclick = () => {
    count_clicks.textContent++
    t = new Date()
    now = t.getTime()
    let speed = 1/((now - time_last)/1000)
    if(speed > 0){
        count_speed.textContent = String(speed.toFixed(2))
    }
    time_last = now
    if(img.width > img_width_default) {
        img.width = img_width_default
    }
    else{
        img.width *= 1.2
    }
}