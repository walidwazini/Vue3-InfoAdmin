<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <div>
    <the-header></the-header>
    <button @click="setSelectedComponent('active-goals')" >Active Goals</button>
    <button @click="setSelectedComponent('manage-goals')" >Manage Goals</button>
    <!-- <active-goals ></active-goals>
    <manage-goals></manage-goals> -->
    <component :is="selectedComponents" ></component>
    
    <!-- <BadgeList />
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>
    <CourseGoals>
      <template #default="slotProps" >
        <h2> {{slotProps.item}} </h2>
        <p> {{slotProps['another-prop']}} </p>
      </template>
    </CourseGoals> -->
    <!-- also can like <course-goals/>  or -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import TheHeader from "./components/TheHeader.vue";
// import BadgeList from "./components/BadgeList.vue";
// import UserInfo from "./components/UserInfo.vue";
// import CourseGoals from "./components/CourseGoals.vue";
import ActiveGoals from './components/ActiveGoals.vue'
import ManageGoals from './components/ManageGoals.vue'

export default {
  components: {
    "the-header": TheHeader, // HelloWorld
    // BadgeList: BadgeList,
    // UserInfo,
    // CourseGoals,
    ActiveGoals,
    ManageGoals
  },
  data() {
    return {
      selectedComponents: 'active-goals',
      activeUser: {
        name: "Maximilian Schwarzmüller",
        description: "Site owner and admin",
        role: "admin",
      },
    };
  },
  methods: {
    setSelectedComponent(cmp){
      this.selectedComponents = cmp
    }
  }
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
