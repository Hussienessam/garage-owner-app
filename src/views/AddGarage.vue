<template>
<div>
    <div><NavBar /></div>
    <div class="body">
    <br/>
    <div class="modal-dialog">
          <div class="modal-content">
            <form>
              <div class="modal-header">
                <h4> <b> Add Garage </b></h4>
              </div>
              <br/>
              <div class="container-content">
                <div class="form-group">
                  <label>Address</label>
                  <input type="text" class="form-control" required />
                </div>
                <div class="form-group">
                  <label>Longtitude</label>
                  <input type="text" class="form-control" required />
                </div>
                <div class="form-group">
                  <label>Latitude</label>
                  <input type="text" class="form-control" required />
                </div>
                <div class="form-group">
                  <label>Num. of Cameras</label>
                  <input type="email" class="form-control" required />
                </div>
                <div class="form-group">
                  <label>Capacity</label>
                  <input class="form-control" required />
                </div>
              </div>
              <div class="modal-footer">
                <button @click="Back()" class="btn btn-default" data-dismiss="modal">Cancel</button>
                <button @click="Add()" class="btn mt-2" data-dismiss="modal">Add</button>
              </div>
            </form>
          </div>
        </div>
    </div>
</div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  components: {
    NavBar,
  },
  methods: {
    Add() {
     
    },
    Back() {
     this.$router.push({ name: "Home" });
    }
  }
};
</script>

<style scoped src="../style/home.scss" lang="scss">
</style>