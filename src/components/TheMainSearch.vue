<template>
    <div class="main-search-input">
        <div class="main-search-input-item location">
            <div id="autocomplete-container">
                <input id="autocomplete-input" v-model="keyword" type="text" placeholder="Location" />
            </div>
            <a href="#"><i class="fa fa-map-marker"></i></a>
            <ul v-if="locationList.length > 0 && keyword" class="list-location">
                <li v-for="(location, index) in locationList" :key="index" @click="handleClickLocation(location)">
                    <span class="im im-icon-Location-2"></span>
                    <span class="location-item-title">{{ location.name }}</span>
                </li>
            </ul>
        </div>

        <button class="button">
            Search
        </button>
    </div>
</template>

<script>
import { computed, ref, watch } from 'vue';
import { useStore } from 'vuex'
import { useRouter } from 'vue-router';
export default {
    setup() {
        const keyword = ref("");
        const store = useStore();
        const router = useRouter();

        watch(keyword, (newKeyword) => {
            store.dispatch('location/getLocationListAction', newKeyword);
        });

        const locationList = computed(() => store.state.location.locationList);

        function handleClickLocation(location) {
            console.log(location);
            router.push(`/rooms/${location._id}`);
        }

        return {
            locationList,
            keyword,
            handleClickLocation
        }
    }
}
</script>

<style lang="scss">
.main-search-input-item.location {
    position: relative;

    .list-location {
        position: absolute;
        top: 150%;
        list-style: none;
        background: #ffff;
        color: #222;
        width: 100%;
        border-radius: 20px;
        padding: 7px;
        z-index: 1;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

        li {
            padding: 10px;
            font-size: 20px;

            &:hover {
                cursor: pointer;
                background: #f7f7f7;
            }

            .location-item-title {
                margin-left: 20px;
            }
        }
    }
}
</style>