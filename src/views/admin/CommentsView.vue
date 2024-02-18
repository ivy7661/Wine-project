<template>
  <div class="row">
    <h1 class="mt-3">{{ title }}</h1>
    <table class="table mt-4">
      <thead>
        <tr>
          <th width="70">評論ID</th>
          <th width="70">使用者ID</th>
          <th width="120">評論內容</th>
          <th width="120">詳細資訊</th>
          <th width="120">刪除評論</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="comment in comments" :key="comment.id">
          <td>{{ comment.id }}</td>
          <td>{{ comment.userId }}</td>
          <td>
            <p class="commentContent">
              {{ comment.comment }}
            </p>
          </td>
          <td>
            <div class="btn-group">
              <button
                type="button"
                class="btn btn-outline-primary btn-sm"
                @click="openModal('detail', comment)"
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
                @click="openModal('delete', comment)"
              >
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <!-- 詳細評論內容 Modal -->
  <Comment-Modal :temp-comment="tempComment" ref="commentModal"></Comment-Modal>
  <!-- 刪除警示 -->
  <Del-Comment-Modal
    :temp-comment="tempComment"
    :del-comment="delComment"
    ref="delCommentModal"
  ></Del-Comment-Modal>
</template>

<script>
import axios from 'axios';
import CommentModal from '../../components/admin/CommentModal.vue';
import DelCommentModal from '../../components/admin/DelCommentModal.vue';
const { VITE_API_URL } = import.meta.env;
export default {
  name: 'AdminCommentsView',
  components: {
    CommentModal,
    DelCommentModal
  },
  data() {
    return {
      title: '評論管理',
      comments: [],
      tempComment: {}
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
    },
    openModal(status, comment) {
      if (status === 'detail') {
        this.tempComment = { ...comment };
        this.$refs.commentModal.openModal();
      } else if (status === 'delete') {
        this.tempComment = { ...comment };
        this.$refs.delCommentModal.openDelModal();
      }
    },
    delComment() {
      const url = `${VITE_API_URL}/comments/${this.tempComment.id}`;

      axios
        .delete(url)
        .then((res) => {
          alert('刪除成功');
          this.$refs.delCommentModal.closeDelModal();
          this.getComments();
        })
        .catch(() => {
          alert('刪除失敗');
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.commentContent {
  width: 560px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
