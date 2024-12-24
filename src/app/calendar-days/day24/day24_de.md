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
