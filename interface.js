window.addEventListener("load", function () {
  const thermostat = new Thermostat();

  // add a <button> element to your html with id of 'button'
  const button = document.getElementById("button");

  // add a <span> element to your html with id of 'message'
  const message = document.getElementById("message");

  const power = document.getElementById("power");

  const change = document.getElementById("change");

  const reset = document.getElementById("reset");

  const usage = document.getElementById("usage");
  power.innerHTML = thermostat.onPowerSaving();

  //JQUERY
  //jQuery
  // $("#button").on('click', function() {
  //   message.innerText = thermostat.up();
  // });
  // //jQuery
  // $("#button-decrease").on('click', function() {
  //   message.innerText = thermostat.down();
  // });  

//event listeners go here

$("#button").on("click", function(){
  message.innerHTML = thermostat.up();
  usage.innerHTML = thermostat.getUsage();
});

  // button.addEventListener("click", function () {
  //   message.innerHTML = thermostat.up();
  //   usage.innerHTML = thermostat.getUsage();
  //  });


  $("#down").on("click", function (){
    message.innerHTML = thermostat.down();
  usage.innerHTML = thermostat.getUsage() 
 })
   // down.addEventListener("click", function () {
  //   message.innerHTML = thermostat.down();
  //   usage.innerHTML = thermostat.getUsage();
  // });
 

  ("#change").on("click", function(){
    thermostat.changePowerSaving();
    power.innerHTML = thermostat.onPowerSaving();
  })
  // change.addEventListener("click", function () {
  //   thermostat.changePowerSaving();
  //   power.innerHTML = thermostat.onPowerSaving();
  // });

  $("#reset").on("click", function(){
    message.innerHTML = thermostat.reset();
    usage.innerHTML = thermostat.getUsage();
  })

});
//   reset.addEventListener("click", () => {
//     message.innerHTML = thermostat.reset();
//     usage.innerHTML = thermostat.getUsage();
//   });
//});
