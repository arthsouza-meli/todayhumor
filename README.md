# World Mood Today

[![Website](https://img.shields.io/website?url=https%3A%2F%2Fwww.worldmoodtoday.com)](https://www.worldmoodtoday.com)

World Mood Today is a simple web application that allows users to submit their mood and view the average mood of all users for the current day. The main goal of the project is to provide a snapshot of the world's mood at any given moment.

The website is hosted on an Amazon S3 bucket with restricted access to just Amazon CloudFront. The API is hosted on a Go server, with the domain `api.worldmoodtoday.com`.

## Live Demo

Visit [World Mood Today](https://www.worldmoodtoday.com) to see the live demo of the project.

## Features

- Users can submit their mood for the day
- The average mood of all users is displayed
- Countdown to the next submission opportunity
- Responsive design for both desktop and mobile devices

## Technologies

- [Front-end](https://github.com/arthsouza-meli/todayhumor): React, CSS
- [Back-end](https://github.com/arthsouza-meli/mood-api): Go 
- Deployment: Amazon S3, Amazon CloudFront,  GitHub Actions , Api Gateway, Route 53 and etc


## Deployment
This project is automatically deployed to an Amazon S3 bucket using GitHub Actions. The workflow is configured in the .github/workflows/deploy.yml file.

## Contributing
We welcome contributions to improve the project. If you have a feature request, bug report, or any suggestions, please open a new issue on the GitHub repository.

## About the Author

Arthur  an experienced software engineer with a strong background in full-stack development. He is passionate about creating innovative solutions and has demonstrated expertise in multiple programming languages and frameworks. Arthur is a dedicated developer who continuously seeks to improve his skills and contribute to the tech community. To learn more about Arthur and his work, you can visit his website to more information: [My personal website](www.arthurghz.com.br)
