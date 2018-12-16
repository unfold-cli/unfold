<template>
    <div>
        <div class="text-right">
            <div class="dropdown">
                <a :href="route('stub-items.show', props.row.item.id)">
                    <span class="fal fa-fw fa-eye"></span>
                </a>
                <a href="#" @click.stop.prevent="row.toggleDetails">
                    <span class="fal fa-fw fa-info-circle"></span>
                </a>
                <a :href="route('stub-items.edit', item.id)" class="text-info">
                    <span class="fal fa-fw fa-edit"></span>
                </a>
                <a href="#" class="text-danger" @click.prevent="deleteRow">
                    <span class="fal fa-fw fa-times"></span>
                </a>
                <button class="btn bg-transparent border-0 p-1 px-2 shadow-none" :id="'dropdownMenuButton' + item.id" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span class="fal fa-fw fa-ellipsis-v fa-2x"></span>
                </button>
                <div class="dropdown-menu" :aria-labelledby="'dropdownMenuButton' + item.id">
                    <a class="dropdown-item" :href="route('stub-items.edit', item.id)">Edit</a>
                    <a class="dropdown-item text-danger" href="#" @click.prevent="deleteRow">Delete</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import swal from 'sweetalert';

  export default {
    props: {
      context: {
        required: true
      }
    },
    computed: {
      item() {
        return this.context.row.item;
      },
      row() {
        return this.context.row;
      }
    },
    methods: {
      deleteRow() {
        const _this = this;
        swal({
          title: __('Are you sure?'),
          type: 'warning',
          cancelButtonText: 'No',
          showCancelButton: true,
          confirmButtonText: 'Yes',
          showConfirmButton: true,
        }, rm => {
          if (rm) {
            axios.delete(route("stub-items.destroy", this.item.id)).then(response => {
              this.$toasted.show(trans.stub_items.deleted_stub_item, { type: "success" });
              _this.$parent.refresh();
            }).catch(err => {
              console.log(err);
            });
          }
        });
      }
    }
  };
</script>
