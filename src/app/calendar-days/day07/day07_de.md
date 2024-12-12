**--- Tag 7: Brückenreparatur ---**

Die Historiker bringen dich zu einer bekannten Seilbrücke über einen Fluss mitten im Dschungel. Der Häuptling ist allerdings nicht auf dieser Seite der Brücke; 
vielleicht ist er auf der anderen Seite? Als ihr die Brücke überqueren wollt, bemerkt ihr eine Gruppe von Ingenieuren, die versuchen, die Brücke zu reparieren.
(Du fragst, wie lange es dauern wird, und die Ingenieure sagen dir, dass die Brücke nur noch kalibriert werden muss, aber ein paar junge Elefanten haben in der Nähe
gespielt und alle Operatoren aus ihren Kalibrierungsgleichungen gestohlen! Sie könnten die Kalibrierungen abschließen, wenn nur jemand herausfinden könnte, welche 
Testwerte durch die Eingabe beliebiger Kombinationen von Operatoren in die Kalibrierungsgleichungen (Ihre Rätseleingabe) erzeugt werden könnten, zum Beispiel:

```
190: 10 19
3267: 81 40 27
83: 17 5
156: 15 6
7290: 6 8 6 15
161011: 16 10 13
192: 17 8 14
21037: 9 7 18 13
292: 11 6 16 20
```

Jede Zeile stellt eine einzelne Gleichung dar. Der Testwert steht in jeder Zeile vor dem Doppelpunkt; es ist Ihre Aufgabe zu bestimmen, ob die übrigen Zahlen mit
Operatoren kombiniert werden können, um den Testwert zu erhalten. Operatoren werden immer von links nach rechts ausgewertet, nicht nach Vorrangregeln. Außerdem können 
die Zahlen in den Gleichungen nicht umgeordnet werden. Wenn man in den Dschungel blickt, sieht man Elefanten, die zwei verschiedene Arten von Operatoren halten:
Addieren (+) und Multiplizieren (*). Nur drei der oben genannten Gleichungen können durch Einfügen von Operatoren wahr gemacht werden:
```
- 190: 10 19 hat nur eine Position, die einen Operator akzeptiert: zwischen 10 und 19. Die Wahl von + würde 29 ergeben, aber die Wahl von * würde den Testwert ergeben (10 * 19 = 190).
- 3267: 81 40 27 hat zwei Positionen für Operatoren. Von den vier möglichen Konfigurationen der Operatoren führen zwei dazu, dass die rechte Seite mit dem Testwert übereinstimmt:
  81 + 40 * 27 und 81 * 40 + 27 sind beide gleich 3267 (wenn sie von links nach rechts ausgewertet werden)! 
- 292: 11 6 16 20 kann auf genau eine Weise gelöst werden: 11 + 6 * 16 + 20. 
 ```

Die Ingenieure brauchen nur das gesamte Kalibrierungsergebnis, das die Summe der Testwerte von nur den Gleichungen ist, die möglicherweise wahr sein könnten.
Im obigen Beispiel beträgt die Summe der Prüfwerte für die drei oben aufgeführten Gleichungen **3749**.

Bestimmen Sie, welche Gleichungen möglicherweise wahr sein könnten. Wie lautet ihr gesamtes Kalibrierungsergebnis?
