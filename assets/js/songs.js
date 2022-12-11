const songs = [
  {
    name: "LK Thành Phố Buồn",
    singer: "Chế Link, Trường Vũ",
    path:
      "https://data17.chiasenhac.com/downloads/1475/1/1474721-4473c0f4/128/Thanh%20Pho%20Buon%20-%20Truong%20Vu%20Che%20Linh%20(NhacPro.net).mp3",
    image: "https://data.chiasenhac.com/data/cover/29/28702.jpg"
  },
  {
    name: "Có Hẹn Với Thanh Xuân",
    singer: "MONSTAR",
    path:
      "https://stream.nixcdn.com/NhacCuaTui1028/CoHenVoiThanhXuan1967Remix-MONSTARAnhVu-7216683.mp3",
    image: "https://data.chiasenhac.com/data/cover/149/148315.jpg"
  },

  {
    name: "There's Nothing Holdin' Me Back",
    singer: "Shawn Mendes",
    path:
      "https://data3.chiasenhac.com/downloads/1782/1/1781972-05e46fdc/128/There_s%20Nothing%20Holdin_%20Me%20Back%20-%20Shawn.mp3",

    image: "https://data.chiasenhac.com/data/cover/71/70821.jpg"
  },
  {
    name: "Take Me To Infinity",
    singer: "Consoul Trainin",
    path:
      "https://data33.chiasenhac.com/downloads/1982/1/1981352-36a0c162/128/Take%20Me%20To%20Infinity%20-%20Consoul%20Trainin.mp3",

    image: "https://data.chiasenhac.com/data/cover/99/98399.jpg"
  },
  {
    name: "Super Heroes",
    singer: "The Script",
    path:
      "https://data16.chiasenhac.com/downloads/1468/1/1467060-d2a8209f/128/Superheroes - The Script.mp3",

    image: "https://data.chiasenhac.com/data/cover/61/60747.jpg"
  },
  {
    name: "Five More Hours",
    singer: "Deorro, Chris Brown",
    path:
      "https://stream.nixcdn.com/Sony_Audio54/FiveMoreHoursDeorroxChrisBrown-DeorroChrisBrown-5791549.mp3",

    image: "https://data.chiasenhac.com/data/cover/61/60747.jpg"
  },
  {
    name: "Savannah",
    singer: "Diviners",
    path:
      "https://stream.nixcdn.com/NhacCuaTui913/Diviners-SavannahPhillyK-4271809.mp3",

    image: "https://data.chiasenhac.com/data/cover/90/89812.jpg"
  },
  {
    name: "Walk Away",
    singer: "LVNDSCAPE, Kaptan",
    path:
      "https://data3.chiasenhac.com/downloads/1779/1/1778618-559acea8/128/Walk Away - LVNDSCAPE_ Kaptan.mp3",

    image: "https://data.chiasenhac.com/data/cover/71/70414.jpg"
  },
  {
    name: "I See Fire",
    singer: "Kygo, Selena Gomez",
    path:
      "https://data2.chiasenhac.com/stream2/1701/1/1700327-c3888b55/128/I%20See%20Fire%20Kygo%20Remix_%20-%20Kygo_%20Ed%20Sheera.mp3",

    image: "https://data.chiasenhac.com/data/cover/25/24245.jpg"
  },
  {
    name: "What Lovers Do",
    singer: "Maroon 5",
    path:
      "https://aredir.nixcdn.com/NhacCuaTui1004/WhatLoversDoLjxn239DiuzRemix-Maroon5-6727902.mp3",

    image: "/assets/images/608a3401f74d3113685c.jpg"
  },
  {
    name: "Đã Lỡ Yêu Em Nhiều",
    singer: "JustaTee",
    path:
      "https://aredir.nixcdn.com/NhacCuaTui955/DaLoYeuEmNhieuHoaproxRetroMix-JustaTeeHoaprox-5322814.mp3",

    image: "https://data.chiasenhac.com/data/cover/81/80698.jpg"
  },
  {
    name: "It Ain't Me",
    singer: "Ed Sheeran",
    path:
      "https://aredir.nixcdn.com/Sony_Audio57/ItAintMe-KygoSelenaGomez-5817724.mp3",

    image: "https://data.chiasenhac.com/data/cover/70/69436.jpg"
  },
  {
    name: "Wait Another Day",
    singer: "Mike Williams, Mesto",
    path:
      "https://data33.chiasenhac.com/downloads/1980/1/1979749-b1934f31/128/Wait Another Day - Mike Williams_ Mesto.mp3",

    image: "https://data.chiasenhac.com/data/cover/99/98126.jpg"
  },
  {
    name: "Time",
    singer: "Syn Cole",
    path: "https://aredir.nixcdn.com/NhacCuaTui1006/Time-SynCole-6818985.mp3",

    image: "/assets/images/Screenshot_20200310-202711.png"
  },
  {
    name: "Let Her Go",
    singer: "Passenger",
    path:
      "https://data57.chiasenhac.com/downloads/1182/1/1181598-1179fe77/128/Let%20Her%20Go%20-%20Passenger.mp3",

    image: "https://data.chiasenhac.com/data/cover/14/13317.jpg"
  },
  {
    name: "CHắc Ai Đó Sẽ Về",
    singer: "Sơn Tùng Before",
    path:
      "https://data37.chiasenhac.com/downloads/1897/1/1896706-29b1415b/128/Chac%20Ai%20Do%20Se%20Ve%20-%20Son%20Tung%20M-TP.mp3",

    image: "https://data.chiasenhac.com/data/cover/14/13317.jpg"
  },
  //https://data37.chiasenhac.com/downloads/1897/5/1896706-29b1415b/128/Chac%20Ai%20Do%20Se%20Ve%20-%20Son%20Tung%20M-TP.mp3
  {
    name: "See You Again",
    singer: " Wiz Khalifa; Charlie Puth",
    path:
      "https://data17.chiasenhac.com/downloads/1470/1/1469867-9215ae26/128/See%20You%20Again%20-%20Wiz%20Khalifa_%20Charlie%20Put.mp3",

    image: "https://data.chiasenhac.com/data/cover/39/38730.jpg"
  },
  {
    name: "Story My Life",
    singer: "One Direction",
    path:
      "https://data56.chiasenhac.com/downloads/1176/1/1175155-80d9e1be/128/Story%20Of%20My%20Life%20-%20One%20Direction.mp3",

    image: "https://data.chiasenhac.com/data/cover/94/93183.jpg"
  },

  {
    name: "Pay Phone",
    singer: "Maroon 5",
    path:
      "https://data54.chiasenhac.com/downloads/1102/1/1101139-28950f4e/128/Payphone%20-%20Maroon%205.mp3",
    image: "/assets/images/Screenshot_20200310-202711.png"
  },
  {
    name: "Until You",
    singer: "Shayne Ward",
    path:
      "https://data55.chiasenhac.com/downloads/1138/1/1137727-c94754f0/128/Until%20You%20-%20Shayne%20Ward.mp3",
    image: "/assets/images/IMG_20220911_012846.jpg"
  },
  {
    name: "Sugar",
    singer: "Maroon 5",
    path:
      "https://data62.chiasenhac.com/downloads/1349/1/1348625-00a323af/128/Sugar%20-%20Maroon%205.mp3",
    image: "/assets/images/20220911_121743.jpg"
  },
  {
    name: "Perfect",
    singer: "Ed Sheeran",
    path:
      "https://data17.chiasenhac.com/downloads/2153/1/2152901-c30ec5b5/128/Perfect%20-%20Ed%20Sheeran.mp3",
    image: "/assets/images/IMG_20220913_230034.jpg"
  },
  {
    name: "Perfect",
    singer: "One Directon",
    path:
      "https://data23.chiasenhac.com/downloads/1569/1/1568940-ae56dcf6/128/Perfect%20-%20One%20Direction.mp3",
    image: "https://data.chiasenhac.com/data/cover/48/47779.jpg"
  },
  {
    name: "Nova",
    singer: "Ahrix",
    path:
      "https://data58.chiasenhac.com/downloads/1210/1/1209985-3ef5ca98/32/Nova%20-%20Ahrix.m4a",
    image: "/assets/images/IMG_20220910_155821.jpg"
  },
  {
    name: "Roses",
    singer: "Chainsmokers, Rozes",
    path:
      "https://data2.chiasenhac.com/stream2/1697/1/1696260-cf71c1f7/128/Roses%20-%20The%20Chainsmokers_%20Rozes.mp3",
    image: "https://data.chiasenhac.com/data/cover/82/81529.jpg"
  },
  {
    name: "Maps",
    singer: "Maroon 5",
    path:
      "https://data61.chiasenhac.com/downloads/1322/1/1321746-38dc8da7/128/Maps%20-%20Maroon%205.mp3",
    image: "/assets/images/IMG_20220911_012849.jpg"
  },
  {
    name: "I Do",
    singer: "911",
    path:
      "https://data56.chiasenhac.com/downloads/1150/1/1149845-f6a0a9fc/128/I%20Do%20-%20911.mp3",
    image: "/assets/images/IMG_20220911_013614.jpg"
  },
  {
    name: "Steal My Girl",
    singer: "One Direction",
    path:
      "https://data26.chiasenhac.com/downloads/1426/1/1425090-202df1d3/128/Steal%20My%20Girl%20-%20One%20Direction.mp3",
    image: "/assets/images/928D197B-717F-4A89-AB80-1819026B4168.jpeg"
  },
  {
    name: "Yêu 5",
    singer: "Rhymastic",
    path:
      "https://data3.chiasenhac.com/downloads/2110/1/2109060-cf68a78b/128/Yeu%205%20-%20Rhymastic.mp3",
    image: "https://data.chiasenhac.com/data/cover/126/125590.jpg"
  },
  {
    name: "Yêu 5 Hoaprox Remix",
    singer: "Rhymastic",
    path:
      "https://aredir.nixcdn.com/NhacCuaTui937/Yeu5HoaproxRemix-RhymasticHoaprox-4771204.mp3",
    image: "https://data.chiasenhac.com/data/cover/126/125590.jpg"
  },
  {
    name: "Dusk Till Dawn",
    singer: "Zayn, Sia",
    path:
      "https://aredir.nixcdn.com/Sony_Audio37/DuskTillDawn-ZaynSia-5164057.mp3",
    image: "/assets/images/72836BDD-B853-4238-9BAF-4344E226E9DF.jpeg"
  },
  {
    name: "Love Is Gone",
    singer: "Slander",
    path:
      "https://stream.nixcdn.com/NhacCuaTui1000/LoveIsGoneAcoustic-SlanderDylanMatthew-6288644.mp3",
    image: "/assets/images/72836BDD-B853-4238-9BAF-4344E226E9DF.jpeg"
  },
  {
    name: "Let Me Down Slowly",
    singer: "Alec Benjamin",
    path:
      "https://data38.chiasenhac.com/downloads/1916/1/1915227-4afa47d7/128/Let%20Me%20Down%20Slowly%20-%20Alec%20Benjamin.mp3",
    image: "https://data.chiasenhac.com/data/cover/90/89122.jpg"
  },

  {
    name: "The Days",
    singer: "Avicii",
    path:
      "https://data01.chiasenhac.com/downloads/1376/1/1375167-f4929845/128/The%20Days%20-%20Avicii_%20Robbie%20Williams.mp3",
    image: "https://data.chiasenhac.com/data/cover/31/30964.jpg"
  },
  {
    name: "Good Time",
    singer: "Avicii",
    path:
      "https://data51.chiasenhac.com/downloads/1011/1/1010243-8d6c11ed/128/Good%20Time%20-%20Carly%20Rae%20Jepsen_%20Owl%20City.mp3",
    image: "https://data.chiasenhac.com/data/cover/31/30536.jpg"
  },
  {
    name: "Hall Of Fame",
    singer: "The Script, Will.I.Am",
    path:
      "https://data53.chiasenhac.com/downloads/1064/1/1063084-d813d800/128/Hall%20Of%20Fame%20-%20The%20Script_%20Will_I_Am.mp3",
    image: "https://data.chiasenhac.com/data/cover/5/4145.jpg"
  },
  {
    name: "Please Don't Go",
    singer: "Joel Adams",
    path:
      "https://data2.chiasenhac.com/stream2/1707/1/1706766-c04545a4/128/Please%20Don_t%20Go%20-%20Joel%20Adams.mp3",
    image: "https://data.chiasenhac.com/data/cover/62/61982.jpg"
  },
  {
    name: "You And I",
    singer: "Huu Dat & Ngoc Mai",
    path:
      "https://data56.chiasenhac.com/downloads/1176/1/1175158-9e3c33b1/128/You%20And%20I%20-%20One%20Direction.mp3",
    image: "/assets/images/928D197B-717F-4A89-AB80-1819026B4168.jpeg"
  }
];
export default songs;
