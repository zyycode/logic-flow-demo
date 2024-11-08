<script setup>
import {onMounted, ref, watch} from 'vue'

import LogicFlow from "@logicflow/core";
import { Control, BpmnElement, BpmnXmlAdapter, DndPanel } from "@logicflow/extension";

import "@logicflow/core/lib/style/index.css";
import "@logicflow/extension/lib/style/index.css";

import { NODES } from "./data";

// LogicFlow.use(Control);

const count = ref(0);
const stop = watch(count, (value) => {
  console.log('value::: ', value);
})

const container = ref(null);

const lf = ref(null);

onMounted(() => {
  lf.value = new LogicFlow({
    container: container.value,
    grid: true,
    plugins: [Control, BpmnElement, BpmnXmlAdapter, DndPanel],
  });

  lf.value.setPatternItems(NODES);

  lf.value.render();

  lf.value.render();
});
</script>



<template>
  <div class="container" ref="container"></div>
</template>

<style scoped>
.container {
  width: 1000px;
  height: 500px;
}
</style>
