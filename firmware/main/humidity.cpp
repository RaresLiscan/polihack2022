#include "humidity.h"
#include <DHT.h>

#define DHTPIN 5
#define DHTTYPE DHT11

DHT dht(DHTPIN, DHTTYPE);

void humidity_init_sensor()
{
    pinMode(DHTPIN, INPUT);
    dht.begin();
}

float humidity_read_data()
{
    float humidity = dht.readHumidity();

    if (isnan(humidity))
    {
        return -1.0;
    }
    return humidity;
}