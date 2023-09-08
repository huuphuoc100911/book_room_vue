<template>
    <div id="wrapper">
        <!-- Gradient-->
        <div class="single-listing-page-titlebar"></div>
        <!-- Content -->
        <div class="container">
            <div class="row sticky-wrapper">
                <div class="col-lg-8 col-md-8 padding-right-30">
                    <!-- Titlebar -->
                    <div id="titlebar" class="listing-titlebar">
                        <div class="listing-titlebar-title">
                            <h2>{{ roomDetail.name }}<span class="listing-tag">Apartments</span></h2>
                            <span>
                                <div class="listing-address" v-if="roomDetail.locationId">
                                    <i class="fa fa-map-marker"></i>
                                    {{ roomDetail.locationId.province }}, {{ roomDetail.locationId.country }}
                                </div>
                            </span>
                            <div class="star-rating" data-rating="5">
                            </div>
                            <img :src="roomDetail.image" />
                        </div>
                    </div>

                    <!-- Listing Nav -->
                    <div id="listing-nav" class="listing-nav-container">
                        <ul class="listing-nav">
                            <li><a class="active">Overview</a></li>
                        </ul>
                    </div>

                    <!-- Overview -->
                    <div id="listing-overview" class="listing-section">

                        <!-- Apartment Description -->
                        <ul class="apartment-details">
                            <li>{{ roomDetail.guests }} guest</li>
                            <li>{{ roomDetail.bedRoom }} bedroom</li>
                            <li>{{ roomDetail.bath }} bathroom</li>
                        </ul>

                        <!-- Description -->
                        <p>{{ roomDetail.description }}</p>
                        <!-- Listing Contacts -->
                        <div class="listing-links-container">

                            <ul class="listing-links contact-links">
                                <li><a class="listing-links"><i class="fa fa-phone"></i> 0357789210</a></li>
                                <li><a class="listing-links"><i class="fa fa-envelope-o"></i>
                                        huuphuoc@example.com</a>
                                </li>
                                <li><a target="_blank" class="listing-links"><i class="fa fa-link"></i>
                                        www.example.com</a></li>
                            </ul>
                            <div class="clearfix"></div>

                            <ul class="listing-links">
                                <li><a target="_blank" class="listing-links-fb"><i class="fa fa-facebook-square"></i>
                                        Facebook</a></li>
                                <li><a target="_blank" class="listing-links-yt"><i class="fa fa-youtube-play"></i>
                                        YouTube</a></li>
                                <li><a target="_blank" class="listing-links-ig"><i class="fa fa-instagram"></i>
                                        Instagram</a></li>
                                <li><a target="_blank" class="listing-links-tt"><i class="fa fa-twitter"></i>
                                        Twitter</a></li>
                            </ul>
                            <div class="clearfix"></div>

                        </div>
                        <div class="clearfix"></div>
                        <!-- Amenities -->
                        <h3 class="listing-desc-headline">Amenities</h3>
                        <ul class="listing-features checkboxes">
                            <li>Elevator in building</li>
                            <li>Friendly workspace</li>
                            <li>Instant Book</li>
                            <li>Wireless Internet</li>
                            <li>Free parking on premises</li>
                            <li>Free parking on street</li>
                        </ul>
                    </div>
                    <!-- Slider -->
                    <div id="listing-gallery" class="listing-section">
                        <h3 class="listing-desc-headline margin-top-70">Gallery</h3>
                        <img :src="roomDetail.image" />
                    </div>

                    <!-- Location -->
                    <div id="listing-location" class="listing-section">
                        <h3 class="listing-desc-headline margin-top-60 margin-bottom-30">Location</h3>
                        <div id="map-container">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248998.6495037926!2d108.38236978848849!3d12.804203490722648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3171d93149ba9fcd%3A0xc092d39e5e42601d!2zRWEgS2FyLCDEkOG6r2sgTOG6r2ssIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1693898195033!5m2!1svi!2s"
                                width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>

                    <!-- Reviews -->
                    <div id="listing-reviews" class="listing-section">
                        <h3 class="listing-desc-headline margin-top-75 margin-bottom-20">Reviews <span>({{ reviewList.length
                        }})</span></h3>
                        <div class="clearfix"></div>

                        <!-- Reviews -->
                        <section class="comments listing-reviews">
                            <ul>
                                <li v-for="(review, index) in reviewList" :key="index">
                                    <div class="avatar">
                                        <div v-if="review.userId">
                                            <img v-if="review.userId.avatar" :src="review.userId.avatar" alt="" />
                                            <img v-else src="/images/user-avatar.jpg" alt="" />
                                        </div>
                                        <div v-else>
                                            <img src="/images/user-avatar.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div class="comment-content">
                                        <div class="arrow-comment"></div>
                                        <div class="comment-by" v-if="review.userId">{{ review.userId.name }}
                                            <i class="tip" v-if="review.userId.type === 'ADMIN'"
                                                data-tip-content="Person who left this review actually was a customer"></i>
                                            <span class="date">{{ review.updatedAt.slice(0, 10) }}</span>
                                            <div class="star-rating" data-rating="5"></div>
                                        </div>
                                        <p>{{ review.content }}</p>
                                        <a class="rate-review" v-if="review.userId"><i class="sl sl-icon-like"></i>
                                            {{ review.userId.type }}
                                            <span>12</span></a>
                                    </div>
                                </li>
                            </ul>
                        </section>
                    </div>
                </div>
                <!-- Sidebar -->
                <div class="col-lg-4 col-md-4 margin-top-75 sticky">
                    <!-- Verified Badge -->
                    <div class="verified-badge with-tip"
                        data-tip-content="Listing has been verified and belongs the business owner or manager.">
                        <i class="sl sl-icon-check"></i> Verified Listing
                    </div>
                    <!-- Book Now -->
                    <div id="booking-widget-anchor" class="boxed-widget booking-widget margin-top-35">
                        <h3><i class="fa fa-calendar-check-o "></i> Booking</h3>
                        <!-- Book Now -->
                        <router-link :to="`/booking/${roomDetail._id}`"
                            class="button book-now fullwidth margin-top-5">Request To
                            Book</router-link>
                    </div>
                    <!-- Book Now / End -->
                </div>
                <!-- Sidebar / End -->
            </div>
        </div>
        <!-- Back To Top Button -->
        <div id="backtotop"><a></a></div>

        <!-- Booking Sticky Footer -->
        <div class="booking-sticky-footer">
            <div class="container">
                <div class="bsf-left">
                    <h4>Starting from $29</h4>
                    <div class="star-rating" data-rating="5">
                        <div class="rating-counter"></div>
                    </div>
                </div>
                <div class="bsf-right">
                    <a class="button">Book Now</a>
                </div>
            </div>
        </div>


    </div>
</template>

<script>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
export default {
    setup() {
        const route = useRoute();
        const store = useStore();
        store.dispatch("rooms/getRoomDetailAction", route.params.roomId);
        store.dispatch("rooms/getReviewRoomAction", route.params.roomId);
        const roomDetail = computed(() => store.state.rooms.roomDetail);
        const reviewList = computed(() => store.state.rooms.reviewList);

        return {
            roomDetail,
            reviewList
        }
    }
}
</script>

<style></style>