import styles from './resume.module.scss';

export const metadata = {
  title:
    'Laura Myers | Actor&#39;s Resume | Vocalist Experience | Portland, OR &mdash; Laura Myers 971-275-3557',
  description:
    'Laura Myers is an actor and vocalist in Portland, OR. She&apos;s experienced in  tv, radio, stage, vo work &amp; has taught private voice instruction for almost 10 years.',
};

export default function Resume() {
  return (
    <>
      <h1>Laura Myers resumé</h1>
      <h2>Laura&apos;s experience on paper (digitally speaking, of course).</h2>
      <div className={styles.resumeContainer}>
        {/* film */}
        <div className={styles.resumeTable}>
          <div className={styles.tableHeader}>FILM EXPERIENCE</div>
          <div className={styles.row}>
            <div className={styles.column}>FILM</div>
            <div className={styles.column}>ROLE</div>
            <div className={styles.column}>DIRECTOR</div>
          </div>

          <div className={styles.row}>
            <div className={styles.column}>THE RIOT ACT</div>
            <div className={styles.column}>2ND Supporting</div>
            <div className={styles.column}>Roger Loftis/ Independent</div>
          </div>

          <div className={styles.row}>
            <div className={styles.column}>SIMONE</div>
            <div className={styles.column}>Featured</div>
            <div className={styles.column}>Anthony Niccol/ New Line</div>
          </div>

          <div className={styles.row}>
            <div className={styles.column}>JUDGE DREDD</div>
            <div className={styles.column}>Featured VO</div>
            <div className={styles.column}>Danny Cannon/ Carolco</div>
          </div>

          <div className={styles.row}>
            <div className={styles.column}>THIRTEEN FLOORS</div>
            <div className={styles.column}>2nd Supporting</div>
            <div className={styles.column}>Josh Greenbaum/ Independent</div>
          </div>

          <div className={styles.row}>
            <div className={styles.column}>1024</div>
            <div className={styles.column}>Lead</div>
            <div className={styles.column}>Annette Ford/ Film Festivals</div>
          </div>
        </div>

        {/* television */}
        <div className={styles.resumeTable}>
          <div className={styles.tableHeader}>TELEVISION EXPERIENCE</div>

          <div className={styles.row}>
            <div className={styles.column}>REASONABLE DOUBT</div>
            <div className={styles.column}>Guest Lead</div>
            <div className={styles.column}>Bob Allen/ Discovery Channel</div>
          </div>

          <div className={styles.row}>
            <div className={styles.column}>
              BEN STEIN&apos;S COURTROOM (Pilot)
            </div>
            <div className={styles.column}>Co-Star</div>
            <div className={styles.column}>Peter Weber/ Comedy Central</div>
          </div>

          <div className={styles.row}>
            <div className={styles.column}>ALL ABOUT YOU (Pilot)</div>
            <div className={styles.column}>Guest Star</div>
            <div className={styles.column}>David Brine/ October Fuchs</div>
          </div>
        </div>

        {/* improv */}
        <div className={styles.resumeTable}>
          <div className={styles.tableHeader}>IMPROV / SKETCH EXPERIENCE</div>
          <div className={styles.row}>
            <div className={styles.column}>TOMBOYS IN FISHNETS</div>
            <div className={styles.column}>Co-Star/ Asst. Dir.</div>
            <div className={styles.column}></div>
          </div>

          <div className={styles.row}>
            <div className={styles.column}>-"Hollywood"</div>
            <div className={styles.column}>Zephyr Theatre</div>
            <div className={styles.column}></div>
          </div>

          <div className={styles.row}>
            <div className={styles.column}>-"The Shoe Show"Zephyr</div>
            <div className={styles.column}>Zephyr / Comedy Central Stage</div>
            <div className={styles.column}></div>
          </div>

          <div className={styles.row}>
            <div className={styles.column}>-"Voyage D/Amour"</div>
            <div className={styles.column}>
              Zephyr Theatre/ Edinburgh Fringe Festival &apos;04
            </div>
            <div className={styles.column}></div>
          </div>

          <div className={styles.row}>
            <div className={styles.column}>KURT WIETZMAN "Talented"</div>
            <div className={styles.column}>Guest Star</div>
            <div className={styles.column}>The Fake Gallery</div>
          </div>

          <div className={styles.row}>
            <div className={styles.column}>THE LUNATIC FRINGE</div>
            <div className={styles.column}>Co- Star</div>
            <div className={styles.column}>The Punchline/ SF</div>
          </div>

          <div className={styles.row}>
            <div className={styles.column}>JOHNNY CAN&apos;T READ</div>
            <div className={styles.column}>Company Member</div>
            <div className={styles.column}>West Coast Tour</div>
          </div>
        </div>

        {/* musicals */}
        <div className={styles.resumeTable}>
          <div className={styles.tableHeader}>
            MUSICALS / NIGHTCLUB EXPERIENCE
          </div>
          <div className={styles.row}>
            <div className={styles.column}>LAURA HERMANSTORFER</div>
            <div className={styles.column}>Nightclub Act</div>
            <div className={styles.column}>Singer/ SF& LA</div>
          </div>
          <div className={styles.row}>
            <div className={styles.column}>THE KELSEY BAND</div>
            <div className={styles.column}>Lead Vocals</div>
            <div className={styles.column}>Singer/Woodwinds/SF</div>
          </div>
          <div className={styles.row}>
            <div className={styles.column}>MALONE</div>
            <div className={styles.column}>Lead & Harmony</div>
            <div className={styles.column}>Vocals/Guitar/ SF</div>
          </div>
          <div className={styles.row}>
            <div className={styles.column}>LET ME CABARET YOU</div>
            <div className={styles.column}>Lead</div>
            <div className={styles.column}>Singer/ The Brasserie/ LA</div>
          </div>
          <div className={styles.row}>
            <div className={styles.column}>THE DRUNKARD</div>
            <div className={styles.column}>Mary</div>
            <div className={styles.column}>Gaslight Theatre/ OK</div>
          </div>
        </div>
        {/* vo */}
        <div className={styles.resumeTable}>
          <div className={styles.tableHeader}>VOICE OVER EXPERIENCE</div>
          <div className={styles.row}>
            <div className={styles.column}>KURT WIETZMAN "Talented"</div>
            <div className={styles.column}>Guest Star</div>
            <div className={styles.column}>Vapid Core Music</div>
          </div>
          <div className={styles.row}>
            <div className={styles.column}>SEGA COMMERCIALS</div>
            <div className={styles.column}>Principal Voices/Sounds</div>
            <div className={styles.column}>Earwax Studios</div>
          </div>

          <div className={styles.row}>
            <div className={styles.column}>MGMT. TRAINING</div>
            <div className={styles.column}>Sandy & Lisa</div>
            <div className={styles.column}>Ninth House Prod.</div>
          </div>

          <div className={styles.row}>
            <div className={styles.column}>FAME WHORE (Feature Film)</div>
            <div className={styles.column}>Principal Voices/ Sounds</div>
            <div className={styles.column}>Blurco Prod.</div>
          </div>

          <div className={styles.row}>
            <div className={styles.column}>ILLUMINATIONS (Commercial)</div>
            <div className={styles.column}>Feature Voice</div>
            <div className={styles.column}>Pera Studios</div>
          </div>

          <div className={styles.row}>
            <div className={styles.column}>ENTERPRISE(Commercial)</div>
            <div className={styles.column}>Feature Voice</div>
            <div className={styles.column}>Pera Studios</div>
          </div>
        </div>
        {/* skills */}
        <div className={styles.resumeTable}>
          <div className={styles.tableHeader}>SPECIAL SKILLS</div>
          <div className={styles.row}>
            <div className={styles.column}>Language:</div>
            <div className={styles.columnWide}>French (conversational)</div>
          </div>
          <div className={styles.row}>
            <div className={styles.column}>Dialects:</div>
            <div className={styles.columnWide}>
              English, Southern, Midwestern, New York
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.column}>Musician:</div>
            <div className={styles.columnWide}>
              Guitar, clarinet, flute, hand percussion (own all instruments)
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.column}>Sports:</div>
            <div className={styles.columnWide}>
              Archery, croquet, fishing, rollerblading, roller skating, ice
              skating, swimming
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.column}>Additional:</div>
            <div className={styles.columnWide}>
              Alternative Healing Facilitator, makeup artistry, great rapport
              with children and animals.
            </div>
          </div>
        </div>
        {/* training */}
        <div className={styles.resumeTable}>
          <div className={styles.tableHeader}>TRAINING</div>
          <div className={styles.row}>
            <div className={styles.column}>Acting:</div>
            <div className={styles.columnWide}>
              Jean Shelton Actors Lab/ SF, Cliff Osmond/ SF & LA
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.column}>Improvisation:</div>
            <div className={styles.columnWide}>
              Jim Crenna/ SF, Bay Area Theatre Sports/ SF
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.column}>Singing:</div>
            <div className={styles.columnWide}>
              Laurie Amat/ SF, J. Raoul Brody/ SF, Blue Bear School of Music
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.column}>Voice Over:</div>
            <div className={styles.columnWide}>
              Voicetrax/ SF, Rick Zieff/ LA
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
