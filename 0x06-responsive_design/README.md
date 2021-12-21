# 0x06. Responsive design

-   By David Dias, Senior Software Engineer at HomeX

## Learning Objectives

-   Mobile-first design
-   Media-queries
-   Sizes to use for responsive web design
-   How to make a website responsive
-   The differences between responsive and adaptive design
-   CSS units that are used to make elements flexible

## Requirements

-   Allowed editors:  `vi`,  `vim`,  `emacs`
-   A  `README.md`  at the root of the project directory is mandatory
-   HTML and CSS have been rendered on Chrome 78 or more.

## Wireframe of the Techium project - mobile version

![](https://holbertonintranet.s3.amazonaws.com/uploads/medias/2020/4/a1f906a6a39eba8cb2f3d2877abc9ea84be51d9d.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOU5BHMTQX4%2F20211221%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20211221T211042Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=177485f42b3894b78415462bce2f6cbabb8dcc8d24ee890ecd7664ea36bdd0b8)



## Tasks

### 0. Fix the hero banner

Because we did some changes with the  `article.html`  page in the previous project, our hero banner background is no more visible. Let’s fix it!

But before that, to ensure we start on the same foot, you should use the starter HTML and CSS provided in the project description.

In your  `01-styles.css`  file

-   Inside the  `hero-homepage`  class selector, update some values:
    -   Property:  `background-position`, Value:  `65% 8rem`
    -   Property:  `background-size`, Value:  `90rem auto`
-   Inside the selector that targets  `section-inner`  class inside  `section-hero`  class
    -   Update the  `min-height`  to  `35vh`

**Final rendering of the Hero section should look something like this**

![](https://holbertonintranet.s3.amazonaws.com/uploads/medias/2020/2/f464d8346c36134ec4ae.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOU5BHMTQX4%2F20211221%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20211221T211043Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=160cefcde227a763b91cb86c4b30045eff7f89bfbebe4fa31c3bef73a9b269a5)

**Repo:**

-   GitHub repository:  `holbertonschool-web_front_end`
-   Directory:  `0x06-responsive_design`
-   File:  `01-styles.css, 01-index.html`


### 1. Make the container flexible


Using the previous file as the base, in your  `02-styles.css`  file update the  `.container`  selector by changing  `width`  to  `max-width`

If you resize your browser, you should see that the content is resizing.

**Wide screen:**

![](https://holbertonintranet.s3.amazonaws.com/uploads/medias/2020/2/5356d9d9b1de3ef692a1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOU5BHMTQX4%2F20211221%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20211221T211043Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=0567bfc998b4fa3e8b240ad2901d7966257aff05fb8f5e0001b606876b4d4dd6)

**Narrow screen:**

![](https://holbertonintranet.s3.amazonaws.com/uploads/medias/2020/2/9aeb51d5b4c9586ea05a.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOU5BHMTQX4%2F20211221%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20211221T211043Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=7be1e3aed01ec971ebc2d255bb27ead6ac60b21ac6b0e5d89debab3a0dcbc800)

**Repo:**

-   GitHub repository:  `holbertonschool-web_front_end`
-   Directory:  `0x06-responsive_design`
-   File:  `02-styles.css, 02-index.html`


### 2. Fix layout issues


Whatever the browser you use, it’s a good idea from now on, to toggle the device view.

In a normal situation, you should start with “mobile first” in mind and write your CSS first for the mobile. But because we already have a desktop version, we will exceptionally add some media-queries for mobile and tablet.

-   For extra large devices (no media queries)
-   For desktop / large devices (`max-width: 992px`)
-   For tablet / medium styles (`max-width: 767px`)
-   For mobile styles (`max-width: 480px`)

**We will put media queries at the end of each section to facilitate the reading but for performance reasons, the best practice is to unifiy all similar breakpoints at the end of the CSS file.**

**In your  `02-1-styles.css`  file:**

-   inside the  `/* Helpers`  section target all images inside the main section
    
    -   Property:  `width`, Value:  `100%`
    -   Property:  `height`, Value:  `auto`
-   inside the  `/* Section Latest news`  section, add a new media query (`max-width: 767px`)
    
    -   Target the  `row`  inside  `section-latest-news`
        -   Property:  `flex-direction`, Value:  `column`
-   inside the  `/* Grid`  section, at the end, add a new media query (`max-width: 767px`)
    
    -   First, redefine the variable  `section-padding`  and give that value:  `5rem 1.5rem`. And redefine the variable  `section-body-padding`  with  `2rem 0 0`
    -   Target the  `ul.row`  and the  `row`  class
        -   Property:  `flex-direction`, Value:  `column`
        -   Property:  `margin`, Value:  `0`
    -   Target all the classes that started with  `col-`
        -   Property:  `margin`, Value:  `0 0 3rem 0`
    -   Target the  `col-1-3`  and  `col-1-2`  classes
        -   Property:  `width`, Value:  `100%`

The  `navbar`  is not allowing the website to fit the window. We will temporarily hide it and create a mobile navbar later.

-   inside the  `/* Navbar`  section, at the end, add a new media query (`max-width: 767px`)
    -   Target the  `navbar-menu`  class
        -   Property:  `display`, Value:  `none`

You should now be able to easily view the website on a device of any screen/window size. I guess you are surprised that was so easy?!

**Rendering on wide screen**

![](https://holbertonintranet.s3.amazonaws.com/uploads/medias/2020/2/ec686cf75a8788a04bd5.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOU5BHMTQX4%2F20211221%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20211221T211043Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=18483d87c997a2dfddcc10be32834aaa75e12fdd60b4819707f57dc49db528d5)

**Rendering on screen with max-width: 767px**

![](https://holbertonintranet.s3.amazonaws.com/uploads/medias/2020/2/741a7a68af4e92b5c286.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOU5BHMTQX4%2F20211221%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20211221T211043Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=d39b7ed5d0036da6b751d8a641c98169f32658b84dc7aff3633c3130839e4b1e)

**Rendering on screen with max-width: 767px, you can see the navbar is hidden**

![](https://holbertonintranet.s3.amazonaws.com/uploads/medias/2020/2/3ee548024a868f4ce695.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOU5BHMTQX4%2F20211221%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20211221T211043Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=8b2421680b95b9102fef121ccadc3163f9ae2ffb068941f65de48c09e2ab8bbd)

**Repo:**

-   GitHub repository:  `holbertonschool-web_front_end`
-   Directory:  `0x06-responsive_design`
-   File:  `02-1-styles.css, 02-1-index.html`

### 3. Generate images with responsive breakpoints


Go to  Responsive Breakpoints.

In Breakpoints generation settings:

-   Resolution: From  `380`  to  `1200`
-   Size step:  `25`
-   Maximum images:  `3`
-   Art-direction:  `Desktops`
-   Upload your images one at a time:
    -   `pic-about-01.jpg`
    -   `pic-article-01.jpg`
    -   `pic-article-02.jpg`
    -   `pic-article-03.jpg`
-   Copy the markup for the  `<img>`  tags and replace your current  `<img>`  tags with it.
-   Download the images and place them into the  `images`  directory

Here’s an example on how to add different resolutions of the same image

```
<img
    sizes="(max-width: 3000px) 40vw, 1200px"
    srcset="
      about-us_icoxoo_c_scale,w_380.jpg 380w,
      about-us_icoxoo_c_scale,w_853.jpg 853w,
      about-us_icoxoo_c_scale,w_1200.jpg 1200w"
    src="about-us_icoxoo_c_scale,w_1200.jpg"
    alt="">

```

**Repo:**

-   GitHub repository:  `holbertonschool-web_front_end`
-   Directory:  `0x06-responsive_design`
-   File:  `03-index.html, 03-styles.css`



### 4. Create the mobile icon and hide the menu



We want to have a clickable icon that shows and hide our navigation. We don’t want to use JavaScript but find a pure HTML / CSS way. We learned that input type checkbox have a checked - unchecked state. So we are going to use this for our menu.

Using the previous files as the base for this project

**Changes to the HTML**

Just before the  `<nav class="navbar-menu">`

-   Create an input (which will be not visible)
    
    -   Class:  `menu-btn`
    -   Type:  `checkbox`
    -   Id:  `menu-btn`
-   Create a label
    
    -   Class:  `menu-icon`
    -   For:  `menu-btn`
    -   In the label create an empty  `span`  with the  `navicon`  class.

**Changes to the CSS**

Inside the  `/* Navbar`  section, and inside the  `767px`  media query

-   Create the  `root`  global selector. We want to override a CSS variable:
    
    -   Variable name:  `nav-item-margin`, Value:  `0`
-   In the selector for the  `navbar-menu`  class
    
    -   Property:  `flex`, Value:  `1`
-   Target the  `nav`  class in  `header`  class
    
    -   Property:  `flex-direction`, Value:  `column`  (for the element of the menu be below each other)
    -   Property:  `overflow`, Value:  `hidden`
    -   Property:  `max-height`, Value:  `0`  (the display property can’t be animated, so we use the height that can be animated)
    -   Property:  `transition`, Value:  `max-height .2s ease-out`

**Rendering on screen with max-width: 767px, the check box is the input**

![](https://holbertonintranet.s3.amazonaws.com/uploads/medias/2020/2/17e4ace4fe8c91201e0a.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOU5BHMTQX4%2F20211221%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20211221T211043Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=385bfa190837b236b67c0f1ca50bb5944c3c135723340dff819a7e288e810286)

**Repo:**

-   GitHub repository:  `holbertonschool-web_front_end`
-   Directory:  `0x06-responsive_design`
-   File:  `04-index.html, 04-styles.css`


### 5. Hamburger!


Let’s now, use a little bit of CSS magic to create an “hamburger” icon just with CSS.

Using the previous files as the base for this task:

-   Target the  `menu-icon`  class inside the  `header`  class
    
    -   Property:  `cursor`, Value:  `pointer`
    -   Property:  `padding`, Value:  `2.5rem`
    -   Property:  `position`, Value:  `relative`
    -   Property:  `user-select`, Value:  `none`
-   Target the  `navicon`  class inside the`menu-icon`  class which is inside the  `header`  class
    
    -   Property:  `background`, Value: point to the  `color-white`  variable
    -   Property:  `display`, Value:  `block`
    -   Property:  `width`, Value:  `2rem`
    -   Property:  `height`, Value:  `.2rem`
    -   Property:  `position`, Value:  `relative`
    -   Property:  `transition`, Value:  `background .2s ease-out`
-   Target the  `before`  and  `after`  pseudo elements of the  `navicon`  class inside the  `menu-icon`  class which is inside the  `header`  class
    
    -   Property:  `content`, Value: empty string
    -   Property:  `display`, Value:  `block`
    -   Property:  `width`, Value:  `100%`
    -   Property:  `height`, Value:  `100%`
    -   Property:  `position`, Value:  `absolute`
    -   Property:  `background`, Value: point to the  `color-white`  variable
    -   Property:  `transition`, Value:  `all .2s ease-out`
-   Target only the  `before`  pseudo element of the  `navicon`  class inside the  `menu-icon`  class which is inside the  `header`  class
    
    -   Property:  `top`, Value:  `.7rem`
-   Target only the  `after`  pseudo element of the  `navicon`  class inside the  `menu-icon`  class which is inside the  `header`  class
    
    -   Property:  `top`, Value:  `-.7rem`

**Rendering of the hamburger on max-width: 767px**

![](https://holbertonintranet.s3.amazonaws.com/uploads/medias/2020/2/87f845e172312626e0fc.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOU5BHMTQX4%2F20211221%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20211221T211043Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=c83b1f3e9bf43277958519ee1feca09c557737f8e8bfa063ad726e1d3c7c9bfb)

**Repo:**

-   GitHub repository:  `holbertonschool-web_front_end`
-   Directory:  `0x06-responsive_design`
-   File:  `05-index.html, 05-styles.css`


### 6. Add the behavior based on menu-btn state


**in your CSS file:**

-   Create a new comment section  `/* menu btn */`
-   Target  `menu-btn`  class inside  `header`  class
    -   Property:  `display`, Value:  `none`
-   Target  `navbar-menu`  class when the  `menu-btn`  class element is checked
    -   Property:  `display`, Value:  `block`
-   Target  `nav`  class inside  `navbar-menu`  class when the  `menu-btn`  class element is checked
    
    -   Property:  `max-height`, Value:  `100%`
    -   Property:  `overflow`, Value:  `inherit`
-   At the end of the  `/* Section HERO`  section, create a new media query for  `max-width: 767px`
    
    -   Target the  `section-hero`  class
        -   Property:  `margin`, Value:  `-0.1rem 0`
    -   Target the  `hero-homepage`  class
        -   Property:  `background-position`, Value:  `85% 0`
    -   Target the  `section-body`  class inside  `section-hero`  class
        -   Property:  `padding`, Value:  `2rem`

Going back to the  `/* menu btn */`  section

-   Target the  `navicon`  class inside  `menu-icon`  class sibling to the  `menu-btn`  when it is checked and inside  `header`  class
    -   Property:  `background`, Value:  `transparent`
-   Target the before state of  `navicon`  class inside  `menu-icon`  class sibling to the  `menu-btn`  when it is checked and inside  `header`  class element
    -   Property:  `transform`, Value:  `rotate(-45deg)`
-   Target the after state of  `navicon`  class inside  `menu-icon`  class sibling to the  `menu-btn`  when it is checked and inside  `header`  class element
    -   Property:  `transform`, Value:  `rotate(45deg)`
-   Target the before and after states of  `navicon`  class when inside  `menu-icon`  class sibling to the  `menu-btn`  class when it is checked and inside  `header`  class
    
    -   Property:  `top`, Value:  `0`
-   Create a new media query for  `max-width: 767px`
    
    -   Target the root and redefine the  `header-padding`  variable with  `2rem 0 0`
    -   Target  `header`  class
        -   Property:  `background`, Value: point to the  `color-black`  variable
    -   Target the  `header-container`  class
        -   Property:  `flex-wrap`, Value:  `wrap`
        -   Property:  `padding`, Value:  `0 1.5rem`
    -   Target the  `menu-icon`  class inside the  `header`  class
        -   Property:  `display`, Value:  `block`
-   Create a new media query for  `max-width: 480px`
    
    -   Target the  `header-logo`  class
        -   Property:  `flex-basis`, Value:  `70%`
-   Create a new media query with  `min-width: 481px`  and  `max-width: 767px`
    
    -   Target the  `header-logo`  class
        -   Property:  `flex-basis`, Value:  `79%`
-   Find the  `.header .menu-icon`  selector and add  `display: none;`  to hide the menu icon when we are on desktop mode.
    

**Rendering on screen with max-width: 767px, when the input is unchecked the menu is not displayed**

![](https://holbertonintranet.s3.amazonaws.com/uploads/medias/2020/2/b9f67a5f3bdfdbd4cd88.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOU5BHMTQX4%2F20211221%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20211221T211043Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=c02b6a723636e873a6e229f099882b0d9014e6a2728e739dfb6665de9fa0a808)

**Rendering on screen with max-width: 767 px, when input is checked the menu block is displayed**

![](https://holbertonintranet.s3.amazonaws.com/uploads/medias/2020/2/fe0ae0bfb739a19ae933.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOU5BHMTQX4%2F20211221%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20211221T211043Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=73c0ee5bcdb3e44a9cbce4a04a4dcf827dfef9bd4232f2a1fba8db7a08e23d3a)

**Rendering on desktop screen, menu icon is not visible**

![](https://holbertonintranet.s3.amazonaws.com/uploads/medias/2020/2/aa52c972d075f360f8bc.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOU5BHMTQX4%2F20211221%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20211221T211043Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=7e9ae673edec0036d19c7372ca9b525444fa3bf1e445172a7ddf8c891fc1b6ec)

**Repo:**

-   GitHub repository:  `holbertonschool-web_front_end`
-   Directory:  `0x06-responsive_design`
-   File:  `06-index.html, 06-styles.css`


### 7. Make the font size responsive


We have multiple ways to make the typography responsive. The basic way would be to create multiple media queries and set a different font-size. But because we are using REM that are based on 62.5% (defined in the html selector). Changing that value would change proportionally all font sizes.

In your CSS file at the end of the  `/* Base`  section

-   Create a new media query for  `max-width: 480px`
    -   Target the  `html`  element
        -   Property:  `font-size`, Value:  `57%`
-   Create a new media query for  `min-width: 481px`  and  `max-width: 767px`
    -   Target the  `html`  element
        -   Property:  `font-size`, Value  `60%`

This is a simple way to achieve responsive typography. More complex options can also be used to have a more granular control over the font sizes.

**Repo:**

-   GitHub repository:  `holbertonschool-web_front_end`
-   Directory:  `0x06-responsive_design`
-   File:  `07-index.html, 07-styles.css`


### 8. Improve the "Works" section


in  `08-styles.css`, at the end of the  `/* Card WORK`

-   Create a new media query of  `max-width: 767px`
    -   Target the  `card-inner`  class inside the  `card-work`  class
        -   Property: variable called  `text-color`, Value: point to  `color-white`  variable
        -   Property:  `position`, Value:  `relative`
    -   Target the  `card-title`  class inside the  `card-work`  class
        -   Property:  `opacity`, Value:  `1`
    -   Target all  `a`  tags inside  `.card-work .card-title`  class:
        -   Property:  `padding`, Value:  `2rem 1rem 0 1rem`

**Rendering on screen of max-width: 767px**

![](https://holbertonintranet.s3.amazonaws.com/uploads/medias/2020/2/bd8d10a18201a8796172.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOU5BHMTQX4%2F20211221%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20211221T211043Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=9c0c651c0a2ab5adacb9e5b47f9799e526986377bb89c1411ad32870edb4ba98)

**Repo:**

-   GitHub repository:  `holbertonschool-web_front_end`
-   Directory:  `0x06-responsive_design`
-   File:  `08-index.html, 08-styles.css`


### 9. Improve the "Footer" section

in  `09-styles.css`, in the  `/* Footer`  section

-   Create a new media query of  `max-width: 767px`.
    -   Create the  `root`  global selector. We want to override a CSS variable:
        -   Variable name:  `footer-padding`, Value:  `5rem 2rem 1rem`
    -   Target  `.social.nav`  inside the  `footer`  class and the  `footer-nav`  class inside the  `footer`  class
        -   Property:  `text-align`, Value:  `center`
    -   Target the adjacent  `li`to the  `li`  inside the  `.social.nav`  and the adjacent  `li`  to the  `li`  inside  `.footer-nav`  (to easily add a left padding starting on the second  `li`)
        -   Property:  `padding-left`, Value:`2rem`

**Rendering on screen of max-width: 767px**

![](https://holbertonintranet.s3.amazonaws.com/uploads/medias/2020/2/a12e272db34a9c4e47e9.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOU5BHMTQX4%2F20211221%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20211221T211043Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=ddde9aba595b13b17a2a0cf1bcad1d3a0067de5718e94636019516183449ef4d)

**Repo:**

-   GitHub repository:  `holbertonschool-web_front_end`
-   Directory:  `0x06-responsive_design`
-   File:  `09-index.html, 09-styles.css`


### 10. Fix the top header background


In  `10-index.html`, in the  `body`  tag, add the class  `article-page`

In  `10-styles.css`, in the  `/* Section HERO`  section, just before the media query:

-   Target  `section-hero`  class inside  `article-page`  class
    -   Property:  `margin-top`, Value:  `-8.5rem`
    -   Property:  `padding-top`, Value:  `5rem`

**Rendering of  `header`  and  `section-hero`  class elements**

![](https://holbertonintranet.s3.amazonaws.com/uploads/medias/2020/2/7a38d40512c0c6edb211.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOU5BHMTQX4%2F20211221%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20211221T211043Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=a6856d9f108a24ec7fc0bc057890428f5ff1e242432495e8970e720fb5d67438)

**Repo:**

-   GitHub repository:  `holbertonschool-web_front_end`
-   Directory:  `0x06-responsive_design`
-   File:  `10-index.html, 10-styles.css`

