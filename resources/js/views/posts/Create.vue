 <template>
  <div class="container">
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
     
      <b-form-group id="input-group-2" label="Text:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.text"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>

      

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          text: '',
         
        },
        show: true
      }
    },
    methods: {
      async onSubmit(evt) {
        evt.preventDefault()
        let form=this.form
        let response=await axios.post('/api/todo',form)
        if(response.status==200){
            console.log('berhasil')
        }
        alert(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.text = ''
       
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>