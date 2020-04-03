$(document).ready(function () {
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    document.getElementById("dieroll").innerHTML = getRandomInt(0, 20);


    function randomCards(json) {
        $("#get-random-cards-btn").click(function () {

            $(".card-parent").remove();

            numFighters = $("#fighters-amount").val();
            numAttackers = $("#attackers-amount").val();
            numFightersParsed = parseInt(numFighters);
            numAttackersParsed = parseInt(numAttackers);
            total = numAttackersParsed + numFightersParsed;


            //get the fighter cards if any
            for (i = 0; i < total; i++) {
                createCard();
                createIds();
                indexFighters = getDieRoll(json, "Fighters");
                addJsonData(json, i, indexFighters);
            }

            //get the attacker cards if any
            for (i = 0; i < total; i++) {
                indexAttackers = getDieRoll(json, "Attackers");
                n = i + numFightersParsed;
                addJsonData(json, n, indexAttackers);
            }
        });
    }



    $.getJSON('missionCardsData.json', function (json) {
        processJson(json);
    });

    function processJson(json) {
        randomCards(json);
    }


    function getDieRoll(json, cardType) {
        dieRoll = getRandomInt(0, json.length);
        type = json[dieRoll].type;
        while (type != cardType) {
            dieRoll = getRandomInt(0, json.length);
            type = json[dieRoll].type;
        }
        return dieRoll;
    }


    function createCard() {
        var template
        template = document.getElementsByTagName("template")[0];
        var divs = template.content.querySelector('div');
        var a;

        a = document.importNode(divs, true);
        //add cards to the page
        document.getElementById("cards").appendChild(a);

    }

    function createIds() {
        $(".nation-img-top").each(function (i) {
            $(this).attr('id', "nation-img" + (i + 1 - 1));
        });
        $(".card-title").each(function (i) {
            $(this).attr('id', "mission-title" + (i + 1 - 1));
        });
        $(".card-number").each(function (i) {
            $(this).attr('id', "mission-id" + (i + 1 - 1));
        });
        $(".card-type").each(function (i) {
            $(this).attr('id', "mission-type" + (i + 1 - 1));
        });
        $(".mission-span-story").each(function (i) {
            $(this).attr('id', "mission-story" + (i + 1 - 1));
        });
        $(".mission-span-obj").each(function (i) {
            $(this).attr('id', "mission-objective" + (i + 1 - 1));
        });
        $(".mission-span-note").each(function (i) {
            $(this).attr('id', "mission-note" + (i + 1 - 1));
        });
        $(".mission-span-reward").each(function (i) {
            $(this).attr('id', "mission-reward" + (i + 1 - 1));
        });
        $(".card-img-top").each(function (i) {
            $(this).attr('id', "mission-img" + (i + 1 - 1));
        });
        $(".flight-group").each(function (i) {
            $(this).attr('id', "flight-group-id" + (i + 1 - 1));
        });
    }

    function addJsonData(json, i, index) {
        console.log(json);
        document.getElementById("nation-img" + i).src = json[index].nation;
        document.getElementById("mission-title" + i).innerHTML = json[index].title;
        document.getElementById("mission-id" + i).innerHTML = index;
        document.getElementById("mission-type" + i).innerHTML = json[index].type;
        document.getElementById("mission-story" + i).innerHTML = json[index].story;
        document.getElementById("mission-objective" + i).innerHTML = json[index].objective;
        document.getElementById("mission-note" + i).innerHTML = json[index].note;
        document.getElementById("mission-reward" + i).innerHTML = json[index].reward;
        document.getElementById("mission-img" + i).src = json[index].image;

        document.getElementById("flight-group-id" + i).innerHTML = setFlightName(i);
    }


    function setFlightName(i) {
        switch (i) {
            case 0:
                i = "Raptor";
                break;
            case 1:
                i = "Falcons";
                break;
            case 2:
                i = "Vultures";
                break;
            case 3:
                i = "Eagles";
                break;
            case 4:
                i = "Hawks";
                break;
            case 5:
                i = "Shrikes";
                break;
            case 6:
                i = "Accipiters";
                break;
            case 7:
                i = "Kites";
                break;
            case 8:
                i = "Osprey";
                break;
            case 9:
                i = "Owls";
                break;
            case 10:
                i = "Harriers";
                break;
            case 11:
                i = "Buetos";
                break;
            default:
                i = "unnamed";
                break;
        }
        console.log(i);
        return i;
    }

});