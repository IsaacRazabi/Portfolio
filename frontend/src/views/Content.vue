<template>
<main class="contact-layout">
  <section class="contact-img-container">
<p class="contact-item"><img src="@/assets/images/contact/home.jpg" alt=""> Jerusalem</p>
<p class="contact-item"><img src="@/assets/images/contact/mail.png" alt=""> Poetryor@gmail.com</p>
<p class="contact-item"><img src="@/assets/images/contact/phone.jpg" alt=""> 0546-352-350</p>
</section>
<img src="@/assets/images/contact/linkedin.jpg" alt="">
<img src="@/assets/images/contact/facebook.png" alt="">
<form class="contact-form"><input type="hidden" name="contact_number"><div><label>Your Name</label><input type="text" name="user_name" value=""></div><div><label>Email Address</label><input type="email" name="user_email" value=""><span class="fs16">new Promise (I'll never share it with anyone);</span></div><div><label>What's on your mind?</label><textarea name="message"></textarea></div><div><button class="fs24 action-btn" type="submit" value="Send">Email me!</button></div></form>
</main>
</template>

<script>
export default {
  name: "Content",
}
</script>
<style scoped>
.contact-img-container{
display: flex;
flex-direction: column;
/* margin-inline-start: ; */
}
img{
      height: 130px;
    width: 130px;
}
.contact-item{
  display: flex;
  align-items: center;
}
.contact-form{
  display: flex;
  flex-direction: column;
}
.contact-layout{
  max-width: 500px;
}
</style>