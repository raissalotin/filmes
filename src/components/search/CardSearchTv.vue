<script setup>
import { useSearchStore } from '@/stores/search'
import { onMounted, ref } from 'vue'
import Loading from 'vue-loading-overlay'

const isLoading = ref(false)

const searchStore = useSearchStore()

onMounted(async () => {
  isLoading.value = true

  try {
    await searchStore.searchTvFunction()

    isLoading.value = false
  } catch (error) {
    console.error(error)
  }
})
</script>

<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 mb-3">
        <div class="col-4 mt-3">
          <router-link :to="{ name: 'search' }" class="btn btn-primary btn-block"
            >Filmes</router-link
          >
        </div>
        <div class="col-4 mt-3">
          <router-link :to="{ name: 'searchTv' }" class="btn btn-primary btn-block"
            >Séries</router-link
          >
        </div>
        <div class="col-4 mt-3">
          <router-link :to="{ name: 'searchPerson' }" class="btn btn-primary btn-block"
            >Pessoas</router-link
          >
        </div>
      </div>

      {{ searchStore.searchTv }}
      <loading v-model:active="isLoading" is-full-page />
      <div v-for="tvShow in searchStore.searchTv" :key="tvShow.id" class="col-lg-3 col-md-4 col-sm-6 col-12">
  <div class="mt-5">
    <router-link :to="`/detailTv/${tvShow.id}`" class="underline">
      <div class="h100 card">
        <div class="img">
          <img :src="`https://image.tmdb.org/t/p/w500${tvShow.poster_path}`" class="position-relative" width="260" />
        </div>
        <div class="card-body">
          <div class="title">
            <p class="title-text underline">{{ tvShow.name }}</p>
          </div>
                <div class="card-text underline"></div>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
  <div class="d-flex flex-wrap my-2 md-5">
    <div class="col-md-4 col-12">
      <div
        class="container-info-results d-flex flex-column align-items-center align-items-md-start"
      >
        <p class="mb-0 infos-pages"></p>
        <p class="info-results"></p>
      </div>
    </div>
    <div class="col-md-4 col-12">
      <div class="container-pagination d-flex justify-content-center">
        <ul class="pagination">
  
        </ul>
      </div>
    </div>
    <div class="col-md-4 col-12"></div>
  </div>
</template>

<style scoped>
.underline {
  text-decoration: underline !important;
}

.title-text {
  font-weight: bold;
  font-size: 18px;
  max-height: 40px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.pagination {
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
}

.page-item {
  margin-right: 5px;
  padding: 5px 10px;
  background-color: #007bff;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
}

.page-item:hover {
  background-color: #0056b3;
}

.page-item.disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>
