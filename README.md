# FullStack-Development-Project

&emsp; A private repository for storing all files related to final project done as part of Full Stack Development course conducted by UST Global at Mar Baselios College of Engineering and Technology from 24/04/2023 to 28/04/2023.<br /><br /> 

File Structure <br />
&emsp;&emsp; CSS - style.css contains all code for styling of webpage <br />
&emsp;&emsp; HTML - stores all files for webpages<br />
&emsp;&emsp; /Express/Public - utility files<br />
&emsp;&emsp; Static - store static files<br />
&emsp;&emsp; MongoDB - Files related to database<br />

<br />
Utility Functions: <br />
1. connectionEstablishment() <br />
&emsp;&emsp; Establish connection to Database <br />
2. closeClient() <br />
&emsp;&emsp; Close connection to database <br />
3. compareDates(date1, date2) <br />
&emsp;&emsp; Returns True if date2 comes on or after date1 <br />
4. addUser (username, email, password) <br />
&emsp;&emsp; Registers a new user to Database <br />
5. loginUser(username, password) <br />
&emsp;&emsp; Login existing user after validating credentials <br />
6. fetchData(article_type, search_field, search_value) <br />
&emsp;&emsp; Fetches record(s) from Database according to given parameters <br />
7. hashPassword(plaintextPassword) <br />
&emsp;&emsp; Converts plaintext password to hashed format <br />
8. comparePassword(plaintextPassword, hash) <br />
&emsp;&emsp; Checks if plaintext password and hash is same <br />
9. editData(id, article_type, name, publicDate, author_id) <br />
&emsp;&emsp; Edit existing data by searching for specific id. If not found, inserted as a new record <br />
