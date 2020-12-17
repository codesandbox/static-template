/* ===
ml5 Example
PoseNet example using p5.js
=== */

/*
var…再宣言、再代入がOK
let const…再宣言、再代入がNG
詳しくはこのリンク：https://techacademy.jp/magazine/14872
*/

/*リアルタイムスケルトン*/

// 発話機能をインスタンス化
let msg = new SpeechSynthesisUtterance();
let voices = window.speechSynthesis.getVoices();

let text2;
let datadata;
//let csv = [];
let csv = [];

$(function () {
  /* global $ loadSheets */
  const sheetId = "1BjfDZD9NxE0Jsi5thcWv4JHQr_Ss2RrUzexJvMR9NHw";
  const range = "sheet1!A1:E100";
  const max = 3;

  $("#speak").on("click", showdata);
  async function showdata() {
    datadata = await loadSheets(sheetId, range);
    text2 = datadata.values[1][1]; //[][]縦列・横列
    speech(text);
  }
});
function speech(text) {
  msg.voice = voices[7];
  msg.volume = 1.0; // 音量 min 0 ~ max 1
  msg.rate = 1.0; // 速度 min 0 ~ max 10
  msg.pitch = 1.0; // 音程 min 0 ~ max 2

  msg.text = text; // 喋る内容
  msg.lang = "ja-JP"; // en-US or ja-JP
  //msg.lang = "en-US"; // en-US or ja-JP
  // 発話実行
  speechSynthesis.speak(msg);
}
/*let button = document.querySelector("#speak");
button.onclick = function () {
    let text1 = "こんにちは！レッスンを始めましょう";
    speech(text1);
};*/

//リアルタイムスケルトン(自分用の姿勢推定モデル)の座標を表示
let match0_x; //noseのx座標
let match0_y; //noseのy座標
let match1_x; //lefteyeのx座標
let match1_y; //lefteyeのy座標
let match2_x; //righteyeのx座標
let match2_y; //righteyeのy座標
let match3_x; //lefteyeのx座標
let match3_y; //lefteyeのy座標
let match4_x; //righteyeのx座標
let match4_y; //righteyeのy座標

//HTMLに表示した値をもう一度取得
let match0_xx; //noseのx座標
let match0_yy; //noseのy座標
let match1_xx; //lefteyeのx座標
let match1_yy; //lefteyeのy座標
let match2_xx; //righteyeのx座標
let match2_yy; //righteyeのy座標
let match3_xx; //leftearのx座標
let match3_yy; //leftearのy座標
let match4_xx; //rightearのx座標
let match4_yy; //rightearのy座標

let json = ""; //リアルタイムスケルトンの座標を配列[]にまとめる(var 表示制限あり)

//let text;

let sketch1 = function (p) {
  let video;
  let poseNet;
  let poses = [];

  let body = [
    "nose",
    "lefteye",
    "righteye",
    "leftear",
    "rightear",
    "leftShoulder",
    "rightShoulder",
    "leftElbow",
    "rightElbow",
    "leftWrist",
    "rightWrist",
    "leftHip",
    "rightHip",
    "leftKnee",
    "rightKnee",
    "leftAnkle",
    "rightAnkle"
  ];

  p.setup = function () {
    p.createCanvas(400, 480); //640,480
    video = p.createCapture(p.VIDEO);
    video.size(p.width, p.height);
    poseNet = ml5.poseNet(video, modelReady);
    poseNet.on("pose", function (results) {
      poses = results;
    });
    video.hide();
  };

  function modelReady() {
    p.select("#status").html("Model Loaded");
  }

  p.draw = function () {
    function speech(text) {
      msg.voice = voices[7];
      msg.volume = 1.0; // 音量 min 0 ~ max 1
      msg.rate = 1.0; // 速度 min 0 ~ max 10
      msg.pitch = 1.0; // 音程 min 0 ~ max 2

      msg.text = text; // 喋る内容
      msg.lang = "ja-JP"; // en-US or ja-JP
      //msg.lang = "en-US"; // en-US or ja-JP
      // 発話実行
      speechSynthesis.speak(msg);
    }
    //let button = document.querySelector("#speak");
    //button.onclick = function () {
    let text1;
    if (p.frameCount == 10) {
      text1 = "こんにちは！レッスンを始めましょう";
      speech(text1);
    }

    p.image(video, 0, 0, p.width, p.height);
    p.drawKeypoints();
    p.blob();
    p.drawSkeleton();
  };

  p.drawKeypoints = function () {
    const fr = 350;
    p.frameRate(fr);

    for (let i = 0; i < poses.length; i++) {
      let pose = poses[i].pose;
      for (let j = 0; j < pose.keypoints.length; j++) {
        let keypoint = pose.keypoints[j];
        // Only draw an ellipse is the pose probability is bigger than 0.2
        if (keypoint.score > 0.2) {
          //0.2
          p.fill(255, 215, 0);
          p.stroke(255, 0, 0);
          p.strokeWeight(2);
          p.ellipse(keypoint.position.x, keypoint.position.y, 10, 10);

          let a = 0;
          let h = 0;
          h = h + 7 * a;
          a = a + 1;
          //nose
          match0_x = parseInt(pose.keypoints[0 + h].position.x); // 表示文作成
          match0_y = parseInt(pose.keypoints[0 + h].position.y); // 表示文作成
          //lefteye
          match1_x = parseInt(pose.keypoints[1 + h].position.x); // 表示文作成
          match1_y = parseInt(pose.keypoints[1 + h].position.y); // 表示文作成
          //righteye
          match2_x = parseInt(pose.keypoints[2 + h].position.x); // 表示文作成
          match2_y = parseInt(pose.keypoints[2 + h].position.y); // 表示文作成
          //leftear
          match3_x = parseInt(pose.keypoints[3 + h].position.x); // 表示文作成
          match3_y = parseInt(pose.keypoints[3 + h].position.y); // 表示文作成
          //rightear
          match4_x = parseInt(pose.keypoints[4 + h].position.x); // 表示文作成
          match4_y = parseInt(pose.keypoints[4 + h].position.y); // 表示文作成

          //noseの座標をHTML表示
          document.getElementById("PassageArea0_x").innerHTML = match0_x; // 表示更新
          document.getElementById("PassageArea0_y").innerHTML = match0_y; // 表示更新

          //lefteyeの座標をHTML表示
          document.getElementById("PassageArea1_x").innerHTML = match1_x; // 表示更新
          document.getElementById("PassageArea1_y").innerHTML = match1_y; // 表示更新

          //righteyeの座標をHTML表示
          document.getElementById("PassageArea2_x").innerHTML = match2_x; // 表示更新
          document.getElementById("PassageArea2_y").innerHTML = match2_y; // 表示更新

          //leftearの座標をHTML表示
          document.getElementById("PassageArea3_x").innerHTML = match3_x; // 表示更新
          document.getElementById("PassageArea3_y").innerHTML = match3_y; // 表示更新

          //righteyeの座標をHTML表示
          document.getElementById("PassageArea4_x").innerHTML = match4_x; // 表示更新
          document.getElementById("PassageArea4_y").innerHTML = match4_y; // 表示更新

          match0_xx = document.getElementById("PassageArea0_x");
          match0_yy = document.getElementById("PassageArea0_y");

          match1_xx = document.getElementById("PassageArea1_x");
          match1_yy = document.getElementById("PassageArea1_y");

          match2_xx = document.getElementById("PassageArea2_x");
          match2_yy = document.getElementById("PassageArea2_y");

          match3_xx = document.getElementById("PassageArea3_x");
          match3_yy = document.getElementById("PassageArea3_y");

          match4_xx = document.getElementById("PassageArea4_x");
          match4_yy = document.getElementById("PassageArea4_y");

          //リアルタイムスケルトンの座標格納配列[]
          json += [
            body[j] +
              "," +
              parseInt(pose.keypoints[j].position.x) +
              "," +
              parseInt(pose.keypoints[j].position.y) +
              "," +
              "\n"
          ];
        }
      }
    }
  };

  p.blob = function () {
    //CSVファイルにしてダウンロードできるように
    const fr = 10;
    p.frameRate(fr);
    let blob = new Blob([json], { type: "text/csv" }); //配列jsonのデータをCSVファイルに書き出し
    link.href = URL.createObjectURL(blob);
  };

  p.drawSkeleton = function () {
    for (let i = 0; i < poses.length; i++) {
      let skeleton = poses[i].skeleton;
      for (let j = 0; j < skeleton.length; j++) {
        let partA = skeleton[j][0];
        let partB = skeleton[j][1];
        p.stroke(255, 255, 0);
        p.strokeWeight(5);
        p.line(
          partA.position.x,
          partA.position.y,
          partB.position.x,
          partB.position.y
        );
      }
    }
  };
};

/*************************************************************************/

/*クリエイトスケルトン*/

//クリエイトスケルトン(先生用の姿勢推定モデル)の座標を表示
let match00_x; //
let match00_y; //
let match01_x; //
let match01_y; //

let json2 = []; //クリエイトスケルトンの座標を配列[]にまとめる

let match0 = 0; //一致度比較計算
let match1 = 0; //一致度比較計算
let match2 = 0; //一致度比較計算
let match3 = 0; //一致度比較計算
let match4 = 0; //一致度比較計算
let avg = 0; //すべての骨格の座標の一致度平均値
let score = 0; //合計点数
let point = 0; //一致度ごとのポイント数

let sketch2 = function (p) {
  let results2; //csvファイルのデータを取り出す

  let k = 0;
  let l = 0;
  let m = 0;

  /*let match0 = 0;//一致度比較計算
let match1 = 0;//一致度比較計算
let match2 = 0;//一致度比較計算
let match3 = 0;//一致度比較計算
let match4 = 0;//一致度比較計算
let avg = 0;//すべての骨格の座標の一致度平均値
let score = 0;//合計点数
let point = 0;//一致度ごとのポイント数*/

  //let data;
  //let text;
  p.setup = function () {
    p.createCanvas(400, 480);
    p.background(200);
  };

  p.draw = function () {
    const fr = 60;
    p.frameRate(fr);

    var form = document.forms.myform; //Form要素を取得する

    form.myfile.addEventListener("change", function (e) {
      //ファイルが読み込まれた時の処理

      var file = e.target.files; //読み込んだファイル情報を取得
      var reader = new FileReader(); //FileReaderのインスタンスを作成する

      reader.readAsText(file[0]); //読み込んだファイルの中身を取得する

      reader.onload = function (ev) {
        results2 = reader.result.toLowerCase().split("\n"); //CSV　1行ずつ配列に入れる

        for (k = 0; k < results2.length; k++) {
          p.background(200);
          p.fill(255, 0, 0);
          p.stroke(255, 0, 0);
          p.strokeWeight(2);

          json2.push(results2[k].split(",")); //CSV　「,」で分けて配列に入れる
        }
        /*const fr = 100; 
                 p.frameRate(fr);*/
        for (m = 0; m < 16; m++) {
          //骨格点の表示(for文でコードの短縮化)
          p.ellipse(
            parseInt(json2[m + 7 * l][1]),
            parseInt(json2[m + 7 * l][2]),
            10,
            10
          );
        }
        l = l + 1; //フレームごとに骨格点を表示させる

        //nose
        match00_x = parseInt(json2[0 + 7 * l][1]); // 表示文作成
        match00_y = parseInt(json2[0 + 7 * l][2]); // 表示文作成
        //lefteye
        match01_x = parseInt(json2[1 + 7 * l][1]); // 表示文作成
        match01_y = parseInt(json2[1 + 7 * l][2]); // 表示文作成
        //righteye
        match02_x = parseInt(json2[2 + 7 * l][1]); // 表示文作成
        match02_y = parseInt(json2[2 + 7 * l][1]); // 表示文作成
        //leftear
        match03_x = parseInt(json2[3 + 7 * l][1]); // 表示文作成
        match03_y = parseInt(json2[3 + 7 * l][1]); // 表示文作成
        //rightear
        match04_x = parseInt(json2[4 + 7 * l][1]); // 表示文作成
        match04_y = parseInt(json2[4 + 7 * l][1]); // 表示文作成

        document.getElementById("PassageArea00_x").innerHTML = match00_x; //表示更新
        document.getElementById("PassageArea00_y").innerHTML = match00_y; //表示更新

        document.getElementById("PassageArea01_x").innerHTML = match01_x; //表示更新
        document.getElementById("PassageArea01_y").innerHTML = match01_y; //表示更新

        document.getElementById("PassageArea02_x").innerHTML = match02_x; //表示更新
        document.getElementById("PassageArea02_y").innerHTML = match02_y; //表示更新

        document.getElementById("PassageArea03_x").innerHTML = match03_x; //表示更新
        document.getElementById("PassageArea03_y").innerHTML = match03_y; //表示更新

        document.getElementById("PassageArea04_x").innerHTML = match04_x; //表示更新
        document.getElementById("PassageArea04_y").innerHTML = match04_y; //表示更新
        const stature = document.form1.textbox.value; //入力された身長の値を取得
        let stature2 = parseInt((stature * 480) / 162); //162を基準とした画面の比率
        let difference = 480 - stature2; //比率の差分
        match0 =
          Math.abs(Number(match0_xx.textContent) - match00_x) + difference; //座標一致度計算
        match1 =
          Math.abs(Number(match1_xx.textContent) - match01_x) + difference; //座標一致度計算
        match2 =
          Math.abs(Number(match2_xx.textContent) - match02_x) + difference; //座標一致度計算
        match3 =
          Math.abs(Number(match3_xx.textContent) - match03_x) + difference; //座標一致度計算
        match4 =
          Math.abs(Number(match4_xx.textContent) - match04_x) + difference; //座標一致度計算
        //match = Math.abs((Number(match0_xx.textContent)) - match00_x)+difference;//座標一致度計算
        //比率の差分を基準値に足すことでプラマイゼロに

        avg = (match0 + match1 + match2 + match3 + match4) / 5;

        if (avg >= 0 && avg < 20) {
          point = 5;
          score = score + point;
        } else if (avg >= 20 && avg < 50) {
          point = 2;
          score = score + point;
        } else if (avg >= 50 && avg < 100) {
          point = 0;
          score = score + point;
        }
        document.getElementById("score").innerHTML = score; //点数を画面に表示

        let text;
        //let csv = [];

        if (score >= 10) {
          text = text2; //data.values[1][1];//"その調子！ファイト！";
          //csv.push(text[k].split(","));
        } else {
          text = "あはは"; //data.values[1][1]; //"がんばれー";
        }
        speak(text);
        csv += [text + "\n"];
        //console.log(csv);
        var user = { text: text };
        var jsonjson = JSON.stringify(user);
        //let myString = JSON.stringify(user);
        //userdate.text = csv;

        /*$.getJSON("skech.json", function (data) {
          // json読み込み開始
          //.done(function (json) {
          //userdate.text = "text";
          //console.log("data : ", data);
          data.append(jsonjson);
        });*/
        //const obj = {hello: 'world'};
        const blob2 = new Blob([JSON.stringify(user, null, 2)], {
          type: "sample/json"
        });
        link2.href = URL.createObjectURL(blob2);

        function speak(text) {
          msg.voice = voices[7];
          msg.volume = 1.0; // 音量 min 0 ~ max 1
          msg.rate = 1.0; // 速度 min 0 ~ max 10
          msg.pitch = 1.0; // 音程 min 0 ~ max 2

          msg.text = text; // 喋る内容
          msg.lang = "ja-JP"; // en-US or ja-JP
          //msg.lang = "en-US"; // en-US or ja-JP
          // 発話実行
          speechSynthesis.speak(msg);
        }
        $.ajax({
          type: "POST",
          url: "csv-data.py",
          data: { param: text }
        }).done(function (o) {
          // do something
        });
      };
    });
  };
};
//console.log(csv);
new p5(sketch1, "container1"); //リアルタイムスケルトンを表示させる画面
new p5(sketch2, "container2"); //クリエイトスケルトンを表示させる画面
//console.log(csv);
