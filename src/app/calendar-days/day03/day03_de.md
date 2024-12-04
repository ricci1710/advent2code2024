--- Tag 3: Denken Sie darüber nach ---
„Unsere Computer haben Probleme, deshalb habe ich keine Ahnung, ob wir noch Chefhistoriker auf Lager haben ! Sie können aber gerne im Lager nachsehen“, sagt der leicht nervöse Ladenbesitzer des North Pole Toboggan Rental Shop . Die Historiker machen sich auf den Weg, um nachzuschauen.

Der Ladenbesitzer wendet sich an Sie. „Können Sie vielleicht erkennen, warum unsere Computer schon wieder Probleme haben?“

Der Computer versucht scheinbar, ein Programm auszuführen, aber sein Speicher (Ihre Puzzle-Eingabe) ist beschädigt . Alle Anweisungen sind durcheinander geraten!

Es scheint, als ob das Ziel des Programms nur darin besteht, einige Zahlen zu multiplizieren . Dies geschieht mit Anweisungen wie mul(X,Y), wobei Xund Yjeweils 1-3-stellige Zahlen sind. Beispielsweise wird mit mul(44,46)multipliziert , um ein Ergebnis von zu erhalten . Ähnlich würde mit multipliziert .44462024mul(123,4)1234

Da der Speicher des Programms jedoch beschädigt wurde, gibt es auch viele ungültige Zeichen, die ignoriert werden sollten , selbst wenn sie wie Teil einer mulAnweisung aussehen. Sequenzen wie mul(4*, mul(6,9!, ?(12,34), oder mul ( 2 , 4 )tun nichts .

Betrachten Sie beispielsweise den folgenden Abschnitt des beschädigten Speichers:

xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))
Nur die vier hervorgehobenen Abschnitte sind echte mulAnweisungen. Die Addition der Ergebnisse der einzelnen Anweisungen ergibt 161( 2*4 + 5*5 + 11*8 + 8*5).

Durchsuchen Sie den beschädigten Speicher nach unbeschädigten mulAnweisungen. Was erhalten Sie, wenn Sie alle Ergebnisse der Multiplikationen addieren?

**--- Teil Zwei ---**

Beim Durchsuchen des beschädigten Speichers stellen Sie fest, dass einige der bedingten Anweisungen noch intakt sind. Wenn Sie einige der unbeschädigten bedingten Anweisungen im Programm bearbeiten, können Sie möglicherweise ein noch genaueres Ergebnis erzielen.

Es gibt zwei neue Anweisungen, die Sie beachten müssen:

Die do() Anweisung aktiviert zukünftige mul Anweisungen.
Die don't() Anweisung deaktiviert zukünftige mul Anweisungen.
Nur die letzte do() oder don't() Anweisung gilt. Zu Beginn des Programms sind die Mul-Befehle aktiviert.

Zum Beispiel:

xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))
Dieser beschädigte Speicher ähnelt dem Beispiel von vorhin, aber dieses Mal sind die Anweisungen mul(5,5) und mul(11,8) deaktiviert, weil ihnen eine don't()-Anweisung vorausgeht. Die anderen mul-Befehle funktionieren normal, einschließlich des Befehls am Ende, der durch einen do()-Befehl wieder aktiviert wird.

Dieses Mal ist die Summe der Ergebnisse 48( 2*4 + 8*5).

Behandeln Sie die neuen Anweisungen. Was erhalten Sie, wenn Sie alle Ergebnisse nur der aktivierten Multiplikationen addieren?

