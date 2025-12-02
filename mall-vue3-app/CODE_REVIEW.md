# Code Review 编码规范文档

## 一、代码风格规范

### 1.1 缩进和格式
- 使用 2 个空格进行缩进，不使用 Tab
- 每行代码长度不超过 120 个字符
- 文件末尾保留一个空行
- 删除行尾空格

### 1.2 命名规范

#### 变量命名
- 使用驼峰命名法（camelCase）
- 布尔值使用 `is`、`has`、`can` 等前缀
- 常量使用全大写下划线分隔（UPPER_SNAKE_CASE）

```javascript
// ✅ 正确
const userName = 'John'
const isLogin = true
const hasPermission = false
const MAX_RETRY_COUNT = 3

// ❌ 错误
const user_name = 'John'
const login = true
const maxRetryCount = 3
```

#### 函数命名
- 使用动词开头的驼峰命名
- 事件处理函数使用 `handle` 前缀
- 工具函数使用描述性名称

```javascript
// ✅ 正确
function getUserInfo() {}
function handleSubmit() {}
function formatDate() {}

// ❌ 错误
function userInfo() {}
function submit() {}
function date() {}
```

#### 组件命名
- Vue 组件使用 PascalCase
- 文件名与组件名保持一致

```javascript
// ✅ 正确
// UserProfile.vue
export default {
  name: 'UserProfile'
}

// ❌ 错误
// userProfile.vue
export default {
  name: 'userProfile'
}
```

### 1.3 注释规范

#### 函数注释
- 复杂函数必须添加 JSDoc 注释
- 说明参数、返回值、功能描述

```javascript
/**
 * 获取用户信息
 * @param {string} userId - 用户ID
 * @returns {Promise<Object>} 用户信息对象
 */
async function getUserInfo(userId) {
  // 实现代码
}
```

#### 代码注释
- 解释"为什么"而不是"是什么"
- 避免显而易见的注释
- 使用中文注释（团队统一）

```javascript
// ✅ 正确
// 需要延迟执行，等待 DOM 更新完成
this.$nextTick(() => {
  this.initScroll()
})

// ❌ 错误
// 调用 nextTick 方法
this.$nextTick(() => {
  this.initScroll()
})
```

## 二、Vue 组件规范

### 2.1 组件结构
组件按以下顺序组织：
1. `<template>`
2. `<script>`
3. `<style>`

```vue
<template>
  <div class="component-name">
    <!-- 模板内容 -->
  </div>
</template>

<script setup>
// 或
<script>
export default {
  // 组件选项
}
</script>

<style lang="less" scoped>
/* 样式 */
</style>
```

### 2.2 Props 定义
- 必须定义类型
- 提供默认值（如适用）
- 添加注释说明

```javascript
// ✅ 正确
props: {
  // 用户名
  userName: {
    type: String,
    required: true
  },
  // 是否显示
  visible: {
    type: Boolean,
    default: false
  }
}

// ❌ 错误
props: {
  userName: String,
  visible: Boolean
}
```

### 2.3 响应式数据
- 使用 `reactive` 或 `ref` 定义响应式数据
- 避免直接修改 props
- 使用计算属性处理派生数据

```javascript
// ✅ 正确
import { reactive, computed } from 'vue'

const state = reactive({
  count: 0
})

const doubleCount = computed(() => state.count * 2)

// ❌ 错误
const count = 0
```

### 2.4 生命周期
- 合理使用生命周期钩子
- 在 `onUnmounted` 中清理副作用

```javascript
import { onMounted, onUnmounted } from 'vue'

onMounted(() => {
  // 初始化逻辑
})

onUnmounted(() => {
  // 清理逻辑，如移除事件监听器
})
```

## 三、代码质量要求

### 3.1 错误处理
- API 调用必须包含错误处理
- 使用 try-catch 处理异步操作
- 提供用户友好的错误提示

```javascript
// ✅ 正确
try {
  const data = await getUserInfo()
  // 处理数据
} catch (error) {
  console.error('获取用户信息失败:', error)
  showFailToast('获取用户信息失败，请稍后重试')
}

// ❌ 错误
const data = await getUserInfo()
```

### 3.2 性能优化
- 避免在模板中使用复杂计算
- 使用 `v-show` 和 `v-if` 的合适场景
- 长列表使用虚拟滚动
- 图片使用懒加载

```javascript
// ✅ 正确
const filteredList = computed(() => {
  return list.value.filter(item => item.active)
})

// ❌ 错误
// 在模板中
<div v-for="item in list.filter(item => item.active)">
```

### 3.3 代码复用
- 提取公共逻辑为 composable 函数
- 避免重复代码
- 使用工具函数库

```javascript
// ✅ 正确
// composables/useUser.js
export function useUser() {
  const getUserInfo = async () => {
    // 逻辑
  }
  return { getUserInfo }
}

// ❌ 错误
// 在多个组件中重复相同的逻辑
```

## 四、Git 提交规范

### 4.1 提交信息格式
```
<type>(<scope>): <subject>

<body>

<footer>
```

### 4.2 Type 类型
- `feat`: 新功能
- `fix`: 修复 bug
- `docs`: 文档更新
- `style`: 代码格式调整（不影响功能）
- `refactor`: 重构代码
- `perf`: 性能优化
- `test`: 测试相关
- `chore`: 构建/工具链相关

### 4.3 提交示例
```
feat(user): 添加用户登录功能

- 实现用户名密码登录
- 添加登录状态管理
- 添加登录表单验证

Closes #123
```

## 五、Code Review 检查清单

### 5.1 功能检查
- [ ] 代码实现了需求的功能
- [ ] 边界情况已处理
- [ ] 错误处理完善
- [ ] 用户体验良好

### 5.2 代码质量
- [ ] 代码符合编码规范
- [ ] 命名清晰易懂
- [ ] 没有重复代码
- [ ] 注释适当且有用

### 5.3 性能检查
- [ ] 没有不必要的渲染
- [ ] 没有内存泄漏
- [ ] 异步操作处理正确
- [ ] 大数据量场景考虑

### 5.4 安全性
- [ ] 输入验证和过滤
- [ ] 敏感信息不暴露
- [ ] XSS 防护
- [ ] 权限检查

### 5.5 测试
- [ ] 单元测试覆盖关键逻辑
- [ ] 测试用例通过
- [ ] 边界情况有测试

### 5.6 文档
- [ ] README 更新（如需要）
- [ ] API 文档更新（如需要）
- [ ] 代码注释清晰

## 六、常见问题

### 6.1 必须修复的问题
- 语法错误
- 逻辑错误
- 安全漏洞
- 性能问题（严重影响）
- 不符合编码规范（严重）

### 6.2 建议修复的问题
- 代码可读性
- 代码结构优化
- 性能优化（轻微）
- 命名优化

### 6.3 可以忽略的问题
- 个人风格偏好
- 不影响功能的格式问题
- 未来可能需要的功能

## 七、Review 流程

1. **提交 PR/MR**
   - 确保代码通过 CI/CD
   - 添加清晰的描述
   - 关联相关 issue

2. **Review 阶段**
   - Reviewer 仔细审查代码
   - 提出建设性意见
   - 使用友好的沟通方式

3. **修改阶段**
   - 作者根据反馈修改
   - 回复每个评论
   - 更新 PR/MR 状态

4. **合并阶段**
   - 所有问题已解决
   - 获得必要的批准
   - 合并到主分支

## 八、工具推荐

- **ESLint**: 代码检查
- **Prettier**: 代码格式化
- **Husky**: Git hooks
- **lint-staged**: 提交前检查
- **Commitlint**: 提交信息规范

---

**最后更新**: 2025-12-02

