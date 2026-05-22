import confetti from "https://esm.sh/canvas-confetti@1.4.0";
const confettiBtn = document.querySelector(".canvas-confetti-btn");
let exploding = false;
const defaults = {
  particleCount: 300,
  spread: 45,
  angle: 90,
  startVelocity: 70,
};
const fire = (particleRatio, opts) => {
  confetti(
    Object.assign({}, defaults, opts, {
      particleCount: Math.floor(defaults.particleCount * particleRatio)
    })
  );
};
confettiBtn.addEventListener("click", () => {
  if (exploding) return;
  exploding = true;
  const rect = confettiBtn.getBoundingClientRect();
  const x = (rect.left + rect.width/2) / window.innerWidth;
  const y = (rect.top + rect.height/2) / window.innerHeight;
  setTimeout(() => {
    fire(0.25,{
      origin:{x,y},
      spread:35
    });
    fire(0.3,{
      origin:{x,y},
      spread:55
    });
    fire(0.25,{
      origin:{x,y},
      spread:75
    });
    fire(0.2,{
      origin:{x,y},
      spread:100,
      scalar:1.2
    });
    setTimeout(()=>{
      window.location.href="gift.html";
    },1800);
    exploding=false;
  },200);
});
const pattern = document.getElementById("pattern");
for(let i = 0; i < 250; i++){
    const sparkle = document.createElement("div");
    sparkle.classList.add("sparkle");
    sparkle.style.left = Math.random()*100 + "%";
    sparkle.style.top = Math.random()*100 + "%";
    const size = Math.random()*3 + 1;
    sparkle.style.width = size + "px";
    sparkle.style.height = size + "px";
    sparkle.style.animationDuration =
        (Math.random()*3 + 1) + "s";
    pattern.appendChild(sparkle);
}