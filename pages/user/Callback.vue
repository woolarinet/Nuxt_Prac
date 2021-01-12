<template>
  <v-layout column>123123123</v-layout>
</template>

<script>
export default {
  data() {
    return {
      result: {
        code: '',
      },
    }
  },
  mounted() {
    this.result.code = this.$route.query.code
    // console.log('카카오 인증 코드\n', this.result)
    // 서버로 인증코드 전송하는 코드작성
    this.toServer(this.result)
  },
  methods: {
    async toServer(result) {
      const { response } = await this.$axios.post('/api/user/oauth', { result })
      if (response === 200) {
        this.$router.replace({ path: '/' })
      } else {
        console.log(this.response)
      }
    },
  },
}
</script>
