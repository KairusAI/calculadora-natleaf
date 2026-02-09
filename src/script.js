// Valores por frasco de 30 mL: mg/g × 30 (batch/lote nos laudos)
const DATA = {
  natleaf_brain: {
    nome: "Natleaf Brain",
    imagem: "assets/images/Natleaf-brain.png",
    batch: "HB11074",
    volume_ml: 30,
    canabinoides_mg: {
      CBD: 36.00 * 30,      // 1080
      CBG: 24.16 * 30,     // 724.8
      CBDV: 0.80 * 30,     // 24
      CBN: 0.30 * 30,      // 9
      "THC total": 0
    }
  },
  natleaf_sleep: {
    nome: "Natleaf Sleep",
    imagem: "assets/images/Natleaf-sleep.png",
    batch: "HB11113",
    volume_ml: 30,
    canabinoides_mg: {
      CBD: 42.90 * 30,       // 1287
      CBN: 21.01 * 30,       // 630.3
      "Delta9-THC": 2.53 * 30,  // 75.9
      CBGa: 0.45 * 30,       // 13.5
      CBDV: 0.33 * 30,       // 9.9
      CBG: 0.32 * 30,        // 9.6
      "Delta8-THC": 0.30 * 30,  // 9
      "THC total": 2.83 * 30   // 84.9
    }
  },
  natleaf_wellness: {
    nome: "Natleaf Wellness",
    imagem: "assets/images/Natleaf-wellnes.png",
    batch: "HB11008",
    volume_ml: 30,
    canabinoides_mg: {
      CBD: 51.52 * 30,       // 1545.6
      CBT: 0.90 * 30,        // 27
      CBDV: 0.67 * 30,      // 20.1
      "Delta9-THC": 0.57 * 30,  // 17.1
      CBG: 0.49 * 30,        // 14.7
      CBN: 0.46 * 30,        // 13.8
      "Delta8-THC": 0.25 * 30,  // 7.5
      CBGa: 0.19 * 30,       // <0.19 mg/g no laudo
      "THC total": 0.82 * 30    // 24.6
    }
  }
};

const DROPS_PER_ML = 40;

const productSelect = document.getElementById("productSelect");
const productImage = document.getElementById("productImage");
const dropsInput = document.getElementById("dropsInput");
const mlInput = document.getElementById("mlInput");
const resultsGrid = document.getElementById("resultsGrid");
const doseTitle = document.getElementById("doseTitle");
const doseSubtitle = document.getElementById("doseSubtitle");

let isSyncing = false;

function formatNumber(value) {
  if (isNaN(value) || !isFinite(value)) return "-";
  if (value === 0) return "0";
  if (value < 0.01) return value.toExponential(2).replace(".", ",");
  if (value < 1) return value.toFixed(3).replace(".", ",");
  if (value < 100) return value.toFixed(2).replace(".", ",");
  return value.toFixed(1).replace(".", ",");
}

function getSelectedProduct() {
  return DATA[productSelect.value];
}

function updateImage() {
  const produto = getSelectedProduct();
  productImage.src = produto.imagem;
  productImage.alt = produto.nome;
}

function calculate() {
  const produto = getSelectedProduct();
  const volumeTotalMl = produto.volume_ml;
  const totalGotas = volumeTotalMl * DROPS_PER_ML;

  let gotas = parseFloat((dropsInput.value || "0").replace(",", "."));
  let ml = parseFloat((mlInput.value || "0").replace(",", "."));

  const gotasIsNaN = isNaN(gotas);
  const mlIsNaN = isNaN(ml);

  if (gotasIsNaN && mlIsNaN) {
    gotas = 0;
    ml = 0;
  } else if (gotasIsNaN && !mlIsNaN) {
    gotas = ml * DROPS_PER_ML;
  } else if (!gotasIsNaN && mlIsNaN) {
    ml = gotas / DROPS_PER_ML;
  }

  // Update Main Display
  doseTitle.textContent = `${formatNumber(gotas)} gotas`;
  if (doseSubtitle) {
    doseSubtitle.textContent = `${formatNumber(ml)} mL`;
  }

  const proporcao = totalGotas === 0 ? 0 : gotas / totalGotas;

  resultsGrid.innerHTML = "";

  Object.entries(produto.canabinoides_mg).forEach(([nome, totalMg]) => {
    const doseMg = proporcao * totalMg;
    const item = document.createElement("div");
    item.className = "result-item";
    item.innerHTML = `
      <span>${nome}</span>
      <strong>${formatNumber(doseMg)} mg</strong>
    `;
    resultsGrid.appendChild(item);
  });
}

// Eventos
productSelect.addEventListener("change", () => {
  updateImage();
  calculate();
});

dropsInput.addEventListener("input", () => {
  if (isSyncing) return;
  const raw = (dropsInput.value || "").trim();
  const parsed = parseFloat(raw.replace(",", "."));
  
  // Prevent decimal drops if user is typing
  if (raw !== "" && !isNaN(parsed)) {
    // Optional: Force integer for drops if desired, but allowing decimals for calculation flexibility
    // const inteiro = Math.max(0, Math.floor(parsed));
    // if (String(inteiro) !== dropsInput.value) dropsInput.value = inteiro;
  }
  
  isSyncing = true;
  const gotas = parseFloat((dropsInput.value || "0").replace(",", "."));
  if (!isNaN(gotas)) {
    mlInput.value = (gotas / DROPS_PER_ML).toFixed(3).replace(".", ",") || "";
    // Clean up trailing zeros if needed, or keep simple
    mlInput.value = (gotas / DROPS_PER_ML); // Let browser handle basic formatting
  } else {
    mlInput.value = "";
  }
  calculate();
  isSyncing = false;
});

mlInput.addEventListener("input", () => {
  if (isSyncing) return;
  isSyncing = true;
  const ml = parseFloat((mlInput.value || "0").replace(",", "."));
  if (!isNaN(ml)) {
    dropsInput.value = Math.round(ml * DROPS_PER_ML) || "";
  } else {
    dropsInput.value = "";
  }
  calculate();
  isSyncing = false;
});

// Inicialização
updateImage();
calculate();
