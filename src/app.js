let Pronombre = ["La", "El", "Su", "Tu"];
let Sustantivo = ["gallina", "león", "vaca", "planta"];
let Adjetivo = ["loco/a", "luchon/a", "feliz", "curioso/a"];

for (let i = 0; i < Pronombre.length; i++) {
  for (let k = 0; k < Sustantivo.length; k++) {
    for (let j = 0; j < Adjetivo.length; j++) {
      console.log(
        Pronombre[i] + " " + Sustantivo[k] + " " + Adjetivo[j] + "<br>"
      );
    }
  }
}
