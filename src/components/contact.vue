<template>
  <div class="contact">
    <div class="container">
      <div class="contact-wrap">
        <div class="image-contact">
          <img src="../assets/contact.jpg" alt="" />
        </div>
        <div class="form">
          <h2>Get in touch</h2>
          <form @submit.prevent="handleSubmit">
            <div class="name-wrap">
              <img class="icon" src="../assets/user.svg" alt="" />
              <input
                required
                class="form-control"
                type="text"
                v-model="form.name"
                placeholder="Name"
              />
            </div>
            <div class="email-wrap">
              <img required class="icon" src="../assets/email.svg" alt="" />
              <input
                class="form-control"
                type="email"
                v-model="form.email"
                placeholder="Email"
              />
            </div>
            <textarea
              class="area-control"
              cols="30"
              rows="10"
              v-model="form.message"
              placeholder="Message"
            ></textarea>

            <button class="btn" type="submit">Send</button>
          </form>
          <span class="response" v-if="!loading">{{ msg.data.message }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data: () => ({
    form: {
      name: "",
      email: "",
      message: "",
    },
    msg: "",
    loading: true,
  }),
  methods: {
    async handleSubmit() {
      const result = await axios.post(
        "https://brstore.shop/wp-json/bam/email",
        this.form
      );
      this.msg = result;
      this.loading = false;
      this.form.name = "";
      this.form.email = "";
      this.form.message = "";
    },
  },
};
</script>
<style lang="scss" scoped>
.contact {
  margin-top: 7rem;
  .container {
    max-width: 1140px;
    margin: 0 auto;
    .contact-wrap {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 2rem;
      .image-contact {
        box-sizing: border-box;
        border-right-style: 1px solid rgba(50, 106, 151, 1);
        border-top-style: 1px solid rgba(50, 106, 151, 1);
        border-radius: 5px;
        max-height: 450px;
        overflow: hidden;
        img {
          width: 100%;
          border-radius: 5px;
        }
      }
      .form {
        padding-bottom: 2.5rem;
        h2 {
          letter-spacing: 1px;
        }
        .name-wrap {
          position: relative;
          .icon {
            position: absolute;
            top: 30%;
            left: 5px;
            max-width: 22px;
          }
        }
        .email-wrap {
          position: relative;
          .icon {
            position: absolute;
            top: 30%;
            left: 5px;
            max-width: 22px;
          }
        }
        .form-control {
          box-sizing: border-box;
          width: 100%;
          padding: 10px 30px;
          margin: 8px 0;
          border-radius: 10px;
          outline: none;
          border: 1px solid rgba(50, 106, 151, 0.1);
          background-color: rgba(141, 161, 177, 0.1);
          font-size: 16px;
        }
        .area-control {
          box-sizing: border-box;
          width: 100%;
          padding: 10px;
          margin: 8px 0;
          border-radius: 10px;
          outline: none;
          border: 1px solid rgba(50, 106, 151, 0.1);
          background-color: rgba(141, 161, 177, 0.1);
          font-size: 16px;
        }
        .btn {
          width: 100%;
          padding: 10px 5px;
          margin: 8px 0;
          border-radius: 35px;
          outline: none;
          border: 1px solid rgba(50, 106, 151, 0.3);
          background-color: rgba(50, 106, 151, 1);
          color: #fff;
          cursor: pointer;
          font-size: 1rem;
          &:hover {
            opacity: 0.9;
          }
        }
      }
      .response {
        margin-left: 12px;
        color: rgba(50, 106, 151, 1);
      }
    }
  }
}
@media (max-width: 700px) {
  .contact {
    .container {
      .contact-wrap {
        width: 100%;
        display: block;
        .image-contact {
          display: none;
        }
      }
    }
  }
}
</style>
