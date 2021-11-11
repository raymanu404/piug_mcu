const searchWrapper = document.querySelector(".search");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");
const myList = document.getElementById("searchList");
//if user press any key and release
let myMovies = [];
inputBox.onkeyup = (e) =>{
    let userData = e.target.value; //user entered data
    let emptyArray = [];
    if(userData){
        emptyArray = suggestions.filter( (data) =>{
            //return only data which begin with user char entered
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
           
        });
        myMovies = emptyArray;
        emptyArray = emptyArray.map( (data,index) =>{ 
            myMovies[index] = data;
            return data = '<li>' + data + '</li>';
            
        });
        
        searchWrapper.classList.add("active");
        showSuggestions(emptyArray);

        let allList = suggBox.querySelectorAll("li");
        for(let i = 0; i < allList.length; i++){
          
            allList[i].setAttribute("onclick","select(this)");
        }

    }else{
        searchWrapper.classList.remove("active");
    }
    
}

function select(element){
    let selectUserData = element.textContent;
    document.querySelector(`.movie${counter}`).classList.remove("modal-container");
    document.querySelector(`.movie${counter}`).classList.add("modal-container-close");
    inputBox.value = selectUserData;
    searchWrapper.classList.remove("active");
    switchMovie(selectUserData);
    
}


function switchMovie(myMovie){
    for(let i = 0; i < suggestions.length; i++ ){
        if(myMovie === suggestions[i]){
            counter = i + 1;
            carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
             
            document.querySelector(`.movie${counter}`).classList.add("modal-container");
            document.querySelector(`.movie${counter}`).classList.remove("modal-container-close");
            
            break;
        }
    }
}
function showSuggestions(list){
    let listData;
    if(!list.length){
        var userValue = inputBox.value;
        listData = '<li>' + userValue + '</li>';       
    }else{
        listData = list.join('');
    }
    suggBox.innerHTML = '<ul>' + listData +'</ul>';
}

