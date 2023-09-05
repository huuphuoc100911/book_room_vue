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
                                            <input type="text" class="input-text" name="username" id="username2">
                                        </label>
                                    </p>
                                    <p class="form-row form-row-wide">
                                        <label for="email2">Email Address:
                                            <i class="im im-icon-Mail"></i>
                                            <input type="text" class="input-text" name="email" id="email2">
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
                                    <p class="form-row form-row-wide">
                                        <label for="phone">Phone:
                                            <i class="im im-icon-Phone-2"></i>
                                            <input type="text" class="input-text" name="phone" id="phone">
                                        </label>
                                    </p>
                                    <p class="form-row form-row-wide">
                                        <label for="phone">Birthday:
                                            <div class="row" style="margin-left: 0;">
                                                <select class="col-sm-3" style="margin-right: 20px;" name="" id="">
                                                    <option label="year">Year</option>
                                                    <option v-for="(year, index) in arrayYear" :key="index">{{ year }}
                                                    </option>
                                                </select>
                                                <select class="col-sm-3" style="margin-right: 20px;" name="" id="">
                                                    <option label="Month">Month</option>
                                                    <option v-for="(month, index) in arrayMonth" :key="index">{{ month }}
                                                    </option>
                                                </select>
                                                <select class="col-sm-3" style="margin-right: 20px;" name="" id="">
                                                    <option label="Day">Day</option>
                                                    <option v-for="(day, index) in arrayDay" :key="index">{{ day }}
                                                    </option>
                                                </select>
                                            </div>
                                        </label>
                                    </p>
                                    <p class="form-row form-row-wide">
                                        <label for="gender">Gender:
                                            <select class="" style="margin-right: 20px;" name="" id="">
                                                <option>Male</option>
                                                <option>Female</option>
                                            </select>
                                        </label>
                                    </p>
                                    <p class="form-row form-row-wide">
                                        <label for="address">Address:
                                            <i class="im im-icon-Location-2"></i>
                                            <input type="text" class="input-text" name="address" id="address">
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
import { createArrayNumber } from "../../utils/createArrayNumber";
export default {
    name: "SignUp",
    setup() {
        const arrayYear = createArrayNumber(1970, 2023);
        const arrayMonth = createArrayNumber(1, 12);
        const arrayDay = createArrayNumber(1, 31);

        return {
            arrayYear,
            arrayMonth,
            arrayDay
        }
    }
}
</script>

<style lang="scss">
.my-bg {
    // background: url("https://wallpapercave.com/wp/wp10784413.jpg");
    top: 0px;
    position: absolute;
    height: 100vh;
    overflow: scroll;
}
</style>