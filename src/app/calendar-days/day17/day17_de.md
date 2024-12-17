**--- Tag 17: Chronospatial-Computer ---**

Die Historiker drücken den Knopf auf ihrem seltsamen Gerät, aber diesmal fühlt ihr euch nur, als ob ihr fallen würdet.

"Situation kritisch", verkündet das Gerät mit einer vertrauten Stimme. "Bootstrapping-Prozess fehlgeschlagen. Debugger wird initialisiert..."

Das kleine Handgerät entfaltet sich plötzlich zu einem ganzen Computer! Die Historiker schauen nervös umher, bevor einer von ihnen es dir zuwirft.

Dies scheint ein 3-Bit-Computer zu sein: sein Programm ist eine Liste von 3-Bit-Zahlen (0 bis 7), ```wie 0,1,2,3```. Der Computer verfügt außerdem über drei Register mit den Namen A, B und C, aber diese Register sind nicht auf 3 Bits beschränkt und können stattdessen beliebige Ganzzahlen speichern.

Der Computer kennt acht Anweisungen, die jeweils durch eine 3-Bit-Zahl (Opcode der Anweisung genannt) identifiziert werden. Jede Anweisung liest auch die 3-Bit-Zahl danach als Eingabe; dies wird Operand genannt.

Eine Zahl, die der Befehlszeiger genannt wird, identifiziert die Position im Programm, von der der nächste Opcode gelesen wird; er beginnt bei 0 und zeigt auf die erste 3-Bit-Zahl im Programm. Abgesehen von Sprunganweisungen erhöht sich der Befehlszeiger nach jeder Anweisung um 2 (um am Opcode und dem Operand vorbeizulaufen). Wenn der Computer versucht, einen Opcode außerhalb des Programms zu lesen, wird er stattdessen angehalten.

Das Programm ```0,1,2,3``` würde also die Anweisung ausführen, deren Opcode ```0``` ist, und ihm den Operand ```1``` übergeben, dann die Anweisung, deren Opcode ```2``` ist, und ihm den Operand ```3``` übergeben, und dann anhalten.

Es gibt zwei Arten von Operanden; jede Anweisung legt den Typ ihres Operanden fest. Der Wert eines Literal-Operanden ist der Operand selbst. Zum Beispiel ist der Wert des Literal-Operanden 7 die Zahl 7. Der Wert eines Kombi-Operanden kann wie folgt gefunden werden:

```
- Kombi-Operanden 0 bis 3 repräsentieren wörtliche Werte 0 bis 3.
- Kombi-Operand 4 repräsentiert den Wert des Registers A.
- Kombi-Operand 5 repräsentiert den Wert des Registers B.
- Kombi-Operand 6 repräsentiert den Wert des Registers C.
- Kombi-Operand 7 ist reserviert und wird in gültigen Programmen nicht erscheinen.
``` 

Die acht Anweisungen lauten wie folgt:

Die adv-Anweisung (Opcode 0) führt eine Division durch. Der Zähler ist der Wert im Register A. Der Nenner wird gefunden, indem 2 auf die Potenz des Kombi-Operanden der Anweisung erhöht wird. (Ein Operand von 2 würde A durch 4 (2^2) teilen; ein Operand von 5 würde A durch 2^B teilen.) Das Ergebnis der Division wird auf eine Ganzzahl gekürzt und dann im Register A geschrieben.

Die bxl-Anweisung (Opcode 1) berechnet das bitweise XOR von Register B und dem Literal-Operand der Anweisung und speichert das Ergebnis im Register B.

Die bst-Anweisung (Opcode 2) berechnet den Wert ihres Kombi-Operanden modulo 8 (wodurch nur die niedrigsten 3 Bits erhalten bleiben) und schreibt diesen Wert dann in das Register B.

Die jnz-Anweisung (Opcode 3) tut nichts, wenn das Register A den Wert 0 hat. Wenn das Register A jedoch ungleich null ist, springt sie, indem sie den Befehlszeiger auf den Wert ihres Literal-Operanden setzt; wenn diese Anweisung springt, wird der Befehlszeiger nach dieser Anweisung nicht um 2 erhöht.

Die bxc-Anweisung (Opcode 4) berechnet das bitweise XOR von Register B und Register C und speichert das Ergebnis im Register B. (Aus historischen Gründen liest diese Anweisung einen Operand, ignoriert ihn aber.)

Die out-Anweisung (Opcode 5) berechnet den Wert ihres Kombi-Operanden modulo 8 und gibt diesen Wert aus. (Wenn ein Programm mehrere Werte ausgibt, werden diese durch Kommas getrennt.)

Die bdv-Anweisung (Opcode 6) funktioniert genau wie die adv-Anweisung, außer dass das Ergebnis im Register B gespeichert wird. (Der Zähler wird weiterhin aus Register A gelesen.)

Die cdv-Anweisung (Opcode 7) funktioniert genau wie die adv-Anweisung, außer dass das Ergebnis im Register C gespeichert wird. (Der Zähler wird weiterhin aus Register A gelesen.)

Hier sind einige Beispiele für die Funktionsweise von Anweisungen:

```
- Wenn Register C den Wert 9 enthält, würde das Programm 2,6 Register B auf 1 setzen.
- Wenn Register A den Wert 10 enthält, würde das Programm 5,0,5,1,5,4 die Werte 0,1,2 ausgeben.
- Wenn Register A den Wert 2024 enthält, würde das Programm 0,1,5,4,3,0 die Werte 4,2,5,6,7,7,7,7,3,1,0 ausgeben und 0 im Register A hinterlassen.
- Wenn Register B den Wert 29 enthält, würde das Programm 1,7 Register B auf 26 setzen.
- Wenn Register B den Wert 2024 und Register C den Wert 43690 enthält, würde das Programm 4,0 Register B auf 44354 setzen.
``` 

Das seltsame Gerät der Historiker hat die Initialisierung seines Debuggers abgeschlossen und zeigt einige Informationen über das Programm an, das es auszuführen versucht (dein Rätsel-Eingangsdaten). Zum Beispiel:

```
Register A: 729 
Register B: 0 
Register C: 0

Programm: 0,1,5,4,3,0
``` 

Deine erste Aufgabe besteht darin, herauszufinden, was das Programm auszugeben versucht. Initialisiere dazu die Register mit den angegebenen Werten und führe das gegebene Programm aus, indem du alle Ausgaben sammelst, die durch die out-Anweisung erzeugt werden. (Verbinde die Werte, die durch die out-Anweisungen erzeugt werden, immer mit Kommas.)
Nachdem das obige Programm angehalten hat, lautet seine endgültige Ausgabe: ```4,6,3,5,6,3,5,2,1,0```.

Benutze die bereitgestellten Informationen des Debuggers, initialisiere die Register mit den gegebenen Werten und führe das Programm aus. Sobald es angehalten hat, **was erhältst du, wenn du die Werte seiner Ausgabe mit Kommas zu einer einzigen Zeichenfolge verbindest?**

```
