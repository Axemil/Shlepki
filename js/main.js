$(document).ready(function () {
  

    //PHONE LIST ON MOBILE
    $('#list_phone-numbers').click(() => {
        $('.mobile-header_phone-numbers_wrapper').addClass('pop-up-active');
    })
    $('.mobile-header_phone-numbers_cross-btn').click(() => {
        $('.mobile-header_phone-numbers_wrapper').removeClass('pop-up-active');
    })
    $('.mobile-header_phone-numbers_wrapper').click(() => {
        $('.mobile-header_phone-numbers_wrapper').removeClass('pop-up-active');
    })


    //SEARCH MOBILE
    $('#search-mobile').click(() => {
        $('.mobile-header_search_wrapper').toggleClass('pop-up-active-block');
    })
    // $('.mobile-header_search_wrapper').click(() => {
    //     $('.mobile-header_search_wrapper').removeClass('pop-up-active-block');
    // })

    $('#abort-input').click(() => {
        $('#searcher').val('');
    })

    // MOBILE MENU

    $('#open_mobile-menu').click(() => {
        $('.mobile-menu').removeClass('mobile-menu_unactive');
    })

    $('#close-mobile-menu').click(() => {
        $('.mobile-menu').addClass('mobile-menu_unactive');
    })

    //DESKTOP SEARCHER
    $('#searchingField').focus(() => {
        $('.desktop-search-result').toggle()
    })

    $('#searchingField').focusout(() => {
        $('.desktop-search-result').toggle()
    })



    //SWIPRER ON MAIN PAGE
    var swiper = new Swiper('.swiper-container', {
        grabCursor: true,
        loop: true,
        breakpoints: {
            900: {
                
            }
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
      });


    // HIDER ON MOBILE
    $('.main-description-hider button').click(() => {
        $('.main-description-hider').hide();
        $('.main-description p').css('height', 'auto');
    })

    // FOOTER DROPDOWN

    $('.footer-nav-list_item p').click((e) => {
        event.target.querySelector('span').classList.toggle('flip-icon')
        event.target.nextElementSibling.querySelector('ul').classList.toggle('footer-show-list')
    })

    //FILTER

    $('.filter-mobile').click(() => {
        $('.main-mobile-filter').toggle();
    })

    $('.main-mobile-filter-close').click(() => {
        $('.main-mobile-filter').toggle();
    })
    
    $('.search-products').click(() => {
      $('.main-mobile-filter').toggle();
    })

    //DROPDOWNS FOR FILTERS
    $('.filter-item>p').click(() => {
      event.currentTarget.classList.toggle('filter-active-item');
      event.currentTarget.querySelector('svg').classList.toggle('flip-icon')
      if(event.currentTarget.nextElementSibling.id === 'colors_checkboxes'){
        event.currentTarget.nextElementSibling.classList.toggle('open-filter-flex')
      } else {
        event.currentTarget.nextElementSibling.classList.toggle('open-filter')
      }
    })




    // DROP DOWN
    class Dropdown {
        constructor(name) {
          this.dropdowns = document.querySelectorAll(name);
      
          if (this.dropdowns.length <= 0) return false;
      
          this.init();
        }
      
        init() {
          const dropdowns = Array.from(this.dropdowns);
          dropdowns.forEach(dropdown => {
            this.initDropdown(dropdown)
          })
        }
      
        initDropdown(dropdown) {
          const selectElement = dropdown.getElementsByTagName("select")[0];
          const options = Array.from(selectElement.options);
      
          /* For each element, create a new DIV that will act as the selected item: */
          const selectedOption = this.createElement('div', 'a-dropdown__selected', selectElement.options[selectElement.selectedIndex].innerHTML);
          dropdown.appendChild(selectedOption);
      
          /* For each element, create a new DIV that will contain the option list: */
          const optionsElement = document.createElement("div");
          optionsElement.setAttribute("class", "a-dropdown__items -hidden");
      
          options.forEach(option => {
            const optionElement = this.createElement('div', 'a-dropdown__item', option.innerHTML);
      
            if (selectedOption.innerHTML == optionElement.innerHTML) {
              optionElement.classList.add('-selected')
            }
      
            optionElement.addEventListener("click", () => {
              this.handleClickedOption(dropdown, options, optionElement, selectedOption, selectElement);
            });
      
            optionsElement.appendChild(optionElement);
          });
      
          dropdown.appendChild(optionsElement);
      
          selectedOption.addEventListener("click", (e) => {
            /* When the select box is clicked, close any other select boxes,
            and open/close the current select box: */
            e.stopPropagation();
            this.closeAllSelect(dropdown);
            optionsElement.classList.toggle("-hidden");
            dropdown.classList.toggle("-isOpened");
          });
      
          // /* If the user clicks anywhere outside the select box,
          // then close all select boxes: */
          document.addEventListener("click", this.closeAllSelect);
        }
      
        createElement(tag, className, content) {
          const element = document.createElement(tag);
          element.classList.add(className);
          element.innerHTML = content;
      
          return element
        }
      
        handleClickedOption(dropdown, options, optionElement, selectedOption, selectElement) {
          const items = dropdown.querySelectorAll('.a-dropdown__item');
          let selectedIndex = 0;
          /* When an item is clicked, update the original select box,
          and the selected item: */
          options.forEach((option, index) => {
            if (optionElement.innerHTML == option.innerHTML) {
              selectedOption.innerHTML = optionElement.innerHTML;
              this.handleClass(items, 'remove', '-selected')
              optionElement.classList.add("-selected");
              selectedIndex = index;
            }
          });
          selectedOption.click();
           // Update select element value
          selectElement.selectedIndex = selectedIndex;
          // Fire change event on real select
          let changeEvent = document.createEvent("HTMLEvents");
          changeEvent.initEvent("change", false, true);
          selectElement.dispatchEvent(changeEvent);
        }
      
        closeAllSelect(currentDropdown) {
          /* A function that will close all select boxes in the document,
          except the current select box: */
          if (this.dropdowns) {
            const dropdowns = Array.from(this.dropdowns);
            dropdowns.forEach(dropdown => {
              if (dropdown != currentDropdown) {
                dropdown.classList.remove('-isOpened')
                dropdown.querySelector('.a-dropdown__items').classList.add('-hidden')
              }
            })
          }
        }
        
        handleClass (array, operator, className) {
          array.forEach(item => {
            operator == 'add' ? item.classList.add(className) : item.classList.remove(className)
          })
        }
      }
      
      new Dropdown('.a-dropdown');
    

      $(".js-range-slider").ionRangeSlider({
        type: "double",
        min: 0,
        max: 10000,
        from: 50,
        to: 5000,
      });
});