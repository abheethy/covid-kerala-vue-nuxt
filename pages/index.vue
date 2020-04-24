<template>
  <div>
    <div class="align-grid">
      <div class="row display-flex header-color">
        <div class="status column first-column">
          <h4 class="title">Districts</h4>
        </div>
        <div class="status column">
          <h4 class="title">Active</h4>
        </div>
        <div class="status column">
          <h4 class="title">Confirmed</h4>
        </div>
        <div class="status column">
          <h4 class="title">Recovered</h4>
        </div>
        <div class="status column">
          <h4 class="title">Deseased</h4>
        </div>
      </div>
      <EventCard
        v-for="(value, name, index) in covid"
        :key="index"
        :value="value"
        :title="name"
        :data-index="index"
      />
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import EventCard from '@/components/EventCard.vue'
export default {
  components: {
    EventCard
  },
  async fetch({ error, store }) {
    try {
      await store.dispatch('events/fetchCovidDataEvent')
    } catch {
      error({ statusCode: 503, message: 'Oops!! Data is not available!' })
    }
  },
  head() {
    return {
      title: 'Event Listing'
    }
  },
  // eslint-disable-next-line vue/order-in-components
  computed: mapState({
    covid: (state) => state.events.covid
  })
}
</script>
<style scoped>
.align-div {
  margin-bottom: 10px;
  transition: all 0.2s linear;
  cursor: pointer;
}
.display-flex {
  display: flex;
}
.header-color {
  background: linear-gradient(to right, #16c0b0, #84cf6a);
  color: #ffffff;
  margin-bottom: 10px;
}
.column {
  float: left;
  width: 50%;
  padding: 10px;
}

/* Clear floats after the columns */
.row:after {
  content: '';
  display: table;
  clear: both;
}
.align-flex {
  display: flex;
}
.title {
  margin: 0;
  color: #fff;
}
a {
  text-decoration: none;
}
.heading {
  overflow: hidden;
  text-align: center;
}
.padding-div {
  padding-left: 100px;
  display: flex;
}
.status {
  overflow: hidden;
  text-align: center;
}
.first-column {
  padding-right: 100px;
}
</style>
