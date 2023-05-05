/*
 * 第一街
 */
class first extends Phaser.Scene {
  constructor() {
    super("first");
  }
  preload() {
    this.load.image("01", "1/01.jpg");
    this.load.image("02", "1/02.jpg");
  }
  create() {
    this.add.image(470, 300, "02");
    this.clickButton = this.add.text(250, 370, "????????????????????", {
      fontSize: "50px",
      fill: "#0xffffff"
    });
    this.clickButton = this.add
      .text(340, 470, "                         ", {
        fontSize: "25px",
        fill: "#0f0"
      })
      .setInteractive({ useHandCursor: true })
      .on("pointerup", () => {
        this.scene.start("SceneA");
      });

    this.clickButton = this.add
      .text(340, 540, "                         ", {
        fontSize: "25px",
        fill: "#0f0"
      })
      .setInteractive({ useHandCursor: true })
      .on("pointerup", () => {
        this.scene.start("second");
      });
  }
  update() {}
}
class second extends Phaser.Scene {
  constructor() {
    super("second");
  }
  preload() {
    this.load.image("01", "1/01.jpg");
    this.load.image("02", "1/02.jpg");
  }
  create() {
    this.add.image(470, 300, "01");
    this.clickButton = this.add
      .text(30, 480, "      ", {
        fontSize: "25px",
        fill: "#0f0"
      })
      .setInteractive({ useHandCursor: true })
      .on("pointerup", () => {
        this.scene.start("first");
      });
  }
  update() {}
}
class SceneA extends Phaser.Scene {
  /*********************************************************************************************************************** */
  constructor() {
    super("SceneA");
    this.lastFireTime = null;
    this.lastFireTime1 = null;
    this.lastFireTime2 = null;
    this.lastFireTime3 = null;
    this.punch = "punchl";
    this.live = 5;
  }

  /*********************************************************************************************************************** */
  preload() {
    this.load.image("bg1", "photo/bg1.jpg");
    this.load.image("map", "photo/map.jpg");
    this.load.image("sky", "photo/bg.jpg");
    this.load.image("punch", "1/punch.png");
    this.load.spritesheet("dude", "photo/dude.jpg", {
      frameWidth: 32,
      frameHeight: 48
    });
    this.load.spritesheet("punch", "1/punch12.png", {
      frameWidth: 82,
      frameHeight: 82
    });
    this.load.spritesheet("strong", "1/strong.png", {
      frameWidth: 67.671,
      frameHeight: 70
    });
    this.load.spritesheet("player2die", "photo/player2die.jpg", {
      frameWidth: 1360,
      frameHeight: 906
    });
    this.load.image("ground", "photo/ground.jpg");
    this.load.image("ground1", "photo/ground1.jpg");
    this.load.image("bg01", "photo/bg01.jpg");
    this.load.image("bg02", "photo2/bg02.jpg");
    this.load.image("lotus", "photo/lotus.jpg");
    this.load.image("player3", "photo/player3.jpg");
    //平台
    this.load.image("platform1", "photo/platform1.jpg");
    this.load.image("platform2", "photo/platform2.jpg");
    this.load.image("platform3", "photo/platform3.jpg");
    this.load.image("platform4", "photo/platform4.jpg");
    this.load.image("bottom", "photo/bottom.jpg");
    //梯子
    this.load.image("stair1", "photo/stair1.jpg");
    this.load.image("stair2", "photo/stair2.jpg");
    this.load.image("stair3", "photo/stair3.jpg");
    this.load.image("stair4", "photo/stair4.jpg");
    //掉落物
    this.load.image("bomb1", "photo/fall/semon.png");

    //子彈
    this.load.image("grey", "photo/bullet/grey.png");
  }

  /*********************************************************************************************************************** */
  create() {
    //生成1
    this.add.image(470, 300, "bg01");
    this.add.image(36, 64, "lotus");
    this.add.image(70, 10, "map");
    this.platforms = this.physics.add.staticGroup();
    this.platform2s = this.physics.add.staticGroup();
    this.platform2s.create(189, 388, "platform2");
    this.platform2s.create(719, 395, "platform4");
    this.platform2s.create(668, 240, "platform3");
    this.platform2s.create(283, 240, "platform1");
    this.platforms.create(400, 540, "bottom").refreshBody();
    this.stair = new Stair1(this, 231, 260);
    this.stair2 = new Stair2(this, 155, 395);
    this.stair3 = new Stair3(this, 649, 275);
    this.stair4 = new Stair4(this, 749, 420);
    this.player2 = new Player3(this, 472, 257);
    this.physics.add.collider(this.player2, this.platforms);
    this.player = new Player(this, 100, 100);
    this.hp = new Hp1(this, 50, 550);
    this.hp2 = new Hp2(this, 50, 50);
    this.physics.add.collider(this.player, this.platforms);
    this.physics.add.collider(this.player, this.platform2s);
    this.cursors = this.input.keyboard.createCursorKeys();
    this.keyD = this.input.keyboard.addKey("D");
    this.keyA = this.input.keyboard.addKey("A");
    this.keyALT = this.input.keyboard.addKey("ALT");
    this.keyF = this.input.keyboard.addKey("F");
    this.add.text(10, 550, "Hp", {
      fontSize: "20px",
      color: "#ff0000"
    });
    this.skills = this.physics.add.group();
    this.skill5s = this.physics.add.group();
    this.skill3s = this.physics.add.group();
    //碰撞1
    // this.physics.add.overlap(
    //   this.player,
    //   this.skill5s,
    //   function(o1, o2) {
    //     o2.disableBody(true, true);
    //   },
    //   null,
    //   this
    // );
    this.physics.add.overlap(
      this.player,
      this.skill3s,
      function(o1, o2) {
        o1.setVelocityY(-1000);
      },
      null,
      this
    );
    this.physics.add.overlap(
      this.player,
      this.stair,
      function(o1, o2) {
        if (this.cursors.up.isDown) {
          o1.y -= 5;
        } else if (this.cursors.down.isDown) {
          o1.y += 5;
        }
      },
      null,
      this
    );
    this.physics.add.overlap(
      this.player,
      this.stair2,
      function(o1, o2) {
        if (this.cursors.up.isDown) {
          o1.y -= 5;
        } else if (this.cursors.down.isDown) {
          o1.y += 5;
        }
      },
      null,
      this
    );
    this.physics.add.overlap(
      this.player,
      this.stair3,
      function(o1, o2) {
        if (this.cursors.up.isDown) {
          o1.y -= 5;
        } else if (this.cursors.down.isDown) {
          o1.y += 5;
        }
      },
      null,
      this
    );
    this.physics.add.overlap(
      this.player,
      this.stair4,
      function(o1, o2) {
        if (this.cursors.up.isDown) {
          o1.y -= 5;
        } else if (this.cursors.down.isDown) {
          o1.y += 5;
        }
      },
      null,
      this
    );
    this.input.on("pointermove", function(e) {
      console.log("x:" + e.x + "y:" + e.y);
    });

    this.bombs = this.physics.add.group();
    this.bomb2s = this.physics.add.group();
    this.physics.add.overlap(
      this.platforms,
      this.bombs,
      function(o1, o2) {
        o2.disableBody(true, true);
      },
      null,
      this
    );
    // this.physics.add.overlap(
    //   this.player,
    //   this.bombs,
    //   function(o1, o2) {
    //     o2.disableBody(true, true);
    //   },
    //   null,
    //   this
    // );
    this.k = 0;
    //動畫
    this.anims.create({
      key: "punchl",
      frames: this.anims.generateFrameNumbers("punch", {
        start: 1,
        end: 1
      }),
      frameRate: 0,
      repeat: -1
    });
    this.anims.create({
      key: "punchr",
      frames: this.anims.generateFrameNumbers("punch", {
        start: 0,
        end: 0
      }),
      frameRate: 0,
      repeat: -1
    });

    this.anims.create({
      key: "jumpl",
      frames: this.anims.generateFrameNumbers("strong", {
        start: 0,
        end: 1
      }),
      frameRate: 2,
      repeat: -1
    });
    this.anims.create({
      key: "jumpr",
      frames: this.anims.generateFrameNumbers("strong", {
        start: 3,
        end: 4
      }),
      frameRate: 2,
      repeat: -1
    });
    this.anims.create({
      key: "walkl",
      frames: this.anims.generateFrameNumbers("strong", {
        start: 15,
        end: 14
      }),
      frameRate: 4,
      repeat: 0
    });
    this.anims.create({
      key: "walkr",
      frames: this.anims.generateFrameNumbers("strong", {
        start: 16,
        end: 18
      }),
      frameRate: 5,
      repeat: 0
    });
    this.anims.create({
      key: "atkl",
      frames: this.anims.generateFrameNumbers("strong", {
        start: 5,
        end: 6
      }),
      frameRate: 2,
      repeat: 0
    });
    this.anims.create({
      key: "atkr",
      frames: this.anims.generateFrameNumbers("strong", {
        start: 7,
        end: 9
      }),
      frameRate: 2,
      repeat: 0
    });
    this.anims.create({
      key: "player2die",
      frames: this.anims.generateFrameNumbers("player2die", {
        start: 0,
        end: 7
      }),
      frameRate: 2,
      repeat: -1
    });
  }

  disable() {
    this.skill5s.children.iterate(function(c) {
      c.disableBody(true, true);
    });
  }
  disable1() {
    this.skills.children.iterate(function(c) {
      c.disableBody(true, true);
    });
  }
  p2die() {
    this.scene.stop("SceneA");
    this.scene.start("SceneB");
  }
  // disable() {
  //   this.bombs.children.iterate(function(c) {
  //     c.disableBody(true, true);
  //   });
  // }
  /*********************************************************************************************************************** */
  update() {
    // this.translate.update();
    // this.translate2.update();

    this.player.idle();
    this.physics.collide(this.player, this.skill4s, null, function(o1, o2) {
      if (o1.body.touching.left || o1.body.touching.right) {
        // this.collider.active = false;
        return false;
      }
      // return true;
    });
    if (this.cursors.right.isDown || this.keyD.isDown) {
      this.player.goRight();
    } else if (this.cursors.left.isDown || this.keyA.isDown) {
      this.player.goLeft();
    }
    if (this.keyALT.isDown && this.player.body.touching.down) {
      this.player.goJump();
    }
    if (this.keyF.isDown && this.player.body.enable) {
      let now1 = new Date().getTime();
      if (this.lastFireTime1 == null || now1 - this.lastFireTime1 > 5000) {
        this.hp.add(200);
      }
      this.lastFireTime1 = now1;
    }
    this.player.update();

    if (this.cursors.space.isDown && this.player.body.enable) {
      let now1 = new Date().getTime();
      if (this.lastFireTime1 == null || now1 - this.lastFireTime1 > 1500) {
        let skill1 = new Skill(this, this.player.x, this.player.y);
        this.skills.add(skill1);
        this.time.addEvent({
          delay: 2000,
          callback: this.disable1,
          callbackScope: this,
          loop: false
        });
        let self = this;

        if (this.player2.x > this.player.x) {
          this.punch = "punchr";
          this.skills.children.iterate(function(child) {
            child.anims.play(self.punch, true);
          });
          skill1.setVelocityX(100);
        } else if (this.player2.x < this.player.x) {
          this.punch = "punchl";
          this.skills.children.iterate(function(child) {
            child.anims.play(self.punch, true);
          });
          skill1.setVelocityX(-100);
        }

        this.lastFireTime1 = now1;
      }
    }

    let now = new Date().getTime();
    if (this.lastFireTime == null || now - this.lastFireTime > 4000) {
      for (var i = 0; i < 5; i++) {
        let skill5 = new Skill5(this, this.player2.x, this.player2.y);
        this.skill5s.add(skill5);
        skill5.setVelocityX(100 - i * 50);
        skill5.setVelocityY(100);
      }
      for (var j = 0; j < 5; j++) {
        let skill5 = new Skill5(this, this.player2.x, this.player2.y);
        this.skill5s.add(skill5);
        skill5.setVelocityX(100 - j * 50);
        skill5.setVelocityY(-100);
      }
      for (var k = 0; k < 5; k++) {
        let skill5 = new Skill5(this, this.player2.x, this.player2.y);
        this.skill5s.add(skill5);
        skill5.setVelocityX(100);
        skill5.setVelocityY(100 - k * 50);
      }
      for (var l = 0; l < 5; l++) {
        let skill5 = new Skill5(this, this.player2.x, this.player2.y);
        this.skill5s.add(skill5);
        skill5.setVelocityX(-100);
        skill5.setVelocityY(100 - l * 50);
      }
      this.time.addEvent({
        delay: 3000,
        callback: this.disable,
        callbackScope: this,
        loop: false
      });
      this.lastFireTime = now;
    }

    if (this.k === 0) {
      for (let x = 0; x < Math.floor(Math.random() * 1.5); x += 1) {
        let bomb = new Bomb(this, Math.random() * 800, 10);
        this.bombs.add(bomb);
        bomb.setVelocityY(100);
        // this.bombs.anims.play("fall_1", true);
      }
      this.k -= 50;
    } else if (this.k < 0) {
      this.k++;
    }
    //碰撞
    this.physics.add.overlap(
      this.player2,
      this.skills,
      function(o1, o2) {
        // o1.disableBody(true, true);
        o2.disableBody(true, true);
        this.hp2.decrease2(90);

        if (this.hp2.getvalue2() <= 0) {
          this.player2die = new player2die(this, 956, 700);
          this.player2die.anims.play("player2die", true);
          this.time.addEvent({
            delay: 7000,
            callback: this.p2die,
            callbackScope: this,
            loop: false
          });
        }
      },
      null,
      this
    );
    this.physics.add.overlap(
      this.player,
      this.bombs,
      function(o1, o2) {
        o2.disableBody(true, true);
        this.hp.decrease(10);
        if (this.hp.getvalue1() <= 0) {
          this.live -= 1;
          this.player.disableBody(true, true);
          this.player = new Player(this, 100, 100);

          this.physics.add.collider(this.player, this.platforms);
          this.physics.add.collider(this.player, this.platform2s);

          // this.physics.add.collider(this.player, this.translate);
          // this.physics.add.collider(this.player, this.translate2);
          this.cursors = this.input.keyboard.createCursorKeys();
          this.keyD = this.input.keyboard.addKey("D");
          this.keyA = this.input.keyboard.addKey("A");
          this.keyALT = this.input.keyboard.addKey("ALT");
          this.keyF = this.input.keyboard.addKey("F");
          this.hp = new Hp1(this, 50, 550);
          this.physics.add.overlap(
            this.player,
            this.skill3s,
            function(o1, o2) {
              o1.setVelocityY(-1000);
            },
            null,
            this
          );
          if (this.live < 0) {
            this.add.text(250, 150, "GameOver!", {
              fontSize: "64px",
              color: "#ff0000"
            });
            this.clickButton = this.add
              .text(300, 300, "[Restart Game]", {
                fontSize: "25px",
                fill: "#0f0"
              })
              .setInteractive({ useHandCursor: true })
              .on("pointerup", () => {
                this.restart();
              });
          }
        }
      },
      null,
      this
    );
    this.physics.add.overlap(
      this.player,
      this.skill5s,
      function(o1, o2) {
        o2.disableBody(true, true);
        this.hp.decrease(50);
        if (this.hp.getvalue1() <= 0) {
          this.live -= 1;
          this.player.disableBody(true, true);
          this.player = new Player(this, 100, 100);
          this.physics.add.collider(this.player, this.platforms);
          this.physics.add.collider(this.player, this.platform2s);
          // this.physics.add.collider(this.player, this.translate);
          // this.physics.add.collider(this.player, this.translate2);
          this.cursors = this.input.keyboard.createCursorKeys();
          this.keyD = this.input.keyboard.addKey("D");
          this.keyA = this.input.keyboard.addKey("A");
          this.keyALT = this.input.keyboard.addKey("ALT");
          this.keyF = this.input.keyboard.addKey("F");
          this.hp = new Hp1(this, 50, 550);
          this.physics.add.overlap(
            this.player,
            this.skill3s,
            function(o1, o2) {
              o1.setVelocityY(-1000);
            },
            null,
            this
          );
          if (this.live < 0) {
            this.add.text(250, 150, "GameOver!", {
              fontSize: "64px",
              color: "#ff0000"
            });
            this.clickButton = this.add
              .text(300, 300, "[Restart Game]", {
                fontSize: "25px",
                fill: "#0f0"
              })
              .setInteractive({ useHandCursor: true })
              .on("pointerup", () => {
                this.restart();
              });
          }
        }
      },
      null,
      this
    );
    this.physics.add.overlap(
      this.player,
      this.stair,
      function(o1, o2) {
        if (this.cursors.up.isDown) {
          o1.y -= 0.05;
        } else if (this.cursors.down.isDown) {
          o1.y += 0.05;
        }
      },
      null,
      this
    );
    this.physics.add.overlap(
      this.player,
      this.stair2,
      function(o1, o2) {
        if (this.cursors.up.isDown) {
          o1.y -= 0.05;
        } else if (this.cursors.down.isDown) {
          o1.y += 0.05;
        }
      },
      null,
      this
    );
    this.physics.add.overlap(
      this.player,
      this.stair3,
      function(o1, o2) {
        if (this.cursors.up.isDown) {
          o1.y -= 0.05;
        } else if (this.cursors.down.isDown) {
          o1.y += 0.05;
        }
      },
      null,
      this
    );
    this.physics.add.overlap(
      this.player,
      this.stair4,
      function(o1, o2) {
        if (this.cursors.up.isDown) {
          o1.y -= 0.05;
        } else if (this.cursors.down.isDown) {
          o1.y += 0.05;
        }
      },
      null,
      this
    );
    // this.scene.stop("SceneA");
    // this.scene.start("SceneC");
  }
}

//第二階
class SceneB extends Phaser.Scene {
  /*********************************************************************************************************************** */
  constructor() {
    super("SceneB");
    this.lastFireTime = null;
    this.lastFireTime1 = null;
    this.lastFireTime2 = null;
    this.lastFireTime3 = null;
    this.ele = "ele";
    this.live = 5;
  }

  /*********************************************************************************************************************** */
  preload() {
    this.load.image("bg02", "photo2/bg02.jpg");
    this.load.image("LASER", "1/LASER.jpg");
    this.load.image("ball1", "photo2/ball1.png");
    this.load.image("map", "photo/map.jpg");
    this.load.image("push", "photo3/push.png");
    this.load.image("sky", "photo/bg01.jpg");
    this.load.image("punch2", "1/punch.png");
    this.load.spritesheet("dude", "photo/dude.jpg", {
      frameWidth: 32,
      frameHeight: 48
    });
    this.load.spritesheet("move_l", "photo2/move1.png", {
      frameWidth: 87,
      frameHeight: 105
    });
    this.load.spritesheet("move_r", "photo2/move2.png", {
      frameWidth: 86,
      frameHeight: 105
    });
    this.load.spritesheet("atk2_r", "photo2/attack_r.png", {
      frameWidth: 528,
      frameHeight: 400
    });
    this.load.spritesheet("ele", "photo2/laser.png", {
      frameWidth: 1000,
      frameHeight: 30
    });
    this.load.spritesheet("p3die1", "photo2/p3die1.png", {
      frameWidth: 236,
      frameHeight: 172
    });
    this.load.spritesheet("p3die2", "photo2/p3die2.png", {
      frameWidth: 1368,
      frameHeight: 868
    });
    this.load.image("ground", "photo2/lotus2.jpg");
    this.load.image("ground", "photo/ground.jpg");
    this.load.image("bottom2", "photo2/bottom2.jpg");
    this.load.image("bot", "photo2/bot.png");
    this.load.image("iron", "photo2/iron.png");
  }

  /*********************************************************************************************************************** */
  create() {
    this.add.image(470, 300, "bg02");
    this.add.image(36, 64, "lotus");
    this.add.image(70, 10, "map");
    this.add.text(10, 550, "Hp", {
      fontSize: "20px",
      color: "#ff0000"
    });
    this.e = this.physics.add.staticGroup();
    this.platforms = this.physics.add.staticGroup();

    // this.platforms.create(600,400,"ground");
    // this.platforms.create(50,250,"ground");
    // this.platforms.create(750,220,"ground");
    this.platforms.create(470, 530, "bottom2").refreshBody();
    this.player = new Player(this, 100, 100);
    this.hp = new Hp1(this, 50, 550);
    this.hp2 = new Hp3(this, 50, 50);
    this.physics.add.collider(this.player, this.platforms);
    this.cursors = this.input.keyboard.createCursorKeys();
    this.keyD = this.input.keyboard.addKey("D");
    this.keyA = this.input.keyboard.addKey("A");
    this.keyALT = this.input.keyboard.addKey("ALT");
    this.keyF = this.input.keyboard.addKey("F");
    this.skills = this.physics.add.group();
    this.skill2s = this.physics.add.group();
    this.skill3s = this.physics.add.group();
    this.skill4s = this.physics.add.staticGroup();
    this.skill6s = this.physics.add.group();
    this.physics.add.collider(this.platforms, this.skill4s);

    this.skill6 = new Skill6(this, 100, 100);

    this.physics.add.collider(this.platforms, this.skill6);
    this.skill6.setVelocityY(250);
    this.skill6.setVelocityX(100);
    // this.physics.add.overlap(
    //   this.player,
    //   this.skill2s,
    //   function(o1, o2) {
    //     if (o1.x > o2.x) {
    //       o1.x = o1.x + 50;
    //     } else if (o1.x < o2.x) {
    //       o1.x = o1.x - 50;
    //     }

    //     o2.disableBody(true, true);
    //   },
    //   null,
    //   this
    // );
    this.physics.add.overlap(
      this.player,
      this.skill3s,
      function(o1, o2) {
        o1.setVelocityY(-1000);
      },
      null,
      this
    );

    this.player2 = new Player2(this, 750, 350);

    this.physics.add.collider(this.player2, this.platforms);

    this.bombs = this.physics.add.group();
    this.bomb2s = this.physics.add.group();

    this.physics.add.overlap(
      this.platforms,
      this.bombs,
      function(o1, o2) {
        o2.disableBody(true, true);
      },
      null,
      this
    );
    this.physics.add.overlap(
      this.platforms,
      this.bomb2s,
      function(o1, o2) {
        o2.disableBody(true, true);
      },
      null,
      this
    );

    this.k = 0;
    this.k2 = 0;
    this.anims.create({
      key: "p3die1",
      frames: this.anims.generateFrameNumbers("p3die1", {
        start: 0,
        end: 14
      }),
      frameRate: 2,
      repeat: -1
    });
    this.anims.create({
      key: "p3die2",
      frames: this.anims.generateFrameNumbers("p3die2", {
        start: 0,
        end: 3
      }),
      frameRate: 1,
      repeat: -1
    });
    this.anims.create({
      key: "ele",
      frames: this.anims.generateFrameNumbers("ele", { start: 0, end: 6 }),
      frameRate: 12,
      repeat: -1
    });
    this.anims.create({
      key: "move_l",
      frames: this.anims.generateFrameNumbers("move_l", { start: 0, end: 6 }),
      frameRate: 6,
      repeat: -1
    });
    this.anims.create({
      key: "move_r",
      frames: this.anims.generateFrameNumbers("move_r", { start: 0, end: 6 }),
      frameRate: 6,
      repeat: -1
    });
    this.anims.create({
      key: "atk2_r",
      frames: this.anims.generateFrameNumbers("atk2_r", { start: 0, end: 13 }),
      frameRate: 1,
      repeat: 0
    });
    this.s = 1;
  }

  disable() {
    this.skills.children.iterate(function(c) {
      c.disableBody(true, true);
    });
  }
  disable2() {
    this.skill2s.children.iterate(function(c) {
      c.disableBody(true, true);
    });
  }
  disable3() {
    this.skill3s.children.iterate(function(c) {
      c.disableBody(true, true);
    });
  }
  disable4() {
    this.skill4s.children.iterate(function(c) {
      c.disableBody(true, true);
    });
  }
  electric() {
    this.e
      .create(300, 475, "ele")
      .setScale(3)
      .refreshBody();
  }
  ball() {
    this.e.create(300, 475, "ele").refreshBody();
  }
  disable5() {
    this.e.children.iterate(function(c) {
      c.disableBody(true, true);
    });
  }
  disable6() {
    this.e.children.iterate(function(c) {
      c.disableBody(true, true);
    });
  }
  scene2start() {
    this.scene.start("SceneB");
  }
  p3die() {
    this.player3die.anims.play("p3die2", true);
  }
  p3die2() {
    this.scene.start("SceneC");
  }

  /*********************************************************************************************************************** */
  update() {
    // this.lastFireTime2 = now2;
    this.player.idle();
    this.physics.collide(this.player, this.skill4s, null, function(o1, o2) {
      if (o1.body.touching.left || o1.body.touching.right) {
        return true;
      }
      return true;
    });
    if (this.cursors.right.isDown || this.keyD.isDown) {
      this.player.goRight();
    } else if (this.cursors.left.isDown || this.keyA.isDown) {
      this.player.goLeft();
    }
    if (this.keyALT.isDown && this.player.body.touching.down) {
      this.player.goJump();
    }
    if (this.keyF.isDown && this.player.body.enable) {
      let now1 = new Date().getTime();
      if (this.lastFireTime1 == null || now1 - this.lastFireTime1 > 5000) {
        this.hp.add(200);
      }
      this.lastFireTime1 = now1;
    }
    this.player.update();

    if (this.cursors.space.isDown && this.player.body.enable) {
      let now1 = new Date().getTime();
      this.player.attacking();
      if (this.lastFireTime1 == null || now1 - this.lastFireTime1 > 1500) {
        let skill = new Skill(this, this.player.x, this.player.y);
        this.skills.add(skill);
        this.time.addEvent({
          delay: 1500,
          callback: this.disable,
          callbackScope: this,
          loop: false
        });
        let self = this;
        if (this.player2.x > this.player.x) {
          this.punch = "punchr";
          this.skills.children.iterate(function(child) {
            child.anims.play(self.punch, true);
          });
          skill.setVelocityX(100);
        } else if (this.player2.x < this.player.x) {
          this.punch = "punchl";
          this.skills.children.iterate(function(child) {
            child.anims.play(self.punch, true);
          });
          skill.setVelocityX(-100);
        }
        this.lastFireTime1 = now1;
      }
    }
    this.player2.idle();

    let now = new Date().getTime();
    if (this.player.x > this.player2.x) {
      if (this.lastFireTime == null || now - this.lastFireTime > 1000) {
        this.player2.goRight();
        // this.player2.anims.play("move_r", true);
        this.lastFireTime = now;
        let now2 = new Date().getTime();
        if (this.player.x - this.player2.x < 100) {
          if (this.lastFireTime2 == null || now2 - this.lastFireTime2 > 1500) {
            if (Math.random() > 0.5) {
              let skill2 = new Skill2(
                this,
                this.player2.x,
                this.player2.y + 250
              );
              this.skill2s.add(skill2);
              skill2.setVelocityX(100);

              this.lastFireTime2 = now2;
              this.time.addEvent({
                delay: 2000,
                callback: this.disable2,
                callbackScope: this,
                loop: false
              });
            } else if (Math.random < 0.4) {
              let skill31 = new Skill3(
                this,
                this.player2.x + 550,
                this.player2.y
              );
              this.skill3s.add(skill31);
              let skill32 = new Skill3(
                this,
                this.player2.x + 350,
                this.player2.y
              );
              this.skill3s.add(skill32);
              let skill33 = new Skill3(
                this,
                this.player2.x + 150,
                this.player2.y
              );
              this.skill3s.add(skill33);
              this.lastFireTime2 = now2;
              this.time.addEvent({
                delay: 2000,
                callback: this.disable3,
                callbackScope: this,
                loop: false
              });
            } else if (Math.random() > 0.9) {
              this.skill4s.create(650, 445, "iron");
              this.skill4s.create(250, 445, "iron");

              this.time.addEvent({
                delay: 10000,
                callback: this.disable4,
                callbackScope: this,
                loop: false
              });
              this.time.addEvent({
                delay: 3000,
                callback: this.electric,
                callbackScope: this,
                loop: false
              });
              this.time.addEvent({
                delay: 8000,
                callback: this.disable5,
                callbackScope: this,
                loop: false
              });
            }
          }
        }
        // this.skill2.goRight();
      }
    } else if (this.player.x < this.player2.x) {
      if (this.lastFireTime == null || now - this.lastFireTime > 1000) {
        this.player2.goLeft();
        this.lastFireTime = now;
        let now2 = new Date().getTime();
        if (this.player2.x - this.player.x < 100) {
          if (this.lastFireTime2 == null || now2 - this.lastFireTime2 > 1500) {
            if (Math.random() > 0.3) {
              let skill2 = new Skill2(
                this,
                this.player2.x,
                this.player2.y + 250
              );
              this.skill2s.add(skill2);
              skill2.setVelocityX(-100);
              this.lastFireTime2 = now2;
              // } else if (Math.random > 0.3) {

              //   skill6.update();
              //   this.lastFireTime2 = now2;
            } else if (Math.random() < 0.4) {
              let skill31 = new Skill3(
                this,
                this.player2.x - 550,
                this.player2.y
              );
              this.skill3s.add(skill31);
              let skill32 = new Skill3(
                this,
                this.player2.x - 350,
                this.player2.y
              );
              this.skill3s.add(skill32);
              let skill33 = new Skill3(
                this,
                this.player2.x - 150,
                this.player2.y
              );
              this.skill3s.add(skill33);
              this.lastFireTime2 = now2;
              this.time.addEvent({
                delay: 2000,
                callback: this.disable3,
                callbackScope: this,
                loop: false
              });
            }
          }
        }
      }
    }
    this.player2.update();
    if (this.k === 0) {
      for (let x = 0; x < Math.floor(Math.random() * 2); x += 1) {
        let bomb = new Bomb(this, Math.random() * 800, 10);
        this.bombs.add(bomb);
        bomb.setVelocityY(100);
      }
      this.k -= 150;
    } else if (this.k < 0) {
      this.k++;
    }
    if (this.k2 === 0) {
      for (let x = 0; x < Math.floor(Math.random() * 2); x += 1) {
        let bomb2 = new Bomb2(this, Math.random() * 800, 10);
        this.bomb2s.add(bomb2);
        bomb2.setVelocityY(100);
      }
      this.k2 -= 200;
    } else if (this.k2 < 0) {
      this.k2++;
    }

    // this.scene.start("SceneC");
    let self = this;
    this.e.children.iterate(function(child) {
      child.anims.play(self.ele, true);
    });
    // }
    //碰撞
    this.physics.add.overlap(
      this.player,
      this.bombs,
      function(o1, o2) {
        o2.disableBody(true, true);
        this.hp.decrease(10);
        if (this.hp.getvalue1() <= 0) {
          this.live -= 1;
          this.player.disableBody(true, true);
          this.player = new Player(this, 100, 100);

          this.physics.add.collider(this.player, this.platforms);
          this.physics.add.collider(this.player, this.platform2s);

          // this.physics.add.collider(this.player, this.translate);
          // this.physics.add.collider(this.player, this.translate2);
          this.cursors = this.input.keyboard.createCursorKeys();
          this.keyD = this.input.keyboard.addKey("D");
          this.keyA = this.input.keyboard.addKey("A");
          this.keyALT = this.input.keyboard.addKey("ALT");
          this.keyF = this.input.keyboard.addKey("F");
          this.hp = new Hp1(this, 50, 550);
          this.physics.add.overlap(
            this.player,
            this.skill3s,
            function(o1, o2) {
              o1.setVelocityY(-1000);
            },
            null,
            this
          );
          if (this.live < 0) {
            this.add.text(250, 150, "GameOver!", {
              fontSize: "64px",
              color: "#ff0000"
            });
            this.clickButton = this.add
              .text(300, 300, "[Restart Game]", {
                fontSize: "25px",
                fill: "#0f0"
              })
              .setInteractive({ useHandCursor: true })
              .on("pointerup", () => {
                this.scene.start("SceneB");
              });
          }
        }
      },
      null,
      this
    );
    this.physics.add.overlap(
      this.player,
      this.bomb2s,
      function(o1, o2) {
        o2.disableBody(true, true);
        this.hp.decrease(10);
        if (this.hp.getvalue1() <= 0) {
          this.live -= 1;
          this.player.disableBody(true, true);
          this.player = new Player(this, 100, 100);

          this.physics.add.collider(this.player, this.platforms);
          this.physics.add.collider(this.player, this.platform2s);

          // this.physics.add.collider(this.player, this.translate);
          // this.physics.add.collider(this.player, this.translate2);
          this.cursors = this.input.keyboard.createCursorKeys();
          this.keyD = this.input.keyboard.addKey("D");
          this.keyA = this.input.keyboard.addKey("A");
          this.keyALT = this.input.keyboard.addKey("ALT");
          this.keyF = this.input.keyboard.addKey("F");
          this.hp = new Hp1(this, 50, 550);
          this.physics.add.overlap(
            this.player,
            this.skill3s,
            function(o1, o2) {
              o1.setVelocityY(-1000);
            },
            null,
            this
          );
          if (this.live < 0) {
            this.add.text(250, 150, "GameOver!", {
              fontSize: "64px",
              color: "#ff0000"
            });
            this.clickButton = this.add
              .text(300, 300, "[Restart Game]", {
                fontSize: "25px",
                fill: "#0f0"
              })
              .setInteractive({ useHandCursor: true })
              .on("pointerup", () => {
                this.scene.start("SceneB");
              });
          }
        }
      },
      null,
      this
    );
    this.physics.add.overlap(
      this.player,
      this.skill6,
      function(o1, o2) {
        this.hp.decrease(0.001);
        if (this.hp.getvalue1() <= 0) {
          this.live -= 1;
          this.player.disableBody(true, true);
          this.player = new Player(this, 100, 100);

          this.physics.add.collider(this.player, this.platforms);
          this.physics.add.collider(this.player, this.platform2s);

          // this.physics.add.collider(this.player, this.translate);
          // this.physics.add.collider(this.player, this.translate2);
          this.cursors = this.input.keyboard.createCursorKeys();
          this.keyD = this.input.keyboard.addKey("D");
          this.keyA = this.input.keyboard.addKey("A");
          this.keyALT = this.input.keyboard.addKey("ALT");
          this.hp = new Hp1(this, 50, 550);
          this.physics.add.overlap(
            this.player,
            this.skill3s,
            function(o1, o2) {
              o1.setVelocityY(-1000);
            },
            null,
            this
          );
          if (this.live < 0) {
            this.add.text(250, 150, "GameOver!", {
              fontSize: "64px",
              color: "#ff0000"
            });
            this.clickButton = this.add
              .text(300, 300, "[Restart Game]", {
                fontSize: "25px",
                fill: "#0f0"
              })
              .setInteractive({ useHandCursor: true })
              .on("pointerup", () => {
                this.scene.start("SceneB");
              });
          }
        }
      },
      null,
      this
    );
    this.physics.add.overlap(
      this.player,
      this.e,
      function(o1, o2) {
        this.hp.decrease(10);
        if (this.hp.getvalue1() <= 0) {
          this.live -= 1;
          this.player.disableBody(true, true);
          this.player = new Player(this, 100, 100);

          this.physics.add.collider(this.player, this.platforms);
          this.physics.add.collider(this.player, this.platform2s);

          // this.physics.add.collider(this.player, this.translate);
          // this.physics.add.collider(this.player, this.translate2);
          this.cursors = this.input.keyboard.createCursorKeys();
          this.keyD = this.input.keyboard.addKey("D");
          this.keyA = this.input.keyboard.addKey("A");
          this.keyALT = this.input.keyboard.addKey("ALT");
          this.hp = new Hp1(this, 50, 550);
          this.physics.add.overlap(
            this.player,
            this.skill3s,
            function(o1, o2) {
              o1.setVelocityY(-1000);
            },
            null,
            this
          );
          if (this.live < 0) {
            this.add.text(250, 150, "GameOver!", {
              fontSize: "64px",
              color: "#ff0000"
            });
            this.clickButton = this.add
              .text(300, 300, "[Restart Game]", {
                fontSize: "25px",
                fill: "#0f0"
              })
              .setInteractive({ useHandCursor: true })
              .on("pointerup", () => {
                this.scene.start("SceneB");
              });
          }
        }
      },
      null,
      this
    );
    this.physics.add.overlap(
      this.player,
      this.skill2s,
      function(o1, o2) {
        if (o1.x > o2.x) {
          o1.x = o1.x + 50;
        } else if (o1.x < o2.x) {
          o1.x = o1.x - 50;
        }

        o2.disableBody(true, true);
        this.hp.decrease(10);
        if (this.hp.getvalue1() <= 0) {
          this.live -= 1;
          this.player.disableBody(true, true);
          this.player = new Player(this, 100, 100);

          this.physics.add.collider(this.player, this.platforms);
          this.physics.add.collider(this.player, this.platform2s);

          // this.physics.add.collider(this.player, this.translate);
          // this.physics.add.collider(this.player, this.translate2);
          this.cursors = this.input.keyboard.createCursorKeys();
          this.keyD = this.input.keyboard.addKey("D");
          this.keyA = this.input.keyboard.addKey("A");
          this.keyALT = this.input.keyboard.addKey("ALT");
          this.hp = new Hp1(this, 50, 550);
          this.physics.add.overlap(
            this.player,
            this.skill3s,
            function(o1, o2) {
              o1.setVelocityY(-1000);
            },
            null,
            this
          );
          if (this.live < 0) {
            this.add.text(250, 150, "GameOver!", {
              fontSize: "64px",
              color: "#ff0000"
            });
            this.clickButton = this.add
              .text(300, 300, "[Restart Game]", {
                fontSize: "25px",
                fill: "#0f0"
              })
              .setInteractive({ useHandCursor: true })
              .on("pointerup", () => {
                this.scene.start("SceneB");
              });
          }
        }
      },
      null,
      this
    );
    this.physics.add.overlap(
      this.player2,
      this.skills,
      function(o1, o2) {
        // o1.disableBody(true, true);
        o2.disableBody(true, true);
        this.hp2.decrease2(45);
        if (this.hp2.getvalue2() <= 0) {
          o1.disableBody(true, true);
          this.player3die = new player3die(this, 500, 300);
          this.player3die.anims.play("p3die1", true);
          this.time.addEvent({
            delay: 7000,
            callback: this.p3die,
            callbackScope: this,
            loop: false
          });
          this.time.addEvent({
            delay: 11000,
            callback: this.p3die2,
            callbackScope: this,
            loop: false
          });
        }
      },
      null,
      this
    );
  }
}

// 第三階

class SceneC extends Phaser.Scene {
  /*********************************************************************************************************************** */
  constructor() {
    super("SceneC");
    this.lastFireTime = null;
    this.lastFireTime1 = null;
    this.lastFireTime2 = null;
    this.lastFireTime3 = null;
    this.ele = "ele";
    this.live = 5;
  }

  /*********************************************************************************************************************** */
  preload() {
    this.load.image("bg03", "photo2/bg03.jpg");
    this.load.image("ball1", "photo2/ball1.png");
    this.load.image("map", "photo/map.jpg");
    this.load.image("push", "photo3/push.png");
    this.load.image("sky", "photo/bg01.jpg");
    this.load.image("punch2", "1/punch.png");
    this.load.image("building", "photo2/buliding.png");
    this.load.spritesheet("dude", "photo/dude.jpg", {
      frameWidth: 32,
      frameHeight: 48
    });
    this.load.spritesheet("move2_l", "photo3/move2.png", {
      frameWidth: 255,
      frameHeight: 252
    });
    this.load.spritesheet("move2_r", "photo3/move2r.png", {
      frameWidth: 255,
      frameHeight: 252
    });
    this.load.spritesheet("atk2_r", "photo2/attack_r.png", {
      frameWidth: 528,
      frameHeight: 400
    });
    this.load.spritesheet("ele", "photo2/laser.png", {
      frameWidth: 1000,
      frameHeight: 30
    });
    this.load.spritesheet("p4die1", "photo3/p4die1.png", {
      frameWidth: 416,
      frameHeight: 564
    });
    this.load.spritesheet("p4die2", "photo3/p4die2.png", {
      frameWidth: 416,
      frameHeight: 564
    });
    this.load.image("ground", "photo2/lotus2.jpg");
    this.load.image("ground", "photo/ground.jpg");
    this.load.image("bottom2", "photo2/bottom2.jpg");
    this.load.image("bot", "photo2/bot.png");
    this.load.image("iron", "photo2/iron.png");
  }

  /*********************************************************************************************************************** */
  create() {
    this.add.image(470, 300, "bg03");
    this.add.image(36, 64, "lotus");
    this.add.image(70, 10, "map");
    this.add.text(10, 550, "Hp", {
      fontSize: "20px",
      color: "#ff0000"
    });
    this.e = this.physics.add.staticGroup();
    this.platforms = this.physics.add.staticGroup();

    // this.platforms.create(600,400,"ground");
    // this.platforms.create(50,250,"ground");
    // this.platforms.create(750,220,"ground");
    this.platforms.create(470, 530, "bottom2").refreshBody();
    this.player = new Player(this, 100, 100);
    this.hp = new Hp1(this, 50, 550);
    this.hp2 = new Hp3(this, 50, 50);
    this.physics.add.collider(this.player, this.platforms);
    this.cursors = this.input.keyboard.createCursorKeys();
    this.keyD = this.input.keyboard.addKey("D");
    this.keyA = this.input.keyboard.addKey("A");
    this.keyALT = this.input.keyboard.addKey("ALT");
    this.keyF = this.input.keyboard.addKey("F");
    this.skills = this.physics.add.group();
    this.skill2s = this.physics.add.group();
    this.skill3s = this.physics.add.group();
    this.skill4s = this.physics.add.staticGroup();
    this.skill6s = this.physics.add.group();
    this.physics.add.collider(this.platforms, this.skill4s);
    this.skill6 = new Skill6(this, 100, 100);
    this.physics.add.collider(this.platforms, this.skill6);
    this.skill6.setVelocityY(250);
    this.skill6.setVelocityX(100);
    this.physics.add.overlap(
      this.player,
      this.skill3s,
      function(o1, o2) {
        o1.setVelocityY(-1000);
      },
      null,
      this
    );
    this.player2 = new Player4(this, 750, 350);
    this.physics.add.collider(this.player2, this.platforms);
    this.bombs = this.physics.add.group();
    this.bomb2s = this.physics.add.group();
    this.bomb3s = this.physics.add.group();
    this.physics.add.overlap(
      this.platforms,
      this.bombs,
      function(o1, o2) {
        o2.disableBody(true, true);
      },
      null,
      this
    );
    this.physics.add.overlap(
      this.platforms,
      this.bomb3s,
      function(o1, o2) {
        o2.disableBody(true, true);
      },
      null,
      this
    );
    this.physics.add.overlap(
      this.platforms,
      this.bomb2s,
      function(o1, o2) {
        o2.disableBody(true, true);
      },
      null,
      this
    );
    this.k = 0;
    this.k2 = 0;
    this.k3 = 0;
    this.anims.create({
      key: "p4die1",
      frames: this.anims.generateFrameNumbers("p4die1", {
        start: 0,
        end: 9
      }),
      frameRate: 2,
      repeat: -1
    });
    this.anims.create({
      key: "p4die2",
      frames: this.anims.generateFrameNumbers("p4die2", {
        start: 0,
        end: 4
      }),
      frameRate: 1,
      repeat: -1
    });
    this.anims.create({
      key: "ele",
      frames: this.anims.generateFrameNumbers("ele", { start: 0, end: 6 }),
      frameRate: 12,
      repeat: -1
    });
    this.anims.create({
      key: "move2_l",
      frames: this.anims.generateFrameNumbers("move2_l", { start: 0, end: 10 }),
      frameRate: 11,
      repeat: -1
    });
    this.anims.create({
      key: "move2_r",
      frames: this.anims.generateFrameNumbers("move2_r", { start: 0, end: 11 }),
      frameRate: 11,
      repeat: -1
    });
    this.anims.create({
      key: "atk2_r",
      frames: this.anims.generateFrameNumbers("atk2_r", { start: 0, end: 13 }),
      frameRate: 1,
      repeat: 0
    });
    this.s = 1;
  }

  disable() {
    this.skills.children.iterate(function(c) {
      c.disableBody(true, true);
    });
  }
  disable2() {
    this.skill2s.children.iterate(function(c) {
      c.disableBody(true, true);
    });
  }
  disable3() {
    this.skill3s.children.iterate(function(c) {
      c.disableBody(true, true);
    });
  }
  disable4() {
    this.skill4s.children.iterate(function(c) {
      c.disableBody(true, true);
    });
  }
  electric() {
    this.e
      .create(300, 475, "ele")
      .setScale(3)
      .refreshBody();
  }
  ball() {
    this.e.create(300, 475, "ele").refreshBody();
  }
  disable5() {
    this.e.children.iterate(function(c) {
      c.disableBody(true, true);
    });
  }
  disable6() {
    this.e.children.iterate(function(c) {
      c.disableBody(true, true);
    });
  }
  scene2start() {
    this.scene.start("SceneB");
  }
  p4die() {
    this.player4die.anims.play("p4die2", true);
  }
  p4die2() {
    this.add.text(50, 150, "YOU WIN!", {
      fontSize: "200px",
      color: "#ff0000"
    });
    this.clickButton = this.add
      .text(300, 300, "[Restart Game]", {
        fontSize: "25px",
        fill: "#0f0"
      })
      .setInteractive({ useHandCursor: true })
      .on("pointerup", () => {
        this.scene.start("SceneA");
      });
  }

  /*********************************************************************************************************************** */
  update() {
    // this.lastFireTime2 = now2;
    this.player.idle();
    this.physics.collide(this.player, this.skill4s, null, function(o1, o2) {
      if (o1.body.touching.left || o1.body.touching.right) {
        return true;
      }
      return true;
    });
    if (this.cursors.right.isDown || this.keyD.isDown) {
      this.player.goRight();
    } else if (this.cursors.left.isDown || this.keyA.isDown) {
      this.player.goLeft();
    }
    if (this.keyALT.isDown && this.player.body.touching.down) {
      this.player.goJump();
    }
    if (this.keyF.isDown && this.player.body.enable) {
      let now1 = new Date().getTime();
      if (this.lastFireTime1 == null || now1 - this.lastFireTime1 > 5000) {
        this.hp.add(200);
      }
      this.lastFireTime1 = now1;
    }
    this.player.update();

    if (this.cursors.space.isDown && this.player.body.enable) {
      let now1 = new Date().getTime();
      this.player.attacking();
      if (this.lastFireTime1 == null || now1 - this.lastFireTime1 > 1500) {
        let skill = new Skill(this, this.player.x, this.player.y);
        this.skills.add(skill);
        this.time.addEvent({
          delay: 1500,
          callback: this.disable,
          callbackScope: this,
          loop: false
        });
        let self = this;
        if (this.player2.x > this.player.x) {
          this.punch = "punchr";
          this.skills.children.iterate(function(child) {
            child.anims.play(self.punch, true);
          });
          skill.setVelocityX(100);
        } else if (this.player2.x < this.player.x) {
          this.punch = "punchl";
          this.skills.children.iterate(function(child) {
            child.anims.play(self.punch, true);
          });
          skill.setVelocityX(-100);
        }
        this.lastFireTime1 = now1;
      }
    }
    this.player2.idle();

    let now = new Date().getTime();
    if (this.player.x > this.player2.x) {
      if (this.lastFireTime == null || now - this.lastFireTime > 1000) {
        this.player2.goRight();
        // this.player2.anims.play("move_r", true);
        this.lastFireTime = now;
        let now2 = new Date().getTime();
        if (this.player.x - this.player2.x < 100) {
          if (this.lastFireTime2 == null || now2 - this.lastFireTime2 > 1500) {
            if (Math.random() > 0.5) {
              let skill2 = new Skill2(
                this,
                this.player2.x,
                this.player2.y + 250
              );
              this.skill2s.add(skill2);
              skill2.setVelocityX(100);

              this.lastFireTime2 = now2;
              this.time.addEvent({
                delay: 2000,
                callback: this.disable2,
                callbackScope: this,
                loop: false
              });
            } else if (Math.random < 0.4) {
              let skill31 = new Skill3(
                this,
                this.player2.x + 550,
                this.player2.y + 100
              );
              this.skill3s.add(skill31);
              let skill32 = new Skill3(
                this,
                this.player2.x + 350,
                this.player2.y + 100
              );
              this.skill3s.add(skill32);
              let skill33 = new Skill3(
                this,
                this.player2.x + 150,
                this.player2.y + 100
              );
              this.skill3s.add(skill33);
              this.lastFireTime2 = now2;
              this.time.addEvent({
                delay: 2000,
                callback: this.disable3,
                callbackScope: this,
                loop: false
              });
            } else if (Math.random() > 0.9) {
              this.skill4s.create(650, 445, "iron");
              this.skill4s.create(250, 445, "iron");

              this.time.addEvent({
                delay: 10000,
                callback: this.disable4,
                callbackScope: this,
                loop: false
              });
              this.time.addEvent({
                delay: 3000,
                callback: this.electric,
                callbackScope: this,
                loop: false
              });
              this.time.addEvent({
                delay: 8000,
                callback: this.disable5,
                callbackScope: this,
                loop: false
              });
            }
          }
        }
        // this.skill2.goRight();
      }
    } else if (this.player.x < this.player2.x) {
      if (this.lastFireTime == null || now - this.lastFireTime > 1000) {
        this.player2.goLeft();
        this.lastFireTime = now;
        let now2 = new Date().getTime();
        if (this.player2.x - this.player.x < 100) {
          if (this.lastFireTime2 == null || now2 - this.lastFireTime2 > 1500) {
            if (Math.random() > 0.3) {
              let skill2 = new Skill2(
                this,
                this.player2.x,
                this.player2.y + 250
              );
              this.skill2s.add(skill2);
              skill2.setVelocityX(-100);
              this.lastFireTime2 = now2;
              // } else if (Math.random > 0.3) {

              //   skill6.update();
              //   this.lastFireTime2 = now2;
              // } else {
              let skill31 = new Skill3(
                this,
                this.player2.x - 550,
                this.player2.y + 100
              );
              this.skill3s.add(skill31);
              let skill32 = new Skill3(
                this,
                this.player2.x - 350,
                this.player2.y + 100
              );
              this.skill3s.add(skill32);
              let skill33 = new Skill3(
                this,
                this.player2.x - 150,
                this.player2.y + 100
              );
              this.skill3s.add(skill33);
              this.lastFireTime2 = now2;
              this.time.addEvent({
                delay: 2000,
                callback: this.disable3,
                callbackScope: this,
                loop: false
              });
            }
          }
        }
      }
    }
    this.player2.update();
    if (this.k === 0) {
      for (let x = 0; x < Math.floor(Math.random() * 2); x += 1) {
        let bomb = new Bomb(this, Math.random() * 800, 10);
        this.bombs.add(bomb);
        bomb.setVelocityY(100);
      }
      this.k -= 150;
    } else if (this.k < 0) {
      this.k++;
    }
    if (this.k2 === 0) {
      for (let x = 0; x < Math.floor(Math.random() * 2); x += 1) {
        let bomb2 = new Bomb2(this, Math.random() * 800, 10);
        this.bomb2s.add(bomb2);
        bomb2.setVelocityY(100);
      }
      this.k2 -= 200;
    } else if (this.k2 < 0) {
      this.k2++;
    }
    if (this.k3 === 0) {
      for (let x = 0; x < Math.floor(Math.random() * 2); x += 1) {
        let bomb3 = new Bomb3(this, Math.random() * 800, 10);
        this.bomb3s.add(bomb3);
        bomb3.setVelocityY(100);
      }
      this.k3 -= 500;
    } else if (this.k3 < 0) {
      this.k3++;
    }

    // this.scene.start("SceneC");
    let self = this;
    this.e.children.iterate(function(child) {
      child.anims.play(self.ele, true);
    });
    // }
    //碰撞
    this.physics.add.overlap(
      this.player,
      this.bombs,
      function(o1, o2) {
        o2.disableBody(true, true);
        this.hp.decrease(10);
        if (this.hp.getvalue1() <= 0) {
          this.live -= 1;
          this.player.disableBody(true, true);
          this.player = new Player(this, 100, 100);

          this.physics.add.collider(this.player, this.platforms);
          this.physics.add.collider(this.player, this.platform2s);

          // this.physics.add.collider(this.player, this.translate);
          // this.physics.add.collider(this.player, this.translate2);
          this.cursors = this.input.keyboard.createCursorKeys();
          this.keyD = this.input.keyboard.addKey("D");
          this.keyA = this.input.keyboard.addKey("A");
          this.keyALT = this.input.keyboard.addKey("ALT");
          this.keyF = this.input.keyboard.addKey("F");
          this.hp = new Hp1(this, 50, 550);
          this.physics.add.overlap(
            this.player,
            this.skill3s,
            function(o1, o2) {
              o1.setVelocityY(-1000);
            },
            null,
            this
          );
          if (this.live < 0) {
            this.add.text(250, 150, "GameOver!", {
              fontSize: "64px",
              color: "#ff0000"
            });
            this.clickButton = this.add
              .text(300, 300, "[Restart Game]", {
                fontSize: "25px",
                fill: "#0f0"
              })
              .setInteractive({ useHandCursor: true })
              .on("pointerup", () => {
                this.scene.start("SceneB");
              });
          }
        }
      },
      null,
      this
    );
    this.physics.add.overlap(
      this.player,
      this.bomb2s,
      function(o1, o2) {
        o2.disableBody(true, true);
        this.hp.decrease(10);
        if (this.hp.getvalue1() <= 0) {
          this.live -= 1;
          this.player.disableBody(true, true);
          this.player = new Player(this, 100, 100);

          this.physics.add.collider(this.player, this.platforms);
          this.physics.add.collider(this.player, this.platform2s);

          // this.physics.add.collider(this.player, this.translate);
          // this.physics.add.collider(this.player, this.translate2);
          this.cursors = this.input.keyboard.createCursorKeys();
          this.keyD = this.input.keyboard.addKey("D");
          this.keyA = this.input.keyboard.addKey("A");
          this.keyALT = this.input.keyboard.addKey("ALT");
          this.keyF = this.input.keyboard.addKey("F");
          this.hp = new Hp1(this, 50, 550);
          this.physics.add.overlap(
            this.player,
            this.skill3s,
            function(o1, o2) {
              o1.setVelocityY(-1000);
            },
            null,
            this
          );
          if (this.live < 0) {
            this.add.text(250, 150, "GameOver!", {
              fontSize: "64px",
              color: "#ff0000"
            });
            this.clickButton = this.add
              .text(300, 300, "[Restart Game]", {
                fontSize: "25px",
                fill: "#0f0"
              })
              .setInteractive({ useHandCursor: true })
              .on("pointerup", () => {
                this.scene.start("SceneB");
              });
          }
        }
      },
      null,
      this
    );
    this.physics.add.overlap(
      this.player,
      this.bomb3s,
      function(o1, o2) {
        o2.disableBody(true, true);
        this.hp.decrease(10);
        if (this.hp.getvalue1() <= 0) {
          this.live -= 1;
          this.player.disableBody(true, true);
          this.player = new Player(this, 100, 100);

          this.physics.add.collider(this.player, this.platforms);
          this.physics.add.collider(this.player, this.platform2s);

          // this.physics.add.collider(this.player, this.translate);
          // this.physics.add.collider(this.player, this.translate2);
          this.cursors = this.input.keyboard.createCursorKeys();
          this.keyD = this.input.keyboard.addKey("D");
          this.keyA = this.input.keyboard.addKey("A");
          this.keyALT = this.input.keyboard.addKey("ALT");
          this.keyF = this.input.keyboard.addKey("F");
          this.hp = new Hp1(this, 50, 550);
          this.physics.add.overlap(
            this.player,
            this.skill3s,
            function(o1, o2) {
              o1.setVelocityY(-1000);
            },
            null,
            this
          );
          if (this.live < 0) {
            this.add.text(250, 150, "GameOver!", {
              fontSize: "64px",
              color: "#ff0000"
            });
            this.clickButton = this.add
              .text(300, 300, "[Restart Game]", {
                fontSize: "25px",
                fill: "#0f0"
              })
              .setInteractive({ useHandCursor: true })
              .on("pointerup", () => {
                this.scene.start("SceneB");
              });
          }
        }
      },
      null,
      this
    );
    this.physics.add.overlap(
      this.player,
      this.skill6,
      function(o1, o2) {
        this.hp.decrease(0.001);
        if (this.hp.getvalue1() <= 0) {
          this.live -= 1;
          this.player.disableBody(true, true);
          this.player = new Player(this, 100, 100);

          this.physics.add.collider(this.player, this.platforms);
          this.physics.add.collider(this.player, this.platform2s);

          // this.physics.add.collider(this.player, this.translate);
          // this.physics.add.collider(this.player, this.translate2);
          this.cursors = this.input.keyboard.createCursorKeys();
          this.keyD = this.input.keyboard.addKey("D");
          this.keyA = this.input.keyboard.addKey("A");
          this.keyALT = this.input.keyboard.addKey("ALT");
          this.hp = new Hp1(this, 50, 550);
          this.physics.add.overlap(
            this.player,
            this.skill3s,
            function(o1, o2) {
              o1.setVelocityY(-1000);
            },
            null,
            this
          );
          if (this.live < 0) {
            this.add.text(250, 150, "GameOver!", {
              fontSize: "64px",
              color: "#ff0000"
            });
            this.clickButton = this.add
              .text(300, 300, "[Restart Game]", {
                fontSize: "25px",
                fill: "#0f0"
              })
              .setInteractive({ useHandCursor: true })
              .on("pointerup", () => {
                this.scene.start("SceneB");
              });
          }
        }
      },
      null,
      this
    );
    this.physics.add.overlap(
      this.player,
      this.e,
      function(o1, o2) {
        this.hp.decrease(10);
        if (this.hp.getvalue1() <= 0) {
          this.live -= 1;
          this.player.disableBody(true, true);
          this.player = new Player(this, 100, 100);
          this.physics.add.collider(this.player, this.platforms);
          this.physics.add.collider(this.player, this.platform2s);
          this.cursors = this.input.keyboard.createCursorKeys();
          this.keyD = this.input.keyboard.addKey("D");
          this.keyA = this.input.keyboard.addKey("A");
          this.keyALT = this.input.keyboard.addKey("ALT");
          this.hp = new Hp1(this, 50, 550);
          this.physics.add.overlap(
            this.player,
            this.skill3s,
            function(o1, o2) {
              o1.setVelocityY(-1000);
            },
            null,
            this
          );
          if (this.live < 0) {
            this.add.text(250, 150, "GameOver!", {
              fontSize: "64px",
              color: "#ff0000"
            });
            this.clickButton = this.add
              .text(300, 300, "[Restart Game]", {
                fontSize: "25px",
                fill: "#0f0"
              })
              .setInteractive({ useHandCursor: true })
              .on("pointerup", () => {
                this.scene.start("SceneB");
              });
          }
        }
      },
      null,
      this
    );
    this.physics.add.overlap(
      this.player,
      this.skill2s,
      function(o1, o2) {
        if (o1.x > o2.x) {
          o1.x = o1.x + 50;
        } else if (o1.x < o2.x) {
          o1.x = o1.x - 50;
        }

        o2.disableBody(true, true);
        this.hp.decrease(10);
        if (this.hp.getvalue1() <= 0) {
          this.live -= 1;
          this.player.disableBody(true, true);
          this.player = new Player(this, 100, 100);

          this.physics.add.collider(this.player, this.platforms);
          this.physics.add.collider(this.player, this.platform2s);

          // this.physics.add.collider(this.player, this.translate);
          // this.physics.add.collider(this.player, this.translate2);
          this.cursors = this.input.keyboard.createCursorKeys();
          this.keyD = this.input.keyboard.addKey("D");
          this.keyA = this.input.keyboard.addKey("A");
          this.keyALT = this.input.keyboard.addKey("ALT");
          this.hp = new Hp1(this, 50, 550);
          this.physics.add.overlap(
            this.player,
            this.skill3s,
            function(o1, o2) {
              o1.setVelocityY(-1000);
            },
            null,
            this
          );
          if (this.live < 0) {
            this.add.text(250, 150, "GameOver!", {
              fontSize: "64px",
              color: "#ff0000"
            });
            this.clickButton = this.add
              .text(300, 300, "[Restart Game]", {
                fontSize: "25px",
                fill: "#0f0"
              })
              .setInteractive({ useHandCursor: true })
              .on("pointerup", () => {
                this.scene.start("SceneB");
              });
          }
        }
      },
      null,
      this
    );
    this.physics.add.overlap(
      this.player2,
      this.skills,
      function(o1, o2) {
        // o1.disableBody(true, true);
        o2.disableBody(true, true);
        this.hp2.decrease2(22.5);
        if (this.hp2.getvalue2() <= 0) {
          o1.disableBody(true, true);
          this.player4die = new player4die(this, 600, 500);
          this.player4die.anims.play("p4die1", true);
          this.time.addEvent({
            delay: 4000,
            callback: this.p4die,
            callbackScope: this,
            loop: false
          });
          this.time.addEvent({
            delay: 9000,
            callback: this.p4die2,
            callbackScope: this,
            loop: false
          });
        }
      },
      null,
      this
    );
  }
}
