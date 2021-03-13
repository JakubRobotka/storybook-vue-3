<template>
    <div class="flex">
        <h1>Teleport</h1>
        <teleport to='body' :disabled="disabled">
            <div class="absolute inset-0">
                Test na body
            </div>
        </teleport>
    </div>
</template>

<script>
import { onMounted } from 'vue'
export default {
    name: "NewComponent",
    props: {
        disabled: Boolean
    },
    setup() {
        onMounted(() => {
            console.log("Lah");
        })
    }
}
</script>
