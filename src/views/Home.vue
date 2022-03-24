<template>
  <div class="home">
    <BlogPost v-if="!user & admin" :post="welcomeScreen" />
    <BlogPost :post="post" v-for="(post,index) in blogPostsFeed" :key="index"/>

    <div class="blog-card-wrap">
      <div class="container">
        <h3>View More Recent Blogs</h3>
        <div class="blog-cards">
          <BlogCards :post="post" v-for="(post,index) in blogPostsCards" :key="index"/>
        </div>
      </div>
    </div>
    <div class="updates">
      <div class="container">
        <h2>Never miss a post. Register for your free account today!</h2>
        <router-link class="router-button" :to="{name:'Register'}">
            Register for News World<Arrow  class="arrow arrow-light"/>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Arrow from "../assets/Icons/arrow-right-light.svg";
import BlogPost from "../components/BlogPost.vue";
import BlogCards  from "../components/BlogCard.vue";
export default {
  name: "Home",
  components: {BlogPost,BlogCards,Arrow},
  data(){
    return{
        welcomeScreen:{
            title:"Welcome!",
            blogPost:"Weekly blog articles with all things programming including HTML, CSS, JavaScript and more. Register today to never miss a post!",
            welcomeScreen: true,
            photo:"coding",
        },
        sampleBlogPost:[
          {
              title:"This is Filler Title1!",
              blogHTML:"This is a filler blog post title1",
              blogCoverPhoto:"beautiful-stories",

          },
          {
              title:"This is Filler title2!",
              blogHTML:"This is a filler blog post title2",
              blogCoverPhoto:"designed-for-everyone",
          }
        ],
    };
  },
  computed:{
    blogPostsFeed(){
      return this.$store.getters.blogPostsFeed;
    },
     blogPostsCards(){
      return this.$store.getters.blogPostsCards;
    },
    sampleBlogCards(){
      return this.$store.state.sampleBlogCards;
    }
  }
};
</script>
<style lang="scss" scoped>
.updates {
  .container {
    padding: 100px 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: 800px) {
      padding: 125px 25px;
      flex-direction: row;
    }

    .router-button {
      display: flex;
      font-size: 14px;
      text-decoration: none;
      @media (min-width: 800px) {
        margin-left: auto;
      }
    }

    h2 {
      font-weight: 300;
      font-size: 32px;
      max-width: 425px;
      width: 100%;
      text-align: center;
      text-transform: uppercase;
      @media (min-width: 800px) {
        text-align: initial;
        font-size: 40px;
      }
    }
  }
}
</style>