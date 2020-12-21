import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    posts: [
      {
        id: 1,
        image: 'https://via.placeholder.com/30',
        title: "Как2",
        badges: [
          {
            type: "warning",
            name: "популярное",
          },
          {
            type: "info",
            name: "эксперт",
          },
        ],
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae blanditiis commodi deleniti dicta distinctio dolore ea, esse eum impedit incidunt laudantium, quia quibusdam quisquam rerum tempora totam ut veniam veritatis! Alias amet asperiores assumenda consequuntur, cupiditate dolore dolorem ducimus ea exercitationem facilis id ipsa omnis quis quod ratione ut velit. A id ipsam labore laboriosam odit! Accusantium aliquam aperiam, consequatur cum impedit iure laudantium, modi nesciunt obcaecati, quia quisquam sit voluptatum! Ea ipsum nulla quam recusandae totam? Aliquid amet, aspernatur blanditiis consequatur consequuntur corporis delectus ea est eveniet exercitationem fuga impedit libero maiores maxime mollitia nesciunt nisi officia perspiciatis porro possimus praesentium provident quaerat quam quasi quibusdam quidem sapiente sed sequi sint unde velit vitae voluptate voluptatum? Ad consequatur deleniti dolore exercitationem rerum vero? Adipisci asperiores at cum doloribus esse est explicabo hic illo maiores maxime modi, mollitia officia, omnis optio porro, possimus quisquam ratione tempore vitae voluptas voluptatem voluptatum.',
        author: 1,
      },
      {
        id: 2,
        image: 'https://via.placeholder.com/30',
        title: "Как1",
        badges: [
          {
            type: "warning",
            name: "популярное",
          },
          {
            type: "info",
            name: "эксперт",
          },
        ],
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae blanditiis commodi deleniti dicta distinctio dolore ea, esse eum impedit incidunt laudantium, quia quibusdam quisquam rerum tempora totam ut veniam veritatis! Alias amet asperiores assumenda consequuntur, cupiditate dolore dolorem ducimus ea exercitationem facilis id ipsa omnis quis quod ratione ut velit. A id ipsam labore laboriosam odit! Accusantium aliquam aperiam, consequatur cum impedit iure laudantium, modi nesciunt obcaecati, quia quisquam sit voluptatum! Ea ipsum nulla quam recusandae totam? Aliquid amet, aspernatur blanditiis consequatur consequuntur corporis delectus ea est eveniet exercitationem fuga impedit libero maiores maxime mollitia nesciunt nisi officia perspiciatis porro possimus praesentium provident quaerat quam quasi quibusdam quidem sapiente sed sequi sint unde velit vitae voluptate voluptatum? Ad consequatur deleniti dolore exercitationem rerum vero? Adipisci asperiores at cum doloribus esse est explicabo hic illo maiores maxime modi, mollitia officia, omnis optio porro, possimus quisquam ratione tempore vitae voluptas voluptatem voluptatum.',
        author: 1,
      },
      {
        id: 3,
        image: 'https://via.placeholder.com/30',
        title: "Как3",
        badges: [
          {
            type: "warning",
            name: "популярное",
          },
          {
            type: "info",
            name: "эксперт",
          },
        ],
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae blanditiis commodi deleniti dicta distinctio dolore ea, esse eum impedit incidunt laudantium, quia quibusdam quisquam rerum tempora totam ut veniam veritatis! Alias amet asperiores assumenda consequuntur, cupiditate dolore dolorem ducimus ea exercitationem facilis id ipsa omnis quis quod ratione ut velit. A id ipsam labore laboriosam odit! Accusantium aliquam aperiam, consequatur cum impedit iure laudantium, modi nesciunt obcaecati, quia quisquam sit voluptatum! Ea ipsum nulla quam recusandae totam? Aliquid amet, aspernatur blanditiis consequatur consequuntur corporis delectus ea est eveniet exercitationem fuga impedit libero maiores maxime mollitia nesciunt nisi officia perspiciatis porro possimus praesentium provident quaerat quam quasi quibusdam quidem sapiente sed sequi sint unde velit vitae voluptate voluptatum? Ad consequatur deleniti dolore exercitationem rerum vero? Adipisci asperiores at cum doloribus esse est explicabo hic illo maiores maxime modi, mollitia officia, omnis optio porro, possimus quisquam ratione tempore vitae voluptas voluptatem voluptatum.',
        author: 1,
      },
      {
        id: 4,
        image: 'https://via.placeholder.com/30',
        title: "Как",
        badges: [
          {
            type: "warning",
            name: "популярное",
          },
          {
            type: "info",
            name: "эксперт",
          },
        ],
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae blanditiis commodi deleniti dicta distinctio dolore ea, esse eum impedit incidunt laudantium, quia quibusdam quisquam rerum tempora totam ut veniam veritatis! Alias amet asperiores assumenda consequuntur, cupiditate dolore dolorem ducimus ea exercitationem facilis id ipsa omnis quis quod ratione ut velit. A id ipsam labore laboriosam odit! Accusantium aliquam aperiam, consequatur cum impedit iure laudantium, modi nesciunt obcaecati, quia quisquam sit voluptatum! Ea ipsum nulla quam recusandae totam? Aliquid amet, aspernatur blanditiis consequatur consequuntur corporis delectus ea est eveniet exercitationem fuga impedit libero maiores maxime mollitia nesciunt nisi officia perspiciatis porro possimus praesentium provident quaerat quam quasi quibusdam quidem sapiente sed sequi sint unde velit vitae voluptate voluptatum? Ad consequatur deleniti dolore exercitationem rerum vero? Adipisci asperiores at cum doloribus esse est explicabo hic illo maiores maxime modi, mollitia officia, omnis optio porro, possimus quisquam ratione tempore vitae voluptas voluptatem voluptatum.',
        author: 1,
      },
      {
        id: 6,
        image: 'https://via.placeholder.com/30',
        title: "Как999",
        badges: [
          {
            type: "warning",
            name: "популярное",
          },
          {
            type: "info",
            name: "эксперт",
          },
        ],
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae blanditiis commodi deleniti dicta distinctio dolore ea, esse eum impedit incidunt laudantium, quia quibusdam quisquam rerum tempora totam ut veniam veritatis! Alias amet asperiores assumenda consequuntur, cupiditate dolore dolorem ducimus ea exercitationem facilis id ipsa omnis quis quod ratione ut velit. A id ipsam labore laboriosam odit! Accusantium aliquam aperiam, consequatur cum impedit iure laudantium, modi nesciunt obcaecati, quia quisquam sit voluptatum! Ea ipsum nulla quam recusandae totam? Aliquid amet, aspernatur blanditiis consequatur consequuntur corporis delectus ea est eveniet exercitationem fuga impedit libero maiores maxime mollitia nesciunt nisi officia perspiciatis porro possimus praesentium provident quaerat quam quasi quibusdam quidem sapiente sed sequi sint unde velit vitae voluptate voluptatum? Ad consequatur deleniti dolore exercitationem rerum vero? Adipisci asperiores at cum doloribus esse est explicabo hic illo maiores maxime modi, mollitia officia, omnis optio porro, possimus quisquam ratione tempore vitae voluptas voluptatem voluptatum.',
        author: 1,
      },
      {
        id: 7,
        image: 'https://via.placeholder.com/30',
        title: "Как111",
        badges: [
          {
            type: "warning",
            name: "популярное",
          },
          {
            type: "info",
            name: "эксперт",
          },
        ],
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae blanditiis commodi deleniti dicta distinctio dolore ea, esse eum impedit incidunt laudantium, quia quibusdam quisquam rerum tempora totam ut veniam veritatis! Alias amet asperiores assumenda consequuntur, cupiditate dolore dolorem ducimus ea exercitationem facilis id ipsa omnis quis quod ratione ut velit. A id ipsam labore laboriosam odit! Accusantium aliquam aperiam, consequatur cum impedit iure laudantium, modi nesciunt obcaecati, quia quisquam sit voluptatum! Ea ipsum nulla quam recusandae totam? Aliquid amet, aspernatur blanditiis consequatur consequuntur corporis delectus ea est eveniet exercitationem fuga impedit libero maiores maxime mollitia nesciunt nisi officia perspiciatis porro possimus praesentium provident quaerat quam quasi quibusdam quidem sapiente sed sequi sint unde velit vitae voluptate voluptatum? Ad consequatur deleniti dolore exercitationem rerum vero? Adipisci asperiores at cum doloribus esse est explicabo hic illo maiores maxime modi, mollitia officia, omnis optio porro, possimus quisquam ratione tempore vitae voluptas voluptatem voluptatum.',
        author: 1,
      },
      {
        id: 8,
        image: 'https://via.placeholder.com/30',
        title: "Как222",
        badges: [
          {
            type: "warning",
            name: "популярное",
          },
          {
            type: "info",
            name: "эксперт",
          },
        ],
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae blanditiis commodi deleniti dicta distinctio dolore ea, esse eum impedit incidunt laudantium, quia quibusdam quisquam rerum tempora totam ut veniam veritatis! Alias amet asperiores assumenda consequuntur, cupiditate dolore dolorem ducimus ea exercitationem facilis id ipsa omnis quis quod ratione ut velit. A id ipsam labore laboriosam odit! Accusantium aliquam aperiam, consequatur cum impedit iure laudantium, modi nesciunt obcaecati, quia quisquam sit voluptatum! Ea ipsum nulla quam recusandae totam? Aliquid amet, aspernatur blanditiis consequatur consequuntur corporis delectus ea est eveniet exercitationem fuga impedit libero maiores maxime mollitia nesciunt nisi officia perspiciatis porro possimus praesentium provident quaerat quam quasi quibusdam quidem sapiente sed sequi sint unde velit vitae voluptate voluptatum? Ad consequatur deleniti dolore exercitationem rerum vero? Adipisci asperiores at cum doloribus esse est explicabo hic illo maiores maxime modi, mollitia officia, omnis optio porro, possimus quisquam ratione tempore vitae voluptas voluptatem voluptatum.',
        author: 1,
      },
      {
        id: 9,
        image: 'https://via.placeholder.com/30',
        title: "Как333",
        badges: [
          {
            type: "warning",
            name: "популярное",
          },
          {
            type: "info",
            name: "эксперт",
          },
        ],
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae blanditiis commodi deleniti dicta distinctio dolore ea, esse eum impedit incidunt laudantium, quia quibusdam quisquam rerum tempora totam ut veniam veritatis! Alias amet asperiores assumenda consequuntur, cupiditate dolore dolorem ducimus ea exercitationem facilis id ipsa omnis quis quod ratione ut velit. A id ipsam labore laboriosam odit! Accusantium aliquam aperiam, consequatur cum impedit iure laudantium, modi nesciunt obcaecati, quia quisquam sit voluptatum! Ea ipsum nulla quam recusandae totam? Aliquid amet, aspernatur blanditiis consequatur consequuntur corporis delectus ea est eveniet exercitationem fuga impedit libero maiores maxime mollitia nesciunt nisi officia perspiciatis porro possimus praesentium provident quaerat quam quasi quibusdam quidem sapiente sed sequi sint unde velit vitae voluptate voluptatum? Ad consequatur deleniti dolore exercitationem rerum vero? Adipisci asperiores at cum doloribus esse est explicabo hic illo maiores maxime modi, mollitia officia, omnis optio porro, possimus quisquam ratione tempore vitae voluptas voluptatem voluptatum.',
        author: 1,
      },
    ],
    experts: [
      {
        id: 1,
        name: 'Надежда',
        description: 'Врач, диетолог',
        image: 'https://via.placeholder.com/1000x500.png',
      },
      {
        id: 2,
        name: 'Галина',
        description: 'Активист, администратор',
        image: 'https://via.placeholder.com/1000x500.png',
      }
    ]
  },
  getters: {
    postIds(state) {
      let idList = [];
      for (let post of state.posts) {
        idList.push(post.id);
      }
      return idList
    },
    post(state) {
      return (id) => {
        for (let post of state.posts) {
          if (post.id === id) {
            return post
          }
        }
      }
    },
    expertsId(state) {
      let idList = [];
      for (let experts of state.experts) {
        idList.push(experts.id);
      }
      return idList
    },
    expert(state) {
      return (id) => {
        for (let expert of state.experts) {
          if (expert.id === id) {
            return expert
          }
        }
      }
    },
  }
})