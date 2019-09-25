<template>
    <div id="game">
      <label for="开始日期">开始日期：</label>
        <input type="text" v-model='year1'><span>年</span>
        <select  v-model='mouth1'>
            <option v-for='item in 12' :key='item' :value="item">{{item}}</option>
        </select>
        <span>月</span>
        <select v-model='day1'>
            <option v-for='item in getDay1' :key='item' :value="item">{{item}}</option>
        </select>
        <span>日</span>

        <br>
        <label for="结束日期">结束日期：</label>
        <input type="text" v-model='year2'><span>年</span>
        <select v-model='mouth2' >
            <option v-for='item in 12' :key='item' :value="item">{{item}}</option>
        </select><span>月</span>
        <select v-model="day2">
            <option v-for='item in getDay2' :key='item' :value="item">{{item}}</option>
        </select><span>日</span>
        <br>
        <button @click='main'>计算</button>
        <button @click='dateClear'>清空</button>
        <br>
        你总共活了多少天:<input v-model="count">
    </div>
</template>
<script>
export default {
    name:'game',
    data(){
        return {
            num1:[31,29,31,30,31,30,31,31,30,31,30,31],
            num2:[31,28,31,30,31,30,31,31,30,31,30,31],
            year1:'',
            mouth1:'',
            day1:'',

            year2:'',
            mouth2:'',
            day2:'',

            count:'',
            isDay1:31,//根据年份和月份来判断返回的天数
            isDay2:31,
        }
    },
    computed:{
        // 得到day1
        getDay1(){
            var year1=Number(this.year1);
            var mouth1=Number(this.mouth1);
            if(year1%400===0){
                if(mouth1==2){
                    return this.isDay1=29;
                }
                if(mouth1==4||mouth1==6||mouth1==9||mouth1==11){
                    return this.isDay1=30;
                }else{
                    return this.isDay1=31;
                }
            }else{
                if(mouth1==2){
                    return this.isDay1=28;
                }
                if(mouth1==4||mouth1==6||mouth1==9||mouth1==11){
                    return this.isDay1=30;
                }else{
                    return this.isDay1=31;
                }

            }
        },
         // 得到day2
        getDay2(){
            var year2=Number(this.year2);
            var mouth2=Number(this.mouth2);
            if(year2%400===0){
                if(mouth2==2){
                    return this.isDay2=29;
                }
                if(mouth2==4||mouth2==6||mouth2==9||mouth2==11){
                    return this.isDay2=30;
                }else{
                    return this.isDay2=31;
                }
            }else{
                if(mouth2==2){
                    return this.isDay2=28;
                }
                if(mouth2==4||mouth2==6||mouth2==9||mouth2==11){
                    return this.isDay2=30;
                }else{
                    return this.isDay2=31;
                }

            }
        },
    },
    methods:{
       // 计算一年过去了多少天
        frontDay(year,mouth,day){
            var sum=0;
            if(year%400===0){
                for(var i=0;i<mouth-1;i++){
                    sum+=this.num1[i]
                }
                console.log(sum+day)
                return sum+day;
            }else{
                for(var i=0;i<mouth-1;i++){
                    sum+=this.num2[i]
                }
                console.log(sum+day)
                return sum+day;
            }
        },
        // 计算一年过去了多少天
        backDay(year,mouth,day){
            var sum=0;
            if(year%400===0){
                for(var i=0;i<mouth-1;i++){
                    sum+=this.num1[i]
                }
                console.log(366-(sum+day))
                return 366-(sum+day);
            }else{
                for(var i=0;i<mouth-1;i++){
                    sum+=this.num2[i]
                }
                console.log(365-(sum+day))
                return 365-(sum+day);
            }
        },
        //根据年份返回天数
        isYear(year){
            if(year%400===0){
                return 366;
            }else{
                return 365;
            }
        },
        //计算一年之中两个月份之间的天数
        JudgeMonthDay(year,mouth1,mouth2,day1,day2){
            var sum=0;
            if(year%400===0){//如果是闰年
                if(mouth1===mouth2){//同一个月
                    return day2-day1;
                }if((mouth2-mouth1)===1){//隔一个月
                    return day2+this.num1[mouth1-1]-day1
                }if((mouth2-mouth1)>1){
                    sum+=day2+this.num1[mouth1-1]-day1;
                    for(var i=mouth1;i<mouth2-1;i++){
                        sum+=this.num1[i]
                    }
                    return  sum;
                }
            }else{
                if(mouth1===mouth2){//同一个月
                    return day2-day1;
                }if((mouth2-mouth1)===1){//隔一个月
                    return day2+this.num2[mouth1-1]-day1
                }if((mouth2-mouth1)>1){
                    sum+=day2+this.num2[mouth1-1]-day1;
                    for(var i=mouth1;i<mouth2-1;i++){
                        sum+=this.num2[i]
                    }
                    return  sum;
                }
            }
        },
         main(){
            var year1=Number(this.year1);
            var mouth1=Number(this.mouth1);
            var day1=Number(this.day1);

            var year2=Number(this.year2);
            var mouth2=Number(this.mouth2);
            var day2=Number(this.day2);
            var sum=0;

            if(year1===year2){//同一年
                this.count= this.JudgeMonthDay(year1,mouth1,mouth2,day1,day2);
            }
            if(year2-year1===1){//相隔一年
                this.count=this.frontDay(year2,mouth2,day2)+this.backDay(year1,mouth1,day1);
            }
            if((year2-year1)>1){//相隔两年
                sum+=this.frontDay(year2,mouth2,day2)+this.backDay(year1,mouth1,day1);
                for(var i=year1+1;i<year2;i++){
                    sum+=this.isYear(i);
                }
                this.count=sum;
            }
        },
        dateClear(){
            this.year1='';
            this.mouth1='';
            this.day1='';

            this.year2='';
            this.mouth2='';
            this.day2='';
            this.count='';
        },  
    }
}
</script>
<style  scoped>
    label{
        display: inline-block;
        margin: 10px auto;
        
    }
    input{
        width: 100px;
    }
    select{
        width: 70px;
    }


</style>