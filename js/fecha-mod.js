const fechaUltMod = new Date(document.lastModified);
let txtMD =
  "Ultima Mod: " +
  fechaUltMod.getDate() +
  "/" +
  fechaUltMod.getMonth() +
  "/" +
  fechaUltMod.getFullYear();
document.getElementById("fecha-mod").textContent = txtMD;
