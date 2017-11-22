const convert = {
  "A": "U",
  "T": "A",
  "C": "G",
  "G": "C"
};
let DNAChart = {};
function _getDNAChart(){
  return fetch('./dnaChart.json')
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
function DNA_to_template(DNA){
  document.querySelector("#AminoAcids").children.forEach((child) => {
    document.querySelector("#AminoAcids").removeChild(child);
  });
  let temp = document.querySelector("#AminoAcidTemplate");
  let _AAC = DNA_to_Amino(DNA);
    _AAC.forEach((AA) => {
    temp.content.querySelector('.RNATriple').innerHTML = AA.full;
    temp.content.querySelector('.AAFull').innerHTML = AA.aminoAcid;
    temp.content.querySelector('.AAShort').innerHTML = AA.aminoAcidShort;
    let newAA = document.importNode(temp.content, true);
    document.querySelector("#AminoAcids").appendChild(newAA);
  });
}
function getDNAInput(e){
  if(e.code == "Enter" && e.key == "Enter"){
    DNA_to_template(e.srcElement.value);
  }
}
function main(){
  let DNAInput = document.querySelector("#DNAString");
  DNAInput.addEventListener('keydown', getDNAInput);
  getDNAChart();
}
window.addEventListener('load', main);
