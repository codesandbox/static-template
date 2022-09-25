
// <!-- <style>
// .app {
//   padding: 15px;
//   width: 50%;
//   font-family: "Segoe UI";
// }

// p {
//   margin-top: 1px;
//   margin-bottom: 1px;
// }

// textarea {
//   /*//(AA)TODO: Make this a global*/
//   font-family: "Segoe UI";
//   border-radius: 5px;
//   max-width: 450px;
//   resize: none;
// }

// .elevated-div {
//   box-sizing: border-box;
//   border-radius: 5px;
//   padding: 20px;
//   background-color: #fff;
//   border-radius: 10px;
//   box-shadow: 0 8px 22px 0 rgba(128, 128, 129, 0.37);
//   margin-bottom: 50px;
// }

// .create-jquery-selector {
//   width: 600px;
// }

// .commit-id {
//   width: 300px;
// }

// .commit-id-trimmed {
//   width: 100px;
// }

// .ticket-converts {
//   width: 500px;
//   height: 100px;
// }

// .side-by-side-div {
//   display: flex;
// }

// .string-with-comma {
//   margin-right: 50px;
// }

// .comma-text-area {
//   width: 300px;
//   height: 300px;
// }

// /* .max_min_button {
//       border: solid 1px;
//       border-radius: 5px;
//       margin-right: 5px;
//       /* width: 20px; *
//       height: 18px;
//       cursor: pointer;
//       float: left;
//       position: relative;
//       /*Center content*
//       /* TODO: Fix alignment *
//       display: flex;
//       justify-content: center;
//       align-items: center;
//   }
//    */

// .max_min_button {
//   cursor: pointer;
//   float: left;
// }

// .float-right {
//   float: right;
// }
// </style> -->

// <!-- <script>
// const ticketStart = "Product Backlog Item ";
// const DEBUG = false;

// let htmlID;
// let jqueryID;

// let commitID;
// let commitIDTrimmed;

// let ireTicketProductListValue;
// let azureTicket;
// let ireTicket;
// let ireTicketBuilder;
// let ireTicketProductList;

// let stringWithCommas;
// let stringWithoutCommas;

// let stringWithoutAddedCommas;
// let stringWithAddedCommas;

// $(document).ready(function () {
//   //console.log(`Eskettitt`);
//   SetupPage();
//   if (!DEBUG) MinimizeAllTools(); //Comment when debugging
//   BindMinMaxBtn();
// });

// function SetupPage() {
//   //#region Get Jquery Element from ID
//   htmlID = $("#htmlID");
//   jqueryID = $("#jqueryIDSelector");

//   let htmlIDValue;
//   htmlID.keyup(function () {
//     htmlIDValue = htmlID.val();
//     if (htmlIDValue.length === 0) {
//       jqueryID.val("");
//       return;
//     }
//     jqueryID.val(`$("#${htmlIDValue}")`);
//   });
//   //#endregion

//   //#region Convert Azure ticket to IRE ticket
//   commitID = $("#commitID");
//   commitIDTrimmed = $("#commitIDTrimmed");

//   commitID.keyup(function () {
//     commitIDTrimmed.val(commitID.val().substring(0, 8));
//   });
//   //#endregion

//   //#region Convert Azure ticket to IRE ticket
//   azureTicket = $("#azureTicket");
//   ireTicket = $("#ireTicket");
//   ireTicketProductList = $("#ireTicketProductList");

//   azureTicket.keyup(function () {
//     ireTicket.val(ConvertToIRETicket(azureTicket.val().trim()));
//   });

//   ireTicketProductList.change(function () {
//     if (
//       $("#ireTicketProductList").val() !== undefined &&
//       $("#ireTicketProductList").val().length > 0
//     )
//       ireTicket.val(ConvertToIRETicket(azureTicket.val().trim()));
//   });
//   //#endregion

//   //#region Remove commas
//   stringWithCommas = $("#stringWithCommas");
//   stringWithoutCommas = $("#stringWithoutCommas");

//   stringWithCommas.keyup(function () {
//     stringWithoutCommas.val(stringWithCommas.val().replace(",", ""));
//   });
//   //#endregion

//   //#region Replace spaces with commas
//   stringWithoutAddedCommas = $("#stringWithoutAddedCommas");
//   stringWithAddedCommas = $("#stringWithAddedCommas");

//   stringWithoutAddedCommas.keyup(function () {
//     stringWithAddedCommas.val(
//       stringWithoutAddedCommas
//         .val()
//         .replace(/\s+/g, ",")
//         .replace("\n", ",")
//         .replace("\n\r", ",")
//     );
//   });
//   //#endregion
// }

// //Functions

// function CopyJqueryIDSelector() {
//   let retval = jqueryID.val();
//   if (retval === undefined || retval === "")
//     return CreateErrorToast("Error!", `Please check your pasted html ID`);

//   navigator.clipboard.writeText(retval); // Copy the text inside the text field

//   CreateToast("Copied!", `Jquery ID ${retval} copied to clipboard`);
// }

// //#region Convert AzureTicket to IRE Ticket
// function CopyCommitID() {
//   commitIDTrimmed.val(commitIDTrimmed.val().substring(0, 8));

//   let commitIDTrimmedValue = commitIDTrimmed.val();
//   if (commitIDTrimmedValue === undefined || commitIDTrimmedValue === "")
//     return CreateErrorToast("Error!", `Please check your pasted Commit ID`);

//   //console.log(commitIDTrimmedValue);
//   navigator.clipboard.writeText(commitIDTrimmedValue); // Copy the text inside the text field

//   CreateToast(
//     "Copied!",
//     `Commit ID ${commitIDTrimmedValue} copied to clipboard`
//   );
// }
// //#endregion

// //#region Copy IRE Ticket
// function CopyIRETicket() {
//   if (ireTicketBuilder === undefined)
//     return CreateErrorToast(
//       "Error!",
//       `Please check your azure ticket details`
//     );

//   navigator.clipboard.writeText(ireTicketBuilder); // Copy the text inside the text field
//   CreateToast("Copied!", `${ireTicketBuilder}`);
// }

// function ConvertToIRETicket(azureTicketValue) {
//   if (azureTicketValue.length <= 0) return;

//   if (!azureTicketValue.includes(":")) {
//     NoTicketNumber();
//     return 'Ticket needs to be separated by ":"';
//   }
//   console.log(azureTicketValue);

//   ireTicketProductListValue = $("#ireTicketProductList").val();
//   ireTicketBuilder = azureTicketValue.replace(ticketStart, "");
//   //Split on first ":" only
//   let ticketID = ireTicketBuilder.split(/:(.*)/s)[0];
//   ticketID = ticketID.replace(/[^\d]/g, ""); //Remove the string and keep the number only before building
//   if (!isNumeric(ticketID)) {
//     NoTicketNumber();
//     return;
//   }

//   let ticketDescription = ireTicketBuilder.split(/:(.*)/s)[1]; //.split(":")[1].trim();

//   ireTicketBuilder = `(AA) ${ireTicketProductListValue}: [#${ticketID}]${ticketDescription}`;
//   return ireTicketBuilder;

//   function NoTicketNumber() {
//     return CreateErrorToast("Error!", `Ticket does not have a ticket number`);
//   }
// }

// /*
//       Product Backlog Item 27964: Improve the unpresented list UI on the reconciliation page

//       Product Backlog Item 37964: Second Test
//   */

// //#endregion

// //#region  Remove commas from Text
// function CopyStringWithoutCommas() {
//   let stringWithoutCommasValue = stringWithoutCommas.val();
//   if (
//     stringWithoutCommasValue === undefined ||
//     stringWithoutCommasValue.trim().length === 0
//   )
//     return CreateErrorToast(
//       "Error!",
//       `Please check your comma separated string`
//     );

//   navigator.clipboard.writeText(stringWithoutCommasValue); // Copy the text inside the text field
//   CreateToast("Copied!", `${stringWithoutCommasValue}`);
// }
// //#endregion -->
// </script>




//#region 

function _FuctionName() 
{


}
//#endregion