**--- Tag 23: LAN-Party ---**

Während sich die Historiker in einem sicheren Bereich im Hauptquartier des Osterhasen bewegen, stoßt ihr auf Poster für eine LAN-Party,
die heute stattfinden soll! Vielleicht könnt ihr sie finden; ihr verbindet euch mit einem nahegelegenen Datenlink-Port und ladet eine Karte
des lokalen Netzwerks herunter (eure Rätsel-Eingabe).

Die Netzwerkkarte stellt eine Liste jeder Verbindung zwischen zwei Computern bereit. Zum Beispiel:

```
kh-tc
qp-kh
de-cg
ka-co
yn-aq
qp-ub
cg-tb
vc-aq
tb-ka
wh-tc
yn-cg
kh-ub
ta-co
de-co
tc-td
tb-wq
wh-td
ta-ka
td-qp
aq-cg
wq-ub
ub-vc
de-ta
wq-aq
wq-vc
wh-yn
ka-de
kh-ta
co-tc
wh-qp
tb-vc
td-yn
```

Jede Zeile im Netzwerkplan stellt eine einzelne Verbindung dar; die Zeile `kh-tc` repräsentiert eine Verbindung zwischen dem Computer `kh` und dem Computer `tc`. Die Verbindungen sind nicht gerichtet; `tc-kh` würde genau dasselbe bedeuten.

LAN-Partys beinhalten typischerweise Mehrspieler-Spiele, also könnt ihr versuchen, sie zu finden, indem ihr Gruppen verbundener Computer sucht. Beginnt damit, Gruppen von drei Computern zu finden, bei denen jeder Computer mit den beiden anderen Computern verbunden ist.

In diesem Beispiel gibt es 12 solcher Gruppen von drei miteinander verbundenen Computern:

```
aq,cg,yn
aq,vc,wq
co,de,ka
co,de,ta
co,ka,ta
de,ka,ta
kh,qp,ub
qp,td,wh
tb,vc,wq
tc,td,wh
td,wh,yn
ub,vc,wq
```

Falls der Chefhistoriker hier ist und an der LAN-Party teilnimmt, wäre es am besten, das sofort zu wissen. Ihr seid euch ziemlich sicher, dass der Name seines Computers mit `t` beginnt, also betrachtet nur Gruppen von drei Computern, bei denen mindestens ein Computername mit `t` beginnt. Dies reduziert die Liste auf 7 Gruppen von drei miteinander verbundenen Computern:

```
co,de,ta
co,ka,ta
de,ka,ta
qp,td,wh
tb,vc,wq
tc,td,wh
td,wh,yn
```

Finde alle Gruppen von drei miteinander verbundenen Computern. Wie viele enthalten mindestens einen Computer mit einem Namen, der mit `t` beginnt?
