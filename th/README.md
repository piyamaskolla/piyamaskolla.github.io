# ทดสอบภาษา Playing with CSS

This is my note about css for developing web site

## border-radius

* Use 'border-radius: 50%' to crop image as circle

  (actually, image is not cropped. just rendering on page as circle.)

<img src="/th/1378.jpg" width="200" style="border-radius:50%" />

```css
border-radius: 50%
```

<hr style="height:3px;color:#e8ca93;background-image:linear-gradient(-45deg,transparent,transparent 25%,currentColor 25%,currentColor 50%,transparent 50%,transparent 75%,currentColor 75%);background-size:10px 10px;">

* Set border-radius with pixels

<img src="img/2.jpg" width="200" style="margin:10px;border-radius:15px 50px;" />
<img src="img/3.jpg" width="200" style="margin:10px;border-radius:15px 50px 30px;" />

```css
border-radius:15px 50px;

border-radius:15px 50px 30px;
```

<hr style="height:3px;color:#e8ca93;background-image:linear-gradient(-45deg,transparent,transparent 25%,currentColor 25%,currentColor 50%,transparent 50%,transparent 75%,currentColor 75%);background-size:10px 10px;">

* Set border-radius with pixels, alternative

<img src="img/4.jpg" width="200" style="margin:10px;border-radius:10px/30px;" />
<img src="img/6.jpg" width="200" style="margin:10px;border-radius:30px/10px;" />

```css
border-radius:10px/30px;

border-radius:30px/10px;
```

## hr tag styling

https://freefrontend.com/html-hr-css/

<hr style="border:0;height:1px;background-image: -webkit-linear-gradient(left, #f0f0f0, #8c8b8b, #f0f0f0);background-image: -moz-linear-gradient(left, #f0f0f0, #8c8b8b, #f0f0f0);background-image: -ms-linear-gradient(left, #f0f0f0, #8c8b8b, #f0f0f0);background-image: -o-linear-gradient(left, #f0f0f0, #8c8b8b, #f0f0f0);">

<hr style="height:2px;color:red;background-image:linear-gradient(90deg, rgba(255,0,0,0), rgba(255,0,0,1) 50%, rgba(255,0,0,0) 100%);" />

<hr style="height:3px;color:#e8ca93;background-image:linear-gradient(-45deg,transparent,transparent 25%,currentColor 25%,currentColor 50%,transparent 50%,transparent 75%,currentColor 75%);background-size:10px 10px;">
