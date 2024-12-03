--- Tag 2: Red-Nosed-Berichte ---
Glücklicherweise ist der erste Ort, den die Historiker durchsuchen möchten, nicht weit vom Büro des Chefhistorikers entfernt.

Während es im Kernfusions-/Kernspaltungskraftwerk Red-Nosed Reindeer keine Spur vom Chefhistoriker zu geben scheint, rennen die Ingenieure dort sofort auf Sie zu, wenn sie Sie sehen. Anscheinend sprechen sie immer noch über die Zeit, als Rudolph durch die molekulare Synthese aus einem einzigen Elektron gerettet wurde.

Sie fügen schnell hinzu, dass sie – da Sie bereits hier sind – Ihre Hilfe bei der Analyse einiger ungewöhnlicher Daten aus dem Red-Nosed-Reaktor sehr zu schätzen wissen würden. Sie drehen sich um, um nachzuschauen, ob die Historiker auf Sie warten, aber sie scheinen sich bereits in Gruppen aufgeteilt zu haben, die derzeit jede Ecke der Anlage durchsuchen. Sie bieten Ihre Hilfe bei den ungewöhnlichen Daten an.

Die ungewöhnlichen Daten (Ihre Puzzle-Eingabe) bestehen aus vielen Berichten , ein Bericht pro Zeile. Jeder Bericht ist eine Liste von Zahlen, die als Ebenen bezeichnet werden und durch Leerzeichen getrennt sind. Beispiel:

```
7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9
```

Diese Beispieldaten enthalten sechs Berichte mit jeweils fünf Ebenen.

Die Ingenieure versuchen herauszufinden, welche Meldungen sicher sind . Die Sicherheitssysteme des Red-Nosed-Reaktors können nur Pegel tolerieren, die entweder allmählich ansteigen oder allmählich abnehmen. Ein Bericht gilt also nur dann als sicher, wenn beide der folgenden Punkte zutreffen:

Die Pegel sind entweder alle steigend oder alle fallend .
Zwei beliebige benachbarte Ebenen unterscheiden sich um mindestens eins und höchstens drei .
Im obigen Beispiel können die Berichte durch Überprüfen dieser Regeln als sicher oder unsicher eingestuft werden:

```
7 6 4 2 1: Sicher , da die Pegel alle um 1 oder 2 abnehmen.
1 2 7 8 9: Unsicher , da 2 7eine Erhöhung um 5 ist.
9 7 6 2 1: Unsicher , da 6 2eine Verringerung um 4 ist.
1 3 2 4 5: Unsicher , da 1 3zunimmt, aber 3 2abnimmt.
8 6 4 4 1: Unsicher , da 4 4weder eine Erhöhung noch eine Verringerung vorliegt.
1 3 6 7 9: Sicher , da die Stufen alle um 1, 2 oder 3 ansteigen.
```

In diesem Beispiel 2 sind Berichte also sicher .

Analysieren Sie die ungewöhnlichen Daten der Ingenieure. Wie viele Berichte sind sicher?

**--- Zweiter Teil ---**

Die Ingenieure sind überrascht von der geringen Anzahl sicherer Berichte, bis sie feststellen, dass sie vergessen haben, Sie über den Problemdämpfer zu informieren.

Der Problemdämpfer ist ein am Reaktor montiertes Modul, das es den Sicherheitssystemen des Reaktors ermöglicht, einen einzigen fehlerhaften Pegel zu tolerieren, der ansonsten ein sicherer Bericht wäre. Es ist, als hätte es das schlechte Level nie gegeben!

Jetzt gelten die gleichen Regeln wie zuvor, es sei denn, wenn das Entfernen einer einzelnen Ebene aus einem unsicheren Bericht ihn sicher machen würde, zählt der Bericht stattdessen als sicher.

Weitere Berichte aus dem obigen Beispiel sind jetzt sicher:

```
7 6 4 2 1: Sicher, ohne eine Wasserwaage zu entfernen.
1 2 7 8 9: Unsicher, unabhängig davon, welche Ebene entfernt wird.
9 7 6 2 1: Unsicher, unabhängig davon, welche Ebene entfernt wird.
1 3 2 4 5: Sicher durch Entfernen der zweiten Ebene, .3
8 6 4 4 1: Sicher durch Entfernen der dritten Ebene, .4
1 3 6 7 9: Sicher, ohne eine Wasserwaage zu entfernen.
```

Dank des Problemdämpfers sind Berichte tatsächlich sicher!4

Aktualisieren Sie Ihre Analyse, indem Sie Situationen behandeln, in denen der Problemdämpfer eine einzelne Ebene aus unsicheren Berichten entfernen kann. Wie viele Berichte sind jetzt sicher?
