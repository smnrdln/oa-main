i18n.registerContent('de', 'level4', [
    {
        title: 'Spezialisierungspfade für Embedded und Robotik',
        content: `
            <h3>🧭 Warum spezialisieren?</h3>
            <p>Ab einem gewissen Niveau bringt Breite allein wenig. Entscheidend wird, in einem Schwerpunkt belastbar tiefer zu werden.</p>

            <h3>🧩 Typische Vertiefungsrichtungen</h3>
            <ul>
                <li><strong>High-Speed-Digital:</strong> SI, DDR, SerDes, komplexe Mehrlagenboards</li>
                <li><strong>Leistungselektronik:</strong> Motorantriebe, Umrichter, thermisch anspruchsvolle Systeme</li>
                <li><strong>Präzisions-Messtechnik:</strong> Sensorfrontends, Kalibrierung, rauscharme Analogtechnik</li>
                <li><strong>Funk und Antennen:</strong> HF-Layout, Matching, Zertifizierung</li>
                <li><strong>Sicherheitskritische Systeme:</strong> Diagnose, Redundanz, Testkonzepte, Prozessreife</li>
            </ul>

            <h3>📚 Wissensaufbau</h3>
            <ul>
                <li>Reale Projekte, Laborerfahrung und Fehleranalysen sind wichtiger als reine Theorie</li>
                <li>Fachliteratur, Application Notes und Design Reviews sollten gezielt ausgewählt werden</li>
            </ul>
        `,
        keyPoints: ['Spezialisierung schafft Tiefe und technische Wiedererkennbarkeit', 'Jeder Schwerpunkt verlangt andere Werkzeuge und andere Designprioritäten', 'Praxis, Reviews und Fehlerrückkopplung beschleunigen die Spezialisierung massiv'],
        relatedTopics: [{ level: 'level3', index: 1, label: 'Signalintegrität (SI) für Embedded-Systeme' }, { level: 'level3', index: 2, label: 'Power Integrity und fortgeschrittenes Versorgungsdesign' }]
    },
    {
        title: 'Fortgeschrittene Signal- und Power-Integrity-Simulation',
        content: `
            <h3>🧪 Wann sich Simulation lohnt</h3>
            <ul>
                <li>Bei schnellen Interfaces, empfindlichen Versorgungssystemen und teuren Hardwarezyklen</li>
                <li>Wenn Messung erst spät oder nur eingeschränkt möglich ist</li>
            </ul>

            <h3>📉 SI-Simulation</h3>
            <ul>
                <li>Reflexionen, Overshoot, Timingfenster und Kanalqualität werden vor dem Prototyp bewertet</li>
                <li>Modelle für Treiber, Empfänger, Stackup und Leitungsgeometrie müssen konsistent sein</li>
            </ul>

            <h3>🔋 PI-Simulation</h3>
            <ul>
                <li>PDN-Impedanz, Resonanzen und Lastsprünge werden frequenz- und zeitbereichsbezogen untersucht</li>
                <li>Kondensatornetzwerke lassen sich gezielter optimieren als mit Faustregeln allein</li>
            </ul>

            <h3>⚠️ Grenzen</h3>
            <p>Simulation ist nur so gut wie Modellqualität, Randbedingungen und Interpretation. Ohne Verständnis führt mehr Simulationsaufwand nicht automatisch zu besseren Entscheidungen.</p>
        `,
        keyPoints: ['Simulation ist ein Entscheidungswerkzeug, kein Ersatz für physikalisches Verständnis', 'SI- und PI-Modelle müssen realistische Randbedingungen enthalten', 'Die größte Stärke der Simulation liegt im frühen Erkennen teurer Designrisiken'],
        relatedTopics: [{ level: 'level3', index: 1, label: 'Signalintegrität (SI) für Embedded-Systeme' }, { level: 'level3', index: 2, label: 'Power Integrity und fortgeschrittenes Versorgungsdesign' }]
    },
    {
        title: 'Fortgeschrittene Motor- und Leistungselektronik',
        content: `
            <h3>⚡ Vollständiges Wechselrichter- / Servo-Antriebs-PCB-Design</h3>
            <p>Ein vollständiger 3-Phasen-Bürstenlos-Motor-Antrieb ist die komplexeste Leistungsplatine in der Robotik</p>
            <ul>
                <li><strong>3-Phasen-Vollbrücke:</strong> 6 × MOSFETs (2 pro Phasenzweig) in Halbbrücken-Konfiguration</li>
                <li><strong>High-Side Gate-Ansteuerungsproblem:</strong> Das Gate muss oberhalb des Sources liegen, das mit dem Phasenknoten schwimmt</li>
                <li><strong>Bootstrap-Lösung:</strong> Bootstrap-Kondensator laden, wenn der Low-Side-FET leitet; diese Energie zum Ansteuern des High-Side-Gates nutzen</li>
                <li>Bootstrap-Diode sollte schnell sein (Schottky, z. B. BAT54) und für eine Spannung über der Busspannung ausgelegt werden</li>
                <li>Minimale Einschaltzeit für Bootstrap-Auffrischung: 1–3 µs abhängig von Kondensatorgröße und Gate-Ladung</li>
            </ul>

            <p><strong>Gate-Treiber-IC-Auswahl (z. B. DRV8300, IR2136, IRS2003):</strong></p>
            <ul>
                <li>Spitzen-Gate-Strom: I_peak = Q_g / t_rise (Ziel: 5–20 ns Anstiegszeit für typische MOSFETs)</li>
                <li>Laufzeitunterschied zwischen High- und Low-Side: verursacht Tastverhältnisverzerrung — abgestimmte Verzögerungen wählen</li>
                <li>Separate Gate-Widerstände für Einschalten (R_g_on) und Ausschalten (R_g_off): schnelles Ausschalten reduziert das Shoot-Through-Risiko</li>
                <li>UVLO (Under-Voltage Lock-Out): Gate-Treiber deaktiviert bei Abfall der Bootstrap-Spannung — Schutz vor Halb-Ansteuerung</li>
            </ul>

            <h3>🔁 Minimierung der Schaltschleife</h3>
            <p>Die Schaltschleife (DC-Bus → MOSFET → Phase → Rückleiter) führt dI/dt während der Schaltereignisse</p>
            <ul>
                <li>Große Schleifenfläche = große Streuinduktivität = große Spannungsspitze = EMI und MOSFET-Überlastung</li>
                <li><strong>Layout-Regel:</strong> Bulk-Entkopplungskondensator so nah wie möglich am FET-Drain/Source-Paar platzieren (innerhalb 5 mm)</li>
                <li>Direkte Kupferfläche zwischen Kondensator und FETs verwenden — Schleifenfläche auf dem PCB minimieren</li>
                <li>Snubber über jeden FET oder über den Bus-Kondensator: RC (z. B. 10 Ω + 10 nF) absorbiert Spitzenenergie</li>
                <li>Kelvin-Source-Verbindung: Leistungsrückleiter vom Gate-Ansteuerungsrückleiter trennen, um dI/dt-Rauschen im Gate-Signal zu vermeiden</li>
            </ul>

            <h3>📐 Strommessung für FOC</h3>
            <p>Field Oriented Control (FOC) erfordert präzise Phasenstrom-Messung</p>
            <ul>
                <li><strong>3-Shunt-Messung:</strong> Shunt im Source jedes Low-Side-FETs — genaueste Methode, erfordert simultane ADC-Abtastung</li>
                <li><strong>1-Shunt (DC-Bus-Shunt):</strong> Einzelner Shunt, geringere Kosten; Phasenströme werden algorithmisch rekonstruiert</li>
                <li><strong>Isolierte Messung:</strong> AMC1301 (±50 mV, isoliert, für Hochspannungsantriebe)</li>
                <li>Shunt-Wert: Ziel 50–100 mV bei Volllaststrom (Abwägung zwischen Auflösung und Verlustleistung)</li>
                <li>Layout: Shunt-Kelvin-Führung direkt zu den INA-Differenzeingängen — kein anderer Strom darf diese Leiterbahnen teilen</li>
            </ul>

            <h3>🔋 Batteriemanagementsystem — Mehrzelliger Aufbau</h3>
            <p>Für Roboter mit 3S–7S Li-Ion-Akkupacks:</p>
            <ul>
                <li><strong>Zellüberwachungs-IC:</strong> BQ76920 (3–5 Zellen), BQ76940 (9–15 Zellen) — misst alle Zellspannungen und Temperaturen</li>
                <li><strong>Schutz-FETs:</strong> Zwei back-to-back N-Kanal-MOSFETs (Lade- und Entladepfad) im negativen Pack-Anschluss</li>
                <li><strong>Balancing:</strong> Passives Balancing — Ableitwiderstände über jeder Zelle (dissipiert Energie als Wärme); Aktives Balancing — überträgt Energie zwischen Zellen (komplexer, effizienter)</li>
                <li><strong>State of Charge (SoC)-Schätzung:</strong> Coulomb-Counting (Strom integrieren) + OCV (Leerlaufspannung) Kalibrierung</li>
                <li><strong>Fuel-Gauge-IC:</strong> BQ27z561 — verwaltet SoC, SoH und liefert I²C-Meldungen an den MCU</li>
                <li>Layout: Zell-Sense-Leitungen direkt zu BMS-IC-Pins; Hochstrompfad (Lade-/Entlade-FETs) mit breiten Leiterbahnen/Flächen</li>
            </ul>

            <div class="visual-ref-links">
                <button class="visual-ref-btn" onclick="openVisualRef('https://www.google.com/search?igu=1&q=3+phase+inverter+schematic+MOSFET+gate+driver+bootstrap&udm=2')">🔍 Ansehen: 3-Phasen-Wechselrichter</button>
                <button class="visual-ref-btn" onclick="openVisualRef('https://www.google.com/search?igu=1&q=wireless+power+transfer+WPC+Qi+coil+PCB+design&udm=2')">📷 Ansehen: Drahtlose Energieübertragung</button>
            </div>
        `,
        keyPoints: ['3-Phasen-Wechselrichter mit Bootstrap-Gate-Ansteuerung auslegen', 'Schaltschleifen minimieren für geringe EMI und Überspannungsspitzen', '3-Shunt-FOC-Strommessung präzise mit Kelvin-Verbindungen implementieren'],
        relatedTopics: [{ level: 'level2', index: 2, label: 'Leistungselektronik für Embedded und Robotik' }, { level: 'level3', index: 5, label: 'EMV-/EMI-Design für Embedded und Robotik' }]
    },
    {
        title: 'Komplexes Systemdesign',
        content: `
            <h3>🧱 Systempartitionierung</h3>
            <ul>
                <li>Komplexe Produkte werden in klar definierte Funktionsblöcke, Schnittstellen und Verantwortlichkeiten zerlegt</li>
                <li>Eine gute Partitionierung reduziert Risiken bei Layout, Firmware und Integration</li>
            </ul>

            <h3>🔌 Schnittstellenarchitektur</h3>
            <ul>
                <li>Spannungsdomänen, Massebezüge, Isolationsgrenzen und Kommunikationsprotokolle müssen früh festgelegt werden</li>
                <li>Mechanische und elektrische Schnittstellen dürfen nicht getrennt voneinander geplant werden</li>
            </ul>

            <h3>🛡️ Robustheit und Fehlertoleranz</h3>
            <ul>
                <li>Watchdogs, Diagnosepfade, Fallback-Modi und sichere Zustände sind Teil der Systemarchitektur</li>
                <li>Fehlererkennung muss genauso geplant werden wie Normalbetrieb</li>
            </ul>

            <h3>📐 Architektur statt Patchwork</h3>
            <p>Je größer das System, desto teurer werden späte Umwege. Architekturentscheidungen müssen dokumentiert, geprüft und bewusst getroffen werden.</p>
        `,
        keyPoints: ['Komplexität wird durch klare Partitionierung beherrschbar', 'Schnittstellen sind Architekturelemente, keine Restposten', 'Robuste Systeme planen Fehlerpfade genauso sorgfältig wie Funktionspfade'],
        relatedTopics: [{ level: 'level3', index: 7, label: 'Test, Inbetriebnahme und Fehlersuche' }, { level: 'level4', index: 5, label: 'Technische Führung und Architektur' }]
    },
    {
        title: 'Fertigung, Lieferkette und Kostenengineering',
        content: `
            <h3>🏭 Serienreife</h3>
            <ul>
                <li>DFM, DFA, Teststrategie und Materialverfügbarkeit müssen vor Serienanlauf belastbar sein</li>
                <li>Ein funktionierender Prototyp ist noch kein fertigungstaugliches Produkt</li>
            </ul>

            <h3>📦 Lieferkettenstrategie</h3>
            <ul>
                <li>Second Sources, Lebenszyklusmanagement und Risikoteile gehören in jede Stückliste</li>
                <li>Kritische Bauteile müssen aktiv beobachtet werden</li>
            </ul>

            <h3>💶 Kostenengineering</h3>
            <ul>
                <li>Layerzahl, Bauteilauswahl, Montageaufwand, Prüfaufwand und Ausschuss wirken gemeinsam auf die Stückkosten</li>
                <li>Die billigste Einzelkomponente ist nicht automatisch die günstigste Systementscheidung</li>
            </ul>

            <h3>📋 Änderungsmanagement</h3>
            <p>ECOs, Revisionsstände und nachvollziehbare Freigaben sind ab diesem Niveau keine Bürokratie, sondern Risikokontrolle.</p>
        `,
        keyPoints: ['Serienprodukte verlangen mehr als eine gute Schaltung', 'Lieferkette und Lebenszyklus müssen aktiv gesteuert werden', 'Kostenengineering ist eine Systemaufgabe und keine reine Einkaufsoptimierung'],
        relatedTopics: [{ level: 'level2', index: 6, label: 'Design für Herstellbarkeit' }, { level: 'level4', index: 6, label: 'Leitprojekte' }]
    },
    {
        title: 'Technische Führung und Architektur',
        content: `
            <h3>🧠 Technische Führung</h3>
            <ul>
                <li>Gute Führung heißt, technische Entscheidungen transparent zu machen und Teams entscheidungsfähig zu halten</li>
                <li>Reviews, Priorisierung und Risikoabschätzung sind Führungswerkzeuge</li>
            </ul>

            <h3>📘 Architekturarbeit</h3>
            <ul>
                <li>Anforderungen, Schnittstellen und nichtfunktionale Ziele müssen dokumentiert und gegeneinander abgewogen werden</li>
                <li>Architektur ist der Rahmen, in dem Einzelentscheidungen konsistent werden</li>
            </ul>

            <h3>🔍 Review-Kultur</h3>
            <ul>
                <li>Design Reviews müssen konkrete technische Fragen klären, nicht nur Präsentationen abnicken</li>
                <li>Offene Risiken und Annahmen gehören explizit ins Review</li>
            </ul>

            <h3>👥 Mentoring und Skalierung</h3>
            <p>Mit wachsender Verantwortung wird technische Kommunikation genauso wichtig wie reine Schaltungsqualität.</p>
        `,
        keyPoints: ['Architektur gibt Teams einen belastbaren technischen Rahmen', 'Reviews sind nur wertvoll, wenn sie Risiken und Entscheidungen sichtbar machen', 'Technische Führung verlangt Klarheit, Priorisierung und saubere Kommunikation'],
        relatedTopics: [{ level: 'level4', index: 3, label: 'Komplexes Systemdesign' }, { level: 'level4', index: 4, label: 'Fertigung, Lieferkette und Kostenengineering' }]
    },
    {
        title: 'Leitprojekte',
        content: `
            <h3>🚀 Zielbild</h3>
            <p>Leitprojekte sind Vorzeigeprojekte, an denen Entwurfstiefe, Systemverständnis und Professionalität gleichzeitig sichtbar werden.</p>

            <h3>🧩 Beispiele</h3>
            <ul>
                <li>Mehrplatinen-Robotiksystem mit zentraler Recheneinheit, Sensorik und Leistungsmodulen</li>
                <li>Industriegeeignete Motorsteuerung mit Schutz- und Diagnosefunktionen</li>
                <li>Funkfähige Embedded-Plattform mit präziser Sensorik und Datenaufzeichnung</li>
            </ul>

            <h3>📋 Erwartete Artefakte</h3>
            <ul>
                <li>Saubere Fertigungsdaten, Stücklisten und Revisionsstände</li>
                <li>Bring-up- und Testdokumentation</li>
                <li>Begründete Architekturentscheidungen und bekannte Restrisiken</li>
            </ul>

            <h3>✅ Bewertungsmaßstab</h3>
            <ul>
                <li>Technische Reife</li>
                <li>Nachvollziehbarkeit von Entscheidungen</li>
                <li>Wartbarkeit, Testbarkeit und Übergabefähigkeit</li>
            </ul>
        `,
        keyPoints: ['Leitprojekte machen technisches Niveau sichtbar', 'Ein Spitzenprojekt braucht Dokumentation und Testkonzept ebenso wie gute Hardware', 'Architektur, Fertigung und Inbetriebnahme müssen in einem Ergebnis zusammenlaufen'],
        relatedTopics: [{ level: 'level4', index: 3, label: 'Komplexes Systemdesign' }, { level: 'level4', index: 5, label: 'Technische Führung und Architektur' }]
    }
]);
