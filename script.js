function extraireheure(str) {
    var res = ""
    for (i = 11; i <= 15; i++) {
        res += str[i];
    }
    return res;
}

function min(t, n) {
    var res = t[0];
    for (var i = 1; i < n; i++) {
        if (t[i] < res) {
            res = t[i];
        }
    }
    return res;
}

function max(t, n) {
    var res = t[0];
    for (var i = 1; i < n; i++) {
        if (t[i] > res) {
            res = t[i];
        }
    }
    return res;
}

function weather() {
    var ville = localStorage.getItem("ville");
    var url1 = 'https://api.openweathermap.org/data/2.5/weather?q=' + ville + '&lang=fr&appid=a549e37dc16969827edf70714266b626&units=metric';
    var url2 = 'https://api.openweathermap.org/data/2.5/forecast?q=' + ville + '&lang=fr&appid=a549e37dc16969827edf70714266b626&units=metric';
    var mois = { '1': "janvier", '2': "février", '3': "mars", '4': "avril", '5': "mai", '6': "juin", '7': "juillet", '8': "août", '9': "septembre", '10': "octobre", '11': "novembre", '12': "décembre" };
    var ladate = new Date();
    $.getJSON(url1, data => {
        var icon = "https://api.openweathermap.org/img/w/" + data.weather[0].icon + ".png";
        document.getElementById('ville').innerHTML = data.name;
        document.getElementById('temp').innerHTML = parseInt(data.main.temp) + "°";
        $('#icon').attr('src', icon);
    });
    $.getJSON(url2, function(data) {
        var days = ['dim.', 'lun.', 'mar.', 'mer.', 'jeu.', 'ven.', 'sam.'];
        document.getElementById('tempmax').innerHTML = max([parseInt(data.list[0].main.temp_max), parseInt(data.list[1].main.temp_max), parseInt(data.list[2].main.temp_max), parseInt(data.list[3].main.temp_max), parseInt(data.list[4].main.temp_max), parseInt(data.list[5].main.temp_max), parseInt(data.list[6].main.temp_max), parseInt(data.list[7].main.temp_max)], 8) + "° ";
        document.getElementById('tempmin').innerHTML = min([parseInt(data.list[0].main.temp_min), parseInt(data.list[1].main.temp_min), parseInt(data.list[2].main.temp_min), parseInt(data.list[3].main.temp_min), parseInt(data.list[4].main.temp_min), parseInt(data.list[5].main.temp_min), parseInt(data.list[6].main.temp_min), parseInt(data.list[7].main.temp_min)], 8) + "°  " + data.list[0].weather[0].description;
        document.getElementById('date').innerHTML = days[ladate.getDay()] + " " + ladate.getDate() + "  " + mois[ladate.getMonth() + 1] + "  " + ladate.getFullYear();

        document.getElementById('time1').innerHTML = extraireheure(data.list[0].dt_txt);
        $('#ico1').attr('src', "https://api.openweathermap.org/img/w/" + data.list[0].weather[0].icon + ".png");
        document.getElementById('hum1').innerHTML = data.list[0].main.humidity + "%";
        document.getElementById('temp1').innerHTML = parseInt(data.list[0].main.temp) + "°";

        document.getElementById('time2').innerHTML = extraireheure(data.list[1].dt_txt);
        $('#ico2').attr('src', "https://api.openweathermap.org/img/w/" + data.list[1].weather[0].icon + ".png");
        document.getElementById('hum2').innerHTML = data.list[1].main.humidity + "%";
        document.getElementById('temp2').innerHTML = parseInt(data.list[1].main.temp) + "°";

        document.getElementById('time3').innerHTML = extraireheure(data.list[2].dt_txt);
        $('#ico3').attr('src', "https://api.openweathermap.org/img/w/" + data.list[2].weather[0].icon + ".png");
        document.getElementById('hum3').innerHTML = data.list[2].main.humidity + "%";
        document.getElementById('temp3').innerHTML = parseInt(data.list[2].main.temp) + "°";

        document.getElementById('time4').innerHTML = extraireheure(data.list[3].dt_txt);
        $('#ico4').attr('src', "https://api.openweathermap.org/img/w/" + data.list[3].weather[0].icon + ".png");
        document.getElementById('hum4').innerHTML = data.list[3].main.humidity + "%";
        document.getElementById('temp4').innerHTML = parseInt(data.list[3].main.temp) + "°";

        document.getElementById('time5').innerHTML = extraireheure(data.list[4].dt_txt);
        $('#ico5').attr('src', "https://api.openweathermap.org/img/w/" + data.list[4].weather[0].icon + ".png");
        document.getElementById('hum5').innerHTML = data.list[4].main.humidity + "%";
        document.getElementById('temp5').innerHTML = parseInt(data.list[4].main.temp) + "°";

        document.getElementById('time6').innerHTML = extraireheure(data.list[5].dt_txt);
        $('#ico6').attr('src', "https://api.openweathermap.org/img/w/" + data.list[5].weather[0].icon + ".png");
        document.getElementById('hum6').innerHTML = data.list[5].main.humidity + "%";
        document.getElementById('temp6').innerHTML = parseInt(data.list[5].main.temp) + "°";

        document.getElementById('jour1').innerHTML = "Auj.";
        $('#img1').attr('src', "https://api.openweathermap.org/img/w/" + data.list[1].weather[0].icon + ".png");
        document.getElementById('humj1').innerHTML = data.list[8].main.humidity + "%";
        document.getElementById('tempmax1').innerHTML = max([parseInt(data.list[0].main.temp_max), parseInt(data.list[1].main.temp_max), parseInt(data.list[2].main.temp_max), parseInt(data.list[3].main.temp_max), parseInt(data.list[4].main.temp_max), parseInt(data.list[5].main.temp_max), parseInt(data.list[6].main.temp_max), parseInt(data.list[7].main.temp_max)], 8) + "°";
        document.getElementById('tempmin1').innerHTML = min([parseInt(data.list[0].main.temp_min), parseInt(data.list[1].main.temp_min), parseInt(data.list[2].main.temp_min), parseInt(data.list[3].main.temp_min), parseInt(data.list[4].main.temp_min), parseInt(data.list[5].main.temp_min), parseInt(data.list[6].main.temp_min), parseInt(data.list[7].main.temp_min)], 8) + "°";

        document.getElementById('jour2').innerHTML = days[(ladate.getDay() + 8) % 7];
        $('#img2').attr('src', "https://api.openweathermap.org/img/w/" + data.list[8].weather[0].icon + ".png");
        document.getElementById('humj2').innerHTML = data.list[16].main.humidity + "%";
        document.getElementById('tempmax2').innerHTML = max([parseInt(data.list[8].main.temp_max), parseInt(data.list[9].main.temp_max), parseInt(data.list[10].main.temp_max), parseInt(data.list[11].main.temp_max), parseInt(data.list[12].main.temp_max), parseInt(data.list[13].main.temp_max), parseInt(data.list[14].main.temp_max), parseInt(data.list[15].main.temp_max)], 8) + "°";
        document.getElementById('tempmin2').innerHTML = min([parseInt(data.list[8].main.temp_min), parseInt(data.list[9].main.temp_min), parseInt(data.list[10].main.temp_min), parseInt(data.list[11].main.temp_min), parseInt(data.list[12].main.temp_min), parseInt(data.list[13].main.temp_min), parseInt(data.list[14].main.temp_min), parseInt(data.list[15].main.temp_min)], 8) + "°";

        document.getElementById('jour3').innerHTML = days[(ladate.getDay() + 9) % 7];
        $('#img3').attr('src', "https://api.openweathermap.org/img/w/" + data.list[16].weather[0].icon + ".png");
        document.getElementById('humj3').innerHTML = data.list[24].main.humidity + "%";
        document.getElementById('tempmax3').innerHTML = max([parseInt(data.list[16].main.temp_max), parseInt(data.list[17].main.temp_max), parseInt(data.list[18].main.temp_max), parseInt(data.list[19].main.temp_max), parseInt(data.list[20].main.temp_max), parseInt(data.list[21].main.temp_max), parseInt(data.list[22].main.temp_max), parseInt(data.list[23].main.temp_max)], 8) + "°";
        document.getElementById('tempmin3').innerHTML = min([parseInt(data.list[16].main.temp_min), parseInt(data.list[17].main.temp_min), parseInt(data.list[18].main.temp_min), parseInt(data.list[19].main.temp_min), parseInt(data.list[20].main.temp_min), parseInt(data.list[21].main.temp_min), parseInt(data.list[22].main.temp_min), parseInt(data.list[23].main.temp_min)], 8) + "°";

        document.getElementById('jour4').innerHTML = days[(ladate.getDay() + 10) % 7];
        $('#img4').attr('src', "https://api.openweathermap.org/img/w/" + data.list[24].weather[0].icon + ".png");
        document.getElementById('humj4').innerHTML = data.list[32].main.humidity + "%";
        document.getElementById('tempmax4').innerHTML = max([parseInt(data.list[24].main.temp_max), parseInt(data.list[25].main.temp_max), parseInt(data.list[26].main.temp_max), parseInt(data.list[27].main.temp_max), parseInt(data.list[28].main.temp_max), parseInt(data.list[29].main.temp_max), parseInt(data.list[30].main.temp_max), parseInt(data.list[31].main.temp_max)], 8) + "°";
        document.getElementById('tempmin4').innerHTML = min([parseInt(data.list[24].main.temp_min), parseInt(data.list[25].main.temp_min), parseInt(data.list[26].main.temp_min), parseInt(data.list[27].main.temp_min), parseInt(data.list[28].main.temp_min), parseInt(data.list[29].main.temp_min), parseInt(data.list[30].main.temp_min), parseInt(data.list[31].main.temp_min)], 8) + "°";

        document.getElementById('jour5').innerHTML = days[(ladate.getDay() + 11) % 7];
        $('#img5').attr('src', "https://api.openweathermap.org/img/w/" + data.list[32].weather[0].icon + ".png");
        document.getElementById('humj5').innerHTML = data.list[39].main.humidity + "%";
        document.getElementById('tempmax5').innerHTML = max([parseInt(data.list[32].main.temp_max), parseInt(data.list[33].main.temp_max), parseInt(data.list[34].main.temp_max), parseInt(data.list[35].main.temp_max), parseInt(data.list[36].main.temp_max), parseInt(data.list[37].main.temp_max), parseInt(data.list[38].main.temp_max), parseInt(data.list[39].main.temp_max)], 8) + "°";
        document.getElementById('tempmin5').innerHTML = min([parseInt(data.list[32].main.temp_min), parseInt(data.list[33].main.temp_min), parseInt(data.list[34].main.temp_min), parseInt(data.list[35].main.temp_min), parseInt(data.list[36].main.temp_min), parseInt(data.list[37].main.temp_min), parseInt(data.list[38].main.temp_min), parseInt(data.list[39].main.temp_min)], 8) + "°";
    });
}