#include "rain_sensor.h"
#include <Arduino.h>

#define RAIN_SENSOR_DIGITAL D2
#define RAIN_SENSOR_ANALOG A0

void rain_sensor_init()
{
    pinMode(RAIN_SENSOR_DIGITAL, INPUT);
}

int rain_sensor_read_digital()
{
    int rain_digital = digitalRead(RAIN_SENSOR_DIGITAL);
    return rain_digital;
}

int rain_sensor_read_analog()
{
    int rain_analog = analogRead(RAIN_SENSOR_ANALOG);

    return rain_analog;
}