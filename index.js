import { teams, players } from "./data.js";

var count = -1;
var img = "";

var count1 = players.length - 88;
var count2 = players.length - 77;
for (var i = 1; i <= teams.length; i++) {
  count++;

  img += `<tr ><td class="match">   <spam class="left"><span ><img src="${
    teams[count].team_image_url
  }" style="width:45px;height:45px;"></span><span><a class="btn " data-bs-toggle="collapse" href="#collapseExample${count}" role="button" aria-expanded="true" aria-controls="collapseExample">${
    teams[count].name
  }</a></span></spam> 

<div class="collapse" id="collapseExample${count}">
  <div id="${count}"href="#collapseExample${count}" class="btn p" data-bs-toggle="collapse" role="button" aria-expanded="true" aria-controls="collapseExample">
  <div class="s s1">1. ${players[count1++].Player_Name}</div>
  <div class="s s2">2. ${players[count1++].Player_Name}</div>
  <div class="s s3">3. ${players[count1++].Player_Name}</div>
  <div class="s s4">4. ${players[count1++].Player_Name}</div>
  <div class="s s5">5. ${players[count1++].Player_Name}</div>
  <div class="s s6">6. ${players[count1++].Player_Name}</div>
  <div class="s s7">7. ${players[count1++].Player_Name}</div>
  <div class="s s8">8. ${players[count1++].Player_Name}</div>
  <div class="s s9">9. ${players[count1++].Player_Name}</div>
  <div class="s s10">10. ${players[count1++].Player_Name}</div>
  <div class="s s11">11. ${players[count1++].Player_Name}</div>
  </div>
  </div>

<span class="vs">VS</span> 


<span class="right"> <span><img src="${
    teams[count + 1].team_image_url
  }" style="width:45px;height:45px;"></span><span><a class="btn " data-bs-toggle="collapse" href="#collapseExample1${count}" role="button" aria-expanded="true" aria-controls="collapseExample">${
    teams[count + 1].name
  }</a></span></span>

<div class="collapse" id="collapseExample1${count}">
  <div id="${count}"href="#collapseExample1${count}" class="btn p" data-bs-toggle="collapse" role="button" aria-expanded="true" aria-controls="collapseExample1">
  <div class="s s1">1. ${players[count2++].Player_Name}</div>
  <div class="s s2">2. ${players[count2++].Player_Name}</div>
  <div class="s s3">3. ${players[count2++].Player_Name}</div>
  <div class="s s4">4. ${players[count2++].Player_Name}</div>
  <div class="s s5">5. ${players[count2++].Player_Name}</div>
  <div class="s s6">6. ${players[count2++].Player_Name}</div>
  <div class="s s7">7. ${players[count2++].Player_Name}</div>
  <div class="s s8">8. ${players[count2++].Player_Name}</div>
  <div class="s s9">9. ${players[count2++].Player_Name}</div>
  <div class="s s10">10. ${players[count2++].Player_Name}</div>
  <div class="s s11">11. ${players[count2++].Player_Name}</div>
  </div>
  </div>

</td></tr>`;
  document.getElementById("s").innerHTML = img;
}
