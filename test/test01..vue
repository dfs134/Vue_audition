
<style>
  .edit{margin-left: 8%;}
  .card-header p{font-size: 0.8rem; color: #aaa;}
</style>
<template>
  <div class="card">
    <div class="card-body px-0 pt-0 pb-2">
      <div class="table-responsive p-0">
        <table class="table align-items-center mb-0">
          <thead>
            <tr v-bind:key="tops" v-for="tops in tablets">
            <!-- <tr> -->
              <th class="text-uppercase text-secondary font-weight-bolder opacity-7">{{tops.name}}</th>
              <th
                class="text-uppercase text-secondary font-weight-bolder opacity-7 ps-2"
              >{{tops.dong}}</th>
              <th
                class="text-center text-uppercase text-secondary font-weight-bolder opacity-7"
              >{{tops.age}}</th>
              <th
                class="text-center text-uppercase text-secondary font-weight-bolder opacity-7"
              >{{tops.doctor}}</th>
              <th class="text-start text-secondary opacity-7">수정</th>
            </tr>
          </thead>
          <tbody>
            <tr v-bind:key="items" v-for="items in tablets">
            <!-- <tr> -->
              <td>
                <div class="d-flex px-2 py-1">
                  <div>
                    <img
                      src="../../assets/img/team-2.jpg"
                      class="avatar avatar-sm me-3"
                      alt="user1"
                    />
                  </div>
                  <div class="d-flex flex-column justify-content-center">
                    <h6 class="mb-0 text-sm">{{items.name}}</h6>    
                  </div>
                </div>
              </td>
              <td>
                <p class="text-xs font-weight-bold mb-0">{{items.hospi}}</p>
                
              </td>
              <td class="align-middle text-center text-sm">
                <span class="text-xs font-weight-bold mb-0">{{items.age}}</span>
              </td>
              <td class="align-middle text-center">
                <span class="text-secondary text-xs font-weight-bold">{{items.doctor}}</span>
              </td>
              <td class="align-middle">
                <a
                  href="javascript:;"
                  class="text-secondary font-weight-bold text-xs edit"
                  data-toggle="tooltip"
                  data-original-title="Edit user"
                >Edit</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "table-sec01",
  props : {
    
  },  
  computed: {

  },
};
</script>

