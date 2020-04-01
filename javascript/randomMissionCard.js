$(document).ready(function () {
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }


   
    dieRoll = getRandomInt(0, 20);
    document.getElementById("dieroll").innerHTML = dieRoll;

    $.getJSON('missionCardsData.json', function (json) {
        console.log(json);
        var template
        template = document.getElementsByTagName("template")[0];
        var divs = template.content.querySelector('div');
        var a;

        var i = getRandomInt(0, json.length);
        console.log(i);
        //import all the div elements
        a = document.importNode(divs, true);
        //add them to the page
        document.body.appendChild(a);

        //add in the data to each id
        document.getElementById("mission-title").innerHTML = json[i].title;
        document.getElementById("mission-id").innerHTML = i;
        document.getElementById("mission-story").innerHTML = json[i].story;
        document.getElementById("mission-objective").innerHTML = json[i].objective;
        document.getElementById("mission-note").innerHTML = json[i].note;
        document.getElementById("mission-reward").innerHTML = json[i].reward;
        document.getElementById("mission-img").src = json[i].image;

    });
});