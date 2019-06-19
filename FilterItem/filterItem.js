//filter btn
(function(){
const filterBtn = document.querySelectorAll('.filter-btn');

filterBtn.forEach(function(btn){
btn.addEventListener('click',function(event){
    event.preventDefault();
    const value = event.target.dataset.filter;
    // console.log(value);
    const items = document.querySelectorAll('.store-item');
    // console.log(items);
    items.forEach(function(item){
        if(value==='all'){
            item.style.display = 'block';
        }
        else{
            if(item.classList.contains(value)){
                item.style.display = 'block';
            }
            else{
                item.style.display = 'none';
            }
        }
    })
})
})
})();

//search input
(function(){
const search = document.getElementById('search-item');

search.addEventListener('keyup',function(){
    let value = search.value.toLowerCase().trim();
    // console.log(value);
    const items = document.querySelectorAll('.store-item');

    items.forEach(function(item){
        let type = item.dataset.item;
        // console.log(type);
        
        // if(type.includes(value)){
        //     item.style.display = 'block';
        // }
        // else{
        //     item.style.display='none';
        // }

        let length = value.length;
        let match = type.slice(0 , length);
        if(value===match){
            item.style.display='block';
        }
        else{
            item.style.display='none';
        }

    })
    
})


})();

//MODEL CONTAINER
(function(){
let imageList=[];
let counter = 0;

const images = document.querySelectorAll('.store-img');
const container = document.querySelector('.lightbox-container');
const item = document.querySelector('.lightbox-item');
const closeItem = document.querySelector('.lightbox-close');
const btnLeft = document.querySelector('.btnLeft');
const btnRight = document.querySelector('.btnRight');

//add all items to the array
images.forEach(function(img){
    imageList.push(img.src);
})
// console.log(imageList);

images.forEach(function(img){
    img.addEventListener('click',function(event){
        //SHOW MODEL
        container.classList.add('show');

        //GET SOURCE
        let src = event.target.src;
        // console.log(src);
        counter = imageList.indexOf(src);
        // console.log(counter);
        item.style.backgroundImage = `url(${src})`    // (OR)     =`url(${imageList[counter]})`
        // console.log(src);
        
    })
})

closeItem.addEventListener('click',function(){
    container.classList.remove('show');
})

btnLeft.addEventListener('click',function(){
    counter--;
    if(counter<0){
        counter = imageList.length - 1;
    }
    item.style.backgroundImage = `url(${imageList[counter]})`;
    // console.log(counter);
    
})

btnRight.addEventListener('click',function(){
    counter++;
    if(counter>(imageList.length-1)){
        counter = 0;
    }
    item.style.backgroundImage = `url(${imageList[counter]})`;
    // console.log(counter);
})
})();


















