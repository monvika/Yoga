<template>
  <div id="footer">
    <div class="container flexible">
      <div class="column contacts">
        <h5>Contact us</h5>
        <p>
          PO Box 16122 Collins Street West,
          <br />Victoria 8007 Australia
        </p>
        <br />
        <p>Alitstudios@gmai.com</p>
        <p>+61 38376 6284</p>
        <div class="social-media">
          <font-awesome-icon
            :icon="{ prefix: 'fab', iconName: 'facebook' }"
            class="icon"
          />
          <font-awesome-icon
            :icon="{ prefix: 'fab', iconName: 'twitter' }"
            class="icon"
          />
          <font-awesome-icon
            :icon="{ prefix: 'fab', iconName: 'google-plus' }"
            class="icon"
          />
          <font-awesome-icon
            :icon="{ prefix: 'fab', iconName: 'instagram' }"
            class="icon"
          />
        </div>
      </div>
      <div class="column timetable">
        <h5>Open hours</h5>
        <ul>
          <li class="day flexible" v-for="hour in hourItems" :key="hour.name">
            <p>
              {{ hour.name }}
            </p>
            <span class="arrow">{{ hour.arrow }}</span>
            <p>{{ hour.time }}</p>
          </li>
        </ul>
      </div>
      <div class="column location">
        <h5>Our location</h5>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1572.458947133677!2d145.05640465809972!3d-37.97904539493071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad66dd3cb69546b%3A0xe503ac35202480a0!2s39%20Collins%20St%2C%20Mentone%20VIC%203194%2C%20Australia!5e0!3m2!1sen!2sua!4v1600707502763!5m2!1sen!2sua"
          width="271"
          height="172"
          frameborder="0"
          style="border: 0"
          allowfullscreen
          aria-hidden="false"
          tabindex="0"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterSection",
  data() {
    return {
      hourItems: [
        {
          name: "Monday",
          time: "8am - 10pm",
          arrow: ">",
        },
        {
          name: "Tuesday",
          time: "8am - 10pm",
          arrow: ">",
        },
        {
          name: "Wednesday",
          time: "8am - 10pm",
          arrow: ">",
        },
        {
          name: "Thursday",
          time: "8am - 10pm",
          arrow: ">",
        },
        {
          name: "Friday",
          time: "8am - 10pm",
          arrow: ">",
        },
        {
          name: "Saturday",
          time: "10am - 8pm",
          arrow: ">",
        },
        {
          name: "Sunday",
          time: "10am - 8pm",
          arrow: ">",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
#footer {
  background-color: $footer;
  margin-top: 85px;

  .flexible {
    justify-content: space-between;
    @media (max-width: 768px) {
      flex-wrap: wrap;
    }
  }
  .column {
    @media (max-width: 768px) {
      width: 50%;
    }
    @media (max-width: 576px) {
      width: 100%;
    }
  }
  .timetable{
    @media (max-width: 768px) {
  padding: 0 7px;
    }
  }
  .location {
    @media (max-width: 992px) {
      width: 31%;
    }
    @media (max-width: 768px) {
      width: 100%;
    }
  }

  h5 {
    color: $light-grey;
    font-size: 14px;
    margin: 30px 0 20px;
  }
  p,
  span {
    color: $midle-grey;
  }

  ul {
    padding-inline-start: 0;
    li {
      margin: 0;
      list-style: none;
       @media (max-width: 576px) {
       border-bottom: 1px solid gray;
    padding: 0 5px;
    }
    }
  }
  .social-media {
    margin-top: 26px;
    .icon {
      margin: 0 6px;
      &:first-child {
        margin-left: 0px;
      }
    }
    svg.icon path {
      color: $white;
      &:hover {
        color: $header-color;
        cursor: pointer;
      }
    }
  }
  .arrow {
    margin: 0 30px;
       @media (max-width: 576px) {
       display: none;
    }
  }
  iframe {
    border-radius: 10px;
    margin-bottom: 30px;
    width:100%;
  }
}
</style>
