class Petal {
  constructor() {
    this.pos = { x: 0, y: 0, z: 0 };
    this.xSpeedVariation = 0;
    this.ySpeed = 0;
    this.rotation = {
      axis: "X",
      value: 0,
      speed: 0,
      x: 0,
    };

    this.el = document.createElement("div");
    this.el.className = "petal";
    this.el.style.position = "absolute";
  }
}

class Scene {
  constructor() {
    this.container = document.getElementById('blossom_container');;
    this.placeholder = document.createElement("div");
    this.petals = [];
    this.numOfPetals = 18;
    this.gravity = 2;
    this.size = { width: this.container.offsetWidth, height: this.container.offsetHeight };

    this.placeholder.style.transformStyle = "preserve-3d";
    this.placeholder.style.width = this.container.offsetWidth + "px";
    this.placeholder.style.height = this.container.offsetHeight + "px";
    this.container.appendChild(this.placeholder);
    this.createPetals();
    requestAnimationFrame(this.update.bind(this));
  }

  resetPetal(petal) {
    petal.pos = { x: this.size.width * Math.random() * 2, y: petal.el.offsetHeight * -1, z: Math.random() * 100 };

    if (petal.pos.x > this.size.width * 1.5 || petal.pos.x < 50) {
      petal.pos = { ...petal.pos, x: this.size.width + petal.el.offsetWidth, y: (Math.random() * this.size.height) / 2 };
    }

    petal.rotation.speed = Math.random() * 15;
    let randomAxis = Math.random();
    if (randomAxis > 0.5) {
      petal.rotation.axis = "X";
    } else if (randomAxis > 0.25) {
      petal.rotation.axis = "Y";
      petal.rotation.x = Math.random() * 270;
    } else {
      petal.rotation.axis = "Z";
      petal.rotation.x = Math.random() * 180;
      petal.rotation.speed = Math.random() * 2;
    }

    petal.xSpeedVariation = Math.random() * 0.5;
    petal.ySpeed = Math.random() + this.gravity;

    return petal;
  }

  updatePetal(petal) {
    let xSpeed = 2.5 + petal.xSpeedVariation;

    petal.pos = { ...petal.pos, x: petal.pos.x - xSpeed, y: petal.pos.y + petal.ySpeed };
    petal.rotation.value += petal.rotation.speed;

    let transformText =
      "translateX( " +
      petal.pos.x +
      "px ) translateY( " +
      petal.pos.y +
      "px ) rotate" +
      petal.rotation.axis +
      "( " +
      petal.rotation.value +
      "deg )";
	
    if (petal.rotation.axis !== "X") {
		transformText += " rotateX(" + petal.rotation.x + "deg)";
    }
    petal.el.style.transform = transformText;

    if (petal.pos.x < -50 || petal.y > this.size.height + 10) {
      this.resetPetal(petal);
    }
  }

  createPetals() {
    for (let i = 0; i < this.numOfPetals; i++) {
      let petal = new Petal();

      this.resetPetal(petal);
      this.petals.push(petal);
      this.placeholder.appendChild(petal.el);
    }
  }

  update() {
    let petalsLen = this.petals.length;
    for (let i = 0; i < petalsLen; i++) {
      this.updatePetal(this.petals[i]);
    }

    requestAnimationFrame(this.update.bind(this));
  }
}

const myScene = new Scene();
