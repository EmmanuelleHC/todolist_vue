<template>
  <div class="container">
    <b-table striped hover :fields="fields" :items="items">


         <template v-slot:cell(actions)="row">
        <b-button size="sm" @click="update(row.item, row.index, $event.target)" class="mr-1">
         Update
        </b-button>
         <b-button size="sm" @click="del2(row.item, row.index, $event.target)" class="mr-1">
         Delete
        </b-button>
      
      </template>

 

    </b-table>
  </div>
</template>


<script>
  export default {
    data() {
      return {
        items: [],
        data:[],
        fields: [
          { key: 'id', label: 'ID', sortable: true, sortDirection: 'desc' },
          { key: 'text', label: 'Activity age', sortable: true, class: 'text-center' },
          {
            key: 'done_status',
            label: 'Done Status',
            formatter: (value, key, item) => {
              return value ? 'Yes' : 'No'
            },
            sortable: true,
            sortByFormatted: true,
            filterByFormatted: true
          },
          { key: 'actions', label: 'Actions' }
        ],
      }
    },
    mounted(){
        this.get_todo()
        console.log('yiha')
    },
    methods: {
        async get_todo() {
        let response=await axios.get('/api/todo')
     
        if(response.status==200){
            this.items=response.data.data;
    

        }
      },
      async update(item, index, button) {
          let param={
              id:item.id
          }
          let response=await axios.put('/api/todo/changeDoneStatus/'+item.id)
     
          if(response.status==200){
              this.get_todo()
        

            }
       
      },
    async del2(item,index,button){
         let response=await axios.put('/api/todo/delete/'+item.id)
     
          if(response.status==200){
              this.get_todo()
        

            }
    }

    }
     
  }
</script>