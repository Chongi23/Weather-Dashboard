function GetInfo() {
    const newName = document.getElementById("cityInput");
    const cityName = document.getElementById("citName");
    cityName.innerHTML = "--" + newName.value + "--"
}

fetch("https://api.openweathermap.org/data/2.5/forecast?q='+newName.value+'&appid=146391a7fd49af68e86031c47a195ee5")
    .then(response => response.json())
    .then(data => {
        for (i = 0; i < 5; i++) {
            document.getElementById("day" + (i + 1) + "min").innerHTML = "Min:" + Number(data.list[i].main.temp_min - 300.98).toFixed(1) +"°";
        }
            for (i = 0; i < 5; i++) {
                document.getElementById("day" + (i + 1) + "max").innerHTML = "Max:" + Number(data.list[i].main.temp_max - 300.98).toFixed(1) +"°";
            }
        for(i=0;i<5;i++){
            document.getElementById("img" +(i+1)).src=" https://openweathermap.org/img/wn/" + data.list[i].weather[0].icon+".png";

        }
    })

    .catch(err => alert("woops,something went wrong"))

    const d =new Date();
    const weekday = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

    function CheckDay(day){
        if(day +d.getDay() > 5){
            return day +d.getDay()-7;
       }
       else{
        return day +d.getDay();

       }
    }

    for(i=0;i<5;i++){
        document.getElementsById("day"+(i+1)).innerHTML = weekday[CheckDay(i)];
    }