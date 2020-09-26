# Mission to Mars

> Web-scraping with Python and delivering data in a Flask App.

## Web Scraping

Web scraping simplifies the process of extracting data from sources where APIs are not available. Scraping speeds up the data gathering process by automating steps and creating easy accessible scrapped data in many formats including CSV, JSON, or raw text.

Basically, web scraping saves you the trouble of manually downloading or copying any data and automates the whole process with programmatic tools.

Web Scraping Tools:



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
PS ~/mission-to-mars/> celery -A app.celery worker --pool=solo -l info
```

```powershell
PS ~/mission-to-mars/> $env:FLASK_APP = 'app'
PS ~/mission-to-mars/> $env:FLASK_ENV = 'development'
PS ~/mission-to-mars/> python app.py
```

## Endpoints

/api/v1.0/precipitation
/api/v1.0/stations
/api/v1.0/tobs
/api/v1.0/temp/2017-06-01/2017-06-30

## Data Powering the Web app

Using Python and SQLAlchemy in jupyter notebook to do basic climate analysis and data exploration of our hawaii.db database.

The module and module Challenge were basically Exploratory Climate Analysis:

- Script a query to retrieve the last 12 months of precipitation data.
- Select only the date and prcp values.
- Load the query results into a Pandas DataFrame and set the index to the date column.
- Sort the DataFrame values by date.
- Plot the results using the DataFrame plot method.
- Use Pandas to print the summary statistics for the precipitation data.

... included in the climate_analysis.ipynb & SurfsUp_Challenge.ipynb files. The code from the notebooks were used in app.py to power the endpoints in Flask, including the calc_temps function that accepts a start date and end date in the format %Y-%m-%d and return the minimum, average, and maximum temperatures for that range of dates.

## Todo Checklist

A helpful checklist to gauge how your README is coming on what I would like to finish:

- [ ] Finish the last three endpoints in pure openapi format.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
