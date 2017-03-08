var xmlhttp;
var blank = '<ul id="busSchedWest" data-role="listview"><li data-role="list-divider">Westbound</li></ul><ul id="busSchedEast" data-role="listview"><li data-role="list-divider">Eastbound</li></ul>'

window.onload=function()
{
  //document.addEventListener('deviceready', init, false);
  init();
}

function init()
{
  document.getElementById('btnNext').addEventListener('click', getBuses, false);
  xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = processResult;
}

function getBuses()
{
  document.getElementById('content').innerHTML = blank;
  refreshLists();
  xmlhttp.open("GET", "XXX-url" + key + "/getfeed", true);
  xmlhttp.send();
}

function processResult()
{
  if(xmlhttp.readyState==4 && xmlhttp.status==200)
  {
    var result = jQuery.parseJSON(xmlhttp.responseText);
    for (var x=0; x < result.entity.length; x++)
    {
      var busNumber = result.entity[x].id;
      var stops = result.entity[x].trip_update.stop_time_update;

      if(stops != null && stops != "")
      {
        //Loop through stops to see if it stops in Westport
        for(var y = 0; y < stops.length; y++)
        {
          //These stop in Westport
          if(stops[y].stop_id == 134)
          {
            //Calculate departure time
            var epTime = stops[y].departure.time
            var departTime = new Date(0);
            departTime.setUTCSeconds(epTime);
            var hours = departTime.getHours();
            if(hours > 12)
            {
              hours -= 12;
            }

            var mins = departTime.getMinutes()
            if (mins < 10)
            {
              mins = "0" + mins;
            }

            departTime = hours + ":" mins;

            //Where is the train going?
            var dest = stops[stops.length-1].stop_id;
            var direction;
            if(dest > 134)
            {
              direction = "Eastbound";
            } else {
              direction = "Westbound";
            }
            dest = busstops[dest];
            createOutput (busNumber, departTime, dest, direction);
            refreshLists();
          }
        }
      }
    }
  }
}

function refreshLists()
{
  $("#busSchedWest").listview().listview('refresh');
  $("#busSchedEast").listview().listview('refresh');
}

function createOutput(trainNumber, departTime, dest, direction)
{
  if(direction == "Westbound")
  {
    var out = "<li><strong>" + departTime + "</strong> Final Stop: " + dest + "<br/>";
    out += "<span class='small'>Bus Number: " + busNumber + "</li>";
    document.getElementById('busSchedWest').innerHTML += out;
  } else {
    var out = "<li><strong>" + departTime + "</strong> Final Stop: " + dest + "<br/>";
    out += "<span class='small'>Bus Number: " + busNumber + "</li>";
    document.getElementById('busSchedEast').innerHTML += out;
  }
}
