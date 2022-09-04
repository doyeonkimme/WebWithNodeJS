#include <SoftwareSerial.h>
#include <MHZ19.h>

SoftwareSerial ss(D3,D4); //Rx Tx
MHZ19 mhz(&ss);

void setup()
{
  Serial.begin(115200);
  Serial.println(F("Starting...")); 

  ss.begin(9600);
}

// 시리얼 모니터로 정보 조회
void loop(){
  delay(3000);
  MHZ19_RESULT response = mhz.retrieveData();
  if (response == MHZ19_RESULT_OK)
  {
    Serial.println(mhz.getCO2());
  }
  else
  {
    Serial.print(F("Error, code: "));
    Serial.println(response);
  }
}
