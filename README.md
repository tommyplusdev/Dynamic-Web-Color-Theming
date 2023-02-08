# Random-Color-Palette
generate a random color palette!

![colorpalette](https://user-images.githubusercontent.com/116316499/217418261-fd32ce79-c453-4d7c-bc88-94541300179c.png)

Live Demo

https://user-images.githubusercontent.com/116316499/217419914-7f35970b-f98c-41f2-81c0-193d85eaee4c.mp4

## About

This uses the Colormind API to fetch and store the colors in an empty color palette.

### About the API

Colormind's API is elementary with barebones access to colours and selection, so I found this to be a good fit for this mini project.
I designed this web app with those constraints and customised the UI to highlight the API's most valuable data response, leaving the end user with a satisfactory result of a few seconds.
After all, design is all about fun in those small things.

### Why use an outdated API?

Because it was specifically outdated, I wanted to see how XML HTTP Requests were handled. It's also for this reason why there's no live demo of this web app (just a video preview).
 Additionally, Colormind's endpoint is configured in HTTP-only with an invalid certificate, meaning it should not be used in a real scenario due to security concerns.

If there are any XML HTTP Requests (`XHRs`) in projects I'd encounter in the future, I'll be aware of how to deal with them.

## Disclaimer
This is for Personal Use, in accordance with the API's license-- it is not to be used commercially.

Please visit http://colormind.io/api-access/ for more information.
