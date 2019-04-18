
function contactsFunction() {
  var x = document.getElementById("asterisk");
  var y = document.getElementById("contacts");
  if (x.style.display === "block") {
    x.style.display = "none";
    y.style.display = "block"
  } else {
    x.style.display = "block";
    y.style.display = "none";
  }
}
function asteriskFunction() {
  var x = document.getElementById("asterisk");
  var y = document.getElementById("contacts");
  if (x.style.display === "none") {
  x.style.display = "block";
  y.style.display = "none";
  } else {
    x.style.display = "none";
    y.style.display = "block"
  }
}


/*Menu items*/
/*Эта фунция находит все элементы с контентом и скрывает их при загрузке страницы. Тем не менее при загрузке иногда можно видеть, как тексты мелькают, а только потом скрываются.
Именно поэтому я не вставляю картинки сразу в html, если бы они там были, сначала бы они сто лет грузились, а только потом срабатывал бы файл JS, который бы их скрывал, и было бы некрасиво.
Это drawback того, что у меня весь контент на одной html странице*/
window.onload = function() {
  var contents = document.getElementsByClassName("content");
  for(var i = 0; i < contents.length; i++) {
    contents[i].style.display = "none";}
  };


/*Rietveld*/
/*Эта функция котрывает/закрывает контент проекта*/
function rietveldFunction() {
  /*Переменная х это тот контейнер, в котором у тебя лежит контент*/
  var x = document.getElementById("rietveld");
   /*Первая часть if функции это действия, которые совершаются по клику, если контент скрыт.*/
  if (x.style.display === "none") {
    /*Здесь я просто заново создаю все элементы, кроме текста (текст уже прописан в html), чтобы они загружались только тогда,
    когда мне это нужно, иначе они при загрузке страницы все начинают подгружаться и это очень долго и они все некрасиво вылезают.*/
    var gif = document.createElement('a');
    /*В данном случае я создаю ссылку-картинку, присваиваю ей все аттрибуты, которые иначе были бы прописаны у нее в открывающем теге в html – id, class, src, onclick итд*/
    gif.setAttribute("href","https://rietveld.moscow");
    gif.setAttribute("target","_blank")
    var img = document.createElement('img');
    img.src = "images/rietveld/rietveld.png";
    gif.appendChild(img);
    var text = document.getElementById("rietveldText");
    x.insertBefore(gif, text);
    gif.setAttribute("id", "rietveldimg");
    x.style.display = "block";
  } else {
    x.style.display = "none";
    x.removeChild(rietveldimg);
  }
}


/*Imposter*/
/*Это функция которая позволяет листать по клику картинки. Есть список всех картинок, и на каждом клике он просто выбирает следующую картинку из списка*/
u = 0, imposterimages = ["images/imposter/1.png", "images/imposter/2.png", "images/imposter/3.png", "images/imposter/4.png", "images/imposter/5.png"];
function imposterImage() {
  if (u < imposterimages.length-1) {
   u++;
    } else {
      u = 0;
    }
    document.getElementById('imposterimg').src = imposterimages[u];
}
imposterimages2 = ["images/imposter/arena/1.jpg", "images/imposter/arena/2.jpg", "images/imposter/arena/3.jpg", "images/imposter/arena/4.jpg", "images/imposter/arena/5.png", "images/imposter/arena/6.jpg", "images/imposter/arena/7.png"];
/*Здесь еще в начале он выбирает не первую картинку, а рандомную, и уже от нее листает*/
u2 = Math.floor(Math.random()*imposterimages2.length);
function imposterImage2() {
  if (u2 < imposterimages2.length-1) {
   u2++;
    } else {
      u2 = 0;
    }
    document.getElementById('imposterimg2').src = imposterimages2[u2];
}
/*Та же функция с открытием/скрытием контента, только немного более сложная, потому что здесь создается больше жлем ентов, но структура точно такая же*/
function imposterFunction() {
  var x = document.getElementById("imposter");
  var y = document.getElementById("imposter1");
  var text = document.getElementById("imposterText");
  var info = document.getElementById("imposterInfo");
  if (x.style.display === "none") {
    var content = document.createElement("img");
    content.src = "images/imposter/1.png";
    var text = document.getElementById("imposterText");
    x.insertBefore(content, text);
    content.setAttribute("id","imposterimg");
    content.setAttribute("onclick","imposterImage()")
    x.style.display = "flex";
    y.style.backgroundColor = "black";
    y.style.color = "white";
    var arena = document.createElement("img");
    arena.src = imposterimages2[u2];
    info.appendChild(arena);
    arena.setAttribute("id","imposterimg2");
    arena.setAttribute("onclick","imposterImage2()")
    var link = document.createElement("a");
    link.href = "https://www.are.na/lesya-kuranova/the-imposter-fmgcoxdwu70";
    link.setAttribute("id","imposterLink")
    link.target = "_blank";
    link.innerHTML = "are.na";
    info.appendChild(link);
//Эта штука для перетаскивания элементов. Вот эта маленькая if функция это просто для CSS для мобильной версии//
    if (screen.width > 1000) {
      info.style.top = "40px";
      info.style.left = "50vw";
    }
    /*По идее единственное, что тебе нужно здесь изменить, это id элемента, который должен быть draggable. У меня это не очень умно прописано, этот код везде одинаковый,
    его можно было бы теоретически вставить один раз, но для этого мне пришлось бы переписыватьв всю структуру вообще. Так что если будешь жто вставлять, можем еще с тобой обсудить*/
dragElement(document.getElementById("imposterInfo"));

function dragElement(elmnt) {
var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
if (document.getElementById(elmnt.id)) {
// if present, the header is where you move the DIV from:
document.getElementById(elmnt.id).onmousedown = dragMouseDown;
} else {
// otherwise, move the DIV from anywhere inside the DIV:
elmnt.onmousedown = dragMouseDown;
}

function dragMouseDown(e) {
e = e || window.event;
e.preventDefault();
// get the mouse cursor position at startup:
pos3 = e.clientX;
pos4 = e.clientY;
document.onmouseup = closeDragElement;
// call a function whenever the cursor moves:
document.onmousemove = elementDrag;
}

function elementDrag(e) {
e = e || window.event;
e.preventDefault();
// calculate the new cursor position:
pos1 = pos3 - e.clientX;
pos2 = pos4 - e.clientY;
pos3 = e.clientX;
pos4 = e.clientY;
// set the element's new position:
elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
}

function closeDragElement() {
// stop moving when mouse button is released:
document.onmouseup = null;
document.onmousemove = null;
}
}
//drag end//
  } else {
    x.style.display = "none";
    y.style.backgroundColor = "white";
    y.style.color = "black";
    x.removeChild(imposterimg);
    info.removeChild(imposterimg2);
    info.removeChild(imposterLink);
  }
}

/*Constitution*/
i = 0, constimages = ["images/const/1.png", "images/const/2.gif", "images/const/3.png", "images/const/4.png", "images/const/5.png", "images/const/6.jpg"];
function constImage() {
  if (i < constimages.length-1) {
   i++;
    } else {
      i = 0;
    }
    document.getElementById('constimg').src = constimages[i];}

constimages2 = ["images/const/arena/1.jpg", "images/const/arena/2.jpg", "images/const/arena/3.jpg", "images/const/arena/4.jpg", "images/const/arena/5.jpg", "images/const/arena/6.jpg", "images/const/arena/7.jpg"];
i2 = Math.floor(Math.random()*constimages2.length);
function constImage2() {
  if (i2 < constimages2.length-1) {
   i2++;
    } else {
      i2 = 0;
    }
    document.getElementById('constimg2').src = constimages2[i2];
}

function constFunction() {
  var x = document.getElementById("const");
  var text = document.getElementById("constText");
  var info = document.getElementById("constInfo");
  if (x.style.display === "none") {
    var content = document.createElement("img");
    content.src = "images/const/1.png";
    x.insertBefore(content, text);
    content.setAttribute("id","constimg");
    content.setAttribute("onclick","constImage()")
    x.style.display = "flex";
    var arena = document.createElement("img");
    arena.src = constimages2[i2];
    info.appendChild(arena);
    arena.setAttribute("id","constimg2");
    arena.setAttribute("onclick","constImage2()")
      var link = document.createElement("a");
      link.href = "https://www.are.na/nat-kukina/please-assemble";
      link.setAttribute("id","constLink")
      link.target = "_blank";
      link.innerHTML = "are.na";
      info.appendChild(link);
//TO DRAG CONTAINERS //
if (screen.width > 1000) {
  info.style.top = "40px";
  info.style.left = "50vw";
}
dragElement(document.getElementById("constInfo"));

function dragElement(elmnt) {
var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
if (document.getElementById(elmnt.id)) {
// if present, the header is where you move the DIV from:
document.getElementById(elmnt.id).onmousedown = dragMouseDown;
} else {
// otherwise, move the DIV from anywhere inside the DIV:
elmnt.onmousedown = dragMouseDown;
}

function dragMouseDown(e) {
e = e || window.event;
e.preventDefault();
// get the mouse cursor position at startup:
pos3 = e.clientX;
pos4 = e.clientY;
document.onmouseup = closeDragElement;
// call a function whenever the cursor moves:
document.onmousemove = elementDrag;
}

function elementDrag(e) {
e = e || window.event;
e.preventDefault();
// calculate the new cursor position:
pos1 = pos3 - e.clientX;
pos2 = pos4 - e.clientY;
pos3 = e.clientX;
pos4 = e.clientY;
// set the element's new position:
elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
}

function closeDragElement() {
// stop moving when mouse button is released:
document.onmouseup = null;
document.onmousemove = null;
}
}
//drag end//
  } else {
    x.style.display = "none";
    x.removeChild(constimg);
    info.removeChild(constimg2);
      info.removeChild(constLink);
  }
}


/*Interview*/
z = 0, interviewimages = ["images/interview/1.png", "images/interview/2.png", "images/interview/3.png", "images/interview/4.png"];
function interviewImage() {
  if (z < interviewimages.length-1) {
   z++;
    } else {
      z = 0;
    }
    document.getElementById('interviewimg').src = interviewimages[z];
}
interviewimages2 = ["images/interview/arena/1.jpg", "images/interview/arena/2.jpg", "images/interview/arena/3.jpg", "images/interview/arena/4.png", "images/interview/arena/5.jpg"];
z2 = Math.floor(Math.random()*interviewimages2.length);
function interviewImage2() {
    if (z2 < interviewimages2.length-1) {
      z2++;
      } else {
        z2 = 0;
    }
    document.getElementById('interviewimg2').src = interviewimages2[z2];
}

function interviewFunction() {
var x = document.getElementById("interview");
var y = document.getElementById("interview1");
var text = document.getElementById("interviewText");
var info = document.getElementById("interviewInfo");
if (x.style.display === "none") {
  var content = document.createElement("img");
  content.src = "images/interview/1.png";
  var text = document.getElementById("interviewText");
  x.insertBefore(content, text);
  content.setAttribute("id","interviewimg");
  content.setAttribute("onclick","interviewImage()")
  x.style.display = "flex";
  y.style.backgroundColor = "black";
  y.style.color = "white";
  var arena = document.createElement("img");
  arena.src = interviewimages2[z2];
  info.appendChild(arena);
  arena.setAttribute("id","interviewimg2");
  arena.setAttribute("onclick","interviewImage2()")
  var link = document.createElement("a");
  link.href = "https://www.are.na/nat-kukina/interview-ffz-7wqrxaq";
  link.setAttribute("id","interviewLink")
  link.target = "_blank";
  link.innerHTML = "are.na";
  info.appendChild(link);
  //TO DRAG CONTAINERS //
  if (screen.width > 1000) {
    info.style.top = "40px";
    info.style.left = "50vw";
  }
dragElement(document.getElementById("interviewInfo"));

function dragElement(elmnt) {
var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
if (document.getElementById(elmnt.id)) {
// if present, the header is where you move the DIV from:
document.getElementById(elmnt.id).onmousedown = dragMouseDown;
} else {
// otherwise, move the DIV from anywhere inside the DIV:
elmnt.onmousedown = dragMouseDown;
}

function dragMouseDown(e) {
e = e || window.event;
e.preventDefault();
// get the mouse cursor position at startup:
pos3 = e.clientX;
pos4 = e.clientY;
document.onmouseup = closeDragElement;
// call a function whenever the cursor moves:
document.onmousemove = elementDrag;
}

function elementDrag(e) {
e = e || window.event;
e.preventDefault();
// calculate the new cursor position:
pos1 = pos3 - e.clientX;
pos2 = pos4 - e.clientY;
pos3 = e.clientX;
pos4 = e.clientY;
// set the element's new position:
elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
}

function closeDragElement() {
// stop moving when mouse button is released:
document.onmouseup = null;
document.onmousemove = null;
}
}
//drag end//
} else {
  x.style.display = "none";
  y.style.backgroundColor = "white";
  y.style.color = "black";
  x.removeChild(interviewimg);
  info.removeChild(interviewimg2);
  info.removeChild(interviewLink);
  }
}

/*Film club*/
f = 0, filmclubimages = ["images/filmclub/1.png", "images/filmclub/2.png", "images/filmclub/3.png", "images/filmclub/4.png"];
function filmclubImage() {
  if (f < filmclubimages.length-1) {
   f++;
    } else {
      f = 0;
    }
    document.getElementById('filmclubimg').src = filmclubimages[f];
}
function filmClubFunction() {
  var x = document.getElementById("filmClub");
  if (x.style.display === "none") {
    var content = document.createElement("img");
    content.src = "images/filmclub/1.png";
    var text = document.getElementById("filmClubText");
    x.insertBefore(content, text);
    content.setAttribute("id","filmclubimg");
    content.setAttribute("onclick","filmclubImage()")
    x.style.display = "flex";
  } else {
    x.style.display = "none";
    x.removeChild(filmclubimg);
  }
}

/*Silent video*/
silentVideoimages2 = ["images/silentvideo/1.png", "images/silentvideo/2.jpg", "images/silentvideo/3.jpg", "images/silentvideo/4.gif", "images/silentvideo/5.jpg"];
s2 = Math.floor(Math.random()*silentVideoimages2.length);
function silentVideoImage2() {
    if (s2 < silentVideoimages2.length-1) {
      s2++;
      } else {
        s2 = 0;
    }
    document.getElementById('silentVideoimg2').src = silentVideoimages2[s2];
}

function silentVideoFunction() {
  var x = document.getElementById("silentVideo");
  var text = document.getElementById("silentVideoText");
  var info = document.getElementById("silentVideoInfo");
  if (x.style.display === "none") {
    var video = document.createElement('video');
    video.src = 'https://cdn.glitch.com/2e0cf87a-999b-4b20-bf6a-2358bd8f52f0%2F1.mp4?1550940475371';
    video.autoplay = false;
    video.controls = true;
    x.insertBefore(video, text)
    video.setAttribute("id", "silentVideoVideo");
    x.style.display = "block";
    var arena = document.createElement("img");
    arena.src = silentVideoimages2[s2];
    info.appendChild(arena);
    arena.setAttribute("id","silentVideoimg2");
    arena.setAttribute("onclick","silentVideoImage2()")
    var link = document.createElement("a");
    link.href = "https://www.are.na/nat-kukina/silent-video-upir_69b-we";
    link.setAttribute("id","silentVideoLink")
    link.target = "_blank";
    link.innerHTML = "are.na";
    info.appendChild(link);
    //TO DRAG CONTAINERS //
    if (screen.width > 1000) {
      info.style.top = "40px";
      info.style.left = "50vw";
    }
dragElement(document.getElementById("silentVideoInfo"));

function dragElement(elmnt) {
var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
if (document.getElementById(elmnt.id)) {
// if present, the header is where you move the DIV from:
document.getElementById(elmnt.id).onmousedown = dragMouseDown;
} else {
// otherwise, move the DIV from anywhere inside the DIV:
elmnt.onmousedown = dragMouseDown;
}

function dragMouseDown(e) {
e = e || window.event;
e.preventDefault();
// get the mouse cursor position at startup:
pos3 = e.clientX;
pos4 = e.clientY;
document.onmouseup = closeDragElement;
// call a function whenever the cursor moves:
document.onmousemove = elementDrag;
}

function elementDrag(e) {
e = e || window.event;
e.preventDefault();
// calculate the new cursor position:
pos1 = pos3 - e.clientX;
pos2 = pos4 - e.clientY;
pos3 = e.clientX;
pos4 = e.clientY;
// set the element's new position:
elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
}

function closeDragElement() {
// stop moving when mouse button is released:
document.onmouseup = null;
document.onmousemove = null;
}
}
//drag end//
  } else {
    x.style.display = "none";
    x.removeChild(silentVideoVideo);
    info.removeChild(silentVideoimg2);
    info.removeChild(silentVideoLink);
  }
}

/*Calendar*/
c = 0, calendarimages = ["images/calendar/1.png", "images/calendar/2.png"];
function calendarImage() {
  if (c < calendarimages.length-1) {
   c++;
    } else {
      c = 0;
    }
    document.getElementById('calendarimg').src = calendarimages[c];
}

c2 = 0, calendarimages2 = ["images/calendar/arena/1.jpg", "images/calendar/arena/2.jpg"];
function calendarImage2() {
  if (c2 < calendarimages.length-1) {
   c2++;
    } else {
      c2 = 0;
    }
    document.getElementById('calendarimg2').src = calendarimages2[c2];
}

function calendarFunction() {
  var x = document.getElementById("calendar");
  var text = document.getElementById("calendarText");
  var info = document.getElementById("calendarInfo");
  var randomItem = calendarimages2[Math.floor(Math.random()*calendarimages2.length)];
  if (x.style.display === "none") {
    var content = document.createElement("img");
    content.src = "images/calendar/1.png";
    var text = document.getElementById("calendarText");
    x.insertBefore(content, text);
    content.setAttribute("id","calendarimg");
    content.setAttribute("onclick","calendarImage()")
    x.style.display = "flex";
    var arena = document.createElement("img");
    arena.src = randomItem;
    info.appendChild(arena);
    arena.setAttribute("id","calendarimg2");
    arena.setAttribute("onclick","calendarImage2()")
    var link = document.createElement("a");
    link.href = "https://www.are.na/nat-kukina/silent-video-upir_69b-we";
    link.setAttribute("id","calendarLink")
    link.target = "_blank";
    link.innerHTML = "are.na";
    info.appendChild(link);
    //TO DRAG CONTAINERS //
    if (screen.width > 1000) {
      info.style.top = "40px";
      info.style.left = "50vw";
    }
dragElement(document.getElementById("calendarInfo"));

function dragElement(elmnt) {
var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
if (document.getElementById(elmnt.id)) {
// if present, the header is where you move the DIV from:
document.getElementById(elmnt.id).onmousedown = dragMouseDown;
} else {
// otherwise, move the DIV from anywhere inside the DIV:
elmnt.onmousedown = dragMouseDown;
}

function dragMouseDown(e) {
e = e || window.event;
e.preventDefault();
// get the mouse cursor position at startup:
pos3 = e.clientX;
pos4 = e.clientY;
document.onmouseup = closeDragElement;
// call a function whenever the cursor moves:
document.onmousemove = elementDrag;
}

function elementDrag(e) {
e = e || window.event;
e.preventDefault();
// calculate the new cursor position:
pos1 = pos3 - e.clientX;
pos2 = pos4 - e.clientY;
pos3 = e.clientX;
pos4 = e.clientY;
// set the element's new position:
elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
}

function closeDragElement() {
// stop moving when mouse button is released:
document.onmouseup = null;
document.onmousemove = null;
}
}
//drag end//
  } else {
    x.style.display = "none";
    x.removeChild(calendarimg);
    info.removeChild(calendarimg2);
    info.removeChild(calendarLink);
  }
}


/*WYSINAWYG*/
w = 0, wysinawygimages = ["images/wysinawyg/1.png", "images/wysinawyg/2.png", "images/wysinawyg/3.png", "images/wysinawyg/4.png"];
function wysinawygImage() {
  if (w < wysinawygimages.length-1) {
   w++;
    } else {
      w = 0;
    }
    document.getElementById('wysinawygimg').src = wysinawygimages[w];
}
function wysinawygFunction() {
  var x = document.getElementById("wysinawyg");
  if (x.style.display === "none") {
    var content = document.createElement("img");
    content.src = "images/wysinawyg/1.png";
    var text = document.getElementById("wysinawygText");
    x.insertBefore(content, text);
    content.setAttribute("id","wysinawygimg");
    content.setAttribute("onclick","wysinawygImage()")
    x.style.display = "flex";
  } else {
    x.style.display = "none";
    x.removeChild(wysinawygimg);
  }
}

/*Lugemik*/
l = 0, lugemikimages = ["images/lugemik/1.png", "images/lugemik/2.png", "images/lugemik/3.png", "images/lugemik/4.png", "images/lugemik/5.png"];
function lugemikImage() {
  if (l < lugemikimages.length-1) {
   l++;
    } else {
      l = 0;
    }
    document.getElementById('lugemikimg').src = lugemikimages[l];
}

function lugemikFunction() {
  var x = document.getElementById("lugemik");
  if (x.style.display === "none") {
    var content = document.createElement("img");
    content.src = "images/lugemik/1.png";
    var text = document.getElementById("lugemikText");
    x.insertBefore(content, text);
    content.setAttribute("id","lugemikimg");
    content.setAttribute("onclick","lugemikImage()")
    x.style.display = "flex";
  } else {
    x.style.display = "none";
    x.removeChild(lugemikimg);
  }
}

/*Pregnancy*/
p = 0, pregnancyimages = ["images/pregnancy/1.png", "images/pregnancy/2.png", "images/pregnancy/3.png", "images/pregnancy/4.png", "images/pregnancy/5.png"];
function pregnancyImage() {
  if (p < pregnancyimages.length-1) {
   p++;
    } else {
      p = 0;
    }
    document.getElementById('pregnancyimg').src = pregnancyimages[p];
}
function pregnancyFunction() {
  var x = document.getElementById("pregnancy");
  var y = document.getElementById("pregnancy1");
  if (x.style.display === "none") {
    var content = document.createElement("img");
    content.src = "images/pregnancy/1.png";
    var text = document.getElementById("pregnancyText");
    x.insertBefore(content, text);
    content.setAttribute("id","pregnancyimg");
    content.setAttribute("onclick","pregnancyImage()")
    x.style.display = "flex";
    y.style.backgroundColor = "black";
    y.style.color = "white";
  } else {
    x.style.display = "none";
    y.style.backgroundColor = "white";
    y.style.color = "black";
    x.removeChild(pregnancyimg);
  }
}

/*Lollipop VIP*/
function lollipopFunction() {
  var x = document.getElementById("lollipop");
  if (x.style.display === "none") {
    var video = document.createElement('video');
    video.src = 'https://cdn.glitch.com/2e0cf87a-999b-4b20-bf6a-2358bd8f52f0%2FCrushed%20lollipop%20VIP.mp4?1550950794348';
    video.autoplay = false;
    video.controls = true;
    var text = document.getElementById("text2");
    x.insertBefore(video, text);
    video.setAttribute("id", "lollipopVideo");
    x.style.display = "block";
  } else {
    x.style.display = "none";
    x.removeChild(lollipopVideo);
  }
}

/*Hypergraphics*/
h = 0, hyperimages = ["images/hyper/1.png", "images/hyper/2.png", "images/hyper/3.png"];
function hyperImage() {
  if (h < hyperimages.length-1) {
   h++;
    } else {
      h = 0;
    }
    document.getElementById('hyperimg').src = hyperimages[h];
}

hyperimages2 = ["images/hyper/arena/1.jpg", "images/hyper/arena/2.jpg", "images/hyper/arena/3.png", "images/hyper/arena/4.jpg", "images/hyper/arena/5.jpg", "images/hyper/arena/6.jpg"];
h2 = Math.floor(Math.random()*hyperimages2.length);
function hyperImage2() {
  if (h2 < hyperimages2.length-1) {
   h2++;
    } else {
      h2 = 0;
    }
    document.getElementById('hyperimg2').src = hyperimages2[h2];
}

function hyperFunction() {
  var x = document.getElementById("hyper");
  var text = document.getElementById("hyperText");
  var info = document.getElementById("hyperInfo");
  if (x.style.display === "none") {
    var content = document.createElement("img");
    content.src = "images/hyper/1.png";
    var text = document.getElementById("hyperText");
    x.insertBefore(content, text);
    content.setAttribute("id","hyperimg");
    content.setAttribute("onclick","hyperImage()")
    x.style.display = "flex";
    var arena = document.createElement("img");
    arena.src = hyperimages2[h2];
    info.appendChild(arena);
    arena.setAttribute("id","hyperimg2");
    arena.setAttribute("onclick","hyperImage2()")
    var link = document.createElement("a");
    link.href = "https://www.are.na/nat-kukina/hypergraphics-1519249736";
    link.setAttribute("id","hyperLink")
    link.target = "_blank";
    link.innerHTML = "are.na";
    info.appendChild(link);
    //TO DRAG CONTAINERS //
    if (screen.width > 1000) {
      info.style.top = "40px";
      info.style.left = "50vw";
    }
dragElement(document.getElementById("hyperInfo"));

function dragElement(elmnt) {
var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
if (document.getElementById(elmnt.id)) {
// if present, the header is where you move the DIV from:
document.getElementById(elmnt.id).onmousedown = dragMouseDown;
} else {
// otherwise, move the DIV from anywhere inside the DIV:
elmnt.onmousedown = dragMouseDown;
}

function dragMouseDown(e) {
e = e || window.event;
e.preventDefault();
// get the mouse cursor position at startup:
pos3 = e.clientX;
pos4 = e.clientY;
document.onmouseup = closeDragElement;
// call a function whenever the cursor moves:
document.onmousemove = elementDrag;
}

function elementDrag(e) {
e = e || window.event;
e.preventDefault();
// calculate the new cursor position:
pos1 = pos3 - e.clientX;
pos2 = pos4 - e.clientY;
pos3 = e.clientX;
pos4 = e.clientY;
// set the element's new position:
elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
}

function closeDragElement() {
// stop moving when mouse button is released:
document.onmouseup = null;
document.onmousemove = null;
}
}
//drag end//
  } else {
    x.style.display = "none";
    x.removeChild(hyperimg);
    info.removeChild(hyperimg2);
    info.removeChild(hyperLink);
  }
}

/*Полигамия суицид*/
function toteFunction() {
  var x = document.getElementById("tote");
  if (x.style.display === "none") {
    x.style.display = "flex";
    var content = document.createElement("img");
    content.src = "images/tote/1.jpg";
    var text = document.getElementById("toteText");
    x.insertBefore(content, text);
    content.setAttribute("id","toteimg");
    x.style.display = "flex";
  } else {
    x.style.display = "none";
    x.removeChild(toteimg);
  }
}

/*Face book*/
fb = 0, fbimages = ["images/fb/1.jpg", "images/fb/2.jpg", "images/fb/3.jpg"];
function fbImage() {
  if (fb < fbimages.length-1) {
   fb++;
    } else {
      fb = 0;
    }
    document.getElementById('fbimg').src = fbimages[fb];
}
fbimages2 = ["images/fb/arena/1.png", "images/fb/arena/2.png", "images/fb/arena/3.jpg", "images/fb/arena/4.png", "images/fb/arena/5.jpg"];
fb2 = Math.floor(Math.random()*fbimages2.length);
function fbImage2() {
  if (fb2 < fbimages2.length-1) {
   fb2++;
    } else {
      fb2 = 0;
    }
    document.getElementById('fbimg2').src = fbimages2[fb2];
}

function fbFunction() {
  var x = document.getElementById("fb");
  var y = document.getElementById("fb1");
  var text = document.getElementById("fbText");
  var info = document.getElementById("fbInfo");
  if (x.style.display === "none") {
    var content = document.createElement("img");
    content.src = "images/fb/1.jpg";
    var text = document.getElementById("fbText");
    x.insertBefore(content, text);
    content.setAttribute("id","fbimg");
    content.setAttribute("onclick","fbImage()")
    x.style.display = "flex";
    y.style.backgroundColor = "black";
    y.style.color = "white";
    var arena = document.createElement("img");
    arena.src = fbimages2[fb2];
    info.appendChild(arena);
    arena.setAttribute("id","fbimg2");
    arena.setAttribute("onclick","fbImage2()")
    var link = document.createElement("a");
    link.href = "https://www.are.na/nat-kukina/index-1517475081";
    link.setAttribute("id","fbLink")
    link.target = "_blank";
    link.innerHTML = "are.na";
    info.appendChild(link);
    //TO DRAG CONTAINERS //
    if (screen.width > 1000) {
      info.style.top = "40px";
      info.style.left = "50vw";
    }
dragElement(document.getElementById("fbInfo"));

function dragElement(elmnt) {
var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
if (document.getElementById(elmnt.id)) {
// if present, the header is where you move the DIV from:
document.getElementById(elmnt.id).onmousedown = dragMouseDown;
} else {
// otherwise, move the DIV from anywhere inside the DIV:
elmnt.onmousedown = dragMouseDown;
}

function dragMouseDown(e) {
e = e || window.event;
e.preventDefault();
// get the mouse cursor position at startup:
pos3 = e.clientX;
pos4 = e.clientY;
document.onmouseup = closeDragElement;
// call a function whenever the cursor moves:
document.onmousemove = elementDrag;
}

function elementDrag(e) {
e = e || window.event;
e.preventDefault();
// calculate the new cursor position:
pos1 = pos3 - e.clientX;
pos2 = pos4 - e.clientY;
pos3 = e.clientX;
pos4 = e.clientY;
// set the element's new position:
elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
}

function closeDragElement() {
// stop moving when mouse button is released:
document.onmouseup = null;
document.onmousemove = null;
}
}
//drag end//
  } else {
    x.style.display = "none";
    y.style.backgroundColor = "white";
    y.style.color = "black";
    x.removeChild(fbimg);
    info.removeChild(fbimg2);
    info.removeChild(fbLink);
  }
}
