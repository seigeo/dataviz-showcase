<template>
    <div class="recommend-container">
      <h2>图表推荐助手</h2>
      <textarea v-model="question" placeholder="请输入你的数据分析目标或问题..."></textarea>
      <button @click="askAI">发送</button>
      <div v-if="loading">正在思考中...</div>
      <div v-if="response">
        <h3>推荐结果：</h3>
        <p>{{ response }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Recommend',
    data() {
      return {
        question: '',
        response: '',
        loading: false
      }
    },
    methods: {
      async askAI() {
        this.loading = true
        const apiKey = '在这里填写你的 DeepSeek API Key'
  
        try {
          const res = await fetch('https://api.deepseek.com/chat/completions', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
              model: 'deepseek-chat',
              messages: [
                { role: 'system', content: '你是一个图表推荐专家，帮助用户根据数据分析需求推荐合适的可视化图表。' },
                { role: 'user', content: this.question }
              ],
              stream: false
            })
          })
  
          const data = await res.json()
          this.response = data.choices?.[0]?.message?.content || '未获得回答'
        } catch (err) {
          this.response = '请求出错：' + err.message
        } finally {
          this.loading = false
        }
      }
    }
  }
  </script>
  
  <style scoped>
  .recommend-container {
    max-width: 800px;
    margin: 40px auto;
    padding: 20px;
  }
  textarea {
    width: 100%;
    height: 100px;
    margin-bottom: 10px;
    font-size: 16px;
  }
  button {
    padding: 10px 20px;
    background-color: #007acc;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
  }
  </style>