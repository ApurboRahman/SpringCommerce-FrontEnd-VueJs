<template>
  <div>
    <!-- Breadcrumb Section Begin -->
    <div class="breacrumb-section">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="breadcrumb-text">
              <router-link to="/">
                <i class="fa fa-home"></i> Home
              </router-link>
              <span>
                <router-link to="/shop">Shop</router-link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Breadcrumb Section Begin -->

    <!-- Product Shop Section Begin -->
    <section class="product-shop spad">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-6 col-sm-8 order-2 order-lg-1 produts-sidebar-filter">
            <div class="filter-widget">
              <h4 class="fw-title">Categories</h4>
              <ul class="filter-catagories">
                <li>
                  <a @click="selectByGenderId(1)">Men</a>
                </li>
                <li>
                  <a @click="selectByGenderId(2)">Women</a>
                </li>
                <li>
                  <a @click="selectByGenderId(3)">Kids</a>
                </li>
              </ul>
            </div>
            <div class="filter-widget">
              <h4 class="fw-title">Brand</h4>
              <div class="fw-brand-check">
                <div class="bc-item">
                  <label for="bc-calvin">
                    Calvin Klein
                    <input type="checkbox" id="bc-calvin" />
                    <span class="checkmark"></span>
                  </label>
                </div>
                <div class="bc-item">
                  <label for="bc-diesel">
                    Diesel
                    <input type="checkbox" id="bc-diesel" />
                    <span class="checkmark"></span>
                  </label>
                </div>
                <div class="bc-item">
                  <label for="bc-polo">
                    Polo
                    <input type="checkbox" id="bc-polo" />
                    <span class="checkmark"></span>
                  </label>
                </div>
                <div class="bc-item">
                  <label for="bc-tommy">
                    Tommy Hilfiger
                    <input type="checkbox" id="bc-tommy" />
                    <span class="checkmark"></span>
                  </label>
                </div>
              </div>
            </div>
            <div class="filter-widget">
              <h4 class="fw-title">Price</h4>
              <div class="filter-range-wrap">
                <div class="range-slider">
                  <div class="price-input">
                    <input type="text" id="minamount" />
                    <input type="text" id="maxamount" />
                  </div>
                </div>
                <div
                  class="price-range ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"
                  data-min="33"
                  data-max="98"
                >
                  <div class="ui-slider-range ui-corner-all ui-widget-header"></div>
                  <span tabindex="0" class="ui-slider-handle ui-corner-all ui-state-default"></span>
                  <span tabindex="0" class="ui-slider-handle ui-corner-all ui-state-default"></span>
                </div>
              </div>
              <a href="#" class="filter-btn">Filter</a>
            </div>
            <div class="filter-widget">
              <h4 class="fw-title">Color</h4>
              <div class="fw-color-choose">
                <div class="cs-item">
                  <input type="radio" id="cs-black" />
                  <label class="cs-black" for="cs-black">Black</label>
                </div>
                <div class="cs-item">
                  <input type="radio" id="cs-violet" />
                  <label class="cs-violet" for="cs-violet">Violet</label>
                </div>
                <div class="cs-item">
                  <input type="radio" id="cs-blue" />
                  <label class="cs-blue" for="cs-blue">Blue</label>
                </div>
                <div class="cs-item">
                  <input type="radio" id="cs-yellow" />
                  <label class="cs-yellow" for="cs-yellow">Yellow</label>
                </div>
                <div class="cs-item">
                  <input type="radio" id="cs-red" />
                  <label class="cs-red" for="cs-red">Red</label>
                </div>
                <div class="cs-item">
                  <input type="radio" id="cs-green" />
                  <label class="cs-green" for="cs-green">Green</label>
                </div>
              </div>
            </div>
            <div class="filter-widget">
              <h4 class="fw-title">Size</h4>
              <div class="fw-size-choose">
                <div class="sc-item">
                  <input type="radio" id="s-size" />
                  <label for="s-size">s</label>
                </div>
                <div class="sc-item">
                  <input type="radio" id="m-size" />
                  <label for="m-size">m</label>
                </div>
                <div class="sc-item">
                  <input type="radio" id="l-size" />
                  <label for="l-size">l</label>
                </div>
                <div class="sc-item">
                  <input type="radio" id="xs-size" />
                  <label for="xs-size">xs</label>
                </div>
              </div>
            </div>
            <div class="filter-widget">
              <h4 class="fw-title">Tags</h4>
              <div class="fw-tags">
                <a href="#">Towel</a>
                <a href="#">Shoes</a>
                <a href="#">Coat</a>
                <a href="#">Dresses</a>
                <a href="#">Trousers</a>
                <a href="#">Men's hats</a>
                <a href="#">Backpack</a>
              </div>
            </div>
          </div>
          <div class="col-lg-9 order-1 order-lg-2">
            <div class="product-show-option">
              <div class="row">
                <div class="col-lg-7 col-md-7">
                  <div class="select-option">
                    <select class="sorting">
                      <option value>Default Sorting</option>
                    </select>
                    <select class="p-show">
                      <option value>Show:</option>
                    </select>
                  </div>
                </div>
                <div class="col-lg-5 col-md-5 text-right">
                  <p>Show 01- 09 Of 36 Product</p>
                </div>
              </div>
            </div>
            <div class="product-list">
              <div class="row">
                <!--Dynamic Product insert Start -->
                <div
                  class="col-lg-4 col-sm-6"
                  v-for="(item, i) in productLists"
                  v-bind:key="i"
                >
                  <div class="product-item">
                    <div class="pi-pic">
                      <img :src="getImgUrl(item.product_image)" alt />
                      <div class="sale pp-sale">Sale</div>
                      <div class="icon">
                        <i class="icon_heart_alt" title="add to favorite"
                           v-on:click="addToFavorite(item)"></i>
                      </div>
                      <ul>
                        <li
                          class="w-icon active"
                          title="add to cart"
                          v-on:click="addItemToCart(item)">
                          <a href="#">
                            <i class="icon_bag_alt"></i>
                          </a>
                        </li>
                        <li class="quick-view">
                          <a href="#">+ Quick View</a>
                        </li>
                        <li class="w-icon">
                          <a href="#">
                            <i class="fa fa-random"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="pi-text">
                      <div class="catagory-name">{{item.product_category}}</div>
                      <a href="#">
                        <h5>{{item.product_name}}</h5>
                      </a>
                      <div class="product-price">
                        {{item.product_price}}
                        <span>$35.00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="loading-more">
              <i class="icon_loading"></i>
              <a href="#">Loading More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Product Shop Section End -->
  </div>
</template>

<script>
import {mapState,mapActions} from 'vuex'
export default {
  name: "Shop",
  data() {
    return {
      productList: [],
    };
  },
  methods: {
    ...mapActions(['selectByGender','getAllProducts','addToCart','addToFavorite']),
    getImgUrl(pic) {
      return require("../assets/img/products/" + pic);
    },

    selectByGenderId(id) {
      this.selectByGender(id);
    },
    addItemToCart(item) {
      this.addToCart(item);
    },
    addItemToFavorite(item) {
      this.addToFavorite(item);
    }
  },
  mounted() {
    this.getAllProducts();
  },
  computed: {
    ...mapState(["productLists"])
  }
};
</script>