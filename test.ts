// tests go here; this will not be compiled when this package is used as a library
let volt = 0
let adc = 0
basic.showIcon(IconNames.Heart)
serial.redirectToUSB()
basic.forever(() => {
    adc = Liquid.getADCValue();
    serial.writeValue("adc", adc);
    volt = Liquid.getVoltValue();
    serial.writeValue("mV", volt);
    basic.pause(500);
})