const form = document.querySelector("form");

form.addEventListener("submit",function(e){
    e.preventDefault();
    
    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const age = parseInt(document.querySelector("#age").value)
    const male = parseInt(document.querySelector("#m"))
    const female = parseInt(document.querySelector("#f"))
    const results = document.querySelector("#results");
   

    if((height===""|| height<0||(isNaN(height)))){
        results.innerHTML="Enter valid height";
    }else if(weight ==""|| weight<0||isNaN(weight)){
        results.innerHTML="Enter valid weight";
    }else if(age ==""|| age<2 || age >120 ||isNaN(age)){
        results.innerHTML="Enter valid Age";
    }else if(male.checked==false && female.checked==false){
        results.innerHTML="Select gender";
    }
    else{
        const bmi =(weight/((height*height)/10000)).toFixed(2);
        results.innerHTML=`Result: <span>${bmi}</span>`
    }
})
