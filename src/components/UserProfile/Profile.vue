<template>
    <div class="col-lg-4 col-md-4 margin-top-0">
        <!-- Verified Badge -->
        <div class="verified-badge with-tip"
            data-tip-content="Account has been verified and belongs to the person or organization represented.">
            <i class="sl sl-icon-user-following"></i> Verified Account
        </div>

        <!-- Contact -->
        <div class="boxed-widget margin-top-30 margin-bottom-50">
            <h3>Contact</h3>
            <ul class="listing-details-sidebar">
                <li><i class="sl sl-icon-phone"></i> {{ userLogin.user.phone }}</li>
                <li><i class="fa fa-envelope-o"></i> {{ userLogin.user.email }}</li>
            </ul>
            <ul class="listing-details-sidebar social-profiles">
                <li><a href="#" class="facebook-profile"><i class="fa fa-facebook-square"></i> Facebook</a></li>
                <li><a href="#" class="twitter-profile"><i class="fa fa-twitter"></i> Twitter</a></li>
                <!-- <li><a href="#" class="gplus-profile"><i class="fa fa-google-plus"></i> Google Plus</a></li> -->
            </ul>
        </div>
        <!-- Contact / End-->
    </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex'
export default {
    name: "ProfileView",
    setup() {
        const store = useStore();
        store.dispatch("auth/loadUserLoginFromLocalStorageAction");
        const userLogin = computed(() => store.state.auth.userLogin);

        return {
            userLogin
        }
    }
}
</script>

<style></style>