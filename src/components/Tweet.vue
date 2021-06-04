<template>
  <article class="tweet">
    <div class="tweet-container">
      <!-- Profile Image -->
      <a href="#" class="profile-img">
        <img src="../assets/img/default-profile.png" alt="profile-img" />
      </a>
      <!-- Tweet Content -->
      <div class="tweet-content">
        <header class="tweet-header">
          <a href="#" class="user-name">
            <strong class="name">Ertuğrul Sencer UZUN</strong>
            <span class="user-name">@ertugrulsencer03</span>
            <div class="bubble"></div>
            <span class="time">3h</span>
          </a>
          <a href="#" class="btn-bubbles">
            <i class="fas fa-ellipsis-h"></i>
          </a>
        </header>
        <div class="content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde
            laborum, impedit ex a ipsam suscipit laudantium est accusantium.
          </p>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
article.tweet {
  padding: 12px 16px;
  width: 600px;
  height: max-content;
  border: 1px solid #2f3336;
}
.tweet-container {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  /* Profile Image */
  .profile-img {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    flex-basis: 48px;
    min-width: 48px;
    height: 48px;
    margin-right: 12px;
    img {
      border-radius: inherit;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  /* Tweet Content */
  .tweet-content {
    flex-grow: 1;
    /* Tweet Header */
    header.tweet-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 2px;
      a.user-name {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        /* User name and time */
        .name {
          font-weight: 700;
          font-size: 0.95rem;
          color: #d9d9d9;
          line-height: 20px;
        }
        .user-name {
          margin-left: 4px;
          color: #6e767d;
        }
        .bubble {
          border-radius: 50%;
          margin: 0 4px;
          width: 2.5px;
          height: 2.5px;
          line-height: 20px;
          background: #6e767d;
        }
        .time {
          color: #6e767d;
        }
        &:hover {
          .name {
            text-decoration: underline;
          }
        }
      }
      /* Bubbles */
      a.btn-bubbles {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 35px;
        height: 35px;
        border-radius: 50%;
        line-height: 0;
        color: #6e767d;
        transition: all 200ms linear;
        &:hover {
          background: rgba(29, 161, 242, 0.1);
          color: rgba(29, 161, 242, 0.8);
        }
        i {
          font-size: 0.9rem;
          color: currentColor;
        }
      }
    }
    /* Content */
    .content {
      line-height: 20px;
      font-size: 0.95rem;
    }
  }
}
</style>
