controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    scene.setBackgroundColor(10)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    scene.setBackgroundColor(5)
})
scene.setBackgroundColor(3)
