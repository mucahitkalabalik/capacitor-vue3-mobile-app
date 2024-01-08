import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state: () => {
    return {
      myCart: [],
      total: 0,
      totalProduct: 0,
      detail: null,
      items: [
        {
          id: 1,
          name: "Kolej Ceket",
          category: "Mont",
          image:
            "https://static.zara.net/photos///2023/I/0/2/p/4302/333/330/2/w/750/4302333330_6_1_1.jpg?ts=1693497040899",
          price: 300,
          status: false,
        },
        {
          id: 2,
          name: "Yünlü Ceket",
          category: "Mont",
          image:
            "https://static.zara.net/photos///2023/I/0/2/p/0993/301/800/2/w/750/0993301800_6_1_1.jpg?ts=1697705336881",
          price: 410,
          status: false,
        },
        {
          id: 3,
          name: "Boxy Ceket",
          category: "Mont",
          image:
            "https://static.zara.net/photos///2023/I/0/2/p/4391/303/800/2/w/750/4391303800_6_1_1.jpg?ts=1694094386524",
          price: 290,
          status: false,
        },
      ],
      newProducts: [
        {
          id: 4,
          name: "Beyaz Tişört",
          category: "Tişört",
          image:
            "https://static.zara.net/photos///2023/I/0/1/p/4231/425/250/2/w/750/4231425250_1_1_1.jpg?ts=1689847724994",
          price: 140,
          status: false,
        },
        {
          id: 5,
          name: "SLOGANLI T-SHIRT",
          category: "Tişört",
          image:
            "https://static.zara.net/photos///2023/I/0/2/p/3992/319/982/2/w/750/3992319982_1_1_1.jpg?ts=1692951283852",
          price: 125,
          status: false,
        },
        {
          id: 6,
          name: "KALKAN BASKILI T-SHIRT",
          category: "Tişört",
          image:
            "https://static.zara.net/photos///2023/I/0/2/p/6224/379/600/2/w/750/6224379600_1_1_1.jpg?ts=1691151338083",
          price: 105,
          status: false,
        },
        {
          id: 7,
          name: "BASKILI ÖRME T-SHIRT",
          category: "Tişört",
          image:
            "https://static.zara.net/photos///2023/I/0/2/p/4374/300/801/2/w/750/4374300801_1_1_1.jpg?ts=1686127144067",
          price: 90,
          status: false,
        },
        {
          id: 8,
          name: "ÇİZGİLİ T-SHIRT",
          category: "Tişört",
          image:
            "https://static.zara.net/photos///2023/I/0/2/p/6224/355/401/2/w/750/6224355401_1_1_1.jpg?ts=1689923262142",
          price: 151,
          status: false,
        },
      ],
    };
  },
  getters: {
    getterCart: (state) => state.myCart,
    getterItems: (state) => state.items,
    getterDetail: (state) => state.detail,
    getterNewItems: (state) => state.newProducts,
    getterTotalProduct: (state) => {
      state.totalProduct = 0;
      state.myCart.map((item) => {
        state.totalProduct = state.totalProduct + item.counter;
      });
      return state.totalProduct;
    },
    getterCartTotal: (state) => {
      state.total = 0;
      state.myCart.map((item) => {
        console.log(state.total);
        console.log(item, "item");
        if (item.counter === 1) {
          state.total = state.total + item.price;
          console.log(state.total, "total in if");
        } else {
          state.total = item.price * item.counter + state.total;
        }
      });
      return state.total;
    },
  },
  actions: {
    addCard(item) {
      item.status = true;
      this.myCart.push(item);
    },
    getDetail(myItem) {
      this.$state.newProducts.map((item) => {
        if (item.name === myItem) {
          this.$state.detail = item;
        }
      });
    },
    decrease(item) {
      this.myCart.filter((myItem, index) => {
        if (myItem.name === item.name) {
          if (myItem.counter === 1) {
            this.$state.items.map((item) => {
              if (item.name === myItem.name) {
                item.status = false;
              }
            });
            this.$state.newProducts.map((item) => {
              if (item.name === myItem.name) {
                item.status = false;
              }
            });
            this.myCart.splice(index, 1);
            return;
          }
          myItem.counter--;
        }
      });
    },
    increase(item) {
      this.myCart.map((myItem) => {
        if (myItem.name === item.name) {
          myItem.counter++;
        }
      });
    },
    clear() {
      this.items.map((myItem) => {
        if (myItem.status === true) {
          myItem.status = false;
        }
      });
      this.newProducts.map((myItem) => {
        if (myItem.status === true) {
          myItem.status = false;
        }
      });
    },
  },
});
