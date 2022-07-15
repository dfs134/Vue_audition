
<template>
    <div class="py-4 container-fluid bckd">
        <div class=" row">
            <div class="col-12">
                <table-sec01 
                />
            </div>
        </div>
    </div>
</template>

<script>
import TableSec01 from "./components/TableSec01.vue";
import ArgonCheckbox from "../components/ArgonCheckbox.vue";
// import TableTest from "../json/tableTest.json";
    export default {
        name : "table-test01",
        components : {
            TableSec01,
            ArgonCheckbox,
            // TableTest,
        },
    }
</script>


