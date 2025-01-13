<!--<template>-->

<!--</template>-->

<!--<script>-->
<!--let websocket: PictureEditWebSocket | null-->

<!--// 初始化 WebSocket 连接，绑定事件-->
<!--const initWebsocket = () => {-->
<!--  const pictureId = props.picture?.id-->
<!--  if (!pictureId || !visible.value) {-->
<!--    return-->
<!--  }-->
<!--  // 防止之前的连接未释放-->
<!--  if (websocket) {-->
<!--    websocket.disconnect()-->
<!--  }-->
<!--  // 创建 WebSocket 实例-->
<!--  websocket = new PictureEditWebSocket(pictureId)-->
<!--  // 建立 WebSocket 连接-->
<!--  websocket.connect()-->

<!--  // 监听通知消息-->
<!--  websocket.on(PICTURE_EDIT_MESSAGE_TYPE_ENUM.INFO, (msg) => {-->
<!--    console.log('收到通知消息：', msg)-->
<!--    message.info(msg.message)-->
<!--  })-->

<!--  // 监听错误消息-->
<!--  websocket.on(PICTURE_EDIT_MESSAGE_TYPE_ENUM.ERROR, (msg) => {-->
<!--    console.log('收到错误消息：', msg)-->
<!--    message.error(msg.message)-->
<!--  })-->

<!--  // 监听进入编辑状态消息-->
<!--  websocket.on(PICTURE_EDIT_MESSAGE_TYPE_ENUM.ENTER_EDIT, (msg) => {-->
<!--    console.log('收到进入编辑状态消息：', msg)-->
<!--    message.info(msg.message)-->
<!--    editingUser.value = msg.user-->
<!--  })-->

<!--  // 监听编辑操作消息-->
<!--  websocket.on(PICTURE_EDIT_MESSAGE_TYPE_ENUM.EDIT_ACTION, (msg) => {-->
<!--    console.log('收到编辑操作消息：', msg)-->
<!--    message.info(msg.message)-->
<!--    switch (msg.editAction) {-->
<!--      case PICTURE_EDIT_ACTION_ENUM.ROTATE_LEFT:-->
<!--        cropperRef.value.rotateLeft()-->
<!--        break-->
<!--      case PICTURE_EDIT_ACTION_ENUM.ROTATE_RIGHT:-->
<!--        cropperRef.value.rotateRight()-->
<!--        break-->
<!--      case PICTURE_EDIT_ACTION_ENUM.ZOOM_IN:-->
<!--        cropperRef.value.changeScale(1)-->
<!--        break-->
<!--      case PICTURE_EDIT_ACTION_ENUM.ZOOM_OUT:-->
<!--        cropperRef.value.changeScale(-1)-->
<!--        break-->
<!--    }-->
<!--  })-->

<!--  // 监听退出编辑状态消息-->
<!--  websocket.on(PICTURE_EDIT_MESSAGE_TYPE_ENUM.EXIT_EDIT, (msg) => {-->
<!--    console.log('收到退出编辑状态消息：', msg)-->
<!--    message.info(msg.message)-->
<!--    editingUser.value = undefined-->
<!--  })-->
<!--}-->

<!--watchEffect(() => {-->
<!--  initWebsocket()-->
<!--})-->

<!--onUnmounted(() => {-->
<!--  // 断开连接-->
<!--  if (websocket) {-->
<!--    websocket.disconnect()-->
<!--  }-->
<!--  editingUser.value = undefined-->
<!--})-->

<!--// 关闭弹窗-->
<!--const closeModal = () => {-->
<!--  visible.value = false-->
<!--  // 断开连接-->
<!--  if (websocket) {-->
<!--    websocket.disconnect()-->
<!--  }-->
<!--  editingUser.value = undefined-->
<!--}-->

<!--}-->
<!--</script>-->

<!--<style scoped>-->

<!--</style>-->
