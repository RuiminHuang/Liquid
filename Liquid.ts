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
//% weight=80 color=#66FFFF icon="\uf13d" block="liquid"
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
    //% weight = 85
    export function setPin(pin_arg: AnalogPin): void {
        pin = pin_arg;
    }


    /**
     * Return the adc value from the AnalogPin;
     */
    //% blockId=liquid_getADCValue
    //% block="get liquid adc value"
    //% weight = 75
    export function getADCValue(): number {
        adc = pins.analogReadPin(pin);
        return adc;
    }

    /**
     * Return the volt value from the AnalogPin;
     */
    //% blockId=liquid_getVoltValue
    //% block="get liquid volt value"
    //% weight = 65
    export function getVoltValue(): number {
        adc = pins.analogReadPin(pin);
        volt = adc * 3300 / 1024;
        return volt;
    }
}