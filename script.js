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
const textCase = document.querySelector("#case");
let s = "S";
textCase.addEventListener("click", (e) => {
  s = textCase.checked ? "s" : "S";
});
htmlButton.addEventListener("click", (e) => {
  e.preventDefault();
  htmlOutput.textContent = "";
  if (prefix.value == "" || label.value == "" || unit.value == "") return;
  const varDivCode = `
    <div class="var-div">
      <div class="input-container">
        <label for="${prefix.value}${s}pinner">${label.value}</label>
        <input class="var-spinner" id="${prefix.value}${s}pinner" name="value" />
        <span>${unit.value}</span>
      </div>
      <div class="var-slider" id="${prefix.value}${s}lider"></div>
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
  textCase.checked = false;
});

htmlText.addEventListener("click", (e) => {
  e.preventDefault();
  htmlOutput.value = "";
});

function varinit(e) {
  e.preventDefault();
  htmlOutput.textContent = "";

  if (
    prefix.value == "" ||
    label.value == "" ||
    unit.value == "" ||
    initial.value == ""
  )
    return;

  const varinitContent = ` 
  $("#${prefix.value}${s}lider").slider("value", ${initial.value});
  $("#${prefix.value}${s}pinner").spinner("value", ${initial.value});
  `;
  htmlOutput.textContent = varinitContent;
}

htmlVarinit.addEventListener("click", (e) => varinit(e));

function varchange(e) {
  e.preventDefault();
  htmlOutput.textContent = "";

  if (
    prefix.value == "" ||
    label.value == "" ||
    unit.value == "" ||
    initial.value == "" ||
    min.value == "" ||
    max.value == "" ||
    step.value == ""
  )
    return;
  const varchangeContent = `
  //Variable ${prefix.value} slider and number input types
  $('#${prefix.value}${s}lider').slider({ max : ${max.value}, min : ${min.value}, step : ${step.value} });		// slider initialisation : jQuery widget
  $('#${prefix.value}${s}pinner').spinner({ max : ${max.value}, min : ${min.value}, step : ${step.value} });		// number initialisation : jQuery widget			
  // monitoring change in value and connecting slider and number
  // setting trace point coordinate arrays to empty on change of link length
  $( "#${prefix.value}${s}lider" ).on( "slide", function( e, ui ) { $('#${prefix.value}${s}pinner').spinner("value",ui.value); ptx=[]; pty=[]; } );
  $( "#${prefix.value}${s}pinner" ).on( "spin", function( e, ui ) { $('#${prefix.value}${s}lider').slider("value",ui.value); ptx=[]; pty=[]; } );
  $( "#${prefix.value}${s}pinner" ).on( "change", function() {  varchange() } );
  `;
  htmlOutput.textContent = varchangeContent;
}

htmlVarchange.addEventListener("click", (e) => varchange(e));
