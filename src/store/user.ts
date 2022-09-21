import { defineStore, storeToRefs } from "pinia";

// 'user' 是store的唯一id
export const userUsersStore = defineStore('users', {
    // 存放的数据
    state: () => {
        return {
            name: "咕宝",
            age: 17,
            sex: "女",
        }
    },
    // getters对象里可以定义各种方法,计算属性
    getters: {
        getAllInfo: (state) => {
            let name = "姓名：" + state.name + "；";
            let age = "年龄：" + state.age + "；";
            let sex = "性别：" + state.sex + "；";
            return name + age + sex;
        },
    },
    // actions对象里放处理业务逻辑的方法
    actions: {
        addAge() {
            this.age++;
        },
        subtractAge() {
            this.age--;
        }
    }
})
