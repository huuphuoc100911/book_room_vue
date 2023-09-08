<template>
    <div id="footer" class="sticky-footer">
        <!-- Main -->
        <div class="container">
            <div class="row">
                <div class="col-md-5 col-sm-6">
                    <img class="footer-logo" src="images/logo.png" alt="" />
                    <br /><br />
                    <p>
                        Morbi convallis bibendum urna ut viverra. Maecenas quis consequat
                        libero, a feugiat eros. Nunc ut lacinia tortor morbi ultricies
                        laoreet ullamcorper phasellus semper.
                    </p>
                </div>

                <div class="col-md-4 col-sm-6">
                    <h4>Helpful Links</h4>
                    <ul class="footer-links">
                        <li><router-link to="/sign-in">Login</router-link></li>
                        <li><router-link to="/sign-up">Sign Up</router-link></li>
                        <li><router-link to="/blog">Blog</router-link></li>
                        <li><router-link to="/contact">Contact</router-link></li>
                    </ul>
                    <div class="clearfix"></div>
                </div>

                <div class="col-md-3 col-sm-12">
                    <h4>Contact Us</h4>
                    <div class="text-widget">
                        <span>12345 Little Lonsdale St, Melbourne</span> <br />
                        Phone: <span>(123) 123-456 </span><br />
                        E-Mail:<span> <a href="#">office@example.com</a> </span><br />
                    </div>

                    <ul class="social-icons margin-top-20">
                        <li>
                            <a class="facebook" href="#"><i class="icon-facebook"></i></a>
                        </li>
                        <li>
                            <a class="twitter" href="#"><i class="icon-twitter"></i></a>
                        </li>
                        <li>
                            <a class="gplus" href="#"><i class="icon-gplus"></i></a>
                        </li>
                        <li>
                            <a class="vimeo" href="#"><i class="icon-vimeo"></i></a>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- Copyright -->
            <div class="row">
                <div class="col-md-12">
                    <div class="copyrights">© 2023 Listeo. All Rights Reserved.</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style></style>