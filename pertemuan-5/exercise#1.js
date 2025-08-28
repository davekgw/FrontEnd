//Buatlah program untuk menghitung BMI dengan menggunakan 
//IIFE & Callback function 
//dengan parameter dan return value

//Make by Dave Koagow

(function(){
    function calculateBMI(berat, tinggi, callback){
        return callback(berat, tinggi);
    }

    function bmi(berat, tinggi){
        let tinggiMeter = tinggi / 100;
        let bmi = berat / (tinggiMeter * tinggiMeter);
        return bmi.toFixed(2);
    }

    let berat = 70;
    let tinggi = 175;

    let res = calculateBMI(berat, tinggi, bmi);
    console.log("Nilai BMI anda adalah: " + res);
})();
