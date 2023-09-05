<template>
    <div style="background-image: url(images/bg-auth.png)"
        class="mfp-wrap mfp-close-btn-in mfp-auto-cursor my-mfp-zoom-in mfp-ready my-bg" tabindex="-1">
        <div class="mfp-container mfp-inline-holder">
            <div class="mfp-content">
                <div id="sign-in-dialog" class="zoom-anim-dialog">
                    <div class="small-dialog-header">
                        <h3>Sign Up</h3>
                    </div>
                    <!--Tabs -->
                    <div class="sign-in-form style-1">
                        <div class="tabs-container alt">
                            <!-- Register -->
                            <div>
                                <form method="post" class="register">
                                    <p class="form-row form-row-wide">
                                        <label for="username2">Username:
                                            <i class="im im-icon-Male"></i>
                                            <input type="text" class="input-text" name="username" id="username2" value="">
                                        </label>
                                    </p>
                                    <p class="form-row form-row-wide">
                                        <label for="email2">Email Address:
                                            <i class="im im-icon-Mail"></i>
                                            <input type="text" class="input-text" name="email" id="email2" value="">
                                        </label>
                                    </p>
                                    <p class="form-row form-row-wide">
                                        <label for="password1">Password:
                                            <i class="im im-icon-Lock-2"></i>
                                            <input class="input-text" type="password" name="password1" id="password1">
                                        </label>
                                    </p>
                                    <p class="form-row form-row-wide">
                                        <label for="password2">Repeat Password:
                                            <i class="im im-icon-Lock-2"></i>
                                            <input class="input-text" type="password" name="password2" id="password2">
                                        </label>
                                    </p>
                                    <input type="submit" class="button border fw margin-top-10" name="register"
                                        value="Register">
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "SignUp"
}
</script>

<style lang="scss">
.my-bg {
    // background: url("https://wallpapercave.com/wp/wp10784413.jpg");
    top: 0px;
    position: absolute;
    height: 100vh;
}
</style>