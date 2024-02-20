const htmlButton = document.querySelector(".html-button");
const htmlOutput = document.querySelector(".html-output");
const htmlClear = document.querySelector(".html-clear");
const htmlVarinit = document.querySelector(".html-varinit");
const htmlVarchange = document.querySelector(".html-varchange");
const htmlText = document.querySelector(".html-text");
const prefix = document.querySelector("#prefix");
const label = document.querySelector("#label");
const unit = document.querySelector("#unit");
const initial = document.querySelector("#initial");
const min = document.querySelector("#min");
const max = document.querySelector("#max");
const step = document.querySelector("#step");
htmlButton.addEventListener("click", (e) => {
  e.preventDefault();

  const varDivCode = `
    <div class="var-div">
      <div class="input-container">
        <label for="${prefix.value}Spinner">${label.value}</label>
        <input class="var-spinner" id="${prefix.value}Spinner" name="value" />
        <span>${unit.value}</span>
      </div>
      <div class="var-slider" id="${prefix.value}Slider"></div>
    </div>
  `;
  htmlOutput.textContent = varDivCode;
});

htmlClear.addEventListener("click", (e) => {
  e.preventDefault();
  prefix.value = "";
  label.value = "";
  unit.value = "";
  initial.value = "";
  min.value = "";
  max.value = "";
  step.value = "";
});

htmlText.addEventListener("click", (e) => {
  e.preventDefault();
  htmlOutput.value = "";
});

function varinit() {
  const varinitContent = ` 
  $("#${prefix.value}Slider").slider("value", ${initial.value});
  $("#${prefix.value}Spinner").spinner("value", ${initial.value});
  `;
  htmlOutput.textContent = varinitContent;
}

htmlVarinit.addEventListener("click", varinit);

function varchange() {
  const varchangeContent = `
  //Variable ${prefix.value} slider and number input types
  $('#${prefix.value}Slider').slider({ max : ${max.value}, min : ${min.value}, step : ${step.value} });		// slider initialisation : jQuery widget
  $('#${prefix.value}Spinner').spinner({ max : ${max.value}, min : ${min.value}, step : ${step.value} });		// number initialisation : jQuery widget			
  // monitoring change in value and connecting slider and number
  // setting trace point coordinate arrays to empty on change of link length
  $( "#${prefix.value}Slider" ).on( "slide", function( e, ui ) { $('#${prefix.value}Spinner').spinner("value",ui.value); ptx=[]; pty=[]; } );
  $( "#${prefix.value}Spinner" ).on( "spin", function( e, ui ) { $('#${prefix.value}Slider').slider("value",ui.value); ptx=[]; pty=[]; } );
  $( "#${prefix.value}Spinner" ).on( "change", function() {  varchange() } );
  `;
  htmlOutput.textContent = varchangeContent;
}

htmlVarchange.addEventListener("click", varchange);
