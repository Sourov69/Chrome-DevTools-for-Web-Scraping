// function onClickEvent() {
//     alert("You are a great learner!");
// }

function onClickEvent() {
    let mycount = 1;

    alert("You completed " + mycount + " exercise");

    mycount = nestedcall(mycount);

    alert("You completed " + mycount + " exercises");
}

function nestedcall(count) {
    console.log("Reached nestedcall");
    return count + 6;
}