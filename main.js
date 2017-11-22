const convert = {
  "A": "U",
  "T": "A",
  "C": "G",
  "G": "C"
};
let DNAChart = {};
function _getDNAChart(){
  return fetch('./dnatranscript/dnaChart.json')
  .then(function(response){
    return response.json();
  }).then(function(json){
    DNAChart = json;
  });
}

function getDNAChart(){
  _getDNAChart();
}

function toRNA(DNA){
  let RNA = "";
  DNA.split("").forEach((MOL) => {
    try{
      (function(m){
        tempThingy="";
        tempThingy+=m.length;
      })(MOL);
      RNA += convert[MOL];
    }
    catch(e){
      throw(new Error("Unexpected molecule \""+MOL+"\". Could not convert to paired molecule."));
    }
  });
  return RNA;
}
function toRNAChain(RNA_String){
  let RNA_Chain = [];
  let RNA_Length = RNA_String.length - (RNA_String.length%3);
  for(let Triple = 0; Triple < RNA_Length / 3; Triple++){
    RNA_Chain.push(RNA_String.substr(Triple*3, 3));
  }
  return RNA_Chain;
}
function toAminoAcid(RNA_Triple){
  console.log(RNA_Triple)
  return DNAChart[RNA_Triple[0]][RNA_Triple[1]][RNA_Triple[2]];
}
function AminoAcidChain(RNA_Chain){
  let AAChain = [];
  RNA_Chain.forEach((RNA_Triple) => {
    AAChain.push(toAminoAcid(RNA_Triple));
  });
  return AAChain;
}
function DNA_to_Amino(DNA){
  return AminoAcidChain(toRNAChain(toRNA(DNA)));
}
let DNAInput = document.querySelector("#DNAString");
function getDNAInput(e){
  console.log(e)
}
DNAInput.addEventListener('submit', getDNAInput);
window.addEventListener('load', getDNAChart);
