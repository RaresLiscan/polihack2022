#include "humidity.h"
#include "rain_sensor.h"
#include "servo.h"
#include "tcp_client.h"

void setup()
{
  // put your setup code here, to run once:
  Serial.begin(9600);

  humidity_init_sensor();
  rain_sensor_init();
  tcp_client_setup();
  servo_init(0);
}

void loop()
{
  // put your main code here, to run repeatedly:

  int humidityValue = (int)humidity_read_data();

  int rainSensorValue = rain_sensor_read_analog();

  char buffer[3] = {humidityValue, rainSensorValue >> 8, rainSensorValue & 0xff};

  tcp_client_send_buffer(buffer, 3);
  delay(1500);

  int rainSensor = rain_sensor_read_digital();
  Serial.println(rainSensor);

  if (rainSensor == 0)
  {
    servo_write(180, 1000);
  }
  else
  {
    servo_write(0, 1000);
  }
}
