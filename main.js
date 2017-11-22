const convert = {
  "A": "U",
  "T": "A",
  "C": "G",
  "G": "C"
};
let DNAChart = {
  "U": {
    "U": {
      "U": {
        "full": "UUU",
        "aminoAcid": "Phenylalanine",
        "aminoAcidShort": "Phe"
      },
      "C": {
        "full": "UUC",
        "aminoAcid": "Phenylalanine",
        "aminoAcidShort": "Phe"
      },
      "A": {
        "full": "UUA",
        "aminoAcid": "Leucine",
        "aminoAcidShort": "Leu"
      },
      "G": {
        "full": "UUG",
        "aminoAcid": "Leucine",
        "aminoAcidShort": "Leu"
      }
    },
    "C": {
      "U": {
        "full": "UCU",
        "aminoAcid": "Serine",
        "aminoAcidShort": "Ser"
      },
      "C": {
        "full": "UCC",
        "aminoAcid": "Serine",
        "aminoAcidShort": "Ser"
      },
      "A": {
        "full": "UCA",
        "aminoAcid": "Serine",
        "aminoAcidShort": "Ser"
      },
      "G": {
        "full": "UCG",
        "aminoAcid": "Serine",
        "aminoAcidShort": "Ser"
      }
    },
    "A": {
      "U": {
        "full": "UAU",
        "aminoAcid": "Tyrosisne",
        "aminoAcidShort": "Tyr"
      },
      "C": {
        "full": "UAC",
        "aminoAcid": "Tyrosisne",
        "aminoAcidShort": "Tyr"
      },
      "A": {
        "full": "UAA",
        "aminoAcid": "none",
        "aminoAcidShort": "none",
        "stop": true
      },
      "G": {
        "full": "UAG",
        "aminoAcid": "none",
        "aminoAcidShort": "none",
        "stop": true
      }
    },
    "G": {
      "U": {
        "full": "UGU",
        "aminoAcid": "Cysteine",
        "aminoAcidShort": "Cys"
      },
      "C": {
        "full": "UGC",
        "aminoAcid": "Cysteine",
        "aminoAcidShort": "Cys"
      },
      "A": {
        "full": "UGA",
        "aminoAcid": "none",
        "aminoAcidShort": "none",
        "stop": true
      },
      "G": {
        "full": "UGG",
        "aminoAcid": "Tryptophane",
        "aminoAcidShort": "Trp"
      }
    }
  },
  "C": {
    "U": {
      "U": {
        "full": "CUU",
        "aminoAcid": "Leucine",
        "aminoAcidShort": "Leu"
      },
      "C": {
        "full": "CUC",
        "aminoAcid": "Leucine",
        "aminoAcidShort": "Leu"
      },
      "A": {
        "full": "CUA",
        "aminoAcid": "Leucine",
        "aminoAcidShort": "Leu"
      },
      "G": {
        "full": "CUG",
        "aminoAcid": "Leucine",
        "aminoAcidShort": "Leu"
      }
    },
    "C": {
      "U": {
        "full": "CCU",
        "aminoAcid": "Proline",
        "aminoAcidShort": "Pro"
      },
      "C": {
        "full": "CCC",
        "aminoAcid": "Proline",
        "aminoAcidShort": "Pro"
      },
      "A": {
        "full": "CCA",
        "aminoAcid": "Proline",
        "aminoAcidShort": "Pro"
      },
      "G": {
        "full": "CCG",
        "aminoAcid": "Proline",
        "aminoAcidShort": "Pro"
      }
    },
    "A": {
      "U": {
        "full": "CAU",
        "aminoAcid": "Histidine",
        "aminoAcidShort": "His"
      },
      "C": {
        "full": "CAC",
        "aminoAcid": "Histidine",
        "aminoAcidShort": "His"
      },
      "A": {
        "full": "CAA",
        "aminoAcid": "Glutamine",
        "aminoAcidShort": "Gln"
      },
      "G": {
        "full": "CAG",
        "aminoAcid": "Glutamine",
        "aminoAcidShort": "Gln"
      }
    },
    "G": {
      "U": {
        "full": "CGU",
        "aminoAcid": "Arginine",
        "aminoAcidShort": "Arg"
      },
      "C": {
        "full": "CGC",
        "aminoAcid": "Arginine",
        "aminoAcidShort": "Arg"
      },
      "A": {
        "full": "CGA",
        "aminoAcid": "Arginine",
        "aminoAcidShort": "Arg"
      },
      "G": {
        "full": "CGG",
        "aminoAcid": "Arginine",
        "aminoAcidShort": "Arg"
      }
    }
  },
  "A": {
    "U": {
      "U": {
        "full": "AUU",
        "aminoAcid": "Isoleucine",
        "aminoAcidShort": "Ile"
      },
      "C": {
        "full": "AUC",
        "aminoAcid": "Isoleucine",
        "aminoAcidShort": "Ile"
      },
      "A": {
        "full": "AUA",
        "aminoAcid": "Isoleucine",
        "aminoAcidShort": "Ile"
      },
      "G": {
        "full": "AUG",
        "aminoAcid": "Methionine",
        "aminoAcidShort": "Met",
        "start": true
      }
    },
    "C": {
      "U": {
        "full": "ACU",
        "aminoAcid": "Threonine",
        "aminoAcidShort": "Thr"
      },
      "C": {
        "full": "ACC",
        "aminoAcid": "Threonine",
        "aminoAcidShort": "Thr"
      },
      "A": {
        "full": "ACA",
        "aminoAcid": "Threonine",
        "aminoAcidShort": "Thr"
      },
      "G": {
        "full": "ACG",
        "aminoAcid": "Threonine",
        "aminoAcidShort": "Thr"
      }
    },
    "A": {
      "U": {
        "full": "AAU",
        "aminoAcid": "Asparagine",
        "aminoAcidShort": "Asn"
      },
      "C": {
        "full": "AAC",
        "aminoAcid": "Asparagine",
        "aminoAcidShort": "Asn"
      },
      "A": {
        "full": "AAA",
        "aminoAcid": "Lysine",
        "aminoAcidShort": "Lys"
      },
      "G": {
        "full": "AAG",
        "aminoAcid": "Lysine",
        "aminoAcidShort": "Lys"
      }
    },
    "G": {
      "U": {
        "full": "AGU",
        "aminoAcid": "Serine",
        "aminoAcidShort": "Ser"
      },
      "C": {
        "full": "AGC",
        "aminoAcid": "Serine",
        "aminoAcidShort": "Ser"
      },
      "A": {
        "full": "AGA",
        "aminoAcid": "Arginine",
        "aminoAcidShort": "Arg"
      },
      "G": {
        "full": "AGG",
        "aminoAcid": "Arginine",
        "aminoAcidShort": "Arg"
      }
    }
  },
  "G": {
    "U": {
      "U": {
        "full": "GUU",
        "aminoAcid": "Valine",
        "aminoAcidShort": "Val"
      },
      "C": {
        "full": "GUC",
        "aminoAcid": "Valine",
        "aminoAcidShort": "Val"
      },
      "A": {
        "full": "GUA",
        "aminoAcid": "Valine",
        "aminoAcidShort": "Val"
      },
      "G": {
        "full": "GUG",
        "aminoAcid": "Valine",
        "aminoAcidShort": "Val"
      }
    },
    "C": {
      "U": {
        "full": "GCU",
        "aminoAcid": "Alanine",
        "aminoAcidShort": "Ala"
      },
      "C": {
        "full": "GCC",
        "aminoAcid": "Alanine",
        "aminoAcidShort": "Ala"
      },
      "A": {
        "full": "GCA",
        "aminoAcid": "Alanine",
        "aminoAcidShort": "Ala"
      },
      "G": {
        "full": "GCG",
        "aminoAcid": "Alanine",
        "aminoAcidShort": "Ala"
      }
    },
    "A": {
      "U": {
        "full": "GAU",
        "aminoAcid": "Asparatic acid",
        "aminoAcidShort": "Asp"
      },
      "C": {
        "full": "GAC",
        "aminoAcid": "Asparatic acid",
        "aminoAcidShort": "Asp"
      },
      "A": {
        "full": "GAA",
        "aminoAcid": "Glutamic acid",
        "aminoAcidShort": "Glu"
      },
      "G": {
        "full": "GAG",
        "aminoAcid": "Glutamic acid",
        "aminoAcidShort": "Glu"
      }
    },
    "G": {
      "U": {
        "full": "GGU",
        "aminoAcid": "Glycine",
        "aminoAcidShort": "Gly"
      },
      "C": {
        "full": "GGC",
        "aminoAcid": "Glycine",
        "aminoAcidShort": "Gly"
      },
      "A": {
        "full": "GGA",
        "aminoAcid": "Glycine",
        "aminoAcidShort": "Gly"
      },
      "G": {
        "full": "GGG",
        "aminoAcid": "Glycine",
        "aminoAcidShort": "Gly"
      }
    }
  }
};
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
  let AAT = document.querySelector("#AminoAcids");
  for(let i = AAT.children.length-1; i >= 0; i--){
    let child = document.querySelector("#AminoAcids").children[i];
    if(child){
      document.querySelector("#AminoAcids").removeChild(child);
    }
  };
  let temp = document.querySelector("#AminoAcidTemplate");
  let _AAC = DNA_to_Amino(DNA);
    _AAC.forEach((AA) => {
    temp.content.querySelector('.RNATriple').innerHTML = AA.full;
    temp.content.querySelector('.AAFull').innerHTML = AA.aminoAcid;
    temp.content.querySelector('.AAShort').innerHTML = AA.aminoAcidShort;
    let newAA = document.importNode(temp.content, true);
    document.querySelector("#AminoAcids").appendChild(newAA);
  });
  document.querySelector("#RNAString").innerHTML = "";
  toRNAChain(toRNA(DNA)).forEach((RNABit) => {
    document.querySelector("#RNAString").innerHTML += "<span>"+RNABit+"</span>";
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
