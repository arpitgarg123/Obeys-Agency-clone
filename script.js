
function loco(){
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
    
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector(".main"),
      smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
    
    // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy(".main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });
     
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
    
}
loco();
function sheryJs(){
Shery.mouseFollower();
Shery.imageEffect(".elem .img-container",{
    style:6,
    // debug:true,
    gooey:true,
    config:{"noiseDetail":{"value":6.11,"range":[0,100]},"distortionAmount":{"value":2.9,"range":[0,10]},"scale":{"value":59.54,"range":[0,100]},"speed":{"value":0.58,"range":[0,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.8333333134651184},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.27,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.84,"range":[0,10]},"metaball":{"value":0.44,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.38,"range":[0,2]},"noise_scale":{"value":8.4,"range":[0,100]}}
})

}
sheryJs();

function looader(){
    var tl = gsap.timeline();
   
    tl.from(".loader .text h1",{
        y : 350,
        stagger : .6,
    })
    .from(".loader .text h2",{
        opacity : 0,
        delay : -.4,
    })
    .from(".loader .setof-h3 h3",{
        opacity : 0,
        delay : -.4,
    })
    .to(".loader .text",{
        opacity : 0,
        delay : 1.5,
        stagger : -.5,
        duration : 1
    })
    .to(".loader .setof-h3 h3",{
        opacity : 0,
        delay : -.4,
    })
    .to(".loader",{
        y : "-100%",
        duration : 1,
        ease : "power4.Out",
    })
    .from(".page-1 .text h1",{
        y : 350,
        stagger :{
            amount : .5,
        },
    })
var countSpan = document.querySelector(".loader .text #count-span");
var grow = 0;

var time = setInterval(function(){
    if(grow < 100){
    grow ++;
    countSpan.innerHTML = grow;
    }
},30)

setTimeout(function(){
clearInterval(time)
},4000)

}
looader();

function menu(){
    document.querySelectorAll(".menu .text").forEach(function(e){
//  var child = e.children;
//  console.log(child);
    e.addEventListener("mouseenter",function(){
        e.classList.add("active");
        gsap.to(".menu .active h1 span",{
            opacity : 0,
            stagger : {
                amount : .4
            },
        })
        gsap.to(".menu .active h2 span",{
            opacity : 1,
            stagger : {
                amount : .4
            },
            delay : .4,
        })
    })
    e.addEventListener("mouseleave",function(){

        gsap.to(".menu .active h2 span",{
        opacity : 0,
        stagger : {
            amount : .4
        },
    })
    gsap.to(".menu .active h1 span",{
        opacity : 1,
        stagger : {
            amount : .4
        },
        delay : .4,
    })
    e.classList.remove("active");
    })
})

}
menu();

function page1(){
    document.querySelectorAll(".page-1 .under-text span").forEach(function(e){

        e.addEventListener("mousemove",function(dets){
            gsap.to(".page-1 .text1 img",{
         x : dets.x - 500,
        y : dets.y - 670,
         opacity : 1,
            })
        })
        e.addEventListener("mouseleave",function(dets){
            gsap.to(".page-1 .text1 img",{
         x : dets.x - 500,
        y : dets.y - 600,
         opacity : 0,
            })
        })
    })
    
    
}
page1();
function navAnime(){
var logo = document.querySelector(".nav .logo");
var flag = 0;
logo.addEventListener("click",function(){
    var time = gsap.timeline();
if(flag == 0){
    time.to(".nav .logo svg #right",{
        opacity : 0,
    })
    time.to(".nav .nav-part2, .nav .nav-part1 .nav-inner2",{
        opacity : 0,
        duration : -.3,
    })
    time.to(".menu",{
        top : "0%",
        duration : .5,
        ease : "power4.Out",
    })
    time.from(".menu .text h1",{
        y : 350,
        stagger :.1,
        delay : -.2
    })
    time.from(".menu .social",{
        opacity : 0,
        stagger :.3,
        delay : -.2
    })
   
  
flag = 1
}
else{
    gsap.to(".nav .logo svg #right",{
        opacity : 1,
    })
    gsap.to(".menu",{
        top : "-100%",
        duration : .5,
        ease : "power4.Out",
    })
    gsap.from(".page-1 .text h1",{
        y : 350,
        stagger :{
            amount : .3,
        },
    });
    gsap.to(".nav .nav-part2, .nav .nav-part1 .nav-inner2",{
        opacity : 1,
    })
flag =0;
}


})
gsap.to(".nav .nav-part2, .nav .nav-part1 .nav-inner2",{
    y : -20,
    opacity : 0,
    scrollTrigger : {
        scroller : ".main",
        trigger : ".nav",
        start : "top 0",
        end : "top -100",
        scrub : 1,
    }
})
}
navAnime();
function page2(){
const videoC = document.querySelector(".page-2 .video-container");
const img = document.querySelector(".page-2 .video-container img");
const video = document.querySelector(".page-2 .video-container video");
const btn = document.querySelector(".page-2 .btn");

videoC.addEventListener("mousemove",function(dets){
    gsap.to(".mousefollower",{
        opacity : 0,
    })
    gsap.to(btn,{
      top : (dets.y - 30) ,
      left :( dets.x - 360)
    })
  
})
videoC.addEventListener("mouseleave",function(e){
    gsap.to(btn,{
        top : "5%",
        left : "75%"
    })
    gsap.to(".mousefollower",{
        opacity : 1,
    })
})

var flag = 0;
videoC.addEventListener("click",function(){
    if(flag == 0){
gsap.to(".video-container img",{
    opacity : 0,
})
gsap.to(btn,{
    scale : .6,
})
video.play();
btn.innerHTML = `<i class="ri-pause-fill"></i>`
        flag = 1;
    }
    else {
gsap.to(".video-container img",{
    opacity : 1,
})
gsap.to(btn,{
    scale : 1,
})
video.pause();
btn.innerHTML = `<i class="ri-play-fill"></i>`
        flag = 0;
    }
})

}

page2();
function page3(){

    gsap.from(".page-3 .text h1",{
        y : 350,
        opacity : 0,
        duration : .5,
        scrollTrigger : {
            scroller : ".main",
            trigger : ".page-3",
            start : "top 500",
            end : "top 100",
        }
        
    })
    gsap.from(".page-3 .text .line",{
            width : "0%",
            duration :1,
            scrollTrigger : {
                scroller : ".main",
                trigger : ".page-3",
                start : "top 500",
                end : "top 100",
            }
    })
}
page3()
function page5(){

    gsap.from(".page-5 .text h1",{
        y : 350,
        opacity : 0,
        duration : .5,
        scrollTrigger : {
            scroller : ".main",
            trigger : ".page-5",
            start : "top 500",
            end : "top 100",
        }
        
    })
    gsap.from(".page-5 .text .line",{
            width : "0%",
            duration :1,
            scrollTrigger : {
                scroller : ".main",
                trigger : ".page-5",
                start : "top 500",
                end : "top 100",
            }
    })
    gsap.from(".page-5 .page-5-footer .line",{
            width : "0%",
            duration :1,
            scrollTrigger : {
                scroller : ".main",
                trigger : ".page-5-footer",
                start : "top 500",
                end : "top 100",
            }
    })
}
page5()

function page7(){
    gsap.from(".page-7 .text h1",{
        y : 350,
        opacity : 0,
        duration : .5,
        scrollTrigger : {
            scroller : ".main",
            trigger : ".page-7",
            start : "top 500",
            end : "top 100",
        }
        
    })
    gsap.from(".page-7 .text .line",{
            width : "0%",
            duration :1,
            scrollTrigger : {
                scroller : ".main",
                trigger : ".page-7",
                start : "top 500",
                end : "top 100",
            }
    })
    gsap.from(".page-7 .page-7-footer .line",{
        width : "0%",
        duration :1,
        scrollTrigger : {
            scroller : ".main",
            trigger : ".page-7",
            start : "top 500",
            end : "top 100",
        }
})
var text = document.querySelectorAll(".special");
text.forEach(function(elem){
var content = elem.textContent;
var splitted = content.split("");
 var clutter = "";
 splitted.forEach(function(e){
clutter += `<span>${e}</span>`
 })
 elem.innerHTML = clutter;
})

document.querySelector(".page-7 .text").addEventListener("mouseenter",function(){
    gsap.to(".page-7 .text h1 span",{
        opacity : 0,
        stagger : {
            amount : .4
        },
    })
    gsap.to(".page-7 .text h2 span",{
        opacity : 1,
        stagger : {
            amount : .4
        },
        delay : .4,
    })
})
document.querySelector(".page-7 .text").addEventListener("mouseleave",function(){
    gsap.to(".page-7 .text h2 span",{
        opacity : 0,
        stagger : {
            amount : .4
        },
    })
    gsap.to(".page-7 .text h1 span",{
        opacity : 1,
        stagger : {
            amount : .4
        },
        delay : .4,
    })
})
}
page7();

