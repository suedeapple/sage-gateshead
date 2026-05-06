import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "FAQ",
};

export default function FaqPage() {
  return (
    <div className="node-template-faqpage page-root">
      <Header />
      <main>
        <div className="container container--heading">
          <h1>Answers to some frequently asked questions</h1>
        </div>
        <div className="container">
          <div className="rte">
            <p>
              <strong>What is Sage Gateshead?</strong>
              <br />
              We are about making and supporting brilliant music in the North
              East. We have some of the finest acoustics anywhere and have
              world-class facilities, all housed in one of the North&apos;s most
              iconic landmarks. We were created in 2004 as part of a major
              investment in culture.
            </p>
            <p>
              We celebrate music of all types, for all ages - from classical
              concerts to bands and gigs, from music for children and young
              people to community choirs. We are a home for music learning. We
              work in our building, throughout the North East and around the
              world.
            </p>
            <p>
              We are also proud to be the home of Royal Northern Sinfonia, a
              chamber orchestra known for quality, innovation, and
              collaboration.
            </p>
            <p>
              We are a charity for music and support audiences, musicians, and
              music makers at all stages of their journey.
            </p>
            <p>Since founding we have been supported by Sage Group.</p>
            <hr />
            <p>
              <strong>Did you know?</strong>
            </p>
            <p>Each year we…</p>
            <ul>
              <li>
                stage more than 400 performances across all genres – from
                orchestral music to jazz, from electronica to folk
              </li>
              <li>
                provide music learning for 200,000 people across 10,000 events
              </li>
              <li>
                reach an audience of 500,000, and many more than that online
              </li>
              <li>welcome 2m visitors to our building</li>
              <li>
                directly support over 300 artists, with a focus on addressing
                socioeconomic inequality
              </li>
              <li>
                welcome artists to the North East from around the world are home
                to one of the world&apos;s finest chamber orchestras
              </li>
            </ul>
            <p>
              Over the last 20 years we&apos;ve generated over £500 million for
              the local economy, and we have been one of the borough&apos;s
              biggest employers.
            </p>
            <hr />
            <p>
              <strong>Where is Sage Gateshead?</strong>
              <br />
              We are on Gateshead Quays, between BALTIC and the iconic Tyne
              Bridge. Our building was designed by award-winning architects
              Foster + Partners.
            </p>
            <hr />
            <p>
              <strong>What is happening at Gateshead Quays?</strong>
              <br />A new arena and convention centre is being built next door
              to Sage Gateshead. This new commercial development will operate as
              part of an international network of large-scale venues that
              includes stadiums and arenas.
            </p>
            <p>
              This change will complete the Quayside and create a unique
              destination in the UK, made up of cultural venues, entertainment,
              business, and education.
            </p>
            <p>
              Sage Gateshead and BALTIC have been on this quayside since the
              early 2000s, and this development will help further develop the
              area as an international destination.
            </p>
            <hr />
            <p>
              <strong>
                How did Sage Gateshead choose its name in the first place?
              </strong>
              <br />
              In 2004 we were founded with support from Sage Group, a global
              software company with a vision to support arts and culture in the
              region. They were the naming partner for our building.
            </p>
            <hr />
            <p>
              <strong>Why are you changing your name?</strong>
              <br />
              Sage Group are now investing in the new arena and convention
              centre set to become our neighbour. This centre is going to be
              called The Sage.
            </p>
            <p>
              We welcome this renewed investment in the region, helping to
              complete Gateshead Quays.
            </p>
            <p>
              We are an independent charity rooted in the North East, and our
              name and brand should reflect this. Every ticket, donation, or
              event booking goes back into supporting world-class music in our
              region. That could mean music classes for young people, visiting
              international orchestras, or supporting local bands.
            </p>
            <p>
              It&apos;s not in anyone&apos;s interest for us to become confused
              with the arena and convention centre set to be our neighbour.
            </p>
            <p>
              This is an opportunity for us to work with our communities to
              create a new name and future for our organisation as we approach
              our 20th anniversary. We are looking forward to bright future as
              part of a busier, more complete Gateshead Quays.
            </p>
            <hr />
            <p>
              <strong>Can people share their ideas?</strong>
              <br />
              Active participation from our audiences and members of the public
              has been a crucial part in our process of choosing a new name for
              Sage Gateshead. We heard from hundreds of people, both in the
              building and through our digital channels to learn their thoughts
              on what kind of name would best represent what Sage Gateshead
              means to people. As we move towards a decision, everything
              you&apos;ve said is informing what our new brand will look and
              feel like.
              <br />
              <br />
              To see what people had to say about our past, present and future,
              visit our website{" "}
              <a href="https://www.sagegateshead.com/changes" title="Changes">
                sagegateshead.com/changes
              </a>
              <br />
              <br />
              You can email name suggestions to namechange@sagegateshead.com.
              We&apos;ll announce our decision in the autumn.
            </p>
            <hr />
            <p>
              <strong>When will a new name be announced?</strong>
              <br />
              We hope to announce our new name and visual identity in the
              autumn.
            </p>
            <hr />
            <p>
              <strong>If I have another question who do I ask?</strong>
              <br />
              If you have another question relating to our name change, please
              email namechange@sagegateshead.com
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
