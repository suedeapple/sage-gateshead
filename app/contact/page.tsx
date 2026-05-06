import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <div className="node-template-contactpage page-root">
      <Header />
      <main>
        <div className="container container--heading">
          <h1>Contact us</h1>
        </div>
        <div className="container">
          <div className="rte">
            <p>
              If you have any questions, feel free to get in touch with us at{" "}
              <a href="mailto:namechange@sagegateshead.com">
                namechange@sagegateshead.com
              </a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
