window.onload = function () {
  setInterval(showClock, 1000);

  function showClock() {
    // DEFINE CANVAS AND ITS CONTEXT.
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');

    let date = new Date();
    let angle;
    let secHandLength = 60;

    // CLEAR EVERYTHING ON THE CANVAS. RE-DRAW NEW ELEMENTS EVERY SECOND.
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    OUTER_DIAL1();
    OUTER_DIAL2();
    CENTER_DIAL();
    MARK_THE_HOURS();
    MARK_THE_SECONDS();

    SHOW_SECONDS();
    SHOW_MINUTES();
    SHOW_HOURS();

    function OUTER_DIAL1() {
      ctx.beginPath();
      ctx.arc(
        canvas.width / 2,
        canvas.height / 2,
        secHandLength + 10,
        0,
        Math.PI * 2
      );
      ctx.strokeStyle = '#92949C';
      ctx.stroke();
    }
    function OUTER_DIAL2() {
      ctx.beginPath();
      ctx.arc(
        canvas.width / 2,
        canvas.height / 2,
        secHandLength + 7,
        0,
        Math.PI * 2
      );
      ctx.strokeStyle = '#929BAC';
      ctx.stroke();
    }
    function CENTER_DIAL() {
      ctx.beginPath();
      ctx.arc(canvas.width / 2, canvas.height / 2, 2, 0, Math.PI * 2);
      ctx.lineWidth = 3;
      ctx.fillStyle = '#353535';
      ctx.strokeStyle = '#0C3D4A';
      ctx.stroke();
    }

    function MARK_THE_HOURS() {
      for (let i = 0; i < 12; i++) {
        angle = ((i - 3) * (Math.PI * 2)) / 12; // THE ANGLE TO MARK.
        ctx.lineWidth = 1; // HAND WIDTH.
        ctx.beginPath();

        let x1 = canvas.width / 2 + Math.cos(angle) * secHandLength;
        let y1 = canvas.height / 2 + Math.sin(angle) * secHandLength;
        let x2 =
          canvas.width / 2 +
          Math.cos(angle) * (secHandLength - secHandLength / 7);
        let y2 =
          canvas.height / 2 +
          Math.sin(angle) * (secHandLength - secHandLength / 7);

        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);

        ctx.strokeStyle = '#466B76';
        ctx.stroke();
      }
    }

    function MARK_THE_SECONDS() {
      for (let i = 0; i < 60; i++) {
        angle = ((i - 3) * (Math.PI * 2)) / 60; // THE ANGLE TO MARK.
        ctx.lineWidth = 1; // HAND WIDTH.
        ctx.beginPath();

        let x1 = canvas.width / 2 + Math.cos(angle) * secHandLength;
        let y1 = canvas.height / 2 + Math.sin(angle) * secHandLength;
        let x2 =
          canvas.width / 2 +
          Math.cos(angle) * (secHandLength - secHandLength / 30);
        let y2 =
          canvas.height / 2 +
          Math.sin(angle) * (secHandLength - secHandLength / 30);

        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);

        ctx.strokeStyle = '#C4D1D5';
        ctx.stroke();
      }
    }

    function SHOW_SECONDS() {
      let sec = date.getSeconds();
      angle = Math.PI * 2 * (sec / 60) - (Math.PI * 2) / 4;
      ctx.lineWidth = 0.5; // HAND WIDTH.

      ctx.beginPath();
      // START FROM CENTER OF THE CLOCK.
      ctx.moveTo(canvas.width / 2, canvas.height / 2);
      // DRAW THE LENGTH.
      ctx.lineTo(
        canvas.width / 2 + Math.cos(angle) * secHandLength,
        canvas.height / 2 + Math.sin(angle) * secHandLength
      );

      // DRAW THE TAIL OF THE SECONDS HAND.
      ctx.moveTo(canvas.width / 2, canvas.height / 2); // START FROM CENTER.
      // DRAW THE LENGTH.
      ctx.lineTo(
        canvas.width / 2 - Math.cos(angle) * 20,
        canvas.height / 2 - Math.sin(angle) * 20
      );

      ctx.strokeStyle = '#586A73'; // COLOR OF THE HAND.
      ctx.stroke();
    }

    function SHOW_MINUTES() {
      let min = date.getMinutes();
      angle = Math.PI * 2 * (min / 60) - (Math.PI * 2) / 4;
      ctx.lineWidth = 1.5; // HAND WIDTH.

      ctx.beginPath();
      ctx.moveTo(canvas.width / 2, canvas.height / 2); // START FROM CENTER.
      // DRAW THE LENGTH.
      ctx.lineTo(
        canvas.width / 2 + (Math.cos(angle) * secHandLength) / 1.1,
        canvas.height / 2 + (Math.sin(angle) * secHandLength) / 1.1
      );

      ctx.strokeStyle = '#999'; // COLOR OF THE HAND.
      ctx.stroke();
    }

    function SHOW_HOURS() {
      let hour = date.getHours();
      let min = date.getMinutes();
      angle =
        Math.PI * 2 * ((hour * 5 + (min / 60) * 5) / 60) - (Math.PI * 2) / 4;
      ctx.lineWidth = 1.5; // HAND WIDTH.

      ctx.beginPath();
      ctx.moveTo(canvas.width / 2, canvas.height / 2); // START FROM CENTER.
      // DRAW THE LENGTH.
      ctx.lineTo(
        canvas.width / 2 + (Math.cos(angle) * secHandLength) / 1.5,
        canvas.height / 2 + (Math.sin(angle) * secHandLength) / 1.5
      );

      ctx.strokeStyle = '#000'; // COLOR OF THE HAND.
      ctx.stroke();
    }
  }
};
