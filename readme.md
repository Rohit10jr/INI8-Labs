# Notes Application

This project is a Notes Application built with Django for the backend and React for the frontend. It allows users to create, read, update, and delete notes, along with user authentication features including registration and login.

## Features

- **User Authentication**: 
  - User registration
  - User login/logout
- **CRUD Operations for Notes**: 
  - Create a new note
  - View all notes
  - Update an existing note
  - Delete a note

## Prerequisites

- Python 3.x
- Node.js (for the frontend)
- npm or yarn (for managing JavaScript packages)

### Cloning the Repository

Clone the repository:

   ```bash
   git clone https://github.com/Rohit10jr/INI8-Labs.git
   ```

### Backend Setup
1. Create a virtual environment (if not already created):

```
python -m venv venv
```
2. Activate the virtual environment:

    On Windows:
    ```
    venv\Scripts\activate
    ```
    On macOS/Linux:
    ```
    source venv/bin/activate
    ```

3. Install the required packages:

```
pip install -r requirements.txt
```

4. Run database migrations:

```
python manage.py migrate
```

5. Create a superuser (for admin access):

```
python manage.py createsuperuser
```

6. Start the Django development server:

```
python manage.py runserver
```

### Frontend Setup

1. Open a new terminal window and navigate to the frontend directory:

```
cd frontend
```

2. Install the frontend dependencies:

```
npm install
```

3. Start the React development server:

```
npm start
```
