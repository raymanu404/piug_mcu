/*********************************************CAROUSEL ********************** */
const carouselSlide = document.querySelector(".carousel-slide");
const carouselMovieBox = document.querySelectorAll(".carousel-slide .movies-box");

//Buttons
const prevSlide = document.getElementById("prevSlide");
const nextSlide = document.getElementById("nextSlide");

//Counter
let counter = 1;
const size = carouselMovieBox[0].clientWidth;
carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

prevSlide.onclick = function (){
    if(counter <= 0) return;  
    // carouselSlide.classList.remove('max-slide');
    carouselSlide.classList.add('next-slide');
    counter--;
  
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    
};
nextSlide.onclick= function (){
    if(counter >= carouselMovieBox.length -1) return;
    // carouselSlide.classList.remove('max-slide');
    carouselSlide.classList.add('next-slide');
    counter++;   
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    
};

carouselSlide.addEventListener('transitionend', ()=>{
    
    if(carouselMovieBox[counter].id === 'lastClone'){
        carouselSlide.classList.remove('next-slide');
        // carouselSlide.classList.add('max-slide');
        counter = carouselMovieBox.length - 2;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }

    if(carouselMovieBox[counter].id === 'firstClone'){    
        carouselSlide.classList.remove('next-slide');
        // carouselSlide.classList.add('max-slide');
        counter = carouselMovieBox.length - counter;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});


/*********************************MOVIES AND MODALS *********************************** */

//IRON MAN 1
const modalContainerMovie1 = document.querySelector(".movie1");
document.getElementById("movie1").addEventListener('click' , () =>{
    
    modalContainerMovie1.classList.add("modal-container");
    modalContainerMovie1.classList.remove("modal-container-close");
});

document.getElementById("modal-movie1").addEventListener('onfocusout' , () =>{
    modalContainerMovie1.classList.remove("modal-container");
    modalContainerMovie1.classList.add("modal-container-close");
});

document.querySelector("#modal-close1").addEventListener('click', () =>{
    modalContainerMovie1.classList.remove("modal-container");
    modalContainerMovie1.classList.add("modal-container-close");
  
});


//HULK 1
const modalContainerMovie2 = document.querySelector(".movie2");
document.getElementById("movie2").addEventListener('click' , () =>{
  
    modalContainerMovie2.classList.add("modal-container");
    modalContainerMovie2.classList.remove("modal-container-close");
});

document.querySelector("#modal-close2").addEventListener('click', () =>{
    modalContainerMovie2.classList.remove("modal-container");
    modalContainerMovie2.classList.add("modal-container-close");
});

//IRON MAN 2
const modalContainerMovie3 = document.querySelector(".movie3");
document.querySelector("#movie3").addEventListener('click' , () =>{
  
    modalContainerMovie3.classList.add("modal-container");
    modalContainerMovie3.classList.remove("modal-container-close");
});

document.querySelector("#modal-close3").addEventListener('click', () =>{
    modalContainerMovie3.classList.remove("modal-container");
    modalContainerMovie3.classList.add("modal-container-close");
});

//THOR 1
;
document.querySelector("#movie4").addEventListener('click' , () =>{
  
    document.querySelector(".movie4").classList.add("modal-container");
    document.querySelector(".movie4").classList.remove("modal-container-close");
});

document.querySelector("#modal-close4").addEventListener('click', () =>{
    document.querySelector(".movie4").classList.remove("modal-container");
    document.querySelector(".movie4").classList.add("modal-container-close");
});

//CAPTAIN AMERICA THE FIRST AVENGER
document.querySelector("#movie5").addEventListener('click' , () =>{
  
    document.querySelector(".movie5").classList.add("modal-container");
    document.querySelector(".movie5").classList.remove("modal-container-close");
});

document.querySelector("#modal-close5").addEventListener('click', () =>{
    document.querySelector(".movie5").classList.remove("modal-container");
    document.querySelector(".movie5").classList.add("modal-container-close");
});

//AVENGERS 1
const modalContainerMovie6 = document.querySelector(".movie6");
document.querySelector("#movie6").addEventListener('click' , () =>{
  
    modalContainerMovie6.classList.add("modal-container");
    modalContainerMovie6.classList.remove("modal-container-close");
});

document.querySelector("#modal-close6").addEventListener('click', () =>{
    modalContainerMovie6.classList.remove("modal-container");
    modalContainerMovie6.classList.add("modal-container-close");
});

//IRON MAN 3
const modalContainerMovie7 = document.querySelector(".movie7");
document.querySelector("#movie7").addEventListener('click' , () =>{
  
    modalContainerMovie7.classList.add("modal-container");
    modalContainerMovie7.classList.remove("modal-container-close");
});

document.querySelector("#modal-close7").addEventListener('click', () =>{
    modalContainerMovie7.classList.remove("modal-container");
    modalContainerMovie7.classList.add("modal-container-close");
});

//THOR 2
const modalContainerMovie8 = document.querySelector(".movie8");
document.querySelector("#movie8").addEventListener('click' , () =>{
  
    modalContainerMovie8.classList.add("modal-container");
    modalContainerMovie8.classList.remove("modal-container-close");
});

document.querySelector("#modal-close8").addEventListener('click', () =>{
    modalContainerMovie8.classList.remove("modal-container");
    modalContainerMovie8.classList.add("modal-container-close");
});

//CAPTAIN AMERICA WINTER SOLDIER
const modalContainerMovie9 = document.querySelector(".movie9");
document.querySelector("#movie9").addEventListener('click' , () =>{
  
    modalContainerMovie9.classList.add("modal-container");
    modalContainerMovie9.classList.remove("modal-container-close");
});

document.querySelector("#modal-close9").addEventListener('click', () =>{
    modalContainerMovie9.classList.remove("modal-container");
    modalContainerMovie9.classList.add("modal-container-close");
});

//GUARDIANS OF THE GALAXY
document.querySelector(".movie10");
document.querySelector("#movie10").addEventListener('click' , () =>{ 
    document.querySelector(".movie10").classList.add("modal-container");
    document.querySelector(".movie10").classList.remove("modal-container-close");
});

document.querySelector("#modal-close10").addEventListener('click', () =>{
    document.querySelector(".movie10").classList.remove("modal-container");
    document.querySelector(".movie10").classList.add("modal-container-close");
});


//AVENGERS AGE OF ULTRON
document.querySelector(".movie11");
document.querySelector("#movie11").addEventListener('click' , () =>{ 
    document.querySelector(".movie11").classList.add("modal-container");
    document.querySelector(".movie11").classList.remove("modal-container-close");
});

document.querySelector("#modal-close11").addEventListener('click', () =>{
    document.querySelector(".movie11").classList.remove("modal-container");
    document.querySelector(".movie11").classList.add("modal-container-close");
});

//ANT MAN
document.querySelector(".movie12");
document.querySelector("#movie12").addEventListener('click' , () =>{ 
    document.querySelector(".movie12").classList.add("modal-container");
    document.querySelector(".movie12").classList.remove("modal-container-close");
});
document.querySelector("#modal-close12").addEventListener('click', () =>{
    document.querySelector(".movie12").classList.remove("modal-container");
    document.querySelector(".movie12").classList.add("modal-container-close");
});

//CAPTAIN AMERICA:CIVIL WAR
document.querySelector(".movie13");
document.querySelector("#movie13").addEventListener('click' , () =>{ 
    document.querySelector(".movie13").classList.add("modal-container");
    document.querySelector(".movie13").classList.remove("modal-container-close");
});

document.querySelector("#modal-close13").addEventListener('click', () =>{
    document.querySelector(".movie13").classList.remove("modal-container");
    document.querySelector(".movie13").classList.add("modal-container-close");
});

//DOCTOR STRANGE
document.querySelector(".movie14");
document.querySelector("#movie14").addEventListener('click' , () =>{ 
    document.querySelector(".movie14").classList.add("modal-container");
    document.querySelector(".movie14").classList.remove("modal-container-close");
});

document.querySelector("#modal-close14").addEventListener('click', () =>{
    document.querySelector(".movie14").classList.remove("modal-container");
    document.querySelector(".movie14").classList.add("modal-container-close");
});

//GUARDIANS OF THE GALAXY VOL 2
document.querySelector(".movie15");
document.querySelector("#movie15").addEventListener('click' , () =>{ 
    document.querySelector(".movie15").classList.add("modal-container");
    document.querySelector(".movie15").classList.remove("modal-container-close");
});

document.querySelector("#modal-close15").addEventListener('click', () =>{
    document.querySelector(".movie15").classList.remove("modal-container");
    document.querySelector(".movie15").classList.add("modal-container-close");
});

//SPIDERMAN HOMECOMING
document.querySelector(".movie16");
document.querySelector("#movie16").addEventListener('click' , () =>{ 
    document.querySelector(".movie16").classList.add("modal-container");
    document.querySelector(".movie16").classList.remove("modal-container-close");
});

document.querySelector("#modal-close16").addEventListener('click', () =>{
    document.querySelector(".movie16").classList.remove("modal-container");
    document.querySelector(".movie16").classList.add("modal-container-close");
});

//THOR 3 RAGNAROK
document.querySelector(".movie17");
document.querySelector("#movie17").addEventListener('click' , () =>{ 
    document.querySelector(".movie17").classList.add("modal-container");
    document.querySelector(".movie17").classList.remove("modal-container-close");
});

document.querySelector("#modal-close17").addEventListener('click', () =>{
    document.querySelector(".movie17").classList.remove("modal-container");
    document.querySelector(".movie17").classList.add("modal-container-close");
});

//BLACK PANTHER
document.querySelector(".movie18");
document.querySelector("#movie18").addEventListener('click' , () =>{ 
    document.querySelector(".movie18").classList.add("modal-container");
    document.querySelector(".movie18").classList.remove("modal-container-close");
});

document.querySelector("#modal-close18").addEventListener('click', () =>{
    document.querySelector(".movie18").classList.remove("modal-container");
    document.querySelector(".movie18").classList.add("modal-container-close");
});


//INFINITY WAR
document.querySelector(".movie19");
document.querySelector("#movie19").addEventListener('click' , () =>{ 
    document.querySelector(".movie19").classList.add("modal-container");
    document.querySelector(".movie19").classList.remove("modal-container-close");
});

document.querySelector("#modal-close19").addEventListener('click', () =>{
    document.querySelector(".movie19").classList.remove("modal-container");
    document.querySelector(".movie19").classList.add("modal-container-close");
});

//ANTMAN & WASP
document.querySelector(".movie20");
document.querySelector("#movie20").addEventListener('click' , () =>{ 
    document.querySelector(".movie20").classList.add("modal-container");
    document.querySelector(".movie20").classList.remove("modal-container-close");
});

document.querySelector("#modal-close20").addEventListener('click', () =>{
    document.querySelector(".movie20").classList.remove("modal-container");
    document.querySelector(".movie20").classList.add("modal-container-close");
});

//CAPTAIN MARVEL
document.querySelector(".movie21");
document.querySelector("#movie21").addEventListener('click' , () =>{ 
    document.querySelector(".movie21").classList.add("modal-container");
    document.querySelector(".movie21").classList.remove("modal-container-close");
});

document.querySelector("#modal-close21").addEventListener('click', () =>{
    document.querySelector(".movie21").classList.remove("modal-container");
    document.querySelector(".movie21").classList.add("modal-container-close");
});

//AVENGERS ENDGAME
document.querySelector(".movie22");
document.querySelector("#movie22").addEventListener('click' , () =>{ 
    document.querySelector(".movie22").classList.add("modal-container");
    document.querySelector(".movie22").classList.remove("modal-container-close");
});

document.querySelector("#modal-close22").addEventListener('click', () =>{
    document.querySelector(".movie22").classList.remove("modal-container");
    document.querySelector(".movie22").classList.add("modal-container-close");
});

//SPIDERMAN FAR FROM HOME
document.querySelector(".movie23");
document.querySelector("#movie23").addEventListener('click' , () =>{ 
    document.querySelector(".movie23").classList.add("modal-container");
    document.querySelector(".movie23").classList.remove("modal-container-close");
});

document.querySelector("#modal-close23").addEventListener('click', () =>{
    document.querySelector(".movie23").classList.remove("modal-container");
    document.querySelector(".movie23").classList.add("modal-container-close");
});

//WANDA VISION
document.querySelector(".movie24");
document.querySelector("#movie24").addEventListener('click' , () =>{ 
    document.querySelector(".movie24").classList.add("modal-container");
    document.querySelector(".movie24").classList.remove("modal-container-close");
});

document.querySelector("#modal-close24").addEventListener('click', () =>{
    document.querySelector(".movie24").classList.remove("modal-container");
    document.querySelector(".movie24").classList.add("modal-container-close");
});

//FALCON AND WINTER SOLDIER
document.querySelector(".movie25");
document.querySelector("#movie25").addEventListener('click' , () =>{ 
    document.querySelector(".movie25").classList.add("modal-container");
    document.querySelector(".movie25").classList.remove("modal-container-close");
});

document.querySelector("#modal-close25").addEventListener('click', () =>{
    document.querySelector(".movie25").classList.remove("modal-container");
    document.querySelector(".movie25").classList.add("modal-container-close");
});

//LOKI
document.querySelector(".movie26");
document.querySelector("#movie26").addEventListener('click' , () =>{ 
    document.querySelector(".movie26").classList.add("modal-container");
    document.querySelector(".movie26").classList.remove("modal-container-close");
});

document.querySelector("#modal-close26").addEventListener('click', () =>{
    document.querySelector(".movie26").classList.remove("modal-container");
    document.querySelector(".movie26").classList.add("modal-container-close");
});

//BLACK WIDOW
document.querySelector(".movie27");
document.querySelector("#movie27").addEventListener('click' , () =>{ 
    document.querySelector(".movie27").classList.add("modal-container");
    document.querySelector(".movie27").classList.remove("modal-container-close");
});

document.querySelector("#modal-close27").addEventListener('click', () =>{
    document.querySelector(".movie27").classList.remove("modal-container");
    document.querySelector(".movie27").classList.add("modal-container-close");
});

//WHAT IF
document.querySelector(".movie28");
document.querySelector("#movie28").addEventListener('click' , () =>{ 
    document.querySelector(".movie28").classList.add("modal-container");
    document.querySelector(".movie28").classList.remove("modal-container-close");
});

document.querySelector("#modal-close28").addEventListener('click', () =>{
    document.querySelector(".movie28").classList.remove("modal-con30iner");
    document.querySelector(".movie28").classList.add("modal-container-close");
});

//SHANG CHI
document.querySelector(".movie29");
document.querySelector("#movie29").addEventListener('click' , () =>{ 
    document.querySelector(".movie29").classList.add("modal-container");
    document.querySelector(".movie29").classList.remove("modal-container-close");
});

document.querySelector("#modal-close29").addEventListener('click', () =>{
    document.querySelector(".movie29").classList.remove("modal-container");
    document.querySelector(".movie29").classList.add("modal-container-close");
});

//ETERNALS
document.querySelector(".movie30");
document.querySelector("#movie30").addEventListener('click' , () =>{ 
    document.querySelector(".movie30").classList.add("modal-container");
    document.querySelector(".movie30").classList.remove("modal-container-close");
});

document.querySelector("#modal-close30").addEventListener('click', () =>{
    document.querySelector(".movie30").classList.remove("modal-container");
    document.querySelector(".movie30").classList.add("modal-container-close");
});

//HAWKEYE
document.querySelector(".movie31");
document.querySelector("#movie31").addEventListener('click' , () =>{ 
    document.querySelector(".movie31").classList.add("modal-container");
    document.querySelector(".movie31").classList.remove("modal-container-close");
});

document.querySelector("#modal-close31").addEventListener('click', () =>{
    document.querySelector(".movie31").classList.remove("modal-container");
    document.querySelector(".movie31").classList.add("modal-container-close");
});

//SPIDERMAN:NO WAY HOME
document.querySelector(".movie32");
document.querySelector("#movie32").addEventListener('click' , () =>{ 
    document.querySelector(".movie32").classList.add("modal-container");
    document.querySelector(".movie32").classList.remove("modal-container-close");
});

document.querySelector("#modal-close32").addEventListener('click', () =>{
    document.querySelector(".movie32").classList.remove("modal-container");
    document.querySelector(".movie32").classList.add("modal-container-close");
});



/************************* NEXT ********************************/
let buttonHELP = false;
const helpButton = document.getElementById("help-button");
helpButton.addEventListener("click",function(){
    if(buttonHELP){
        helpButton.style.color = "#000";
        document.querySelector(".modal-help").classList.remove("modal-container-help");
        document.querySelector(".modal-help").classList.add("modal-container-close");
        buttonHELP = false;
    }else{
        document.querySelector(".modal-help").classList.add("modal-container-help");
        document.querySelector(".modal-help").classList.remove("modal-container-close");
        buttonHELP = true;      
        helpButton.style.color = "#FFF";
    }
   

});

document.querySelector("#modal-close-help").addEventListener('click', () =>{
    helpButton.style.color = "#000";
    document.querySelector(".modal-help").classList.remove("modal-container-help");
    document.querySelector(".modal-help").classList.add("modal-container-close");
    var stopVideo = function ( element ) {
        var iframe = element.querySelector( 'iframe');
        var video = element.querySelector( '.marvel-video' );
        if ( iframe ) {
            var iframeSrc = iframe.src;
            iframe.src = iframeSrc;
        }
        if ( video ) {
            video.pause();
        }
    };
    stopVideo(document);
});