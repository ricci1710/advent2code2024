**--- Tag 5: Warteschlange drucken ---**

Zufrieden mit ihrer Suche auf Ceres, schlägt das Geschwader der Gelehrten vor, anschließend die Papierstapel des Untergeschosses 17 zu durchsuchen.

In der Druckerei des Nordpols ist kurz vor Weihnachten mehr los als je zuvor, und während die Historiker ihre Suche in dieser historisch bedeutsamen Einrichtung fortsetzen, winkt euch ein Elf heran, der einen sehr bekannten Drucker bedient.

Der Elf muss dich erkennen, denn er erklärt dir sofort, dass die neuen Sicherheitshandbücher für den Schlittenstart nicht richtig gedruckt werden können. Wenn die Sicherheitshandbücher nicht aktualisiert würden, wäre das in der Tat schlimm, also bieten Sie Ihre Dienste an.

Aus den Sicherheitsprotokollen geht eindeutig hervor, dass neue Seiten für die Sicherheitshandbücher in einer ganz bestimmten Reihenfolge gedruckt werden müssen. Die Notation X|Y bedeutet, dass, wenn sowohl Seite X als auch Seite Y im Rahmen einer Aktualisierung erstellt werden sollen, Seite X irgendwann vor Seite Y gedruckt werden muss.

Elf hat für Sie sowohl die Regeln für die Seitenreihenfolge als auch die Seiten, die in jeder Aktualisierung produziert werden sollen (Ihre Rätseleingabe), kann aber nicht herausfinden, ob jede Aktualisierung die Seiten in der richtigen Reihenfolge enthält.

```
Zum Beispiel:

47|53
97|13
97|61
97|47
75|29
61|13
75|53
29|13
97|29
53|29
61|53
97|53
61|29
47|13
75|47
97|75
47|61
75|61
47|29
75|13
53|13

75,47,61,53,29
97,61,53,29,13
75,29,13
75,97,47,61,53
61,13,29
97,13,75,29,47
```

Der erste Abschnitt gibt die Regeln für die Seitenreihenfolge an, eine pro Zeile. Die erste Regel, 47|53, bedeutet, dass, wenn eine Aktualisierung sowohl die Seitenzahl 47 als auch die Seitenzahl 53 enthält, die Seitenzahl 47 irgendwann vor der Seitenzahl 53 gedruckt werden muss. (47 muss nicht unbedingt unmittelbar vor 53 stehen; andere Seiten können dazwischen liegen.)

Im zweiten Abschnitt werden die Seitenzahlen der einzelnen Aktualisierungen angegeben. Da die meisten Sicherheitshandbücher unterschiedlich sind, sind auch die für die Aktualisierungen benötigten Seiten unterschiedlich. Die erste Aktualisierung, 75,47,61,53,29, bedeutet, dass die Aktualisierung aus den Seitenzahlen 75, 47, 61, 53 und 29 besteht.

Um die Drucker so schnell wie möglich in Betrieb zu nehmen, müssen Sie zunächst feststellen, welche Aktualisierungen bereits in der richtigen Reihenfolge sind.

Im obigen Beispiel befindet sich die erste Aktualisierung (75,47,61,53,29) in der richtigen Reihenfolge:

```
- 75 steht korrekt an erster Stelle, weil es Regeln gibt, die jede andere Seite nach ihr platzieren: 75|47, 75|61, 75|53 und 75|29.
- 47 steht korrekt an zweiter Stelle, weil 75 davor stehen muss (75|47) und jede andere Seite nach 47|61, 47|53, und 47|29 stehen muss.
- 61 ist richtig in der Mitte, weil 75 und 47 davor liegen (75|61 und 47|61) und 53 und 29 danach (61|53 und 61|29).
- 53 ist richtig an vierter Stelle, weil sie vor der Seitenzahl 29 liegt (53|29).
- 29 ist die einzige noch verbleibende Seite und damit korrekt die letzte.
```

Da die erste Aktualisierung einige Seitenzahlen nicht enthält, werden die Ordnungsregeln, die diese fehlenden Seitenzahlen betreffen, ignoriert.

Die zweite und dritte Aktualisierung sind ebenfalls in der korrekten Reihenfolge gemäß den Regeln. Wie bei der ersten Aktualisierung sind auch hier nicht alle Seitenzahlen enthalten, so dass nur einige der Ordnungsregeln gelten - innerhalb jeder Aktualisierung werden die Ordnungsregeln, die fehlende Seitenzahlen betreffen, nicht verwendet.

Die vierte Aktualisierung, 75,97,47,61,53, ist nicht in der richtigen Reihenfolge: Sie würde 75 vor 97 drucken, was gegen die Regel 97|75 verstößt.

Die fünfte Aktualisierung, 61,13,29, ist ebenfalls nicht in der richtigen Reihenfolge, da sie die Regel 29|13 bricht.

Die letzte Aktualisierung, 97,13,75,29,47, ist nicht in der richtigen Reihenfolge, da sie mehrere Regeln bricht.

Aus irgendeinem Grund müssen die Elfen auch die mittlere Seitenzahl jeder zu druckenden Aktualisierung kennen. Da Sie derzeit nur die korrekt geordneten Aktualisierungen drucken, müssen Sie die mittlere Seitenzahl jeder korrekt geordneten Aktualisierung ermitteln. Im obigen Beispiel lauten die korrekt geordneten Aktualisierungen:

```
75,47,61,53,29
97,61,53,29,13
75,29,13
```

Diese haben die mittleren Seitenzahlen 61, 53 bzw. 29. Wenn Sie diese Seitenzahlen addieren, erhalten Sie **143**.

Natürlich müssen Sie vorsichtig sein: Die tatsächliche Liste der Regeln für die Seitenreihenfolge ist größer und komplizierter als das obige Beispiel.

Stellen Sie fest, welche Aktualisierungen sich bereits in der richtigen Reihenfolge befinden.
Was erhalten Sie, wenn Sie die mittlere Seitenzahl der korrekt geordneten Aktualisierungen zusammenzählen?
