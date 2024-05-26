const r1 = new rive.Rive({
    src: "./assets/riv/froggy.riv",
    canvas: document.getElementById("canvas-froggy"),
    autoplay: true,
    stateMachines: "State Machine 1",
    fit: rive.Fit.none,
    onLoad: () => {
        r1.resizeDrawingSurfaceToCanvas();
    },
});

const r2 = new rive.Rive({
    src: "./assets/riv/chicky.riv",
    canvas: document.getElementById("canvas-chicky"),
    autoplay: true,
    stateMachines: "State Machine 1",
    fit: rive.Fit.FitWidth,
    onLoad: () => {
        r2.resizeDrawingSurfaceToCanvas();
    },
});
