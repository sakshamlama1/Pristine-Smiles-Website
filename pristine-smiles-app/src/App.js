import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './Components/ScrollToTop';

// Import all screens
import { 
  About, FAQ, LandingPage, PrivacyPolicy, TermsAndConditions, PriceList,
  
  // Payment Options
  Payments, PaymentPlans, PaymentOptions, Afterpay, ChildrenDBSchedule, Healthfunds, Humm, SmileRight, VeteranAffairs,

  // Services - Cosmetic Dentistry
  ChildrenDentistry, CosmeticDentistry, CompositeVeneersBonding, DentalVeneers, Invisalign, TeethWhitening,

  // Services - General Dentistry
  Services, GeneralDentistry, DentalAnxiety, DentalBridge, DentalCheckUpsAndCleaning, DentalCrown, 
  DentalFillings, Dentures, EmergencyDentistry, MouthGuards, PreventativeFamilyDentistry, 
  RootCanalTreatment, SleepApneaMouthguard, WisdomTeethRemoval,
} from './Screens';

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* General Pages */}
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/faqs" element={<FAQ />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />

          {/* Payments - Payment Options */}
          <Route path="/payments" element={<Payments />} />
          <Route path="/payment-options" element={<PaymentOptions />} />
          <Route path="/payment-options/healthfunds" element={<Healthfunds />} />
          <Route path="/payment-options/child-dental-benefit" element={<ChildrenDBSchedule />} />
          <Route path="/payment-options/veterans-affairs" element={<VeteranAffairs />} />

          {/* Payments - Payment Plans */}
          <Route path="/payment-plans" element={<PaymentPlans />} />
          <Route path="/payment-plans/afterpay" element={<Afterpay />} />
          <Route path="/payment-plans/humm" element={<Humm />} />
          <Route path="/payment-plans/smile-right" element={<SmileRight />} />

          <Route path="/get-price-list" element={<PriceList />} />

          {/* Services - Cosmetic Dentistry */}
          <Route path="/services" element={<Services />} />
          <Route path="/services/cosmetic" element={<CosmeticDentistry />} />
          <Route path="/services/cosmetic/composite-veneers-bonding" element={<CompositeVeneersBonding />} />
          <Route path="/services/cosmetic/dental-veneers" element={<DentalVeneers />} />
          <Route path="/services/cosmetic/invisalign" element={<Invisalign />} />
          <Route path="/services/cosmetic/teeth-whitening" element={<TeethWhitening />} />

          {/* Services - General Dentistry */}
          <Route path="/services/general" element={<GeneralDentistry />} />
          <Route path="/services/general/children-dentistry" element={<ChildrenDentistry />} />
          <Route path="/services/general/dental-anxiety-nervous-patients" element={<DentalAnxiety />} />
          <Route path="/services/general/dental-bridge" element={<DentalBridge />} />
          <Route path="/services/general/dental-check-ups-cleaning" element={<DentalCheckUpsAndCleaning />} />
          <Route path="/services/general/dental-crown" element={<DentalCrown />} />
          <Route path="/services/general/dental-fillings" element={<DentalFillings />} />
          <Route path="/services/general/dentures" element={<Dentures />} />
          <Route path="/services/general/emergency-dentistry" element={<EmergencyDentistry />} />
          <Route path="/services/general/mouth-guards" element={<MouthGuards />} />
          <Route path="/services/general/preventative-family-dentistry" element={<PreventativeFamilyDentistry />} />
          <Route path="/services/general/root-canal-treatment" element={<RootCanalTreatment />} />
          <Route path="/services/general/sleep-apnea-mouthguard" element={<SleepApneaMouthguard />} />
          <Route path="/services/general/wisdom-teeth-removal" element={<WisdomTeethRemoval />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
