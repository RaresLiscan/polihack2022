#include "tcp_client.h"
#include <ESP8266WiFi.h>
#include <WiFiClient.h>
#include <stdint.h>

const uint16_t port = 7070;
const char *host = "192.168.137.1";
WiFiClient client;
void tcp_client_setup()
{
    Serial.println("Connecting...\n");
    WiFi.mode(WIFI_STA);
    WiFi.begin("Bag pula in netul de la polihack", "coadaluilee"); // change it to your ussid and password
    while (WiFi.status() != WL_CONNECTED)
    {
        delay(500);
        Serial.print(".");
    }
}

void tcp_client_send(String message)
{
    if (!client.connect(host, port))
    {
        Serial.println("Connection to host failed");
        delay(1000);
        return;
    }
    Serial.println("Connected to server successful!");
    client.print(message);
    delay(250);
    while (client.available() > 0)
    {
        char c = client.read();
        Serial.write(c);
    }
    Serial.print('\n');
    client.stop();
    delay(5000);
}

void tcp_client_send_buffer(char *message)
{
    if (!client.connect(host, port))
    {
        Serial.println("Connection to host failed");
        delay(1000);
        return;
    }
    Serial.println("Connected to server successful!");
    client.write(message, 4);
    delay(250);
    while (client.available() > 0)
    {
        char c = client.read();
        Serial.write(c);
    }
    Serial.print('\n');
    client.stop();
    delay(5000);
}