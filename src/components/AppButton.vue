<template>
  <button @click="sendData">
    {{ variant }}
    <slot></slot>
    <slot name="icon"></slot>
  </button>
</template>

<script>
  export default {
    props: {
      variant: {
        type: String,
        default: 'Sucess',
      },
    },
    setup(props, { emit }) {

      const sendData = () => {
        emit("update", props.variant);
      }

      return {sendData};
    }
  }
</script>