<template>
    <div class="countr1">
        
        <div class="sites_list" >
            <div class="adr_user">
                <p class="editad">
                    <span>{{datas.name}}</span>
                    <span>{{datas.phone}}</span>
                </p>
                <p class="editadd">
                    <span>{{datas.province}}</span>
                    <span>{{datas.city}}</span>
                    <span>{{datas.area}}</span>
                    <span>{{datas.textarea}}</span>
                </p>
                <p class="tacitlys">
                    <i :class="checkedClass" @click="flag=!flag">默认地址</i>
                    <span>
                        <em @click="editFn(datas)">编辑</em>
                        <em @click='omit(datas,id)'>删除</em>
                    </span>
                </p>
            </div>
        </div>
    </div>
</template>
<script>
import { getCookie } from "@/utils/utils";
export default {
   data() {
        return {
            flag:false, 
            names:''  
        };
    },
     props:{ //子级（由父级传过来的）
        datas:{
            required:true,
            type:Object
        },
        id:{
            required:true,
            type:Number
        }
     },
     computed:{ //挂载之后
        checkedClass(){ //前面的选中非选中
            let str='iconfont '
            return this.flag? str +'icon-webicon19':str +"icon-webicon206"
        }
    },
    methods:{
        editFn(datas){ //点击编辑
            this.$router.push({
                name:'addsite',
                query:{ //往地址栏传一些字段
                    type:'edit',
                    name:datas.name,
                    phone:datas.phone,
                    province:encodeURI(datas.province),
                    city:encodeURI(datas.city),
                    area:encodeURI(datas.area),
                    textarea:encodeURI(datas.textarea)
                }
            })
        },
        omit(datas,id){ //点击删除
           //console.log(id)
            this.$http.post("/api/cancellist", {
                token: getCookie("token"),
                datas:datas,
                id:id
            }).then(res=>{
                console.log(res) 
            })
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
.adr_user{
    border-bottom:.01rem solid #ccc;
}
.adr_user p{
    margin-top: .1rem;
}
.tacitlys {
    height: 0.8rem;
    line-height: 0.8rem;
}
.editadd{
    padding:.2rem 0;
    border-bottom: .01rem solid #ccc;
}
.tacitlys span{
    margin-left: 50%;
}
</style>


