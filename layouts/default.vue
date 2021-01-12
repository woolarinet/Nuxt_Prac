<style scoped lang="scss">
.main-enter-active {
  animation: fadeIn 1s ease-in;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.05;
  }
  100% {
    opacity: 1;
  }
}
.main-leave-active {
  animation: moveInUp 0.3s ease-in;
}
@keyframes moveInUp {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50px);
  }
}
</style>

<template>
  <v-app>
    <v-app-bar v-if="isMobile" app color="transparent" elevate-on-scroll>
      <v-app-bar-nav-icon />
      <v-col cols="3" />
      <v-col cols="2" />
      <v-btn text width="20" @click="openDialog()">
        <!-- <v-btn text width="20" :to="'/user/login'"> -->
        <span>Login</span>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-cart</v-icon>
      </v-btn>
    </v-app-bar>
    <v-app-bar v-else app color="transparent" dark elevate-on-scroll>
      <v-spacer />

      <v-btn text :to="'/about'">
        <span>About</span>
      </v-btn>

      <v-menu open-on-hover offset-y>
        <template v-slot:activator="{ on }">
          <v-btn text v-on="on">
            <span>Shop</span>
          </v-btn>
        </template>

        <v-list-item>
          <v-btn text block :to="'/cla'">
            <span>clarinet</span>
          </v-btn>
        </v-list-item>

        <v-list-item>
          <v-btn text block :to="'/sax'">
            <span>saxophone</span>
          </v-btn>
        </v-list-item>

        <v-list-item>
          <v-btn text block :to="'/book'">
            <span>music book</span>
          </v-btn>
        </v-list-item>

        <v-list-item>
          <v-btn text block :to="'/assist'">
            <span>assist</span>
          </v-btn>
        </v-list-item>

        <v-list-item>
          <v-btn text block :to="'/accessory'">
            <span>accessory</span>
          </v-btn>
        </v-list-item>

        <v-list-item>
          <v-btn text block :to="'/used'">
            <span>used</span>
          </v-btn>
        </v-list-item>
      </v-menu>

      <v-btn text :to="'/news'">
        <span>News</span>
      </v-btn>

      <v-btn text :to="'/contact'">
        <span>Contact</span>
      </v-btn>

      <v-btn text width="20" @click="openDialog()">
        <!-- <v-btn text width="20" :to="'/user/login'"> -->
        <span>Login</span>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-account</v-icon>
      </v-btn>
    </v-app-bar>

    <div>
      <transition name="main"> <nuxt /></transition>
    </div>
    <div id="naverIdLogin"></div>
    <v-dialog v-model="dialog" width="400">
      <v-card>
        <v-toolbar color="#9080a6" dark flat>
          <v-toolbar-title>로그인</v-toolbar-title>
          <div class="flex-grow-1"></div>
          <v-spacer />
          <v-btn icon @click="closeDialog()">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>
        <v-card-text>
          <v-form>
            <v-text-field label="ID" prepend-icon="mdi-account" type="text" />
            <v-text-field
              id="password"
              label="Password"
              prepend-icon="mdi-lock"
              type="password"
            />
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-btn color="white" text to="/user/signup" @click="closeDialog()"
            >회원가입</v-btn
          >
          <div class="flex-grow-1"></div>
          <v-btn color="#9080a6">로그인</v-btn>
        </v-card-actions>
        <v-card-actions center>
          <v-img
            :src="require('../assets/image/kakao_login.png')"
            style="cursor: pointer"
            @click="kakaoLogin"
          ></v-img>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    isMobile: false,
    isTablet: false,
  }),
  beforeDestroy() {
    if (typeof window === 'undefined') return
    window.removeEventListener('resize', this.onResize, { passive: true })
  },
  mounted() {
    this.onResize()
    window.addEventListener('resize', this.onResize, { passive: true })
    window.Kakao.init('clientkey')
    console.log(window.Kakao.isInitialized())
  },
  methods: {
    openDialog() {
      this.dialog = true
    },
    closeDialog() {
      this.dialog = false
    },
    onResize() {
      this.isMobile = window.innerWidth < 900
      this.isTablet = window.innerWidth > 900
    },
    kakaoLogin() {
      window.Kakao.Auth.authorize({
        redirectUri: 'http://localhost:3000/user/callback',
      })
    },
  },
}
</script>
