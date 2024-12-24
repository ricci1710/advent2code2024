**--- Tag 24: Gekreuzte Drähte ---**

Du und die Historiker kommen am Rand eines großen Hains irgendwo im Dschungel an. Nach dem letzten Vorfall haben die Elfen ein kleines Gerät installiert, das die Früchte überwacht. Während die Historiker den Hain durchsuchen, fragt einer von ihnen, ob du dir das Überwachungsgerät ansehen kannst. Offenbar funktioniert es in letzter Zeit nicht richtig.
Das Gerät scheint eine Zahl durch einige Boolesche Logikgatter berechnen zu wollen. Jedes Gatter hat zwei Eingänge und einen Ausgang. Die Gatter operieren alle mit Werten, die entweder wahr (1) oder falsch (0) sind.

- **AND-Gatter** geben 1 aus, wenn beide Eingänge 1 sind; wenn einer der Eingänge 0 ist, geben diese Gatter 0 aus.
- **OR-Gatter** geben 1 aus, wenn ein oder beide Eingänge 1 sind; wenn beide Eingänge 0 sind, geben diese Gatter 0 aus.
- **XOR-Gatter** geben 1 aus, wenn die Eingänge unterschiedlich sind; wenn die Eingänge gleich sind, geben sie 0 aus.

Gatter warten, bis beide Eingänge empfangen wurden, bevor sie einen Ausgang erzeugen; Drähte können 0, 1 oder keinen Wert führen. Es gibt keine Schleifen; sobald ein Gatter seinen Ausgang bestimmt hat, ändert sich der Ausgang nicht, bis das gesamte System zurückgesetzt wird. Jeder Draht ist mit maximal einem Ausgang eines Gatters verbunden, kann aber mit vielen Eingängen von Gattern verbunden werden.
Um das Risiko eines elektrischen Schocks beim Basteln am laufenden System zu vermeiden, schreibst du alle Gatterverbindungen und Anfangswerte der Drähte (deinen Rätselinput) auf, damit du sie in relativer Sicherheit analysieren kannst. Zum Beispiel:

``` 
x00: 1
x01: 1
x02: 1
y00: 0
y01: 1
y02: 0

x00 AND y00 -> z00
x01 XOR y01 -> z01
x02 OR y02 -> z02
```

Da die Gatter auf Eingaben warten, müssen einige Drähte mit einem Wert starten (als Eingaben für das gesamte System). Der erste Abschnitt gibt diese Werte an. Zum Beispiel bedeutet `x00: 1`, dass der Draht namens `x00` mit dem Wert 1 startet (als ob ein Gatter diesen Wert bereits auf diesen Draht ausgibt).
Der zweite Abschnitt listet alle Gatter und die daran angeschlossenen Drähte auf. Zum Beispiel beschreibt `x00 AND y00 -> z00` eine Instanz eines AND-Gatters, das mit den Drähten `x00` und `y00` verbunden ist und dessen Ausgang auf den Draht `z00` geschrieben wird.
In diesem Beispiel führt die Simulation dieser Gatter schließlich dazu, dass auf Draht `z00` der Wert 0 erscheint, auf Draht `z01` der Wert 0 und auf Draht `z02` der Wert 1.
Das Ziel des Systems ist es, eine Zahl zu erzeugen, indem die Bits aller Drähte kombiniert werden, die mit `z` beginnen. `z00` ist das am wenigsten signifikante Bit, dann `z01`, dann `z02` und so weiter.
In diesem Beispiel bilden die drei Ausgabebits die Binärzahl **100**, was der Dezimalzahl **4** entspricht.
Hier ist ein größeres Beispiel:

``` 
x00: 1
x01: 0
x02: 1
x03: 1
x04: 0
y00: 1
y01: 1
y02: 1
y03: 1
y04: 1

ntg XOR fgs -> mjb
y02 OR x01 -> tnw
kwq OR kpj -> z05
x00 OR x03 -> fst
tgd XOR rvg -> z01
vdt OR tnw -> bfw
bfw AND frj -> z10
ffh OR nrd -> bqk
y00 AND y03 -> djm
y03 OR y00 -> psh
bqk OR frj -> z08
tnw OR fst -> frj
gnj AND tgd -> z11
bfw XOR mjb -> z00
x03 OR x00 -> vdt
gnj AND wpb -> z02
x04 AND y00 -> kjc
djm OR pbm -> qhw
nrd AND vdt -> hwm
kjc AND fst -> rvg
y04 OR y02 -> fgs
y01 AND x02 -> pbm
ntg OR kjc -> kwq
psh XOR fgs -> tgd
qhw XOR tgd -> z09
pbm OR djm -> kpj
x03 XOR y03 -> ffh
x00 XOR y04 -> ntg
bfw OR bqk -> z06
nrd XOR fgs -> wpb
frj XOR qhw -> z04
bqk OR frj -> z07
y03 OR x01 -> nrd
hwm AND bqk -> z03
tgd XOR rvg -> z12
tnw OR pbm -> gnj
```

Nachdem das System alle Werte auf den Drähten mit `z` empfangen hat, haben die Drähte in diesem System folgende Werte:

``` 
bfw: 1
bqk: 1
djm: 1
ffh: 0
fgs: 1
frj: 1
fst: 1
gnj: 1
hwm: 1
kjc: 0
kpj: 1
kwq: 0
mjb: 1
nrd: 1
ntg: 0
pbm: 1
psh: 1
qhw: 1
rvg: 0
tgd: 0
tnw: 1
vdt: 1
wpb: 0
z00: 0
z01: 0
z02: 0
z03: 1
z04: 0
z05: 1
z06: 1
z07: 1
z08: 1
z09: 1
z10: 1
z11: 0
z12: 0
```

Die Kombination der Bits aller Drähte, die mit `z` beginnen, ergibt die Binärzahl **0011111101000**. Umgerechnet in eine Dezimalzahl ergibt dies **2024**.
Simuliere das System aus Gattern und Drähten. Welche Dezimalzahl ergibt sich auf den Drähten, die mit `z` beginnen?

**--- Teil Zwei ---**

Nachdem du das Überwachungsgerät genauer untersucht hast, stellst du fest, dass das System, das du simulierst, versucht, zwei Binärzahlen zu addieren.

Genauer gesagt behandelt das System die Bits auf Drähten, die mit `x` beginnen, als eine Binärzahl, die Bits auf Drähten, die mit `y` beginnen,
als eine zweite Binärzahl und versucht dann, diese beiden Zahlen zusammenzurechnen. Das Ergebnis dieser Addition wird als Binärzahl auf den Drähten ausgegeben,
die mit `z` beginnen. (In allen drei Fällen ist der Draht `00` das niederwertigste Bit, danach folgen `01`, dann `02` und so weiter.)

Die Anfangswerte der Drähte in deinem Rätselinput repräsentieren nur ein Beispiel eines Zahlenpaars, das zu einem falschen Ergebnis führt.
Letztendlich sollte jedes beliebige Bitmuster, das an die Drähte beginnt mit `x` und `y` übergeben wird, korrekt summiert werden. Das heißt,
dass jede Kombination von Bits, die auf den `x`-Drähten und den `y`-Drähten bereitgestellt wird, korrekt als Binärzahl auf den `z`-Drähten ausgegeben werden sollte.

Zum Beispiel, wenn du ein Additionssystem mit vier `x`-Drähten, vier `y`-Drähten und fünf `z`-Drähten hast, solltest du jede vierstellige Binärzahl
auf den `x`-Drähten, jede vierstellige Binärzahl auf den `y`-Drähten angeben können, und schließlich die Summe dieser beiden Zahlen als fünfstellige
Binärzahl auf den `z`-Drähten finden können. Eine Möglichkeit, Zahlen in ein solches System einzuspeisen, wäre zum Beispiel, 11 auf den `x`-Drähten (1011 in Binär)
und 13 auf den `y`-Drähten (1101 in Binär) zu übergeben:

```
x00: 1
x01: 1
x02: 0
x03: 1
y00: 1
y01: 0
y02: 1
y03: 1
```

Wenn das System korrekt funktioniert, solltest du nach der Verarbeitung aller Tore 24 (11+13) auf den `z`-Drähten als die fünfstellige Binärzahl 11000 finden:

```
z00: 0
z01: 0
z02: 0
z03: 1
z04: 1
```

Leider muss dein aktuelles System Zahlen mit wesentlich mehr Bits addieren können und hat daher auch viel mehr Drähte.

Basierend auf forensischen Analysen der Kratzspuren am Gerät kannst du feststellen, dass genau **vier Paare von Toren** ihre Ausgabedrähte vertauscht haben.
(Ein Tor kann nur in höchstens einem solchen Paar sein; die Ausgabedrähte eines einzelnen Tores wurden nicht mehrfach vertauscht.)

Zum Beispiel soll das folgende System das bitweise UND der 6-Bit-Zahlen auf `x00` bis `x05` und `y00` bis `y05` finden
und das Ergebnis als 6-Bit-Zahl auf `z00` bis `z05` schreiben:

```
x00: 0
x01: 1
x02: 0
x03: 1
x04: 0
x05: 1
y00: 0
y01: 0
y02: 1
y03: 1
y04: 0
y05: 1

x00 AND y00 -> z05  
x01 AND y01 -> z02  
x02 AND y02 -> z01  
x03 AND y03 -> z03  
x04 AND y04 -> z04  
x05 AND y05 -> z00

```

In diesem Beispiel wurden zwei Paare von Toren mit vertauschten Ausgängen verschaltet, wodurch das System falsche Antworten liefert.
Das erste Paar vertauschter Tore ist `x00 AND y00 -> z05` und `x05 AND y05 -> z00`; das zweite Paar ist `x01 AND y01 -> z02` und `x02 AND y02 -> z01`.
Wenn diese beiden Vertauschungen korrigiert werden, arbeitet das System wie beabsichtigt für jeden Satz von Anfangswerten auf den Drähten, die mit `x` oder `y` beginnen:

```
x00 AND y00 -> z00  
x01 AND y01 -> z01  
x02 AND y02 -> z02  
x03 AND y03 -> z03  
x04 AND y04 -> z04  
x05 AND y05 -> z05
```

In diesem Beispiel gibt es zwei Paare von Toren, deren Ausgänge vertauscht wurden. Indem du die Namen ihrer Ausgangsdrähte alphabetisch sortierst
und mit Kommata verbindest, ergibt sich die Liste der Drähte, die an den Vertauschungen beteiligt sind: `z00,z01,z02,z05`.

Natürlich ist dein tatsächliches System viel komplexer, und die Tore, deren Ausgänge vertauscht werden müssen, können sich überall befinden, nicht nur an Drähten, die mit `z` beginnen.
Wenn du herausfinden würdest, dass du die Ausgänge der Drähte `aaa` mit `eee`, `ooo` mit `z99`, `bbb` mit `ccc` und `aoc` mit `z24` tauschen musst, wäre die Antwort: `aaa,aoc,bbb,ccc,eee,ooo,z24,z99`.

Dein System aus Toren und Drähten hat vier Paare von Toren, deren Ausgänge vertauscht werden müssen – insgesamt acht Drähte.
**Bestimme, welche vier Paare von Toren ihre Ausgänge vertauschen müssen, damit dein System korrekt addiert;
was ergibt sich, wenn du die Namen der acht Drähte, die in einer Vertauschung verwickelt sind, alphabetisch sortierst und mit Kommata verbindest?**


