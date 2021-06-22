input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . # # . .
        # . . # .
        # # # # .
        # . . # .
        # . . # .
        `)
    SGBotic.playTrack(
    2,
    1
    )
    basic.pause(500)
    temperature = input.temperature()
    SGBotic.playTrack(
    temperature,
    2
    )
    basic.pause(500)
    SGBotic.playTrack(
    3,
    1
    )
})
input.onButtonPressed(Button.AB, function () {
    SGBotic.playTrack(
    4,
    1
    )
    basic.showLeds(`
        # # . # #
        # # . # #
        . . . . .
        # . . . #
        . # # # .
        `)
})
input.onButtonPressed(Button.B, function () {
    SGBotic.playTrack(
    3,
    1
    )
    basic.showLeds(`
        # # # . .
        # . # . .
        # # . . .
        # . # . .
        # # # . .
        `)
})
serial.onDataReceived(serial.delimiters(Delimiters.NewLine), function () {
	
})
let temperature = 0
music.playMelody("- - B B F - - - ", 120)
images.createBigImage(`
    # . . # . # # # . #
    # . . # . . # . . #
    # # # # . . # . . #
    # . . # . . # . . .
    # . . # . # # # . #
    `).scrollImage(1, 200)
images.createBigImage(`
    . . . . . . . . # .
    . # . . . . . # . #
    . . # . . . # . . .
    . . . # . # . . . .
    . . . . # . . . . .
    `).scrollImage(1, 200)
images.createBigImage(`
    # . . . . . . . # .
    . # . . . . . # . #
    . . # . . . # . . .
    . . . # . # . . . .
    . . . . # . . . . .
    `).scrollImage(1, 200)
images.createBigImage(`
    . . . . . . # . . .
    . . . . . # . # . .
    # . . . # . . . # .
    . # . # . . . . . #
    . . # . . . . . . .
    `).scrollImage(1, 200)
images.createBigImage(`
    . . . . # . . . . .
    . . . # . # . . . .
    . . # . . . # . . .
    . # . . . . . # . .
    # . . . . . . . # .
    `).scrollImage(1, 200)
SGBotic.MP3_init(
SerialPin.P12,
SerialPin.P13
)
basic.pause(100)
SGBotic.setVolume(
20
)
basic.pause(100)
SGBotic.playTrack(
1,
1
)
basic.forever(function () {
    music.playMelody("D F G E C F C E ", 120)
})
