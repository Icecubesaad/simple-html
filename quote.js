
    let Delivery_format = "";
    let Material = "";
    let Quantity = 0;
    let Layers = "";
    let value1 = 0;
    let Isolation = "";
    let masking = "";
    let DrillDiameter = "";
    let Bakellite_thick = 0;
    let FR4_thick = 0;
    let probetest = ""
    let AiTest = ""
    let ManualTest = ""
    let surface = ""
let value2 = 0;
    const changeMaterial = (id)=>{
        const button_machine = document.getElementsByClassName("option-quota")
        for (let index = 0; index < 2; index++) {

          const element = button_machine[index];
          element.classList.remove('active')
          const element_id = document.getElementById(id)
          element_id.classList.add('active')
        
        }
        Material = id;
        const Fr_4 = document.getElementById("Copper_Thickness_Fr4")
        const Bakellite = document.getElementById("Copper_Thickness_bakellite")
        if(id == "Fr-4"){
            Fr_4.style.display = "flex"
            Bakellite.style.display = "none"
        }
        if(id == "Bakellite"){
            Bakellite.style.display = "flex"
            Fr_4.style.display = "none"
            
        }
        
    }
    const changeMasking = (id)=>{
      const button_machine = document.getElementsByClassName("option-quota")
        for (let index = 8; index < 10; index++) {

          const element = button_machine[index];
          element.classList.remove('active')
          const element_id = document.getElementById(id)
          element_id.classList.add('active')
        
        }
        masking = id;
        updateColorPalette(id)
    }
    const changeDrillDiameter = (id)=>{
      const button_machine = document.getElementsByClassName("option-quota-drill")

        for (let index = 0; index < 8; index++) {
          const element = button_machine[index];
          element.classList.remove('active')
          const element_id = document.getElementById(id)
          element_id.classList.add('active')
        
        }
        DrillDiameter = id;
    }
    const changeCopperFR4 = (id)=>{
      const button_machine = document.getElementsByClassName("option-quota")
      for (let index = 17; index < 19; index++) {
          const element = button_machine[index];
          element.classList.remove('active')
          const element_id = document.getElementById(id)
          element_id.classList.add('active')
        
        }
        FR4_thick = id;
    }
    const ChangeCopperBakellite = (id)=>{
      const button_machine = document.getElementsByClassName("option-quota")

        for (let index = 14; index < 17; index++) {
          const element = button_machine[index];
          element.classList.remove('active')
          const element_id = document.getElementById(id)
          element_id.classList.add('active')
        
        }
        Bakellite_thick = id;
    }

    const changeIsolations = (id)=>{
      const button_machine = document.getElementsByClassName("option-quota")
        for (let index = 6; index < 8; index++) {

          const element = button_machine[index];
          element.classList.remove('active')
          const element_id = document.getElementById(id)
          element_id.classList.add('active')
        
        }
        Isolation = id;
    }
    const changeDelivery = (id)=>{
      const button_machine = document.getElementsByClassName("option-quota")
        for (let index = 4; index < 6; index++) {

          const element = button_machine[index];
          element.classList.remove('active')
          const element_id = document.getElementById(id)
          element_id.classList.add('active')
        
        }
        Delivery_format = id;
    }
    const changeLayers = (id)=>{
      const layer = document.getElementsByClassName("option-quota")
        for (let index = 2; index < 4; index++) {

          const element = layer[index];
          element.classList.remove('active')
          const element_id = document.getElementById(id)
          element_id.classList.add('active')
        
        }
        Layers = id;
    }
    const changeDrill = (id)=>{
      const button_machine = document.getElementsByClassName("option-quota")
        for (let index = 12; index < 14; index++) {
          const element = button_machine[index];
          element.classList.remove('active')
          const element_id = document.getElementById(id)
          element_id.classList.add('active')
        
        }
        const drill_option = document.getElementById("Drill_bit_diameter")
        Layers = id;
        if(id == "Single Drill"){
            drill_option.style.display = "flex"
            drill_option.classList.add('visibile');
          
}
        
        else{
            drill_option.style.display = "none"
            drill_option.classList.remove('visible')
        }
    }
    const changeProbeTest = (id)=>{
      
      const button_machine = document.getElementsByClassName("option-quota")
      for (let index = 19; index < 22; index++) {
          const element = button_machine[index];
          element.classList.remove('active')
          const element_id = document.getElementById(id)
          element_id.classList.add('active')
        
        }
        probetest = id
    }
    const changeAi = (id)=>{
      const button_machine = document.getElementsByClassName("option-quota")
      for (let index = 22; index < 24; index++) {
          const element = button_machine[index];
          element.classList.remove('active')
          const element_id = document.getElementById(id)
          element_id.classList.add('active')
        
        }
        AiTest = id
    }
    const changeManual = (id)=>{
      const button_machine = document.getElementsByClassName("option-quota")
      for (let index = 24; index < 26; index++) {
          const element = button_machine[index];
          element.classList.remove('active')
          const element_id = document.getElementById(id)
          element_id.classList.add('active')
        
        }
        ManualTest = id
    }
    const changeSurface = (id)=>{
      const button_machine = document.getElementsByClassName("option-quota")
        for (let index = 10; index < 12; index++) {

          const element = button_machine[index];
          element.classList.remove('active')
          const element_id = document.getElementById(id)
          element_id.classList.add('active')
        
        }
        surface = id
    }
    
    
function changeDimension(value) {
    
  const input1 = parseFloat(document.getElementById("input1").value);
  const input2 = parseFloat(document.getElementById("input2").value);
  if (input1 < 20 || input1 > 300 || input1 < 20 || input1 > 300) {
    displayError("Please enter value betwenn 20-300","d")
  }
  else{
    clearError("d");
  }
  value1 = input1
  value2 = input2
}

function changeQuantity(value) {
    
  const input1 = parseFloat(document.getElementById("quantity").value);
  if (value < 1 ) {
    displayError("Quanity must be more than 0","q")
  }
  else{
    clearError("q");
  }
  Quantity = input1
}
function displayError(message,type) {
    if(type == "d"){

        const error_input_dimension = document.getElementById("error-msg-dimension");
        error_input_dimension.style.display = "inline-block"
      error_input_dimension.textContent = message;
    }
    if(type == "q"){
        const error_input_quantity = document.getElementById("error-msg-quantity");
        error_input_quantity.style.display = "inline-block"
      error_input_quantity.textContent = message;
    }
}

function clearError(type) {
    if(type == "d"){

const error_input_dimension = document.getElementById("error-msg-dimension");
error_input_dimension.style.display = "none"
}
if(type == "q"){
const error_input_quantity = document.getElementById("error-msg-quantity");
error_input_quantity.style.display = "none"
}
}
function updateColorPalette(option) {
  const colorPaletteDiv = document.getElementById("Mask-Color");

  // Remove any existing color palette
  while (colorPaletteDiv.firstChild) {
    colorPaletteDiv.firstChild.remove();
  }

  const out = document.getElementById("mask-color-out")
  if (option === "yes") {
    out.style.display = "flex";
    const colors = ["#ff0000", "#2E8B57", "#1e3d7b", "#ffff00", "#800080", "#808080", "#000000"];
    const colors_name = ["red","green","blue","yellow","purple","white","black"]
    for (let i = 0; i < colors.length; i++) {
  const colorDiv = document.createElement("div");
  colorDiv.setAttribute('data-aos', 'flip-right');

  colorDiv.onclick = function() {

    // Reset background colors of all colorDiv elements
    const colorDivs = document.getElementsByClassName("color-palette");
    for (let j = 0; j < colorDivs.length; j++) {
      const color_fil = colors_name[j];
      colorDivs[j].style.backgroundColor = "white";
      colorDivs[j].style.color = "black";
    }

    // Set background color of the clicked colorDiv
    if(this.id == "yellow"){
      this.style.backgroundColor = colors[i];
      this.style.color = "black";
    }
    else{
      this.style.backgroundColor = colors[i];
      this.style.color = "white";
    }

  };
  colorDiv.id = colors_name[i];
  colorDiv.className = "color-palette";
  colorDiv.innerText = colors_name[i];
  colorDiv.style.color = "black";
  colorDiv.style.borderWidth = "1px";
  colorDiv.style.display = "flex";
  colorDiv.style.alignItems = "center";
  colorDiv.style.justifyContent = "center";
  colorDiv.style.borderStyle = "solid";
  colorDiv.style.borderColor = "black";
  colorDiv.style.width = "70px";
  colorDiv.style.height = "50px";
  colorPaletteDiv.appendChild(colorDiv);
  colorDiv.style.transition= "all 300ms"
  colorDiv.style.cursor = "pointer"
}

  }
  else{
    out.style.display = "none";
  }
}
const post = ()=>{

  console.log(`Delivery_format: ${Delivery_format}`);
  console.log(`Material: ${Material}`);
  console.log(`Quantity: ${Quantity}`);
  console.log(`Layers: ${Layers}`);
  console.log(`value1: ${value1}`);
  console.log(`Isolation: ${Isolation}`);
  console.log(`masking: ${masking}`);
  console.log(`DrillDiameter: ${DrillDiameter}`);
  console.log(`Bakellite_thick: ${Bakellite_thick}`);
  console.log(`FR4_thick: ${FR4_thick}`);
  console.log(`probetest: ${probetest}`);
  console.log(`ManualTest: ${ManualTest}`);
  console.log(`surface: ${surface}`);
  console.log(`value2: ${value2}`);
}
