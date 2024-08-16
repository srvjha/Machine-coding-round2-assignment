# React Project - Random User Profile, Random Jokes, and Cats Listing
Live Demo: [machine-round-2-assignment](https://machine-coding-round2-assignment.vercel.app)

## Overview

This React project includes three distinct tasks:

1. **Random User Profile**: Displays random user profiles with a refresh button, loading state, and interactive links.
2. **Random Jokes Tweet**: Shows random jokes with static author details, analytics, and a dynamic loading state.
3. **Cats Listing**: Presents a paginated list of cats with a horizontal scroll, loading state, and pagination control.

The base URL (`/`) redirects to the Random User Profile route.

## Features

### Random User Profile

- Matches component styling as per Figma design.
- Refresh button to fetch the next random user.
- Creative loading state for user profile cards.
- Hyperlinks for location and call open in a new tab.
- API: [Random User API](https://api.freeapi.app/api/v1/public/randomusers/user/random)

### Random Jokes Tweet

- Static author details (e.g., Elon Musk).
- Randomly generated timestamp, views, date, and other analytics.
- Loading state for joke tweet cards.
- New joke data on page reload replaces the tweet card content.
- API: [Random Jokes API](https://api.freeapi.app/api/v1/public/randomjokes/joke/random)

### Cats Listing

- Paginated list of horizontal scrolling cards with cat information.
- Creative loading state for cat cards.
- Pagination and limit settings to ensure all cats are listed.
- API: [Cats API](https://api.freeapi.app/api/v1/public/cats?page=1&limit=4)

## Setup and Installation

To set up and run this project locally:

1. **Clone the Repository**:

    ```bash
    git clone https://github.com/your-username/your-repository-name.git](https://github.com/srvjha/Machine-coding-round2-assignment)
    ```

2. **Navigate to the Project Directory**:

    ```bash
    cd Machine-coding-round2-assignment
    ```

3. **Install Dependencies**:

    ```bash
    npm install
    ```

4. **Start the Development Server**:

    ```bash
    npm start
    ```

    Open `http://localhost:5173` in your browser to view the application.

## Routes

- **Random User Profile**: `/random-user`
- **Random Jokes Tweet**: `/random-jokes`
- **Cats Listing**: `/cats-listing`

The base URL (`/`) redirects to `/random-user`.

## Branding

Just so you know – the branding logo is positioned according to the task requirements. Clicking the logo will open the [Chaicode website](https://chaicode.com).

## Screenshots

Here are some screenshots of the application:


![image](https://github.com/user-attachments/assets/aa8d2156-09af-43a2-8338-4e47f3ba2180)
![image](https://github.com/user-attachments/assets/d06919a6-3a52-4c98-9edd-d8188e0c78fc)


![image](https://github.com/user-attachments/assets/d7605d23-9426-425c-b778-2b6f1cf001a8)


## License

This project is licensed under the [MIT License](LICENSE).

## Contact

If you have any questions, feel free to contact me:

- **Email**: your-email@example.com
- **GitHub**: [srvjha](https://github.com/your-srvjha)
