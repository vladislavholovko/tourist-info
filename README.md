## ES - Tourist Info
## POST
```
/auth/register (fullName, email, password)
/auth/sign_in (email, password)
/weather/get_location (address)
/weather/get_weather (lat, lng, date)
/tour/get_list (category, limit)
```
# WEB PART
To run web application do this steps:
 - change API_URL in /src/constants/app to your api address fro example (API_URL = `http://localhost:3000/`)
 - in terminal run command: npm start
=======
**list of available categories**
* discovering
* eating
* going_out
* hiking
* playing
* relaxing
* shopping
* sightseeing
* sleeping
* doing_sports
* traveling