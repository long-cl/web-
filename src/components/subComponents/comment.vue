<template>
  <div class="cmt-container">
    <h3>评论 {{id}} {{idd}} </h3>
    <hr>
    <textarea placeholder="请输入要吐槽的内容（最多200字）" maxlength="200"></textarea>
    <mt-button type="primary" size="large">发表评论</mt-button>
    <div class="cmt-list">
      <div class="cmt-item"   v-for="(item,i) in comments" :key = item.add_time >
      {{item}}
        <div class="cmt-title">
        第{{i+1}}楼 用户：{{item.user_name}} ；发表时间：{{item.addtime | resetDate}}
        </div>
        <div class="cmt-body">
          {{item.content === 'undefind' ? '此用户暂无评论' : item.content}}
        </div>
      </div>
    </div>
    
    <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
  </div>
</template>

<script>
import {Toast} from 'mint-ui'
export default {
  data(){
    return{
      idd: this.$route.params.id,
      comments: [],
      pageIndex: 1
    }
  },
  created(){
    this.getNewsComent();
  },
  methods: {
    getNewsComent(){
      this.$http.get('api/getcomments/'+this.id+'?pageindex='+this.pageIndex).then(result=>{
        if(result.body.status === 0){
          // this.comments = result.body.message;
          this.comments = this.comments.concat(result.body.message);
        }else{
          Toast("获取评论失败！")
        }
      })
    },
    getMore(){
      this.pageIndex++;
      this.getNewsComent();
    }
  },
  props: ['id']
}
</script>

<style lang="scss" scoped>
.cmt-container{
  h3{
    font-size: 18px;
  }
  textarea{
    font-size: 14px;
    height: 85px;
    margin: 0;
  }
  .cmt-list{
    margin: 5px 0;
    .cmt-item{
      font-size: 13px;
      .cmt-title{
        background-color: #ccc;
        line-height: 30px;
      }
      .cmt-body{
        line-height: 35px;
        text-indent: 2em;
      }
    }
  }
}
</style>