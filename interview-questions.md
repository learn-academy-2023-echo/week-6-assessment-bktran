# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a Rails developer, I am creating an application with a model called Cohort and a model called Student. The relationship between these models is that a cohort has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer:
Since a Cohort can have many students and each Student can only belong to one Cohort, the foreign key would be in the Student model as cohort_id:integer to represent that the student is connected to a cohort. To add this foreign key, an update to the schema is needed through a migration

Researched answer:
Cohort and Student has a one-to-many relationship where Student can have 1 Cohort while a Cohort can have many students. This makes the foreign key to be on the Student model as cohort_id. To add this foreign key in the console: 

$ rails g migration AddColumnToStudent
This should generate a timestamp_AddColumntoStudent.rb file where we can define the change method to add in cohort_id
  def change
    add_column :students, :cohort_id, :integer
  end
$ rails db:migrate
This updates the schema after the changes are made

2. Which RESTful routes must always be passed params? Why?

Your answer:
Delete, Edit, Show, and Update. These routes need params because it references a specific instance.

Researched answer:
Destroy, Edit, Show, Update. In order to delete, update, edit, or show a specific instance Routes need to know which specific id to send the request in form of a param. Without this param, the server wouldn't know which instance is being referred to.

3. Name three rails generator commands. What is created by each?

Your answer:
$rails g model - This generates the model that we would like to work on. It creates the schema and and <model>.rb inside our models folder

$rails g controller - This generates the controller file for us to perform logic

$rails g migration - This generates a migration folder to make any changes to the model

Researched answer:
$rails g model - creates a migration file, a ruby model file, and test files

$rails g controller - creates a controller file under app and a view folder.

$rails g migration - creates a migrate directory where the name of a migration file starts with timestamp_MeaningfulName.rb

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students
=> "students#index"
This controller displays all students in the database

action: "POST" location: /students
=> "students#create"
This controller is to create new record of student data

action: "GET" location: /students/new
=> "students#new"
This controller displays a form to create a new record of student data

action: "GET" location: /students/2
=> "students#show"
This controller displays student record with an id = 2

action: "GET" location: /students/2/edit
=> "students#edit"
This controller displays student record with an id = 2 as a form to update

action: "PATCH" location: /students/2
=> "students#update"
This controller updates student record with id = 2 in the database

action: "DELETE" location: /students/2
=> "students#destroy"
This controller delete data of student record with id = 2

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. [Here is a resource](https://www.atlassian.com/agile/project-management/user-stories) to help you create your user stories.

1. As a user, I can see a list of ALL (index) tasks to do
2. As a user, I can DELETE any task
3. As a user, I can CREATE new task to the list
4. As a user, I can SHOW a specific task and its details
5. As a user, I can EDIT a task to change its details
6. As a user, I can UPDATE a task after editing or when its completed
7. As a user, I can see a NEW form to add to the list
8. As a user, I can order task by order of importance
9. As a user, I can set due dates
10. As a user, I can search for a task