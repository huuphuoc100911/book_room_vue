<template>
    <div id="wrapper">
        <!-- Content -->
        <div class="fs-container">
            <div class="fs-inner-container content">
                <div class="fs-content">
                    <room-list></room-list>
                </div>
            </div>
            <div class="fs-inner-container map-fixed">
                <!-- Map -->
                <div id="map-container">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248998.6495037926!2d108.38236978848849!3d12.804203490722648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3171d93149ba9fcd%3A0xc092d39e5e42601d!2zRWEgS2FyLCDEkOG6r2sgTOG6r2ssIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1693898195033!5m2!1svi!2s"
                        width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import RoomList from '@/components/RoomList.vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router';
export default {
    components: {
        RoomList
    },
    name: "RoomView",
    setup() {
        const store = useStore();
        const route = useRoute();
        store.dispatch("rooms/getRoomListAction", route.params.locationId);
    }
}
</script>

<style></style>