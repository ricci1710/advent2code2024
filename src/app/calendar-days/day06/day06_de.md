**--- Tag 6: Wächter-Gallivant ---**

Die Historiker benutzen wieder ihr ausgefallenes Gerät, diesmal um euch alle zum Nordpol zu entführen, wo der Prototyp eines Anzugs hergestellt wird... im Jahr 1518! Es stellt sich heraus, dass der direkte Zugang zur Geschichte für eine Gruppe von Historikern sehr praktisch ist.

Trotzdem müsst ihr euch vor Zeitparadoxen in Acht nehmen, und deshalb ist es wichtig, dass ihr jeden aus dem Jahr 1518 meidet, während die Historiker nach dem Chef suchen. Leider patrouilliert eine einzige Wache in diesem Teil des Labors.

Vielleicht kannst du im Voraus herausfinden, wo die Wache hingehen wird, damit die Historiker sicher suchen können?

Du beginnst damit, eine Karte (deine Rätseleingabe) der Situation zu erstellen. Zum Beispiel:

```
....#.....
.........#
..........
..#.......
.......#..
..........
.#..^.....
........#.
#.........
......#...
```

Die Karte zeigt die aktuelle Position der Wache mit ^ an (um anzuzeigen, dass die Wache aus der Perspektive der Karte gerade nach oben schaut). Alle Hindernisse - Kisten, Tische, alchemistische Reaktoren usw. - werden als # angezeigt.

Die Laborwächter im Jahr 1518 folgen einem sehr strengen Patrouillenprotokoll, das die wiederholte Befolgung dieser Schritte beinhaltet:

Wenn sich etwas direkt vor Ihnen befindet, drehen Sie sich um 90 Grad nach rechts.
Andernfalls machen Sie einen Schritt nach vorne.
Dem obigen Protokoll folgend bewegt sich die Wache mehrmals nach oben, bis sie ein Hindernis erreicht (in diesem Fall einen Stapel misslungener Anzugprototypen):

```
....#.....
....^....#
..........
..#.......
.......#..
..........
.#........
........#.
#.........
......#...
```

Da sich nun ein Hindernis vor der Wache befindet, wendet sie sich nach rechts, bevor sie geradeaus in ihre neue Blickrichtung weitergeht:

```
....#.....
........>#
..........
..#.......
.......#..
..........
.#........
........#.
#.........
......#...
```

Als sie ein weiteres Hindernis erreicht (eine Spule mit mehreren sehr langen Polymeren), wendet sie sich wieder nach rechts und geht weiter nach unten:

```
....#.....
.........#
..........
..#.......
.......#..
..........
.#......v.
........#.
#.........
......#...
```

Dieser Vorgang dauert eine Weile an, aber schließlich verlässt der Wächter den kartierten Bereich (nachdem er an einem Tank mit Universal-Lösungsmittel vorbeigegangen ist):

```
....#.....
.........#
..........
..#.......
.......#..
..........
.#........
........#.
#.........
......#v..
```

Indem Sie die Route des Wachmanns vorhersagen, können Sie bestimmen, welche bestimmten Positionen im Labor auf dem Patrouillenpfad liegen werden. Einschließlich der Startposition des Wachmanns sind die Positionen, die der Wachmann vor dem Verlassen des Bereichs besucht, mit einem X markiert:

```
....#.....
....XXXXX#
....X...X.
...#.X...X.
..XXXXX#X.
..X.X.X.X.X.
.#XXXXXXX.
.XXXXXXX#.
#XXXXXXX...
......#X..
```

In diesem Beispiel wird der Wachmann 41 verschiedene Positionen auf Ihrer Karte besuchen.

Sagen Sie den Weg des Wachmanns voraus. Wie viele verschiedene Positionen wird der Wachmann besuchen, bevor er den kartierten Bereich verlässt?

**--- Zweiter Teil ---**

Während die Historiker damit beginnen, die Patrouillenroute der Wächter zu umgehen, leihst du dir ihr schickes Gerät aus und gehst aus dem Labor. In der Sicherheit eines Vorratsschranks machst du eine Zeitreise durch die letzten Monate und notierst den nächtlichen Status des Wachpostens im Labor an den Wänden des Schranks.

Als Sie nach scheinbar nur wenigen Sekunden zu den Historikern zurückkehren, erklären diese, dass der Patrouillenbereich der Wache einfach zu groß ist, um das Labor sicher zu durchsuchen, ohne erwischt zu werden.

Glücklicherweise sind sie ziemlich sicher, dass das Hinzufügen eines einzigen neuen Hindernisses kein Zeitparadoxon verursachen wird. Sie möchten das neue Hindernis so platzieren, dass der Wachmann in einer Schleife stecken bleibt und der Rest des Labors sicher durchsucht werden kann.

Um die Wahrscheinlichkeit eines Zeitparadoxons so gering wie möglich zu halten, möchten die Historiker alle möglichen Positionen für ein solches Hindernis kennen. Das neue Hindernis kann nicht an der Ausgangsposition des Wächters platziert werden - der Wächter ist gerade dort und würde es bemerken.

Im obigen Beispiel gibt es nur 6 verschiedene Positionen, an denen ein neues Hindernis dazu führen würde, dass der Wächter in einer Schleife stecken bleibt. In den Diagrammen dieser sechs Situationen wird O verwendet, um das neue Hindernis zu markieren, |, um eine Position anzuzeigen, in der sich der Wächter nach oben/unten bewegt, -, um eine Position anzuzeigen, in der sich der Wächter nach links/rechts bewegt, und +, um eine Position anzuzeigen, in der sich der Wächter sowohl nach oben/unten als auch nach links/rechts bewegt.

Option eins: Setzen Sie eine Drucktaste neben die Ausgangsposition des Wächters:

```
....#.....
....+---+#
....|...|.
..#.|...|.
....|..#|.
....|...|.
.#.O^---+.
........#.
#.........
......#...
```

Option zwei: Legen Sie einen Stapel gescheiterter Anzugprototypen in den unteren rechten Quadranten des zugewiesenen Bereichs:

```
....#.....
....+---+#
....|...|.
..#.|...|.
..+-+-+#|.
..|.|.|.|.
.#+-^-+-+.
......O.#.
#.........
......#...
```

Option drei: Stellen Sie eine Kiste mit dem Prototyp eines Schornsteinfegers neben den Stehpult im unteren rechten Quadranten:

```
....#.....
....+---+#
....|...|.
..#.|...|.
..+-+-+#|.
..|.|.|.|.
.#+-^-+-+.
.+----+O#.
#+----+...
......#...
```

Option vier, ein alchemistischer Retroencabulator in der unteren linken Ecke:

```
....#.....
....+---+#
....|...|.
..#.|...|.
..+-+-+#|.
..|.|.|.|.
.#+-^-+-+.
..|...|.#.
#O+---+...
......#...
```

Option fünf: Der alchemistische Retroencabulator wird etwas nach rechts verschoben:

```
....#.....
....+---+#
....|...|.
..#.|...|.
..+-+-+#|.
..|.|.|.|.
.#+-^-+-+.
....|.|.#.
#..O+-+...
......#...
```

Option sechs: Stellen Sie einen Tank mit souveränem Klebstoff direkt neben den Tank mit Universal-Lösungsmittel:

```
....#.....
....+---+#
....|...|.
..#.|...|.
..+-+-+#|.
..|.|.|.|.
.#+-^-+-+.
.+----++#.
#+----++..
......#O..
```

Es ist eigentlich egal, was du als Hindernis verwendest, solange du und die Historiker es in Position bringen können, ohne dass die Wache es bemerkt.
Wichtig ist, dass du genug Möglichkeiten hast, um eine zu finden, die die Zeitparadoxien minimiert, und in diesem Beispiel gibt es **6** verschiedene Positionen,
die du wählen kannst.

Sie müssen die Wache in eine Schleife bringen, indem Sie ein einziges neues Hindernis hinzufügen. Wie viele verschiedene Positionen könnten Sie für dieses Hindernis wählen?
