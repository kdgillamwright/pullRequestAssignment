// importing the sass stylesheet for bundling
import "./../sass/styles.scss";

const TARGET_DIV = "insult";
const VICTIM_NAME = "Sean";

function randomMe(low = 1, high = 10) {
    let randomNum = Math.floor(Math.random() * (high - low + 1)) + low;
    return randomNum;
}

function insultMe(victim) {

    // randomly select a noun
    let randomNum = randomMe(1,5);

    let noun;
    switch (randomNum) {
    case 5:
        noun = "jerk";
        break;
    case 4:
        noun = "dork";
        break;
    case 3:
        noun = "simpleton";
        break;
    case 2:
        noun = "geek";
        break; 
    default:
        noun = "doofus";
    }

    // console.log("noun: " + noun);

    // randomly selecting the adjective
    randomNum = randomMe(1,5);

    let adjective;
    switch (randomNum) {
    case 5:
        adjective = "goofy";
        break;
    case 4:
        adjective = "dorky";
        break;
    case 3:
        adjective = "bumbling";
        break;
    case 2:
        adjective = "awkward";
        break;
    default:
        adjective = "bewildering";
    }

    // assemble the insult
    // let insult = "\"" + victim + " is a " + adjective + " " + noun + "!\"";
    let insult = `"${victim} is a ${adjective} ${noun}!"`;
    return insult;
}
function main() {
    
    // let course = "Client Side Programming";
    // course = "blah";
    // course = 100;
    // let grade = 87.8;
    // let challengeCount = 10;
    // console.log("value: " + grade);

    // getElementById() returns an HTMLElement object targeting the element on our page

    let target = document.getElementById(TARGET_DIV);
    target.innerHTML = insultMe(VICTIM_NAME) + "<br>" + insultMe(VICTIM_NAME) + "<br>" + insultMe(VICTIM_NAME);

    // console.log("test: " + randomMe(-3,10));

}

main();