# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Question.destroy_all
Response.destroy_all

require 'csv'
csv_text = File.read(Rails.root.join('lib', 'seeds', 'Questions.csv'))
csv = CSV.parse(csv_text, :headers => true, :encoding => 'ISO-8859-1')
csv.each do |row|
  question = Question.new
  question.question = row['Question']
  question.dimension = row['Dimension']
  question.direction = row['Direction']
  question.meaning = row['Meaning']
  question.save
end
