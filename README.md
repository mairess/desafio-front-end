# Front-end Technical Challenge from [BeMobile](https://www.linkedin.com/company/betalenttech/)

This is BeMobile's Front-end technical challenge repository for selection processes.

If you got here by BeMobile Technical Challenge Form you can go ahead and do the challenge. Otherwise you have to follow BeMobile on [Linkedin](https://br.linkedin.com/company/bemobiletech), [Instagram](https://www.instagram.com/bemobile.tech/), [Facebook](https://www.facebook.com/bemobile.tech) or in [Telegram](https://t.me/be_tech_community) to stay updated and ensure you don't miss any job opportunity.

## Challenge

BeMobile Technical Challenge consists of building a table with data coming from json-server API.

### Mockup

The [Figma project](https://www.figma.com/file/yw6th52zE9bubewc6ayTg5/Teste-T%C3%A9cnico-Front-End-Be.?type=design&node-id=1%3A4&mode=dev&t=vVxs9eyKybrYmq4Z-1) for your reference. It includes styles, desktop and mobile views, and other guidelines that you should follow.

### Challenge Requirements

Must use React.js or Vanilla JS (plain JavaScript) to build the project.

External libraries are allowed, but we endorse to use them minimally.

Responsive layout.

The table must include the following columns:

- Image (user thumbnail)
- Name
- Role/position (employee job title)
- Date of Admission
- Phone

It must be possible to search data on the table using an input field. The search input must allow search by role/position, name, and phone number.

Dates and phone numbers must be formatted on the front end. Do not change API db.json.

## Run locally

To run this project locally, follow these steps:

### Prerequisites

Make sure you have the following installed on your machine:

[json-server](https://github.com/typicode/json-server)

This is needed to start json-server database, but if you don't have it, you can simply start database by running this.

```BASH
npx json-server db.json
```

### Steps:

1. Clone repository:

```BASH
git clone git@github.com:BeMobile/desafio-front-end.git

cd desafio-front-end
```

2. Install dependencies:

```BASH
npm install
```

3. Run database:

```BASH
# only if you have done json-server installation
json-server --watch db.json

# if you have not installed
npx json-server db.json

```

4. Run project:

```BASH
npm run dev
```

5. Access application at:

```BASH
http://localhost:5173/
```

## Run with Docker

### Prerequisites

Make sure you have the following installed on your machine:

[Docker](https://www.docker.com/get-started/)

### Steps:

1. Clone repository:

```BASH
git clone git@github.com:BeMobile/desafio-front-end.git

cd desafio-front-end
```

2. Run application:

```BASH
docker compose up -d --build 
```

3. Access application at:

```BASH
http://localhost:5173/
```