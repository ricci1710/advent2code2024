### Tag 15: Lagerhausprobleme

Du befindest dich wieder in deinem eigenen Mini-U-Boot! Jeder Historiker steuert sein eigenes Mini-U-Boot in eine andere Richtung; vielleicht hat der Chef hier unten ebenfalls sein eigenes.
Als du nach oben schaust, siehst du eine riesige Schule von Laternenfischen, die an dir vorbeischwimmen. Bei genauerem Hinsehen scheinen sie ziemlich nervös zu sein, also fährst du mit deinem Mini-U-Boot näher heran, um zu sehen, ob du helfen kannst.
Da sich Laternenfisch-Populationen schnell vermehren, brauchen sie viel Futter, das irgendwo gelagert werden muss. Deshalb haben diese Fische aufwendige Lagerhauskomplexe gebaut, die von Robotern betrieben werden!
Diese Laternenfische sind nervös, weil sie die Kontrolle über den Roboter verloren haben, der eines ihrer wichtigsten Lagerhäuser betreibt! Der Roboter läuft gerade Amok, verschiebt Kisten im Lagerhaus, ohne die Logistik oder Inventarverwaltungsstrategien der Laternenfische zu beachten.
Keiner der Laternenfische traut sich, in die Nähe des unberechenbaren Roboters zu schwimmen, um ihn auszuschalten. Wenn es dir jedoch gelingt, die Bewegungen des Roboters vorherzusagen, könnten sie vielleicht eine sichere Lösung finden.
Die Laternenfische haben bereits eine Karte des Lagerhauses und eine Liste der Bewegungen, die der Roboter ausführen wird (deine Rätsel-Eingabe). Das Problem ist, dass diese Bewegungen manchmal scheitern, da Kisten verschoben werden, wodurch die tatsächlichen Bewegungen des Roboters schwer vorherzusagen sind.

#### Beispiel:

``` 
##########
#..O..O.O#
#......O.#
#.OO..O.O#
#..O@..O.#
#O#..O...#
#O..O..O.#
#.OO.O.OO#
#....O...#
##########

<vv>^<v^>v>^vv^v>v<>v^v<v<^vv<<<^><<><>>v<vvv<>^v^>^<<<><<v<<<v^vv^v>^
vvv<<^>^v^^><<>>><>^<<><^vv^^<>vvv<>><^^v>^>vv<>v<<<<v<^v>^<^^>>>^<v<v
> <>vv>v^v^<>><>>>><^^>vv>v<^^^>>v^v^<^^>v^^>v^<^v>v<>>v^v^<v>v^^<^^vv<
<<v<^>>^^^^>>>v^<>vvv^><v<<<>^^^vv^<vvv>^>v<^^^^v<>^>vvvv><>>v^<<^^^^^
> ^><^><>>><>^^<<^^v>>><^<v>^<vv>>v>>>^v><>^v><<<<v>>v<v<v>vvv>^<><<>^><
> ^>><>^v<><^vvv<^^<><v<<<<<><^v<<<><<<^^<v<^^^><^>>^<v^><<<^>>^v<v^v<v^
> ^>>^v>vv>^<<^v<>><<><<v<<v><>v<^vv<<<>^^v^>^^>>><<^v>>v^v><^^>>^<>vv^
<><^^>^^^<><vvvvv^v<v<<>^v<v>v<<^><<><<><<<^^<<<^<<>><<><^^^>^^<>^>v<>
> ^^>vv<^v^v<vv>^<><v<^v>^^^>>>^^vvv^>vvv<>>>^<^>>>>>^<<^v>^vvv<>^<><<v>
> v^^>>><<^^<>>^v^<v^vv<>v^<<>^<^v^v><^<<<><<^<v><v<>vv>>v><v^<vv<>v^<<^
```

Wenn der Roboter (@) versucht, sich zu bewegen, und ihm dabei Kisten (O) im Weg stehen, versucht er, diese Kisten ebenfalls zu verschieben. Sollte jedoch eine Bewegung dazu führen, dass der Roboter oder eine Kiste in eine Wand (#) bewegt wird, passiert nichts – weder der Roboter noch eine Kiste bewegt sich. Die Startpositionen sind oben auf der Karte dargestellt, die dir von den Laternenfischen gegeben wurde.
Der Rest des Dokuments beschreibt die Bewegungen (^ für hoch, v für runter, < für links, > für rechts), die der Roboter versuchen wird, nacheinander auszuführen. (Die Bewegungen bilden eine einzige große Sequenz; sie sind nur auf mehrere Zeilen aufgeteilt, um das Kopieren und Einfügen zu erleichtern. Neue Zeilen in der Bewegungssequenz sollten ignoriert werden.)

#### Hier ist ein kleineres Beispiel:

``` 
########
#..O.O.#
##@.O..#
#...O..#
#.#.O..#
#...O..#
#......#
########

<^^>>>vv<v>>v<<
```

Wenn der Roboter mit der angegebenen Bewegungssequenz beginnt, würde er die Kisten wie folgt verschieben:
**Anfangszustand:**

``` 
########
#..O.O.#
##@.O..#
#...O..#
#.#.O..#
#...O..#
#......#
########
```

Bewegung `<`:

``` 
########
#..O.O.#
##@.O..#
#...O..#
#.#.O..#
#...O..#
#......#
########
```

Bewegung `^`:

``` 
########
#.@O.O.#
##..O..#
#...O..#
#.#.O..#
#...O..#
#......#
########
```

Bewegung `^`:

``` 
########
#.@O.O.#
##..O..#
#...O..#
#.#.O..#
#...O..#
#......#
########
```

(Beispiel wird fortgesetzt…)
Nachdem der Roboter alle Bewegungen ausgeführt hat, hätte das größere Beispiel den Endzustand:

``` 
##########
#.O.O.OOO#
#........#
#OO......#
#OO@.....#
#O#.....O#
#O.....OO#
#O.....OO#
#OO....OO#
##########
```

Die Laternenfische verwenden ein eigenes Güterpositionierungssystem (GPS), um die Positionen der Kisten zu verfolgen. Die GPS-Koordinate einer Kiste entspricht 100 mal ihrer Entfernung vom oberen Rand der Karte plus ihrer Entfernung vom linken Rand der Karte. (Diese Berechnung endet nicht an Wänden; die Entfernung wird bis zum Kartenrand gemessen.)
Also hat die Kiste unten eine Entfernung von 1 vom oberen Rand und 4 vom linken Rand der Karte, was eine GPS-Koordinate von `100 * 1 + 4 = 104` ergibt.

``` 
#######
#...O..
#......
```

Die Laternenfische möchten die Summe aller GPS-Koordinaten der Kisten wissen, nachdem der Roboter fertig ist.
Für das große Beispiel beträgt die Summe der GPS-Koordinaten **10092**.
Im kleineren Beispiel beträgt die**Summe 2028**.
**Vorhersage der Bewegungen des Roboters und der Kisten im Lagerhaus:**
Nachdem der Roboter fertig ist, wie hoch ist die Summe aller GPS-Koordinaten der Kisten?
