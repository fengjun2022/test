<template>
  <div class="tree-node">
    <div class="node-label" :class="{ selected: isSelected }" @click="selectNode">
      <!-- 如果存在子节点，则显示展开/收起按钮 -->
      <span
          v-if="hasChildren"
          class="toggle-btn"
          @click.stop="toggle"
      >
        {{ isExpanded ? '-' : '+' }}
      </span>
      {{ node.label }}
    </div>
    <!-- 递归渲染子节点 -->
    <div v-if="hasChildren && isExpanded" class="children">
      <TreeNode
          v-for="child in node.children"
          :key="child.id"
          :node="child"
          @nodeSelected="handleChildSelected"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits, ref, computed } from 'vue';
import type { TreeNodeData } from '@/views/home/index.vue';

const props = defineProps<{
  node: TreeNodeData;
}>();

const emits = defineEmits<{
  (e: 'nodeSelected', node: TreeNodeData): void;
}>();

// 控制展开状态
const isExpanded = ref(false);
// 当前节点选中状态（仅用于展示样式）
const isSelected = ref(false);

const hasChildren = computed(() => {
  return props.node.children && props.node.children.length > 0;
});

// 切换展开/收起
const toggle = () => {
  isExpanded.value = !isExpanded.value;
};

// 点击节点，触发选中事件
const selectNode = () => {
  isSelected.value = true;
  emits('nodeSelected', props.node);
};

// 当子节点触发选中事件时，向上传递
const handleChildSelected = (node: TreeNodeData) => {

  isSelected.value = false;
  emits('nodeSelected', node);
};
</script>

<style scoped>
.tree-node {
  padding-left: 16px;
  margin-top: 4px;
}

.node-label {
  cursor: pointer;
  display: flex;
  align-items: center;
}

.node-label.selected {
  background-color: #e6f7ff;
}

.toggle-btn {
  width: 20px;
  display: inline-block;
  text-align: center;
  cursor: pointer;
  user-select: none;
  margin-right: 4px;
}

.children {
  margin-left: 16px;
  transition: all 0.3s;
}
</style>
