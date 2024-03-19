// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Pablo Fiallos
// Created on: Sep 2020
// This file contains the JS functions for index.html
function enterClicked() {
  // input
  const street = document.getElementById("name").value
  const address = parseInt(document.getElementById("address-entered").value)

  // output
  document.getElementById("user-info").innerHTML =
    "You live on " + street + " " + address + "."
}
