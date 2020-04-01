$(document).ready(function () {
  $.getJSON('missionCardsData.json', function (json) {
      console.log(json);
      var template
      template = document.getElementsByTagName("template")[0];
      var divs = template.content.querySelector('div');
      var a;

      for (i = 0; i < json.length; i++) {
          //go and create new ids
          $(".card-title").attr("id", "mission-title" + i);
          $(".card-number").attr("id", "mission-id" + i);
          $(".mission-span-story").attr("id", "mission-story" + i);
          $(".mission-span-obj").attr("id", "mission-objective" + i);
          $(".mission-span-note").attr("id", "mission-note" + i);
          $(".mission-span-reward").attr("id", "mission-reward" + i);
          $(".card-img-top").attr("id", "mission-img" + i);
          
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
      }

  });
});