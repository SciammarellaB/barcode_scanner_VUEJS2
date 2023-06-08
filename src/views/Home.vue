<template>
  <div style="padding: 10px;">
    <div style="margin: 20px 0px 25px 0px; display: flex; flex-direction: column; align-items: center; justify-content: flex-start;">
      <span style="font-size: 26px">CODE SCANNER</span>
    </div>
    <div style="margin: 20px 0px 20px 0px; display: flex; flex-direction: column; align-items: flex-start; justify-content: flex-start;">
      <span>Image Scanner</span>
      <image-scanner @load="onLoad($event)" @decode="onDecode($event)" @result="onResult($event)" @error="onError($event)"/>
    </div>
    <div style="margin: 20px 0px 20px 0px; display: flex; flex-direction: column; align-items: flex-start; justify-content: flex-start;">
      <span>Photo Scanner</span>
      <input type="button" value="Scanear" @click="scanPhoto = true">
      <barcode-scanner v-if="scanPhoto" @load="onLoad($event)" @decode="onDecode($event)" @result="onResult($event)" @error="onError($event)"/>
    </div>
    <div style="margin: 20px 0px 20px 0px; display: flex; flex-direction: column; align-items: flex-start; justify-content: flex-start;">
      <span>Scan: {{ codigoScan }}</span>
    </div>
    <div style="margin: 20px 0px 20px 0px; display: flex; align-items: center; justify-content: center;">
      <input type="button" value="Resetar" @click="Resetar()">
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class HomeView extends Vue {
  
  codigoScan: string = "";
  scanPhoto: boolean = false;

  mounted() {
    this.codigoScan = "";
  }

  onLoad(val: any){
    this.codigoScan = "LOAD: " + val;
  }
  onDecode(val: any){
    this.codigoScan = "DECODE: " + val;
    this.scanPhoto = false;
  }
  onResult(val: any){
    this.codigoScan = "RESULT: " + val;
  }
  onError(val: any){
    this.codigoScan = "ERROR: " + val;
  }

  Resetar(){
    this.scanPhoto = false;
    this.codigoScan = "";
  }
}
</script>
