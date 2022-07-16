var data = [
  {
    Team_Id: "1",
    Team_Name: "Kolkata Knight Riders",
    Team_Short_Code: "KKR"
  },
  {
    Team_Id: "2",
    Team_Name: "Royal Challengers Bangalore",
    Team_Short_Code: "RCB"
  },
  {
    Team_Id: "3",
    Team_Name: "Chennai Super Kings",
    Team_Short_Code: "CSK"
  },
  {
    Team_Id: "4",
    Team_Name: "Kings XI Punjab",
    Team_Short_Code: "KXIP"
  },
  {
    Team_Id: "5",
    Team_Name: "Rajasthan Royals",
    Team_Short_Code: "RR"
  },
  {
    Team_Id: "6",
    Team_Name: "Delhi Daredevils",
    Team_Short_Code: "DD"
  },
  {
    Team_Id: "7",
    Team_Name: "Mumbai Indians",
    Team_Short_Code: "MI"
  },
  {
    Team_Id: "8",
    Team_Name: "Deccan Chargers",
    Team_Short_Code: "DC"
  }
];

// console.log(data[0].Team_Name);

var players = [
  {
    Player_Id: "1",
    Player_Name: "SC Ganguly",
    DOB: "8-Jul-72",
    Batting_Hand: "Left_Hand",
    Bowling_Skill: "Right-arm medium",
    Country: "India",
    Is_Umpire: "0"
  },
  {
    Player_Id: "2",
    Player_Name: "BB McCullum",
    DOB: "27-Sep-81",
    Batting_Hand: "Right_Hand",
    Bowling_Skill: "Right-arm medium",
    Country: "New Zealand",
    Is_Umpire: "0"
  },
  {
    Player_Id: "3",
    Player_Name: "RT Ponting",
    DOB: "19-Dec-74",
    Batting_Hand: "Right_Hand",
    Bowling_Skill: "Right-arm medium",
    Country: "Australia",
    Is_Umpire: "0"
  },
  {
    Player_Id: "4",
    Player_Name: "DJ Hussey",
    DOB: "15-Jul-77",
    Batting_Hand: "Right_Hand",
    Bowling_Skill: "Right-arm offbreak",
    Country: "Australia",
    Is_Umpire: "0"
  },
  {
    Player_Id: "5",
    Player_Name: "Mohammad Hafeez",
    DOB: "17-Oct-80",
    Batting_Hand: "Right_Hand",
    Bowling_Skill: "Right-arm offbreak",
    Country: "Pakistan",
    Is_Umpire: "0"
  },
  {
    Player_Id: "6",
    Player_Name: "R Dravid",
    DOB: "11-Jan-73",
    Batting_Hand: "Right_Hand",
    Bowling_Skill: "Right-arm offbreak",
    Country: "India",
    Is_Umpire: "0"
  },
  {
    Player_Id: "7",
    Player_Name: "W Jaffer",
    DOB: "16-Feb-78",
    Batting_Hand: "Right_Hand",
    Bowling_Skill: "Right-arm offbreak",
    Country: "India",
    Is_Umpire: "0"
  },
  {
    Player_Id: "8",
    Player_Name: "V Kohli",
    DOB: "5-Nov-88",
    Batting_Hand: "Right_Hand",
    Bowling_Skill: "Right-arm medium",
    Country: "India",
    Is_Umpire: "0"
  },
  {
    Player_Id: "9",
    Player_Name: "JH Kallis",
    DOB: "16-Oct-75",
    Batting_Hand: "Right_Hand",
    Bowling_Skill: "Right-arm fast-medium",
    Country: "South Africa",
    Is_Umpire: "0"
  },
  {
    Player_Id: "10",
    Player_Name: "CL White",
    DOB: "18-Aug-83",
    Batting_Hand: "Right_Hand",
    Bowling_Skill: "Legbreak googly",
    Country: "Australia",
    Is_Umpire: "0"
  },
  {
    Player_Id: "11",
    Player_Name: "MV Boucher",
    DOB: "3-Dec-76",
    Batting_Hand: "Right_Hand",
    Bowling_Skill: "Right-arm medium",
    Country: "South Africa",
    Is_Umpire: "0"
  },
  {
    Player_Id: "12",
    Player_Name: "B Akhil",
    DOB: "7-Oct-77",
    Batting_Hand: "Right_Hand",
    Bowling_Skill: "Right-arm medium-fast",
    Country: "India",
    Is_Umpire: "0"
  },
  {
    Player_Id: "13",
    Player_Name: "AA Noffke",
    DOB: "30-Apr-77",
    Batting_Hand: "Right_Hand",
    Bowling_Skill: "Right-arm fast-medium",
    Country: "Australia",
    Is_Umpire: "0"
  },
  {
    Player_Id: "14",
    Player_Name: "P Kumar",
    DOB: "2-Oct-86",
    Batting_Hand: "Right_Hand",
    Bowling_Skill: "Right-arm medium",
    Country: "India",
    Is_Umpire: "0"
  },
  {
    Player_Id: "15",
    Player_Name: "Z Khan",
    DOB: "7-Oct-78",
    Batting_Hand: "Right_Hand",
    Bowling_Skill: "Left-arm fast-medium",
    Country: "India",
    Is_Umpire: "0"
  },
  {
    Player_Id: "16",
    Player_Name: "SB Joshi",
    DOB: "6-Jun-70",
    Batting_Hand: "Left_Hand",
    Bowling_Skill: "Slow left-arm orthodox",
    Country: "India",
    Is_Umpire: "0"
  },
  {
    Player_Id: "17",
    Player_Name: "PA Patel",
    DOB: "9-Mar-85",
    Batting_Hand: "Left_Hand",
    Bowling_Skill: "NULL",
    Country: "India",
    Is_Umpire: "0"
  },
  {
    Player_Id: "18",
    Player_Name: "ML Hayden",
    DOB: "29-Oct-71",
    Batting_Hand: "Left_Hand",
    Bowling_Skill: "Right-arm medium",
    Country: "Australia",
    Is_Umpire: "0"
  },
  {
    Player_Id: "19",
    Player_Name: "MEK Hussey",
    DOB: "27-May-75",
    Batting_Hand: "Left_Hand",
    Bowling_Skill: "Right-arm medium",
    Country: "Australia",
    Is_Umpire: "0"
  },
  {
    Player_Id: "20",
    Player_Name: "MS Dhoni",
    DOB: "7-Jul-81",
    Batting_Hand: "Right_Hand",
    Bowling_Skill: "Right-arm medium",
    Country: "India",
    Is_Umpire: "0"
  },
  {
    Player_Id: "21",
    Player_Name: "SK Raina",
    DOB: "27-Nov-86",
    Batting_Hand: "Left_Hand",
    Bowling_Skill: "Right-arm offbreak",
    Country: "India",
    Is_Umpire: "0"
  },
  {
    Player_Id: "22",
    Player_Name: "JDP Oram",
    DOB: "28-Jul-78",
    Batting_Hand: "Left_Hand",
    Bowling_Skill: "Right-arm fast-medium",
    Country: "New Zealand",
    Is_Umpire: "0"
  },
  {
    Player_Id: "23",
    Player_Name: "S Badrinath",
    DOB: "30-Aug-80",
    Batting_Hand: "Right_Hand",
    Bowling_Skill: "Right-arm offbreak",
    Country: "India",
    Is_Umpire: "0"
  },
  {
    Player_Id: "24",
    Player_Name: "K Goel",
    DOB: "24-Dec-86",
    Batting_Hand: "Left_Hand",
    Bowling_Skill: "Right-arm offbreak",
    Country: "India",
    Is_Umpire: "0"
  },
  {
    Player_Id: "25",
    Player_Name: "JR Hopes",
    DOB: "24-Oct-78",
    Batting_Hand: "Right_Hand",
    Bowling_Skill: "Right-arm medium",
    Country: "Australia",
    Is_Umpire: "0"
  },
  {
    Player_Id: "26",
    Player_Name: "KC Sangakkara",
    DOB: "27-Oct-77",
    Batting_Hand: "Left_Hand",
    Bowling_Skill: "Right-arm offbreak",
    Country: "Sri Lanka",
    Is_Umpire: "0"
  },
  {
    Player_Id: "27",
    Player_Name: "Yuvraj Singh",
    DOB: "12-Dec-81",
    Batting_Hand: "Left_Hand",
    Bowling_Skill: "Slow left-arm orthodox",
    Country: "India",
    Is_Umpire: "0"
  },
  {
    Player_Id: "28",
    Player_Name: "SM Katich",
    DOB: "21-Aug-75",
    Batting_Hand: "Left_Hand",
    Bowling_Skill: "Slow left-arm chinaman",
    Country: "Australia",
    Is_Umpire: "0"
  },
  {
    Player_Id: "29",
    Player_Name: "IK Pathan",
    DOB: "27-Oct-84",
    Batting_Hand: "Left_Hand",
    Bowling_Skill: "Left-arm medium-fast",
    Country: "India",
    Is_Umpire: "0"
  },
  {
    Player_Id: "30",
    Player_Name: "T Kohli",
    DOB: "17-Dec-88",
    Batting_Hand: "Right_Hand",
    Bowling_Skill: "Right-arm medium",
    Country: "India",
    Is_Umpire: "0"
  },
  {
    Player_Id: "31",
    Player_Name: "YK Pathan",
    DOB: "17-Nov-82",
    Batting_Hand: "Right_Hand",
    Bowling_Skill: "Right-arm offbreak",
    Country: "India",
    Is_Umpire: "0"
  },
  {
    Player_Id: "32",
    Player_Name: "SR Watson",
    DOB: "17-Jun-81",
    Batting_Hand: "Right_Hand",
    Bowling_Skill: "Right-arm fast-medium",
    Country: "Australia",
    Is_Umpire: "0"
  },
  {
    Player_Id: "33",
    Player_Name: "M Kaif",
    DOB: "1-Dec-80",
    Batting_Hand: "Right_Hand",
    Bowling_Skill: "Right-arm offbreak",
    Country: "India",
    Is_Umpire: "0"
  },
  {
    Player_Id: "34",
    Player_Name: "DS Lehmann",
    DOB: "5-Feb-70",
    Batting_Hand: "Left_Hand",
    Bowling_Skill: "Slow left-arm orthodox",
    Country: "Australia",
    Is_Umpire: "0"
  },
  {
    Player_Id: "35",
    Player_Name: "RA Jadeja",
    DOB: "6-Dec-88",
    Batting_Hand: "Left_Hand",
    Bowling_Skill: "Slow left-arm orthodox",
    Country: "India",
    Is_Umpire: "0"
  },
  {
    Player_Id: "36",
    Player_Name: "M Rawat",
    DOB: "25-Oct-85",
    Batting_Hand: "Right_Hand",
    Bowling_Skill: "NULL",
    Country: "India",
    Is_Umpire: "0"
  },
  {
    Player_Id: "37",
    Player_Name: "D Salunkhe",
    DOB: "12-Nov-82",
    Batting_Hand: "Right_Hand",
    Bowling_Skill: "Legbreak",
    Country: "India",
    Is_Umpire: "0"
  },
  {
    Player_Id: "38",
    Player_Name: "SK Warne",
    DOB: "13-Sep-69",
    Batting_Hand: "Right_Hand",
    Bowling_Skill: "Legbreak googly",
    Country: "Australia",
    Is_Umpire: "0"
  },
  {
    Player_Id: "39",
    Player_Name: "SK Trivedi",
    DOB: "4-Sep-82",
    Batting_Hand: "Right_Hand",
    Bowling_Skill: "Right-arm medium",
    Country: "India",
    Is_Umpire: "0"
  },
  {
    Player_Id: "40",
    Player_Name: "G Gambhir",
    DOB: "14-Oct-81",
    Batting_Hand: "Left_Hand",
    Bowling_Skill: "Legbreak",
    Country: "India",
    Is_Umpire: "0"
  },
  {
    Player_Id: "41",
    Player_Name: "V Sehwag",
    DOB: "20-Oct-78",
    Batting_Hand: "Right_Hand",
    Bowling_Skill: "Right-arm offbreak",
    Country: "India",
    Is_Umpire: "0"
  },
  {
    Player_Id: "42",
    Player_Name: "S Dhawan",
    DOB: "5-Dec-85",
    Batting_Hand: "Left_Hand",
    Bowling_Skill: "Right-arm offbreak",
    Country: "India",
    Is_Umpire: "0"
  },
  {
    Player_Id: "43",
    Player_Name: "L Ronchi",
    DOB: "23-Apr-81",
    Batting_Hand: "Right_Hand",
    Bowling_Skill: "NULL",
    Country: "Australia",
    Is_Umpire: "0"
  },
  {
    Player_Id: "44",
    Player_Name: "ST Jayasuriya",
    DOB: "30-Jun-69",
    Batting_Hand: "Left_Hand",
    Bowling_Skill: "Slow left-arm orthodox",
    Country: "Sri Lanka",
    Is_Umpire: "0"
  },
  {
    Player_Id: "45",
    Player_Name: "DJ Thornely",
    DOB: "1-Oct-78",
    Batting_Hand: "Right_Hand",
    Bowling_Skill: "Right-arm medium",
    Country: "Australia",
    Is_Umpire: "0"
  },
  {
    Player_Id: "46",
    Player_Name: "RV Uthappa",
    DOB: "11-Nov-85",
    Batting_Hand: "Right_Hand",
    Bowling_Skill: "Right-arm medium",
    Country: "India",
    Is_Umpire: "0"
  },
  {
    Player_Id: "47",
    Player_Name: "PR Shah",
    DOB: "3-Nov-87",
    Batting_Hand: "Right_Hand",
    Bowling_Skill: "NULL",
    Country: "India",
    Is_Umpire: "0"
  },
  {
    Player_Id: "48",
    Player_Name: "AM Nayar",
    DOB: "8-Oct-83",
    Batting_Hand: "Left_Hand",
    Bowling_Skill: "Right-arm medium",
    Country: "India",
    Is_Umpire: "0"
  },
  {
    Player_Id: "49",
    Player_Name: "SM Pollock",
    DOB: "16-Jul-73",
    Batting_Hand: "Right_Hand",
    Bowling_Skill: "Right-arm fast-medium",
    Country: "South Africa",
    Is_Umpire: "0"
  },
  {
    Player_Id: "50",
    Player_Name: "Harbhajan Singh",
    DOB: "3-Jul-80",
    Batting_Hand: "Right_Hand",
    Bowling_Skill: "Right-arm offbreak",
    Country: "India",
    Is_Umpire: "0"
  },
  {
    Player_Id: "51",
    Player_Name: "S Chanderpaul",
    DOB: "16-Aug-74",
    Batting_Hand: "Left_Hand",
    Bowling_Skill: "Legbreak",
    Country: "West Indies",
    Is_Umpire: "0"
  },
  {
    Player_Id: "52",
    Player_Name: "LRPL Taylor",
    DOB: "8-Mar-84",
    Batting_Hand: "Right_Hand",
    Bowling_Skill: "Right-arm offbreak",
    Country: "New Zealand",
    Is_Umpire: "0"
  },
  {
    Player_Id: "53",
    Player_Name: "AC Gilchrist",
    DOB: "14-Nov-71",
    Batting_Hand: "Left_Hand",
    Bowling_Skill: "Right-arm offbreak",
    Country: "Australia",
    Is_Umpire: "0"
  },
  {
    Player_Id: "54",
    Player_Name: "Y Venugopal Rao",
    DOB: "26-Feb-82",
    Batting_Hand: "Right_Hand",
    Bowling_Skill: "Right-arm offbreak",
    Country: "India",
    Is_Umpire: "0"
  },
  {
    Player_Id: "55",
    Player_Name: "VVS Laxman",
    DOB: "1-Nov-74",
    Batting_Hand: "Right_Hand",
    Bowling_Skill: "Right-arm offbreak",
    Country: "India",
    Is_Umpire: "0"
  },
  {
    Player_Id: "56",
    Player_Name: "A Symonds",
    DOB: "9-Jun-75",
    Batting_Hand: "Right_Hand",
    Bowling_Skill: "Right-arm offbreak",
    Country: "Australia",
    Is_Umpire: "0"
  },
  {
    Player_Id: "57",
    Player_Name: "RG Sharma",
    DOB: "30-Apr-87",
    Batting_Hand: "Right_Hand",
    Bowling_Skill: "Right-arm offbreak",
    Country: "India",
    Is_Umpire: "0"
  },
  {
    Player_Id: "58",
    Player_Name: "SB Styris",
    DOB: "10-Jul-75",
    Batting_Hand: "Right_Hand",
    Bowling_Skill: "Right-arm medium",
    Country: "New Zealand",
    Is_Umpire: "0"
  },
  {
    Player_Id: "59",
    Player_Name: "SB Bangar",
    DOB: "11-Oct-72",
    Batting_Hand: "Right_Hand",
    Bowling_Skill: "Right-arm medium-fast",
    Country: "India",
    Is_Umpire: "0"
  },
  {
    Player_Id: "60",
    Player_Name: "WPUJC Vaas",
    DOB: "27-Jan-74",
    Batting_Hand: "Left_Hand",
    Bowling_Skill: "Left-arm fast-medium",
    Country: "Sri Lanka",
    Is_Umpire: "0"
  },
  {
    Player_Id: "61",
    Player_Name: "RP Singh",
    DOB: "6-Dec-85",
    Batting_Hand: "Right_Hand",
    Bowling_Skill: "Left-arm fast-medium",
    Country: "India",
    Is_Umpire: "0"
  },
  {
    Player_Id: "62",
    Player_Name: "WP Saha",
    DOB: "24-Oct-84",
    Batting_Hand: "Right_Hand",
    Bowling_Skill: "NULL",
    Country: "India",
    Is_Umpire: "0"
  },
  {
    Player_Id: "63",
    Player_Name: "LR Shukla",
    DOB: "6-May-81",
    Batting_Hand: "Right_Hand",
    Bowling_Skill: "Right-arm medium",
    Country: "India",
    Is_Umpire: "0"
  },
  {
    Player_Id: "64",
    Player_Name: "DPMD Jayawardene",
    DOB: "27-May-77",
    Batting_Hand: "Right_Hand",
    Bowling_Skill: "Right-arm medium",
    Country: "Sri Lanka",
    Is_Umpire: "0"
  },
  {
    Player_Id: "65",
    Player_Name: "S Sohal",
    DOB: "10-Nov-87",
    Batting_Hand: "Right_Hand",
    Bowling_Skill: "Legbreak",
    Country: "India",
    Is_Umpire: "0"
  },
  {
    Player_Id: "66",
    Player_Name: "B Lee",
    DOB: "8-Nov-76",
    Batting_Hand: "Right_Hand",
    Bowling_Skill: "Right-arm fast",
    Country: "Australia",
    Is_Umpire: "0"
  },
  {
    Player_Id: "67",
    Player_Name: "PP Chawla",
    DOB: "24-Dec-88",
    Batting_Hand: "Left_Hand",
    Bowling_Skill: "Legbreak",
    Country: "India",
    Is_Umpire: "0"
  },
  {
    Player_Id: "68",
    Player_Name: "WA Mota",
    DOB: "20-Sep-81",
    Batting_Hand: "Right_Hand",
    Bowling_Skill: "Right-arm medium",
    Country: "India",
    Is_Umpire: "0"
  },
  {
    Player_Id: "69",
    Player_Name: "Kamran Akmal",
    DOB: "13-Jan-82",
    Batting_Hand: "Right_Hand",
    Bowling_Skill: "NULL",
    Country: "Pakistan",
    Is_Umpire: "0"
  },
  {
    Player_Id: "70",
    Player_Name: "Shahid Afridi",
    DOB: "1-Mar-80",
    Batting_Hand: "Right_Hand",
    Bowling_Skill: "Legbreak googly",
    Country: "Pakistan",
    Is_Umpire: "0"
  },
  {
    Player_Id: "71",
    Player_Name: "DJ Bravo",
    DOB: "7-Oct-83",
    Batting_Hand: "Right_Hand",
    Bowling_Skill: "Right-arm medium-fast",
    Country: "West Indies",
    Is_Umpire: "0"
  },
  {
    Player_Id: "72",
    Player_Name: "MA Khote",
    DOB: "22-Apr-80",
    Batting_Hand: "Right_Hand",
    Bowling_Skill: "Right-arm medium",
    Country: "India",
    Is_Umpire: "0"
  },
  {
    Player_Id: "73",
    Player_Name: "A Nehra",
    DOB: "29-Apr-79",
    Batting_Hand: "Right_Hand",
    Bowling_Skill: "Left-arm medium-fast",
    Country: "India",
    Is_Umpire: "0"
  },
  {
    Player_Id: "74",
    Player_Name: "GC Smith",
    DOB: "1-Feb-81",
    Batting_Hand: "Left_Hand",
    Bowling_Skill: "Right-arm offbreak",
    Country: "South Africa",
    Is_Umpire: "0"
  },
  {
    Player_Id: "75",
    Player_Name: "Pankaj Singh",
    DOB: "6-May-85",
    Batting_Hand: "Right_Hand",
    Bowling_Skill: "Right-arm medium-fast",
    Country: "India",
    Is_Umpire: "0"
  },
  {
    Player_Id: "76",
    Player_Name: "RR Sarwan",
    DOB: "23-Jun-80",
    Batting_Hand: "Right_Hand",
    Bowling_Skill: "Legbreak",
    Country: "West Indies",
    Is_Umpire: "0"
  },
  {
    Player_Id: "77",
    Player_Name: "S Sreesanth",
    DOB: "6-Feb-83",
    Batting_Hand: "Right_Hand",
    Bowling_Skill: "Right-arm fast-medium",
    Country: "India",
    Is_Umpire: "0"
  },
  {
    Player_Id: "78",
    Player_Name: "VRV Singh",
    DOB: "17-Sep-84",
    Batting_Hand: "Right_Hand",
    Bowling_Skill: "Right-arm medium-fast",
    Country: "India",
    Is_Umpire: "0"
  },
  {
    Player_Id: "79",
    Player_Name: "SS Tiwary",
    DOB: "30-Dec-89",
    Batting_Hand: "Left_Hand",
    Bowling_Skill: "NULL",
    Country: "India",
    Is_Umpire: "0"
  },
  {
    Player_Id: "80",
    Player_Name: "DS Kulkarni",
    DOB: "10-Dec-88",
    Batting_Hand: "Right_Hand",
    Bowling_Skill: "Right-arm medium",
    Country: "India",
    Is_Umpire: "0"
  },
  {
    Player_Id: "81",
    Player_Name: "R Vinay Kumar",
    DOB: "12-Feb-84",
    Batting_Hand: "Right_Hand",
    Bowling_Skill: "Right-arm medium",
    Country: "India",
    Is_Umpire: "0"
  },
  {
    Player_Id: "82",
    Player_Name: "AB Agarkar",
    DOB: "4-Dec-77",
    Batting_Hand: "Right_Hand",
    Bowling_Skill: "Right-arm fast",
    Country: "India",
    Is_Umpire: "0"
  },
  {
    Player_Id: "83",
    Player_Name: "M Kartik",
    DOB: "11-Sep-76",
    Batting_Hand: "Left_Hand",
    Bowling_Skill: "Slow left-arm orthodox",
    Country: "India",
    Is_Umpire: "0"
  },
  {
    Player_Id: "84",
    Player_Name: "I Sharma",
    DOB: "2-Sep-88",
    Batting_Hand: "Right_Hand",
    Bowling_Skill: "Right-arm fast-medium",
    Country: "India",
    Is_Umpire: "0"
  },
  {
    Player_Id: "85",
    Player_Name: "AM Rahane",
    DOB: "6-Jun-88",
    Batting_Hand: "Right_Hand",
    Bowling_Skill: "Right-arm medium",
    Country: "India",
    Is_Umpire: "0"
  },
  {
    Player_Id: "86",
    Player_Name: "Shoaib Malik",
    DOB: "1-Feb-82",
    Batting_Hand: "Right_Hand",
    Bowling_Skill: "Right-arm offbreak",
    Country: "Pakistan",
    Is_Umpire: "0"
  },
  {
    Player_Id: "87",
    Player_Name: "MK Tiwary",
    DOB: "14-Nov-85",
    Batting_Hand: "Right_Hand",
    Bowling_Skill: "Legbreak googly",
    Country: "India",
    Is_Umpire: "0"
  },
  {
    Player_Id: "88",
    Player_Name: "KD Karthik",
    DOB: "1-Jun-85",
    Batting_Hand: "Right_Hand",
    Bowling_Skill: "NULL",
    Country: "India",
    Is_Umpire: "0"
  }
];

var teams = [
  {
    name: "Royal Challengers Bangalore",
    id: "RCB",
    team_image_url: "https://assets.ccbp.in/frontend/react-js/rcb-logo-img.png"
  },
  {
    name: "Kolkata Knight Riders",
    id: "KKR",
    team_image_url: "https://assets.ccbp.in/frontend/react-js/kkr-logo-img.png"
  },
  {
    name: "Kings XI Punjab",
    id: "KXP",
    team_image_url: "https://assets.ccbp.in/frontend/react-js/kxp-logo-img.png"
  },
  {
    name: "Chennai Super Kings",
    id: "CSK",
    team_image_url: "https://assets.ccbp.in/frontend/react-js/csk-logo-img.png"
  },
  {
    name: "Rajasthan Royals",
    id: "RR",
    team_image_url: "https://assets.ccbp.in/frontend/react-js/rr-logo-img.png"
  },
  {
    name: "Mumbai Indians",
    id: "MI",
    team_image_url: "https://assets.ccbp.in/frontend/react-js/mi-logo-img.png"
  },
  {
    name: "Sunrisers Hyderabad",
    id: "SH",
    team_image_url: "https://assets.ccbp.in/frontend/react-js/srh-logo-img.png"
  },
  {
    name: "Delhi Capitals",
    id: "DC",
    team_image_url: "https://assets.ccbp.in/frontend/react-js/dc-logo-img.png"
  }
];

export { data, teams, players };

//  console.log(teams[1].team_image_url);

//   document.getElementByTagName("img")[0].src ='https://assets.ccbp.in/frontend/react-js/rcb-logo-img.png';

// console.log("Name: " + players[1].Player_Name);
// console.log("DOB:" + players[1].DOB);
// console.log("Country:" + players[1].Country);
// console.log(players[1].Bowling_Skill);
// console.log(players[1].Batting_Hand);
// var tr = document.getElementById("tr");
// var td = "";
//players.map((e)=>{
// td += `<td>${e.Player_Name}</td>`
//console.log(e.Player_Name);
//tr.innerHTML=td

//})
// var i = 0;
// var s = players.length - 77;

// var s = players.slice(0, 10);
//   var tbody = document.getElementById("tbody");
//   var tr = document.getElementById("tr1");
// var td = "";

//   for(let i=0; i<=s.length;i++){
//      td = `<tr><td>${s[i].Player_Name}</td></tr>`;
//      tbody.insertAdjacentHTML("afterend",td)
//      console.log(s[i].Player_Name);
//     }

// s.map((e) => {

// td = `<tr><td>${e.Player_Name}</td></tr>`;

// console.log(td);

// });
// document.getElementById("tbody").innerHTML=`<tr><td>hello</td></tr>`;
// console.log(td);
