$(document).ready(function () {


  // $.getJSON('missionCardsData.json', function (json) {
  //     console.log(json);
  //     var template
  //     template = document.getElementsByTagName("template")[0];
  //     var divs = template.content.querySelector('div');
  //     var a;

  //     for (i = 0; i < json.length; i++) {
  //         //go and create new ids
  //         $(".card-title").attr("id", "mission-title" + i);
  //         $(".card-number").attr("id", "mission-id" + i);
  //         $(".card-type").attr("id", "mission-type" + i);
  //         $(".mission-span-story").attr("id", "mission-story" + i);
  //         $(".mission-span-obj").attr("id", "mission-objective" + i);
  //         $(".mission-span-note").attr("id", "mission-note" + i);
  //         $(".mission-span-reward").attr("id", "mission-reward" + i);
  //         $(".card-img-top").attr("id", "mission-img" + i);

  //         //import all the div elements
  //         a = document.importNode(divs, true);
  //         //add them to the page
  //         document.body.appendChild(a);

  //         //add in the data to each id
  //         document.getElementById("mission-title").innerHTML = json[i].title;
  //         document.getElementById("mission-id").innerHTML = i;
  //         document.getElementById("mission-type").innerHTML = json[i].type;
  //         document.getElementById("mission-story").innerHTML = json[i].story;
  //         document.getElementById("mission-objective").innerHTML = json[i].objective;
  //         document.getElementById("mission-note").innerHTML = json[i].note;
  //         document.getElementById("mission-reward").innerHTML = json[i].reward;
  //         document.getElementById("mission-img").src = json[i].image;
  //     }

  // });

  $.getJSON('missionCardsData.json', function (json) {
    processJson(json);
  });

  function processJson(json) {
    console.log(json);
    createCards(json);
    createIds();
    addJsonData(json);
  }

  function createCards(json) {
    var template
    template = document.getElementsByTagName("template")[0];
    var divs = template.content.querySelector('div');
    var a;

    for (i = 0; i < json.length; i++) {
      a = document.importNode(divs, true);
      //add them to the page
      document.body.appendChild(a);
    }
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
  }

  function addJsonData(json) {
    for (i = 0; i < json.length; i++) {
      document.getElementById("nation-img" + i).innerHTML = json[i].nation;
      document.getElementById("mission-title" + i).innerHTML = json[i].title;
      document.getElementById("mission-id" + i).innerHTML = i;
      document.getElementById("mission-type" + i).innerHTML = json[i].type;
      document.getElementById("mission-story" + i).innerHTML = json[i].story;
      document.getElementById("mission-objective" + i).innerHTML = json[i].objective;
      document.getElementById("mission-note" + i).innerHTML = json[i].note;
      document.getElementById("mission-reward" + i).innerHTML = json[i].reward;
      document.getElementById("mission-img" + i).src = json[i].image;
    }
  }

});