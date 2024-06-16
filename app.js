const text_container= document.querySelector('.text_container');
const auto_text= document.querySelector('.auto_text');
const cursor= document.querySelector('.cursor');
const header=document.querySelector('.header');

const typing_delay=200;
const erasing_delay=200;
const new_letterDelay=1500;
let index=0;
let charIndex=0;
let words=['Fun','Awesome','Famous','Cool','Easy to Learn!'];

document.addEventListener('DOMContentLoaded',()=>{
    setTimeout(type,new_letterDelay);
})

function type(){
    if(words.length){
        if(charIndex<words[index].length){
            text_container.textContent+=words[index].charAt(charIndex);
            charIndex++;
            setTimeout(type,typing_delay);
        }else{
            setTimeout(erase,erasing_delay);
        }
    }
}

function erase(){
    if(charIndex!=0){
        text_container.textContent=words[index].substring(0,charIndex-1);
        charIndex--;
        setTimeout(erase,erasing_delay);
    }else{
        index++;
        if(index==words.length){
            index=0;
        }
        setTimeout(type,new_letterDelay);
    }
}



let video_container= document.querySelector('.video_container');
let cross=document.querySelector('.cross');
let lets_begin=document.querySelector('.lets_begin');

lets_begin.addEventListener('click',()=>{
    video_container.classList.remove('active');
})

cross.addEventListener('click',()=>{
    video_container.classList.add('active');
})


// toogle

let circle=document.querySelector('.circle');
let toogle_container=document.querySelector('.toogle_container');
let toogle=document.querySelector('.toogle');

circle.addEventListener('click',()=>{
    console.log(toogle);
    auto_text.classList.toggle('light_theme');
    toogle_container.classList.toggle('light_theme');
    circle.classList.toggle('circle_positionchange');
    header.classList.toggle('light_theme');
    toogle.classList.toggle('toogle_changes');

})

// arrow

const arrow=document.querySelector('.arrow');

window.addEventListener('scroll',()=>{
    let position= window.scrollY;
    if(position>80){ 
        arrow.classList.add('fade-out');
        arrow.classList.remove('fade-in');
    }else{
        arrow.classList.add('fade-in');
        arrow.classList.remove('fade-out');
    }
})


//copy_move text


const copy_btn= document.querySelector('.copy_btn');
const move_btn=document.querySelector('.move_btn');

const output=document.querySelector('.output');
const copy_textarea=document.querySelector('.copy_textarea');
const move_textarea=document.querySelector('.move_textarea');


copy_btn.addEventListener('click',()=>{
    let tmp= copy_textarea.value;
    copy_text(tmp);
    
})

move_btn.addEventListener('click',()=>{
    let tmp= copy_textarea.value;
    move_textarea.value=tmp;
})

copy_textarea.addEventListener('click',()=>this.select());
move_textarea.addEventListener('click',()=>this.select());


function copy_text(str){
    const move_container=document.querySelector('.move_container');
    const text_area= document.createElement('textarea');
    text_area.value=str;
    move_container.appendChild(text_area);
    text_area.select();
    document.execCommand('copy');
    move_container.removeChild(text_area);
    output.innerHTML="Copied!";
    output.classList.add('added');
    setTimeout(()=>{
        output.innerHTML="";
        output.classList.remove('added');
    },2000);
}



// progress locator

const next=document.querySelector('.next');
const previous=document.querySelector('.previous');
const one=document.querySelector('#one');
const two=document.querySelector('#two');
const three=document.querySelector('#three');
const four=document.querySelector('#four');


let id_list=['one','two','three','four'];

next.addEventListener('click',()=>{
    addColour();
});

previous.addEventListener('click',()=>{
 
    removeColor();
});


function addColour(){
    var d= document.querySelector('.d');
    var flag=false;
    while(!flag){
        if(d.nextElementSibling.classList.contains('b_background')){
            d=d.nextElementSibling.nextElementSibling;
            
            if(d.id=="four"){
                flag=true;
            }
        }else{
            d.classList.remove('active');
            d.nextElementSibling.classList.add('b_background');
            d.nextElementSibling.nextElementSibling.classList.add('border_color','active');
            console.log(d);

            flag=true;
        }
    }

}

function removeColor(){
    var d= document.querySelector('.d');
    var flag=false;
    while(!flag){
        if(d.classList.contains('active')){
            if(d.id=="one"){
                flag=true;
            }else{
                d.classList.remove('border_color','active');
                d.previousElementSibling.classList.remove('b_background');
                d=d.previousElementSibling.previousElementSibling;
                d.classList.add('active');
                flag=true;
            }
        }else{
            
            d=d.nextElementSibling.nextElementSibling;
            
        }
    }
}
