function TryIP() {
  let isOk = true;
  let ip = document.getElementById("ip").value;
  if (ip.length !== 0) {
    // we have input
    // split it
    let splitted = ip.split(".");

    if (splitted.length === 4) {
      for (let i = 0; i < splitted.length; i++) {
        // check each val is number
        let parsed_int = parseInt(splitted[i]);
        if (!isNaN(parsed_int)) {
          if (parsed_int <= 255 && parsed_int > 0) {
            // is correct
            console.log("is correct -> ", parsed_int);
            continue;
          } else {
            // invalid ip
            AlertInvalid(
              ip,
              `Number ${parsed_int} should be between values 1-255`
            );
            isOk = false;
            return;
          }
        } else {
          // automatically a invalid ipaddress
          AlertInvalid(ip, `The Value has type "String" in value`);
          isOk = false;
          return;
        }
      }
    } else {
      AlertInvalid(ip, "Array Length Is Not 4");
      isOk = false;
      return;
    }
  } else {
    isOk = false;
    AlertInvalid(ip, "Please Enter A Value");
    return;
  }

  if (isOk) {
    AlertSuccess(ip);
  }
}

function AlertInvalid(ip, reason) {
  swal(
    "Error!",
    `IP Address -> ${ip} is invalid for reason "${reason}"`,
    "error"
  );
}

function AlertSuccess(ip) {
  swal("Success!", `Successfully Validated ipaddress -> ${ip}`, "success");
}
