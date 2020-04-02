$(document).ready(function () {

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
      document.getElementById("nation-img" + i).src = json[i].nation;
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