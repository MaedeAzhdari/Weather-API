var button=document.querySelector('.button')
var button1=document.querySelector('button1')
var inputValue=document.querySelector('.inputValue')

var count=document.querySelector('.count');
var desc=document.querySelector('.desc');
var temp=document.querySelector('.temp');
var humid=document.querySelector('.humid');
var wind=document.querySelector('.wind');
var ultraviolet=document.querySelector('.UV');


var temp0=document.querySelector('.temp0');
var date0=document.querySelector('.date0');
var temp1=document.querySelector('.temp1');
var date1=document.querySelector('.date1');
var temp2=document.querySelector('.temp2');
var date2=document.querySelector('.date2');
var temp3=document.querySelector('.temp3');
var date3=document.querySelector('.date3');
var temp4=document.querySelector('.temp4');
var date4=document.querySelector('.date4');
var temp5=document.querySelector('.temp5');
var date5=document.querySelector('.date5');
var temp6=document.querySelector('.temp6');
var date6=document.querySelector('.date6');
var temp7=document.querySelector('.temp7');
var date7=document.querySelector('.date7');
var temp8=document.querySelector('.temp8');
var date8=document.querySelector('.date8');




button.addEventListener('click',function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&units=metric&appid=6b73f31ff405ec6e50203fd802cefd66')

    .then(response => response.json())
    .then(data => {
            var countValue=data['sys']['country'];
            var tempValue=data['main']['temp'];
            var humidValue=data['main']['humidity'];
            var descValue=data['weather'][0]['description'];
            var windValue=data['wind']['speed'];
            var lonValue=data['coord']['lon'];
            var latValue=data['coord']['lat'];

            count.innerHTML=countValue;
            temp.innerHTML=tempValue;
            desc.innerHTML=descValue;
            humid.innerHTML=humidValue;
            wind.innerHTML=windValue;

            fetch('http://api.openweathermap.org/data/2.5/uvi?appid=6b73f31ff405ec6e50203fd802cefd66&lat='+latValue+'&lon='+lonValue)
            .then(response=>response.json())
            .then(data=>{
                var ultravioletValue=data['value'];
                ultraviolet.innerHTML=ultravioletValue;
            })
        
 
    })

    fetch('https://api.openweathermap.org/data/2.5/forecast?q='+inputValue.value+'&units=metric&appid=6b73f31ff405ec6e50203fd802cefd66')

    .then(response=>response.json())
     .then(data=>{       
      var temp0Value=data['list']['0']['main']['temp'];
      var date0Value=data['list']['0']['dt_txt'];
      var temp1Value=data['list']['1']['main']['temp'];
      var date1Value=data['list']['1']['dt_txt'];
      var temp2Value=data['list']['2']['main']['temp'];
      var date2Value=data['list']['2']['dt_txt'];
      var temp3Value=data['list']['3']['main']['temp'];
      var date3Value=data['list']['3']['dt_txt'];
      var temp4Value=data['list']['4']['main']['temp'];
      var date4Value=data['list']['4']['dt_txt'];
      var temp5Value=data['list']['5']['main']['temp'];
      var date5Value=data['list']['5']['dt_txt'];
      var temp6Value=data['list']['6']['main']['temp'];
      var date6Value=data['list']['6']['dt_txt'];
      var temp7Value=data['list']['7']['main']['temp'];
      var date7Value=data['list']['7']['dt_txt'];
      var temp8Value=data['list']['8']['main']['temp'];
      var date8Value=data['list']['8']['dt_txt'];
      
      date0.innerHTML=date0Value;
      temp0.innerHTML=temp0Value;
      date1.innerHTML=date1Value;
      temp1.innerHTML=temp1Value;
      date2.innerHTML=date2Value;
      temp2.innerHTML=temp2Value;
      date3.innerHTML=date3Value;
      temp3.innerHTML=temp3Value;
      date4.innerHTML=date4Value;
      temp4.innerHTML=temp4Value;
      date5.innerHTML=date5Value;
      temp5.innerHTML=temp5Value;
      date6.innerHTML=date6Value;
      temp6.innerHTML=temp6Value;
      date7.innerHTML=date7Value;
      temp7.innerHTML=temp7Value;
      date8.innerHTML=date8Value;
      temp8.innerHTML=temp8Value;
})
    
    .catch(err=>alert("Wrong city name!"))
})

