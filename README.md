<p align="center">
  <a href="">
    <img src="./src/assets/brand-logo.webp" alt="RBE logo" target="_blank" width="200" height="165">
  </a>
</p>
<h3 align="center">Handyman</h3>

<p align="center">
  <a href="https://handyman008.netlify.app/" target="_blank"><strong ><span Style="color: blue">Live Demo</span> </strong></a>
</p>
  <br>
  <br>

# Handyman - home appliance services

This project is a learning experience to get my feet wet at frontend development.
its real world application is to provide customers with at-home appliance repair services as well as a small shop for appliance replacements.

## Built with

[React v18.2.0](https://beta.reactjs.org/)  
[React Router v6.3.0](https://reactrouter.com/en/main)  
[css](https://www.w3.org/Style/CSS/current-work)

## Setup & Deployment

to launch this project locally on your machine run the following commands :

```
git clone https://github.com/Mo-bakhtiari/handyman.com.git
npm install
npm start
```

this will run the project in development mode. to make a production build of the project to be deployed you can run:

```
npm run build
```

since the project was initialized by [CRA](https://create-react-app.dev/) this will automatically bundle React in production mode.
you can now deploy *build* folder to a host server of your choice.

## Performance considerations

chances are to build as small as a single page website that loads much slower than a gigantic website like Amazon if you are not careful enough with the efficiency of your code. to avoid such scandal i implemented code splitting technique and took the chrome Lighthouse advices.

### Code Splitting

you can read about code splitting [Here]( https://facebook.github.io/create-react-app/docs/code-splitting).  

### Lighthouse Advices

based on Lighthouse first recommendation, [Serve images in next-gen formats](https://web.dev/uses-webp-images/?utm_source=lighthouse&utm_medium=devtools), images were saved in [WebP](https://developers.google.com/speed/webp/) format.  
the second recommendation was to [Eliminate render-blocking resources](https://web.dev/render-blocking-resources/?utm_source=lighthouse&utm_medium=devtools) and by taking that, external links for importing fonts and icons were removed and those fonts and icons were included locally in the project.
as the result of these enhancements performance score was doubled. 

## Source of Design 

front design was adopted from [Tamironline](https://tamironline.com/) website but some pages were omitted to make a reasonable amount of work out of it.