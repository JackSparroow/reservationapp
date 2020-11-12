 <template>

<div v-if="alerts.length >0">
        <div v-for="(alert,index) in alerts" :key="index" class="alert alert-danger">
        {{alert.msg}}
        </div>
</div>
</template>

<script>
export default {
        name:'Alert',
        props:{
            alerts:{
                type:Array
            }
        }
}
</script>

<style>

</style>