<template>
  <div class="row">
    <h1 class="mt-3">{{ title }}</h1>
    <table class="table mt-4">
      <thead>
        <tr>
          <th width="60">評論ID</th>
          <th width="60">使用者ID</th>
          <th width="120">評論內容</th>
          <th width="120">詳細資訊</th>
          <th width="120">刪除評論</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="comment in comments" :key="comment.id">
          <td>{{ comment.id }}</td>
          <td>{{ comment.userId }}</td>
          <td>{{ comment.comment }}</td>
          <td>
            <div class="btn-group">
              <button
                type="button"
                class="btn btn-outline-primary btn-sm"
                @click="openModal(comment)"
              >
                查看
              </button>
            </div>
          </td>
          <td>
            <div class="btn-group">
              <button
                type="button"
                class="btn btn-outline-danger btn-sm"
                @click="openModal(comment)"
              >
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';
const { VITE_API_URL } = import.meta.env;
export default {
  name: 'AdminCommentsView',
  components: {},
  data() {
    return {
      title: '評論管理',
      comments: []
    };
  },
  mounted() {
    this.getComments();
  },
  methods: {
    getComments() {
      const url = `${VITE_API_URL}/comments`;
      axios
        .get(url)
        .then((res) => {
          console.log(res);
          this.comments = res.data;
        })
        .catch(() => {
          alert('獲取評論失敗');
        });
    }
  }
};
</script>

<style lang="scss" scoped></style>
