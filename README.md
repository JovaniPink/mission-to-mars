# Mission to Mars

> Web-scraping with Celery Task and delivering data in a Flask App.

## Web Scraping

Web scraping simplifies the process of extracting data from sources where APIs are not available. Scraping speeds up the data gathering process by automating steps and creating easy accessible scrapped data in many formats including CSV, JSON, or raw text.

Basically, web scraping saves you the trouble of manually downloading or copying any data and automates the whole process with programmatic tools.

Web Scraping Tools:

- Chrome Driver
- Splinter
- BeautifulSoup
- Pandas (forms)
- Mongo
- Celery
- Flask
- Bootstrap 4
- jQuery

Web scraping tool interest:

- selenium but still using Chrome Driver
- requests
- regex

#### NASA Mars News

* Scrape the NASA Mars News Site and collect the latest News Title and Paragraph Text

#### JPL Mars Space Images - Featured Image

* Visit the URL for the JPL Featured Space Image
* Use Splinter to navigate the site and find the image URL for the current Featured Mars Image and assign the URL string to a variable called `featured_image_url`
* Make sure to find the image URL to the full size `.jpg` image
* Make sure to save a complete URL string for this image

#### Mars Weather

* Visit the Mars Weather Twitter account and scrape the latest Mars Weather Tweet from the page
    * Save the Tweet text for the weather report as a variable called `mars_weather`

#### Mars Facts

* Visit the Mars Facts webpage and use Pandas to scrape the table containing facts about the planet including Diameter, Mass, etc.
* Use Pandas to convert the data to a HTML table string

#### Mars Hemispheres

* Visit the USGS Astrogeology site to obtain high resolution images for each of Mar's hemispheres
* Save both the image URL string for the full resolution hemisphere image, and the Hemisphere title containing the hemisphere name. 
    * Use a Python dictionary to store the data using the keys `img_url` and `title`
* Append the dictionary with the image URL string and the hemisphere title to a list
    * This list will contain one dictionary for each hemisphere



- Using well organized directories with comments
  - /notebooks # Holding climate_analysis.ipynb & SurfsUp_Challenge.ipynb
  - /resources # Folder of graphs created from the exploratory climate analysis
  - /templates # Jinja2 HTML template files with Tailwind
  - .editorconfig # .editorconfig to power some workflows in VS Code.
  - .gitignore # .gitignore
  - app_refactored # The flask app using the libraries above
  - app.py # The Module's Flask app but running through connextion
  - database.py # Following some basic best practice of breaking the functions into modules.
  - hawaii.db # Raw weather data
  - models.py # I went against the grain and practiced the declarative version of SQLAlchemy
  - openapi.yaml # This file is the actual file that connextion to power a proper OpenAPI spec and UI

## Usage

```powershell
PS ~/mission-to-mars/> mongod
```

```powershell
PS ~/mission-to-mars/> celery -A app.celery worker --pool=solo -l info
```

```powershell
PS ~/mission-to-mars/> $env:FLASK_APP = 'app'
PS ~/mission-to-mars/> $env:FLASK_ENV = 'development'
PS ~/mission-to-mars/> python app.py
```

## Routes

/
/


## Data Powering the Web app

* Use MongoDB with Flask templating to create a new HTML page that displays all of the information that was scraped from the URLs above
* Convert Jupyter Notebook into a Python Script called `scrape_mars.py` with a function called `scrape` that will execute all of the scraping code from above and return one Python Dictionary containing all of the scraped data
* Create a route called `/scrape` that will import the `scrape_mars.py` script and call the `scrape` function
    * Store the return value in Mongo as a Python Dictionary
* Create a root route `/` that will query the Mongo database and pass the Mars Data into an HTML template to display the data
* Create a template HTML file called `index.html` that will take the Mars Data Dictionary and display all of the data in the appropriate HTML elements

## Todo Checklist

A helpful checklist to gauge how your README is coming on what I would like to finish:

- [ ] Update the UI/UX.
- [ ] jQuery needs work.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
