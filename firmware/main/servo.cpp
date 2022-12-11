#include "servo.h"
#include <Servo.h>
#include <Arduino.h>

Servo servo;

void servo_init(int pin)
{
    servo.write(0);
    servo.attach(pin);
}

void servo_write(int angle, int wait)
{
    servo.write(angle);

    delay(wait);
}