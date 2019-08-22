class CreateResponses < ActiveRecord::Migration[5.2]
  def change
    create_table :responses do |t|
      t.integer :user_id, null: false, index: true
      t.integer :question_id, null: false, index: true
      t.integer :response, null: false
      t.timestamps
    end
  end
end
