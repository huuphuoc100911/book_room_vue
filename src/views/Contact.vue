<template>
    <div id="wrapper">
        <!-- Content -->
        <!-- Map Container -->
        <div class="contact-map">
            <!-- Google Maps -->
            <div id="singleListingMap-container">
                <!-- Map -->
                <div id="map-container">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248998.6495037926!2d108.38236978848849!3d12.804203490722648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3171d93149ba9fcd%3A0xc092d39e5e42601d!2zRWEgS2FyLCDEkOG6r2sgTOG6r2ssIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1693898195033!5m2!1svi!2s"
                        width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            <!-- Google Maps / End -->
            <!-- Office -->
            <div class="address-box-container">
                <div class="address-container" data-background-image="images/our-office.jpg">
                    <div class="office-address">
                        <h3>Our Office</h3>
                        <ul>
                            <li>John Street 304</li>
                            <li>New York</li>
                            <li>Phone (123) 123-456 </li>
                        </ul>
                    </div>
                </div>
            </div>
            <!-- Office / End -->
        </div>
        <div class="clearfix"></div>
        <!-- Map Container / End -->
        <!-- Container / Start -->
        <div class="container">
            <div class="row">
                <!-- Contact Details -->
                <div class="col-md-4">
                    <h4 class="headline margin-bottom-30">Find Us There</h4>
                    <!-- Contact Details -->
                    <div class="sidebar-textbox">
                        <p>Collaboratively administrate channels whereas virtual. Objectively seize scalable metrics whereas
                            proactive e-services.</p>
                        <ul class="contact-details">
                            <li><i class="im im-icon-Phone-2"></i> <strong>Phone:</strong> <span>(123) 123-456 </span></li>
                            <li><i class="im im-icon-Fax"></i> <strong>Fax:</strong> <span>(123) 123-456 </span></li>
                            <li>
                                <i class="im im-icon-Globe"></i> <strong>Web:</strong>
                                <span><a>www.example.com</a></span>
                            </li>
                            <li><i class="im im-icon-Envelope"></i> <strong>E-Mail:</strong>
                                <span><a>office@example.com</a></span>
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- Contact Form -->
                <div class="col-md-8">
                    <section id="contact">
                        <h4 class="headline margin-bottom-35">Contact Form</h4>
                        <div id="contact-message"></div>
                        <form method="post" action="contact.php" name="contactform" id="contactform" autocomplete="on">
                            <div class="row">
                                <div class="col-md-6">
                                    <div>
                                        <input name="name" type="text" id="name" placeholder="Your Name"
                                            required="required" />
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div>
                                        <input name="email" type="email" id="email" placeholder="Email Address"
                                            pattern="^[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z]{2,})$"
                                            required="required" />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <input name="subject" type="text" id="subject" placeholder="Subject" required="required" />
                            </div>
                            <div>
                                <textarea name="comments" cols="40" rows="3" id="comments" placeholder="Message"
                                    spellcheck="true" required="required"></textarea>
                            </div>
                            <input type="submit" class="submit button" id="submit" value="Submit Message" />
                        </form>
                    </section>
                </div>
                <!-- Contact Form / End -->
            </div>
        </div>
        <!-- Container / End -->
        <!-- Back To Top Button -->
        <div id="backtotop"><a href="#"></a></div>
    </div>
</template>

<script>
import { useStore } from 'vuex';
export default {
    name: "ContactView",
    setup() {
        const store = useStore();
        store.dispatch("auth/loadUserLoginFromLocalStorageAction");
    }
}
</script>

<style></style>