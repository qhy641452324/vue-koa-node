<template>
  <footer class="footer">
    <ul>
        <li><router-link to='/home'>主页</router-link></li>
        <li><router-link to='/tab1'>发现</router-link></li>
        <li><router-link to='/tab2'>视频</router-link></li>
        <li><router-link to='/about'>我的</router-link></li>
    </ul>
  </footer>
</template>

<style lang="css">
    .footer{
        position: fixed;
        bottom: 0;
        width: 100%;
        height: 38px;
        line-height: 38px;
        border-top: 1px solid #c3c3c3;
    	background-color: #F0F8FF;
    }
    .footer li{
        float: left;
        text-decoration: none;
        font-size: 14px;
        width: 25%;
        text-align: center;
        padding:0;
        margin:0;
        list-style:none
    }
</style>