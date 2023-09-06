<template>
    <!-- Header Container  -->
    <header id="header-container">
        <!-- Header -->
        <div id="header">
            <div class="container">
                <!-- Left Side Content -->
                <div class="left-side">
                    <!-- Logo -->
                    <div id="logo">
                        <a href="index.html"><img src="images/logo2.png" data-sticky-logo="images/logo.png" alt="" /></a>
                    </div>

                    <!-- Mobile Navigation -->
                    <div class="mmenu-trigger">
                        <button class="hamburger hamburger--collapse" type="button">
                            <span class="hamburger-box">
                                <span class="hamburger-inner"></span>
                            </span>
                        </button>
                    </div>

                    <!-- Main Navigation -->
                    <nav id="navigation" class="style-1">
                        <ul id="responsive">
                            <li>
                                <router-link :to="{ name: 'home' }">Home</router-link>
                            </li>
                            <li>
                                <router-link :to="{ name: 'BlogView' }">Blogs</router-link>
                            </li>
                            <li>
                                <router-link :to="{ name: 'ContactView' }">Contact</router-link>
                            </li>
                        </ul>
                    </nav>
                    <div class="clearfix"></div>
                    <!-- Main Navigation / End -->
                </div>
                <!-- Left Side Content / End -->

                <!-- Right Side Content / End -->
                <div class="right-side">
                    <div class="header-widget">
                        <!-- User Menu -->
                        <div class="user-menu" v-if="userLogin.user">
                            <div class="user-name">
                                <span><img src="images/dashboard-avatar.jpg" alt="" /></span>Hi, {{ userLogin.user.name }}
                            </div>
                            <ul>
                                <li>
                                    <a href="dashboard.html"><i class="sl sl-icon-settings"></i> Dashboard</a>
                                </li>
                                <li>
                                    <a href="dashboard-messages.html"><i class="sl sl-icon-envelope-open"></i> Messages</a>
                                </li>
                                <li>
                                    <a href="dashboard-bookings.html"><i class="fa fa-calendar-check-o"></i> Bookings</a>
                                </li>
                                <li>
                                    <a href="index.html"><i class="sl sl-icon-power"></i> Logout</a>
                                </li>
                            </ul>
                        </div>
                        <span v-else>
                            <router-link class="sign-in" :to="{ name: 'SignIn' }">
                                <i class="sl sl-icon-login"></i>Sign In
                            </router-link>
                            <router-link class="sign-in" :to="{ name: 'SignUp' }">
                                <i class="sl sl-icon-user-follow"></i>Sign Up
                            </router-link>
                        </span>
                    </div>
                </div>
                <!-- Right Side Content / End -->
            </div>
        </div>
        <!-- Header / End -->
    </header>
    <div class="clearfix"></div>
    <!-- Header Container / End -->
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex'
export default {
    setup() {
        const store = useStore();
        const userLogin = computed(() => store.state.auth.userLogin);

        return {
            userLogin
        }
    }
}
</script>

<style></style>