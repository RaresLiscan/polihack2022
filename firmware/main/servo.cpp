#include "servo.h"
#include <Servo.h>
#include <Arduino.h>

Servo servo;

void servo_init(int pin)
{
    servo.attach(pin);
}

void servo_write(int angle, int wait)
{
    servo.write(angle);

    delay(wait);
}