#include "humidity.h"
#include "rain_sensor.h"
#include "servo.h"
#include "tcp_client.h"

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);

  tcp_client_setup();

}

void loop() {
  // put your main code here, to run repeatedly:

  int8_t buffer[] = {1, 2, 3, 4};
  tcp_client_send_buffer((char *)buffer);

}
