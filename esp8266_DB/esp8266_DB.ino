#include <ESP8266WiFi.h>
#include <MySQL_Connection.h>
#include <MySQL_Cursor.h>

byte mac_addr[] = { 0xDE, 0xAD, 0xBE, 0xEF, 0xFE, 0xED };

IPAddress server_addr(DB 서버 주소);
char user[] = "DB 사용자";
char password[] = "DB 비밀번호";
int port = DB 포트번호;

char ssid[] = "SSID";
char pass[] = "PWD";
char INSERT_SQL[] = "INSERT INTO *** VALUES ***)";
WiFiClient client;
MySQL_Connection conn((Client *)&client);

void setup() {
  Serial.begin(9600);
  while (!Serial);

  WiFi.mode(WIFI_STA);
  WiFi.begin(ssid, pass);
  while( WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
 
  Serial.println("Connected to network");
  Serial.print("My IP address is: ");
  Serial.println(WiFi.localIP());

  Serial.println("Connecting...");
  if (conn.connect(server_addr, port, user, password)) {
    delay(1000);
    MySQL_Cursor *cur_mem = new MySQL_Cursor(&conn);
    cur_mem->execute(INSERT_SQL);
    delete cur_mem;
  }
  else
    Serial.println("Connection failed.");
  conn.close();
}

void loop() {
}
