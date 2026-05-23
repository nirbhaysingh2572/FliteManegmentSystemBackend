## How to setup the project in your local
    1. clone project
    2. install dependenceis
        - using     `npm install`
    3. create .env file 
    ```
        PORT = <your port>
    ```
    4. creat config.json at src/config/
        - and add code
    ```
        {
            "development": {
                "username": <your db username>,
                "password": <your db password>,
                "database": "FliteSearchDBdev",
                "host": "127.0.0.1",
                "dialect": "mysql"
            },
            
        }
    ```



### project structure
    - src/
        - index.js
        - controllers
        - model
        - repository
        - config
        - middeleware
        - service
        - utils
        - seeders
        


    - test/