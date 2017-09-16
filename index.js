$(document).ready(function() {

   $("#start-button").on("click", function() {

       var startValue = Math.floor(Math.random() * 101) + 19;
       var wins = 0;
       var losses = 0;
       console.log(startValue, wins, losses);

       $("#randomnumber").html(startValue);

   })


   $("#1").on("click", function imageOne() {
       var random = Math.floor(Math.random() * 12) + 1;
       console.log(random);


   })

   $("#2").on("click", function() {
       var random2 = Math.floor(Math.random() * 12) + 1;
       console.log(random2);
   })

   $("#3").on("click", function() {
       var random3 = Math.floor(Math.random() * 12) + 1;
       console.log(random3);

   })

   $("#4").on("click", function() {
       var random4 = Math.floor(Math.random() * 12) + 1;
       console.log(random4);

   })

        if (currentnumber === randomnumber) {
            wins++ 
        }
        else if (currentnumber > randomnumber){
            losses++;
        }
};
