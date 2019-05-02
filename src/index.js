import { fromEvent } from "rxjs";
import { throttleTime } from "rxjs/operators";
//
const button = document.querySelector("button");

// fromEvent(button, "click").subscribe(() => console.log("clicked"));
// fromEvent(button, "click")
//   .pipe(throttleTime(1000))
//   .subscribe(count => console.log(`clickd ${count} times`));

fromEvent(button, "click")
  .pipe(throttleTime(2000))
  .subscribe(() => console.log("fafa"));
