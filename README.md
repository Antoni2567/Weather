# Weather app

## Project Description

We built a weather forecasting app using the API. The data service takes in the zipcode and uses the geocoding API to return the latitude/longitude coordinates, which are then piped as parameters into the one-call API. Anyone can enter their zipcode in the search bar and get the location name, historical 5 day data, 7 day forecast, alerts, and hourly trends. There is also the option to create an account with and permanently assign a zipcode to the user. Once logged in, the user can change their zipcode and it will update in the database. The navbar uses an ng-template to display a log out or login depending on the session. All the data is stored locally on the client’s browser. 

## Technologies Used

* Angular - version 10
* Bootstrap - 4.6
* SpringBoot
* MySQL
* HTML
* JS
* CSS

## Features

List of features ready and TODOs for future development
* Can input a zip code and see the data for any location
* View past weather information as well as future anywhere
* Can create an account and have access permanently
* Can view emergency alerts and hourly forecast
* The app takes into account time and shows the weather at night or day depending on when the website is accessed

To-do list:
* Some zipcodes do not exist- maybe find a way to filter those
* Currently the app is for US only. Maybe make it global in the future
* Add more weather related information and an option to include more APIs to improve accuracy

## Getting Started
   
(include git clone command)
(include all environment setup steps)

> Be sure to include BOTH Windows and Unix command  
> Be sure to mention if the commands only work on a specific platform (eg. AWS, GCP)

- All the `code` required to get started
- Images of what it should look like

## Usage

> Here, you instruct other people on how to use your project after they’ve installed it. This would also be a good place to include screenshots of your project in action.

## Contributors

Antonio Lewis & Nikhil Pradeep

## License

This project uses the following license: [<license_name>](<link>).
