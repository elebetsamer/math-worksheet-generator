# Math Worksheet Generator

You can find the online version here: https://math-worksheet-generator.firebaseapp.com

This project is an angular application designed to generate basic math work sheets. I have a son in grade school and we like to keep him on top of his math skills, so I created this to help with that process. I found some static worksheets online, but once you go through them, you need to either repeat them again or find some more somewhere else. I also found pretty good worksheet generator from [The Teachers Corner](https://worksheets.theteacherscorner.net/make-your-own/math-worksheets/basic-math/math.php) as well, but I didn't like some things about it, including the need to set the settings every time I created a worksheet. I figured the easiest solution was to just create on myself with the options I needed and liked. So this project is the outcome of a few nights work.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.1.

## TODO *(this isn't in any sort of priority order)*

- [ ] Responsive design (not that it really needs it)
- [ ] Add loading indicator when loading the worksheet from firebase
- [ ] Add option to save/load default settings
- [ ] Add option to save/load preset settings: so you can create settings for addition, subtraction, etc separately
- [ ] Add "no carrying" option to addition problems
- [ ] Add "no borrowing" option to subtraction problems
- [ ] Add horizontal display option
- [ ] Add option to hide the problem number
- [ ] Add option to change the way the problem number is displayed:  
*1.*  
*1)*  
*(1)*  
*bordered number*
*circled number*  
*a.* (alpha numeric)  
*I.* (roman numeral)
- [ ] Add option to insert page break after *x* number of problems. This could be used to generate multi-page worksheets cleanly.
- [ ] Add login/sign up option, instead of using anonymous authentication
- [ ] Add metadata attributes: created date, updated date, user
- [ ] Add screen to show all previously generated worksheets for logged in user (ex: My Worksheets)
- [ ] Add screen to show all previously generated worksheets for a user (ex: Eric's Worksheets)
- [ ] Add screen to show all previously generated worksheets for all users

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
