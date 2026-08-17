export type FootballQuizDifficulty = 'easy' | 'medium' | 'hard';

export interface FootballQuizQuestion {
	term: string;
	context?: 'Beim Verteidigen' | 'Beim Angreifen';
	prompt: 'Was ist' | 'Was bedeutet';
	difficulty: FootballQuizDifficulty;
	correctAnswer: string;
	wrongAnswers: [string, string, string];
	explanation: string;
}

export const FOOTBALL_QUIZ_GAME_LENGTH = 11;

export const FOOTBALL_QUIZ_QUESTIONS = [
	{
		term: 'hinter den Ball kommen',
		context: 'Beim Verteidigen',
		prompt: 'Was bedeutet',
		difficulty: 'medium',
		correctAnswer: 'Nach einem Ballverlust schnell zurücklaufen und das eigene Tor schützen.',
		wrongAnswers: [
			'Hinter dem Mitspieler mit Ball stehen bleiben.',
			'Dem Ball überall auf dem Feld folgen.',
			'Den Ball immer zum Torwart zurückspielen.',
		],
		explanation:
			'Nach einem Ballverlust läufst du zurück, bis du zwischen Ball und eigenem Tor bist.',
	},
	{
		term: 'in die Tiefe gehen',
		prompt: 'Was bedeutet',
		difficulty: 'medium',
		correctAnswer: 'In den freien Raum hinter der gegnerischen Abwehr laufen.',
		wrongAnswers: [
			'Direkt neben dem Mitspieler mit Ball laufen.',
			'Mit dem Ball zur Seitenlinie dribbeln.',
			'Zum eigenen Tor zurücklaufen.',
		],
		explanation:
			'Mit einem Lauf in die Tiefe kannst du hinter der Abwehr einen Pass bekommen.',
	},
	{
		term: 'die zweite Stange',
		prompt: 'Was ist',
		difficulty: 'easy',
		correctAnswer: 'Die Torstange, die weiter vom Ball entfernt ist.',
		wrongAnswers: [
			'Die Torstange, die näher beim Ball ist.',
			'Die Eckfahne auf der Seite des Balls.',
			'Die Linie in der Mitte des Spielfelds.',
		],
		explanation: 'Die zweite Stange ist immer die Torstange weiter weg vom Ball.',
	},
	{
		term: 'ballnah',
		prompt: 'Was bedeutet',
		difficulty: 'easy',
		correctAnswer: 'Auf der Seite, auf der gerade der Ball ist.',
		wrongAnswers: [
			'Auf der Seite weit weg vom Ball.',
			'Immer direkt vor dem eigenen Tor.',
			'Immer auf der rechten Seite.',
		],
		explanation: 'Ballnah bedeutet: nah beim Ball.',
	},
	{
		term: 'ein Passfenster',
		prompt: 'Was ist',
		difficulty: 'medium',
		correctAnswer: 'Eine freie Lücke, durch die du einen Pass spielen kannst.',
		wrongAnswers: [
			'Ein hoher Pass über das ganze Feld.',
			'Der freie Raum hinter dem eigenen Tor.',
			'Eine kurze Pause vor einem Einwurf.',
		],
		explanation:
			'Ein Passfenster ist eine Lücke zwischen Gegnern, durch die der Ball passt.',
	},
	{
		term: 'ballfern',
		prompt: 'Was bedeutet',
		difficulty: 'easy',
		correctAnswer: 'Auf der Seite, die weiter vom Ball entfernt ist.',
		wrongAnswers: [
			'Direkt beim Spieler mit Ball.',
			'Immer hinter der eigenen Torlinie.',
			'Immer auf der linken Seite.',
		],
		explanation: 'Ballfern bedeutet: weiter weg vom Ball.',
	},
	{
		term: 'das Feld breit machen',
		prompt: 'Was bedeutet',
		difficulty: 'medium',
		correctAnswer: 'Sich im Angriff gut über die ganze Breite verteilen.',
		wrongAnswers: [
			'Sich mit allen Mitspielern in der Mitte sammeln.',
			'Jeden Ball hoch nach vorne schießen.',
			'Nur die Verteidiger nach außen schicken.',
		],
		explanation:
			'Wenn ihr beide Seiten nutzt, muss der Gegner mehr Platz verteidigen.',
	},
	{
		term: 'zur Ballseite verschieben',
		prompt: 'Was bedeutet',
		difficulty: 'hard',
		correctAnswer: 'Das ganze Team bewegt sich gemeinsam in Richtung Ball.',
		wrongAnswers: [
			'Nur der nächste Spieler läuft zum Ball.',
			'Alle Spieler tauschen ihre Position.',
			'Das Team läuft auf die Seite ohne Ball.',
		],
		explanation:
			'Beim Verschieben bewegt ihr euch gemeinsam zur Ballseite und bleibt nah zusammen.',
	},
	{
		term: 'eine Anspielstation',
		prompt: 'Was ist',
		difficulty: 'medium',
		correctAnswer: 'Ein freier Mitspieler, dem du den Ball passen kannst.',
		wrongAnswers: [
			'Die Stelle für einen Einwurf.',
			'Ein Gegner, der deinen Pass abfangen will.',
			'Der Mittelpunkt des Spielfelds.',
		],
		explanation: 'Eine Anspielstation zeigt sich frei und kann deinen Pass bekommen.',
	},
	{
		term: 'Spielaufbau',
		prompt: 'Was ist',
		difficulty: 'medium',
		correctAnswer: 'Den Ball vom eigenen Tor kontrolliert nach vorne spielen.',
		wrongAnswers: [
			'Vor dem Spiel gemeinsam die Tore aufstellen.',
			'Bei jedem Ballkontakt sofort schießen.',
			'Nach einem Foul schnell weiterspielen.',
		],
		explanation:
			'Beim Spielaufbau bringt ihr den Ball mit Pässen vom eigenen Tor nach vorne.',
	},
	{
		term: 'Pressing',
		prompt: 'Was ist',
		difficulty: 'medium',
		correctAnswer: 'Den Gegner gemeinsam unter Druck setzen und den Ball jagen.',
		wrongAnswers: [
			'Nach dem Spiel für ein Foto zusammenstehen.',
			'Mit dem Ball an der Seitenlinie warten.',
			'Mit allen Spielern vor dem eigenen Tor stehen.',
		],
		explanation:
			'Beim Pressing greift ihr gemeinsam an, damit der Gegner einen Fehler macht.',
	},
	{
		term: 'die lange Ecke',
		prompt: 'Was ist',
		difficulty: 'medium',
		correctAnswer: 'Die Seite des Tores, die weiter vom Schützen entfernt ist.',
		wrongAnswers: [
			'Die Seite des Tores direkt beim Schützen.',
			'Die Ecke des Feldes bei der Eckfahne.',
			'Der Platz direkt vor dem Elfmeterpunkt.',
		],
		explanation: 'Die lange Ecke ist vom Schützen weiter weg als die kurze Ecke.',
	},
	{
		term: 'ein Corner',
		prompt: 'Was ist',
		difficulty: 'easy',
		correctAnswer: 'Ein Eckball.',
		wrongAnswers: ['Ein Einwurf.', 'Ein Abstoß.', 'Ein Freistoß.'],
		explanation: 'Corner ist ein anderes Wort für Eckball.',
	},
	{
		term: 'eine Auftaktbewegung',
		prompt: 'Was ist',
		difficulty: 'medium',
		correctAnswer: 'Eine kurze Täuschung, bevor du in den freien Raum startest.',
		wrongAnswers: [
			'Der Anstoß am Beginn des Spiels.',
			'Das Aufwärmen vor dem Training.',
			'Das Zeichen des Schiedsrichters beim Freistoß.',
		],
		explanation:
			'Du täuschst zuerst eine Richtung an und startest dann in die andere.',
	},
	{
		term: 'eine Finte',
		prompt: 'Was ist',
		difficulty: 'easy',
		correctAnswer: 'Eine Täuschung, mit der du am Gegner vorbeikommen willst.',
		wrongAnswers: [
			'Ein weiter Abschlag des Torwarts.',
			'Eine kurze Trinkpause.',
			'Ein Pass absichtlich ins Seitenaus.',
		],
		explanation: 'Bei einer Finte täuschst du etwas an und machst dann etwas anderes.',
	},
	{
		term: 'eine Abseitsfalle',
		prompt: 'Was ist',
		difficulty: 'hard',
		correctAnswer: 'Die Abwehr läuft gemeinsam vor, damit ein Angreifer im Abseits steht.',
		wrongAnswers: [
			'Ein Angreifer wartet unbemerkt hinter dem Torwart.',
			'Der Torwart lässt den Ball ins Toraus rollen.',
			'Die Abwehr stellt sich bei einem Eckball ins Tor.',
		],
		explanation:
			'Für die Abseitsfalle muss die ganze Abwehr im richtigen Moment vorrücken.',
	},
	{
		term: 'ein Gurkerl',
		prompt: 'Was ist',
		difficulty: 'easy',
		correctAnswer: 'Den Ball durch die Beine eines Gegners spielen.',
		wrongAnswers: [
			'Den Ball mit der Ferse zurückspielen.',
			'Den Ball direkt von der Ecke ins Tor schießen.',
			'Den Ball besonders weit einwerfen.',
		],
		explanation:
			'In Österreich heißt es Gurkerl, wenn der Ball durch die Beine des Gegners rollt.',
	},
	{
		term: 'ein Doppelpass',
		prompt: 'Was ist',
		difficulty: 'easy',
		correctAnswer: 'Abspielen, weiterlaufen und den Ball sofort zurückbekommen.',
		wrongAnswers: [
			'Den Ball zweimal mit demselben Fuß berühren.',
			'Zwei lange Pässe hintereinander spielen.',
			'Zweimal zum Torwart zurückspielen.',
		],
		explanation:
			'Beim Doppelpass passt du zu einem Mitspieler und bekommst den Ball direkt zurück.',
	},
	{
		term: 'eine Schwalbe',
		prompt: 'Was ist',
		difficulty: 'easy',
		correctAnswer: 'Ohne echtes Foul fallen und ein Foul vortäuschen.',
		wrongAnswers: [
			'Bei einem Kopfball hochspringen.',
			'Einen hohen Pass über die Abwehr spielen.',
			'Nach einem Zweikampf schnell aufstehen.',
		],
		explanation: 'Eine Schwalbe ist unfair und kann eine gelbe Karte geben.',
	},
	{
		term: 'prallen lassen',
		prompt: 'Was bedeutet',
		difficulty: 'medium',
		correctAnswer: 'Einen Pass mit einem Kontakt direkt weiterspielen.',
		wrongAnswers: [
			'Den Ball stoppen und lange behalten.',
			'Den Ball vom Körper ins Aus springen lassen.',
			'Den Ball hoch über den Torwart lupfen.',
		],
		explanation:
			'Prallen lassen heißt auch klatschen lassen: Du spielst den Pass sofort weiter.',
	},
	{
		term: 'ein Lupfer',
		prompt: 'Was ist',
		difficulty: 'easy',
		correctAnswer: 'Den Ball in einem hohen Bogen über einen Gegner spielen.',
		wrongAnswers: [
			'Den Ball besonders hart und flach schießen.',
			'Den Ball mit der Sohle zurückziehen.',
			'Den Ball mit der Brust stoppen.',
		],
		explanation:
			'Bei einem Lupfer hebst du den Ball mit Gefühl über einen Gegner oder den Torwart.',
	},
	{
		term: 'der Strafraum',
		prompt: 'Was ist',
		difficulty: 'easy',
		correctAnswer: 'Der Bereich vor dem Tor, in dem der Torwart die Hände benutzen darf.',
		wrongAnswers: [
			'Der Kreis in der Mitte des Spielfelds.',
			'Der Platz zwischen Seitenlinie und Zuschauern.',
			'Ein Warteplatz für Spieler mit gelber Karte.',
		],
		explanation:
			'Foult die Abwehr im eigenen Strafraum, kann es einen Elfmeter geben.',
	},
	{
		term: 'eine Mauer',
		prompt: 'Was ist',
		difficulty: 'easy',
		correctAnswer: 'Mehrere Spieler stehen bei einem Freistoß nebeneinander.',
		wrongAnswers: [
			'Die Bande rund um ein Hallenfeld.',
			'Eine Reihe von Zuschauern.',
			'Zwei Stürmer beim Anstoß.',
		],
		explanation: 'Die Mauer soll bei einem Freistoß einen Teil des Tores abdecken.',
	},
	{
		term: 'die Latte',
		prompt: 'Was ist',
		difficulty: 'easy',
		correctAnswer: 'Die waagrechte Stange oben am Tor.',
		wrongAnswers: [
			'Eine senkrechte Stange am Tor.',
			'Die Linie vor dem Strafraum.',
			'Die Bank für Ersatzspieler.',
		],
		explanation: 'Die Latte liegt oben auf den beiden Torpfosten.',
	},
	{
		term: 'ein Übersteiger',
		prompt: 'Was ist',
		difficulty: 'medium',
		correctAnswer: 'Mit dem Fuß um den Ball kreisen und eine Richtung antäuschen.',
		wrongAnswers: [
			'Über einen Spieler am Boden springen.',
			'Den Ball mit dem Kopf über einen Gegner spielen.',
			'Beim Einwurf über die Seitenlinie steigen.',
		],
		explanation:
			'Der Übersteiger ist eine Finte, bevor du in eine andere Richtung dribbelst.',
	},
	{
		term: 'eine Flanke',
		prompt: 'Was ist',
		difficulty: 'easy',
		correctAnswer: 'Den Ball von der Seite vor das gegnerische Tor spielen.',
		wrongAnswers: [
			'Vom Anstoßpunkt zum Torwart zurückspielen.',
			'Einen Freistoß unter der Mauer durchschießen.',
			'Den Ball an der Seitenlinie abschirmen.',
		],
		explanation: 'Eine Flanke kommt von der Seite und fliegt oder rollt vor das Tor.',
	},
	{
		term: 'den Gegner doppeln',
		prompt: 'Was bedeutet',
		difficulty: 'medium',
		correctAnswer: 'Zu zweit gegen den Spieler mit Ball verteidigen.',
		wrongAnswers: [
			'Denselben Gegner zweimal foulen.',
			'Nach einem Tor sofort noch eines schießen.',
			'Die Rückennummer eines Gegners tragen.',
		],
		explanation:
			'Beim Doppeln greift ein Spieler an und ein zweiter hilft ihm dabei.',
	},
	{
		term: 'ein Konter',
		prompt: 'Was ist',
		difficulty: 'easy',
		correctAnswer: 'Nach einem Ballgewinn sofort schnell angreifen.',
		wrongAnswers: [
			'Den Ball immer zum Torwart zurückspielen.',
			'Nach einem Gegentor langsam weiterspielen.',
			'Beim Eckball an der Mittellinie warten.',
		],
		explanation:
			'Beim Konter nutzt ihr schnell den freien Raum, bevor der Gegner zurück ist.',
	},
	{
		term: 'ein Abschluss',
		context: 'Beim Angreifen',
		prompt: 'Was ist',
		difficulty: 'easy',
		correctAnswer: 'Die letzte Aktion eines Angriffs, meistens ein Torschuss.',
		wrongAnswers: [
			'Der Schlusspfiff des Schiedsrichters.',
			'Das Aufräumen nach dem Training.',
			'Ein Rückpass zur eigenen Abwehr.',
		],
		explanation: 'Mit einem Schuss oder Kopfball schließt du den Angriff ab.',
	},
	{
		term: 'kompakt stehen',
		prompt: 'Was bedeutet',
		difficulty: 'hard',
		correctAnswer: 'Als Team mit kleinen Abständen verteidigen.',
		wrongAnswers: [
			'Mit möglichst großen Abständen stehen.',
			'Mit allen Spielern im Strafraum bleiben.',
			'Allein dem nächsten Gegner nachlaufen.',
		],
		explanation:
			'Mit kleinen Abständen lasst ihr dem Gegner wenig Platz zwischen euch.',
	},
	{
		term: 'eine Standardsituation',
		prompt: 'Was ist',
		difficulty: 'hard',
		correctAnswer: 'Eine Spielfortsetzung wie Freistoß, Eckball oder Einwurf.',
		wrongAnswers: [
			'Eine Passfolge während des laufenden Spiels.',
			'Die Aufstellung vor dem Anpfiff.',
			'Eine Trinkpause bei heißem Wetter.',
		],
		explanation:
			'Nach einer Unterbrechung beginnt das Spiel mit einer Standardsituation wieder.',
	},
	{
		term: 'hoch verteidigen',
		prompt: 'Was bedeutet',
		difficulty: 'hard',
		correctAnswer: 'Weit vor dem eigenen Tor stehen und den Gegner früh stören.',
		wrongAnswers: [
			'Nur hohe Bälle mit dem Kopf verteidigen.',
			'Mit allen Spielern direkt vor dem Tor stehen.',
			'Bei jedem Pass in die Höhe springen.',
		],
		explanation:
			'Beim hohen Verteidigen versucht ihr, den Ball weit vorne zu gewinnen.',
	},
	{
		term: 'tief verteidigen',
		prompt: 'Was bedeutet',
		difficulty: 'hard',
		correctAnswer: 'Nah am eigenen Tor stehen und den Raum dahinter schützen.',
		wrongAnswers: [
			'Flache Pässe immer ins Aus spielen.',
			'Nahe beim gegnerischen Tor verteidigen.',
			'Bei jedem Kopfball in die Knie gehen.',
		],
		explanation:
			'Beim tiefen Verteidigen zieht ihr euch näher zum eigenen Tor zurück.',
	},
	{
		term: 'ein Stanglpass',
		prompt: 'Was ist',
		difficulty: 'hard',
		correctAnswer: 'Ein flacher, scharfer Pass quer vor dem Tor.',
		wrongAnswers: [
			'Ein flacher Rückpass an den Strafraumrand.',
			'Eine hohe Flanke vor das Tor.',
			'Ein Pass gerade durch die Abwehr.',
		],
		explanation:
			'Der Stanglpass rollt schnell vor dem Tor zur zweiten Stange.',
	},
	{
		term: 'der Deckungsschatten',
		prompt: 'Was ist',
		difficulty: 'hard',
		correctAnswer: 'Du läufst den Spieler so an, dass dein Körper einen Passweg versperrt.',
		wrongAnswers: [
			'Du greifst den Spieler mit einem Mitspieler von zwei Seiten an.',
			'Du bleibst immer zwischen deinem Gegner und dem eigenen Tor.',
			'Du sicherst nur den Raum hinter einem Mitspieler ab.',
		],
		explanation:
			'In deinem Deckungsschatten kann ein Gegner nur schwer angespielt werden.',
	},
	{
		term: 'sich freilaufen',
		prompt: 'Was bedeutet',
		difficulty: 'hard',
		correctAnswer: 'Sich vom Gegner lösen und in einen freien Raum laufen.',
		wrongAnswers: [
			'Einen Gegner wegziehen, damit ein Mitspieler Platz hat.',
			'Den Ball mit dem Körper vor einem Gegner schützen.',
			'Nach einem Ballverlust einen Mitspieler absichern.',
		],
		explanation:
			'Beim Freilaufen schaffst du Platz zwischen dir und deinem Gegner.',
	},
] satisfies FootballQuizQuestion[];
