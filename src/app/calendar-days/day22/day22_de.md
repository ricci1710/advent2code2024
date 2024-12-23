**--- Tag 22: Affenmarkt ---**

Als ihr tief in den Dschungel teleportiert werdet, stiehlt ein Affe das Gerät der Historiker! Ihr müsst es zurückholen, während die Historiker nach dem Häuptling suchen.

Der Affe, der das Gerät gestohlen hat, scheint bereit zu sein, es zu tauschen – allerdings nur gegen eine absurde Anzahl Bananen. Eure einzige Möglichkeit ist es, Bananen auf dem Affen-Börsenmarkt zu kaufen.

Ihr seid euch nicht sicher, wie der Affen-Börsenmarkt funktioniert, doch einer der Historiker ahnt Schwierigkeiten und kommt, um zu helfen. Offenbar hat er diese Affen eine Weile studiert und ihre Geheimnisse entschlüsselt.

Heute ist der Markt voller Affen, die sich gute Verstecke kaufen. Glücklicherweise kennt ihr aufgrund der Zeit, die ihr kürzlich in diesem Dschungel verbracht habt, viele gute Verstecke, die ihr verkaufen könnt! Wenn ihr genug Verstecke verkauft, solltet ihr genug Bananen bekommen, um das Gerät zurückzukaufen.

Auf dem Markt scheinen die Käufer zufällige Preise zu verwenden, aber ihre Preise sind tatsächlich nur pseudorandom! Wenn ihr das Geheimnis kennt, wie sie ihre Preise auswählen, könnt ihr auf den perfekten Moment warten, um zu verkaufen.

Der Teil über Geheimnisse ist wörtlich zu nehmen, erklärt der Historiker. Jeder Käufer erzeugt eine pseudorandom-Sequenz geheimer Zahlen, wobei jede geheime Zahl aus der vorherigen abgeleitet wird.

Insbesondere entwickelt sich die geheime Zahl jedes Käufers zur nächsten geheimen Zahl in der Sequenz durch den folgenden Prozess:

```
- Berechnet das Ergebnis der Multiplikation der geheimen Zahl mit 64. Dann wird dieses Ergebnis mit der geheimen Zahl vermischt. Schließlich wird die geheime Zahl beschnitten.
- Berechnet das Ergebnis der Division der geheimen Zahl durch 32. Rundet das Ergebnis auf die nächste ganze Zahl ab. Dann wird dieses Ergebnis mit der geheimen Zahl vermischt.
  Schließlich wird die geheime Zahl beschnitten.
- Berechnet das Ergebnis der Multiplikation der geheimen Zahl mit 2048. Dann wird dieses Ergebnis mit der geheimen Zahl vermischt. Schließlich wird die geheime Zahl beschnitten.
```

Jeder Schritt des obigen Prozesses umfasst das Mischen und Beschneiden:

```
- Um einen Wert mit der geheimen Zahl zu mischen, wird der bitweise XOR des angegebenen Werts und der geheimen Zahl berechnet. 
  Danach wird die geheime Zahl das Ergebnis dieser Operation. (Wenn die geheime Zahl 42 ist und ihr 15 mit der geheimen Zahl 
  mischen wollt, wird die geheime Zahl zu 37.)
- Um die geheime Zahl zu beschneiden, berechnet ihr den Wert der geheimen Zahl modulo 16777216. Danach wird die geheime Zahl 
  das Ergebnis dieser Operation. (Wenn die geheime Zahl 100000000 beträgt und ihr die geheime Zahl beschneidet, 
  wird die geheime Zahl zu 16113920.)
```

Nachdem dieser Prozess abgeschlossen ist, bleibt dem Käufer die nächste geheime Zahl der Sequenz. Der Käufer kann diesen Prozess beliebig oft wiederholen, um weitere geheime Zahlen zu erzeugen.

Wenn ein Käufer z. B. eine geheime Zahl von 123 hätte, würden die nächsten zehn geheimen Zahlen dieses Käufers wie folgt aussehen:

```
15887950
16495136
527345
704524
1553684
12683156
11100544
12249484
7753432
5908254
```

Jeder Käufer verwendet seine eigene geheime Zahl, um seinen Preis auszuwählen. Daher ist es wichtig, die Sequenz der geheimen Zahlen für jeden Käufer vorherzusagen. Glücklicherweise hat die Forschung des Historikers die anfängliche geheime Zahl jedes Käufers aufgedeckt (deine Puzzle-Eingabe). Zum Beispiel:

```
1
10
100
2024
```

Diese Liste beschreibt die anfängliche geheime Zahl von vier verschiedenen Käufern, die sich Verstecke auf dem Affenmarkt kaufen wollen. Wenn ihr die geheimen Zahlen jedes Käufers simulieren könnt, könnt ihr alle zukünftigen Preise vorhersagen.

An einem einzigen Tag haben Käufer jeweils Zeit, 2000 neue geheime Zahlen zu erzeugen. In diesem Beispiel sind für jeden Käufer die erste geheime Zahl und die 2000. neue geheime Zahl wie folgt:

```
1: 8685429
10: 4700978
100: 15273692
2024: 8667524
```

Das Addieren der 2000. neuen geheimen Zahl für jeden Käufer ergibt **37327623**.

Für jeden Käufer: Simuliert die Erstellung von 2000 neuen geheimen Zahlen. Was ist die Summe der 2000. geheimen Zahl, die von jedem Käufer erzeugt wird?
