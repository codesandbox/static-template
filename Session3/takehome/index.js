//Team Data
const team = [
  {
    id: "anna",
    fullName: "Anna Kendrick",
    jobTitle: "Front-end Ninja",
    bio:
      "Bibliophile, loves to dive into fictional worlds, ships JS code like brownies",
    avatar: "https://avatars.dicebear.com/api/avataaars/annakendrick.svg"
  },
  {
    id: "harry",
    fullName: "Harry Fawn",
    jobTitle: "Illustrator",
    bio:
      "Creates new illustrations each week, will kill for coffee, and loves beaches",
    avatar: "https://avatars.dicebear.com/api/avataaars/harryfn.svg"
  },
  {
    id: "sofia",
    fullName: "Sofia Sultan",
    jobTitle: "Backend Engineer",
    bio:
      "Donuts over waffles. Martinis over whiskeys. Typescript over anything.",
    avatar: "https://avatars.dicebear.com/api/avataaars/sofiasul.svg"
  }
];

//Modify Code below this line

//Content Selected using ID.
const content = document.getElementById("content");

/**
 * Creates and img HTML element with given src and alt
 * @param {string} src - Source for image
 * @param {string} alt - Alt text for image
 * @returns An Image HTML Element
 */
const getImageElement = (src, alt) => {
  let createImgTag = document.createElement("img");
  createImgTag.setAttribute("src", src);
  createImgTag.setAttribute("alt", alt);
  createImgTag.setAttribute("height", 100);
  createImgTag.setAttribute("width", 100);

  return createImgTag;
};

// console.log();

/**
 * Creates a new card with passed parameters.
 * @param {string} id - Unique id from team data
 * @param {string} fullName - Name of the team member
 * @param {string} jobTitle - Job title of the team memeber
 * @param {string} bio - Description Bio
 * @param {string} avatar - Source of the avatar image.
 * @returns section HTML element with Image and Text
 */
function generateCard(id, fullName, jobTitle, bio, avatar) {
  //1. Create a new "section" element and set the className and id
  let newSection = document.createElement("section");
  newSection.setAttribute("class", "team-member");
  newSection.setAttribute("id", id);
  content.append(newSection);
  //2. Generate the image using getImageElement() function
  //Hint - Use fullname as alt for the image.
  let imgFunction = getImageElement(avatar, fullName);
  // content.append(imgFunction);
  //3. Create a div for text content
  let div = document.createElement("div");
  //4. Create an h2 for fullName
  let heading2 = document.createElement("h2");
  heading2.innerHTML = fullName;

  //5. Create an h3 for jobTitle
  let heading3 = document.createElement("h3");
  heading3.innerHTML = jobTitle;
  //6. Create a p for bio
  let paragraph = document.createElement("p");
  paragraph.innerHTML = bio;

  //7. Append the fullName, jobTitle, and bio element
  //   to the div created for text.
  div.append(heading2);
  div.append(heading3);
  div.append(paragraph);

  //8. Append the Image and the Text div
  //   to the new section you created in step 1
  // let abc = document.querySelector("team-member");
  newSection.append(imgFunction);
  newSection.append(div);
  console.log(newSection);

  //Return the new section element created.
  return newSection;
}

/**
 * Generates and returns an array of HTML elements
 * @param {Array} data Team data array
 */
function generateCardArray(data) {
  const cards = [];
  //Add logic to populate `cards` array below
  for (let i = 0; i < data.length; i++) {
    // console.log(data[i].id);
    cards.push(
      generateCard(
        data[i].id,
        data[i].fullName,
        data[i].jobTitle,
        data[i].bio,
        data[i].avatar
      )
    );
  }
  //Return cards array
  return cards;
}

const cardsArray = generateCardArray(team);

//Run a loop for the cardsArray and append its elements to content.
for (let card of cardsArray) {
  content.append(card);
}
//Modify Code above this line
