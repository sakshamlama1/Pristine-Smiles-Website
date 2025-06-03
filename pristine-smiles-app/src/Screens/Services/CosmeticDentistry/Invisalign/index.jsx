import "./index.css";
import React from "react";
import Header from "../../../../Components/Header";
import Footer from "../../../../Components/Footer";
import GetInTouch from "../../../../Components/GetInTouch";
import PriceListButton from "../../../../Components/PriceListButton";
import Carousel from "../../../../Components/Carousel";
import imageList from "../../../../utils/carouselImages";
import SpecialOffersCarousel from "../../../../Components/SpecialOffersCarousel";
import offersList from "../../../../utils/specialOffers";
import ServiceBooking from "../../../../Components/ServiceBooking";
import ServiceSection from "../../../../Components/ServiceSection";
import InvisalignVideo from "../../../../assets/videos/Invisalign.mp4";

function Invisalign() {
    return (
        <div className="services-screen">
            <div className="services-container">
                <Header />
                <div className="services-content">
                    <div className="screen-title">
                        <p>INVISALIGN</p>
                    </div>
                    <section className="services-landing services-landing-content">
                        <div className="services-intro ">
                            <div className="services-section services-split">
                                <div className="services-media-left">
                                    <ServiceSection video={InvisalignVideo} />
                                </div>

                                <div className="services-media-right">
                                    <h2>Invisalign: A Modern Approach to Straighter Teeth</h2>
                                    <p>
                                        Invisalign is a revolutionary orthodontic treatment designed to improve the alignment of your teeth, resulting in a more aesthetically pleasing and potentially healthier smile. If your teeth are misaligned, crowded, overlapping, or have noticeable gaps, our dentists may suggest this treatment to address these common dental concerns as Invisalign can be used to effectively correct a variety of orthodontic issues.
                                    </p>
                                </div>
                            </div>
                            <div className="services-section">
                                <h2>How Does Invisalign Work?</h2>
                                <p>
                                    Invisalign uses advanced dental technology to straighten your teeth without the need for traditional metal braces. The treatment involves a series of custom-made, clear aligners that gradually move your teeth into their ideal position. These aligners are nearly invisible, allowing for a more discreet treatment option.
                                </p>
                                <p>
                                    The aligners are removable, making it easy for patients to eat, drink, brush, and floss their teeth as they normally would. During treatment, you'll wear a new set of aligners every two weeks, progressing through the series until your teeth are properly aligned. To achieve optimal results, the aligners should be worn for at least 22 hours per day. Invisalign is a great option for individuals who prefer a more flexible and less noticeable alternative to traditional braces.
                                </p>
                            </div>

                            <div className="services-section">
                                <h2>Can Straighter Teeth Improve Your Oral Health?</h2>
                                <p>
                                    While Invisalign is often considered a cosmetic dental treatment, straightening misaligned teeth can significantly improve your oral health. If your teeth are out of alignment, it can be difficult to brush and floss effectively, leading to an increased risk of tooth decay and gum disease. By aligning your teeth properly, Invisalign helps reduce these risks, improving both the health and function of your smile.
                                </p>
                            </div>

                            <div className="services-section">
                                <h2>Invisalign vs. Veneers: Which is the Right Choice?</h2>
                                <p>
                                    Invisalign can be a more conservative option compared to veneers, especially when you need to address multiple misaligned teeth. If your teeth are otherwise healthy and well-shaped but just need a little refinement, veneers may be used to perfect the appearance of one or two teeth. In many cases, we combine Invisalign treatment with teeth whitening to achieve a flawless, radiant smile once your orthodontic treatment is complete.
                                </p>
                            </div>

                            <div className="services-section">
                                <h2>How Long Does Invisalign Treatment Take?</h2>
                                <p>
                                    The duration of Invisalign treatment varies, but most people complete their treatment within a year. If your concerns are mainly cosmetic and limited to your front teeth, treatment can often be completed more quickly, with a beautifully straight smile achieved in just a few months.
                                </p>
                            </div>

                            <div className="services-section">
                                <h2>Can People of All Ages Benefit from Invisalign?</h2>
                                <p>
                                    Invisalign is suitable for patients of all ages. Its discreet appearance makes it particularly popular among adults who may feel self-conscious about wearing traditional metal braces. In the past, straightening teeth as an adult was more difficult, but Invisalign now allows adults to enjoy the benefits of straight teeth at any stage in life. Whether for cosmetic reasons or improved oral health, Invisalign provides a viable solution for achieving a straighter smile at any age.
                                </p>
                            </div>

                            <div className="services-section" id="table-container">
                                <h2>How Does Invisalign Differ from Fixed Braces?</h2>
                                <table className="styled-table">
                                    <thead>
                                        <tr>
                                            <th>Aspect</th>
                                            <th>Braces</th>
                                            <th>Invisalign</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Appearance</td>
                                            <td>Visible metal or colored brackets</td>
                                            <td>Clear, invisible aligners</td>
                                        </tr>
                                        <tr>
                                            <td>Removability</td>
                                            <td>Fixed, cannot be removed (typically worn for 2 years)</td>
                                            <td>Removable, but must be worn for 22 hours a day throughout treatment</td>
                                        </tr>
                                        <tr>
                                            <td>Cleaning</td>
                                            <td>Difficult to clean teeth around brackets</td>
                                            <td>Aligners can be removed for easy cleaning</td>
                                        </tr>
                                        <tr>
                                            <td>Adjustment Frequency</td>
                                            <td>Braces adjusted about every month</td>
                                            <td>New trays every 2 weeks, with monthly visits</td>
                                        </tr>
                                        <tr>
                                            <td>Discipline Needed</td>
                                            <td>Requires less self-discipline</td>
                                            <td>Requires more self-discipline and consistent wear</td>
                                        </tr>
                                        <tr>
                                            <td>Food Trapping</td>
                                            <td>Food can get trapped around brackets</td>
                                            <td>No food trapping, as aligners are removed for eating</td>
                                        </tr>
                                        <tr>
                                            <td>Comfort</td>
                                            <td>Discomfort from wires and pressure, especially when eating</td>
                                            <td>Can cause pressure discomfort but not due to wires or eating</td>
                                        </tr>
                                        <tr>
                                            <td>Eating</td>
                                            <td>Cannot be removed while eating</td>
                                            <td>Can be removed while eating</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="services-section">
                                <h2>Are There Other Aligner Systems?</h2>
                                <p>
                                    Yes, several alternative aligner systems are available, including ClearCorrect, SureSmile, and others. While these options share similarities with Invisalign, the cost and treatment approach can vary depending on the system you choose. Each system may have its own features, benefits, and pricing, so it's important to consult with your dentist to determine the best fit for your needs.
                                </p>
                            </div>

                            <div className="services-section">
                                <h2>Cost of Invisalign Treatment</h2>
                                <p>
                                    The cost of Invisalign treatment varies based on each individual’s specific needs, as the process and requirements differ from person to person. As a result, we cannot provide an exact cost here. However, for an estimate, Invisalign treatment typically ranges from $3,700 to $9,000.
                                </p>
                                <p>
                                    To determine the most accurate price for your treatment, we encourage you to contact our clinic to begin the consultation process.
                                </p>
                                <p>
                                    With flexible payment options, you could start your journey to straighter teeth for as little as $47 per week.
                                </p>
                            </div>

                            <ServiceBooking 
                                title={"Start Your Invisalign Journey Today"} 
                                content={"Ready to transform your smile with Invisalign? Schedule a consultation with our experienced dental team to explore your options and create a personalized treatment plan tailored to your needs."} 
                            />                            
                        </div>
                    </section>
                    <Carousel images={imageList} />
                    <SpecialOffersCarousel offers={offersList} />
                    <PriceListButton />
                    <GetInTouch />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Invisalign;
