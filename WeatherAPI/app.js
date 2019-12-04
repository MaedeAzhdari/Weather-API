var button=document.querySelector('.button')
var inputValue=document.querySelector('.inputValue')

var count=document.querySelector('.count');
var desc=document.querySelector('.desc');
var temp=document.querySelector('.temp');
var humid=document.querySelector('.humid');
var wind=document.querySelector('.wind');




button.addEventListener('click',function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&units=metric&appid=6b73f31ff405ec6e50203fd802cefd66')

    .then(response => response.json())
    .then(data => {
        var countValue=data['sys']['country']
            var tempValue=data['main']['temp'];
            var humidValue=data['main']['humidity'];
            var descValue=data['weather'][0]['description'];
            var windValue=data['wind']['speed'];

            count.innerHTML=countValue;
            temp.innerHTML=tempValue;
            desc.innerHTML=descValue;
            humid.innerHTML=humidValue;
            wind.innerHTML=windValue;
 
    })
    
    .catch(err=>alert("Wrong city name!"))
})