#include <Arduino.h>

void tcp_client_setup();

void tcp_client_send(String message);

void tcp_client_send_buffer(char *message, int length);