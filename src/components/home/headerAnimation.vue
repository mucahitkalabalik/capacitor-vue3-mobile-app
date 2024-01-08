<template>
  <ul class="lightrope">
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  </ul>
</template>
<style>
.product {
  position: absolute;
  bottom: 5px;
  left: 2%;
  width: 96%;
}
.product-desc {
  width: 80vw;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.add-baske {
  width: 20vw;
}
.banner-title {
  position: absolute;
  top: 35px;
}
.product-container {
  padding-bottom: 20% !important;
}
.product-image {
  height: 85%;
}
.lightrope {
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  position: absolute;
  z-index: 1;
  margin: -15px 0 0 0;
  padding: 0;
  pointer-events: none;
  width: 100%;
  top: 0;
}

.lightrope li {
  position: relative;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  list-style: none;
  margin: 0;
  padding: 0;
  display: block;
  width: 12px;
  height: 28px;
  border-radius: 50%;
  margin: 20px;
  display: inline-block;
  background: #e7edeb;
  box-shadow: 0px 4.66667px 24px 3px #d5d8d7;
  -webkit-animation-name: flash-1;
  animation-name: flash-1;
  -webkit-animation-duration: 2s;
  animation-duration: 2s;
}

.lightrope li:nth-child(2n + 1) {
  background: rgb(193, 203, 203);
  box-shadow: 0px 4.66667px 24px 3px rgba(0, 255, 255, 0.5);
  -webkit-animation-name: flash-2;
  animation-name: flash-2;
  -webkit-animation-duration: 0.4s;
  animation-duration: 0.4s;
}

.lightrope li:nth-child(4n + 2) {
  background: #f70094;
  box-shadow: 0px 4.66667px 24px 3px #f7a900;
  -webkit-animation-name: flash-3;
  animation-name: flash-3;
  -webkit-animation-duration: 1.1s;
  animation-duration: 1.1s;
}

.lightrope li:nth-child(odd) {
  -webkit-animation-duration: 1.8s;
  animation-duration: 1.8s;
}

.lightrope li:nth-child(3n + 1) {
  -webkit-animation-duration: 1.4s;
  animation-duration: 1.4s;
}

.lightrope li:before {
  content: "";
  position: absolute;
  background: #966636;
  width: 10px;
  height: 9.33333px;
  border-radius: 3px;
  top: -4.66667px;
  left: 1px;
}

.lightrope li:after {
  content: "";
  top: -14px;
  left: 9px;
  position: absolute;
  width: 52px;
  height: 18.66667px;
  border-bottom: solid #222 2px;
  border-radius: 50%;
}

.lightrope li:last-child:after {
  content: none;
}

.lightrope li:first-child {
  margin-left: -40px;
}

@-webkit-keyframes flash-1 {
  0%,
  100% {
    background: #00f7a5;
    box-shadow: 0px 4.66667px 24px 3px #d4d8d7;
  }
  50% {
    background: rgba(214, 218, 217, 0.4);
    box-shadow: 0px 4.66667px 24px 3px rgba(222, 229, 227, 0.2);
  }
}

@keyframes flash-1 {
  0%,
  100% {
    background: #f7d200;
    box-shadow: 0px 4.66667px 24px 3px #dbe0de;
  }
  50% {
    background: rgba(215, 222, 219, 0.4);
    box-shadow: 0px 4.66667px 24px 3px rgba(227, 232, 231, 0.2);
  }
}

@-webkit-keyframes flash-2 {
  0%,
  100% {
    background: rgb(226, 231, 231);
    box-shadow: 0px 4.66667px 24px 3px rgb(209, 219, 219);
  }
  50% {
    background: rgba(214, 232, 232, 0.4);
    box-shadow: 0px 4.66667px 24px 3px rgba(198, 205, 205, 0.2);
  }
}

@keyframes flash-2 {
  0%,
  100% {
    background: rgb(255, 187, 0);
    box-shadow: 0px 4.66667px 24px 3px rgb(219, 227, 227);
  }
  50% {
    background: rgba(255, 204, 0, 0.4);
    box-shadow: 0px 4.66667px 24px 3px rgba(207, 217, 217, 0.2);
  }
}

@-webkit-keyframes flash-3 {
  0%,
  100% {
    background: #f7a500;
    box-shadow: 0px 4.66667px 24px 3px #e8e4e7;
  }
  50% {
    background: rgba(234, 224, 230, 0.4);
    box-shadow: 0px 4.66667px 24px 3px rgba(247, 0, 148, 0.2);
  }
}

@keyframes flash-3 {
  0%,
  100% {
    background: #f7ad00;
    box-shadow: 0px 4.66667px 24px 3px #e0dade;
  }
  50% {
    background: rgba(221, 211, 217, 0.4);
    box-shadow: 0px 4.66667px 24px 3px rgba(247, 0, 148, 0.2);
  }
}
</style>
