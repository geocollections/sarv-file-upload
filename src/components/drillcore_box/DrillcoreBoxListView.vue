<template>
  <div class="list-row" v-if="data.length > 0">
    <v-row v-if="title">
      <v-col>
        <h1 class="text-center py-4" v-translate="title" />
      </v-col>
    </v-row>
    <v-row v-for="(box, index) in data" :key="index">
      <v-col cols="12" class="box">
        <v-divider v-if="index > 0" class="d-print-none" />
        <div class="py-2 d-flex align-center flex-column">
          <img
            @click="openFileInNewWindow(box)"
            style="max-width: 800px; max-height: 500px"
            class="elevation-4"
            :src="getFileUrl(box.attachment__uuid_filename, 'medium')"
            :title="getFileUrl(box.attachment__uuid_filename, 'medium')"
          />

          <!--          <v-img-->
          <!--            max-width="700"-->
          <!--            max-height="500"-->
          <!--            contain-->
          <!--            :lazy-src="getFileUrl(box.attachment__uuid_filename, 'small')"-->
          <!--            :src="getFileUrl(box.attachment__uuid_filename, 'medium')"-->
          <!--          >-->
          <!--            <template v-slot:placeholder>-->
          <!--              <v-row class="fill-height ma-0" align="center" justify="center">-->
          <!--                <v-progress-circular indeterminate color="grey lighten-5" />-->
          <!--              </v-row>-->
          <!--            </template>-->
          <!--          </v-img>-->
          <slot name="itemTitle" v-bind:item="box"></slot>
        </div>
      </v-col>
    </v-row>
  </div>
  <div v-else>
    <div
      class="text-center"
      v-translate="{ et: 'Andmed puuduvad', en: 'No data available' }"
    ></div>
  </div>
</template>

<script>
export default {
  name: "DrillcoreBoxListView",
  props: {
    data: {
      type: Array
    },
    bodyActiveColor: {
      type: String,
      required: false,
      default: "deep-orange"
    },
    title: {
      type: Object
    }
  },
  methods: {
    openFileInNewWindow(file) {
      if (typeof file !== "undefined" && file !== null) {
        let url = "";
        if (this.isImageFile(file)) {
          url = this.getFileUrl(file.attachment__uuid_filename, "large");
        } else {
          url = this.getFileUrl(file.attachment__uuid_filename);
        }

        window.open(url, "FileWindow", "width=800,height=750");
      }
    },
    getFileUrl(uuid, size = null) {
      console.log(this.vueAppImageUrl);
      if (uuid) {
        if (size) {
          return `${this.$constants.IMAGE_URL}${size}/${uuid.substring(
            0,
            2
          )}/${uuid.substring(2, 4)}/${uuid}`;
        } else {
          return `${this.$constants.IMAGE_URL}${uuid.substring(
            0,
            2
          )}/${uuid.substring(2, 4)}/${uuid}`;
        }
      }
    },
    isImageFile(image) {
      if (image.attachment_format__value) {
        return !!image.attachment_format__value.includes("image");
      } else {
        let fileType = image.attachment__uuid_filename.split(".")[1];
        // As of 18.09.2019 total of 1508 attachments are without attachment_format__value which 859 are jpg and 2 png
        return !!(fileType.includes("jpg") || fileType.includes("png"));
      }
    }
  }
};
</script>

<style scoped>
img {
  opacity: 1;
  transition: opacity 200ms ease-in;
}

img:hover {
  cursor: pointer;
  opacity: 0.8;
  transition: opacity 200ms ease-in;
}

@media print {
  .box {
    break-inside: avoid;
    height: 15cm;
  }

  .sarv-link {
    text-decoration: none;
  }
}
</style>
