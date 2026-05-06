import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <div className="node-template-aboutuspage page-root">
      <Header />
      <main>
        <div className="container container--heading">
          <h1>We&apos;re changing our name.</h1>
        </div>
        <div className="container container--even">
          <div className="about-grid">
            <div className="about-grid__left">
              <div className="rte">
                <p>We are Sage Gateshead.</p>
                <p>
                  And we are changing our name. To find out why,{" "}
                  <a href="/faq/" title="FAQs">
                    read the answers to frequently asked questions on our
                    website
                  </a>
                  .
                </p>
                <p>
                  We&apos;re almost 20 years old, and we&apos;re getting ready
                  for a slightly different - but bigger - future. A future
                  that&apos;s part of a new, busier Gateshead Quays.
                </p>
                <p>
                  So, this year is an opportunity for us to affirm who we are,
                  how we should be known and what we look like. And to do that
                  we asked you what you thought.
                </p>
                <p>
                  We asked you to have your say about our past, our present and
                  our future and were overwhelmed with the response. You
                  described memorable moments you shared with special people.
                  You told us new musical skills and confidence you developed
                  through our programmes. What came through most clearly was the
                  pride you have in Sage Gateshead&apos;s contribution to music
                  here in the North.
                </p>
                <p>
                  The memories, ideas and sentiment shared by you, affirmed just
                  how much a charity like ours can make a difference to so many
                  people. We have read every suggestion, comment and idea and
                  they are all helping to inform us on the next step of the
                  journey.
                </p>
                <p>
                  You can read the comments if you{" "}
                  <a href="/" title="Home">
                    visit the Storywall on our website
                  </a>
                  .
                </p>
                <p>
                  Now we&apos;re busy working on developing our new brand and
                  visual identity and we hope to be sharing this with you in the
                  Autumn.
                </p>
                <p>
                  If you have any questions please don&apos;t hesitate to
                  contact us by emailing namechange@sagegateshead.com
                </p>
              </div>
            </div>
            <div className="about-grid__right">
              <div className="about-grid__right__content">
                <p className="about-grid__right__caption"></p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
