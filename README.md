#  Code Snippets for C.M.

The CSS.css and JAVASCRIPT.js in the `/src/` folder contains the code that needs to be copied into the VWO CSS and Javascript overrides

## HTML Components

The entire page must be wrapped in `<div class="custom-page"></div>`

#### Responsive Image
```
<img class="img-responsive" src="https://images.unsplash.com/photo-1468956398224-6d6f66e22c35?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5d2e4d45d037053be722233b79bd0510&auto=format&fit=crop&w=3910&q=80" alt="" title="Image Title" />
```

#### Intro
```
<div class="intro indent">
	<p>This is the intro paragraph. It has padding on the top and bottom.</p>
</div>
```

#### Heading
```
<h2 class="indent">This is a simple heading.</h2>
```

#### Wine Lock Up - With Image Left
**Note:** The register button must have `id="reservation-pinnacle"` for the overlay to work.

```
<div class="wine layoutfix">
	<div class="bottle">
		<img class="img-responsive" src="https://www.cellarmasters.com.au/Assets/Images/icon-reservations/LanghorneCreek_ProductImage.jpg" alt="" />
	</div>
	<div class="info">
		<div class="notes">
			<span class="semi-bold">This is the wine lockup <b>with</b> an image</span> <br />
			<span class="semi-bold">Attribute:</span> Description.<br />
			<span class="semi-bold">Attribute:</span> Description
		</div>
		<div class="ctas layoutfix">
			<div class="register">
				<p class="semi-bold">Lorem Ipsum.</p>
				<p class="price">$999.99 <span>(6 pack)</span></p>
				<p>+ delivery &amp; handling fee* <br/>
				<span class="semi-bold">Product Code:</span> RXXXX</p>
				<a id="reservation-pinnacle" name="bar" href="#event-1" onclick="toggle_visibility('fallback');" class="button">Register your interest</a>
				<div id="fallback" style="display: none;">
					<span style="background-color: yellow;">Form didn't pop up? <a href="https://cellarmasters.au1.qualtrics.com/jfe/form/SV_72tIPvmSJYf9QKF" target="_blank">Click here</a></span>
				</div>
			</div>
			<div class="buy">
				<p class="semi-bold">Lorem Ipsum.</p>
				<p class="price">$999.99 <span>(6 pack)</span></p>
				<p>+ delivery &amp; handling fee* <br/>
				<span class="semi-bold">Product Code:</span> RXXXX</p>
				<a href="https://www.cellarmasters.com.au/red/cabernet-blends/wine/langhorne-creek-area-red-blend-r2205t" class="button" target="_blank">Buy Now</a>
			</div>
		</div>
	</div>
</div>
```

#### Wine Lockup - No Image
**Note:** The register button must have `id="reservation-pinnacle"` for the overlay to work.

```
<div class="wine no-image layoutfix">
	<div class="info">
		<div class="notes">
			<span class="semi-bold">This is the wine lockup <b>without</b> an image</span> <br />
			<span class="semi-bold">Attribute:</span> Description.<br />
			<span class="semi-bold">Attribute:</span> Description
		</div>
		<div class="ctas layoutfix">
			<div class="register">
				<p class="semi-bold">Lorem Ipsum.</p>
				<p class="price">$999.99 <span>(6 pack)</span></p>
				<p>+ delivery &amp; handling fee* <br/>
				<span class="semi-bold">Product Code:</span> RXXXX</p>
				<a id="reservation-pinnacle" name="bar" href="#event-1" onclick="toggle_visibility('fallback');" class="register-button">Register your interest</a>
				<div id="fallback" style="display: none;">
					<span style="background-color: yellow;">Form didn't pop up? <a href="https://cellarmasters.au1.qualtrics.com/jfe/form/SV_72tIPvmSJYf9QKF" target="_blank">Click here</a></span>
				</div>
			</div>
			<div class="buy">
				<p class="semi-bold">Lorem Ipsum.</p>
				<p class="price">$999.99 <span>(6 pack)</span></p>
				<p>+ delivery &amp; handling fee* <br/>
				<span class="semi-bold">Product Code:</span> RXXXX</p>
				<a href="https://www.cellarmasters.com.au/red/cabernet-blends/wine/langhorne-creek-area-red-blend-r2205t" class="buy-button" target="_blank">Buy Now</a>
			</div>
		</div>
	</div>
</div>
```

#### Content Block - No Image
```
<div class="large-margin-bottom no-image">
	<div class="indent">
		<h2>Title and Paragraph - No Image</h2>
		<p>Lorem</p>
	</div>
</div>
```

#### Content Block - Left Aligned Image
```
<div class="left-image layoutfix">
	<img class="img-responsive" src="https://www.cellarmasters.com.au/Assets/Images/icon-reservations/LanghorneCreek-Bleasdale.jpg" alt="" />
	<div class="indent">
		<h2>Title and Paragraph - Image Left Aligned</h2>
		<p>Lorem</p>
	</div>
</div>
```

#### Content Block - Right Aligned Image
```
<div class="right-image layoutfix">
	<img class="img-responsive" src="https://www.cellarmasters.com.au/Assets/Images/icon-reservations/LanghorneCreek-Bleasdale.jpg" alt="" />
	<div class="indent">
		<h2>Title and Paragraph - Image Right Aligned</h2>
		<p>Lorem</p>
	</div>
</div>
```

#### YouTube Embed
```
<div class="youtube medium-margin-bottom">
	<h2 class="indent">Responsive YouTube Video</h2>
	<div class="embed-responsive">
		<iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
	</div>
</div>
```

## Available CSS Classes
There are certain classes avaliable to use.
 * `indent`  Adds 10px padding to the left and right of content.
 * `large-margin-top` Adds 60px margin to the top
 * `medium-margin-top` Adds 40px margin to the top
 * `small-margin-top` Adds 20px margin to the top
 * `large-margin-bottom` Adds 60px margin to the bottom
 * `medium-margin-bottom` Adds 40px margin to the bottom
 * `small-margin-bottom` Adds 20px margin to the bottom
 * `layoutfix` Use if content is overlapping from below
