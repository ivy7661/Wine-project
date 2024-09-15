<template>
  <div class="row">
    <h1 class="my-3">{{ title }}</h1>
    <div class="header-line">
      <img :src="headerLine" alt="header line" />
    </div>
    <div class="row">
      <table class="table mt-4 mx-2">
        <thead class="table-light">
          <tr>
            <th width="90">評論編號</th>
            <th width="90">會員編號</th>
            <th width="260">評論內容</th>
            <th width="70" class="text-center">詳細資訊</th>
            <th width="70" class="text-center">刪除評論</th>
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
            <td class="text-center">
              <button type="button" class="btn btn-outline-primary btn-sm" @click="openModal('detail', comment)">
                查看
              </button>
            </td>
            <td class="text-center">
              <button type="button" class="btn btn-outline-danger btn-sm" @click="openModal('delete', comment)">
                刪除
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <CommentModal :temp-comment="tempComment" ref="commentModal" />
  <DelCommentModal :temp-comment="tempComment" :del-comment="delComment" ref="delCommentModal" />
</template>

<script>
import axios from 'axios';
import CommentModal from '@/components/admin/CommentModal.vue';
import DelCommentModal from '@/components/admin/DelCommentModal.vue';
import headerLine from '@/assets/icons/svg/header_line.svg';
import Alert from '@/utils/swal.js';

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
      headerLine,
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
          this.comments = res.data;
        })
        .catch(() => {
          Alert.toastTop('error', '獲取評論失敗');
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
          Alert.toastTop('success', '刪除成功');
          this.$refs.delCommentModal.closeDelModal();
          this.getComments();
        })
        .catch(() => {
          Alert.toastTop('error', '刪除失敗');
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.commentContent {
  width: 260px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.header-line {
  display: flex;
  justify-content: left;

  img {
    width: 100%;
  }
}

th,
td {
  padding: 8px 30px;
}

tr:first-child th:first-child {
  border-top-left-radius: 5px;
}

tr:last-child td:first-child {
  border-bottom-left-radius: 5px;
}

tr:first-child th:last-child {
  border-top-right-radius: 5px;
}

tr:last-child td:last-child {
  border-bottom-right-radius: 5px;
}
</style>
