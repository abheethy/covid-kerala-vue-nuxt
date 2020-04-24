<template>
  <div class="-shadow align-div">
    <div class="row display-flex">
      <div class="status column first-column">
        <h4 class="title">{{ title }}</h4>
      </div>
      <div class="status column">
        <h4 class="title">
          {{ value.active }}
        </h4>
      </div>
      <div class="status column">
        <h4 class="title">
          {{ value.confirmed }}
          <div v-if="value.delta.confirmed > 0" class="delta delta-error">
            {{ value.delta.confirmed }}
            <i class="arrow up arrow-color-red"></i>
          </div>
        </h4>
      </div>
      <div class="status column">
        <h4 class="title">
          {{ value.recovered }}
          <div v-if="value.delta.recovered > 0" class="delta delta-success">
            {{ value.delta.recovered }}
            <i class="arrow up arrow-color-green"></i>
          </div>
        </h4>
      </div>
      <div class="status column">
        <h4 class="title">
          {{ value.deceased }}
          <div v-if="value.delta.deceased > 0" class="delta delta-error">
            {{ value.delta.deceased }}
            <i class="arrow up arrow-color-red"></i>
          </div>
        </h4>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'EventCard',
  props: {
    // eslint-disable-next-line vue/require-default-prop
    value: Object,
    // eslint-disable-next-line vue/require-default-prop
    title: String
  },
  computed: {
    parsedDate() {
      const eventDate = new Date(this.event.date)
      return eventDate.toDateString()
    }
  }
}
</script>
<style scoped>
.delta {
  padding-left: 10px;
  font-size: 15px;
  font-weight: 600;
}
.delta-error {
  color: red;
}
.delta-success {
  color: green;
}
.column {
  float: left;
  width: 50%;
  padding: 10px;
}
.display-flex {
  display: flex;
}

/* Clear floats after the columns */
.row:after {
  content: '';
  display: table;
  clear: both;
}
.align-div {
  margin-bottom: 10px;
  transition: all 0.2s linear;
  cursor: pointer;
}
.align-div:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
.align-flex {
  display: flex;
}
.title {
  margin: 0;
  color: #777474;
}
a {
  text-decoration: none;
}
.heading {
  overflow: hidden;
  text-align: center;
}
.padding-div {
  padding-left: 50px;
  display: flex;
}
.status {
  overflow: hidden;
  text-align: center;
}
.first-column {
  padding-right: 100px;
}
i {
  border-width: 0 3px 3px 0;
  display: inline-block;
}
.up {
  width: 0;
  height: 0;
}
.arrow-color-red {
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 10px solid red;
}
.arrow-color-green {
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 10px solid green;
}
</style>
