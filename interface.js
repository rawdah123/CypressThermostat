window.addEventListener('load', function() {
  const thermostat = new Thermostat()
  // add a <button> element to your html with id of 'button'
  const button = document.getElementById("button")

  // add a <span> element to your html with id of 'message'
  const message = document.getElementById("message")

  const power = document.getElementById("power")

  power.innerHTML = thermostat.powerSaving

   button.addEventListener('click', function() {
    message.innerHTML = thermostat.up();
      })
      down.addEventListener('click', function() {
        message.innerHTML = thermostat.down();
})
})
