--- Tag 1: Historiker-Hysterie ---
Der Chefhistoriker ist immer beim großen Weihnachtsschlittenstart dabei, aber seit Monaten hat ihn niemand mehr gesehen! Das letzte Mal, dass jemand davon gehört hat, war, dass er Orte besuchte, die für den Nordpol historisch bedeutsam sind. Eine Gruppe von leitenden Historikern hat Sie gebeten, sie zu begleiten, während sie die Orte überprüfen, von denen sie denken, dass er sie am wahrscheinlichsten besuchen wird.

Nachdem sie alle Orte abgehakt haben, markieren sie diese auf ihrer Liste mit einem Stern . Sie gehen davon aus, dass der Chefhistoriker an einem der ersten fünfzig Orte sein muss , an denen sie suchen. Um Weihnachten zu retten, müssen Sie ihnen also helfen, fünfzig Sterne auf ihre Liste zu bekommen, bevor der Weihnachtsmann am 25. Dezember aufbricht.

Sammle Sterne, indem du Rätsel löst. An jedem Tag im Adventskalender werden zwei Rätsel zur Verfügung gestellt; das zweite Rätsel wird freigeschaltet, wenn du das erste gelöst hast. Jedes Rätsel gewährt einen Stern . Viel Glück!

Sie sind noch nicht einmal aufgebrochen, und die Gruppe der elbischen Seniorhistoriker ist bereits auf ein Problem gestoßen: Ihre Liste der zu überprüfenden Orte ist derzeit leer . Schließlich beschließt jemand, dass der beste Ort, den man zuerst überprüfen sollte, das Büro des Chefhistorikers wäre.

Als alle ins Büro strömen, bestätigen sie, dass der Chefhistoriker tatsächlich nirgends zu finden ist. Stattdessen entdecken die Elfen eine Reihe von Notizen und Listen mit historisch bedeutsamen Orten! Dies scheint die Planung zu sein, die der Chefhistoriker vor seiner Abreise gemacht hat. Vielleicht können diese Notizen verwendet werden, um zu bestimmen, an welchen Orten gesucht werden soll?

Im gesamten Büro des Chefs sind die historisch bedeutsamen Orte nicht namentlich aufgeführt, sondern mit einer eindeutigen Nummer, der sogenannten Standort-ID . Um sicherzustellen, dass ihnen nichts entgeht, teilten sich die Historiker in zwei Gruppen auf, von denen jede das Büro durchsuchte und versuchte, ihre eigene vollständige Liste mit Standort-IDs zu erstellen.

Es gibt nur ein Problem: Wenn man die beiden Listen nebeneinander hält (Ihre Puzzle-Eingabe), wird schnell klar, dass die Listen nicht sehr ähnlich sind. Vielleicht können Sie den Historikern helfen, ihre Listen in Einklang zu bringen?

Zum Beispiel:

3 4
4 3
2 5
1 3
3 9
3 3
Vielleicht weichen die Listen nur geringfügig voneinander ab! Um das herauszufinden, bilde Paare aus den Zahlen und miss, wie weit sie auseinander liegen. Bilde Paare aus der kleinsten Zahl in der linken Liste und der kleinsten Zahl in der rechten Liste , dann aus der zweitkleinsten Zahl links und der zweitkleinsten Zahl rechts und so weiter.

Ermitteln Sie innerhalb jedes Paares, wie weit die beiden Zahlen auseinander liegen; Sie müssen alle diese Abstände addieren . Wenn Sie beispielsweise ein Paar 3aus der linken Liste mit einem Paar 7aus der rechten Liste bilden, beträgt der Abstand ; wenn Sie ein Paar mit einem Paar 4bilden , beträgt der Abstand .936

In der obigen Beispielliste wären die Paare und Entfernungen wie folgt:

Die kleinste Zahl in der linken Liste ist 1, und die kleinste Zahl in der rechten Liste ist 3. Der Abstand zwischen ihnen beträgt 2.
Die zweitkleinste Zahl in der linken Liste ist 2, und die zweitkleinste Zahl in der rechten Liste ist eine weitere 3. Der Abstand zwischen ihnen beträgt 1.
Die drittkleinste Zahl in beiden Listen ist 3, also beträgt der Abstand zwischen ihnen 0.
Die nächsten zu paarenden Zahlen sind 3und 4, im Abstand von 1.
Die fünftkleinsten Zahlen in jeder Liste sind 3und 5, eine Distanz von 2.
Schließlich ist die größte Zahl in der linken Liste 4, während die größte Zahl in der rechten Liste ist 9; diese liegen in einem gewissen 5Abstand voneinander.
Um die Gesamtdistanz zwischen der linken und der rechten Liste zu ermitteln, addieren Sie die Distanzen zwischen allen gefundenen Paaren. Im obigen Beispiel ist dies 2 + 1 + 0 + 1 + 2 + 5, eine Gesamtdistanz von 11!

Ihre aktuellen linken und rechten Listen enthalten viele Standort-IDs. Wie groß ist der Gesamtabstand zwischen Ihren Listen?

--- Teil Zwei ---
Ihre Analyse hat nur bestätigt, was alle befürchtet haben: Die beiden Listen mit Standort-IDs sind tatsächlich sehr unterschiedlich.

Oder doch?

Die Historiker sind sich nicht einig, welche Gruppe die Fehler gemacht hat oder wie die Handschrift des Chefs größtenteils zu lesen ist, doch in der Aufregung fällt ein interessantes Detail auf: In beiden Listen tauchen viele Orts-IDs auf! Vielleicht sind die anderen Zahlen gar keine Orts-IDs, sondern falsch interpretierte Handschriften.

Dieses Mal müssen Sie genau herausfinden, wie oft jede Zahl aus der linken Liste in der rechten Liste vorkommt. Berechnen Sie einen Gesamtähnlichkeitswert, indem Sie alle Zahlen in der linken Liste addieren und mit der Häufigkeit multiplizieren, mit der diese Zahl in der rechten Liste vorkommt.

Hier noch einmal die gleichen Beispiellisten:

3 4
4 3
2 5
1 3
3 9
3 3

So ermitteln Sie den Ähnlichkeitswert für diese Beispiellisten:

Die erste Zahl in der linken Liste ist 3. In der rechten Liste kommt sie dreimal vor, daher erhöht sich der Ähnlichkeitswert um .3 * 3 = 9
Die zweite Zahl in der linken Liste ist 4. Sie erscheint einmal in der rechten Liste, daher erhöht sich der Ähnlichkeitswert um .4 * 1 = 4
Die dritte Zahl in der linken Liste ist 2. Sie erscheint nicht in der rechten Liste, daher erhöht sich der Ähnlichkeitswert nicht ( 2 * 0 = 0).
Auch die vierte Nummer, 1, erscheint nicht in der rechten Liste.
Die fünfte Zahl, 3, erscheint dreimal in der rechten Liste; der Ähnlichkeitswert erhöht sich um 9.
Die letzte Zahl, 3, erscheint in der rechten Liste dreimal; der Ähnlichkeitswert erhöht sich erneut um 9.
Für diese Beispiellisten beträgt der Ähnlichkeitswert am Ende dieses Prozesses also 31( 9 + 4 + 0 + 0 + 9 + 9).

Betrachten Sie noch einmal Ihre linke und rechte Liste. Wie hoch ist ihr Ähnlichkeitswert?
