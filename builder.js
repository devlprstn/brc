import { LowSync, JSONFileSync } from 'lowdb'

const title = "This is a test"
const adapter = new JSONFileSync('file.json')
const db = new LowSync(adapter)

db.read()  //Load the content of the file into memory
db.data ||= { posts: [] } //default value

db.data.posts.push({ title }) //add data into the "collection"

db.write() //persist the data by saving it to the JSON file

//any Find-like operation is left to the skill of the user

let record = db.data.posts.find( p => p.title == "Hello world")

if(!record) {
  console.log("No data found!")
} else {
  console.log("== Record found ==")
  console.log(record)
}