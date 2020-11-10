<template>
    <div class='faq'>
  <input id='faq-a' type='checkbox'>
  <label for='faq-a'>
    <p class="faq-heading">How do I purchase Brainitz?</p>
    <div class='faq-arrow'></div>
      <p class="faq-text">You can purchase an individual account or a site license by emailing us at welcome@brainitz.com One of our staff will be in touch shortly to set-up your account. We accept credit card, purchase order, or check. Learn more on our pricing page.<br><br>We also offer professional development trainings that include the opportunity to pursue credit while also receiving a discounted license. If you have more questions, please feel free to submit a request!</p>
  </label>
  <input id='faq-b' type='checkbox'>
  <label for='faq-b'>
    <p class="faq-heading">Do you have professional development trainings available?</p>
    <div class='faq-arrow'></div>
      <p class="faq-text">Yes, we have professional development trainings available almost every month. Teachers can take our online course that will train you on the theory and practice of putting lessons online, often called flipped or blended learning. These trainings also include in depth instruction on how to use Brainitz.<br><br>Online training start at $45, include a 1 year subscription Brainitz, and come with 1 hour of advancement credit available through Adams State University or $55. For dates on upcoming trainings, email us at welcome@brainitz.com. If you have more questions, please feel free to submit a request!</p>
  </label>
  <input id='faq-c' type='checkbox'>
  <label for='faq-c'>
    <p class="faq-heading">Does Brainitz accept purchase orders?</p>
    <div class='faq-arrow'></div>
      <p class="faq-text">Yes, Brainitz accepts purchase order for site licenses. Please set the PO, including a description of the order to welcome@brainitz.com and we will invoice you for the amount. Once we send the invoice, someone will be in touch to set up your Brainitz account.<br><br>You can learn more about our licensing structure on our pricing page. If you have more questions, please feel free to submit a request!</p>
  </label>
  <input id='faq-d' type='checkbox'>
  <label for='faq-d'>
    <p class="faq-heading">What are the technical requirements for Brainitz?</p>
    <div class='faq-arrow'></div>
      <p class="faq-text">To get setup with Brainitz, instructors will need a computer with working Internet connection and a web browser. <br><br>Students will need any device with a web browser, ranging from smartphones to tablets and personal computer, as well as an Internet or cellular connection. <br><br>For the be st experience, we recommend using the latest version of Google Chrome, but it should work on a recent version of any major browser. If you have any more questions, please feel free to submit a request! </p>
  </label>
  <input id='faq-e' type='checkbox'>
  <label for='faq-e'>
    <p class="faq-heading">Can I add a PowerPoint to Brainitz</p>
    <div class='faq-arrow'></div>
      <p class="faq-text">Yes, you can add a PowerPoint to Brainitz. The easiest way is to record your PowerPoint presentation using a screen capture program like www.screencast-o-matic.com You can view our tutorial on how to do this here. <br><br>This will allow you to record your PowerPoint as a video with your voice describing the slides. You will then be able to upload the video on Brainitz and create an interactive video lesson. If you have any more questions, please feel free to submit a request!</p>
  </label>
    <input id='settings' type='checkbox'>
  <input id='faq-f' type='checkbox'>
  <label for='faq-f'>
    <p class="faq-heading">Did my student really get logged out and lose their progress?</p>
    <div class='faq-arrow'></div>
      <p class="faq-text">If a student does not answer a question in 5 minutes after it pops up the student will be ‘timed out’ and they will lose their progress from the last previously answered question <br><br>This feature is built in to discourage students from playing a video lesson and walking away. Students must stay engaged with the video lesson to avoid being timed out. If you have more questions, please feel free to submit a request!</p>
  </label>
</div>

</template>


<script>
export default {
    name:'Faq'
}
</script>



<style scoped>

@import url(https://fonts.googleapis.com/css?family=Lato);

@import url(https://fonts.googleapis.com/css?family=Open Sans);

.faq-heading {
  font-family: Lato;   
  font-weight: 400;
  font-size: 19px;
   -webkit-transition: text-indent 0.2s;
  text-indent: 20px;
  color: #333;
}

.faq-text {
  font-family: Open Sans;   
  font-weight: 400;
  color: #919191;
  width:95%;
  padding-left:20px;
  margin-bottom:30px;
}

.faq {
  width: 1000px;
  margin: 0 auto;
  background: white;
  border-radius: 4px;
  position: relative;
  border: 1px solid #E1E1E1;
}
.faq label {
  display: block;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  height: 56px;
  padding-top:1px;
 
  background-color: #FAFAFA;
  border-bottom: 1px solid #E1E1E1;
}

.faq input[type="checkbox"] {
  display: none;
}

.faq .faq-arrow {
  width: 5px;
  height: 5px;
  transition: -webkit-transform 0.8s;
  transition: transform 0.8s;
  transition: transform 0.8s, -webkit-transform 0.8s;
  -webkit-transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  border-top: 2px solid rgba(0, 0, 0, 0.33);
  border-right: 2px solid rgba(0, 0, 0, 0.33);
  float: right;
  position: relative;
  top: -30px;
  right: 27px;
  -webkit-transform: rotate(45deg);
          transform: rotate(45deg);
}

 .faq input[type="checkbox"]:checked + label > .faq-arrow {
  transition: -webkit-transform 0.8s;
  transition: transform 0.8s;
  transition: transform 0.8s, -webkit-transform 0.8s;
  -webkit-transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  -webkit-transform: rotate(135deg);
          transform: rotate(135deg);
}
 .faq input[type="checkbox"]:checked + label {
  display: block;
  background: rgba(255,255,255,255) !important;
  color: #4f7351;
  height: 225px;
  transition: height 0.8s;
  -webkit-transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

 .faq input[type='checkbox']:not(:checked) + label {
  display: block;
  transition: height 0.8s;
  height: 60px;
  -webkit-transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

::-webkit-scrollbar {
  display: none;
}

</style>