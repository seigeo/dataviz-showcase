<template>
    <div class="recommend-container">
      <h2>图表推荐助手</h2>
      <textarea v-model="question" placeholder="请输入你的数据分析目标或问题..."></textarea>
      <button @click="askAI">发送</button>
      <div v-if="loading">正在思考中...</div>
      <div v-if="responseRaw">
        <h3>推荐结果：</h3>
        <div v-html="responseHtml" class="markdown-output"></div>
      </div>
      <p class="footnote">内容分析由 DeepSeek v3 生成</p>
    </div>
  </template>
  
  <script>
  import { marked } from 'marked'
  export default {
    name: 'Recommend',
    data() {
      return {
        question: '',
        responseRaw: '',
        loading: false
      }
    },
    computed: {
      responseHtml() {
        return marked.parse(this.responseRaw)
      }
    },
    methods: {
      async askAI() {
        this.loading = true
        const apiKey = 'sk-ea7e49b61c324dd4b3ce8a41cfea0ea3'
  
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
          this.responseRaw = data.choices?.[0]?.message?.content || '未获得回答'
        } catch (err) {
          this.responseRaw = '请求出错：' + err.message
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
  .markdown-output {
    line-height: 1.6;
    padding: 10px;
    background: #f9f9f9;
    border-radius: 6px;
  }
  .markdown-output h1, .markdown-output h2 {
    color: #007acc;
    margin-top: 1em;
  }
  .markdown-output code {
    background: #eee;
    padding: 2px 4px;
    border-radius: 4px;
  }
  .footnote {
    font-size: 12px;
    color: #888;
    margin-top: 10px;
    text-align: right;
  }
  </style>