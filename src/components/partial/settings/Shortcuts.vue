<template>
  <div class="shortcuts row">

    <div class="col-12 mb-3">
      <b-button-group size="sm" class="d-block">
        <b-button class="m-1"
                  style="border-radius: 0.25rem"
                  variant="outline-success"
                  @click="addShortcut">
          <i class="fa fa-plus"></i>
          {{ $t('settings.addShortcut') }}
        </b-button>

        <b-button class="m-1"
                  v-if="this.shortcuts.length > 0"
                  style="border-radius: 0.25rem"
                  variant="outline-success"
                  @click="saveShortcuts">
          <i class="fa fa-save"></i>
          {{ $t('settings.saveShortcuts') }}
        </b-button>
      </b-button-group>
    </div>


    <div class="col-12" v-if="shortcuts.length > 0">

      <div class="row">
        <div class="col">
          <p>
            {{ $t('settings.pathInfo1') }} <b class="text-info">{{origin}}</b>, {{ $t('settings.pathInfo2') }}
            {{origin}}<b class="text-info">/attachment</b>{{ $t('settings.pathInfo3') }}
            <b class="text-info">/attachment</b> {{ $t('settings.pathInfo4') }}.
          </p>
        </div>
      </div>

      <table class="vs-table vs-table--tbody-table">
        <thead class="vs-table--thead">
        <tr>
          <th style="width: 41.66%;">{{ $t('settings.title') }}</th>
          <th style="width: 41.66%;">{{ $t('settings.path') }}</th>
          <th style="width: 16.66%;">{{ $t('settings.remove') }}</th>
        </tr>
        </thead>

        <draggable :list="shortcuts" tag="tbody">

          <tr class="tr-values vs-table--tr tr-table-state-null" v-for="(entity, index) in shortcuts">
            <td class="td vs-table--td">
              <vs-input :label-placeholder="$t('settings.title')" v-model="entity.title"/>
            </td>

            <td class="td vs-table--td">
              <vs-input :label-placeholder="$t('settings.path')" v-model="entity.path"/>
            </td>

            <td class="td vs-table--td text-center">
              <i class="fa fa-times fa-lg remove p-2"
                 :title="$t('settings.removeShortcut')"
                 @click="removeShortcut(index)"></i>
            </td>

          </tr>
        </draggable>
      </table>

    </div>


  </div>
</template>

<script>
  import draggable from 'vuedraggable'
  import {toastSuccess} from "../../../assets/js/iziToast/iziToast";

  export default {
    components: {
      draggable
    },
    name: "Shortcuts",
    data() {
      return {
        origin: '',
        // Max 7
        shortcuts: [],
      }
    },
    beforeCreate: function() {
      this.$store.dispatch('GET_SHORTCUTS')
    },
    created: function () {
      this.origin = document.location.origin
      this.shortcuts = this.$store.state['shortcuts']
    },
    beforeDestroy: function() {
      this.$store.dispatch('SAVE_SHORTCUTS', this.shortcuts)
    },
    methods: {
      addShortcut() {
        this.shortcuts.push({title: '', path: ''})
      },

      removeShortcut(index) {
        this.shortcuts.splice(index, 1)
      },

      saveShortcuts() {
        this.$store.dispatch('SAVE_SHORTCUTS', this.shortcuts)
        toastSuccess({text: this.$t('settings.shortcutsSaved')})
      }
    }
  }
</script>

<style scoped>
  .vs-table--tbody-table {
    min-width: unset;
    background: unset;
  }

  .remove:hover {
    cursor: pointer;
    color: #dc3545;
  }

  .vs-con-input-label {
    width: unset;
  }

</style>