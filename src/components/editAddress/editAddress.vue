<template>
    <div class="countr1">
        <div class="xiugai">
            <p>路飞
                <span>1570xxxx8276</span>
            </p>
            <span>北京市海淀区知春路北京市海淀区知春路</span>
        </div>
        <p class="tacitlys">
            <i :class="checkedClass" @click="flag=!flag">默认地址</i>
            <span>
                <em>编辑</em>
                <em>删除</em>
            </span>
        </p>
    </div>
</template>
<script>
export default {
    data(){
        return{
           flag:false
        }
    },
    computed:{ //模板编译，挂载之后
        checkedClass(){ //前面的选中非选中
            let str='iconfont '
            return this.flag? str +'icon-webicon19':str +"icon-webicon206"
        }
    }
};   
</script>
<style  scoped>
i,em{
    font-style: normal;
}
.countr1 {
    background: #fff;
    margin-bottom: 0.2rem;
}
.xiugai {
    border-bottom: 0.01rem solid #eee;
    padding: 0.2rem 0.2rem;
    box-sizing: border-box;
}
.xiugai p {
    font-size: 0.36rem;
}
.xiugai p span {
    margin-left: 0.2rem;
}
.xiugai span {
    margin-top: 0.2rem;
}
.tacitlys {
    height: 0.8rem;
    line-height: 0.8rem;
}
</style>


