**--- Tag 9: Festplatten-Fragmentierer ---**

Ein weiterer Druck auf den Knopf bringt Sie in die vertrauten Flure einiger freundlicher Amphipoden! Gut, dass ihr irgendwie alle euren eigenen Mini-U-Boot bekommen habt. Die Historiker düsen auf der Suche nach dem Anführer los, indem sie meistens direkt gegen Wände fahren.

Während die Historiker schnell herausfinden, wie man diese Dinger steuert, bemerken Sie einen Amphipoden in der Ecke, der mit seinem Computer zu kämpfen hat. Er versucht, mehr zusammenhängenden freien Speicherplatz zu schaffen, indem er alle Dateien komprimiert, aber sein Programm funktioniert nicht; Sie bieten ihm Ihre Hilfe an.

Er zeigt Ihnen die Festplattenkarte (Ihre Rätsel-Eingabe), die er bereits erstellt hat. Zum Beispiel:

```
2333133121414131402
```

Die Festplattenkarte verwendet ein komprimiertes Format, um das Layout von Dateien und freiem Speicherplatz auf der Festplatte darzustellen. Die Ziffern wechseln zwischen der Angabe der Länge einer Datei und der Länge des freien Speicherplatzes.

Eine Festplattenkarte wie 12345 würde also eine Ein-Block-Datei, zwei Blöcke freien Speicherplatz, eine Drei-Block-Datei, vier Blöcke freien Speicherplatz und dann eine Fünf-Block-Datei darstellen. Eine Festplattenkarte wie 90909 würde drei Neun-Block-Dateien in einer Reihe darstellen (ohne freien Platz dazwischen).

Jede Datei auf der Festplatte hat zudem eine ID-Nummer, basierend auf der Reihenfolge, in der die Dateien erscheinen, bevor sie neu angeordnet werden, beginnend mit der ID 0. Die Festplattenkarte 12345 hat also drei Dateien: eine Ein-Block-Datei mit ID 0, eine Drei-Block-Datei mit ID 1 und eine Fünf-Block-Datei mit ID 2. Mit einem Zeichen für jeden Block, wobei die Ziffern die Datei-ID sind und . für freien Speicherplatz steht, sieht die Festplattenkarte 12345 so aus:

```
0..111....22222
```

Das erste obige Beispiel, 2333133121414131402, stellt diese einzelnen Blöcke dar:

```
00...111...2...333.44.5555.6666.777.888899
```

Der Amphipode möchte die Datei-Blöcke einzeln vom Ende der Festplatte an den am weitesten links gelegenen freien Speicherplatz verschieben (bis keine Lücken mehr zwischen den Datei-Blöcken verbleiben). Für die Festplattenkarte 12345 sieht der Prozess so aus:

```
0..111....22222
02.111....2222.
022111....222..
0221112...22...
02211122..2....
022111222......
```

Das erste Beispiel erfordert einige Schritte mehr:

```
00...111...2...333.44.5555.6666.777.888899
009..111...2...333.44.5555.6666.777.88889.
0099.111...2...333.44.5555.6666.777.8888..
00998111...2...333.44.5555.6666.777.888...
009981118..2...333.44.5555.6666.777.88....
0099811188.2...333.44.5555.6666.777.8.....
009981118882...333.44.5555.6666.777.......
0099811188827..333.44.5555.6666.77........
00998111888277.333.44.5555.6666.7.........
009981118882777333.44.5555.6666...........
009981118882777333644.5555.666............
00998111888277733364465555.66.............
0099811188827773336446555566..............
```

Der letzte Schritt dieses Dateikomprimierungsprozesses besteht darin, die Dateisystem-Prüfsumme zu aktualisieren. Um die Prüfsumme zu berechnen, addiert man das Ergebnis der Multiplikation jeder Position dieser Blöcke mit der Datei-ID-Nummer, die sie enthält. Der am weitesten links gelegene Block befindet sich an Position 0. Wenn ein Block freien Speicherplatz enthält, wird er stattdessen übersprungen.

Im ersten Beispiel multipliziert man die Position der ersten Blöcke mit ihrer Datei-ID-Nummer: 0 * 0 = 0, 1 * 0 = 0, 2 * 9 = 18, 3 * 9 = 27, 4 * 8 = 32, und so weiter.
In diesem Beispiel ist die Prüfsumme die Summe dieser Werte, **1928**.

Kompaktieren Sie das Festplattenlaufwerk des Amphipoden mit dem von ihm angeforderten Prozess. Wie lautet die resultierende Dateisystem-Prüfsumme? (Seien Sie vorsichtig beim Kopieren/Einfügen der Eingabe für dieses Rätsel; es ist eine einzelne, sehr lange Zeile.)
