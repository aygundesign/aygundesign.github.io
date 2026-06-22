/* =========================
     CURSOR
  ========================= */
  const cursor = document.querySelector(".cursor");
  document.addEventListener("mousemove", (e) => {
    if (cursor) {
      cursor.style.top = e.clientY + "px";
      cursor.style.left = e.clientX + "px";
    }
  });

  /* =========================
     GSAP TEXT INTRO
  ========================= */
  gsap.from("#title", {
    y: 110,
    opacity: 0,
    duration: 1.2,
    ease: "power4.out"
  });

  gsap.from(".hero p", {
    y: 30,
    opacity: 0,
    duration: 1,
    delay: 0.2,
    ease: "power3.out"
  });

  gsap.from(".hero-actions", {
    y: 25,
    opacity: 0,
    duration: 1,
    delay: 0.35,
    ease: "power3.out"
  });

  /* =========================
     THREE SCENE
  ========================= */
  const scene = new THREE.Scene();
  scene.fog = new THREE.Fog(0x000000, 24, 62);

  const camera = new THREE.PerspectiveCamera(
    40,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.set(0, 0, 26);

  const renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setClearColor(0x000000, 0);
  renderer.domElement.style.position = "fixed";
  renderer.domElement.style.top = "0";
  renderer.domElement.style.left = "0";
  renderer.domElement.style.zIndex = "-1";
  renderer.domElement.style.pointerEvents = "none";
  document.body.appendChild(renderer.domElement);

  /* =========================
     LIGHTS
  ========================= */
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
  scene.add(ambientLight);

  const keyLight = new THREE.PointLight(0xffd54a, 2.2, 120);
  keyLight.position.set(7, 5, 16);
  scene.add(keyLight);

  const fillLight = new THREE.PointLight(0xffffff, 1.2, 120);
  fillLight.position.set(-7, -2, 14);
  scene.add(fillLight);

  const topLight = new THREE.PointLight(0xffc400, 1.3, 120);
  topLight.position.set(0, 9, 14);
  scene.add(topLight);

  /* =========================
     MAIN HERO GROUP
  ========================= */
  const heroGroup = new THREE.Group();
  heroGroup.position.set(0, 0.4, -2);
  scene.add(heroGroup);

  /* =========================
     GLOW TEXTURE
  ========================= */
  function createGlowTexture(size = 512, colorA = "rgba(255,210,80,1)", colorB = "rgba(255,180,0,0)") {
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d");

    const gradient = ctx.createRadialGradient(
      size / 2, size / 2, 10,
      size / 2, size / 2, size / 2
    );
    gradient.addColorStop(0, colorA);
    gradient.addColorStop(0.25, "rgba(255,210,80,0.25)");
    gradient.addColorStop(0.55, "rgba(255,180,0,0.08)");
    gradient.addColorStop(1, colorB);

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, size, size);

    return new THREE.CanvasTexture(canvas);
  }

  const warmGlowTexture = createGlowTexture();
  const whiteGlowTexture = createGlowTexture(512, "rgba(255,255,255,0.9)", "rgba(255,255,255,0)");

  /* =========================
     SOFT CENTRAL ATMOSPHERE
  ========================= */
  const glowBack = new THREE.Mesh(
    new THREE.PlaneGeometry(15, 15),
    new THREE.MeshBasicMaterial({
      map: warmGlowTexture,
      transparent: true,
      opacity: 0.34,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    })
  );
  glowBack.position.set(0, 0, -4);
  heroGroup.add(glowBack);

  const glowAccent = new THREE.Mesh(
    new THREE.PlaneGeometry(11, 11),
    new THREE.MeshBasicMaterial({
      map: whiteGlowTexture,
      transparent: true,
      opacity: 0.08,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    })
  );
  glowAccent.position.set(0.7, 0.2, -3.7);
  heroGroup.add(glowAccent);

  /* =========================
     CINEMATIC LIGHT BEAMS
  ========================= */
  function createBeam(width, height, color, opacity, x, y, z, rotZ) {
    const beam = new THREE.Mesh(
      new THREE.PlaneGeometry(width, height),
      new THREE.MeshBasicMaterial({
        color,
        transparent: true,
        opacity,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        side: THREE.DoubleSide
      })
    );
    beam.position.set(x, y, z);
    beam.rotation.z = rotZ;
    heroGroup.add(beam);
    return beam;
  }

  const beam1 = createBeam(0.8, 14, 0xffd54a, 0.07, -2.5, 0.3, -3, -0.55);
  const beam2 = createBeam(0.5, 12, 0xffffff, 0.05, 3.0, -0.2, -3.2, 0.42);
  const beam3 = createBeam(0.35, 11, 0xffc400, 0.045, 0.4, 0.5, -2.8, -0.08);

  /* =========================
     SPORTIVE LIGHT SLASHES
  ========================= */
  function createSlash(width, height, color, opacity, x, y, z, rotZ) {
    const slash = new THREE.Mesh(
      new THREE.PlaneGeometry(width, height),
      new THREE.MeshBasicMaterial({
        color,
        transparent: true,
        opacity,
        blending: THREE.AdditiveBlending,
        depthWrite: false
      })
    );
    slash.position.set(x, y, z);
    slash.rotation.z = rotZ;
    heroGroup.add(slash);
    return slash;
  }

  const slash1 = createSlash(0.12, 8.5, 0xffd54a, 0.24, -3.8, 0.1, -1.8, -0.78);
  const slash2 = createSlash(0.08, 6.8, 0xffffff, 0.12, 4.2, -0.5, -1.6, 0.82);
  const slash3 = createSlash(0.07, 5.7, 0xffc400, 0.10, 2.4, 2.1, -1.9, 1.1);
  const slash4 = createSlash(0.05, 5.0, 0xffffff, 0.08, -2.0, -2.0, -1.9, -1.1);

  /* =========================
     GLASS FRAMES
  ========================= */
  function createFrame(w, h, color, opacity, x, y, z, rotX, rotY, rotZ) {
    const group = new THREE.Group();

    const material = new THREE.LineBasicMaterial({
      color,
      transparent: true,
      opacity
    });

    const points = [
      new THREE.Vector3(-w / 2, -h / 2, 0),
      new THREE.Vector3(w / 2, -h / 2, 0),
      new THREE.Vector3(w / 2, h / 2, 0),
      new THREE.Vector3(-w / 2, h / 2, 0),
      new THREE.Vector3(-w / 2, -h / 2, 0)
    ];

    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const line = new THREE.Line(geometry, material);
    group.add(line);

    group.position.set(x, y, z);
    group.rotation.set(rotX, rotY, rotZ);
    heroGroup.add(group);
    return group;
  }

  const frame1 = createFrame(10, 6.2, 0xffd54a, 0.16, 0, 0.2, -2.6, 0.12, -0.28, 0.08);
  const frame2 = createFrame(8.4, 5.0, 0xffffff, 0.10, 0.2, -0.1, -2.1, -0.08, 0.22, -0.06);
  const frame3 = createFrame(6.9, 4.3, 0xffd54a, 0.08, -0.2, 0.1, -1.6, 0.10, -0.16, 0.03);

  /* =========================
     HORIZONTAL ENERGY LINES
  ========================= */
  function createEnergyLine(length, color, opacity, y, z) {
    const geometry = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(-length / 2, 0, 0),
      new THREE.Vector3(length / 2, 0, 0)
    ]);

    const material = new THREE.LineBasicMaterial({
      color,
      transparent: true,
      opacity
    });

    const line = new THREE.Line(geometry, material);
    line.position.set(0, y, z);
    heroGroup.add(line);
    return line;
  }

  const line1 = createEnergyLine(12, 0xffd54a, 0.12, 0.7, -2.3);
  const line2 = createEnergyLine(9.8, 0xffffff, 0.06, -0.6, -2.0);

  /* =========================
     LOGO
  ========================= */
  const logoGroup = new THREE.Group();
  heroGroup.add(logoGroup);

  const textureLoader = new THREE.TextureLoader();
  let logoMain, logoGlowGold, logoGlowWhite, logoShadow;

  textureLoader.load(
    "yenilogo.png",
    function (texture) {
      texture.colorSpace = THREE.SRGBColorSpace;
      texture.anisotropy = renderer.capabilities.getMaxAnisotropy();

      const ratio = texture.image.width / texture.image.height;
      const w = 8.5;
      const h = w / ratio;

      // shadow depth layer
      logoShadow = new THREE.Mesh(
        new THREE.PlaneGeometry(w * 1.02, h * 1.02),
        new THREE.MeshBasicMaterial({
          map: texture,
          color: 0x000000,
          transparent: true,
          opacity: 0.22
        })
      );
      logoShadow.position.set(0.35, -0.25, -0.55);
      logoShadow.rotation.y = -0.18;
      logoGroup.add(logoShadow);

      // gold glow layer
      logoGlowGold = new THREE.Mesh(
        new THREE.PlaneGeometry(w * 1.07, h * 1.07),
        new THREE.MeshBasicMaterial({
          map: texture,
          color: 0xffc400,
          transparent: true,
          opacity: 0.18,
          blending: THREE.AdditiveBlending,
          depthWrite: false
        })
      );
      logoGlowGold.position.set(0, 0, -0.15);
      logoGroup.add(logoGlowGold);

      // white highlight layer
      logoGlowWhite = new THREE.Mesh(
        new THREE.PlaneGeometry(w * 1.03, h * 1.03),
        new THREE.MeshBasicMaterial({
          map: texture,
          color: 0xffffff,
          transparent: true,
          opacity: 0.08,
          blending: THREE.AdditiveBlending,
          depthWrite: false
        })
      );
      logoGlowWhite.position.set(-0.05, 0.03, -0.06);
      logoGroup.add(logoGlowWhite);

      // main logo
      logoMain = new THREE.Mesh(
        new THREE.PlaneGeometry(w, h),
        new THREE.MeshBasicMaterial({
          map: texture,
          transparent: true
        })
      );
      logoMain.position.set(0, 0, 0.15);
      logoGroup.add(logoMain);
    },
    undefined,
    function () {
      console.log("Logo yüklenemedi: yenilogo.png");
    }
  );

  /* =========================
     BACK PARTICLES
  ========================= */
  function createParticles(count, spreadX, spreadY, spreadZ, color, size, opacity) {
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * spreadX;
      positions[i * 3 + 1] = (Math.random() - 0.5) * spreadY;
      positions[i * 3 + 2] = -10 - Math.random() * spreadZ;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
      color,
      size,
      transparent: true,
      opacity,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      sizeAttenuation: true
    });

    return new THREE.Points(geometry, material);
  }

  const particlesGold = createParticles(130, 70, 40, 24, 0xffd54a, 0.05, 0.11);
  const particlesWhite = createParticles(70, 60, 32, 24, 0xffffff, 0.03, 0.08);
  scene.add(particlesGold);
  scene.add(particlesWhite);

  /* =========================
     MOUSE PARALLAX
  ========================= */
  const mouse = { x: 0, y: 0, tx: 0, ty: 0 };

  document.addEventListener("mousemove", (e) => {
    mouse.tx = (e.clientX / window.innerWidth - 0.5) * 2;
    mouse.ty = (e.clientY / window.innerHeight - 0.5) * 2;
  });

  /* =========================
     INTRO ANIMATION
  ========================= */
  gsap.from(heroGroup.position, {
    z: -9,
    duration: 1.8,
    ease: "power3.out"
  });

  gsap.from(heroGroup.rotation, {
    y: -0.35,
    duration: 1.8,
    ease: "power3.out"
  });

  /* =========================
     ANIMATION LOOP
  ========================= */
  const clock = new THREE.Clock();

  function animate() {
    requestAnimationFrame(animate);
    const t = clock.getElapsedTime();

    mouse.x += (mouse.tx - mouse.x) * 0.04;
    mouse.y += (mouse.ty - mouse.y) * 0.04;

    // group motion
    heroGroup.rotation.x = mouse.y * 0.05;
    heroGroup.rotation.y = mouse.x * 0.10 + Math.sin(t * 0.45) * 0.025;
    heroGroup.position.x = mouse.x * 0.7;
    heroGroup.position.y = 0.4 - mouse.y * 0.35;

    // logo motion
    if (logoGroup) {
      logoGroup.rotation.y = Math.sin(t * 0.85) * 0.14;
      logoGroup.rotation.x = Math.cos(t * 0.65) * 0.025;
      logoGroup.position.y = Math.sin(t * 1.4) * 0.08;
    }

    if (logoMain) {
      logoMain.rotation.z = Math.sin(t * 0.9) * 0.01;
    }

    if (logoGlowGold) {
      const s = 1 + Math.sin(t * 2.2) * 0.012;
      logoGlowGold.scale.set(s, s, s);
      logoGlowGold.material.opacity = 0.13 + (Math.sin(t * 1.8) + 1) * 0.03;
    }

    if (logoGlowWhite) {
      const s2 = 1 + Math.cos(t * 1.6) * 0.01;
      logoGlowWhite.scale.set(s2, s2, s2);
    }

    // beams breathing
    beam1.material.opacity = 0.04 + (Math.sin(t * 1.2) + 1) * 0.02;
    beam2.material.opacity = 0.03 + (Math.cos(t * 1.35) + 1) * 0.015;
    beam3.material.opacity = 0.02 + (Math.sin(t * 1.8) + 1) * 0.012;

    beam1.position.x = -2.5 + Math.sin(t * 0.8) * 0.3;
    beam2.position.x = 3.0 + Math.cos(t * 0.6) * 0.25;
    beam3.position.y = 0.5 + Math.sin(t * 1.1) * 0.25;

    // slashes
    slash1.position.y = 0.1 + Math.sin(t * 1.0) * 0.22;
    slash2.position.y = -0.5 + Math.cos(t * 1.15) * 0.18;
    slash3.position.x = 2.4 + Math.sin(t * 0.9) * 0.2;
    slash4.position.x = -2.0 + Math.cos(t * 1.0) * 0.16;

    slash1.material.opacity = 0.16 + (Math.sin(t * 1.7) + 1) * 0.04;
    slash2.material.opacity = 0.08 + (Math.cos(t * 1.9) + 1) * 0.02;

    // frames
    frame1.rotation.y += 0.0014;
    frame1.rotation.x += 0.0006;
    frame2.rotation.y -= 0.0011;
    frame2.rotation.x -= 0.0005;
    frame3.rotation.y += 0.0008;

    // lines
    line1.position.x = Math.sin(t * 0.7) * 0.4;
    line2.position.x = Math.cos(t * 0.8) * 0.35;
    line1.material.opacity = 0.08 + (Math.sin(t * 1.4) + 1) * 0.025;
    line2.material.opacity = 0.04 + (Math.cos(t * 1.3) + 1) * 0.015;

    // glow atmosphere
    glowBack.rotation.z += 0.0008;
    glowBack.scale.setScalar(1 + Math.sin(t * 1.3) * 0.015);
    glowAccent.scale.setScalar(1 + Math.cos(t * 1.5) * 0.012);
    glowAccent.position.x = 0.7 + Math.sin(t * 0.9) * 0.2;

    // particles
    particlesGold.rotation.y = t * 0.01;
    particlesWhite.rotation.y = -t * 0.007;

    // camera movement
    camera.position.x += ((mouse.x * 0.28) - camera.position.x) * 0.03;
    camera.position.y += ((-mouse.y * 0.12) - camera.position.y) * 0.03;
    camera.lookAt(0, 0, 0);

    renderer.render(scene, camera);
  }

  animate();

  /* =========================
     RESIZE
  ========================= */
  window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  });
