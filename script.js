const circle1 = document.querySelector("#circle-1");
const circle2 = document.querySelector("#circle-2");
const circle3 = document.querySelector("#circle-3");
const circle4 = document.querySelector("#circle-4");


const content = document.querySelector("#content")

content.addEventListener("mouseenter", move())
const totalWidth = content.getBoundingClientRect().width;
const lambai = content.getBoundingClientRect().height;

function move(){
    content.addEventListener("mousemove", function(dets){
        console.log((dets.x - (totalWidth/2))/(totalWidth/100))
        console.log(((dets.y - 300) - (35/2))/(2.84)/2)

    circle1.style.transform = `translate(${(dets.x - (totalWidth/2))/(totalWidth/100)}%, ${((dets.y - 300) - (35/2))/(2.84)/2}%)`
    circle2.style.transform = `translate(${-(dets.x - (totalWidth/2))/(totalWidth/100)}%, ${-((dets.y - 300) - (35/2))/(2.84)/2}%)`
    circle3.style.transform = `translate(${-(dets.x - (totalWidth/2))/(totalWidth/100)}%, ${((dets.y - 300) - (35/2))/(2.84)/2}%)`
    circle4.style.transform = `translate(${(dets.x - (totalWidth/2))/(totalWidth/100)}%, ${-((dets.y - 300) - (35/2))/(2.84)/2}%)`
    
})
function leave(){
    content.addEventListener("mouseleave", function(){
    
        circle1.style.transform = `translate(-50%,-50%)`
    circle2.style.transform = `translate(-50%,-50%)`
    circle3.style.transform = `translate(-50%,-50%)`
    circle4.style.transform = `translate(-50%,-50%)`
    
    })
}
}
