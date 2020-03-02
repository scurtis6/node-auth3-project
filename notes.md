`npm init -yes`

The user schema should include: username, password and department. The department should be a string used to group the users. No need for a departments table or setting up relationships.

* POST	/api/register	Creates a user using the information sent inside the body of the request. Hash the password before saving the user to the database.
* POST	/api/login	Use the credentials sent inside the body to authenticate the user. On successful login, create a new JWT with the user id as the subject and send it back to the client. If login fails, respond with the correct status code and the message: 'You shall not pass!'
* GET	/api/users	If the user is logged in, respond with an array of all the users contained in the database. If the user is not logged in respond with the correct status code and the message: 'You shall not pass!'.


CASE is used to provide if-then-else type of logic to SQL. Its syntax is:

```sql
SELECT CASE ("column_name")
  WHEN "condition1" THEN "result1"
  WHEN "condition2" THEN "result2"
  ...
  [ELSE "resultN"]
  END
FROM "table_name"
```

```sql
SELECT customerid,
       firstname,
       lastname,
       CASE country 
           WHEN 'USA' 
               THEN 'Dosmetic' 
           ELSE 'Foreign' 
       END CustomerGroup
FROM 
    customers
ORDER BY 
    LastName,
    FirstName;
```

## How to install
- yarn
 - yarn create react-app <app-name> --template bushido-plus

- npm
 - npm init react-app <app-name> --template bushido-plus

- npx
 - npx create-react-app <app-name> --template bushido-plus

- global
 - If create-react-app is installed globally on your computer you can use this command:
 - create-react -app <app-name> --template bushido-plus