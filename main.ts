radio.onReceivedNumber(function (receivedNumber) {
    serial.writeNumber(receivedNumber)
})
input.onButtonPressed(Button.A, function () {
    radio.sendValue("X", 4.5)
})
radio.onReceivedString(function (receivedString) {
    serial.writeLine(receivedString)
})
input.onButtonPressed(Button.B, function () {
    radio.sendValue("Y", 3)
})
radio.onReceivedValue(function (name, value) {
    let Y = ""
    if (name == X) {
        xValue = (<number>value);
serial.writeLine("" + (xValue))
        Rover.setALLRGB(Rover.colors(RoverColors.Red))
        Rover.setBrightness(xValue / 100)
    } else if (name == Y) {
        yValue = (<number>value);
basic.showNumber(yValue)
    }
})
let X = ""
let xValue
xValue = 0
let yValue
yValue = 0
X = "X"
radio.setGroup(1)
radio.sendString("G'day")
