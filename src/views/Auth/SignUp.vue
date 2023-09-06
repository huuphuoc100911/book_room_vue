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
                                <form method="post" class="register" @submit.prevent="handleRegister()">
                                    <p class="form-row form-row-wide">
                                        <label for="username2">Username:
                                            <i class="im im-icon-Male"></i>
                                            <input type="text" class="input-text" v-model="userRegister.name"
                                                id="username2">
                                        </label>
                                    </p>
                                    <p class="form-row form-row-wide">
                                        <label for="email2">Email Address:
                                            <i class="im im-icon-Mail"></i>
                                            <input type="text" class="input-text" v-model="userRegister.email" id="email2">
                                        </label>
                                    </p>
                                    <p class="form-row form-row-wide">
                                        <label for="password1">Password:
                                            <i class="im im-icon-Lock-2"></i>
                                            <input class="input-text" type="password" v-model="userRegister.password"
                                                id="password1">
                                        </label>
                                    </p>
                                    <p class="form-row form-row-wide">
                                        <label for="password2">Repeat Password:
                                            <i class="im im-icon-Lock-2"></i>
                                            <input class="input-text" type="password" v-model="userRegister.repeatPassword"
                                                id="password2">
                                        </label>
                                    </p>
                                    <p class="form-row form-row-wide">
                                        <label for="phone">Phone:
                                            <i class="im im-icon-Phone-2"></i>
                                            <input type="text" class="input-text" v-model="userRegister.phone" id="phone">
                                        </label>
                                    </p>
                                    <p class="form-row form-row-wide">
                                        <label for="phone">Birthday:
                                            <div class="row" style="margin-left: 0;">
                                                <select class="col-sm-3" style="margin-right: 20px;"
                                                    v-model="userRegister.year">
                                                    <option label="year">Year</option>
                                                    <option v-for="(year, index) in arrayYear" :key="index">{{ year }}
                                                    </option>
                                                </select>
                                                <select class="col-sm-3" style="margin-right: 20px;"
                                                    v-model="userRegister.month">
                                                    <option label="Month">Month</option>
                                                    <option v-for="(month, index) in arrayMonth" :key="index">{{ month }}
                                                    </option>
                                                </select>
                                                <select class="col-sm-3" style="margin-right: 20px;"
                                                    v-model="userRegister.day">
                                                    <option label="Day">Day</option>
                                                    <option v-for="(day, index) in arrayDay" :key="index">{{ day }}
                                                    </option>
                                                </select>
                                            </div>
                                        </label>
                                    </p>
                                    <p class="form-row form-row-wide">
                                        <label for="gender">Gender:
                                            <select class="" style="margin-right: 20px;" v-model="userRegister.gender">
                                                <option value="true">Male</option>
                                                <option value="false">Female</option>
                                            </select>
                                        </label>
                                    </p>
                                    <p class="form-row form-row-wide">
                                        <label for="address">Address:
                                            <i class="im im-icon-Location-2"></i>
                                            <input type="text" class="input-text" v-model="userRegister.address"
                                                id="address">
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
import { reactive } from 'vue';
import { createArrayNumber } from "../../utils/createArrayNumber";
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
export default {
    name: "SignUp",
    setup() {
        const store = useStore();
        const router = useRouter();
        const userRegister = reactive({
            name: "",
            email: "",
            password: "",
            repeatPassword: "",
            phone: "",
            year: "",
            month: "",
            day: "",
            gender: false,
            address: "",
        });

        const arrayYear = createArrayNumber(1970, 2023);
        const arrayMonth = createArrayNumber(1, 12);
        const arrayDay = createArrayNumber(1, 31);

        function handleRegister() {
            if (userRegister.password === userRegister.repeatPassword) {
                const data = {
                    name: userRegister.name,
                    email: userRegister.email,
                    password: userRegister.password,
                    phone: userRegister.phone,
                    birthDay: `${userRegister.year}/${userRegister.month}/${userRegister.day}`,
                    gender: userRegister.gender === "true",
                    address: userRegister.address,
                };

                store.dispatch("auth/signUpAction", { data, router });
            } else {
                alert("Mat khau khong khop");
            }
        }

        return {
            arrayYear,
            arrayMonth,
            arrayDay,
            userRegister,
            handleRegister
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