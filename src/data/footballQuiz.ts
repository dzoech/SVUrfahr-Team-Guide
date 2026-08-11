export interface FootballQuizQuestion {
	term: string;
	correctAnswer: string;
	wrongAnswers: [string, string, string];
	explanation: string;
}

export const FOOTBALL_QUIZ_GAME_LENGTH = 11;

export const FOOTBALL_QUIZ_QUESTIONS = [
	{
		term: 'hinter den Ball kommen',
		correctAnswer:
			'Nach einem Ballverlust zurücklaufen und sich zwischen Ball und eigenem Tor positionieren.',
		wrongAnswers: [
			'Beim Angriff hinter dem Mitspieler mit Ball warten.',
			'Dem Ball überallhin folgen, auch wenn die eigene Position frei bleibt.',
			'Den Ball zurück zum Torwart spielen.',
		],
		explanation:
			'Wer hinter den Ball kommt, schützt zuerst das eigene Tor und kann gemeinsam mit dem Team verteidigen.',
	},
	{
		term: 'in die Tiefe gehen',
		correctAnswer: 'In einen freien Raum hinter der gegnerischen Abwehr starten.',
		wrongAnswers: [
			'Sich direkt neben den Mitspieler mit Ball stellen.',
			'Mit dem Ball langsam zur Seitenlinie dribbeln.',
			'In Richtung des eigenen Tores zurücklaufen.',
		],
		explanation:
			'Mit einem Lauf in die Tiefe nutzt du den freien Raum hinter der Abwehr und kannst dort angespielt werden.',
	},
	{
		term: 'zweite Stange',
		correctAnswer: 'Die Torstange, die weiter vom Ball entfernt ist.',
		wrongAnswers: [
			'Die Torstange, die näher beim Ball ist.',
			'Die Mittellinie zwischen den beiden Toren.',
			'Die Eckfahne auf der Seite des Balles.',
		],
		explanation:
			'Die zweite Stange ist immer die Torstange, die weiter vom Ball entfernt ist.',
	},
	{
		term: 'ballnah',
		correctAnswer: 'Auf der Seite oder in dem Raum nahe beim Ball.',
		wrongAnswers: [
			'Möglichst weit weg vom Ball.',
			'Direkt vor dem eigenen Tor.',
			'Immer auf der rechten Spielfeldseite.',
		],
		explanation:
			'Ballnah bedeutet: auf der Seite oder in dem Raum, in dem sich der Ball gerade befindet.',
	},
	{
		term: 'Passfenster',
		correctAnswer: 'Eine freie Lücke, durch die ein Pass gespielt werden kann.',
		wrongAnswers: [
			'Ein besonders hoher Pass über das ganze Spielfeld.',
			'Der Bereich direkt hinter dem eigenen Tor.',
			'Eine kurze Pause vor einem Einwurf.',
		],
		explanation:
			'Ein Passfenster ist eine freie Lücke zwischen Gegenspielern, durch die dein Mitspieler dich anspielen kann.',
	},
	{
		term: 'ballfern',
		correctAnswer: 'Auf der Seite oder in dem Raum weiter weg vom Ball.',
		wrongAnswers: [
			'Direkt beim ballführenden Gegner.',
			'Hinter der eigenen Torlinie.',
			'Immer auf der linken Spielfeldseite.',
		],
		explanation:
			'Ballfern ist die Seite des Spielfelds, die weiter vom Ball entfernt ist – also fern vom Ball.',
	},
	{
		term: 'das Feld breit machen',
		correctAnswer:
			'Sich mit dem Team über die ganze Spielfeldbreite verteilen, damit freie Räume entstehen.',
		wrongAnswers: [
			'Alle Spieler sammeln sich eng in der Mitte.',
			'Den Ball bei jeder Gelegenheit hoch nach vorne schießen.',
			'Nur die beiden Verteidiger laufen nach außen.',
		],
		explanation:
			'Mit dem Ball nutzen wir beide Seitenlinien. So muss der Gegner größere Räume verteidigen.',
	},
	{
		term: 'zur Ballseite verschieben',
		correctAnswer:
			'Das ganze Team bewegt sich gemeinsam in Richtung Ball und hält die Abstände klein.',
		wrongAnswers: [
			'Nur der Torwart bewegt sich auf die Seite des Balles.',
			'Alle Spieler tauschen gleichzeitig ihre Positionen.',
			'Das Team läuft geschlossen auf die ballferne Seite.',
		],
		explanation:
			'Beim Verschieben bewegt sich das Team gemeinsam zur Ballseite und bleibt dabei kompakt.',
	},
	{
		term: 'Anspielstation',
		correctAnswer: 'Ein freier Mitspieler, der den Ball bekommen kann.',
		wrongAnswers: [
			'Die Stelle, an der ein Einwurf ausgeführt wird.',
			'Ein Gegenspieler, der den Pass abfangen soll.',
			'Der Mittelpunkt des Spielfelds.',
		],
		explanation:
			'Eine Anspielstation zeigt sich in einem freien Raum und kann einen Pass annehmen.',
	},
	{
		term: 'Spielaufbau',
		correctAnswer: 'Den Ball vom Torwart oder der Abwehr kontrolliert nach vorne spielen.',
		wrongAnswers: [
			'Vor dem Spiel gemeinsam die Tore aufstellen.',
			'Bei jedem Ballkontakt sofort auf das Tor schießen.',
			'Nach einem Foul den Freistoß schnell ausführen.',
		],
		explanation:
			'Beim Spielaufbau bringen wir den Ball kontrolliert vom eigenen Tor in Richtung Angriff.',
	},
	{
		term: 'Pressing',
		correctAnswer:
			'Den Gegner gemeinsam unter Druck setzen, um den Ball zu gewinnen oder einen Fehler zu erzwingen.',
		wrongAnswers: [
			'Nach einem gewonnenen Spiel für ein Mannschaftsfoto posieren.',
			'Mit dem Ball möglichst lange an der Seitenlinie warten.',
			'Alle Spieler ziehen sich bis zum eigenen Tor zurück.',
		],
		explanation:
			'Beim Pressing setzt das Team den Gegner gemeinsam unter Druck und versucht, den Ball zurückzugewinnen.',
	},
	{
		term: 'Lange Ecke',
		correctAnswer: 'Der Bereich im Tor, der vom Schützen weiter entfernt ist.',
		wrongAnswers: [
			'Der Bereich im Tor, der dem Schützen am nächsten ist.',
			'Die Ecke des Spielfelds bei der Eckfahne.',
			'Der Raum direkt vor dem Elfmeterpunkt.',
		],
		explanation:
			'Die lange Ecke ist die vom Schützen weiter entfernte Seite des Tores. Die nähere Seite heißt kurze Ecke.',
	},
	{
		term: 'Corner',
		correctAnswer: 'Ein Eckball.',
		wrongAnswers: [
			'Ein Einwurf.',
			'Ein Abstoß.',
			'Ein direkter Freistoß.',
		],
		explanation:
			'Corner ist ein anderes Wort für Eckball. Er wird von der Ecke des Spielfelds ausgeführt.',
	},
	{
		term: 'Auftaktbewegung',
		correctAnswer:
			'Eine kurze Bewegung vor dem eigentlichen Lauf, mit der du dich vom Gegner löst.',
		wrongAnswers: [
			'Der Anstoß zu Beginn eines Spiels.',
			'Das gemeinsame Aufwärmen vor dem Training.',
			'Das Handzeichen des Schiedsrichters vor einem Freistoß.',
		],
		explanation:
			'Mit einer Auftaktbewegung täuschst du zuerst eine Richtung an und startest dann in den freien Raum.',
	},
	{
		term: 'Finte',
		correctAnswer: 'Eine Täuschbewegung, mit der du einen Gegner in die falsche Richtung lockst.',
		wrongAnswers: [
			'Ein besonders weiter Abschlag des Torwarts.',
			'Eine kurze Trinkpause während des Trainings.',
			'Ein Pass, der absichtlich ins Seitenaus gespielt wird.',
		],
		explanation:
			'Bei einer Finte täuschst du eine Bewegung oder Richtung an und machst danach etwas anderes.',
	},
	{
		term: 'Abseitsfalle',
		correctAnswer:
			'Die Abwehr rückt gemeinsam nach vorne, damit ein Angreifer beim Pass im Abseits steht.',
		wrongAnswers: [
			'Ein Angreifer versteckt sich hinter dem Torwart.',
			'Der Torwart lässt einen Ball absichtlich ins Toraus rollen.',
			'Die Abwehr stellt sich bei einem Eckball auf die Torlinie.',
		],
		explanation:
			'Bei der Abseitsfalle rückt die Abwehr im richtigen Moment gemeinsam vor. Das funktioniert nur mit guter Abstimmung.',
	},
	{
		term: 'Gurkerl',
		correctAnswer: 'Den Ball durch die Beine eines Gegners spielen.',
		wrongAnswers: [
			'Den Ball mit der Ferse nach hinten spielen.',
			'Den Ball direkt von der Eckfahne ins Tor schießen.',
			'Den Ball mit beiden Händen über den Kopf einwerfen.',
		],
		explanation:
			'In Österreich nennt man es Gurkerl, wenn der Ball durch die Beine eines Gegners gespielt wird.',
	},
	{
		term: 'Doppelpass',
		correctAnswer:
			'Zu einem Mitspieler passen, sofort weiterlaufen und den Ball direkt zurückbekommen.',
		wrongAnswers: [
			'Den Ball zweimal hintereinander mit demselben Fuß berühren.',
			'Zwei lange Pässe nacheinander auf die andere Spielfeldseite spielen.',
			'Den Ball zuerst zum Torwart und danach ins Seitenaus spielen.',
		],
		explanation:
			'Beim Doppelpass spielst du ab, läufst weiter und bekommst den Ball mit einem direkten Rückpass wieder.',
	},
	{
		term: 'Schwalbe',
		correctAnswer: 'Sich ohne echtes Foul absichtlich fallen lassen, um ein Foul vorzutäuschen.',
		wrongAnswers: [
			'Bei einem Kopfball mit beiden Füßen vom Boden abspringen.',
			'Den Ball mit einem weiten Pass über die Abwehr spielen.',
			'Nach einem Zweikampf sofort wieder aufstehen.',
		],
		explanation:
			'Bei einer Schwalbe täuscht ein Spieler ein Foul vor. Das ist unfair und kann mit einer gelben Karte bestraft werden.',
	},
	{
		term: 'prallen lassen',
		correctAnswer:
			'Ein Zuspiel mit nur einem Kontakt direkt zu einem Mitspieler zurück- oder weiterspielen.',
		wrongAnswers: [
			'Den Ball nach der Annahme möglichst lange halten.',
			'Den Ball absichtlich vom eigenen Körper ins Aus springen lassen.',
			'Den Ball hoch über den Torwart lupfen.',
		],
		explanation:
			'Prallen lassen, tropfen lassen und klatschen lassen sind drei Begriffe für dieselbe Aktion: den Ball direkt zurück- oder weiterspielen.',
	},
	{
		term: 'tropfen lassen',
		correctAnswer:
			'Ein Zuspiel mit nur einem Kontakt direkt zu einem Mitspieler zurück- oder weiterspielen.',
		wrongAnswers: [
			'Den Ball ohne Berührung durch die Beine laufen lassen.',
			'Den Ball bei Regen besonders flach spielen.',
			'Den Ball aus den Händen auf den Boden fallen lassen.',
		],
		explanation:
			'Tropfen lassen, prallen lassen und klatschen lassen sind drei Begriffe für dieselbe Aktion: den Ball direkt zurück- oder weiterspielen.',
	},
	{
		term: 'klatschen lassen',
		correctAnswer:
			'Ein Zuspiel mit nur einem Kontakt direkt zu einem Mitspieler zurück- oder weiterspielen.',
		wrongAnswers: [
			'Nach einer guten Aktion für den Mitspieler applaudieren.',
			'Den Ball mit beiden Händen auf den Boden schlagen.',
			'Den Ball stoppen und danach zur Seite dribbeln.',
		],
		explanation:
			'Klatschen lassen, prallen lassen und tropfen lassen sind drei Begriffe für dieselbe Aktion: den Ball direkt zurück- oder weiterspielen.',
	},
	{
		term: 'Lupfer',
		correctAnswer: 'Den Ball mit einem gefühlvollen hohen Bogen über einen Gegner spielen.',
		wrongAnswers: [
			'Den Ball besonders hart und flach schießen.',
			'Den Ball mit der Fußsohle nach hinten ziehen.',
			'Den Ball mit der Brust stoppen.',
		],
		explanation:
			'Bei einem Lupfer hebst du den Ball gefühlvoll an, damit er in einem Bogen über einen Gegner oder den Torwart fliegt.',
	},
	{
		term: 'Strafraum',
		correctAnswer:
			'Der markierte Bereich vor dem Tor, in dem der Torwart den Ball mit den Händen spielen darf.',
		wrongAnswers: [
			'Der Kreis in der Mitte des Spielfelds.',
			'Der Bereich zwischen Seitenlinie und Zuschauerplätzen.',
			'Die Zone, in der ein Spieler nach einer gelben Karte warten muss.',
		],
		explanation:
			'Der Strafraum wird auch Box genannt. Begeht die verteidigende Mannschaft dort ein Foul, kann es Elfmeter geben.',
	},
	{
		term: 'Mauer',
		correctAnswer: 'Mehrere Spieler stellen sich bei einem Freistoß nebeneinander vor das Tor.',
		wrongAnswers: [
			'Die Bande rund um ein Hallenfußballfeld.',
			'Eine besonders dichte Reihe von Zuschauern.',
			'Zwei Stürmer stellen sich beim Anstoß nebeneinander.',
		],
		explanation:
			'Eine Mauer soll bei einem Freistoß einen Teil des Tores abdecken und den direkten Schuss erschweren.',
	},
	{
		term: 'Latte',
		correctAnswer: 'Die waagrechte obere Stange des Tores.',
		wrongAnswers: [
			'Eine der beiden senkrechten Stangen des Tores.',
			'Die Linie vor dem Strafraum.',
			'Die Bank für die Ersatzspieler.',
		],
		explanation:
			'Die Latte ist die waagrechte Stange oben am Tor. Die beiden senkrechten Stangen stehen links und rechts.',
	},
	{
		term: 'Übersteiger',
		correctAnswer:
			'Mit dem Fuß über oder rund um den Ball kreisen, um eine Dribbelrichtung vorzutäuschen.',
		wrongAnswers: [
			'Über einen am Boden liegenden Mitspieler springen.',
			'Den Ball mit dem Kopf über einen Gegner spielen.',
			'Beim Einwurf mit einem Fuß über die Seitenlinie steigen.',
		],
		explanation:
			'Der Übersteiger ist eine Finte: Dein Fuß kreist um den Ball, bevor du in eine andere Richtung wegdribbelst.',
	},
	{
		term: 'Flanke',
		correctAnswer: 'Den Ball von der Seite vor das gegnerische Tor spielen.',
		wrongAnswers: [
			'Den Ball vom Anstoßpunkt zum Torwart zurückspielen.',
			'Den Ball bei einem Freistoß unter der Mauer durchschießen.',
			'Den Ball an der Seitenlinie mit dem Körper abschirmen.',
		],
		explanation:
			'Eine Flanke kommt meist von der Seite und wird vor das Tor gespielt, damit ein Mitspieler abschließen kann.',
	},
	{
		term: 'den Gegner doppeln',
		correctAnswer: 'Zu zweit gegen den ballführenden Gegner verteidigen.',
		wrongAnswers: [
			'Denselben Gegenspieler zweimal hintereinander foulen.',
			'Nach einem Tor sofort ein zweites Tor erzielen.',
			'Die Rückennummer eines Gegners übernehmen.',
		],
		explanation:
			'Beim Doppeln setzt ein Spieler den Gegner unter Druck, während ein zweiter Spieler hilft und absichert.',
	},
	{
		term: 'Konter',
		correctAnswer:
			'Nach einem Ballgewinn schnell angreifen, bevor sich der Gegner wieder sortiert hat.',
		wrongAnswers: [
			'Den Ball bei jeder Gelegenheit zurück zum Torwart spielen.',
			'Nach einem Gegentor besonders langsam weiterspielen.',
			'Bei einem Eckball alle Spieler an der Mittellinie aufstellen.',
		],
		explanation:
			'Bei einem Konter schaltet das Team nach einem Ballgewinn schnell auf Angriff um und nutzt die freien Räume.',
	},
	{
		term: 'Abschluss',
		correctAnswer: 'Die letzte Aktion eines Angriffs, meistens ein Schuss auf das Tor.',
		wrongAnswers: [
			'Der Schlusspfiff des Schiedsrichters.',
			'Das gemeinsame Zusammenräumen nach dem Training.',
			'Ein Rückpass aus dem Mittelfeld zur eigenen Abwehr.',
		],
		explanation:
			'Mit dem Abschluss beendest du einen Angriff – meistens durch einen Schuss oder Kopfball auf das Tor.',
	},
	{
		term: 'kompakt stehen',
		correctAnswer:
			'Als Team mit kleinen Abständen zusammenstehen, damit der Gegner wenig freie Räume hat.',
		wrongAnswers: [
			'Alle Spieler stehen möglichst weit voneinander entfernt.',
			'Die Mannschaft bleibt bei jedem Angriff im eigenen Strafraum.',
			'Jeder Spieler läuft allein seinem nächsten Gegner hinterher.',
		],
		explanation:
			'Wenn wir kompakt stehen, sind die Abstände zwischen uns klein und der Gegner findet nur schwer einen Weg durch unser Team.',
	},
	{
		term: 'Standardsituation',
		correctAnswer:
			'Eine festgelegte Spielfortsetzung nach einer Unterbrechung, zum Beispiel Freistoß oder Eckball.',
		wrongAnswers: [
			'Eine normale Passfolge aus dem laufenden Spiel.',
			'Die Startaufstellung einer Mannschaft vor dem Anpfiff.',
			'Eine Trinkpause bei besonders heißem Wetter.',
		],
		explanation:
			'Freistöße, Eckbälle, Einwürfe und Elfmeter sind Standardsituationen, die ein Team gezielt vorbereiten kann.',
	},
	{
		term: 'hoch verteidigen',
		correctAnswer:
			'Weit weg vom eigenen Tor stehen und den Gegner schon früh unter Druck setzen.',
		wrongAnswers: [
			'Nur hohe Bälle mit dem Kopf verteidigen.',
			'Alle Spieler stellen sich direkt vor das eigene Tor.',
			'Die Verteidiger springen bei jedem Pass in die Höhe.',
		],
		explanation:
			'Beim hohen Verteidigen steht das Team weiter vorne im Feld und versucht, den Gegner früh unter Druck zu setzen.',
	},
	{
		term: 'tief verteidigen',
		correctAnswer:
			'Nahe am eigenen Tor stehen und dem Gegner wenig Raum hinter der Abwehr lassen.',
		wrongAnswers: [
			'Flache Pässe grundsätzlich ins Seitenaus spielen.',
			'Die Abwehr stellt sich nahe beim gegnerischen Tor auf.',
			'Alle Spieler gehen bei einem Kopfball in die Knie.',
		],
		explanation:
			'Beim tiefen Verteidigen zieht sich das Team näher zum eigenen Tor zurück und schützt besonders den Raum hinter der Abwehr.',
	},
] satisfies FootballQuizQuestion[];
