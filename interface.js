window.addEventListener("load", function () {
  const thermostat = new Thermostat();

  // add a <button> element to your html with id of 'button'
  //const button = document.getElementById("button");

  // add a <span> element to your html with id of 'message'
  const message = document.getElementById("message");

  const power = document.getElementById("power");

  //const change = document.getElementById("change");

  //const reset = document.getElementById("reset");

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

$("#button").click(function(){
  message.innerHTML = thermostat.up();
  usage.innerHTML = thermostat.getUsage();
    if (usage.innerHTML === 'low-usage'){
      $("#usage").css('color','blue')
    } else if (usage.innerHTML === 'medium-usage'){
      $("#usage").css('color','pink')
    } else {
      $("#usage").css('color','red')
    }
});

  // button.addEventListener("click", function () {
  //   message.innerHTML = thermostat.up();
  //   usage.innerHTML = thermostat.getUsage();
  //  });


  $("#down").click(function (){
    message.innerHTML = thermostat.down();
  usage.innerHTML = thermostat.getUsage() 
  $(this).css('color','green')

  if (usage.innerHTML === 'low-usage'){
      $("#usage").css('color','blue')
    } else if (usage.innerHTML === 'medium-usage'){
      $("#usage").css('color','pink')
    } else {
      $("#usage").css('color','red')
    }

 })
   // down.addEventListener("click", function () {
  //   message.innerHTML = thermostat.down();
  //   usage.innerHTML = thermostat.getUsage();
  // });
 

  $("#change").click(function(){
    thermostat.changePowerSaving();
    power.innerHTML = thermostat.onPowerSaving();
  })
  // change.addEventListener("click", function () {
  //   thermostat.changePowerSaving();
  //   power.innerHTML = thermostat.onPowerSaving();
  // });

  $("#reset").click(function(){
    message.innerHTML = thermostat.reset();
    usage.innerHTML = thermostat.getUsage();
  })

  $("p:contains('Reset')" ).css( "text-decoration", "underline" );

  // $("p:contains('medium-usage')" ).css( "color", "orange" );

  // $("#usage").click(function (){
  //   usage.innerHTML = thermostat.getUsage() 
    
  // })

});
//   reset.addEventListener("click", () => {
//     message.innerHTML = thermostat.reset();
//     usage.innerHTML = thermostat.getUsage();
//   });
//});
