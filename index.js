// code your solution here
function saturdayFun(varr = "roller-skate") {
    return `This Saturday, I want to ${varr}!`;
};
console.log(saturdayFun(" bathe my dog"));


const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
};

function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
        return `You are ${flair}${adjective}${flair}!`;
    };
}

// Example usage
const encouragingPromptFunction = wrapAdjective("!!!");
console.log(encouragingPromptFunction("amazing")); 
console.log(encouragingPromptFunction()); 
