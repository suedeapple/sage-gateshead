import type { Metadata } from "next";
import Header from "./components/Header";
import Footer from "./components/Footer";
import StoryWall from "./components/StoryWall";

export const metadata: Metadata = {
  title: "Sage Gateshead",
};

export default function HomePage() {
  return (
    <div className="node-template-homepage page-root">
      <Header
        caption={
          <>
            <p>We&apos;re changing our name.</p>
            <p>See what people think and feel about Sage Gateshead.</p>
          </>
        }
      />
      <StoryWall />
      <Footer />
    </div>
  );
}
