import globalStyles from '../scss/_global.module.scss';
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
          <div className={`${globalStyles.row} ${styles.row}`}>
            <div className={`${globalStyles.column33} ${styles.column33}`}>
              FILM
            </div>
            <div className={`${globalStyles.column33} ${styles.column33}`}>
              ROLE
            </div>
            <div className={`${globalStyles.column33} ${styles.column33}`}>
              DIRECTOR
            </div>
          </div>

          <div className={`${globalStyles.row} ${styles.row}`}>
            <div className={`${globalStyles.column33} ${styles.column33}`}>
              THE RIOT ACT
            </div>
            <div className={`${globalStyles.column33} ${styles.column33}`}>
              2ND Supporting
            </div>
            <div className={`${globalStyles.column33} ${styles.column33}`}>
              Roger Loftis/ Independent
            </div>
          </div>

          <div className={`${globalStyles.row} ${styles.row}`}>
            <div className={`${globalStyles.column33} ${styles.column33}`}>
              SIMONE
            </div>
            <div className={`${globalStyles.column33} ${styles.column33}`}>
              Featured
            </div>
            <div className={`${globalStyles.column33} ${styles.column33}`}>
              Anthony Niccol/ New Line
            </div>
          </div>

          <div className={`${globalStyles.row} ${styles.row}`}>
            <div className={`${globalStyles.column33} ${styles.column33}`}>
              JUDGE DREDD
            </div>
            <div className={`${globalStyles.column33} ${styles.column33}`}>
              Featured VO
            </div>
            <div className={`${globalStyles.column33} ${styles.column33}`}>
              Danny Cannon/ Carolco
            </div>
          </div>

          <div className={`${globalStyles.row} ${styles.row}`}>
            <div className={`${globalStyles.column33} ${styles.column33}`}>
              THIRTEEN FLOORS
            </div>
            <div className={`${globalStyles.column33} ${styles.column33}`}>
              2nd Supporting
            </div>
            <div className={`${globalStyles.column33} ${styles.column33}`}>
              Josh Greenbaum/ Independent
            </div>
          </div>

          <div className={`${globalStyles.row} ${styles.row}`}>
            <div className={`${globalStyles.column33} ${styles.column33}`}>
              1024
            </div>
            <div className={`${globalStyles.column33} ${styles.column33}`}>
              Lead
            </div>
            <div className={`${globalStyles.column33} ${styles.column33}`}>
              Annette Ford/ Film Festivals
            </div>
          </div>
        </div>

        {/* television */}
        <div className={styles.resumeTable}>
          <div className={styles.tableHeader}>TELEVISION EXPERIENCE</div>

          <div className={`${globalStyles.row} ${styles.row}`}>
            <div className={`${globalStyles.column33} ${styles.column33}`}>
              REASONABLE DOUBT
            </div>
            <div className={`${globalStyles.column33} ${styles.column33}`}>
              Guest Lead
            </div>
            <div className={`${globalStyles.column33} ${styles.column33}`}>
              Bob Allen/ Discovery Channel
            </div>
          </div>

          <div className={`${globalStyles.row} ${styles.row}`}>
            <div className={`${globalStyles.column33} ${styles.column33}`}>
              BEN STEIN&apos;S COURTROOM (Pilot)
            </div>
            <div className={`${globalStyles.column33} ${styles.column33}`}>
              Co-Star
            </div>
            <div className={`${globalStyles.column33} ${styles.column33}`}>
              Peter Weber/ Comedy Central
            </div>
          </div>

          <div className={`${globalStyles.row} ${styles.row}`}>
            <div className={`${globalStyles.column33} ${styles.column33}`}>
              ALL ABOUT YOU (Pilot)
            </div>
            <div className={`${globalStyles.column33} ${styles.column33}`}>
              Guest Star
            </div>
            <div className={`${globalStyles.column33} ${styles.column33}`}>
              David Brine/ October Fuchs
            </div>
          </div>
        </div>

        {/* improv */}
        <div className={styles.resumeTable}>
          <div className={styles.tableHeader}>IMPROV / SKETCH EXPERIENCE</div>
          <div className={`${globalStyles.row} ${styles.row}`}>
            <div className={`${globalStyles.column33} ${styles.column33}`}>
              TOMBOYS IN FISHNETS
            </div>
            <div className={`${globalStyles.column33} ${styles.column33}`}>
              Co-Star/ Asst. Dir.
            </div>
            <div
              className={`${globalStyles.column33} ${styles.column33}`}
            ></div>
          </div>

          <div className={`${globalStyles.row} ${styles.row}`}>
            <div className={`${globalStyles.column33} ${styles.column33}`}>
              -&quot;Hollywood&quot;
            </div>
            <div className={`${globalStyles.column33} ${styles.column33}`}>
              Zephyr Theatre
            </div>
            <div
              className={`${globalStyles.column33} ${styles.column33}`}
            ></div>
          </div>

          <div className={`${globalStyles.row} ${styles.row}`}>
            <div className={`${globalStyles.column33} ${styles.column33}`}>
              -&quot;The Shoe Show&quot;Zephyr
            </div>
            <div className={`${globalStyles.column33} ${styles.column33}`}>
              Zephyr / Comedy Central Stage
            </div>
            <div
              className={`${globalStyles.column33} ${styles.column33}`}
            ></div>
          </div>

          <div className={`${globalStyles.row} ${styles.row}`}>
            <div className={`${globalStyles.column33} ${styles.column33}`}>
              -&quot;Voyage D/Amour&quot;
            </div>
            <div className={`${globalStyles.column33} ${styles.column33}`}>
              Zephyr Theatre/ Edinburgh Fringe Festival &apos;04
            </div>
            <div
              className={`${globalStyles.column33} ${styles.column33}`}
            ></div>
          </div>

          <div className={`${globalStyles.row} ${styles.row}`}>
            <div className={`${globalStyles.column33} ${styles.column33}`}>
              KURT WIETZMAN &quot;Talented&quot;
            </div>
            <div className={`${globalStyles.column33} ${styles.column33}`}>
              Guest Star
            </div>
            <div className={`${globalStyles.column33} ${styles.column33}`}>
              The Fake Gallery
            </div>
          </div>

          <div className={`${globalStyles.row} ${styles.row}`}>
            <div className={`${globalStyles.column33} ${styles.column33}`}>
              THE LUNATIC FRINGE
            </div>
            <div className={`${globalStyles.column33} ${styles.column33}`}>
              Co- Star
            </div>
            <div className={`${globalStyles.column33} ${styles.column33}`}>
              The Punchline/ SF
            </div>
          </div>

          <div className={`${globalStyles.row} ${styles.row}`}>
            <div className={`${globalStyles.column33} ${styles.column33}`}>
              JOHNNY CAN&apos;T READ
            </div>
            <div className={`${globalStyles.column33} ${styles.column33}`}>
              Company Member
            </div>
            <div className={`${globalStyles.column33} ${styles.column33}`}>
              West Coast Tour
            </div>
          </div>
        </div>

        {/* musicals */}
        <div className={styles.resumeTable}>
          <div className={styles.tableHeader}>
            MUSICALS / NIGHTCLUB EXPERIENCE
          </div>
          <div className={`${globalStyles.row} ${styles.row}`}>
            <div className={`${globalStyles.column33} ${styles.column33}`}>
              LAURA HERMANSTORFER
            </div>
            <div className={`${globalStyles.column33} ${styles.column33}`}>
              Nightclub Act
            </div>
            <div className={`${globalStyles.column33} ${styles.column33}`}>
              Singer/ SF& LA
            </div>
          </div>
          <div className={`${globalStyles.row} ${styles.row}`}>
            <div className={`${globalStyles.column33} ${styles.column33}`}>
              THE KELSEY BAND
            </div>
            <div className={`${globalStyles.column33} ${styles.column33}`}>
              Lead Vocals
            </div>
            <div className={`${globalStyles.column33} ${styles.column33}`}>
              Singer/Woodwinds/SF
            </div>
          </div>
          <div className={`${globalStyles.row} ${styles.row}`}>
            <div className={`${globalStyles.column33} ${styles.column33}`}>
              MALONE
            </div>
            <div className={`${globalStyles.column33} ${styles.column33}`}>
              Lead & Harmony
            </div>
            <div className={`${globalStyles.column33} ${styles.column33}`}>
              Vocals/Guitar/ SF
            </div>
          </div>
          <div className={`${globalStyles.row} ${styles.row}`}>
            <div className={`${globalStyles.column33} ${styles.column33}`}>
              LET ME CABARET YOU
            </div>
            <div className={`${globalStyles.column33} ${styles.column33}`}>
              Lead
            </div>
            <div className={`${globalStyles.column33} ${styles.column33}`}>
              Singer/ The Brasserie/ LA
            </div>
          </div>
          <div className={`${globalStyles.row} ${styles.row}`}>
            <div className={`${globalStyles.column33} ${styles.column33}`}>
              THE DRUNKARD
            </div>
            <div className={`${globalStyles.column33} ${styles.column33}`}>
              Mary
            </div>
            <div className={`${globalStyles.column33} ${styles.column33}`}>
              Gaslight Theatre/ OK
            </div>
          </div>
        </div>
        {/* vo */}
        <div className={styles.resumeTable}>
          <div className={styles.tableHeader}>VOICE OVER EXPERIENCE</div>
          <div className={`${globalStyles.row} ${styles.row}`}>
            <div className={`${globalStyles.column33} ${styles.column33}`}>
              KURT WIETZMAN &quot;Talented&quot;
            </div>
            <div className={`${globalStyles.column33} ${styles.column33}`}>
              Guest Star
            </div>
            <div className={`${globalStyles.column33} ${styles.column33}`}>
              Vapid Core Music
            </div>
          </div>
          <div className={`${globalStyles.row} ${styles.row}`}>
            <div className={`${globalStyles.column33} ${styles.column33}`}>
              SEGA COMMERCIALS
            </div>
            <div className={`${globalStyles.column33} ${styles.column33}`}>
              Principal Voices/Sounds
            </div>
            <div className={`${globalStyles.column33} ${styles.column33}`}>
              Earwax Studios
            </div>
          </div>

          <div className={`${globalStyles.row} ${styles.row}`}>
            <div className={`${globalStyles.column33} ${styles.column33}`}>
              MGMT. TRAINING
            </div>
            <div className={`${globalStyles.column33} ${styles.column33}`}>
              Sandy & Lisa
            </div>
            <div className={`${globalStyles.column33} ${styles.column33}`}>
              Ninth House Prod.
            </div>
          </div>

          <div className={`${globalStyles.row} ${styles.row}`}>
            <div className={`${globalStyles.column33} ${styles.column33}`}>
              FAME WHORE (Feature Film)
            </div>
            <div className={`${globalStyles.column33} ${styles.column33}`}>
              Principal Voices/ Sounds
            </div>
            <div className={`${globalStyles.column33} ${styles.column33}`}>
              Blurco Prod.
            </div>
          </div>

          <div className={`${globalStyles.row} ${styles.row}`}>
            <div className={`${globalStyles.column33} ${styles.column33}`}>
              ILLUMINATIONS (Commercial)
            </div>
            <div className={`${globalStyles.column33} ${styles.column33}`}>
              Feature Voice
            </div>
            <div className={`${globalStyles.column33} ${styles.column33}`}>
              Pera Studios
            </div>
          </div>

          <div className={`${globalStyles.row} ${styles.row}`}>
            <div className={`${globalStyles.column33} ${styles.column33}`}>
              ENTERPRISE(Commercial)
            </div>
            <div className={`${globalStyles.column33} ${styles.column33}`}>
              Feature Voice
            </div>
            <div className={`${globalStyles.column33} ${styles.column33}`}>
              Pera Studios
            </div>
          </div>
        </div>
        {/* skills */}
        <div className={styles.resumeTable}>
          <div className={styles.tableHeader}>SPECIAL SKILLS</div>
          <div className={`${globalStyles.row} ${styles.row}`}>
            <div className={`${globalStyles.column33} ${styles.column33}`}>
              Language:
            </div>
            <div className={`${globalStyles.column66} ${styles.column66}`}>
              French (conversational)
            </div>
          </div>
          <div className={`${globalStyles.row} ${styles.row}`}>
            <div className={`${globalStyles.column33} ${styles.column33}`}>
              Dialects:
            </div>
            <div className={`${globalStyles.column66} ${styles.column66}`}>
              English, Southern, Midwestern, New York
            </div>
          </div>
          <div className={`${globalStyles.row} ${styles.row}`}>
            <div className={`${globalStyles.column33} ${styles.column33}`}>
              Musician:
            </div>
            <div className={`${globalStyles.column66} ${styles.column66}`}>
              Guitar, clarinet, flute, hand percussion (own all instruments)
            </div>
          </div>
          <div className={`${globalStyles.row} ${styles.row}`}>
            <div className={`${globalStyles.column33} ${styles.column33}`}>
              Sports:
            </div>
            <div className={`${globalStyles.column66} ${styles.column66}`}>
              Archery, croquet, fishing, rollerblading, roller skating, ice
              skating, swimming
            </div>
          </div>
          <div className={`${globalStyles.row} ${styles.row}`}>
            <div className={`${globalStyles.column33} ${styles.column33}`}>
              Additional:
            </div>
            <div className={`${globalStyles.column66} ${styles.column66}`}>
              Alternative Healing Facilitator, makeup artistry, great rapport
              with children and animals.
            </div>
          </div>
        </div>
        {/* training */}
        <div className={styles.resumeTable}>
          <div className={styles.tableHeader}>TRAINING</div>
          <div className={`${globalStyles.row} ${styles.row}`}>
            <div className={`${globalStyles.column33} ${styles.column33}`}>
              Acting:
            </div>
            <div className={`${globalStyles.column66} ${styles.column66}`}>
              Jean Shelton Actors Lab/ SF, Cliff Osmond/ SF & LA
            </div>
          </div>

          <div className={`${globalStyles.row} ${styles.row}`}>
            <div className={`${globalStyles.column33} ${styles.column33}`}>
              Improvisation:
            </div>
            <div className={`${globalStyles.column66} ${styles.column66}`}>
              Jim Crenna/ SF, Bay Area Theatre Sports/ SF
            </div>
          </div>

          <div className={`${globalStyles.row} ${styles.row}`}>
            <div className={`${globalStyles.column33} ${styles.column33}`}>
              Singing:
            </div>
            <div className={`${globalStyles.column66} ${styles.column66}`}>
              Laurie Amat/ SF, J. Raoul Brody/ SF, Blue Bear School of Music
            </div>
          </div>

          <div className={`${globalStyles.row} ${styles.row}`}>
            <div className={`${globalStyles.column33} ${styles.column33}`}>
              Voice Over:
            </div>
            <div className={`${globalStyles.column66} ${styles.column66}`}>
              Voicetrax/ SF, Rick Zieff/ LA
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
