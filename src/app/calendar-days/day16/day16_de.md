### Tag 16: Rentier-Labyrinth

Es ist wieder Zeit für die Rentier-Olympiade! In diesem Jahr besteht das große Event aus dem Rentier-Labyrinth, bei dem die Rentiere um die niedrigste Punktzahl konkurrieren.

Du und die Historiker kommen, um nach dem Häuptling zu suchen, gerade als das Ereignis beginnen soll. Ein kurzer Blick kann ja nicht schaden, oder?

Die Rentiere starten auf dem Start-Feld (markiert mit `S`) und blicken nach Osten. Sie müssen das End-Feld (markiert mit `E`) erreichen. Sie können sich ein Feld nach vorne bewegen (wodurch sich ihre Punktzahl um einen Punkt erhöht), dürfen jedoch nie in eine Wand (`#`) laufen. Außerdem können sie sich um 90 Grad im Uhrzeigersinn oder gegen den Uhrzeigersinn drehen (wodurch sich ihre Punktzahl um 1000 Punkte erhöht).

Um den besten Platz zum Zuschauen zu finden, schnappt ihr euch eine Karte (dein Rätsel-Eingang) von einem nahegelegenen Kiosk. Zum Beispiel:

```
###############
#.......#....E#
#.#.###.#.###.#
#.....#.#...#.#
#.###.#####.#.#
#.#.#.......#.#
#.#.#####.###.#
#...........#.#
###.#.#####.#.#
#...#.....#.#.#
#.#.#.###.#.#.#
#.....#...#.#.#
#.###.#.#.#.#.#
#S..#.....#...#
###############
```

Es gibt viele Pfade durch dieses Labyrinth, aber das Verfolgen eines der besten Pfade würde eine **Punktzahl von nur 7036** verursachen. Dies kann erreicht werden, indem insgesamt 36 Schritte nach vorne gemacht und insgesamt 7-mal um 90 Grad gedreht wird:

```
###############
#.......#....E#
#.#.###.#.###^#
#.....#.#...#^#
#.###.#####.#^#
#.#.#.......#^#
#.#.#####.###^#
#..>>>>>>>>v#^#
###^#.#####v#^#
#>>^#.....#v#^#
#^#.#.###.#v#^#
#^....#...#v#^#
#^###.#.#.#v#^#
#S..#.....#>>^#
###############
```

Hier ist ein zweites Beispiel:

```
#################
#...#...#...#..E#
#.#.#.#.#.#.#.#.#
#.#.#.#...#...#.#
#.#.#.#.###.#.#.#
#...#.#.#.....#.#
#.#.#.#.#.#####.#
#.#...#.#.#.....#
#.#.#####.#.###.#
#.#.#.......#...#
#.#.###.#####.###
#.#.#...#.....#.#
#.#.#.#####.###.#
#.#.#.........#.#
#.#.#.#########.#
#S#.............#
#################
```

In diesem Labyrinth verursachen die besten Pfade **11048 Punkte**. Ein solcher Pfad könnte so aussehen:

```
#################
#...#...#...#..E#
#.#.#.#.#.#.#.#^#
#.#.#.#...#...#^#
#.#.#.#.###.#.#^#
#>>v#.#.#.....#^#
#^#v#.#.#.#####^#
#^#v..#.#.#>>>>^#
#^#v#####.#^###.#
#^#v#..>>>>^#...#
#^#v###^#####.###
#^#v#>>^#.....#.#
#^#v#^#####.###.#
#^#v#^........#.#
#^#v#^#########.#
#S#>>^..........#
#################
```

Beachte, dass der obige Pfad als allererste Bewegung eine 90-Grad-Drehung umfasst, um das Rentier von Osten nach Norden auszurichten.

Analysiere deine Karte sorgfältig. **Was ist die niedrigste Punktzahl, die ein Rentier erreichen könnte?**
