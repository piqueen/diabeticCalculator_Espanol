function CalcRise() {
    var CarbSensitivity = Number(document.getElementById("CarbSensitivity").value);
    var CarbsToEat = Number(document.getElementById("CarbsToEat").value);
    var CurrentBS=Number(document.getElementById("bscurrent").value);
    var total = CarbSensitivity * CarbsToEat;
    var bloodsugar= CurrentBS+total;
    var fixed = bloodsugar.toFixed(1);
    document.getElementById("bsafter").innerHTML=("Su nivel de azucar puede subir a: " + fixed +"mg/dl");
    var insulinTotake= (CarbsToEat/CarbSensitivity);
    var fixed2 = insulinTotake.toFixed(1);
    document.getElementById("insulinTotake").innerHTML=("Recomendacion de insuline " + fixed2+ " unidades");
}

function CalcSensitivity() {
    var weight = document.getElementById("weight").value;
    var result;
    //Predetermined values below are from the chart for carb sensitivity
    if (weight == 70) {
        result = 10;
    }
    else if (weight == 105) {
        result = 7;
    }
    else if (weight == 140) {
        result = 5;
    }
    else if (weight == 175) {
        result = 4;
    }
    else if (weight == 210) {
        result = 3.3;
    }
    else if (weight == 245) {
        result = 3;
    }
    else if (weight == 280) {
        result = 2.5;
    }
    else if (weight == 315) {
        result = 2.2;
    }
    else {
        if (weight > 70 && weight < 105) {
            var x = weight - 75;
            var y = x * 0.02;
            result = 10 + y;
        }
        else if (weight > 105 && weight < 140) {
            var x = weight - 105;
            var y = x * 0.02;
            result = 7 + y;
        }
        else if (weight > 140 && weight < 175) {
            var x = weight - 140;
            var y = x * 0.02;
            result = 5 + y;
        }
        else if (weight > 175 && weight < 210) {
            var x = weight - 175;
            var y = x * 0.02;
            result = 4 + y;
        }
        else if (weight > 210 && weight < 245) {
            var x = weight - 210;
            var y = x * 0.02;
            result = 3.3 + y;
        }
        else if (weight > 245 && weight < 280) {
            var x = weight - 245;
            var y = x * 0.02;
            result = 3 + y;
        }
        else if (weight > 280 && weight < 315) {
            var x = weight - 280;
            var y = x * 0.02;
            result = 2.5 + y;
        }
        else if (weight > 315 && weight < 350) {
            var x = weight - 315;
            var y = x * 0.02;
            result = 2.2 + y;
        }
        else {
            result = NaN;
        }

    }
    document.getElementById("sensitivitybyweight").innerHTML = ("Su censibilidad por carbohidrato es: " + result);
    document.getElementById("CarbSensitivity").value = result;
}    

function CalcTarget(){
    var currentBS=Number(document.getElementById("targetCBS").value);
    var targetBS=Number(document.getElementById("targetBS").value);
    var carbSensitivity = Number(document.getElementById("targetCS").value);
    var calcTarget= (targetBS-currentBS)/carbSensitivity;
    var fixed3 = calcTarget.toFixed(1);
    if(fixed3 < 0){
        document.getElementById("carbsneeded").innerHTML=("No es necesario, estas bien!");
    }
    else if(fixed3 == Infinity){
        document.getElementById("carbsneeded").innerHTML=("Porfavor llene los espacios en blanco");
    }
    else{
        document.getElementById("carbsneeded").innerHTML=("Necesita comer aproximadamente: " + fixed3 +" gramos de carbohidratos");
    }
    
}