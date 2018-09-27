/**
 * 使用此文件来定义自定义函数和图形块。
 * 想了解更详细的信息，请前往 https://makecode.microbit.org/blocks/custom
 */

/**
 * 自定义图形块
 */

 /*
 liquid block
 */
//% color=#66FFFF icon="\uf5c5" block="liquid" weight=100
namespace Liquid{
    let pin = AnalogPin.P0
    let volt = 0;
    let adc = 0;


    /**
     * Set pin at which the Liquid Level Senor AOUT line is connected;
     * @param pin_arg pin at which the Liquid Level Senor AOUT line is connected;
     */
    //% blockId=liquid_setPin
    //% block="set liquid pin |%pinarg|"
    //% weight = 80
    export function setPin(pin_arg: AnalogPin): void {
        pin = pin_arg;
    }


    /**
     * Return the adc value from the AnalogPin;
     */
    //% blockId=liquid_ getADCValue()
    //% block="get liquid adc value"
    //% weight = 60
    export function getADCValue(): number {
        adc = pins.analogReadPin(pin);
        return adc;
    }

    /**
     * Return the adc value from the AnalogPin;
     */
    //% blockId=liquid_ getADCValue()
    //% block="get liquid volt value"
    //% weight = 40
    export function getVoltValue(): number {
        adc = pins.analogReadPin(pin);
        volt = adc * 3300 / 1024;
        return volt;
    }
}