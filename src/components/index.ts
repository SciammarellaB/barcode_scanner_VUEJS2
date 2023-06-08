import Vue from 'vue';

import { StreamBarcodeReader, ImageBarcodeReader  } from "vue-barcode-reader";

Vue.component("barcode-scanner", StreamBarcodeReader);
Vue.component("image-scanner", ImageBarcodeReader);