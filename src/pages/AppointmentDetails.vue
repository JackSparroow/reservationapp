 <template>
    <div>
        <AppointmentTable v-bind:appointments="data" />
    </div>
</template>

<script>
import AppointmentTable from '../components/DataTables/AppointmentTable'

export default {
    name:'AppointmentDetails',
    components:{
        AppointmentTable
    },
    data(){
      return {
        data:[
          {
            guardianName:'Atif',
            studentName:'akram',
            subject:'mathematics',
            topic:'Algabra',
            appointment:'ahahahahah'
          }
        ]
      }
    }
}
</script>

<style>

</style>