#  API Documentation

## Connecting to Database 

Create a `Server.js` to connect to the mongodb 

Installing the Required Modules
```npm install mongoose cors express```

Connecting to Mongodb Compass
const uri = 'mongodb://localhost:27017/';

Connecting to Mongodb Atlas
const uri = 'mongodb+srv://<db_username>:<db_password>@cluster0.c34fdbw.mongodb.net/appName=Cluster0';

Replacing the db_username with actual database user name and password from the atlas


In the Network and Securtiy add access from anywhere to make it access from anywhere 

Authentication API's


Authentication
1. Register USer
##Register User
app.post('/auth/register', async (req, res) => {
  // Validate input, hash password, insert user doc into 'users' collection
});

2. Login User
##Login User
app.post('/api/auth/login', async (req, res) => {
  // Validate credentials, issue JWT token
});
3. View Profile
4. Logout

User Management
5. List Users
6. View User Details

Service Categories
7. Create Category
8. List Category
9. Update Category

Service Requests
10. Create Request
11. List Own Requests
##List Request
app.get('/requests', async (req, res) => {
  const requests = await db.collection('requests').find({ created_by: req.user.id }).toArray();
  res.json({ success: true, data: requests });
});

12. View Request Details

13. Assign Request
14. Update Status
15. Cancel Request

Comments
16. Add Comment
##Add Comments 
app.post('/requests/:id/comments', async (req, res) => {
  // Insert new comment linked to request
});

17. List Comments
18. Summary Report
19. Category-Wise Report
