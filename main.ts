input.onGesture(Gesture.Shake, function () {
    hånd = randint(1, 3)
    if (hånd == 1) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            # # . # #
            # # . # #
            `)
    }
    if (hånd == 2) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
    if (hånd == 3) {
        basic.showLeds(`
            . # # # .
            # # # # #
            # # # # #
            # # # # #
            . # # # .
            `)
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
})
let hånd = 0
for (let index = 0; index < 4; index++) {
    basic.showLeds(`
        . . . . .
        # # . # #
        . . . . .
        . # # # .
        . . . . .
        `)
    basic.pause(1)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
}
basic.showLeds(`
    . . . . .
    # # . # #
    . . . . .
    . # # # .
    . . . . .
    `)
basic.pause(500)
basic.showLeds(`
    # # . # #
    # # . # #
    . . . . .
    . # # # .
    . . . . .
    `)
basic.pause(500)
basic.showLeds(`
    # # . # #
    # # . # #
    . . . . .
    # . . . #
    . # # # .
    `)
basic.forever(function () {
    basic.showLeds(`
        # # . # #
        # # . # #
        . . . . .
        # . . . #
        . # # # .
        `)
    basic.pause(5000)
    basic.showLeds(`
        . . . . .
        # # . # #
        . . . . .
        # . . . #
        . # # # .
        `)
})
