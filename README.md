Adding the styling in the app
by default the browser provides some of the link for styling the app those are html anchor tag and so.
To add the styling by ourselfin the file global.css increasing the font page adding the background image to be none adding the layout to the home component updatin with the styling section the styling has the major developmnent it updates the container and the home down container at the same point. Even though using the banner componen but there is no use of adding the button in banner.js add a div around the button.
Adding the banner component
Appying the font in the document
link tag essentially have the properties that is being used some of them as 
rel- these have the value preload
href - allows us to link the resource
as- in this property the as=font is only helps to preload the file that wants to be present is actually a font
crossOrigin prop which is anonymous there are no credentials required
then learned the implemention of all these tags
Font Optimization
next/font will automatically optimize your fonts (including custom fonts) and remove external network requests for improved privacy and performance.
next/font includes built-in automatic self-hosting for any font file. This means you can optimally load web fonts with zero layout shift, thanks to the underlying CSS size-adjust property used.
This new font system also allows you to conveniently use all Google Fonts with performance and privacy in mind. CSS and font files are downloaded at build time and self-hosted with the rest of your static assets. No requests are sent to Google by the browser.
Documentation in next.js
in the vscode there need to create a new file
first need to create a class the next js keeps the copy of the document and document is the default import for the next js.
there need to create a html document and there need to add the head component.the head component used as the head code that should be common.
create a body tag inthe body there will be 2 thing main and next script.
Export to use it.
then restart the server after making the changes
In oder to apply the downloaded font
