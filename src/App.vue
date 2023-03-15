<template>
<!-- <HeaderComponent/>  -->
  <router-view/>
  <!-- <FooterComponent /> -->
</template>
<script>
// import HeaderComponent from "@/components/HeaderComponent";
// import FooterComponent from "@/components/FooterComponent";
export default {
  name: "App",
   components: {
//    FooterComponent,
    // HeaderComponent,
   },
};
</script>

<style>

 @font-face {
        font-family: 'Poppins', sans-serif;
        src: url(../src/assets/font-family/bold.woff2);
        font-weight: 700;
    }
    
    @font-face {
        font-family: 'Poppins', sans-serif;
        src: url(../src/assets/font-family/bold700.woff2);
        font-weight: 600;
    }
    
    @font-face {
        font-family: 'Poppins', sans-serif;
        src: url(../src/assets/font-family/font-2.woff2);
        font-weight: 500;
    }
    
    @font-face {
        font-family: 'Poppins', sans-serif;
        src: url(../src/assets/font-family/font-3.woff2);
        font-weight: 400;
    }
    @font-face {
        font-family: 'Poppins', sans-serif;
        src: url(../src/assets/font-family/font1.woff2);
        font-weight: 500;
    }
    @font-face {
        font-family: 'Poppins', sans-serif;
        src: url(../src/assets/font-family/font-4.woff);
        font-weight: 400;
    }
    @font-face {
        font-family: 'Poppins', sans-serif;
        src: url(../src/assets/font-family/regular.woff2);
        font-weight: 400;
    }
    @font-face {
        font-family: 'Poppins', sans-serif;
        src: url(../src/assets/font-family/semibold.woff2);
        font-weight: 400;
    }
    @font-face {
        font-family: 'Poppins', sans-serif;
        src: url(../src/assets/font-family/solidbold.woff2);
        font-weight: 400;
    }
    
    body {
        font-family: 'Poppins', sans-serif !important;
    }
:root{
  /********************************homeview************************************/
--text-color:#8b8b8b;
--navy-blue:#303e67;
--icon-color:#7081b97d;
--list-color:#68728c;
--hr-black:#1d2c48;
--hr-border:#e3ebf6;
--text-box:#6c6e6e;
--hr-bg:#f2f5f7;
--input-border:#ced4da;
--icon-bg:#303e6714;
--red:red;
--blue:blue;
--table-row:#e9ecef;
--white:#fff;

/***************************font-size*******************************/
--fs-1:10px;
--fs-2:12px;
--fs-3:14px;
--fs-4:16px;
--fs-5:18px;
}
section{
    padding: 70px 0;
}
.pagination {
    justify-content: end !important;
}
.pagination_box{
     color: var(--bright-blue) !important;
}

.page-link {
    z-index: 3 !important;
    color: var(--text-color) !important;
    background-color: transparent !important;
    border-color: var(--hr-border) !important;
    box-shadow: none !important;
    border-radius: none;
}

.page-item.active .page-link {
    z-index: 3 !important;
    color: var(--text-color) !important;
     border-color: var(--hr-border) !important;
    background-color: #f1f1f1 !important
}
.text-danger {
    color: #dc3545!important;
    font-size: 14px;
    font-weight: 500;
}
.vue-skeletor {
  position: relative;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.12);
}

.vue-skeletor:not(.vue-skeletor--shimmerless):after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: translateX(-100%);
  background-image: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 0.3),
    rgba(37, 22, 22, 0)
  );
  animation: shimmer 1.5s infinite;
  content: "";
}

.vue-skeletor--rect,
.vue-skeletor--circle {
  display: block;
}

.vue-skeletor--circle {
  border-radius: 50%;
}

.vue-skeletor--pill,
.vue-skeletor--text {
  border-radius: 9999px;
}

.vue-skeletor--text {
  line-height: 1;
  display: inline-block;
  width: 100%;
  height: inherit;
  vertical-align: middle;
  top: -1px;
}
  span.vue-star-rating-pointer.vue-star-rating-star svg {
    width: 35px;
    height: 35px;
    padding-left: 10px;
}
@keyframes shimmer {
  100% {
    transform: translateX(100%);
  }
}
</style>
