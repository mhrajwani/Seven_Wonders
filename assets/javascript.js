var videos =document.querySelectorAll('video');
  for (var i=0;i<videos.length;i++)
  {
    videos[i].playbackRate = 0.50;
  }

function openWonder(evt, numb) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(numb).style.display = "block";
    evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click()