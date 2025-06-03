import Header from "../../../../Components/Header";
import Footer from "../../../../Components/Footer";
import GetInTouch from "../../../../Components/GetInTouch";
import PriceListButton from "../../../../Components/PriceListButton";
import Carousel from "../../../../Components/Carousel";
import imageList from "../../../../utils/carouselImages";
import FAQComponent from "../../../../Components/FAQComponent";
import TeethWhiteningVideo from "../../../../assets/videos/TeethWhitening.mp4";
import SpecialOffersCarousel from "../../../../Components/SpecialOffersCarousel";
import offersList from "../../../../utils/specialOffers";
import ServiceBooking from "../../../../Components/ServiceBooking";
import ServiceSection from "../../../../Components/ServiceSection";

const faqsArray = [
  {
    question: "What are the advantages of in-chair whitening over take-home whitening?",
    answer: (
      <>
        <p>
          <b>In-chair whitening</b> offers the advantage of <b>speed and convenience</b>. The treatment takes about an hour, making it ideal for patients who want fast results. The whitening gel is activated with a special laser, which allows it to penetrate your teeth more effectively and quickly compared to take-home treatments. This results in a noticeably brighter smile in just one session, without the need for daily application over a period of time.
        </p>
      </>
    )
  },
  {
    question: "How long will my teeth remain white?",
    answer: (
      <>
        <p>
          Teeth whitening results can last from <b>several months up to a few years</b>, depending on your lifestyle. To maintain your results:
        </p>
        <ul>
          <li><b>Minimise consumption</b> of staining foods and drinks (coffee, red wine, tea)</li>
          <li><b>Avoid smoking</b> or tobacco products</li>
          <li><b>Maintain good oral hygiene</b></li>
          <li>Use your <b>take-home trays</b> for occasional touch-ups</li>
        </ul>
      </>
    )
  },
  {
    question: "Are there side effects to teeth whitening?",
    answer: (
      <>
        <p>
          Some people experience <b>temporary sensitivity</b> to hot or cold, <b>mild gum irritation</b>, or <b>chemical burns</b> if the whitening gel comes in contact with soft tissue (lips, gums, tongue). These side effects are generally <b>mild and temporary</b>. Your dentist will ensure your gums and teeth are healthy before treatment to reduce the risk.
        </p>
      </>
    )
  },
  {
    question: "Can you combine in-chair whitening with take-home whitening?",
    answer: (
      <>
        <p>
          Yes, <b>combining in-chair whitening with take-home whitening trays</b> can be an effective way to maintain and extend your bright smile. After your in-chair whitening treatment, you can use the take-home trays for a few hours each day to touch up and maintain your results for several months. This combination helps keep your smile bright over time while minimizing the need for frequent in-chair treatments.
        </p>
      </>
    )
  },
  {
    question: "Can teeth whitening change the color of my fillings, crowns, or veneers?",
    answer: (
      <>
        <p>
          Teeth whitening products only affect <b>natural tooth enamel</b> and do not change the colour of <b>porcelain crowns, veneers, or white (composite) fillings</b>. If your dental restorations no longer match the colour of your whitened teeth, your dentist may recommend replacing them for a uniform look.
        </p>
      </>
    )
  },
  {
    question: "Do whitening toothpastes really work?",
    answer: (
      <>
        <p>
          Whitening toothpastes may help reduce <b>surface stains</b> but do not significantly change tooth colour. They work by gently scrubbing or chemically removing external stains. However, they can cause sensitivity and are not a substitute for professional whitening treatments.
        </p>
      </>
    )
  },
  {
    question: "What should I do before my whitening appointment?",
    answer: (
      <>
        <p>
          We always recommend a <b>dental check-up and professional cleaning</b> before any whitening treatment. This ensures your teeth and gums are healthy, removes plaque and tartar for even whitening results, and identifies any restorations that may not whiten properly.
        </p>
      </>
    )
  }
];

function TeethWhitening() {
  return (
    <div className="services-screen">
      <div className="services-container">
        <Header />
        <div className="services-content">
          <div className="screen-title">
            <p>TEETH WHITENING</p>
          </div>
          <section className="services-landing">
            <div className="services-intro">
              <div className="services-section services-split">
                <div className="services-media-left">
                  <ServiceSection video={TeethWhiteningVideo} />
                </div>
                <div className="services-media-right">
                  <h2>Brighten your smile with safe, professional results</h2>
                  <p>
                    Brighten your smile with safe, professional results. Over time, your smile can lose its natural brightness due to everyday habits like drinking coffee, tea, red wine, or smoking. At Pristine Smiles Dental, we offer safe, effective teeth whitening treatments designed to remove stains and restore your smile’s sparkle.
                  </p>
                </div>
              </div>
              <div className="services-section">
                <h2>Whitening Options We Offer</h2>
                <p>
                  We provide two professional teeth whitening options—both tailored to suit your lifestyle and goals:
                </p>
                <ul>
                  <li><strong>In-Chair Whitening (In-Office Treatment):</strong> A fast, professional treatment performed in our clinic. Results in noticeably whiter teeth in just one visit (about 60 minutes). A powerful hydrogen peroxide-based gel is applied to your teeth and activated with a special light. Perfect for patients who want immediate results.</li>
                  <li><strong>Take-Home Whitening Kits:</strong> Custom-made whitening trays that fit your teeth perfectly. Includes professional-grade whitening gel. Designed for safe, convenient at-home use over 1–2 weeks. Instructions tailored to your individual needs (how much gel to use, how long to wear the trays, etc.).</li>
                </ul>
                <p>
                  Many patients choose to combine both: an in-chair session for a brighter base, followed by take-home trays for long-term maintenance.
                </p>
              </div>
              <div className="services-section">
                <h2>How Whitening Works</h2>
                <p>
                  Our whitening gels work by breaking down stains within the enamel using clinically tested whitening agents such as hydrogen peroxide and carbamide peroxide. These ingredients chemically lighten the internal colour of your teeth without damaging the tooth structure.
                </p>
              </div>
              <FAQComponent faqs={faqsArray} />
              <ServiceBooking 
                title={"Ready to Brighten Your Smile?"}
                content={"Professional teeth whitening is a safe, effective way to refresh your appearance and boost your confidence. Whether you’re preparing for a special occasion or simply want a brighter everyday smile, the team at Pristine Smiles is here to help. Book your consultation today to find the best whitening option for you."}
              />
            </div>
          </section>

          <Carousel images={imageList} />
          <SpecialOffersCarousel offers={offersList} />
          <PriceListButton />
          <GetInTouch />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default TeethWhitening;
