function feetToMile(feet) {
    var mile = feet * 0.00018939;
    return mile;
}

// wood calculator

function woodCalculator(Chair, Table, bed) {
    var Chair = Chair * 1;
    var Table = Table * 3;
    var bed = bed * 5;
    var totalWood = Chair + Table + bed;
    return totalWood;
}
//brickCalculator

function brickCalculator(floor){
    var bricksParFeet = 1000;
    if(floor<=10){
        return floor*15*bricksParFeet;
    }
    if(floor<=20){
        var count1 = floor-10;
        var count2 = count1*12*bricksParFeet;
        return count2 + (15*10*bricksParFeet);
    }
    
    else{
        var count3 = floor-20;
        var count4 = count3*10*bricksParFeet;
        return count4 + (15*20*bricksParFeet);
    }
}
var result = brickCalculator(15);
console.log(result);


// Tiny Friend


function tinyFriend(names) {

    var shortName = names[0];
    for(var i = 0; i < names.length; i++) {
        var currentName = names[i];
        if (currentName.length < shortName.length) {
             shortName = currentName;
        }
    }
    return shortName;
}
var result = ['xyz', 'xzzy', 'zz', 'tini','x'];
console.log(tinyFriend(result));
